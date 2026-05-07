import { Injectable } from '@angular/core';
import { AnonymousUserConstants } from '../constants/anonymous-user-constants';
import { NewUserConstants } from '../constants/new-user-constants';
import { WellKnownIds } from '../constants/well-knowns-ids';
import { DiagramCompactDTO } from '../models/dto/diagramCompactDTO';
import { DiagramDTO } from '../models/dto/diagramDTO';
import { TemplateCompactDTO } from '../models/dto/templateCompactDTO';
import { TemplateDTO } from '../models/dto/templateDTO';
import { UserProfileDTO } from '../models/dto/userProfileDTO';

@Injectable({
  providedIn: 'root'
})
export class LocalApiStorageService {
  private readonly databaseName = 'cloudskew-local';
  private readonly databaseVersion = 1;
  private readonly userProfilesStoreName = 'userProfiles';
  private readonly diagramsStoreName = 'diagrams';
  private readonly templatesStoreName = 'templates';

  private databasePromise?: Promise<IDBDatabase>;

  async userProfilesListAsync(): Promise<UserProfileDTO[]> {
    return this.getAll<UserProfileDTO>(this.userProfilesStoreName);
  }

  async userProfileGetAsync(user: string): Promise<UserProfileDTO | undefined> {
    return this.get<UserProfileDTO>(this.userProfilesStoreName, user);
  }

  async userProfileSaveAsync(userProfile: UserProfileDTO): Promise<UserProfileDTO> {
    const profile = {
      ...userProfile,
      email: userProfile.email || AnonymousUserConstants.email,
      emailMD5: userProfile.emailMD5 || AnonymousUserConstants.emailMD5,
      lastUpdatedUTC: new Date(),
      name: userProfile.name || AnonymousUserConstants.displayName,
      subscriptionName: userProfile.subscriptionName || NewUserConstants.subscriptionName,
    } as UserProfileDTO;

    await this.put(this.userProfilesStoreName, profile);
    return profile;
  }

  async userProfileUpdatePreferencesAsync(user: string, modifiedPreferences: number): Promise<void> {
    const existingProfile = await this.userProfileGetAsync(user);
    const profile = existingProfile || new UserProfileDTO(
      NewUserConstants.subscriptionName,
      AnonymousUserConstants.email,
      user,
      modifiedPreferences,
      true,
      AnonymousUserConstants.displayName,
      '',
      new Date(),
    );

    profile.preferences = modifiedPreferences;
    profile.lastUpdatedUTC = new Date();
    await this.userProfileSaveAsync(profile);
  }

  async diagramGetLastUpdatedAsync(user: string): Promise<DiagramDTO | undefined> {
    const diagrams = await this.getUserDiagrams(user);
    return diagrams
      .sort((left, right) => this.getTicks(right.lastUpdatedUTC) - this.getTicks(left.lastUpdatedUTC))[0];
  }

  async diagramsListAsync(user: string): Promise<DiagramCompactDTO[]> {
    const diagrams = await this.getUserDiagrams(user);
    return diagrams
      .sort((left, right) => this.getTicks(right.lastUpdatedUTC) - this.getTicks(left.lastUpdatedUTC))
      .map(diagram => this.toDiagramCompactDTO(diagram));
  }

  async diagramGetAsync(user: string, diagramId: string): Promise<DiagramDTO | undefined> {
    const diagram = await this.get<DiagramDTO>(this.diagramsStoreName, diagramId);
    return diagram && diagram.emailMD5 === user ? diagram : undefined;
  }

  async diagramGetByNameAsync(user: string, diagramName: string): Promise<DiagramCompactDTO | undefined> {
    const normalizedName = this.normalizeName(diagramName);
    const diagrams = await this.getUserDiagrams(user);
    const diagram = diagrams.find(item => this.normalizeName(item.name) === normalizedName);
    return diagram ? this.toDiagramCompactDTO(diagram) : undefined;
  }

  async diagramCreateAsync(user: string, templateId: string): Promise<DiagramDTO> {
    const template = templateId === WellKnownIds.BlankTemplateId
      ? undefined
      : await this.templateGetAsync(user, templateId);
    const now = new Date();
    const diagramName = await this.getUniqueDiagramName(user, template?.name || 'Untitled Diagram');
    const diagram = new DiagramDTO(
      this.createId(),
      diagramName,
      template?.notes,
      'private',
      template?.diagramDetails,
      template?.documentDetails,
      template?.thumbnailUrl,
      now,
      user,
    );

    await this.put(this.diagramsStoreName, diagram);
    return diagram;
  }

  async diagramImportAsync(user: string, sourceTemplate: TemplateDTO): Promise<DiagramDTO> {
    const now = new Date();
    const diagramName = await this.getUniqueDiagramName(user, this.removeJsonExtension(sourceTemplate.name || 'Imported Diagram'));
    const diagram = new DiagramDTO(
      this.createId(),
      diagramName,
      sourceTemplate.notes,
      'private',
      sourceTemplate.diagramDetails,
      sourceTemplate.documentDetails,
      sourceTemplate.thumbnailUrl,
      now,
      user,
    );

    await this.put(this.diagramsStoreName, diagram);
    return diagram;
  }

  async diagramUpdateAsync(user: string, existingDiagramId: string, modifiedDiagram: DiagramDTO): Promise<void> {
    const diagram = {
      ...modifiedDiagram,
      id: existingDiagramId,
      emailMD5: user,
      lastUpdatedUTC: new Date(),
      visibility: modifiedDiagram.visibility || 'private',
    } as DiagramDTO;

    await this.put(this.diagramsStoreName, diagram);
  }

  async diagramDeleteAsync(user: string, diagramId: string): Promise<void> {
    const diagram = await this.diagramGetAsync(user, diagramId);
    if (diagram) {
      await this.delete(this.diagramsStoreName, diagramId);
    }
  }

  async diagramUpdateThumbnailAsync(user: string, diagramId: string, thumbnailUrl?: string): Promise<void> {
    const diagram = await this.diagramGetAsync(user, diagramId);
    if (!diagram) {
      return;
    }

    diagram.thumbnailUrl = thumbnailUrl || diagram.thumbnailUrl;
    diagram.lastUpdatedUTC = new Date();
    await this.put(this.diagramsStoreName, diagram);
  }

  async templatesListAsync(user: string): Promise<TemplateCompactDTO[]> {
    const templates = await this.getUserTemplates(user);
    return templates
      .sort((left, right) => this.getTicks(right.lastUpdatedUTC) - this.getTicks(left.lastUpdatedUTC))
      .map(template => this.toTemplateCompactDTO(template));
  }

  async templateGetAsync(user: string, templateId: string): Promise<TemplateDTO | undefined> {
    const template = await this.get<TemplateDTO>(this.templatesStoreName, templateId);
    return template && template.emailMD5 === user ? template : undefined;
  }

  async templateGetByNameAsync(user: string, templateName: string): Promise<TemplateCompactDTO | undefined> {
    const normalizedName = this.normalizeName(templateName);
    const templates = await this.getUserTemplates(user);
    const template = templates.find(item => this.normalizeName(item.name) === normalizedName);
    return template ? this.toTemplateCompactDTO(template) : undefined;
  }

  async templateCreateAsync(user: string, diagramId: string, newTemplateName: string): Promise<TemplateDTO> {
    const sourceDiagram = await this.diagramGetAsync(user, diagramId);
    if (!sourceDiagram) {
      throw new Error(`Diagram not found: ${diagramId}`);
    }

    const now = new Date();
    const template = new TemplateDTO(
      this.createId(),
      await this.getUniqueTemplateName(user, newTemplateName),
      sourceDiagram.notes,
      'private',
      sourceDiagram.diagramDetails,
      sourceDiagram.documentDetails,
      sourceDiagram.thumbnailUrl,
      now,
      user,
    );

    await this.put(this.templatesStoreName, template);
    return template;
  }

  async templateUpdateAsync(user: string, existingTemplateId: string, modifiedTemplate: TemplateCompactDTO): Promise<void> {
    const existingTemplate = await this.templateGetAsync(user, existingTemplateId);
    const template = {
      ...(existingTemplate || {}),
      ...modifiedTemplate,
      id: existingTemplateId,
      emailMD5: user,
      lastUpdatedUTC: new Date(),
      visibility: modifiedTemplate.visibility || existingTemplate?.visibility || 'private',
    } as TemplateDTO;

    await this.put(this.templatesStoreName, template);
  }

  async templateDeleteAsync(user: string, templateId: string): Promise<void> {
    const template = await this.templateGetAsync(user, templateId);
    if (template) {
      await this.delete(this.templatesStoreName, templateId);
    }
  }

  private async getUserDiagrams(user: string): Promise<DiagramDTO[]> {
    const diagrams = await this.getAll<DiagramDTO>(this.diagramsStoreName);
    return diagrams.filter(diagram => diagram.emailMD5 === user);
  }

  private async getUserTemplates(user: string): Promise<TemplateDTO[]> {
    const templates = await this.getAll<TemplateDTO>(this.templatesStoreName);
    return templates.filter(template => template.emailMD5 === user);
  }

  private toDiagramCompactDTO(diagram: DiagramDTO): DiagramCompactDTO {
    return new DiagramCompactDTO(
      diagram.id,
      diagram.name,
      diagram.notes,
      diagram.visibility,
      diagram.thumbnailUrl,
      diagram.lastUpdatedUTC,
      diagram.emailMD5,
    );
  }

  private toTemplateCompactDTO(template: TemplateDTO): TemplateCompactDTO {
    return new TemplateCompactDTO(
      template.id,
      template.name,
      template.notes,
      template.visibility,
      template.thumbnailUrl,
      template.lastUpdatedUTC,
      template.emailMD5,
    );
  }

  private async getUniqueDiagramName(user: string, requestedName: string): Promise<string> {
    const existingNames = (await this.getUserDiagrams(user)).map(diagram => this.normalizeName(diagram.name));
    return this.getUniqueName(requestedName, existingNames);
  }

  private async getUniqueTemplateName(user: string, requestedName: string): Promise<string> {
    const existingNames = (await this.getUserTemplates(user)).map(template => this.normalizeName(template.name));
    return this.getUniqueName(requestedName, existingNames);
  }

  private getUniqueName(requestedName: string, existingNames: string[]): string {
    const baseName = (requestedName || 'Untitled Diagram').trim();
    let candidate = baseName;
    let suffix = 2;

    while (existingNames.includes(this.normalizeName(candidate))) {
      candidate = `${baseName} ${suffix}`;
      suffix++;
    }

    return candidate;
  }

  private removeJsonExtension(fileName: string): string {
    return fileName.replace(/\.json$/i, '');
  }

  private normalizeName(name: string): string {
    return (name || '').trim().toLocaleLowerCase();
  }

  private getTicks(date: Date | string | undefined): number {
    return date ? new Date(date).getTime() : 0;
  }

  private createId(): string {
    return crypto.randomUUID
      ? crypto.randomUUID()
      : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, token => {
        const random = Math.random() * 16 | 0;
        const value = token === 'x' ? random : (random & 0x3 | 0x8);
        return value.toString(16);
      });
  }

  private async openDatabase(): Promise<IDBDatabase> {
    if (!this.databasePromise) {
      this.databasePromise = new Promise<IDBDatabase>((resolve, reject) => {
        const request = indexedDB.open(this.databaseName, this.databaseVersion);

        request.onupgradeneeded = () => {
          const database = request.result;
          this.createStore(database, this.userProfilesStoreName, 'emailMD5');
          this.createStore(database, this.diagramsStoreName, 'id');
          this.createStore(database, this.templatesStoreName, 'id');
        };

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
        request.onblocked = () => reject(new Error('CloudSkew local database upgrade was blocked.'));
      });
    }

    return this.databasePromise;
  }

  private createStore(database: IDBDatabase, storeName: string, keyPath: string) {
    if (!database.objectStoreNames.contains(storeName)) {
      database.createObjectStore(storeName, { keyPath });
    }
  }

  private async get<T>(storeName: string, key: IDBValidKey): Promise<T | undefined> {
    return this.request<T | undefined>(storeName, 'readonly', store => store.get(key));
  }

  private async getAll<T>(storeName: string): Promise<T[]> {
    return this.request<T[]>(storeName, 'readonly', store => store.getAll());
  }

  private async put<T>(storeName: string, value: T): Promise<void> {
    await this.request<IDBValidKey>(storeName, 'readwrite', store => store.put(value));
  }

  private async delete(storeName: string, key: IDBValidKey): Promise<void> {
    await this.request<undefined>(storeName, 'readwrite', store => store.delete(key));
  }

  private async request<T>(
    storeName: string,
    mode: IDBTransactionMode,
    operation: (store: IDBObjectStore) => IDBRequest,
  ): Promise<T> {
    const database = await this.openDatabase();

    return new Promise<T>((resolve, reject) => {
      const transaction = database.transaction(storeName, mode);
      const store = transaction.objectStore(storeName);
      const request = operation(store);

      request.onsuccess = () => resolve(request.result as T);
      request.onerror = () => reject(request.error);
      transaction.onerror = () => reject(transaction.error);
      transaction.onabort = () => reject(transaction.error);
    });
  }
}

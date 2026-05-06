import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  DOCUMENT,
  PLATFORM_ID,
  inject,
  input,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { externalUrls, heroTypewriterWords } from '../../data/landing-content';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly windowRef = this.document.defaultView;

  private timeoutId: number | undefined;
  private wordIndex = 0;
  private characterIndex = heroTypewriterWords[0].length;
  private deleting = false;

  readonly heroImageUrl = input.required<string>();

  protected readonly appUrl = externalUrls.appUrl;
  protected readonly animatedWord = signal<string>(heroTypewriterWords[0]);

  constructor() {
    if (!isPlatformBrowser(this.platformId) || !this.windowRef) {
      return;
    }

    const browserWindow = this.windowRef;

    this.destroyRef.onDestroy(() => {
      if (this.timeoutId !== undefined) {
        browserWindow.clearTimeout(this.timeoutId);
      }
    });

    this.scheduleTick(2000);
  }

  private scheduleTick(delay: number): void {
    if (!this.windowRef) {
      return;
    }

    this.timeoutId = this.windowRef.setTimeout(() => this.tick(), delay);
  }

  private tick(): void {
    const currentWord = heroTypewriterWords[this.wordIndex];

    if (this.deleting) {
      this.characterIndex -= 1;
      this.animatedWord.set(currentWord.slice(0, this.characterIndex));

      if (this.characterIndex === 0) {
        this.deleting = false;
        this.wordIndex = (this.wordIndex + 1) % heroTypewriterWords.length;
        this.scheduleTick(200);
        return;
      }

      this.scheduleTick(30);
      return;
    }

    if (this.characterIndex < currentWord.length) {
      this.characterIndex += 1;
      this.animatedWord.set(currentWord.slice(0, this.characterIndex));
      this.scheduleTick(100);
      return;
    }

    this.deleting = true;
    this.scheduleTick(2000);
  }
}

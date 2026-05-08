import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PropertiesbarComponent } from './propertiesbar.component';

describe('PropertiesbarComponent', () => {
  let fixture: ComponentFixture<PropertiesbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertiesbarComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(PropertiesbarComponent);
    fixture.detectChanges();
  });

  // #region Positive Cases

  it('should render the visual properties editor inside the properties rail wrapper', () => {
    const host = fixture.nativeElement as HTMLElement;

    expect(host.querySelector('.propertiesbarControl app-visual-properties-editor')).not.toBeNull();
  });

  // #endregion
});

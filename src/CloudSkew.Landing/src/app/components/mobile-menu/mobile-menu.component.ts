import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { externalUrls } from '../../data/landing-content';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileMenuComponent {
  readonly navigateRequested = output<void>();

  protected readonly externalUrls = externalUrls;

  protected onNavigate(): void {
    this.navigateRequested.emit();
  }
}

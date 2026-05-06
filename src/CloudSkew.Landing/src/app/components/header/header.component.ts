import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { externalUrls } from '../../data/landing-content';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly mobileMenuOpen = input(false);
  readonly menuRequested = output<void>();

  protected readonly externalUrls = externalUrls;
}

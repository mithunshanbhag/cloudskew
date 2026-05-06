import { ChangeDetectionStrategy, Component } from '@angular/core';
import { externalUrls } from '../../data/landing-content';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly externalUrls = externalUrls;
  protected readonly emailText = 'support@cloudskew.com';
  protected readonly githubText = 'Report an issue on GitHub';
  protected readonly twitterText = 'Twitter';
  protected readonly youtubeText = 'YouTube';
}

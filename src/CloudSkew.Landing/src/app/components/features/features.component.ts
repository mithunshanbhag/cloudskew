import { ChangeDetectionStrategy, Component } from '@angular/core';
import { featureItems } from '../../data/landing-content';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesComponent {
  protected readonly featureItems = featureItems;
}

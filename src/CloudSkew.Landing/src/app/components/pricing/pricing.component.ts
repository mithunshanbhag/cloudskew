import { ChangeDetectionStrategy, Component } from '@angular/core';
import { externalUrls, pricingPlans } from '../../data/landing-content';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingComponent {
  protected readonly pricingPlans = pricingPlans;
  protected readonly externalUrls = externalUrls;
}

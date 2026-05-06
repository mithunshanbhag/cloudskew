import { ChangeDetectionStrategy, Component } from '@angular/core';
import { testimonialItems } from '../../data/landing-content';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {
  protected readonly testimonialItems = testimonialItems;
}

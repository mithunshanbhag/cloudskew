import { ChangeDetectionStrategy, Component } from '@angular/core';
import { galleryItems } from '../../data/landing-content';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrl: './samples.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SamplesComponent {
  protected readonly galleryItems = galleryItems;
}

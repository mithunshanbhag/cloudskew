import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { FeaturesComponent } from '../../components/features/features.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { MobileMenuComponent } from '../../components/mobile-menu/mobile-menu.component';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { SamplesComponent } from '../../components/samples/samples.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { getPageCustomization, landingMetaDescription } from '../../data/landing-content';

@Component({
  selector: 'app-landing-page',
  imports: [
    FeaturesComponent,
    FooterComponent,
    HeaderComponent,
    HeroComponent,
    MobileMenuComponent,
    PricingComponent,
    SamplesComponent,
    TestimonialsComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'closeMobileMenu()',
  },
})
export class LandingPageComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  private readonly solutionId = toSignal(
    this.activatedRoute.paramMap.pipe(map((params) => params.get('solutionId'))),
    { initialValue: this.activatedRoute.snapshot.paramMap.get('solutionId') },
  );

  protected readonly isMobileMenuOpen = signal(false);
  protected readonly currentPageCustomization = computed(() => getPageCustomization(this.solutionId()));

  constructor() {
    effect(() => {
      const pageCustomization = this.currentPageCustomization();

      this.title.setTitle(pageCustomization.pageTitle);
      this.meta.updateTag({ name: 'description', content: landingMetaDescription });
      this.meta.updateTag({ property: 'og:title', content: pageCustomization.pageTitle });
      this.meta.updateTag({ property: 'og:description', content: landingMetaDescription });
      this.meta.updateTag({ property: 'og:image', content: pageCustomization.heroImageUrl });
    });
  }

  protected openMobileMenu(): void {
    this.isMobileMenuOpen.set(true);
  }

  protected closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}

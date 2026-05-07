import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { FeaturesComponent } from './components/features/features.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { SamplesComponent } from './components/samples/samples.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

// Note: If you modify any routes here, please be sure to update the 'routes.txt', 'sitemap.txt' files accordingly.
// Context: https://angular.io/guide/prerendering#prerendering-dynamic-routes
const routes: Routes = [
  { path: 'solutions/:solutionId', component: HeroComponent, },
  { path: '', component: HeroComponent, }, // default route
  { path: '**', redirectTo: '/', }, // wildcard route
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    FeaturesComponent,
    PricingComponent,
    AboutComponent,
    TestimonialsComponent,
    SamplesComponent,
    MobileMenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64]
    } as ExtraOptions),
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

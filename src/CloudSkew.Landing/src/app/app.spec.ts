import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { getPageCustomization, solutionRouteIds } from './data/landing-content';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

describe('landing content', () => {
  //#region Positive cases

  it('should return the default page customization when no solution is specified', () => {
    const pageCustomization = getPageCustomization(null);

    expect(pageCustomization.pageTitle).toBe('Online Diagram, Flowchart Maker | CloudSkew');
    expect(pageCustomization.heroImageUrl).toBe('/assets/misc/landing-page-hero-3.png');
  });

  it('should expose all legacy solution routes for prerendering', () => {
    expect(solutionRouteIds).toEqual([
      'draw-alibaba-cloud-architecture-diagrams-online',
      'draw-aws-architecture-diagrams-online',
      'draw-azure-architecture-diagrams-online',
      'draw-cloud-architecture-diagrams-online',
      'draw-gcp-architecture-diagrams-online',
      'draw-google-cloud-architecture-diagrams-online',
      'draw-kubernetes-architecture-diagrams-online',
      'draw-multi-cloud-architecture-diagrams-online',
      'draw-oci-architecture-diagrams-online',
      'draw-oracle-cloud-architecture-diagrams-online',
    ]);
  });

  //#endregion

  //#region Negative cases

  it('should fall back to the default customization for unknown routes', () => {
    const pageCustomization = getPageCustomization('not-a-real-solution');

    expect(pageCustomization.pageTitle).toBe('Online Diagram, Flowchart Maker | CloudSkew');
    expect(pageCustomization.heroImageUrl).toBe('/assets/misc/landing-page-hero-3.png');
  });

  //#endregion
});

describe('LandingPageComponent', () => {
  let paramMapSubject: BehaviorSubject<ReturnType<typeof convertToParamMap>>;

  beforeEach(async () => {
    paramMapSubject = new BehaviorSubject(convertToParamMap({}));

    await TestBed.configureTestingModule({
      imports: [LandingPageComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: paramMapSubject.asObservable(),
            snapshot: {
              paramMap: convertToParamMap({}),
            },
          },
        },
      ],
    }).compileComponents();
  });

  //#region Positive cases

  it('should render the landing page sections for the default route', () => {
    const fixture = TestBed.createComponent(LandingPageComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#hero')).toBeTruthy();
    expect(compiled.querySelector('#features')).toBeTruthy();
    expect(compiled.querySelector('#samples')).toBeTruthy();
    expect(compiled.querySelector('#testimonials')).toBeTruthy();
    expect(compiled.querySelector('#pricing')).toBeTruthy();
    expect(compiled.querySelector('#footer')).toBeTruthy();

    fixture.destroy();
  });

  it('should update the document title for a known solution route', () => {
    const fixture = TestBed.createComponent(LandingPageComponent);
    fixture.detectChanges();

    paramMapSubject.next(convertToParamMap({ solutionId: 'draw-gcp-architecture-diagrams-online' }));
    fixture.detectChanges();

    expect(document.title).toBe('Free GCP Architecture Diagram Tool | CloudSkew');

    fixture.destroy();
  });

  //#endregion
});

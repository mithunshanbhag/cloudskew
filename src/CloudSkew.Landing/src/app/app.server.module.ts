import { NgModule } from '@angular/core';
import { PrerenderFallback, RenderMode, ServerRoute, provideServerRendering, withRoutes } from '@angular/ssr';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { SolutionRoutes } from './constants/solution-routes';

const solutionRouteIds = [
  SolutionRoutes.ALIBABA1,
  SolutionRoutes.AWS1,
  SolutionRoutes.AZURE1,
  SolutionRoutes.CLOUD1,
  SolutionRoutes.GCP1,
  SolutionRoutes.GCP2,
  SolutionRoutes.K8S1,
  SolutionRoutes.MULTICLOUD1,
  SolutionRoutes.OCI1,
  SolutionRoutes.OCI2,
];

const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'solutions/:solutionId',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.None,
    getPrerenderParams: async () => solutionRouteIds.map((solutionId) => ({ solutionId })),
  },
  {
    path: '**',
    renderMode: RenderMode.Client,
  },
];

@NgModule({
  imports: [
    AppModule,
  ],
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }

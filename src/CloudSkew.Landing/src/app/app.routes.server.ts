import { RenderMode, ServerRoute } from '@angular/ssr';
import { solutionRouteIds } from './data/landing-content';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'solutions/:solutionId',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return solutionRouteIds.map((solutionId) => ({ solutionId }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];

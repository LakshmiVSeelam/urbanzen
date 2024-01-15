import { Routes } from '@angular/router';
import { LandComponent } from './experience/land/land.component';
import { ArchitectureComponent } from './experience/architecture/architecture.component';
import { InteriorsComponent } from './experience/interiors/interiors.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'portfolio',
    title: 'Portfolio',
    loadComponent: () =>
      import('./portfolio/portfolio.component').then(
        (m) => m.PortfolioComponent
      ),
  },
  {
    path: 'experience',
    title: 'Experience',
    loadComponent: () =>
      import('./experience/experience.component').then(
        (m) => m.ExperienceComponent
      ),
    children: [
      { path: 'land', component: LandComponent },
      { path: 'architecture', component: ArchitectureComponent },
      { path: 'interiors', component: InteriorsComponent },
    ],
  },
  {
    path: 'media',
    title: 'Media & Awards',
    loadComponent: () =>
      import('./media/media.component').then((m) => m.MediaComponent),
  },
  {
    path: 'about',
    title: 'About',
    loadComponent: () =>
      import('./about/about.component').then((m) => m.AboutComponent),
  },
  // { path: 'portfolio', component: PortfolioComponent , title: 'Portfolio'},
  // { path: 'experience', component: ExperienceComponent, title: 'Experience', children: [
  //     {path: 'land', component: LandComponent},
  //     {path: 'architecture', component: ArchitectureComponent},
  //     {path: 'interiors', component: InteriorsComponent}
  // ] },
  // { path: 'media', component: MediaComponent, title: 'Media & Awards' },
  // { path: 'about', component: AboutComponent, title: 'About Us' },
];

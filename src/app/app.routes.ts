import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ExperienceComponent } from './experience/experience.component';
import { MediaComponent } from './media/media.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'media', component: MediaComponent },
    { path: 'about', component: AboutComponent },
];

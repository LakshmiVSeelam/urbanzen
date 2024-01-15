import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ExperienceComponent } from './experience/experience.component';
import { MediaComponent } from './media/media.component';
import { AboutComponent } from './about/about.component';
import { LandComponent } from './experience/land/land.component';
import { ArchitectureComponent } from './experience/architecture/architecture.component';
import { InteriorsComponent } from './experience/interiors/interiors.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home' },
    { path: 'portfolio', component: PortfolioComponent , title: 'Portfolio'},
    { path: 'experience', component: ExperienceComponent, title: 'Experience', children: [
        {path: 'land', component: LandComponent},
        {path: 'architecture', component: ArchitectureComponent},
        {path: 'interiors', component: InteriorsComponent}
    ] },
    { path: 'media', component: MediaComponent, title: 'Media & Awards' },
    { path: 'about', component: AboutComponent, title: 'About Us' },
];

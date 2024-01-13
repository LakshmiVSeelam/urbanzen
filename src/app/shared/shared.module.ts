import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeoSectionComponent } from './ceo-section/ceo-section.component';
import { FeaturedProjectsComponent } from './featured-projects/featured-projects.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LandingSliderComponent } from './landing-slider/landing-slider.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CeoSectionComponent,
    FeaturedProjectsComponent,
    FooterComponent,
    HeaderComponent,
    LandingSliderComponent
  ],
  exports: [
    CeoSectionComponent,
    FeaturedProjectsComponent,
    FooterComponent,
    HeaderComponent,
    LandingSliderComponent
  ]
})
export class SharedModule { }

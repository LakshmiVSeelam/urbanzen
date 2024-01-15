import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class FeaturedProjectsComponent {
  featuredProjectData= [
    { title: 'Object 1', url: 'https://example.com/1' },
    { title: 'Object 2', url: 'https://example.com/2' },
    { title: 'Object 3', url: 'https://example.com/3' },
    { title: 'Object 4', url: 'https://example.com/4' },
    { title: 'Object 5', url: 'https://example.com/5' },
    { title: 'Object 6', url: 'https://example.com/6' },
    { title: 'Object 7', url: 'https://example.com/7' },
    { title: 'Object 8', url: 'https://example.com/8' },
    { title: 'Object 9', url: 'https://example.com/9' },
    { title: 'Object 10', url: 'https://example.com/10' }
  ];

}

import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { routes } from '../../app.routes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  schemas: [NO_ERRORS_SCHEMA]
})
export class HeaderComponent {

  menuItems: any
  ngOnInit() {
    this.menuItems = routes
  }
}

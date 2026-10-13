import {Component, signal} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,
    RouterLink, RouterLinkActive,
    MatSidenavModule, MatButtonModule,
    MatIconModule,
    MatListModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
  readonly collapsed = signal(false);
  readonly options = [
    {link: '/home', label: 'Home', icon: 'home'},
    {link: '/reservations/new', label: 'New', icon: 'new' },
  ];

  toggleMenu(): void {
    this.collapsed.update(value => !value);
  }
}

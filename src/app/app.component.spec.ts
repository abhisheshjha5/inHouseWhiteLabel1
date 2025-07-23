import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <nav style="margin-bottom: 10px;">
      <a routerLink="/dashboard">Dashboard</a> |
      <a routerLink="/reservation">Reservation</a> |
      <a routerLink="/guest-profile">Guest Profile</a> |
      <a routerLink="/housekeeping">Housekeeping</a> |
      <a routerLink="/checkin-checkout">Check-In/Out</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}

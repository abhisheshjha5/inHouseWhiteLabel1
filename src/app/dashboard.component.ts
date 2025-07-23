import { Component } from '@angular/core';
import { AppConfigService } from './config/app-config.service';


@Component({
  selector: 'app-dashboard',
  template: `
    <h2>Dashboard - {{ theme.name }}</h2>

    <div *ngIf="theme.showHousekeeping">
      <p>Housekeeping Panel Visible</p>
      <!-- Housekeeping panel logic -->
    </div>
    <div *ngIf="!theme.showHousekeeping">
      <p>Housekeeping Panel Hidden for this client</p>
    </div>
  `
})
export class DashboardComponent {
  theme = this.config.theme;

  constructor(private config: AppConfigService) {}
}

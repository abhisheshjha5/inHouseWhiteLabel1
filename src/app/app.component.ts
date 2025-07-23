import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { AppConfigService } from './config/app-config.service';

@Component({
  selector: 'app-root',

 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})


export class AppComponent {
theme = this.config.theme;

  constructor(private config: AppConfigService) {}

}

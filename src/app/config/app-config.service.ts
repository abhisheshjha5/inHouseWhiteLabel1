import { Injectable } from '@angular/core';
import { client1Theme } from '../themes/client1.theme';
import { client2Theme } from '../themes/client2.theme';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AppConfigService {
  public theme: any;

  constructor() {
    this.theme = environment.theme === 'client2' ? client2Theme : client1Theme;
  }
}

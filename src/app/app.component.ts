import { Component } from '@angular/core';
import { map } from 'rxjs';

import { BackendService } from './core/services/backend.service';
import { SettingsNode } from './core/models/settings.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  homeNode = this.backendService.fetchHomeNode();
  settings = this.backendService.fetchSettings().pipe(map((data: SettingsNode) => data.properties));

  constructor(private backendService: BackendService) {}

}

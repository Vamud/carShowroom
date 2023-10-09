import { Component } from '@angular/core';
import { BackendService } from 'src/app/core/services/backend.service';
import { BASE_URL } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  baseUrl = BASE_URL;
  homeNode = this.backendService.fetchHomeNode();

  constructor(private backendService: BackendService) {}
}

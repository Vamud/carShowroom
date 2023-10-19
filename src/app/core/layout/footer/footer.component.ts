import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { HomeNodeProperties } from '@app/models/home.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() homeNodeData: Observable<HomeNodeProperties> | undefined;
}

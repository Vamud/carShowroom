import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { Properties } from '../../models/settings.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() settings: Observable<Properties> | undefined;
}

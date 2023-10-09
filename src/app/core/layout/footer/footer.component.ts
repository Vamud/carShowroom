import { Component, Input } from '@angular/core';
import { HomeNodeProperties } from '../../models/home.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() homeNodeData: Observable<HomeNodeProperties> | undefined;
}

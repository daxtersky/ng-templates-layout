import { Component } from '@angular/core';
import { TemplatesService } from './../templates.service';

@Component({
  selector: 'app-available-components',
  templateUrl: './available-components.component.html',
  styleUrls: ['./available-components.component.scss']
})
export class AvailableComponentsComponent {
  constructor(public templatesService: TemplatesService) {

  }

}

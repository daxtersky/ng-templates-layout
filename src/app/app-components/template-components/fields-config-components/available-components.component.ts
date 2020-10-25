import { Component, OnInit } from '@angular/core';
import { TemplatesService } from './../templates.service';

@Component({
  selector: 'app-available-components',
  templateUrl: './available-components.component.html',
  styleUrls: ['./available-components.component.scss']
})
export class AvailableComponentsComponent implements OnInit {
  constructor(private templatesService: TemplatesService) {

  }
  ngOnInit(): void {
    console.log('service', this.templatesService);
  }

}

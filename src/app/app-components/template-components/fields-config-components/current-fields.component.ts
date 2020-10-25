import { Component, OnInit } from '@angular/core';
import { TemplatesService } from './../templates.service';
import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-current-fields',
  templateUrl: './current-fields.component.html',
  styleUrls: ['./current-fields.component.scss'],
  // providers: [TemplatesService]
})
export class CurrentFieldsComponent implements OnInit {
  hoverIndex = -1;

  constructor(private templatesService: TemplatesService) {

  }

  ngOnInit(): void {
    console.log('service', this.templatesService);
  }

  onHover = (i: number): number => this.hoverIndex = i;

}


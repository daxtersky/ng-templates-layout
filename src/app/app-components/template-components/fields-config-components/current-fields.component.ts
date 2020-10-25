import { Component } from '@angular/core';
import { TemplatesService } from './../templates.service';
import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-current-fields',
  templateUrl: './current-fields.component.html',
  styleUrls: ['./current-fields.component.scss'],
})
export class CurrentFieldsComponent {
  constructor(public templatesService: TemplatesService) { }

  onHover = (i: number): number => this.templatesService.hoverIndex = i;

}


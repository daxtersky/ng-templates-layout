import { Component, Input, OnInit } from '@angular/core';

enum TemplateType {
  NAME = 'name',
  ENTRY = 'entry',
  DATEFROM = 'dateFrom',
  DATETO = 'dateTo'
}

@Component({
  selector: 'app-template-input-type',
  templateUrl: 'template-input-type.component.html',
  styleUrls: ['./template-input-type.component.scss']
})

export class TemplateInputTypeComponent implements OnInit {
  @Input() type: TemplateType;
  placeholder: string;
  icon: string;

  ngOnInit(): void {
    switch (this.type) {
      case TemplateType.NAME:
        this.placeholder = `Template ${this.type}`;
        break;
      case TemplateType.ENTRY:
        this.placeholder = `Select ${this.type} type`;
        this.icon = 'generalSmallDown';
        break;
      case TemplateType.DATEFROM:
        this.placeholder = 'from date';
        this.icon = 'generalCalendarDate';
        break;
      case TemplateType.DATETO:
        this.placeholder = 'to date';
        this.icon = 'generalCalendarDate';
        break;
    }
  }
}

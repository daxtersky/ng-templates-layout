import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-circle',
  template: '<span>{{ sectionCredentials }}</span>',
  styleUrls: ['./section-circle.component.scss']
})
export class SectionCircleComponent {
  @Input() sectionCredentials: string;
}

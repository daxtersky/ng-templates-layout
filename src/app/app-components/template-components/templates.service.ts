import { Injectable } from '@angular/core';
import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';

@Injectable({ providedIn: 'root' })

export class TemplatesService {
  hoverIndex = -1;

  items: string[] = [
    'Text - one line',
    'Text - multiline',
    'Checklist',
    'Radiobuttons',
    'Text - rich',
  ];
  basket: string[] = [
    'Text - one line',
    'Text - multiline',
    'Text - rich',
    'Select from list - single',
    'Select from list - multi',
    'Checklist',
    'Radiobuttons',
    'Date/time picker',
  ];

  constructor() { }

  onMoveTopClick(e, item: string): void {
    const itemPosition = this.items.findIndex(i => i === item);
    this.items.splice(0, 0, this.items.splice(itemPosition, 1)[0]);
  }
  onMoveUpClick(e, item: string): void {
    const itemPosition = this.items.findIndex(i => i === item);
    if (itemPosition !== 0) {
      this.items.splice(itemPosition - 1, 0, this.items.splice(itemPosition, 1)[0]);
    }
  }
  onMoveDownClick(e, item: string): void {
    const itemPosition = this.items.findIndex(i => i === item);
    if (itemPosition !== this.items.length - 1) {
      this.items.splice(itemPosition + 1, 0, this.items.splice(itemPosition, 1)[0]);
    }
  }
  onMoveBottomClick(e, item: string): void {
    const itemPosition = this.items.findIndex(i => i === item);
    this.items.splice(this.items.length - 1, 0, this.items.splice(itemPosition, 1)[0]);
  }

  onDeleteClick(deletedItem): void {
    const newArray = this.items.filter(item => item !== deletedItem);
    this.items = newArray;
  }

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}

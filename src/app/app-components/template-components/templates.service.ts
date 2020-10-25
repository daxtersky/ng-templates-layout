import { Injectable } from '@angular/core';
import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';

@Injectable({ providedIn: 'root' })

export class TemplatesService {
  items: string[] = [
    'Carrots',
    'Tomatoes',
    'Onions',
    'Apples',
    'Avocados'
  ];
  basket: string[] = [
    'Oranges',
    'Bananas',
    'Cucumbers'
  ];

  constructor() {
    console.log('Hello Angular Lovers!');
  }

  onMoveTopClick(e, item: string): void {
    const itemPosition = this.items.findIndex(i => i === item);
    this.items.splice(0, 0, this.items.splice(itemPosition, 1)[0]);
  }
  onMoveUpClick(e, item: string): void {
    const itemPosition = this.items.findIndex(i => i === item);
    this.items.splice(itemPosition - 1, 0, this.items.splice(itemPosition, 1)[0]);
  }
  onMoveDownClick(e, item: string): void {
    const itemPosition = this.items.findIndex(i => i === item);
    this.items.splice(itemPosition + 1, 0, this.items.splice(itemPosition, 1)[0]);
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
    const dragOnlyFromRightToLeft = (event.container.id === 'cdk-drop-list-0' && event.previousContainer.id === 'cdk-drop-list-1');
    if (dragOnlyFromRightToLeft) {
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

}

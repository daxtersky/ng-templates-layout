import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-templates-layout';

  items = [
    'Carrots',
    'Tomatoes',
    'Onions',
    'Apples',
    'Avocados'
  ];

  basket = [
    'Oranges',
    'Bananas',
    'Cucumbers'
  ];

  onMoveClick(e, item, direction: string): void {
    const itemPosition = this.items.findIndex(i => i === item);
    if (direction === 'up' && itemPosition !== 0) {
      this.items.splice(itemPosition - 1, 0, this.items.splice(itemPosition, 1)[0]);
    } else if (direction === 'down') {
      this.items.splice(itemPosition + 1, 0, this.items.splice(itemPosition, 1)[0]);
    }
  }

  onDeleteClick(deletedItem): void {
    const newArray = this.items.filter(item => item !== deletedItem);
    this.items = newArray;
  }


  drop(event: CdkDragDrop<string[]>): void {
    console.log('drop', event.container.id);
    // TODO not possible to drag from left to right list
    // TODO right list stays the same / https://stackoverflow.com/questions/62249991/angular-duplicate-item-via-drag-drop
    // if (event.container.id !== event.previousContainer.id) {

    // }
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}

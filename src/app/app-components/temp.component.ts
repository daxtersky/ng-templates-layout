import { Component } from '@angular/core';
import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-temporary',
  template: `  <div style="background-color: lightseagreen;">

  <div cdkDropListGroup>
    <div class="example-container">
      <h2>Available items</h2>

      <div class="example-list"
        cdkDropList
        cdkDropListSortingDisabled
        [cdkDropListData]="items"
        (cdkDropListDropped)="drop($event)">
        <div class="example-box" *ngFor="let item of items" cdkDrag>
          {{item}}
          <svg-icon (click)="onMoveTopClick($event, item)" key="generalPointingUp" fontSize="20px" style="display: flex; cursor: pointer;"></svg-icon>
          <svg-icon (click)="onMoveUpClick($event, item)" key="generalTriangleUp" fontSize="20px" style="display: flex; cursor: pointer;"></svg-icon>
          <svg-icon (click)="onMoveDownClick($event, item)" key="generalTriangleDown" fontSize="20px" style="display: flex; cursor: pointer;"></svg-icon>
          <svg-icon (click)="onMoveBottomClick($event, item)" key="generalPointingDown" fontSize="20px" style="display: flex; cursor: pointer;"></svg-icon>
          <svg-icon (click)="onDeleteClick(item)" key="generalDeleteForever" fontSize="20px" style="display: flex; cursor: pointer;"></svg-icon>
        </div>
      </div>
    </div>

    <div class="example-container">
      <h2>Shopping basket</h2>

      <div cdkDropList [cdkDropListData]="basket" class="example-list" (cdkDropListDropped)="drop($event)">
        <div class="example-box" *ngFor="let item of basket" cdkDrag>{{item}}</div>
      </div>
    </div>
  </div>



</div>
`,
  styleUrls: ['./templates.component.scss']
})
export class TempComponent {
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

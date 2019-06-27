import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styles: [
    `
      .red-border {
        border: 1px solid red;
      }
    `
  ]
})
export class DatabindingComponent {
  aString = 'i am a string';
  aNumber = 100;
  attachClass = false;
  constructor() {
    setTimeout(() => {
      this.aNumber *= 10;
      this.attachClass = true;
    }, 3000);
  }

  onClick(event: Event) {
    console.log(event);
  }
}

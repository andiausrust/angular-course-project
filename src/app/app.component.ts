import { DatabindingComponent } from './databinding/databinding.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>inline template</h1>
    <hr />
    <app-databinding></app-databinding>
  `
})
export class AppComponent {}

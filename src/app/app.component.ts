import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `

    <button (click)="display = 'open-close';">Open Close</button>
    <button (click)="display = 'left-right';">Left To Right</button>
    <hr/>
    
    <ng-container [ngSwitch]="display">
      <app-left-right *ngSwitchCase="'left-right'"></app-left-right>
      <app-open-close *ngSwitchCase="'open-close'"></app-open-close>
    </ng-container>
  `,
})
export class AppComponent {
  title = 'animation-demo';
  display = 'left-right';
}

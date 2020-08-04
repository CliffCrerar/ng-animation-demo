import { Component, VERSION } from '@angular/core';
import { state, trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [
    state,
    trigger,
    style,
    animate,
    transition
    
  ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}

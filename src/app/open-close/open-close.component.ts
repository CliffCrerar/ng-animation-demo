import { Component, Input } from '@angular/core';
import { trigger, transition, state, animate, style, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-open-close',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
      transition('open <=> closed', [
        animate('0.5s')
      ]),
      transition ('* => open', [
        animate ('1s',
          style ({ opacity: '*' }),
        ),
      ]),
      transition('* => *', [
        animate('1s')
      ]),
    ]),
  ],
  templateUrl: 'open-close.component.html'
})
export class OpenCloseComponent {
  @Input() logging = true;
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  onAnimationEvent( event: AnimationEvent ) {
    if (!this.logging) {
      return;
    }
    // openClose is trigger name in this example
    console.log(`Animation Trigger:`, event.triggerName);

    // phaseName is start or done
    console.log(`Phase: `,event.phaseName);

    // in our example, totalTime is 1000 or 1 second
    console.log(`Total time: `,event.totalTime);

    // in our example, fromState is either open or closed
    console.log(`From: `,event.fromState);

    // in our example, toState either open or closed
    console.log(`To: `,event.toState);

    // the HTML element itself, the button in this case
    console.log(`Element: `,event.element);
  }
}

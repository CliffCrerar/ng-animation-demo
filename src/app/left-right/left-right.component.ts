import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { trigger, style, state, transition, animate, query, sequence } from '@angular/animations';

const wideState = state('wide', style({ flex: 2 }));
const initState = state('initial', style({ flex: 1 }))

@Component({
  selector: 'app-left-right',
  templateUrl: './left-right.component.html',
  styleUrls: ['./left-right.component.scss'],
  animations: [
    /* Animation that grows and shrinks bloks on over */

    trigger('hoverTrigger', [
      // query('#leftSlide',[style({opacity: 0})]),

      state('initial', style({ flex: 1 })),

      state('wide', style({ flex: 2 })),

      transition('initial <=> wide', [
        animate('0.5s'),
      ]),
      /* Animation that grows and shrinks bloks on over */
    ])
  ]
})
export class LeftRightComponent implements OnInit {

  hoverComponents = [
    {
      key: 'left',
      id: 'left',
      heading: 'Left Heading',
      subTitle: 'left Subtitle',
      classes: 'lr left',
      slideInText: {
        text: 'lorum ipsum some left text lamet cruciates text that is wrong',
        buttonCaption: 'left.button',
      },
      states: {
        hover: 'initial',
      }
    },
    {
      key: 'right',
      id: 'right',
      heading: 'Right Heading',
      subTitle: 'Right Subtitle',
      classes: 'lr right',
      slideInText: {
        text: 'lorum ipsum some right text lamet cruciates text that is right',
        buttonCaption: 'right.button',
      },
      states: {
        hover: 'initial',
      }
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  elementData = (elementKey: string) => this.hoverComponents.filter(def => def.key === elementKey)[0];

  changeState(elementDataKey: string, state: string) {
    const dataSet = this.elementData(elementDataKey);
    console.log('dataSet: ', dataSet);
    dataSet.states.hover = state;
    // dataSet.states.textAndButton = state;

  };

  // changeTextState = ()

  onHover = (over: string, transition: string, element: ElementRef<HTMLDivElement>) => this.delegateEvent(over, transition, element);

  delegateEvent(over: string, transition: string, element: ElementRef<HTMLDivElement>) {
    this.changeState(over, transition === 'in' ? 'wide' : 'initial')
    switch (over) {
      case 'left': leftBlockHoverEvent(transition, element); break;
      case 'right': rightBlockHoverEvent(transition, element); break;
    }

    function leftBlockHoverEvent(transition: string, element: ElementRef<HTMLDivElement>) {
      console.log('element: ', element.nativeElement);
      console.log('transition: ', transition);
    }

    function rightBlockHoverEvent(transition: string, element: ElementRef<HTMLDivElement>) {
      console.log('element: ', element.nativeElement);
      console.log('transition: ', transition);
    }
  }
}


@Component({
  selector: `slide-in-text`,
  template: `
    <div [@slideIn]="state">
      <p>{{data.text}}</p>
      <button>{{data.buttonCaption}}</button>
    </div>
  `,
  animations: [
    trigger('slideIn',[
      state('initial',style({opacity: 0})),
      state('wide',style({opacity: 1})),
      transition('init <=> visible',[
        animate('1s')
      ])
    ])
  ]
})
export class TextFlyIn {
  @Input() data;
  @Input() state;
}
import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-overlay-animation',
    templateUrl: './overlay-animation.component.html',
    styleUrls: ['./overlay-animation.component.scss'],
    animations: [
        trigger('fadeInOut', [
            state('void', style({ opacity: 0 })),
            transition(':enter', [
                animate('500ms ease-out', style({ opacity: 1 }))
            ]),
            transition(':leave', [
                animate('500ms ease-in', style({ opacity: 0 }))
            ])
        ]),
        trigger('logoSlide', [
            state('initial', style({ transform: 'translate(-50%, -50%)' })),
            state('final', style({ transform: 'translate(0, 0)' })),
            transition('initial => final', animate('500ms ease-in-out'))
        ])
    ],
    standalone: false
})
export class OverlayAnimationComponent {
  @Input() logoPath = 'assets/img/logo-big_white.png';
  showOverlay = true;

  ngOnInit() {
    setTimeout(() => {
      this.showOverlay = false;
    }, 1500);
  }
}

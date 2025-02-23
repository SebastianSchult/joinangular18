import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayAnimationComponent } from './overlay-animation.component';

describe('OverlayAnimationComponent', () => {
  let component: OverlayAnimationComponent;
  let fixture: ComponentFixture<OverlayAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverlayAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverlayAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideTogglePageComponent } from './slide-toggle-page.component';

describe('SlideTogglePageComponent', () => {
  let component: SlideTogglePageComponent;
  let fixture: ComponentFixture<SlideTogglePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideTogglePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideTogglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

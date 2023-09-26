import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSpinnerPageComponent } from './progress-spinner-page.component';

describe('ProgressSpinnerPageComponent', () => {
  let component: ProgressSpinnerPageComponent;
  let fixture: ComponentFixture<ProgressSpinnerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressSpinnerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressSpinnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

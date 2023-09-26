import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressPageComponent } from './progress-page.component';

describe('ProgressPageComponent', () => {
  let component: ProgressPageComponent;
  let fixture: ComponentFixture<ProgressPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

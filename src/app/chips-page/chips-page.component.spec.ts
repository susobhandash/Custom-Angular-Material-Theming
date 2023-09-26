import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsPageComponent } from './chips-page.component';

describe('ChipsPageComponent', () => {
  let component: ChipsPageComponent;
  let fixture: ComponentFixture<ChipsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

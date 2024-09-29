import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPercentageComponent } from './input-percentage.component';

describe('InputPercentageComponent', () => {
  let component: InputPercentageComponent;
  let fixture: ComponentFixture<InputPercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputPercentageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

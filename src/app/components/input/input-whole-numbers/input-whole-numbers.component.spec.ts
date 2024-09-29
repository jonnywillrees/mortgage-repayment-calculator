import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWholeNumbersComponent } from './input-whole-numbers.component';

describe('InputWholeNumbersComponent', () => {
  let component: InputWholeNumbersComponent;
  let fixture: ComponentFixture<InputWholeNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputWholeNumbersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputWholeNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

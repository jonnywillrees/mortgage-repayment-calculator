import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { InputCurrencyComponent } from './components/input/input-currency/input-currency.component';
import { InputWholeNumbersComponent } from "./components/input/input-whole-numbers/input-whole-numbers.component";
import { InputPercentageComponent } from './components/input/input-percentage/input-percentage.component';
import { RadioButtonsComponent } from './components/radio-buttons/radio-buttons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, InputCurrencyComponent, InputWholeNumbersComponent, InputPercentageComponent, RadioButtonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mortgage-repayment-calculator';
  isResultCalculated = false;
  amount = new FormControl<number | null>(50000);
  term = new FormControl<number | null>(null);
  interestRate = new FormControl<number | null>(42);

  onClearCalculator(event: Event): void {
    console.log(event);
    this.isResultCalculated = false;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log(this.interestRate.value)
    this.isResultCalculated = true;
  }
}

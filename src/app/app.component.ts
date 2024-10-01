import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { InputCurrencyComponent } from './components/input/input-currency/input-currency.component';
import { InputWholeNumbersComponent } from "./components/input/input-whole-numbers/input-whole-numbers.component";
import { InputPercentageComponent } from './components/input/input-percentage/input-percentage.component';
import { RadioButtonsComponent } from './components/radio-buttons/radio-buttons.component';
import { MortgageType } from './enums/mortgageType';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, InputCurrencyComponent, InputWholeNumbersComponent, InputPercentageComponent, RadioButtonsComponent, CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Properties
  isResultCalculated = false;
  monthlyRepayment: number | undefined = 58;
  totalRepayment: number | undefined = 55 * 12;

  calculatorForm = new FormGroup({
    amount: new FormControl<number | null>(null, Validators.required),
    term: new FormControl<number | null>(null, Validators.required),
    interestRate: new FormControl<number | null>(null, Validators.required),
    mortgageType: new FormControl<MortgageType | null>(null, Validators.required),
  });

  mortgageTypeRadioButtonOptions = [
    {
      value: MortgageType.Repayment,
      label: 'Repayment'
    },
    {
      value: MortgageType.InterestOnly,
      label: 'Interest Only'
    },
  ]

  // Methods
  onClearCalculator(): void {
    this.calculatorForm.reset();
    this.isResultCalculated = false;
  }

  onSubmit(): void {
    this.calculatorForm.markAllAsTouched();
    if (this.calculatorForm.invalid) return;

    this.isResultCalculated = true;
    console.log(this.calculatorForm.value);
  }
}

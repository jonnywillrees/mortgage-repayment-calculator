import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { InputCurrencyComponent } from './components/input/input-currency/input-currency.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, InputCurrencyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mortgage-repayment-calculator';
  isResultCalculated = false;
  amount = new FormControl<number | null>(null);
  interestRate = new FormControl<number | null>(null);

  onClearCalculator(event: Event): void {
    console.log(event);
    this.isResultCalculated = false;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.isResultCalculated = true;
  }
}

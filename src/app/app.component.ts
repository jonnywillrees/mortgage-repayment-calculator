import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mortgage-repayment-calculator';
  isResultCalculated = false;

  onClearCalculator(event: Event): void {
    console.log(event);
    this.isResultCalculated = false;
  }

  onSubmit(event: SubmitEvent): void {
    console.log(event);
    this.isResultCalculated = true;
  }
}

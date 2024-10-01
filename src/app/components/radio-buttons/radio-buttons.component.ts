import { Component, Input } from '@angular/core';
import { BaseControlValueAccessor } from '../../config/base-control-value-accessor';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MortgageTypeRadioButtonOption } from '../../models/component.model';

@Component({
  selector: 'app-radio-buttons',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './radio-buttons.component.html',
  styleUrl: './radio-buttons.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RadioButtonsComponent,
      multi: true
    }
  ]
})
export class RadioButtonsComponent extends BaseControlValueAccessor<string | null> {
  @Input({required: true}) options!: MortgageTypeRadioButtonOption[];
}

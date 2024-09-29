import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlValueAccessor } from '../../../config/base-control-value-accessor';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-input-currency',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-currency.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputCurrencyComponent,
      multi: true,
    }
  ]
})
export class InputCurrencyComponent extends BaseControlValueAccessor<number | null> {
  @ViewChild('input') inputEl!: ElementRef<HTMLInputElement>;
  @Input() inputId = '';
  @Input() prefix = '';
  @Input() suffix = '';


  protected override writeValueToInput(value: number | null): void {
      if (value === null || value === undefined) return;

      this.inputValue = formatCurrency(value, 'en-GB', '', 'GBP', '0.0-2');
  }

  onInputChange(value: string): void {
    if (value) {
      const rawValue = Number(value.replace(/[^0-9]*/g, ''));
      if (rawValue) {
        const formatted = formatCurrency(rawValue, 'en-GB', '', 'GBP', '0.0-2');
        this.inputEl.nativeElement.value = formatted;
        this.notifyValueChanged(rawValue);
      } else {
        this.inputEl.nativeElement.value = '';
        this.notifyValueChanged(null);
      }
    } else {
      this.notifyValueChanged(null);
    }
  }

  onInputBlur(): void {
    this.notifyTouched();
  }

  onClickAddon(): void {
    this.inputEl.nativeElement.focus();
  }
}

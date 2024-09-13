import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import {  FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { OnChangeFn, OnTouchedFn } from '../../../models/control-value-accessor.model';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-input-currency',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-currency.component.html',
  styleUrl: './input-currency.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputCurrencyComponent,
      multi: true,
    }
  ]
})
export class InputCurrencyComponent {
  @ViewChild('input') inputEl!: ElementRef<HTMLInputElement>;
  @Input() inputId = '';

  onChange: OnChangeFn<number | null> = () => {};
  onTouched: OnTouchedFn = () => {};
  
  inputValue: string | null = null;
  isDisabled = false;

  writeValue(value: number): void {
    if (value === null || value === undefined) return;
    this.inputValue = formatCurrency(value, 'en-GB', '', 'GBP', '0.0-2');
  }

  registerOnChange(fn: OnChangeFn<number | null>): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: OnTouchedFn): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onInputChange(value: string): void {
    if (value) {
      const rawValue = Number(value.replace(/[^0-9]*/g, ''));
      if (rawValue) {
        const formatted = formatCurrency(rawValue, 'en-GB', '', 'GBP', '0.0-2');
        this.inputEl.nativeElement.value = formatted;
        this.onChange(rawValue);
      } else {
        this.inputEl.nativeElement.value = '';
        this.onChange(null);
      }
    } else {
      this.onChange(null);
    }
  }

  onInputBlur(): void {
    this.onTouched();
  }
  
}

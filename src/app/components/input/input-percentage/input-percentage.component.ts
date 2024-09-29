import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BaseControlValueAccessor } from '../../../config/base-control-value-accessor';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-percentage',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-percentage.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputPercentageComponent,
      multi: true,
    }
  ]
})
export class InputPercentageComponent extends BaseControlValueAccessor<number | null> {
  @ViewChild('input') inputEl!: ElementRef<HTMLInputElement>;
  @Input() inputId = '';
  @Input() prefix = '';
  @Input() suffix = '';

  onInputChange(value: string): void {
    if (value) {

      // Allow only digits and a single decimal point
      const formatted = value.replace(/[^0-9.]/g, ''); 

      // Check if there's more than one decimal point and remove extra ones
      const parts = formatted.split('.');
      const cleaned = parts.length > 1 ? parts[0] + '.' + parts.slice(1).join('') : formatted;

      this.inputEl.nativeElement.value = cleaned;
      this.notifyValueChanged(Number(cleaned));

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

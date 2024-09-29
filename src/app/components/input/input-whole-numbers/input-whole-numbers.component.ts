import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlValueAccessor } from '../../../config/base-control-value-accessor';

@Component({
  selector: 'app-input-whole-numbers',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-whole-numbers.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputWholeNumbersComponent,
      multi: true,
    }
  ]
})
export class InputWholeNumbersComponent extends BaseControlValueAccessor<number | null> {
  @ViewChild('input') inputEl!: ElementRef<HTMLInputElement>;
  @Input() inputId = '';
  @Input() prefix = '';
  @Input() suffix = '';

  onInputChange(value: string): void {
    if (value) {
      const formatted = value.replace(/[^0-9]*/g, '');
      
      this.inputEl.nativeElement.value = formatted;
      this.notifyValueChanged(Number(formatted));

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

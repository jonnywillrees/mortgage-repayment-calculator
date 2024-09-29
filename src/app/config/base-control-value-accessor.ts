import { ControlValueAccessor } from '@angular/forms';
import { OnChangeFn, OnTouchedFn } from '../models/control-value-accessor.model';

export abstract class BaseControlValueAccessor<T> implements ControlValueAccessor {
  inputValue: string | null = null;
  isDisabled = false;

  private onChange: OnChangeFn<T | null> = () => {};
  private onTouched: OnTouchedFn = () => {};

  writeValue(value: T): void {
    this.writeValueToInput(value);
  }

  registerOnChange(fn: OnChangeFn<T | null>): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: OnTouchedFn): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
  
  protected writeValueToInput(value: T): void {
    if (typeof value === 'number') {
      this.inputValue = value.toString();
    }

    if (typeof value === 'string') {
      this.inputValue = value;
    }

  };

  protected notifyValueChanged(value: T): void {
    if (this.onChange) {
      this.onChange(value);
    }
  }

  protected notifyTouched(): void {
    if (this.onTouched) {
      this.onTouched();
    }
  }

}

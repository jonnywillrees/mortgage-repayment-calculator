import { Component } from '@angular/core';
import { BaseControlValueAccessor } from '../../config/base-control-value-accessor';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-radio-buttons',
  standalone: true,
  imports: [],
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
export class RadioButtonsComponent extends BaseControlValueAccessor<any> {

}

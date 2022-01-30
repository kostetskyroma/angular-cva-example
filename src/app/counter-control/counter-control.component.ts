import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-counter-control',
  templateUrl: './counter-control.component.html',
  styleUrls: ['./counter-control.component.scss'],
  providers: [{ 
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CounterControlComponent),
    multi: true
  }]
})
export class CounterControlComponent implements ControlValueAccessor {

  private _value: number = 0;

  get value() {
   return this._value;
  }
 
  @Input()
  set value(val) {
   this._value = val;
   this.onChange(this._value);
  }

  onChange(_: any) {}
 
  up() {
    this.value++;
  }
 
  down() {
    this.value--;
  }

  writeValue(value: any) {
    this.value = value;
   }
  
   registerOnChange(fn: any) {
    this.onChange = fn;
   }
  
   registerOnTouched() {}
}

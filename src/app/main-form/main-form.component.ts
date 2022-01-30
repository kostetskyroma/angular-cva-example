import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent {

  public form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    counter: new FormControl(),
  });
  
  public onSubmit(){
    console.log("Val", this.form.value);
  }

}

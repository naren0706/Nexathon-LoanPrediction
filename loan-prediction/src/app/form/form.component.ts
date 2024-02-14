import { Component } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  
  agePattern = /^(?:100|[0-9]|[1-9][0-9])$/;

  firstFormGroup = this._formBuilder.group({
    age: ['', Validators.pattern(this.agePattern)],//0-100
    homeOwnership: ['', Validators.required],
    income: ['', Validators.required],//numbers
    experience: ['', Validators.required],//numbers
  });
  secondFormGroup = this._formBuilder.group({
    Intent: ['', Validators.required],
    Amount: ['', Validators.required],
    grade: [''],
    cbStatus: [''],
  });

  isLinear = false;
  rate: number = 0;
  Cb!: string;
  loangrade!: string;

  constructor(private _formBuilder: FormBuilder) { }
  OnSubmit() {
      let reqData = {
        person_age: this.firstFormGroup.value.age,
        person_home_ownership: this.firstFormGroup.value.homeOwnership,
        person_income: this.firstFormGroup.value.income,
        person_emp_length: this.firstFormGroup.value.experience,
        cb_person_default_on_file: this.Cb,
        loan_intent: this.secondFormGroup.value.Intent,
        loan_grade: this.loangrade,
        loan_amnt: this.secondFormGroup.value.Amount,
        loan_int_rate: this.rate,
      }
      console.log(reqData);
    
  }
  CbDefaultValue(radioGroup: any) {
    this.Cb = radioGroup.value
  }
  LoanGradevalue(radioGroup: any) {
    this.loangrade = radioGroup.value
  }
  onSliderChange(number: any) {
    this.rate = number    
  }
}
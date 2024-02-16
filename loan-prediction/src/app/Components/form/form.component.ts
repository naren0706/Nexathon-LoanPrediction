import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { PredictionServiceService } from 'src/app/services/predictionServices/prediction-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  agePattern = /^(?:100|[0-9]|[1-9][0-9])$/;

  firstFormGroup = this._formBuilder.group({
    age: ['', Validators.pattern(this.agePattern)], //0-100
    homeOwnership: ['', Validators.required],
    income: ['', Validators.required], //numbers
    experience: ['', Validators.required], //numbers
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
  predictedValue!:number;
  constructor(
    private _formBuilder: FormBuilder,
    private predictionService: PredictionServiceService
  ) {}
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
    };
    console.log(reqData);
    this.predictionService.getPredictedValue(reqData).subscribe((res: any) => {
      console.log(res.predictedValue);
      this.predictedValue=res.predictedValue
    });
  }
  CbDefaultValue(radioGroup: any) {
    this.Cb = radioGroup.value;
  }
  LoanGradevalue(radioGroup: any) {
    this.loangrade = radioGroup.value;
  }
  onSliderChange(number: any) {
    this.rate = number;
  }
}

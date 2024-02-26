import { NgModule, Component, enableProdMode, OnInit } from '@angular/core';
if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss'],
})
export class GaugeComponent implements OnInit {
  value!: any;
  name!: any;
  ngOnInit(): void {
    var val = localStorage.getItem('prediction-output');
    var PersonalDetails = JSON.parse(
      localStorage.getItem('PersonalDetails') || ''
    );
    console.log(PersonalDetails);

    if (PersonalDetails != 'null' && PersonalDetails != null) {
      this.name = PersonalDetails.Name;
    }
    if (val == null) {
      alert('there is somwthing wrong');
    } else {
      this.value = +val;
    }
  }
  customizeText(arg: { valueText: any }) {
    return `${arg.valueText}%`;
  }
}

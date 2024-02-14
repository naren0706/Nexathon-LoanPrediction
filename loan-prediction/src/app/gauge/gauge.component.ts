import { NgModule, Component, enableProdMode } from '@angular/core';
if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent {
  value: number = 45;
 
  customizeText(arg: { valueText: any; }) {
    return `${arg.valueText}%`;
  }
}

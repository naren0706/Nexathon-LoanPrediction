import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './Components/form/form.component';
import { GaugeComponent } from './Components/gauge/gauge.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  { path: 'gauge', component: GaugeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { FormComponent } from './form/form.component';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { GaugeComponent } from './gauge/gauge.component';
import { DxBarGaugeModule } from 'devextreme-angular';
import { DxCircularGaugeModule } from 'devextreme-angular';
import { DxSelectBoxModule } from 'devextreme-angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    FormComponent,
    GaugeComponent
  ],
  imports: [
    BrowserModule,MatStepperModule,ReactiveFormsModule,DxBarGaugeModule,DxCircularGaugeModule,DxSelectBoxModule,
    AppRoutingModule,MatSelectModule,MatSliderModule, BrowserAnimationsModule,FormsModule,MatRadioModule,MatFormFieldModule,
    MatIconModule,MatInputModule,MatCheckboxModule,MatButtonModule,MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

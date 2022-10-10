import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormTransferenciaComponent } from './form-transferencia/form-transferencia.component';
import { TransferenciaService } from './form-transferencia/services/transferencia.service';
import { TransferenciaRepositoty } from './form-transferencia/repositories/transferencia-repository';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatSliderModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    FormTransferenciaComponent
  ],
  providers: [
    TransferenciaService,
    TransferenciaRepositoty
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

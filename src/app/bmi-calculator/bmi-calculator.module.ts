import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AcomuladorComponent } from './components/acomulador/acomulador.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    AcomuladorComponent,
    ResultadoComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class BmiCalculatorModule { }

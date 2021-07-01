import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styles: [
  ]
})
export class ResultadoComponent implements OnInit {
  bmi: number = 0;
  resultado: string = '';
  interpretacion: string = '';
  classResultado: string = 'alto';
  constructor( private activateRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activateRoute.params
    .subscribe( ({result}) =>{
      this.bmi = result;
      this.obtenerResultado();  
    });
  }

  obtenerResultado(){
    if( this.bmi >=25 ){
      this.resultado = 'Exceso de peso';
      this.interpretacion = ' Tiene un peso corporal superior al normal.';
      this.classResultado = 'alto';
    }else if( this.bmi >= 18.5 ){
      this.resultado = 'Peso normal';
      this.interpretacion = ' Tiene un peso corporal normal.';
      this.classResultado = 'normal';
    }else{
      this.resultado = 'Peso bajo';
      this.interpretacion = 'Tiene un peso corporal más bajo al normal';
      this.classResultado = 'bajo';
    }
  }
  
}

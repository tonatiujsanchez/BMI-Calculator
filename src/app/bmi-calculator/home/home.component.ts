import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  genero:string = '';
  peso: number = 65;
  edad: number = 25;
  altura: number = 170;

  constructor( private router: Router ) { }

  ngOnInit(): void {

  }

  agregarGenero( genero:string ){
    this.genero = genero;
  }

  editarPeso( valor: number ){
    this.peso = valor;
  }
  editarEdad( valor: number ){
    this.edad = valor;
  }

  editarAltura( valor: any ){
    this.altura =  valor.target.value * 1;
    
  }

  calcular(){
    if( !this.genero ){
      Swal.fire('Por favor elija su género.');
      return;
    }
    const bmi = this.peso / Math.pow( (this.altura/100), 2);

    this.router.navigate( ['/resultado', bmi] );
  }
}

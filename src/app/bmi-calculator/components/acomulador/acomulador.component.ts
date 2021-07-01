import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-acomulador',
  templateUrl: './acomulador.component.html',
  styleUrls: ['./acomulador.component.css']
})
export class AcomuladorComponent implements OnInit {

  @Input() titulo: string = 'sin titulo';
  @Input() valor: number = 0;
  @Output() onValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sumar( valor:number ){
    this.valor += valor;
    this.onValor.emit( this.valor );
  }

}

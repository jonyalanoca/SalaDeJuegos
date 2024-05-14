import { Component } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.css'
})
export class AhorcadoComponent {
  public listaLetras: string[];
  public listaLetrasUsadas:string[];
  public palabraSecreta:string[];
  public cantLetrasFallidas : number;
  constructor() {
    this.listaLetras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    this.listaLetrasUsadas=[];
    this.palabraSecreta= ['J','O','N','A','T','H','A','N'];
    this.cantLetrasFallidas = 0;

  }
  public probarLetra(event:string):void{
    this.listaLetrasUsadas.push(event);
    if(!this.palabraSecreta.includes(event))
      this.cantLetrasFallidas++;

  }
  public estaUsada(event:string):boolean{
    return this.listaLetrasUsadas.includes(event);
  }
  public esLetraEncontrada(event:string):boolean{
    return this.listaLetrasUsadas.includes(event);
  }
}

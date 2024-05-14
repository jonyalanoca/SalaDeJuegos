import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { heroe } from '../../shared/interfaces/heroe';


@Component({
  selector: 'app-higer-or-lower',
  templateUrl: './higer-or-lower.component.html',
  styleUrl: './higer-or-lower.component.css'
})
export class HigerOrLowerComponent implements OnInit {
  public superHeroData1: heroe;
  public superHeroData2: heroe;
  public heroes: heroe[];
  public indexUsados: number[];
  //Flag que indica que heroe debe adivinar
  //false:izquierda
  //true:derecha
  public estadoHeroe:boolean=false;

  constructor(private http: HttpClient) {
    this.superHeroData1 = {} as heroe;
    this.superHeroData2 = {} as heroe;
    this.heroes = [];
    this.indexUsados = [];


  }
  ngOnInit() {
    this.http.get<heroe[]>('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
      .subscribe((data: any) => {
        this.heroes = data;
        this.superHeroData1 = this.obtenerHeroeAleatorio();
        this.superHeroData2 = this.obtenerHeroeAleatorio();
      });
  }
  obtenerNumeroAleatorio(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  obtenerHeroeAleatorio() {
    //Se obtiene el numero random de index que no haya sido usado
    do {
      var indexRandom: number = this.obtenerNumeroAleatorio(0, this.heroes.length - 1);
    } while (this.indexUsados.includes(indexRandom))
    //Se agrega a la lista de index usados
    this.indexUsados.push(indexRandom);
    //Se busca en el array de heroes por el index
    return this.heroes[indexRandom];
  }

  //Jugabilidad
  comprobarMayor(poderHero1:number , poderHero2:number ){
    if(poderHero1<poderHero2){
      this.cambiarEstadoHero();
    }else{
      alert("fin del juego");
    }
  }
  comprobarMenor(poderHero1:number , poderHero2:number ){
    if(poderHero1>poderHero2){
      this.cambiarEstadoHero();
    }else{
      alert("fin del juego");
    }
  }
  comprobarigual(poderHero1:number , poderHero2:number ){
    if(poderHero1==poderHero2){
      this.superHeroData2 = this.obtenerHeroeAleatorio();
      this.superHeroData1 = this.obtenerHeroeAleatorio();
    }else{
      alert("fin del juego");
    }
  }
  cambiarEstadoHero(){
    if(this.estadoHeroe){
      this.superHeroData2 = this.obtenerHeroeAleatorio();
    }else{
      this.superHeroData1 = this.obtenerHeroeAleatorio();
    }
    this.estadoHeroe=!this.estadoHeroe;
  }
}



import { Component } from "@angular/core"

@Component({
    selector: 'app-contador',
    styleUrls: ['../../app.component.css'],
    template:  `
        <h1>{{titulo}}</h1>
         <h3>La base es: <strong>{{base}}</strong></h3>
        <button (click)="acumular(base)">+{{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acumular(-base)">-{{base}}</button> 
    `
})
export class ContadorComponet{
    titulo:string = 'Contador App';
  numero:number=10;
  base  :number=5;
  
  acumular (valor:number): void{
    this.numero +=valor
  }
  /*
  estos metodos fueron reemplazados por el metodo acumular.
  sumar (){
    this.numero +=1;
  }
  restar (){
    this.numero -=1;
  }*/
}
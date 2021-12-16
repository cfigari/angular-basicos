import { Component } from "@angular/core";


@Component({
 selector: 'app-heroe',
 templateUrl:'heroe.componet.html'  ,
  styleUrls:['../../app.component.css']
})
export class HeroeComponent{
  nombre:string ='Iroman';
  edad:number=45;

  get nombreCapitalizado(){
    return this.nombre.toUpperCase();
  }
  ObtenerNombre():string{
    return ` ${ this.nombre} - ${this.edad}`;
  }
  cambiarNombre():void{
    this.nombre='SpiderMan';
  }
  cambiarEdad():void{
    this.edad=30;
  }
  
}
import { Component } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes: string[] = ['SpiderMan','Iroman','Hulk','Thor','Capitan América'];
  heroeborrado:string='';

  borrarHeroe():void{
    console.log('Borrando...');
    //Elimina el primer elemento del arreglo
    const hB=this.heroes.shift();
    
    this.heroeborrado=  hB ||''; 
    //Elimina el ultimo elemento del arreglo
   // this.heroes.pop();
   
  }
}

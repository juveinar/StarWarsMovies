import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

listaPeliculas: [];


constructor(private peliculasServices: PeliculasService) { 
this.listaPeliculas =[];
this.llenarListaDePeliculas();
}
llenarListaDePeliculas(){

this.peliculasServices.traerTodasLasPeliculas().subscribe (
(data) => {
console.log ('DATA' , data);
this,this.listaPeliculas = data ['results'];
}
);

}

  ngOnInit(): void {
  }

}

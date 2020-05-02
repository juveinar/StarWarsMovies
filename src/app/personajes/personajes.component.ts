import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../services/personas.service';
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  listaPersonas: [];


  constructor(private personasServices: PersonasService) { 
    this.listaPersonas =[];
    this.llenarListaDePersonas();
  }
  llenarListaDePersonas(){
    this.personasServices.traerTodasLasPersonas().subscribe (
      (data) => {
        console.log ('DATO' , data);
        this,this.listaPersonas = data ['results'];
      }
      );
    }
  ngOnInit(): void {
  }

}

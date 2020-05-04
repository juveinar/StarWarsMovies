import { Component, OnInit } from '@angular/core';
import { PlanetasService } from '../services/planetas.service';
@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {

  listaPlanetas: [];

  constructor(private planetasServices: PlanetasService) { 
    this.listaPlanetas =[];
    this.llenarListaDePlanetas();
  }
    llenarListaDePlanetas(){

      this.planetasServices.traerTodosLosPlanetas().subscribe (
      (data) => {
      console.log ('DATE' , data);
      this,this.listaPlanetas = data ['results'];
      }
      );
          }

  ngOnInit(): void {
  }

}

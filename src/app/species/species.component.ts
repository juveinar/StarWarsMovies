import { Component, OnInit } from '@angular/core';
import { speciesService } from '../services/species.service';
@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})


export class speciesComponent implements OnInit {

  listaspecies: [];


  constructor(private speciesServices: speciesService) {
  this.listaspecies =[];
  this.llenarListaDespecies();
  }
  llenarListaDespecies(){

  this.speciesServices.traerTodosLasspecies().subscribe (
  (data) => {
  console.log ('DATA' , data);
  this,this.listaspecies = data ['results'];
  }
  );

  }

    ngOnInit(): void {
    }

  }



import { Component, OnInit } from '@angular/core';
import { vehiclesService } from '../services/vehicles.service';
@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})


export class vehiclesComponent implements OnInit {

  listavehicles: [];


  constructor(private vehiclesServices: vehiclesService) {
  this.listavehicles =[];
  this.llenarListaDevehicles();
  }
  llenarListaDevehicles(){
    this.vehiclesServices.traerTodosLosvehicles().subscribe (
      (data) => {
      console.log ('DATE' , data);
      this,this.listavehicles = data ['results'];
      }
      );
          }

  ngOnInit(): void {
  }

}

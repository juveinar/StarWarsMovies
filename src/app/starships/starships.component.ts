import { Component, OnInit } from '@angular/core';
import { starshipsService } from '../services/starships.service';
@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class starshipsComponent implements OnInit {

  listastarships: [];

  constructor(private starshipsServices: starshipsService) { 
    this.listastarships =[];
    this.llenarListaDestarships();
  }
    llenarListaDestarships(){

      this.starshipsServices.traerTodosLosstarships().subscribe (
      (data) => {
      console.log ('DATE' , data);
      this,this.listastarships = data ['results'];
      }
      );
          }

  ngOnInit(): void {
  }

}

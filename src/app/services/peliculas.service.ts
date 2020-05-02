import { Injectable } from '@angular/core';
import {HttpClient}   from  '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private httpClient: HttpClient) { }
  
  
getPelicula () {

const pelicula = {title:"", episode_id: "", director:""};
return pelicula;
}

traerTodasLasPeliculas () {
return this.httpClient.get ('https://swapi.py4e.com/api/films/')
  
}

}

import { Injectable } from '@angular/core';
import {HttpClient}   from  '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class speciesService {

  constructor(private httpClient: HttpClient) { }

  getspecies () {

    const species = {name:"", classification:"", designation:""};
return species;
}

traerTodosLasspecies () {
  return this.httpClient.get ('https://swapi.py4e.com/api/species/')

  }

  }

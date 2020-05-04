import { Injectable } from '@angular/core';
import {HttpClient}   from  '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PlanetasService {

  constructor(private httpClient: HttpClient) { }

  getPlaneta () {

    const planeta = {name:"", climate: "", terrain:""};
return planeta;
}

traerTodosLosPlanetas () {
  return this.httpClient.get ('https://swapi.py4e.com/api/planets/')
    
  }
  
  }
  




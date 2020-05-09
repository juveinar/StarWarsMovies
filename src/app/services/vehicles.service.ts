import { Injectable } from '@angular/core';
import {HttpClient}   from  '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class vehiclesService {

  constructor(private httpClient: HttpClient) { }

  getvehicles () {

    const vehicles = {name:"", model:"", passengers:""};
return vehicles;
}

traerTodosLosvehicles () {
  return this.httpClient.get ('https://swapi.py4e.com/api/vehicles/')

  }

  }

import { Injectable } from '@angular/core';
import {HttpClient}   from  '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class starshipsService {

  constructor(private httpClient: HttpClient) { }

  getstarships () {

    const starships = {name:"", model:"", starship_class:""};
return starships;
}

traerTodosLosstarships () {
  return this.httpClient.get ('https://swapi.py4e.com/api/starships/')
    
  }
  
  }
  




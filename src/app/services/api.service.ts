import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  url = 'https://pokeapi.co/api/v2/pokemon-color/1/nose'

  getPokemons(){
    return this.http.get(this.url);
  }

  postPokemons(body: any){
    return this.http.post(this.url, body);
  }
}

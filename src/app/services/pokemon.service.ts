import { Injectable } from '@angular/core';
import { Result } from '../interfaces/pokeapi.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  async getByPage(page: number, size: number = 40):Promise<Result[]> {
    if(page > 5) return [];
    const offset = size*(page-1);
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${size}&offset=${offset}`)
    const resJson = await res.json();
    if(resJson.results.length > 0) return resJson.results
    return [];
  }

 async  getById(id: string) {
    // https://pokeapi.co/api/v2/pokemon/{id or name}/
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const resJson = await res.json();
    console.log(resJson);
    // if(resJson.results.length > 0) return resJson.results
    // return [];
  }

  getDescription() {

  }

}

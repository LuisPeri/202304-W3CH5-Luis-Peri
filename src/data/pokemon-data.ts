import { Pokemon } from "../models/pokemon";

export class ApiPokemon {
  pokeUrl: string;
  serverUrl: string;
  constructor() {
    this.pokeUrl = "https://pokeapi.co/api/v2/pokemon/";
    this.serverUrl = "http://localhost:3000/pokemon";
  }

  async getAll() {
    const response = await fetch(this.pokeUrl);
    return response.json();
  }
}

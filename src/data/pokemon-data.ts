export class ApiPokemon {
  pokeUrl: string;
  constructor() {
    this.pokeUrl = "https://pokeapi.co/api/v2/pokemon/";
  }

  async getAll() {
    const response = await fetch(this.pokeUrl);
    const result = await response.json();
    return result.results;
  }

  // async getPokemon(url: Pokemon["url"]) {
  //   const response = await fetch(url);
  //   return response.json;
  // }
}

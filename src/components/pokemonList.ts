import { ApiPokemon } from "../data/pokemon-data";
import { Pokemon } from "../models/pokemon";
import { Component } from "./component";

export class PokemonList extends Component {
  pokemons: Pokemon[];
  pokeRepo: ApiPokemon;

  constructor(selector: string) {
    super(selector);
    this.pokemons = [];
    this.pokeRepo = new ApiPokemon();
    this.handleLoad();
  }

  async handleLoad() {
    this.pokemons = await this.pokeRepo.getAll();
    this.render();
  }

  async handleGetOne(event: Event) {
    const element = event.target;
    const url = element.dataset.id as string;
    this.pokeRepo.getPokemon(url);
  }

  createTemplate() {
    const balls = this.pokemons.results
      .map(
        (item) => `
      <li>
      <p>${item.name}</p>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
        item.url.split("/")[6]
      }.gif" heigh=100 width=100>
      <span data-id="${item.url}">Combat Info</span>
    </li>`
      )
      .join("");

    return `
    <h2>Pokedex</h2>
    <section class="pokemon-list"><ul>${balls}</ul></section>
      `;
  }
}

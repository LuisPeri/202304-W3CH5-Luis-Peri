import { Component } from "./component";
import { ApiPokemon } from "../data/pokemon-data";
import { Pokemon } from "../models/pokemon";

export class Card extends Component {
  pokemon!: Pokemon[];
  repository: ApiPokemon;

  constructor(selector: string) {
    super(selector);
    this.pokemon = [];
    this.repository = new ApiPokemon();
    this.handleLoad();
  }

  async handleLoad() {
    this.pokemon = await this.repository.getAll();
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    const list = this.pokemon.results
      .map(
        (item: any) => `
           <li>
      <p>${item.name}</p>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
        item.url.split("/")[6]
      }.gif" heigh=100 width=100>
      <span data-id="${item.url}"></span>
    </li>`
      )
      .join("");

    return `
      <ul>${list}</ul>
      `;
  }
}

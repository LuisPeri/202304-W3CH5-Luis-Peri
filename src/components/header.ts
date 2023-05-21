import { Component } from "./component";

export class Header extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <header class="header">
        <img class="logo" src="./public/Logo-Pokemon.png" alt="logo PoKemon" height="150" width="300">
    </header>
    `;
  }
}

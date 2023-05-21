import { Component } from "./component";

export class Footer extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
      <footer class="footer">
        <img src="./public/Logo-Pokemon.png" alt="logo PoKemon" height="150" width="300">
      </footer>
    `;
  }
}

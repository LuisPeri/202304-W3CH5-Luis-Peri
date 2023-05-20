export abstract class Component {
  template!: string;
  element!: Element;
  constructor(public selector: string) {}

  render(position: InsertPosition = "beforeend") {
    const parentElement = document.querySelector(this.selector);
    if (!parentElement) throw new Error("invalid selector");
    parentElement.insertAdjacentHTML(position, this.template);
    this.element = parentElement.lastElementChild!;
  }

  cleanHtml() {
    if (!this.element) return;
    this.element.outerHTML = "";
  }
}

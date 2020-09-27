// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

function getFinalPrice(price: number, discount: number) {
  return price - price / discount;
}

console.log(getFinalPrice(100, 10));
//console.log(getFinalPrice(100, "10%"));

class Hello {
  private element: HTMLDivElement;
  private elementInput: HTMLInputElement;
  private elementText: HTMLDivElement;
  constructor(defaultName: string) {
    this.element = document.createElement("div");
    this.elementInput = document.createElement("input");
    this.elementText = document.createElement("div");
    const elementButton = document.createElement("button");
    elementButton.textContent = "Greet";
    this.element.appendChild(this.elementInput);
    this.element.appendChild(elementButton);
    this.element.appendChild(this.elementText);
    this.elementInput.value = defaultName;
    this.greet();
    elementButton.addEventListener("click",
      () => this.greet()
    );
  } 
  show(parent: HTMLElement) {
    parent.appendChild(this.element);
  } 
  greet() {
    this.elementText.textContent = `Hello,
${this.elementInput.value}!`;
  }
} 

const hello = new Hello("World");
hello.show(document.body);
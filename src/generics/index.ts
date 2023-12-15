class Greater<T> {
  greeting: T;
  constructor(message: T) {
    this.greeting = message;
  }
  greet() {
    return this.greeting;
  }
}

let greeterA = new Greater<string>("Hiii");
let greeterB = new Greater<number>(123456);
let greeterC = new Greater<boolean>(true);

// using-generics
console.log(greeterA.greet());
console.log(greeterB.greet());
console.log(greeterC.greet());

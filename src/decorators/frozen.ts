function Frozen(constructor: Function) {
  Object.freeze(constructor);
  Object.freeze(constructor.prototype);
}

@Frozen()
export class IceCreamComponent {
  constructor() {}
}
console.log(Object.freeze(IceCreamComponent));

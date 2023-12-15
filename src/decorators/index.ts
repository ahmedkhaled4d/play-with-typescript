function first() {
  console.log("first(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("first(): called target", target);
  };
}

function second() {
  console.log("second(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("second(): called target", target);
  };
}

class ExampleClass {
  @first()
  @second()
  method() {
    return 0;
  }
}

const test = new ExampleClass();
test.method();

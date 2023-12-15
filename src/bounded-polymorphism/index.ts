function logFoo<T extends { foo: string }>(obj: T): T {
  console.log(obj.foo);
  return obj;
}

let res = logFoo({ foo: "foo", bar: "bar" }).bar;
console.log(res);

let res2 = logFoo({ bar: "bar" }); // Expected error

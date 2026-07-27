function againGreet(name: string): string {
  return `this is testing file for typescript, and the tester is '${name.toUpperCase()}'`;
}

const name: string = "Ateeb karim";

const result = againGreet(name);

console.log(result);
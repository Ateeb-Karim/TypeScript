function makeChai(type: string, cups: number) {
  console.log(`make ${cups} cups of ${type} chai`);
}
// simply we add type to parameter of a function,, moreover this function is also called a logger function because it does not return anything

// we can also write it in the form of "function makeChai(type:string, cups:number):void {}"

// if a function return something we simple add that data type after the paranthesis

function priceOfChai(type: string): number {
  if (type === "ginger") return 50;
  if (type === "green") return 30;
  return 20;
}

// now if we want pass an object or multiple type values so:

function Chai(order: {
  type: string;
  cups: number;
  sugar: boolean;
  size: "small" | "large";
}): object {
  // if we dont want to return something then we add void after the paranthesis else we add data type after paranthesis, in this case we are returning an object
  return {
    //returning object
  };
}

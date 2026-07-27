let xyz: any = "any";
xyz = 1;
xyz = [1];
xyz = { num: 1 };
xyz.toUpperCase();
// if we assign the type "any" it will not give any error because it does not care

let abc: unknown = "unknown";
abc = 2;
abc = [2];
// but here with "unknwon" type if we add a method like .toUpperCase() it will give us error
//so what should we do here is that we add a check here

if (typeof abc === "string") abc.toUpperCase();

// same problem in try catch block also if we use "Any"

try {
} catch (error) {
  // here we should not use :any instead we use simple error
  // and add a check here
  if (error instanceof Error) console.log(error.message);
}

// suppose we have an array of strings like ['ateeb']

const name: string[] = ["ateeb", "karim"];

// same for numbers

const arr: number[] = [1, 2, 3, 4];

// another method is
const arr2: Array<number> = [1, 2, 3];
const arr3: Array<string> = ["ateeb", "karim"];

//we can also add our custom defined type but it will taken as a object to the array like:

type user = {
  name: string;
  id: number;
};

const arr4: Array<user> = [
  // we can also write this like: arr4: user[]
  {
    name: "ateeb",
    id: 1,
  },
  {
    name: "karim",
    id: 2,
  },
];

// we can also add array in a array like:

const arr5: number[][] = [[1], [2], [3]];

// we can also make an array readonly array

const arr6: readonly string[] = ["ateeb", "karim"];

//---*----

// we can add multiple values to an array like string first and number second

const arr7: [string, number] = ["ateeb", 1];

const arr8: [string, number, boolean?] = ["ateeb", 1];
// here the boolean value could be optional

// these type of aray can also be readonly array like:

const arr9: readonly [string, number?] = ["ateeb"];

// ---**----

//enum are the way of writing a constant variables like:
enum choices {
  SMALL = "smal",
  MEDIUM = "medium",
  LARGE = "large",
}

function makeChoices(choice:choices):void{
  console.log(choice)
}

makeChoices(choices.LARGE)
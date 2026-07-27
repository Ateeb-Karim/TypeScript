type Role = "admin" | "user";

function user(usr: Role) {
  console.log(usr);
}

// simple har coded values to a type this is called union

// ------**--------

type role = {
  role: string;
};
type role2 = {
  role2: string;
};

type mainRole = role & role2;
//this is called intersection .. adding two type to a single type ..

function user2(usr2: mainRole) {
  console.log(usr2);
}

// ------**-------

//another exmaple

type randomUser = {
  name: string;
  role: string;
  exp: number;
};

const u1: randomUser = {
  name: "ateeb",
  role: "frontend developer",
  exp: 1,
};

u1.name = "karim";
// here i can mutate the values
// but assigning it 'readonly' can makes it unmutatable
type anotherUser = {
  readonly name: string;
  // here is the another property called 'readonly' which makes property unchangeable
  role?: string;
  exp?: number;
};

// here the ? tell us that if the user want he can add these values and if he does not want he can let it be empty or not used

const u2: anotherUser = {
  name: "ateeb",
  //here i left the another two properties empty .. no issues because of that question mark(?)
};

//the important thing is that i can create a type and assign it to a variable just i did above and the type have custom properties

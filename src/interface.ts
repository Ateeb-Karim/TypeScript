//sometime we use redundant type in function like

function user(role: { role: string; skill: number; exp: number }) {
  console.log(role);
}

function user2(role: { role: string; skill: number; exp: number }) {
  console.log(role);
}

// so instead of this we use 'type'

type Role = {
  role: string;
  skill: number;
  exp: number;
};

function user3(role: Role) {
  console.log(role);
}

// this is uch easy

// now in classes its a bit trickey

type Role2 = {
  role: string;
  skill: number;
  exp: number;
};

class user4 implements Role2 {
  role = "admin";
  skill = 2;
  exp = 2;
}

// as the above example is not giving us an error but we have another appraoch for this 'interface' which is best for situation like this

interface Role3 {
  role: string;
  skill: number;
  exp: number;
}

class user5 implements Role3 {
  role = "admin";
  skill = 2;
  exp = 2;
}

// interfaces work best here in classes

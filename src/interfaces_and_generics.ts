interface user {
  username: string;
  id: number;
}

const u1: user = {
  username: "ateeb",
  id: 1,
};

function user1(props: user): void {
  const name: string = props.username;
  const id: number = props.id;
  console.log(name, id);
}

// ----**----

//Generics

function func1<T>(value: T): T {
  return value;
}

function func2<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

// we can also make generics in interfaces

interface user2<T> {
  username: T;
}

const username: user2<string> = {
  username: "ateeb",
};

const id: user2<number> = {
  username: 10,
};


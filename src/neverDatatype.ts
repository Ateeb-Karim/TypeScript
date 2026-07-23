type Role = "admin" | "user" | "ceo";

function redirect(role: Role): void {
  if (role === "admin") return console.log(`its ${role}`);
  if (role === "user") return console.log(`its ${role}`);
  //   role;   => here the data type show "never" on hover because it doesnot exist
  // but if we suppose add another role so the another role automatically assign to the third role
  role;
}

// we also have a "never" returning function like:

function noReturn(): never {
  while (true) {}
}

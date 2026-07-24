// there is another concept which is that we can used more values of a type but we can't use less values of the type

type chaiObject = { name: string };

const chai = {
  name: "tea",
  price: 50,
  isHot: true,
};

const gingerChai: chaiObject = chai;

console.log(gingerChai); // output: { name: 'tea', price: 50, isHot: true }

type chaiObject = {
  name: string;
  price: number;
  isHot: boolean;
};

const chai: chaiObject = {
  name: "green tea",
  price: 20,
  isHot: true,
};

// this is how we create object in typescript

//there is another datatype called array of strings

type ChaiObject = chaiObject & {
  ingredients: string[];
};

const adrakChai : ChaiObject = {
    name: 'adrak chai',
    price: 30,
    isHot: true,
    ingredients: ['ginger']
}

// ----**-----

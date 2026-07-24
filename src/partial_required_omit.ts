//suppose we want to take only one values from a type, there we use partial<>

type chai = {
  name: string;
  price: number;
  isHot: boolean;
};

function updateChai(price: Partial<chai>) {
  console.log(`updated price is: ${price}PKR`);
}
// partial<> allows us to use one property or some property of a particular type
// partial<> def: Make all properties in type optional

// ----**-----

// another is Required<>, which alow us to use all the propeties
// Required<> def: Make all properties in type required
// no matter if the property is like "name?" optional it will make it required

function updateChai2(props: Required<chai>) {
  console.log(`chai after update: 
        name: ${props.name},
        price: ${props.price},
        Hot: ${props.isHot}    
    `);
}

// ---**---

// another is pick<> which pick specific propeties matching with a key

// from the abobve type 'chai'

type chaiName = Pick<chai, "name">;

// ----**----

// another is Omit<>,
//omit allow us to hide a particular property like in the bellow example the 'isHot' property is hidden and the rest is assign to the new type

type updatedChai = Omit<chai, "isHot">

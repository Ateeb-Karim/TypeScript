function getChai(kind: string | number) {
  if (typeof kind === "string") return `making ${kind} chai`;
  return `making order: ${kind}`;
}

// due to this explicit check the suggest function after dot changes like kind.charAt()..
// and same for the below return that will suggest kind.toString() this is type narrowing

// => truthyness checking
function Chai(msg?: string) {
  if (msg) return `serving ${msg} chai`;
  return `serving default chai!`;
}

// => exaustive check
function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") return `small cutting chai`;
  if (size === "medium") return `medium chai`;
  if (size === "large") return `large chai`;
  return `chai order: #${size}`;
}

class MatkaChai {
  serve() {
    return `serve matka chai`;
  }
}

class NormalChai {
  serve() {
    return `serve normal chai`;
  }
}

function servingChai(chai: MatkaChai | NormalChai) {
  if (chai instanceof MatkaChai) return chai.serve();
  if (chai instanceof NormalChai) return chai.serve();
}

// we can create our own type like 'small' 'medium' 'large'

type chaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is chaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveChai(item:chaiOrder | number) {
    if (isChaiOrder(item)) return `serving ${item.type} with sugar: ${item.sugar}`;
    return `custom chai is: ${item}`
}

type item = { name: string;}
type address = { address: string;}
//we can make separate types and then use it in a single type
type order = {
    id: number;
    item: item[];
    address: address;
}
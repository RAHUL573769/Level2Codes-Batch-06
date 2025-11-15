// Dynamically Generaized

const friendsGeneric: Array<string> = ["A", "B", "C"];
const numbersGeneric: Array<number> = [1, 23, 4];
// ---------------------------------------
type GenericArray4<T> = Array<T>;

const friendsGeneric1: Array<string> = ["A", "B", "C"];
const numbersGeneric1: Array<number> = [1, 23, 4];

const friendsGeneric11: GenericArray4<string> = ["A", "B", "C"];
const numbersGeneric11: GenericArray4<number> = [1, 23, 4];
// -----------------
type CoOrdinatesGeneric<X, Y> = [X, Y];
const tupleCoordinates: CoOrdinatesGeneric<number, number> = [0.45, 5];

//

type GenericObject<T> = Array<T>;

const userList: GenericObject<{ name: string; age: number }> = [
  { name: "", age: 6 },
];

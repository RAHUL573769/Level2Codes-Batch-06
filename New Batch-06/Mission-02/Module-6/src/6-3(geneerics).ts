// const isEligible: boolean[] = [false, true];

type GenericArray = Array<boolean>;
const isEligible: GenericArray = [false, true];
type GenericValue<value> = Array<value>; //

const rollNumber: GenericValue<number> = [34, 56];

type CoOrdinate<X, Y> = [X, Y]; //

const coordinate: CoOrdinate<string, number> = ["rajfgjf", 35];

// const userList: GenericArray<{ username: "rahul" }> = [{ us }];

type GenericArray1<value> = Array<value>;
const rollNumber1: GenericArray1<string> = ["Rahul", "Rudra"];

const CoOrdinates3: CoOrdinate<number, string> = [23, "drh"];

const userList2: GenericArray1<{ name: string; age: number }> = [
  { name: "Rahul Rudra", age: 3 },
];

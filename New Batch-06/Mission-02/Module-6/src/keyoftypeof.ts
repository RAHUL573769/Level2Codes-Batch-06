type RichPeopleVehicle = {
  car: string; //key:value
  cng: string;
  bike: string;
};

type MyVehicle1 = "bike" | "car";
type MyVehicle2 = keyof RichPeopleVehicle;

const myVehicle: MyVehicle2 = "bike";
// ---------------------
// type UserType = { name: string; id: number };
// const user1: UserType = { id: 222, name: "Mezbah" };

// console.log(user1["id"]);

// const getPropertiesFromObject = (obj: object, key: keyof UserType) => {
//   return obj[key];
// };
// const result1 = getPropertiesFromObject(user1, "name");

// console.log(result1);
type UserType = { name: string; id: number };
const user1: UserType = { id: 222, name: "Mezbah" };

const getPropertiesFromObject = <T, K extends keyof T>(
  obj: T,
  key: K
): T[K] => {
  return obj[key];
};

const result1 = getPropertiesFromObject(user1, "id");
console.log(result1);

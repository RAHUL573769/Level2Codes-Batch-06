type UserType1 = { id: number; name: string };

type Role1 = { role: "admin" | "user" };

type UserWithRole1 = UserType1 & Role1;

const user8: UserWithRole1 = {
  id: 1,
  name: "",
  role: "admin", // must be "admin" or "user"
};

// ********

interface IUser0 {
  name: string;
}

const user0: IUser0 = { name: "" };
interface IFriends {
  [index: number]: string;
}
const friend5: IFriends = ["A", "B", "C"];
console.log(friend5);
interface INumberInterface {
  (a: number, b: number, c: number, d: number): number;
}
const numberInterface: INumberInterface = (a, b, c, d) => {
  return a + b + c + d;
};

console.log(numberInterface(1, 2, 3, 4));

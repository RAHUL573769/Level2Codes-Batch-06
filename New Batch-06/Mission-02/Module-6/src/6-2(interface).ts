type User = {
  name: string;
  age: number;
};

type Role = { role: "admin" };
type UserWithRole = User & Role;
const user: UserWithRole = {
  age: 34,
  name: "Rahul ",
  role: "admin",
};
// -----------------

interface IUser {
  name: string;
  age: 123;
}

//interface works on  object type: array, object and Function
interface IFriends {
  [index: number]: string;
}
interface IAdd {
  (num1: number, num2: number): number;
}

const add: IAdd = (num1, num2) => num1 + num2;

console.log(add(2, 5));

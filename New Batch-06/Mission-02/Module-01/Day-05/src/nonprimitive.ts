const bazarList: string[] = ["Sugar", "Vegetables"];
// bazarList.push(45)
console.log(bazarList);
let mixedArray: (string | number | boolean)[] = ["eggs", 12, true];
mixedArray.push(567);

const couple: [string, string] = ["Husband", "wife"];

console.log(typeof couple);

const user: {
  firstName: string;
  middleName?: string;
  organization?: string;
  lastName: string;
} = { firstName: "Rahul Rudra", lastName: "Rudra", organization: "Phero" };
console.log(user);

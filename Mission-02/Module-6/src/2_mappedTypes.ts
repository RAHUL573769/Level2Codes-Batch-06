const arrayOfStrings: string[] = [""];
const arrayOfNumber = [1, 2, 3];

type AreaOfNumber = { height: number; width: number };

// type AreaOfString = {
//   heigth: number;
//   width: number;
// };

// type AreaOfString = {
//   [key in keyof AreaOfNumber]: string;
// };

type AreaOfString<T> = {
  //   [key in keyof T]: string;

  [key in keyof T]: T[key];
};

const area: AreaOfString<{ height: string; width: string }> = {
  height: "",
  width: "",
};

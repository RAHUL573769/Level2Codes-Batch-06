type AreaOfNum = {
  height: number;
  width: number;
};

type Area<T> = {
  [key in keyof T]: boolean;
};
// const area1: Area<{ height: string; width: string }> = {
//   height: "46",
//   width: "56",
// };
const area1: Area<{ height: string; width: string }> = {
  height: true,
  width: false,
};
// ------------------------------------
type AreaOfNum1 = {
  height: number;
  width: number;
};

type Area1<T> = {
  [key in keyof T]: T[key];
};
// const area1: Area<{ height: string; width: string }> = {
//   height: "46",
//   width: "56",
// };
// const area2: Area<{ height: string; width: string }> = {
//   height: "755",
//   width: false,
// };

const area2: Area1<{ height: string; width: boolean }> = {
  height: "755",
  width: false,
};

console.log(area2);

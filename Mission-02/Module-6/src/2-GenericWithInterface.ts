interface Developer1<T, X = null> {
  name: string;
  age: number;
  watch: T;
  salary?: X;
}

type AppleWatch2 = {
  heartRate: number;
  price: number;
  tag: number;
  date: number;
};
const poorDeveloper: Developer1<AppleWatch2> = {
  name: "Rahul",
  age: 23,
  watch: { heartRate: 123, date: 23, price: 123, tag: 567 },
};

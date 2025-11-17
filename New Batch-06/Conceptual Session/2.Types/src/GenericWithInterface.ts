interface Car1<T, C = null> {
  model: string;
  name: string;
  color: T;
  countryMade: C;
}
type colorProperties = { primary: string };

const hyndai: Car1<colorProperties, null> = {
  model: "",
  name: "",
  color: { primary: "blue" },
  countryMade: null,
};

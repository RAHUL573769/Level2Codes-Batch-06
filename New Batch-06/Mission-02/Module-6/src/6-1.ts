// typeassertion

let anything: any;

anything = "strjhnh";

const newNumber = (anything as string).concat(" World");
console.log(newNumber);

const kgTOGMConverter = (input: number | string) => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split("");
    return ` Converted output ${Number(value) * 1000}`;
  }
};

const result = kgTOGMConverter("2kg") as string;

console.log(result);
type CustomError = {
  message: string;
};

try {
} catch (err) {
  console.log((err as CustomError).message);
}

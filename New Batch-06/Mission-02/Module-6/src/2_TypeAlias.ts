let anything2: any = "hr";

const converted = (anything2 as string).toLowerCase;
console.log(converted);

// ---------------

const kgToGramConverter = (input: string | number) => {
  if (typeof input === "number") {
    return input * 100;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    const output = `${value}*100`;
    return output;
  }
};

const output2 = kgToGramConverter(2) as number;
console.log(output2);

// ----------------------

type ErrorType = { message: "Error Found" };

try {
} catch (error: unknown) {
  console.log((error as ErrorType).message);
}

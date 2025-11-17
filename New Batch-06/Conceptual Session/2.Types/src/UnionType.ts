{
  type TPerson = {
    name: string;
  };
  type TNumber = {
    age: number;
  };

  let finalProp: TPerson & TNumber = {
    name: "fgh",
    age: 45,
  };

  console.log(finalProp);
}

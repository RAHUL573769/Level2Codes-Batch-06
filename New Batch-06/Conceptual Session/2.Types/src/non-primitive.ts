{
  type TPerson = {
    name: string;
    age: number;
    city: string;
    phoneNumber?: number;
  };
  let person: TPerson = {
    name: "Rahul",
    age: 45,
    city: "Bangladesh",
  };

  console.log(person);

  const phones: string[] = ["Rsss", ""];

  type MixedArray<A, B> = [A, B];
  const mixedArray: MixedArray<string, number> = ["22", 56];

  type GenericArray<S, F, H> = [S, F, H];

  const number1: GenericArray<number, string, boolean> = [12, "", false];
  enum TrafficLight {
    Red = "RED",
    Yellow = "YELLOW",
    White = "WHITE",
  }

  const light = {
    red: TrafficLight.Red,
    yellow: TrafficLight.Yellow,
  };
}

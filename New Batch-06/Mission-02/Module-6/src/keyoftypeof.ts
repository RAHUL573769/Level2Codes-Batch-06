type RichPeopleVehicle = {
  car: string; //key:value
  cng: string;
  bike: string;
};

type MyVehicle1 = "bike" | "car";
type MyVehicle2 = keyof RichPeopleVehicle;

const myVehicle: MyVehicle2 = "bike";

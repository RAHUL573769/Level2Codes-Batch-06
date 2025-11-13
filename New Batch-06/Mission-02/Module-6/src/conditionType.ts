type RichPeopleVehicle1 = {
  car: "Car";
  truck: "Truck";
};

type CheckVehicle<T> = T extends keyof RichPeopleVehicle1 ? true : false;

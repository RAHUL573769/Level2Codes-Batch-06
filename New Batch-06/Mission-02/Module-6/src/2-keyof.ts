//keyof

type RichPeople = {
  car: string;
  bike: string;
  cng: string;
};

type MyVehicle = keyof RichPeople;
// ---------------------------------

type UserType3 = { name: string; id: number; address: { city: string } };
const user9: UserType3 = {
  name: "Mezbah",
  id: 13,
  address: {
    city: "CTG",
  },
};

const getPropertiesFromObj = (obj: UserType3, key: keyof UserType3) => {
  return obj[key];
};

console.log(getPropertiesFromObj(user9, "name"));

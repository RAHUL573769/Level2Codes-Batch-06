interface UserConstraits {
  id: number;
  name: string;
}

interface Developer<T extends UserConstraits> {
  name: string;
  salary: number;

  device: {
    brand: string;
    releasedYear: string;
    model: string;
    isRich?: boolean;
  };
  smartWatch: T;
}
interface BrandCharaWatch {
  heartRate: string;
  callSupport: boolean;
  id: number;
  name: string;
}
interface AppleWatch {
  heartRate: string;
  callSupport: boolean;
  id: number;
  name: string;
}
const rahulWebDeveloper: Developer<BrandCharaWatch> = {
  name: "FRa",
  device: { brand: "gsg", releasedYear: "dfds", model: "dvdvs", isRich: false },
  salary: 7,
  smartWatch: { heartRate: "New", callSupport: false, id: 1, name: "" },
};

const newDeveloper: Developer<AppleWatch> = {
  name: "Rahul",
  device: { brand: "", model: "", releasedYear: "", isRich: true },
  salary: 25,
  smartWatch: { callSupport: false, heartRate: "True", id: 2, name: "" },
};

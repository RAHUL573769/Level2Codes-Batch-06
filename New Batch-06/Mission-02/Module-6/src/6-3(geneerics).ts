// const isEligible: boolean[] = [false, true];

type GenericArray = Array<boolean>;
const isEligible: GenericArray = [false, true];
type GenericValue<value> = Array<value>;

const rollNumber: GenericValue<number> = [34, 56];

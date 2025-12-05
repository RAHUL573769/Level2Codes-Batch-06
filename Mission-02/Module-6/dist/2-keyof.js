"use strict";
//keyof
const user9 = {
    name: "Mezbah",
    id: 13,
    address: {
        city: "CTG",
    },
};
const getPropertiesFromObj = (obj, key) => {
    return obj[key];
};
console.log(getPropertiesFromObj(user9, "name"));

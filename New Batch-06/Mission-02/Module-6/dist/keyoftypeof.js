"use strict";
const myVehicle = "bike";
const user1 = { id: 222, name: "Mezbah" };
const getPropertiesFromObject = (obj, key) => {
    return obj[key];
};
const result1 = getPropertiesFromObject(user1, "id");
console.log(result1);

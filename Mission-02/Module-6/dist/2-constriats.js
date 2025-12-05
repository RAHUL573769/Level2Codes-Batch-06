"use strict";
const addToCourse = (studentInfo) => {
    return Object.assign({ course: "Next -Level" }, studentInfo);
};
const student1 = { name: "", id: 3 };
console.log(addToCourse(student1));

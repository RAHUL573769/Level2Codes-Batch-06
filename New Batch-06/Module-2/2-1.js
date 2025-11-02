const course1 = "JavaScript"; // define the key

const obj = {
  nextLevel: { courseId: "Level2" },
  "Programming-Hero": "data",
};
console.log(obj.nextLevel);
console.log(obj["Programming-Hero"]);

const courseMap = new Map();
courseMap.set(course1, { courseId: "Level-2" });

console.log(courseMap.entries());

courseMap.forEach((value, key) => {
  "Value", value;
});
courseMap.forEach((value, key) => console.log("Key:", key, "Value:", value));

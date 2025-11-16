const addToCourse = <T extends { name: string; id: number }>(
  studentInfo: T
) => {
  return { course: "Next -Level", ...studentInfo };
};

const student1 = { name: "", id: 3 };

console.log(addToCourse(student1));

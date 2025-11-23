db.data.aggregate([
  {
    $match: {
      gender: "Male",
      age: { $lt: 30 },
    },
  },
  {
    $project: {
      name: 1,
      gender: 1,
      age: 1,
    },
  },
]);
// ----------

db.data.aggregate([
  {
    $match: {
      gender: "Male",
      age: { $lt: 30 },
    },
  },

  { $addFields: { course: "Level-2" } },
]);

// ---------------

db.data.aggregate([
  {
    $group: { _id: "$gender" },
  },
]);

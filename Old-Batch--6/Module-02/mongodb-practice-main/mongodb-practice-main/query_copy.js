// db.test.findOne({email:"mdangl1@odnoklassniki.ru"},{email:1,name:1,gender:1})

// db.test.findOne({gender:{$eq: "Male"}})


// db.test.findOne({
//   "education.degree": { $eq: "Doctor of Philosophy" }
// },{"email":1})

// db.test.find({ age: { $lt: 30 } }).sort({ age: 1 })
// db.test.find({ age: { $lt: 30 } }).sort({ age: 1 })

// db.test.find(
//   { age: { $lt: 18 } },   // filter
//   { age: 1 }              // projection
// ).sort({ age:-1 })

// db.test.find({gender:"Female",age:{$in: [12,18,20]}},{age:1,gender:1}).sort


db.test.find({
  $and: [
    { age: { $ne: 15 } },
    { age: { $lte: 20 } }
  ]
},).project({age:15})




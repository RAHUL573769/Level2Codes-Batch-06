type User = { profession: string };

type Admin = { role: "admin"; profession: string };

function checkUser(user: User | Admin) {
  if ("role" in user) {
    console.log("This is Admin");
  } else {
    console.log(user.profession);
  }
}

// Correct examples:
checkUser({ profession: "Engineer" });
checkUser({ role: "admin", profession: "Manager" });

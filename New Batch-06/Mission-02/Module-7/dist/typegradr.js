"use strict";
function checkUser(user) {
    if ("role" in user) {
        console.log("This is Admin");
    }
    else {
        console.log(user.profession);
    }
}
// Correct examples:
checkUser({ profession: "Engineer" });
checkUser({ role: "admin", profession: "Manager" });

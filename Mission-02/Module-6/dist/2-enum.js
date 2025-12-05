"use strict";
// type UserRoles = "Admin" | "User";
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "Admin";
    UserRoles["User"] = "User";
})(UserRoles || (UserRoles = {})); //not recommended
const canEdit = (roles) => {
    if (roles === UserRoles.Admin) {
        console.log("Can Edit");
    }
    else if (roles === UserRoles.User) {
        console.log(" Can Edit");
    }
};

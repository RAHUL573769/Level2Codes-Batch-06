"use strict";
// enum UsersRole {
//   Admin1 = "Admin",
//   Editor1 = "Editor",
// },
const UserRolesConst = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer",
};
const userData = (role) => {
    console.log(UserRolesConst.Admin);
    // ✅ prints: Admin
};
userData("Admin");

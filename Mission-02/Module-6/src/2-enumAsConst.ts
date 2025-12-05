// type UserRoles = "Admin" | "User";
// enum UserRoles {
//   Admin2 = "Admin",
//   User2 = "User",
// }
// not recommended

const UserRoles8 = {
  Admin: "Admin",
  Viewer: "Viewer",
} as const;
const canEdit2 = (roles: keyof typeof UserRoles8) => {
  if (roles === UserRoles8.Admin) {
    console.log("Can Edit");
  } else if (roles === UserRoles8.Viewer) {
    console.log(" Can Edit");
  }
};
const canEdit3 = (roles: (typeof UserRoles8)[keyof typeof UserRoles8]) => {
  if (roles === UserRoles8.Admin) {
    console.log("Can Edit");
  } else if (roles === UserRoles8.Viewer) {
    console.log(" Can Edit");
  }
};

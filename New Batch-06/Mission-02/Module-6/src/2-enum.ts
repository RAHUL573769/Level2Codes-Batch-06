// type UserRoles = "Admin" | "User";
enum UserRoles {
  Admin = "Admin",
  User = "User",
} //not recommended
const canEdit = (roles: UserRoles) => {
  if (roles === UserRoles.Admin) {
    console.log("Can Edit");
  } else if (roles === UserRoles.User) {
    console.log(" Can Edit");
  }
};                                      

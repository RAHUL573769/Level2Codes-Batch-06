// enum UsersRole {
//   Admin1 = "Admin",
//   Editor1 = "Editor",
// },

const UserRolesConst = {
  Admin: "Admin",
  Editor: "Editor",
  Viewer: "Viewer",
} as const;

const userData = (
  role: (typeof UserRolesConst)[keyof typeof UserRolesConst]
) => {
  console.log(UserRolesConst.Admin);

  // ✅ prints: Admin
};
userData("Admin");

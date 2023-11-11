export type SidebarTitle = "Dashboard" | "Users" | "Plans" | "Exercises";

export type SidebarPath =
  | "/admin/dashboard"
  | "/admin/users"
  | "/admin/plans"
  | "/admin/exercies";

export type SidebarItem = {
  title: SidebarTitle;
  path: SidebarPath;
  icon: React.ReactNode;
};

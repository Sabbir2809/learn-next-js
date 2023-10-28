import NavLink from "./NavLink";

const navLinks = [
  { path: "/dashboard", title: "Dashboard" },
  { path: "/dashboard/add-product", title: "Add Product" },
  { path: "/dashboard/manage-product", title: "Manage Product" },
  {
    path: "/",
    title: "Home",
  },
];

const Sidebar = () => {
  return (
    <aside className="mr-10 bg-black text-white min-h-screen">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <ul>
        {navLinks.map(({ path, title }) => (
          <li key={path} className="my-2 mx-2">
            <NavLink activeClassName="text-blue-500" exact href={path}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

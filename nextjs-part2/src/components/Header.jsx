import useSomething from "@/hooks/useSomething";
import NavLink from "./NavLink";

const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/profile",
    title: "Profile",
  },
  {
    path: "/blogs",
    title: "Blogs",
  },
  {
    path: "/dashboard",
    title: "Dashboard",
  },
];

const Header = () => {
  const [] = useSomething();

  return (
    <nav className="flex items-center justify-between mx-auto bg-black text-white">
      <h1 className="text-xl">Learn Next Js</h1>
      <ul className="flex items-center justify-center">
        {navLinks.map(({ path, title }) => (
          <li key={path} className="mx-2">
            <NavLink activeClassName="text-blue-500" exact href={path}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;

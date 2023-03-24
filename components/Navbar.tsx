import Link from "next/link";
import { useRouter } from "next/router";

const navbarItems = [
  {
    title: "About",
    link: "/",
    id: "about",
  },
  {
    title: "Services",
    link: "/services",
    id: "services",
  },
  {
    title: "Clients",
    link: "/clients",
    id: "clients",
  },
  {
    title: "Partners",
    link: "/partners",
    id: "partners",
  },
  {
    title: "Contact Us",
    link: "/contact-us",
    id: "contact-us",
  },
];

export const Navbar = ({activePage, setActivePage}: {activePage: number; setActivePage: (activePage: number) => void}) => {
  const router = useRouter();
  return (
    <div className="navbar top-0 z-30 !sticky bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navbarItems.map((item) => (
              <li
                className={router.pathname == item.link ? " btn-active" : ""}
                key={item.id}>
                <Link href={item.link} passHref>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/" passHref className="btn btn-ghost normal-case text-xl">
          Advantify.IO
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navbarItems.map((item) => (
            <li
              className={router.pathname == item.link ? " btn-active" : ""}
              key={item.id}>
              <Link href={item.link} passHref>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">{/* <a className="btn">Something</a> */}</div>
    </div>
  );
};

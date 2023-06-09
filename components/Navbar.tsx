import Link from "next/link";
import { useRouter } from "next/router";

const navbarItems: {
  label: string;
  id: string;
  noBlock?: boolean; // this to navigate the section with some plus top offset
}[] = [
  {
    label: "About",
    id: "about",
  },
  {
    label: "Services",
    id: "services",
  },
  {
    label: "Clients",
    id: "clients",
  },
  {
    label: "Partners",
    id: "partners",
  },
  {
    label: "Contact Us",
    id: "contact-us",
  },
];

export const Navbar = ({
  handleClickScroll,
  currentSectionId,
}: {
  handleClickScroll: (itemId: string, noBlock?: boolean) => void;
  currentSectionId: string;
}) => {
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
                className={
                  currentSectionId == item.id
                    ? " btn-active btn btn-ghost normal-case"
                    : "btn btn-ghost normal-case"
                }
                key={item.id}
                onClick={() => handleClickScroll(item.id, item.noBlock)}>
                {item.label}
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
              className={
                currentSectionId == item.id
                  ? " btn-active btn btn-ghost normal-case"
                  : "btn btn-ghost normal-case"
              }
              onClick={() => handleClickScroll(item.id, item.noBlock)}
              key={item.id}>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li className={router.pathname == "/blog" ? " btn-active" : ""}>
            <Link href="/blog" passHref>
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

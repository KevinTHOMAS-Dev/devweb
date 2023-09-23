import { FaWindowMinimize } from "react-icons/fa";

import Navitem from "./Navitem";


const Navlinks = [
    {
      title: "Home",
      link: "/",
      icon: <FaWindowMinimize/>,
      submenu: [
        { title: "Blog", link: "/" },
        { title: "Blog", link: "/" },
        { title: "Blog", link: "/" },
        { title: "Blog", link: "/" },
      ],
    },
    { title: "About", link: "/" },
    { title: "Blog", link: "/blog" },
    { title: "Contact", link: "/" },
  ];


const Navbar = () => {
  return (
    <nav>
      <ul>
        {Navlinks.map((item: any, index) => (
          <Navitem key={index} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

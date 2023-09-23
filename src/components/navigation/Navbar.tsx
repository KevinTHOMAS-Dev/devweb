import { Navlinks } from "@/constants";

import Navitem from "./Navitem";



const Navbar = () => {
    return (
        <nav>
            <ul>
                {Navlinks.map((item:any, index) => <Navitem key={index}  item={item} />)}
            </ul>
        </nav>
    );
};

export default Navbar;
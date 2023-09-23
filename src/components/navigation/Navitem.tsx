"use client";

import  Link  from "next/link"
import { useState } from "react";
import Dropmenu from "./Dropmenu";



const Navitem= ( {item}:any )=> {

    const [ open, setOpen ] = useState(false);

    return (
        <li onMouseEnter={() => setOpen(!open)} onMouseLeave={() => setOpen(!open)} >
            <Link href={item.link}>
                {item.image ? item.image : item.title}
            </Link>
            { item.submenu ?  open && <Dropmenu items={item.submenu} /> : null }
        </li>
    );
};

export default Navitem;
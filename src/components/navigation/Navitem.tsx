"use client";

import { useState } from "react";
import  Link  from "next/link"

import Dropmenu from "./Dropmenu";



const Navitem= ( {item}:any )=> {

    const [ open, setOpen ] = useState(false);

    return (
        <li onMouseEnter={() => setOpen(!open)} onMouseLeave={() => setOpen(!open)} >
            <Link href={item.link}>
                {item.icon ? item.icon : item.title}
            </Link>
            { item.submenu ?  open && <Dropmenu items={item.submenu} /> : null }
        </li>
    );
};

export default Navitem;
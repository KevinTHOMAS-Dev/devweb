"use client";

import  Link  from "next/link"
import { Children, useState } from "react";
import Dropmenu from "./Dropmenu";


const Navitem = ( {item}:any )=> {

    const [ open, setOpen ] = useState(false);

    return (
        <li onMouseEnter={() => setOpen(!open)} onMouseLeave={() => setOpen(!open)} >
            <Link href={item.link}>
                {item.image ? item.image : item.name}
            </Link>
            { item.child ?  open && <Dropmenu items={item.child} /> : null }
        </li>
    );
};

export default Navitem;
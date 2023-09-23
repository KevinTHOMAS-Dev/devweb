"use client";

import { useState } from "react";
import User from "./User";
import Navitem from "./navigation/Navitem";

const dataAuth = [
    {title:"Sign in", link:"/signin"},
    {title: "Register", link:"/"}
]


const Header = () => {

    const [auth, setAuth ] = useState(false)

    return (
        <header>
            {auth ? <User/>  : (
                <ul>
                    {dataAuth.map((item:any, index) => <Navitem key={index} item={item}  />)}
                </ul>
            ) }
        </header>
    );
};

export default Header;
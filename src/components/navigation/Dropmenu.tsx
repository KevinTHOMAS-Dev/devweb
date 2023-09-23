

import Link from 'next/link';
import { useState } from 'react';



const Dropmenu  = ({items}:any) => {



    return (
        <ul className='drop'>
            {items.map((item:any, index:number) =>
                <li key={index}>
                    <Link href={item.link}>
                        {item.title}
                    </Link>
                </li>
            )}
        </ul>
    );
};

export default Dropmenu;


import Image from "next/image";
import  Link  from "next/link"

const Navitem = ({item}:any) => {
    return (
        <li>
            <Link href={item.link}>
                {item.image ? (
                    <Image src={item.image} width={40} height={40} alt={item.name}/>
                ) : item.name}
                
            </Link>
        </li>
    );
};

export default Navitem;
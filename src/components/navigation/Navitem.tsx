import  Link  from "next/link"

const Navitem = ({item}:any) => {
    return (
        <li>
            <Link href={item.link}>
                {item.name}
            </Link>
        </li>
    );
};

export default Navitem;
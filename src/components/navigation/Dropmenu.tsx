import Link from 'next/link';


const Dropmenu = ({items}:any) => {
    return (
        <ul className='drop'>
            {items.map((item:any, index:number) =>
                <li key={index}>
                    <Link href={item.link}>
                        {item.name}
                    </Link>
                </li>
            )}
        </ul>
    );
};

export default Dropmenu;
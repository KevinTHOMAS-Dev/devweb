import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

import Navitem from "./navigation/Navitem";


const dataWidget = [
    {link: "https://github.com/KevinTHOMAS-Dev", icon: <AiFillGithub size= {60} color= "white" /> },
    {link: "https://www.linkedin.com/in/thomaskevin-dev/", icon: <AiFillLinkedin size= {60} color= "#0A66C2" /> }
]


const Widgetpanel = () => {
    return (
        <aside className="widget">
            <ul>
               {dataWidget.map((item, index) => <Navitem key= {index} item={item} />)} 
            </ul>
        </aside>
    );
};

export default Widgetpanel;
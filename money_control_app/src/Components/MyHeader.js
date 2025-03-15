import {NavLink} from "react-router-dom"
import "../css/HeaderCSS.css"

const MyHeader = () => {
    return (
        <nav>
            <li><NavLink to="/Daily">Daily</NavLink></li>
            <li><NavLink to="/Calender">Calender</NavLink></li>
            <li><NavLink to="/Monthly">Monthly</NavLink></li>
        </nav>
    );
}

export default MyHeader;
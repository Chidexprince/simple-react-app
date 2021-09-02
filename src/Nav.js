import {NavLink} from 'react-router-dom';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <div className="brand-logo">C' Intro</div>
                <ul className="right">
                    <li>
                        <Link to="/">Artists</Link> 
                    </li>
                    <li>
                        <Link to="/albums">Albums</Link> 
                    </li>
                    <li>
                        <Link to="/tweets">Tweets</Link> 
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
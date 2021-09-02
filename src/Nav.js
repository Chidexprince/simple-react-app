import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav-wrapper teal darken-3">
            <div className="container">
                <div className="brand-logo">C' Intro</div>
                <ul className="right">
                    <li>
                        <Link to="/">Artists</Link> 
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
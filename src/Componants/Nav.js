import { Link } from "react-router-dom";

function Nav(){
    return(
        <div className="nav-bar">
            <Link to="/home" className="h">Home</Link>
            <Link to="/about" className="h">About</Link>
            <Link to="/contact" className="h">Contact</Link>
            <Link to="signup" className="h">SignUp</Link>
            {/*<a href="/about" className="h">About</a>*/}
        </div>
    )
}

export default Nav;
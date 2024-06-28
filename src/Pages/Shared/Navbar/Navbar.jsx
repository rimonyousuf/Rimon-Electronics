import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png"
import './Navbar.css'
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {

    const { user, logOut } = useAuth()

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Carts</Link></li>
        <li><Link to="/about">About Us</Link></li>
        {
            user ?
                <>
                    <button onClick={handleLogOut} className="btn btn-ghost pb-3">Log Out</button>
                </>
                :
                <>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </>
        }
    </>

    return (
        <>
            <div className="navbar bg-opacity-85 max-w-screen-xl bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box text-white w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-white text-xl">
                        <Link to="/">
                            <img className="logo" src={logo} alt="" />
                        </Link>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-white px-1">
                        {navOptions}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
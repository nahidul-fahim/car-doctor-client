import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg';
import { useContext } from "react";
import { AuthCont } from "../../Context/AuthContext/AuthContext";


const Header = () => {

    const { logout, currentUser } = useContext(AuthCont);

    const links = <>
        <NavLink className="font-semibold py-1" to="/">Home</NavLink>
        {
            currentUser ?
                <div className="space-x-10">
                    <NavLink className="font-semibold py-1" to="/mycart">My Cart</NavLink>
                    <button className="font-semibold bg-main text-white px-3 py-1 rounded" onClick={logout}>Logout</button>
                </div>
                :
                <NavLink className="font-semibold py-1 bg-main text-white px-3 rounded" to="/login">Login</NavLink>
        }

    </>



    return (
        <div className="py-5">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-10">
                            {links}
                        </ul>
                    </div>
                    <Link to="/"><img src={logo} alt="Website Logo" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-10">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="px-4 py-2 font-semibold rounded border-2 text-main hover:text-[white] hover:bg-main duration-500 border-main">Appointment</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
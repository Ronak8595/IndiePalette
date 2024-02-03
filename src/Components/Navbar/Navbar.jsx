import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import Logo from "../Assets/Logo.png";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [activeLink, setActiveLink] = useState("/");
    const location = useLocation();

    const handleClick = () => {
        setClick(!click);
    };

    useEffect(() => {
        setActiveLink(location.hash || location.pathname);
    }, [location]);

    const content = (
        <>
            <div className="lg:hidden block absolute top-[8vh] w-full left-0 right-0 bg-[#5C0728] transition">
                <ul className="text-center text-xl px-10">
                    <li
                        className="my-2 py-2 border-b border-[#5C0728] hover:bg-slate-800 hover:rounded"
                        onClick={handleClick}
                    >
                        <Link to="/">Home</Link>
                    </li>
                    <li
                        className="my-2 py-2 border-b border-[#5C0728] hover:bg-slate-800 hover:rounded"
                        onClick={handleClick}
                    >
                        <a href="/#colls">Collections</a>
                    </li>
                    <li
                        className="my-2 py-2 border-b border-[#5C0728] hover:bg-slate-800 hover:rounded"
                        onClick={handleClick}
                    >
                        <Link to="/about">About Us</Link>
                    </li>
                    <li
                        className="my-2 py-2 border-b border-[#5C0728] hover:bg-slate-800 hover:rounded"
                        onClick={handleClick}
                    >
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </>
    );

    return (
        <div className="relative">
            <div className="sm:h-[12vh] h-[8vh] flex justify-between z-10 bg-[#5C0728] text-[#FFD08A] sm:px-[1.5%] px-[3.5%] fixed top-0 left-0 right-0 shadow-2xl shadow-black-500/50">
                <div className="flex items-center">
                    <Link to="/">
                        <span className="font-samarkan sm:text-5xl text-2xl cursor-pointer">
                            Indie Palette
                        </span>
                    </Link>
                </div>
                <div className="sm:flex hidden items-center justify-center text-2xl w-3/4 flex-1 font-Poppins">
                    <div className="justify-evenly w-7/12">
                        <ul className="flex justify-evenly">
                            <li
                                className={`cursor-pointer ${
                                    activeLink === "/"
                                        ? "underline underline-offset-8 decoration-[#FFD08A] decoration-4"
                                        : ""
                                }`}
                            >
                                <Link to="/">Home</Link>
                            </li>
                            <li
                                className={`cursor-pointer ${
                                    activeLink === "#colls"
                                        ? "underline underline-offset-8 decoration-[#FFD08A] decoration-4"
                                        : ""
                                }`}
                            >
                                <a href="/#colls">Collections</a>
                            </li>
                            <li
                                className={`cursor-pointer ${
                                    activeLink === "/about"
                                        ? "underline underline-offset-8 decoration-[#FFD08A] decoration-4"
                                        : ""
                                }`}
                            >
                                <Link to="/about">About Us</Link>
                            </li>
                            <li
                                className={`cursor-pointer ${
                                    activeLink === "/contact"
                                        ? "underline underline-offset-8 decoration-[#FFD08A] decoration-4"
                                        : ""
                                }`}
                            >
                                <Link to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sm:flex hidden h-[90%] align-bottom">
                    <Link to="/">
                        <img
                            className="h-full cursor-pointer align-bottom"
                            src={Logo}
                        />
                    </Link>
                </div>
                <div>{click && content}</div>
                <button
                    className="block sm:hidden transition"
                    onClick={handleClick}
                >
                    {click ? <FaTimes /> : <CiMenuBurger />}
                </button>
            </div>
        </div>
    );
};
export default Navbar;

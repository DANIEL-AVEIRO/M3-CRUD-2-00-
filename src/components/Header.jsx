import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-between items-center p-6 bg-gray-200">
            <div>
                <h1 className="text-5xl">LOGO</h1>
            </div>
            <ul className="flex items-center gap-4">
                <li className="text-2xl bg-black text-white py-4 px-6 rounded-xl">
                    <Link to={"/"}>Product List</Link>
                </li>
                <li className="text-2xl bg-black text-white py-4 px-6 rounded-xl">
                    <Link to={"/product/create/"}>Product Create</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;

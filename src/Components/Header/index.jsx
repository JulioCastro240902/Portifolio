import { Link } from "react-router-dom";
import Logo from "../../assets/JC-logo.png";

import { useState } from "react";

export default function Header() {
  const [Open, setOpen] = useState(false);

  return (
    <div className="w-full h-36">
      <div className="flex justify-between items-center pl-16 pr-16 pt-8">
        <figure className="w-32 h-32 rounded-full cursor-pointer">
          <Link to="/">
            <img className="w-full h-full" src={Logo} alt="Website Logo" />
          </Link>
        </figure>
        <nav className="w-[450px]">
          <ul className="text-2xl flex justify-between items-center">
            <li className="cursor-pointer hover:text-violet-600 ">
              <Link to="/AboutMe">About me</Link>
            </li>
            <li className="cursor-pointer hover:text-violet-600 ">
              <Link to="/Projects">Projects</Link>
            </li>
            <Link
              to="/Contact"
              className="w-40 h-16 border-[3px] flex itens-center justify-center border-violet-600 text-violet-600 rounded-full hover:bg-violet-600 hover:text-white  cursor-pointer"
            >
              <button className="flex items-center justify-center ">
                Contact
              </button>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

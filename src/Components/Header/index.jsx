import { Link } from "react-router-dom";
import Logo from "../../assets/JC-logo.png";
import WhiteLogo from "../../assets/JC-logo-white.png";

import { useState } from "react";
import MenuMobile from "../MenuMobile/MenuMobile";

export default function Header() {
  const [MenuisOpen, setMenuisOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-1 h-36 justify-between items-center pl-8 pr-8">
        <figure className="w-32 h-32 inline-block">
          <Link to="/">
            <img
              className="w-full h-full z-[2] relative"
              src={MenuisOpen ? WhiteLogo : Logo}
              alt="Website Logo"
            />
          </Link>
        </figure>
        <nav className="w-[500px] hidden md:inline-block  ">
          <ul className="text-3xl w-[100%] flex justify-between items-center">
            <li className="cursor-pointer hover:text-violet-600">
              <Link to="/AboutMe">About me</Link>
            </li>
            <li className="cursor-pointer hover:text-violet-600 transition-all ">
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
        <MenuMobile MenuisOpen={MenuisOpen} setMenuisOpen={setMenuisOpen} />
      </div>
    </div>
  );
}

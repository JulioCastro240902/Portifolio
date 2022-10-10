import { useState } from "react";
import { IoCloseCircleSharp, IoReorderFourOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function MenuMobile({ MenuisOpen, setMenuisOpen }) {
  return (
    <>
      <div className="3xl:inline-block md:hidden">
        {MenuisOpen ? (
          <IoCloseCircleSharp
            size={50}
            color={"#fff"}
            cursor={"pointer"}
            onClick={() => setMenuisOpen(false)}
            className="z-[2] relative"
          />
        ) : (
          <IoReorderFourOutline
            size={50}
            color={"#8003FF"}
            cursor={"pointer"}
            onClick={() => setMenuisOpen(true)}
            className="z-[2]"
          />
        )}
      </div>
      {MenuisOpen && (
        <nav className="md:hidden sm:hidden  w-[100%] h-[100vh]  absolute top-0 left-0 flex items-center justify-center  bg-violet-600">
          <ul className="text-3xl w-[100%] h-[100%] flex flex-col gap-10 justify-center items-center text-white">
            <li className="cursor-pointer hover:text-violet-600">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:text-violet-600">
              <Link to="/AboutMe">About me</Link>
            </li>
            <li className="cursor-pointer hover:text-violet-600 transition-all ">
              <Link to="/Projects">Projects</Link>
            </li>
            <li className="flex itens-center justify-center border-violet-600 text-white rounded-full hover:bg-violet-600 hover:text-white  cursor-pointer">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

import { useState } from "react";
import Logo from "../assets/logo.png";
import { CiDollar } from "react-icons/ci";

interface props{
    coin : number,
}
export default function Nav({coin} : props) {

    
  return (
    <nav className="mt-5 mr-2 ml-55">
      <div className="container mx-auto flex justify-between items-center p-6 ">
        <img src={Logo} alt="Logo" />

        <ul className="flex items-center gap-15 text-lg text-gray-500 font-[Open_Sans] ml-150">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">Fixture</a>
          </li>
          <li>
            <a href="/contact">Team</a>
          </li>
          <li>
            <a href="/schedule">Schedule</a>
          </li>
        </ul>
        <h3 className="font-bold items-center mr-55 border-gray-300 border-2 rounded-[0.25vw] bg-clip-padding btn btn-lg">
          {" "}
          <CiDollar />
          {coin} coin
        </h3>
      </div>
    </nav>
  );
}

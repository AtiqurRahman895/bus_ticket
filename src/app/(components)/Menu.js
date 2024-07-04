"use client"
import React, { useState } from "react";
import Image from "next/image";
import MenuSvg from "../../../public/svgs/MenuSvg.svg";
import HideMunu from "../../../public/svgs/HideMenu.svg";
import Link from "next/link";
function Menu() {
    const [menuShow,setMenuShow]= useState(false)
    const ShowMenu=(e)=>{
        setMenuShow(true);
    }
    const HideMenu=(e)=>{
        setMenuShow(false);
    }

  return (
    <div>
      <div className="md:hidden">
        <Image
          src={MenuSvg}
          alt="Menus"
          className="w-[1.5rem] cursor-pointer"
          onClick={ShowMenu}
        ></Image>
      </div>
      <div className={menuShow?"bg-green-1 absolute p-[50px] right-1 [transition:0.8s] top-1 z-10 ":"bg-green-1 absolute p-[50px] right-[-100%] [transition:0.8s] top-1 z-10 "}>
        <div className="flex flex-col space-y-8 items-center">
        <Image
          src={HideMunu}
          alt="Hide Menu"
          className="w-[2rem] cursor-pointer"
          onClick={HideMenu}
        ></Image>
          <Link href="/"> Home </Link>
          <Link href="/BusRegisterPage"> Bus Register </Link>
          <Link href="/AvailableBusesPage">Available Buses</Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;

'use client'
import Link from "next/link";
import { GrCatalog } from "react-icons/gr";
import Marquee from "react-fast-marquee";
import { BiMobile, BiPhone, BiUser } from "react-icons/bi";
import Image from "next/image";
import { FiSearch,FiChevronDown } from "react-icons/fi";
import { delay, hover, motion } from "framer-motion";
import { useState,useRef,useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import AnimatedButton from "./Button/button";
import NavHeader from "./Nav/HeaderNav";

export default function Header1(){
    const [isScroll,setIsScroll] = useState(false)
    const handleScroll = () =>{
        const scrolled = window.scrollY;
        setIsScroll(scrolled > 1);
    }
    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll',handleScroll);
        return() => window.removeEventListener("scroll",handleScroll);
    },[])

    return (
        <header className={`w-full min-h-[15vh] z-50 fixed`}>
            <div className="w-full h-[3vh] bg-[#ee5c1e] px-5 flex flex-row">
                <div className="w-full min-h-[3vh] flex flex-row gap-x-3 justify-center items-center text-[10px] font-bold text-center">
                     <Marquee>
                            <Link href={``}><p className="cursor-pointer gap-5">Temukan ragam Alat Bantu & Perlengkapan Kesehatan dari Galena hanya di AZKO</p></Link>
                            <Link href={``}><p className="cursor-pointer gap-5">Awal Cerita Evolusi. Dari A sampai Z, ragam inspirasi rumah dan hidupmu.</p></Link>
                     </Marquee>
                </div>
                <div className="md:flex flex-row gap-x-5 hidden md:block justify-center items-center">
                    <a href=""><span className="flex flex-row items-center gap-x-[4px]"><GrCatalog/> Katalog </span></a>
                    <a href=""><span className="flex flex-row items-center gap-x-[4px]"><BiUser/> Membership </span></a>
                    <a href=""><span className="flex flex-row items-center gap-x-[4px] whitespace-nowrap "><BiMobile/>Unduh Aplikasi </span></a>
                </div>
            </div>
            <div className="w-full bg-white px-5 lg:px-0 lg:bg-transparent xl:bg-[#ffff] xl:px-5 flex lg:flex-col xl:flex-row justify-between items-center gap-x-5">
            <div className="w-full bg-[#ffff] xl:bg-transparent md:px-5 xl:px-0 flex flex-row justify-between xl:justify-start items-center gap-x-5">
                <Image src="/Icon/logo.png" alt="Azko" width={150} height={50}/> 
                <NavHeader/>
            </div>
                <div className=" text-black bg-transparent flex flex-row gap-x-[5px] w-full h-full justify-end items-end md:items-center py-5 ">
                    <FiSearch size={25}/>
                    <div className="md:flex flex-row flex-row hidden md:block">
                        <AnimatedButton
                        defaultText={["Cari","Azko","Terdekat"]}
                        hoverText={["Cari","Azka","Terdekat"]}
                        Class={["text-[#E82800] border-[#E82800]"]}
                        />
                        <AnimatedButton
                        defaultText={["Belanja","24/7"]}
                        hoverText={["Belanja"," 24/7"]}
                        Class={["bg-[#E82800] text-white"]}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}
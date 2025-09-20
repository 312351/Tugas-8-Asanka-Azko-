'use client'
import { BsInstagram, BsTwitterX} from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { CgFacebook } from "react-icons/cg";
import { FaPinterest, FaTiktok } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { useState } from "react";

const Footer1 = () =>{
    const [Open,SetOpen] = useState<String|null>(null)
    return(
        <footer className="w-full min-h-[5vh] flex flex-col ">
            <div className="p-3 w-full min-h-[5vh] flex flex-col lg:flex-row items-center justify-between bg-slate-300 text-black gap-y-5">
                <div className=" h-full flex flex-col lg:flex-row items-center gap-x-3 gap-y-5 px-5">
                    <h1>Dapatkan info dan promo terbaru dari Azko</h1>
                    <span className="bg-white rounded-full text-black flex flex-row gap-x-3">
                        <input type="text" placeholder="Masukan Email kamu di sini" className="py-1 px-1 md:py-3 md:px-[25px] rounded-l-full"/>
                    <button className=" px-8 py-3 md:px-12 bg-red-500 rounded-full text-white font-bold  ">Kirim</button> 
                    </span>
                </div>
                <div className="flex flex-row justify-center items-center">
                <li className="flex flex-row gap-x-5">
                    <ul>
                        <Link href=""><BsInstagram size={25}/></Link>
                    </ul>

                    <ul>
                        <Link href=""><FaTiktok size={25}/></Link> 
                    </ul>

                    <ul>
                        <Link href=""><FiYoutube size={25}/></Link>
                    </ul>

                    <ul>
                        <Link href=""><BsTwitterX size={25}/></Link>
                    </ul>

                    <ul>
                        <Link href=""><CgFacebook size={25}/></Link>
                    </ul>

                    <ul>
                        <Link href=""><FaPinterest size={25}/></Link>
                    </ul>
                </li>
            </div>
            </div>

            <div className="w-full min-h-[5vh] bg-[#E82800] py-5 px-3 flex flex-col gap-y-5">
               <div className="w-full h-[5vh] flex flex-col md:flex-row items-center justify-between px-5">
                <div className=" flex flex-col items-center md:items-start">
                    <Image src="/Icon/logoWhite.png" alt="Azko" width={150} height={50}/> 
                </div>
                <ul className="grid grid-cols-2 md:flex md:flex-row gap-x-3 font-bold text-[12px] ">
                    <li><Link href=""  className="whitespace-nowrap">Azko for Bussines</Link></li>
                    <li><Link href=""  className="whitespace-nowrap">Korporasi</Link></li>
                    <li><Link href=""  className="whitespace-nowrap">Keberlanjutan</Link></li>
                    <li><Link href=""  className="whitespace-nowrap">Karier</Link></li>
                    <li><Link href=""  className="whitespace-nowrap">FAQ</Link></li>
                    <li><Link href=""  className="whitespace-nowrap">Hubungi Kami</Link></li>
                </ul>
               </div>
            
               <div className={`${Open == "Menu" ? "" :""} transform transition-all duration-500 w-full flex flex-col bg-[#ffffff5e] rounded-2xl p-3 gap-y-3`}>
                    <div onClick={() => SetOpen(Open === "Menu" ? null :"Menu")} className="w-full h-full flex flex-row items-center">
                        AZKO
                    </div>
                    {Open == "Menu" &&(
                    <div className="w-full min-h-[15vh] font-bold opacity-75">
                        <p>AZKO, Your Home Life Improvement Partner AZKO adalah #AwalCeritaEvolusi 30 tahun bersama, kini saatnya Awali Cerita Evolusi Baru bersama AZKO Ragam inspirasi dari A-Z, membuka kemungkinan tanpa batas. Merek retail rumah tangga dan gaya hidup terbaru dari Kawan Lama Pusat perlengkapan rumah dan gaya hidup terlengkap di Indonesia hanya di AZKO, bagian dari Kawan Lama Group! Pilih produk berkualitas dari STORA, KRISBOW, KRISBOW SYNC, KRIS, KLAZ, SOLEIL, KINETIC, PASSPORT, KINDLA, OTTO KLASSE, PROCLEAN, SLEEPLITE, CULINART, FOSA, PAWS 'N TAILS, ARTHOME, LUGGO, MAXBUILT, MEMOO, BREATHE, dan merek ternama seperti HUROM, SCRUB DADDY, & ASTONISH. Dapatkan promo terbaik untuk produk dapur, kebersihan, rak, penyimpanan, olahraga, outdoor, kompor portable, air purifier, pendingin udara, lampu LED, treadmill, slow juicer, serta ide hadiah atau kado unik. Inspirasi rumah modern & gaya hidup dimulai di AZKO!</p>
                    </div>
                    )}
               </div>
            </div>
            <div className="w-full min-h-[3.5vh] bg-[#711502] px-3 py-[0.5px] flex flex-row justify-end gap-x-3 text-[15px] text-[#7676769d]">
                    <a href="" className="font-semibold hover:text-white">Syarat & Kententuan</a>
                    <a href="" className="font-semibold hover:text-white">KebijakanPrivasi</a>
               </div>
            <div className="w-full min-h-[10vh] bg-white px-3 py-[0.5px] flex flex-row justify-center items-center gap-x-3">
                   <p className="text-black">Member of <span className="font-bold">Kawan Lama</span> Group</p>
               </div>
            <div className="w-full min-h-[3vh] bg-[#1e1e1e] px-3 py-[0.5px] flex flex-row justify-center items-center gap-x-3">
                   <p className="text-[8px] font-bold text-[#919191d8]">© 2025 PT Aspirasi Hidup Indonesia Tbk</p>
               </div>
        </footer>
    )
}
export default Footer1;
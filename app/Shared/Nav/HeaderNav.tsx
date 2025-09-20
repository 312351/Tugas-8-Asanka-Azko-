import Image from "next/image"
import Link from "next/link"
import { Icon } from "@iconify/react"
import { FiChevronDown, FiStar } from "react-icons/fi"
import { BiSolidChevronRight } from "react-icons/bi"
import { useState } from "react"
export default function NavHeader(){
    
    const [open, setOpen] = useState<string|null>(null)

    return( 
                 <div className="h-[15vh] lg:flex lg:flex-col justify-center hidden lg:block ">
                 <ul className="flex flex-row text-black gap-x-[15px] text-[15px] font-bold">
                    <li>
                        <Link href="" className="hover:text-[#E82800]"><p>Tentang Kami</p></Link>
                    </li>
                    <li>
                        <Link href="" className="hover:text-[#E82800]"><p>Produk</p></Link>
                    </li>
                    <li>
                        <Link href="" className="hover:text-[#E82800]"><p>Promo</p></Link>
                    </li>
                    <li>
                        <Link href="" className=" hover:text-[#E82800]"><p>Keutungan</p></Link>   
                    </li>
                    <li 
                        onClick={() => setOpen (open === "Inspirasi" ? null : "Inspirasi")}
                    className="relative">
                        <Link href="" className=" z-0">
                        <p className={`${open === "Inspirasi" ? "text-[#E82800]" : "text-black"} hover:text-[#E82800] flex flex-row justify-center items-center gap-x-[5px]`}>Inspirasi <span className={`${open == "Inspirasi" ? " rotate-180 " :" rotate-360 "} transition-transform duration-300`}><FiChevronDown /></span></p></Link>
                    </li>
                </ul>
                {open === "Inspirasi" &&(
                <div className="z-0 absolute min-h-[35vh] bg-white w-[65vw] lg:mt-[53.5vh] xl:mt-[53.5vh] flex flex-row rounded-bl-2xl rounded-br-2xl  border-t-[1px] border-black">
                    <div className="w-[17vw] min-h-[35vh] pl-[5px] border-r-[1px] border-black/20 grid grid-cols-1">
                        <div className="w-full border-[1px] border-l-0 text-black p-5 flex flex-row justify-center items-center">
                             <div className="w-full flex-col">
                            <FiStar size={25}color="#E82800"/>
                          <span className="flex flex-col justify-center ">
                            <p className="text-[15px] font-bold">Inspirasi Pilihan</p>
                            <p className="text-[13px] opacity-50">Trik & tips aktivitas lebih mudah</p>
                          </span>
                          </div>
                          <BiSolidChevronRight/>
                        </div>
                        <div className="w-full border-[1px] border-l-0 text-black p-5 flex flex-row justify-center items-center">
                            <div className="flex-col">
                            <Icon icon="mdi:lightbulb-on-outline" className="w-6 h-6 text-red-500" />
                          <span className="w-full flex flex-col">
                            <p className="text-[15px] font-bold">AZKO Idea Explorer</p>
                            <p className="text-[13px] opacity-50">Rekomendasi solusi sesuai karaktermu</p>
                          </span>
                          </div>
                          <BiSolidChevronRight/>
                        </div>     
                    </div>

                    
                    <div className="w-full">
                        <p className="text-[20px] font-bold text-black p-[5px]">Rekomendasi Untukmu</p>
                        <div className="w-full min-h-[36vh] grid grid-cols-3  b-g p-5 gap-x-5">
                            <div className="relative w-full ">
                                <Image src="/Icon/54ea4e2f-010d-4391-89b1-d2530cc75cda.jpg" alt="" fill className="object-cover rounded-2xl z-0"/>
                                <div className="absolute inset-0 bg-black opacity-25 rounded-2xl z-10 w-full "></div>
                            </div>
                            <div className="relative w-full">
                                <Image src="/Icon/54ea4e2f-010d-4391-89b1-d2530cc75cda.jpg" alt="" fill className="object-cover"/>
                            </div>
                            <div className="relative w-full">
                                <Image src="/Icon/54ea4e2f-010d-4391-89b1-d2530cc75cda.jpg" alt="" fill className="object-cover"/>
                            </div>
                        </div>
                    </div>
                </div>
                )}
               </div>
    )
}
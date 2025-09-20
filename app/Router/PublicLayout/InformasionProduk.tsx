import AnimatedButton from "@/app/Shared/Button/button";
import Switch from "@/app/Shared/Switch/Switch";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";

const InformationProduk = () => {
    return(
        <section className="w-full min-h-[5vh] bg-[#FAF8F2] grid grid-rows-2 z-0 py-5">
            <div className="w-full min-h-[15vh] grid grid-cols-1 md:grid-cols-2 p-5 gap-x-3 gap-y-5">
            <div className="grid grid-rows-[1.5fr,2.5fr] gap-y-2">
                <div className=" w-full grid grid-cols-2  gap-x-3">
                    <div className="w-full h-full bg-[#F25717] flex flex-col justify-end p-5  rounded-2xl">
                    <span className=" flex flex-col xl:flex-row font-bold items-baseline gap-x-[5px] leading-10 whitespace-nowrap"><h3 className="text-[30px] md:text-[50px]">30</h3> 
                         <p className="text-[25px] md:text-[45px]">tahun</p>
                         </span>
                        <p>Inspirasi A-Z untuk kualitas hidup lebih baik</p>
                    </div>             
                    <div className="w-full h-full bg-[#F25717] flex flex-col justify-end p-5  rounded-2xl object-cover relative ">
                        <Image src="/5aa29600-fecf-45bc-8721-aa148ed5a499 (1).webp" alt="" fill className=" object-cover rounded-2xl"/>
                    </div>
                </div>
                <div className=" w-full grid grid-cols-2 ">
                    <div className="w-full h-full bg-[#F25717] flex flex-col justify-end p-5  rounded-2xl object-cover relative col-span-full">
                        <Image src="/bbcb34df-9d05-4003-be19-8f52b0eed27b.webp" alt="" fill className=" object-cover rounded-2xl"/>
                    </div>
                </div>
        
            </div>
            <div className="grid grid-rows-[2.5fr,1.5fr] gap-y-2">
                <div className=" w-full grid grid-cols-2  gap-x-3">
                    <div className="w-full h-full bg-[#F25717] flex flex-col justify-end p-5  rounded-2xl relative">
                        <Image src="/7b8bf7da-dc46-4d19-88a0-eddfafb0f0c1.webp" alt="" fill className=" object-cover rounded-2xl"/>
                        <div className="w-full h-full z-10  flex flex-col justify-end">
                         <span className=" flex flex-col font-bold items-baseline gap-x-[5px] leading-10"><h3 className="text-[30px] md:text-[50px]">250 +</h3> <p className="text-[25px] md:text-[45px]">toko</p></span>
                        <p>Terus berkembang untuk <br /> memudahkan konsumen    </p>
                    </div>
                    </div>             

                    <div className="w-full h-full bg-[#F25717] flex flex-col justify-end p-5  rounded-2xl relative">
                        <Image src="/c15c6eb2-8eb1-4947-9dad-4bceaf93d2b4.webp" alt="" fill className=" object-cover rounded-2xl"/>
                    <div className="w-full h-full z-10  flex flex-col justify-end">
                         <span className=" flex flex-col font-bold items-baseline gap-x-[5px] leading-10 whitespace-nowrap"><h3 className="text-[30px] md:text-[50px]">43,000 +</h3> 
                         <p className="text-[25px] md:text-[45px]">produk</p>
                         </span>
                        <p>Inspirasi A-Z untuk kualitas hidup lebih baik</p>
                    </div>
                    </div>             
                </div>
                <div className=" w-full grid grid-cols-2 ">
                    <div className="w-full h-full bg-[#EFCA1A] text-black flex flex-col justify-end p-5  rounded-2xl col-span-full">
                     <span className=" flex flex-col font-bold items-baseline gap-x-[5px] leading-10 whitespace-nowrap"> 
                         <p className="text-[25px] md:text-[45px]">Merek Indonesia</p>
                         </span>
                        <p>World-class excellence</p>
                    </div>  
                </div>
        
            </div>
          </div>

            <div className=" w-full hidden md:block md:min-h-[15vh] lg:min-h-[50vh] xl:min-h-[35vh] px-7 grid-cols-1   ">
              <div className="bg-[url('/f9477890-fa3f-44a2-87e1-5ac3daad630e.webp')] bg-cover bg-center w-full h-full rounded-2xl">
              <div className=" h-full p-5 text-[45px] font-helvetica flex flex-col">
                <p>Dari Sini </p>
                <p className="flex flex-row items-baseline gap-x-2">bisa lebih <Switch Texts={["Solutif","Inspiratif","Diandalkan"]} Class={["text-[45px] font-bold"]} /> </p>
                <a href="" className=" whitespace-nowrap text-[15px] flex flex-row items-center hover:text-black cursor-pointer">Lebah Lanjut <BiChevronRight size={25}/></a>
              </div>
              </div>
            </div>


            <div className="w-full min-h-[100vh] py-12">            
            <div className="w-full h-[150vh] relative py-[12px] overflow-hidden bg-cover">
                <div className="bg-[url('/4f475b6f-5a58-4453-b62a-84d9b2c32dd6.webp')] bg-cover bg-center w-full h-full rounded-2xl">
                 <div className="w-full h-full flex flex-col gap-x-5 justify-center items-center text-center text-black">
                    <h1 className="text-[50px] font-bold">Siap Untuk <br /> menjelajah lebih <br /> banyak?</h1>
                     <AnimatedButton 
                     defaultText={["Telusuri","Produk"]}
                     hoverText={["Telusuri","Produk"]}
                     Class={["bg-red-600 text-white"]}/>
                    </div>
                </div> 
            </div>
        </div>
        </section>

    )
}
export default InformationProduk;
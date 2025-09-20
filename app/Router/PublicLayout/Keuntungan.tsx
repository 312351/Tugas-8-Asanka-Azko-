import Image from "next/image";
import {CgArrowTopRight } from "react-icons/cg";
import ArrowSwitch from "@/app/Shared/Switch/ArrowSwitch";
import AnimatedButton from "@/app/Shared/Button/button";

const Keuntungan = () => {
    return(
        <section className="w-full flex flex-col gap-y-[25px] bg-white">
            <div className="w-full h-auto px-5">
              <div className="w-full min-h-[750px] md:min-h-[350px] overflow-hidden relative object-cover rounded-2xl">
                <Image src="/7992340e-b5cc-4b20-be17-b527be415d94.webp" alt="" fill  className="object-cover object-center z-0"/>
                <div className="absolute z-10 w-full h-full bg-[#00000046]">
                  <div className="w-full h-full grid grid-rows-6 p-2">
                    <div className="row-span-2 flex flex-row justify-between px-5">
                      <div className="w-full h-full flex  items-end">
                        <p>AZKO Idea Explorer</p>
                      </div>
                      <div className="justify-center items-center flex flex-col p-2">
                        <div className="px-[25px] py-[20px] bg-[#9B7FFF] rounded-full flex flex-col justify-center items-center">
                          <p className="text-[15px] font-bold">
                            Fitur <br /> Baru
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row-span-2 min-h-[15px] flex flex-row justify-between px-5">
                      <div className="w-full h-full flex flex-col font-roboto">
                        <p className="text-[35px] font-bold ">Rekomendasi solusi <br />sesuai karaktermu</p>
                        <p>Jawab pertanyaan singkat untuk eksplor lebih banyak ide</p>
                      </div>
                    </div>
                    <div className="row-span-2 flex flex-row items-center px-5">
                      <AnimatedButton 
                      defaultText={["Coba","Sekarang"]} 
                      hoverText={["Coba","Sekarang"]}
                      Class={["bg-red-600 border-0"]}/>
                    </div>

                  </div>
                </div>
                </div>
            </div>
            
            <div className="w-full h-[750px]">
                <div className="w-full h-full overflow-hidden relative object-cover">
                    <Image src="/52ebc6ed-4680-463b-b9bd-3ff0ccc5699f.webp" alt="" fill className="object-cover object-center z-0"/>
                    <div className="w-full bg-[#0b0b0bbe] absolute z-10 inset-0"></div>
                    <div className="z-10 w-full h-full  inset-0 relative flex flex-row justify-end object-cover items-end">
                      <div className="w-full h-[50%] relative">
                          <div className="w-full h-full flex flex-row z-20">
                            <div className="absolute left-1/2 -translate-x-1/2 w-[250vw] h-[75vh] bg-[#490303] rotate-[30deg] mt:rotate-[20deg] z-10 mt-[45vh] md:mt-[40vh]"></div>
                            <div className="absolute w-[200vw] h-[150vh] bg-[#490303] rotate-[-25deg] z-20 mt-[55vh] md:mt-[50vh] "></div>
                          </div>
                          <div className="w-full h-full absolute z-40 inset-0 p-5">
                            <p className="font-bold">Inspirasi </p>
                            <div>
                              <h3 className="text-[35px] font-bold">Berapa Watt Hair <br /> Dryer yang Ideal? <br /> Cek Faktanya di Sini!</h3>
                            </div>
                            <p>Berapa watt hair dryer yang cocok untuk dipakai tiap hari? Yuk <br /> cek jawabannya agar rambut tetap sehat dan rapi.</p>
                          </div>

                      </div>

                      <div className="">

                      </div>
                    </div>
                </div>
            </div>

           <div className="w-full px-3">
                <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-5x   ">
                    <div className="relative w-full overflow-hidden rounded-2xl aspect-[6/8]">
            <Image
              src="/d6987eb7-630f-45b5-acb8-73477f5b5f74 (1).webp"
              alt="Belanja mudah background"
              fill
              className="object-cover object-center"
            />  

      <div className="absolute inset-0 flex flex-col z-10">
        <div className="w-full h-full flex justify-end  absolute inset-0">
          <ArrowSwitch
            Arrow={[
              <CgArrowTopRight size={50} key="1" />,
              <CgArrowTopRight size={50} key="2" />,
            ]}
          />
        </div>

        <div className="absolute inset-0 flex flex-col px-5 justify-end z-10">
          <div className="w-[5vh]">
            <Image
              src="/Belanja Mudah.png"
              alt="Belanja Mudah"
              width={300}
              height={65}
              className="object-contain"
            />
          </div>
           <p className="text-[20px] font-bold py-3">
              Belanja mudah omnichannel
            </p>
        </div>
      </div>
                </div>


                    <div className="relative w-full overflow-hidden rounded-2xl aspect-[6/8]">
            <Image
              src="/d6987eb7-630f-45b5-acb8-73477f5b5f74 (1).webp"
              alt="Belanja mudah background"
              fill
              className="object-cover object-center"
            />  

      <div className="absolute inset-0 flex flex-col z-10">
        <div className="w-full h-full flex justify-end  absolute inset-0">
          <ArrowSwitch
            Arrow={[
              <CgArrowTopRight size={50} key="1" />,
              <CgArrowTopRight size={50} key="2" />,
            ]}
          />
        </div>

        <div className="absolute inset-0 flex flex-col px-5 justify-end z-10">
          <div className="w-[5vh]">
            <Image
              src="/Klaim Garansi.png"
              alt="Belanja Mudah"
              width={300}
              height={65}
              className="object-contain"
            />
          </div>
           <p className="text-[20px] font-bold py-3">
              Klaim garansi di toko 
            </p>
        </div>
      </div>
                </div>
                    <div className="relative w-full overflow-hidden rounded-2xl aspect-[6/8]">
            <Image
              src="/d6987eb7-630f-45b5-acb8-73477f5b5f74 (1).webp"
              alt="Belanja mudah background"
              fill
              className="object-cover object-center"
            />  

      <div className="absolute inset-0 flex flex-col z-10">
        <div className="w-full h-full flex justify-end  absolute inset-0">
          <ArrowSwitch
            Arrow={[
              <CgArrowTopRight size={50} key="1" />,
              <CgArrowTopRight size={50} key="2" />,
            ]}
          />
        </div>

        <div className="absolute inset-0 flex flex-col px-5 justify-end z-10">
          <div className="w-[5vh]">
            <Image
              src="/Azko_Icon_Repair.png"
              alt="Belanja Mudah"
              width={300}
              height={65}
              className="object-contain"
            />
          </div>
           <p className="text-[20px] font-bold py-3">
              Gratis Instalasi
            </p>
        </div>
      </div>
                </div>
                    <div className="relative w-full overflow-hidden rounded-2xl aspect-[6/8]">
            <Image
              src="/d6987eb7-630f-45b5-acb8-73477f5b5f74 (1).webp"
              alt="Belanja mudah background"
              fill
              className="object-cover object-center"
            />  

      <div className="absolute inset-0 flex flex-col z-10">
        <div className="w-full h-full flex justify-end  absolute inset-0">
          <ArrowSwitch
            Arrow={[
              <CgArrowTopRight size={50} key="1" />,
              <CgArrowTopRight size={50} key="2" />,
            ]}
          />
        </div>

        <div className="absolute inset-0 flex flex-col px-5 justify-end z-10">
          <div className="w-[5vh]">
            <Image
              src="/Azko_Icon_Rewards.png"
              alt="Belanja Mudah"
              width={300}
              height={65}
              className="object-contain"
            />
          </div>
           <p className="text-[20px] font-bold py-3">
              Koin: Rewards tiap belanja
            </p>
        </div>
      </div>
                </div>
                 
       
           </div>
a    </div>
        </section>
    )
}
export default Keuntungan;
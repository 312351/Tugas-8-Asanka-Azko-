import FadeInDownSection from "@/app/Shared/Animation/FadeDown copy";
import FadeInSection from "@/app/Shared/Animation/FadeUp";
import AnimatedButton from "@/app/Shared/Button/button";
import Image from "next/image";
const About = () => {
    return(
        <div className="w-full min-h-[100vh] bg-[#FAF8F2] relative z-0">
            <div className="w-full z-10 absolute pointer-events-none inset-0">
            <Image src={`/Background/about-bg.svg`} alt="" width={500} height={40}/>
            </div>

            <div className="mx-auto max-w-[1280px] min-h-[100vh] lg:h-[100vh] text-black z-0 inset-0 px-5 flex flex-col justify-center items-center">
                <FadeInDownSection>
                <div className="w-full h-auto justify-end items-center flex flex-col">
                    <p className="w-[50vw] justify-start text-[25px]  lg:text-[50px] font-bold flex flex-row">Your Home Life <br /> Improvement Partner</p>
                </div>
                </FadeInDownSection>
                <FadeInSection>
                <div className=" w-full h-auto  items-end  flex flex-col gap-y-5">
                    <div className="w-[75%] lg:w-[50%] flex flex-col gap-y-5 jsutify-start items-start">
                        <p className=" text-[25px] opacity-75 flex flex-col justify-end xl:justify-center items-center text-left">Melanjutkan legasi 30 tahun, ini awal cerita baru kami untuk menghangatkan rumah dan memperkaya hidup dengan inspirasi A-Z yang bisa diandalkan, kini dan seterusnya.</p>
                        <AnimatedButton 
                        defaultText={["Tentang", "Kami"]} 
                        hoverText={["Tentang","Kami"]} 
                        Class={["bg-[#E82800] text-white px-12"]}/>
                    </div>
                </div>
                </FadeInSection>
            </div>
            </div>
    )
}
export default About;
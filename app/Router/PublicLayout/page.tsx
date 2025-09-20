import Header1 from "@/app/Shared/Header1"
import Video from "./video"
import About from "./about"
import InformationProduk from "./InformasionProduk"
import Keuntungan from "./Keuntungan"
import BennefitAzko from "./Bennefit"
import Footer1 from "@/app/Shared/Footer/Footer"
export default function Dashboard(){
    return(
        <div className="w-full min-h-[45vh] relative">
            <Header1/>
            <main className="w-full min-h[5vh] z-0">
            <Video/>
            <About/>
            <InformationProduk/>
            <Keuntungan/>
            <BennefitAzko/>
            <Footer1/>  
            </main>
        </div>
        
    )
}
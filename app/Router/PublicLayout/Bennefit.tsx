import Image from "next/image"
import { BiChevronRight } from "react-icons/bi"
const BennefitAzko = () =>{
    return(
        <section className="w-full bg-white">
                <div className="w-full h-full p-3">
                    <div className="grid grid-rows-1 w-full">
                        <div className="w-full  grid grid-cols-1 lg:grid-cols-2 gap-x-5 p-5 gap-y-5">
                            <div className="w-full relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-[4/3]">
                                <Image src="/16d68aac-ec96-43e8-b4a1-11da44aa69f4.webp" alt="" fill className="object-cover z-0"/>
                                <div className=" w-full h-full flex flex-row justify-end items-end z-10 ">
                                <div className=" w-full min-h-[50%] z-10 p-3 flex flex-col gap-y-5">
                                    <p className="text-[30px] font-bold ">Memberi lebih daripada <br />
                                        yang kami ambil dari bumi
                                    </p>
                                    <p>Komitmen kami adalah menjaga keseimbangan dengan alam, bukan hanya memanfaatkannya. Bersama, mari ciptakan perubahan dengan angkah-langkah yang lebih peduli pada Bumi.</p>
                                    <a href="" className="text-[15px] font-bold flex flex-row items-center hover:text-red-600">Langkah Keberlanjutan Kami <BiChevronRight/></a>
                                </div>
                                </div>
                            </div>



                            <div className="w-full overflow-hidden relative flex flex-col object-cover gap-y-5">
                                    <div className="w-full aspect-[10/2] bg-[url('/dd218064-b156-4f44-b081-b44b0d7fee3f.webp')] bg-no-repeat bg-cover bg-black rounded-2xl">
                                      <div className="w-full h-full justify-center flex flex-col p-3">
                                        <h3 className="text-[35px] font-bold">Bisa Naik</h3>
                                        <p className="">Bersama atasi sampah barang elektronik</p>
                                    </div>  
                                </div>
                                <div className="w-full grid grid-cols-2 gap-x-3 aspect-[10/4] lg:h-full">
                                    <div className=" bg-[#490303] rounded-2xl flex flex-col justify-end">
                                        <div className="w-full flex flex-col justify-end  p-3">
                                            <h3 className="text-[25px] font-bold">Donor darah</h3>
                                            <p>Jadi bagian dari kebaikan kami untuk sesama</p>
                                        </div>
                                    </div>
                                    <div className="w-full h-full bg-[#490303] rounded-2xl overflow-hidden relative bg-cover">
                                        <Image src="/d8cc14fe-94b8-4777-a3e1-8495c4ab0e32.webp" alt="" fill className="object-cover object-center"/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-5 gap-x-5">
                        <div className="w-full aspect-[10/2] overflow-hidden relative rounded-2xl">
                         <a href="" className="w-full h-full z-0 text-black">
                        <Image src="/73974611-4137-4558-87cd-4135defe1851.webp" alt="" fill className="bg-cover "/>
                        </a>
                        <div className="w-full h-full absolute z-10 inset-0 flex flex-col justify-center px-3">
                            <h3 className="text-[15px] font-bold">Unduh Laporan Keberlanjutan Kami</h3>
                            <p className="text-[10px]">Bukti komitmen kami untuk bisnis yang berkelanjutan</p>
                        </div>
                        </div>
                        <div className="w-full aspect-[10/2] overflow-hidden relative rounded-2xl">
                        <a href="">
                        <Image src="/52a9fe30-9d9c-4791-ba6d-6dee3e3f6279.webp" alt="" fill className="bg-cover z-0"/>
                        </a>
                        <div className="w-full h-full absolute z-10 inset-0 flex flex-col justify-center px-3">
                            <h3 className="text-[15px] font-bold">Lebih Lanjut tentang Keberlanjutan AZKO</h3>
                            <p className="text-[10px]">Kunjungi laman keberlanjutan di situs korporat kami</p>
                        </div>
                        </div>
                    </div>
                </div>
                <hr className="w-full h-[1.5px] bg-[#F25717]"/>
        </section>
    )
}
export default BennefitAzko
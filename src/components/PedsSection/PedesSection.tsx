import { Carousel } from "./Carousel";


export function PedesSection() {
    return (
        <div className="w-full h-[700px] relative flex justify-center items-center text-white">
            <img src="/bg-peddings.png" className="absolute top-0 left-0 w-full h-full object-cover " />
            <Carousel />
            <div className="absolute bottom-20 left-30 right-0 p-4">
                <p className="font-bold text-[35px] font-family-kanit mb-2 ">PEDDINGS</p>
                <p className="mb-8">is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry's</p>
                
                <div className="relative hover:scale-101 transition-transform duration-300 cursor-pointer">
                    <img src="/bgblue2.png" className="w-[250px] " />
                    <p className="absolute text-white top-3 left-18">Acessar jogo</p>
                </div>
            </div>
        </div>
    )
}
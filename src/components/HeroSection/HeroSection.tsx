import { FireArmsCard } from "./FireArmsCard";



export function HeroSection() {
    return (
        <div className="relative w-full h-[1030px]  text-white bg-black">
            <img
                src="/HeroSection.png"
                alt="Background"
                className="absolute inset-0 w-full h-full "
            />
            <div className="relative z-10 flex flex-col items-center justify-center pt-32">
                <div className="text-center mt-30">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                        EXPLORE AS <br /> SKINS ESPECIAIS
                    </h1>
                    <p className="mt-4 text-lg">
                        Veja todos os produtos que você pode adquirir com <br/> Quantions em nosso jogo
                    </p>
                </div>
                <img
                    src="/ArmasSoltasDivisorio.svg"
                    alt="Divisor"
                    
                />

               
            </div>
            <div className= "absolute w-full justify-center items-center h-10 bg-red">
                <FireArmsCard />
            </div>
           
        </div>
    )
}
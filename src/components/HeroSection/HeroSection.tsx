import { FireArmsCard } from "./FireArmsCard";


const fireArmsData = await fetch('https://winsapi.discloud.app/dev/products/weapons').then(res => res.json());
const fireArmsTransformedData = fireArmsData.map((item: any) => ({
    ...item,
    images: item.images.map((imageCode: string) => `https://wins.company/assets/TesteFrontEnd/weapons/${imageCode}.webp`)
}));

export function HeroSection() {

    console.log(fireArmsTransformedData);
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
                        Veja todos os produtos que você pode adquirir com <br /> Quantions em nosso jogo
                    </p>
                </div>
                <img
                    src="/ArmasSoltasDivisorio.svg"
                    alt="Divisor"

                />


            </div>
            <div className="flex gap-2  mt-20 absolute w-full justify-center items-center h-10 bg-red">
                {fireArmsTransformedData.slice(0, 5).map((item: { name: string; price: string | number; images: string[] }, index: number) => (
                    <FireArmsCard
                        key={index}
                        name={item.name}
                        price={item.price}
                        images={item.images[0]}
                    />
                ))}
            </div>

        </div>
    )
}
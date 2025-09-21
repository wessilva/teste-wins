import { useState, useEffect } from 'react';

export function ProductHighlightSection() {
    const [timeLeft, setTimeLeft] = useState(() => {
        // Define uma data futura (exemplo: 7 dias a partir de agora)
        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + 24);
        return Math.floor((futureDate.getTime() - new Date().getTime()) / 1000);
    });

    useEffect(() => {
        if (timeLeft <= 0) return;

        const interval = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft]);

    const formatTime = (seconds: number) => {
        const days = Math.floor(seconds / (24 * 60 * 60));
        const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const secs = seconds % 60;

        return { days, hours, minutes, secs };
    };

    const { days, hours, minutes, secs } = formatTime(timeLeft);

    return (
        <div className="w-full  bg-[#0F1B35] flex justify-center items-center  text-white">
            <div className="w-1/2 h-full flex flex-col justify-center gap-6 pl-20">
                <p className="font-bold text-[30px]">NOME DO PRODUTO</p>

                <p className="flex justify-center items-center w-[255px] h-[60px] text-2xl font-bold bg-[#4996D5]">50% DE DESCONTO</p>

                <p>Lorem ipsum dolor sit amet consectetur. Aliquet ac <br />
                    massa metus faucibus viverra laoreet varius. Sit ut.

                </p>

                <ul className="flex justify-start items-center gap-3 h-full mb-8 ">
                    <li className="flex justify-center items-center gap-5 h-[56px] w-[56px] bg-[#6b6666] text-black relative">
                        <p className="absolute text-white">{days}</p>
                        <p className="absolute top-15 text-white">Dia</p>
                    </li>
                    <li className="flex justify-center items-center gap-5 h-[56px] w-[56px] bg-[#6b6666] text-black relative">
                        <p className="absolute text-white">{hours}</p>
                        <p className="absolute top-15 text-white">Hora</p>
                    </li>
                    <li className="flex justify-center items-center gap-5 h-[56px] w-[56px] bg-[#6b6666] text-black relative">
                        <p className="absolute text-white">{minutes}</p>
                        <p className="absolute top-15 text-white">Min</p>
                    </li>
                    <li className="flex justify-center items-center gap-5 h-[56px] w-[56px] bg-[#6b6666] text-black relative">
                        <p className="absolute text-white">{secs}</p>
                        <p className="absolute top-15 text-white">Sec</p>
                    </li>
                </ul>

                <div className="relative hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <img src="/bgblue2.png" className="w-[250px]" />
                    <p className="absolute text-white top-3 left-18">Acessar jogo</p>
                </div>


            </div >
            <div className=" flex justify-center  items-center position-absolute ">
                <img src="/bgimage.png" className=" position-relative " />
            </div>
        </div>
    )
}
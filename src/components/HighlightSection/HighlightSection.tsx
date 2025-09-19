export function HighlightSection() {
    return (
        <section className="w-full font-family-kanit flex  flex-col justify-center items-center h-[800px] bg-[#f2f2f8fa] relative ">
            <div className="w-1/2 mb-10 flex items-center absolute top-30">
                <h1 className="text-black font-bold text-[24px]">ITENS EM <span className="px-3 text-white font-bold bg-[#4996D5]">DESTAQUE</span></h1>
            </div>
            <div className="w-1/2 h-1/2 flex gap-3 items-center absolute top-48">
                <div className="bg-white w-1/3 h-full relative ">
                    <img src="/ShapeYellow.png " className=" absolute -top-7  " />
                    <img src="/Hoodie.png" className=" absolute top-15 left-4  max-w-[200px] max-h-[200px] object-contain  " />
                    <div className="absolute bottom-5 left-0 right-0 top-0">
                        <p className="absolute bottom-10 left-12 text-black">Cyber Grediant Cup</p>
                        <img src="/bgPrice.svg" alt="Like" className="absolute -bottom-6 right-9 w-40 h-20" />
                        <p className="uppercase absolute bottom-2 left-15 text-white text-[11px]">
                            desafios deserticos
                        </p>
                    </div>


                </div>
                <div className=" w-2/5 h-full flex flex-col gap-3">
                    <div className="bg-white h-1/3 w-full relative">
                        <img src="/ShapeBlue.png " className=" absolute -top-7 -left-5 h-[200px] w-[200px]" />
                        <img src="/headband.png" className=" absolute top-3 left-6   max-w-[200px] max-h-[200px] object-contain  " />
                        <p className="absolute top-14 left-33 text-[12px] font-light">Shoes-Cyber</p>
                        <img src="/bgPrice.svg" alt="Like" className="absolute top-14 left-33 w-33 h-18" />
                        <p className="uppercase text-[11px] text-white absolute top-21 left-38">piratas espaciais </p>
                    </div>
                    <div className="bg-white h-1/3 w-full relative">
                        <img src="/ShapeBlue.png " className=" absolute -top-7 -left-5 h-[200px] w-[200px]" />
                        <img src="/headband.png" className=" absolute top-3 left-6   max-w-[200px] max-h-[200px] object-contain  " />
                        <p className="absolute top-14 left-33 text-[12px] font-light">Shoes-Cyber</p>
                        <img src="/bgPrice.svg" alt="Like" className="absolute top-14 left-33 w-33 h-18" />
                        <p className="uppercase text-[11px] text-white absolute top-21 left-38">piratas espaciais </p>
                    </div><div className="bg-white h-1/3 w-full relative">
                        <img src="/ShapeBlue.png " className=" absolute -top-7 -left-5 h-[200px] w-[200px]" />
                        <img src="/headband.png" className=" absolute top-3 left-6   max-w-[200px] max-h-[200px] object-contain  " />
                        <p className="absolute top-14 left-33 text-[12px] font-light">Shoes-Cyber</p>
                        <img src="/bgPrice.svg" alt="Like" className="absolute top-14 left-33 w-33 h-18" />
                        <p className="uppercase text-[11px] text-white absolute top-21 left-38">piratas espaciais </p>
                    </div>
                </div>
                <div className="bg-white w-1/3 h-full relative ">
                    <img src="/ShapePink.png " className=" absolute top-0 left-5 h-[260px] w-[190px]  " />
                    <img src="/Hoodie.png" className=" absolute top-15 left-4  max-w-[200px] max-h-[200px] object-contain  " />
                    <div className="absolute bottom-5 left-0 right-0 top-0">
                        <p className="absolute bottom-10 left-12 text-black">Cyber Grediant Cup</p>
                        <img src="/bgPrice.svg" alt="Like" className="absolute -bottom-6 right-9 w-40 h-20" />
                        <p className="uppercase absolute bottom-2 left-15 text-white text-[11px]">
                            desafios deserticos
                        </p>
                    </div>


            </div>
                <div className="flex justify-center items-center bg-[#4996D5] absolute left-60 top-[420px] w-[280px] h-[42px]">

                <p className="text-white">Acessar Jogo</p>

            </div>
</div>


        </section>
    )


}
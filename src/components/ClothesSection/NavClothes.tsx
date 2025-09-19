interface NavClothesProps {
    setSelected: (value: string) => void;
    selected?: string;

}


export function NavClothes({ setSelected, selected }: NavClothesProps) {
    return (
        <div className=" flex justify-center items-center mt-30 text-white bg-black">
            <div className="w-[600px] h-[70px] bg-[#15223F] ">
                <ul className="flex justify-around items-center h-full text-white relative px-20 text-[16px]">
                    <img src="/LeftBlue.png" alt="Navegação" className="absolute left-0" />
                    <img src="/LeftBlue.png" alt="Navegação" className="absolute right-0 transform scale-x-[-1]" />
                    <div className="relative flex items-center justify-center max-w-[216px] h-[80px] group">
                        <li onClick={() => setSelected?.('caixas')} className="cursor-pointer w-full  z-10">Caixas</li>
                        <img src="/SelectorElipse.png" alt="Novo" className={`absolute -top-3 -left-22   min-w-[216px] h-[80px] transition-opacity duration-200 ${selected === 'caixas' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                        <img src="/DownRectangle.png" alt="Novo" className={`absolute bottom-2 -left-2 min-w-[60px] h-[7px] transition-opacity duration-200 ${selected === 'caixas' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                    </div>
                    <div className="relative flex items-center justify-center max-w-[216px] h-[80px] group">
                        <li onClick={() => setSelected?.('uniformes')} className="cursor-pointer w-full  z-10">Uniformes</li>
                        <img src="/SelectorElipse.png" alt="Novo" className={`absolute -top-3 -left-18   min-w-[216px] h-[80px] transition-opacity duration-200 ${selected === 'uniformes' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                        <img src="/DownRectangle.png" alt="Novo" className={`absolute bottom-2 -left-2 min-w-[92px] h-[7px] transition-opacity duration-200 ${selected === 'uniformes' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                    </div>
                    <div className="relative flex items-center justify-center max-w-[216px] h-[80px] group">
                        <li onClick={() => setSelected?.('peds')} className="cursor-pointer w-full  z-10">Coleção</li>

                        <img src="/SelectorElipse.png" alt="Novo" className={`absolute -top-3 -left-20  min-w-[216px] h-[80px] transition-opacity duration-200 ${selected === 'peds' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                        <img src="/DownRectangle.png" alt="Novo" className={`absolute bottom-2 -left-2 min-w-[75px] h-[7px] transition-opacity duration-200 ${selected === 'peds' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                    </div>
                </ul>
            </div>
        </div>
    )
}
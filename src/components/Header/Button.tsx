
export function NavButton() {
    return (
        <div className="flex items-center justify-center h-full">
            <button className="  flex text-white  justify-center items-center  ">
                <img src="/Conteiner.svg" alt="Botão" className="h-[42px] w-[218px] " />


                <span className="absolute font-bold text-[14px]">SAIR</span>
                <img src="/logout.png" alt="Ícone" className="h-5  absolute ml-17" />
            </button>
            <div className="flex justify-center items-center">
                <img src="/web.svg" alt="Linha" className="h-[20px] w-[20px] ml-4" />
                <img src="/Avatar.svg" alt="Linha" className="h-[40px] w-[40px] ml-4" />
            </div>
        </div>
    )
}
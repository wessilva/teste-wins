
export interface CardProps {
    name: string;
    price: string | number;
    images: string;
}


export function Card({ name, price, images }: CardProps) {
    return (
        <li className="bg-[#0F1B35] h-[320px] flex flex-col items-center relative border-primary-lightBlue/55 border  hover:shadow-[inset_0_0_30px_8px_rgba(120,190,255,0.4)]">
            <img src="/Shape.png" alt={name} className="position-absolute  translate-y-[-13%] " />
            <img src={images} alt={name} className="h-[172px] max-w-[150px] absolute top-11  mb-14 object-cover hover:scale-120 transition-transform duration-300 cursor-pointer" />
            <h1 className=" text-white absolute mt-55 text-[14px]">{name}</h1>
            <div className="flex flex-col items-center justify-center absolute mt-58">
                <img src="/bgPrice.svg" className="h-16 w-35 " alt="Preço" />
                <span className="absolute  text-white text-[14px]">{price} Quantions</span>
            </div>
        </li>
    )
}
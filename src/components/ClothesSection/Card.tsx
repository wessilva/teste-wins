
export interface CardProps {
    name: string;
    price: string | number;
    images: string;
}


export function Card({ name, price, images }: CardProps) {
    return (
        <li className="bg-[#0F1B35] h-[320px] flex flex-col items-center relative">
            <img src="/Shape.png" alt={name} className="position-absolute  translate-y-[-13%] " />
            <img src={images} alt={name} className="max-h-[100px] max-w-[150px] absolute top-20  mb-14 object-cover" />
            <h1 className=" text-white absolute mt-55 text-[14px]">{name}</h1>
            <div className="flex flex-col items-center justify-center absolute mt-58">
                <img src="/bgPrice.svg" className="h-16 w-30 " alt="Preço" />
                <span className="absolute  text-white font-bold text-[14px]">{price} QNT</span>
            </div>
        </li>
    )
}
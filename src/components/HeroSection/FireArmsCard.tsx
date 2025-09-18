interface FireArmsCardProps {
    name: string;
    price: string | number;
    images: string;
}

export function FireArmsCard({ name, price, images }: FireArmsCardProps) {
    return (
        <ul className="flex justify-center gap-2 items-center ">
            <li className="flex flex-col h-[198px] w-[178px] justify-center items-center ">
                <img src="/PurpleCard.png" alt={name} className="h-[200px] w-[180px]   " />
                <img src={images} alt={name} className="max-h-[100px] max-w-[150px] absolute mb-14 object-cover" />
                <h1 className="absolute mt-20">{name}</h1>
                <div className="flex absolute items-center justify-center mt-28">
                    <img src="/bgPrice.svg" className="h-16 w-30 inline-block mt-5" alt="Preço" />
                    <span className="absolute mt-5 text-white font-bold text-[14px]">{price} QNT</span>
                </div>
            </li>
        </ul>
    );
}
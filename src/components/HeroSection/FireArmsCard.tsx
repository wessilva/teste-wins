interface FireArmsCardProps {
    name: string;
    price: string | number;
    images: string;
}

export function FireArmsCard({ name, price, images }: FireArmsCardProps) {
    return (
        <div className=" bg-primary-midBlue border-primary-lightBlue/55 border  relative flex min-h-52 w-52 flex-col items-center justify-center transition-all duration-300 cursor-pointer hover:shadow-[inset_0_0_30px_8px_rgba(120,190,255,0.4)] ">
            <img
                src="/ShapeYellow.png"
                alt="items background image"
                className="absolute -top-3 h-[150px] w-[150x]"
                aria-hidden
            />
            <div className="mt-2 absolute flex grow items-center">
                <img src={images} alt={name} className="max-h-[100px] max-w-[150px] absolute -top-20 -left-15 object-cover hover:scale-120  transition-transform duration-300" />
            </div>
            <h2 className="  text-[12px] text-white absolute top-35 text-center">{name}</h2>
            <div className=" flex  justify-center absolute h-[40px] w-[150px] bottom-2 ">
                <img
                    src="/bgPrice.svg"
                    alt="price flag"
                    className="absolute top-0 h-full w-full"
                    aria-hidden
                />
                <p className=" text-white absolute top-2 font-bold text-[13px]">{price} QUANTIONS</p>
            </div>
        </div>
    );
}
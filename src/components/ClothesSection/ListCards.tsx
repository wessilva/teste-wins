import { Card, type CardProps } from "./Card";

interface ListCardsProps {
    selected?: string;
}

const weaponsData = await fetch('https://winsapi.discloud.app/dev/products/weapons').then(res => res.json());
const weaponsTransformedData = weaponsData.map((item: any) => ({
    ...item,
    images: item.images.map((imageCode: string) => `https://wins.company/assets/TesteFrontEnd/weapons/${imageCode}.webp`)
}));

const uniformsData = await fetch('https://winsapi.discloud.app/dev/products/uniforms').then(res => res.json());
const uniformsTransformedData = uniformsData.map((item: any) => ({
    ...item,
    images: item.images.map((imageCode: string) => `https://wins.company/assets/TesteFrontEnd/uniforms/${imageCode}.webp`)
}));

const pedsData = await fetch('https://winsapi.discloud.app/dev/products/peds').then(res => res.json());
const pedsTransformedData = pedsData.map((item: any) => ({
    ...item,
    images: item.images.map((imageCode: string) => `https://wins.company/assets/TesteFrontEnd/peds/${imageCode}.webp`)
}));

export function ListCards({ selected }: ListCardsProps) {
    const dataToDisplay: CardProps[] = selected === 'caixas' ? weaponsTransformedData
        : selected === 'uniformes' ? uniformsTransformedData
            : selected === 'peds' ? pedsTransformedData
                : [];
    return (

        <ul className="flex flex-wrap gap-2 justify-center items-center w-full  mt-5 px-40  max-h-[40rem]  ">
            {dataToDisplay.slice(0, 10).map(item => (
                <Card key={item.name} name={item.name} price={item.price} images={item.images[0]} />
            ))}
        </ul>

    )
}
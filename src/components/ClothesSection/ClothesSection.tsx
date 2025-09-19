import { useState } from "react"
import { LabelSelector } from "./LabelSelector"
import { ListCards } from "./ListCards"
import { NavClothes } from "./NavClothes"



export function ClothesSection() {
    const [selected, setSelected] = useState('UNIFORMES')
    return (
        <div className=" flex flex-col  w-full h-[1030px]  text-white bg-black">
            <NavClothes selected={selected} setSelected={setSelected} />
            <LabelSelector selected={selected} />
            <ListCards selected={selected} />
        </div>
    )
}
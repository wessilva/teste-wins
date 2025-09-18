import { NavButton } from "./Button";
import { TextNav } from "./TextNav";
import { LogoWins } from "./Logo";


export function MainHeader() {
    return (
        <header className="w-full h-24 bg-[#000916] shadow-md flex items-center justify-between px-25">
            <LogoWins />
            <TextNav />
            <NavButton />
        </header>
    )
}
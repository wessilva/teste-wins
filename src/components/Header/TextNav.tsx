import { useState } from "react";
import { LogoCart } from "./LogoCart";

interface NavItem {
    label: string;
    id: string;
}

const NAV_ITEMS: NavItem[] = [
    { id: "home", label: "HOME" },
    { id: "news", label: "NOTICIAS" },
    { id: "store", label: "LOJA" },
    { id: "stats", label: "ESTATISTICAS" },
    { id: "league", label: "CAMPEONATO" },
    { id: "support", label: "SUPORTE" },
];

export function TextNav() {
    const [active, setActive] = useState<string>("store"); 

    return (
        <nav aria-label="Navegação principal" className="h-full flex items-center">
            <ul className="flex items-center h-full text-[16px] font-semibold tracking-wide">
                {NAV_ITEMS.map((item) => {
                    const isActive = active === item.id;
                    return (
                        <li
                            key={item.id}
                            className="relative h-full flex items-center"
                        >
                            <button
                                onClick={() => setActive(item.id)}
                                aria-current={isActive ? "page" : undefined}
                                className={[
                                    "relative px-3 py-1.5 flex items-center justify-center uppercase transition-colors duration-200 outline-none",
                                    "focus-visible:ring-2 focus-visible:ring-pink-400/60 focus-visible:ring-offset-1 focus-visible:ring-offset-transparent",
                                    isActive
                                        ? "text-white"
                                        : "text-white/40 hover:text-white/80",
                                ].join(" ")}
                            >
                                {item.label}
                            </button>
                        </li>
                    );
                })}
                <li className="pl-3 ml-2"><LogoCart /></li>
            </ul>
        </nav>
    );
}
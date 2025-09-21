import { useState, useEffect, useRef } from "react";
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

const DROPDOWN_ITEMS = {
    store: ["Produtos", "Categorias", "Ofertas"],
};

export function TextNav() {
    const [active, setActive] = useState<string>("store");
    const [rotatedArrows, setRotatedArrows] = useState<Record<string, boolean>>({});
    const navRef = useRef<HTMLElement>(null);

    const handleItemClick = (itemId: string) => {
        setActive(itemId);

        if (itemId === "store") {
            setRotatedArrows(prev => ({
                ...prev,
                [itemId]: !prev[itemId]
            }));
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setRotatedArrows({});
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav ref={navRef} aria-label="Navegação principal" className="h-full flex items-center">
            <ul className="flex items-center h-full text-[16px] tracking-wide">
                {NAV_ITEMS.map((item) => {
                    const isActive = active === item.id;
                    const isRotated = rotatedArrows[item.id];
                    const hasDropdown = item.id === "store";

                    return (
                        <li
                            key={item.id}
                            className="relative h-full flex items-center"
                        >
                            <button
                                onClick={() => handleItemClick(item.id)}
                                aria-current={isActive ? "page" : undefined}
                                className={[
                                    "relative px-3 py-1.5 flex items-center justify-center uppercase transition-colors duration-200 outline-none gap-1 cursor-pointer",
                                    "focus-visible:ring-2 focus-visible:ring-pink-400/60 focus-visible:ring-offset-1 focus-visible:ring-offset-transparent",
                                    isActive
                                        ? "text-white"
                                        : "text-white/40 hover:text-white/80",
                                ].join(" ")}
                            >
                                {item.label}
                                {item.id === "store" && (
                                    <img
                                        src="/arrowdown.png"
                                        alt=""
                                        className={`w-8 h-8 transition-transform duration-300 ${isRotated ? 'rotate-180' : ''}`}
                                    />
                                )}
                                {item.id === "stats" && (
                                    <img
                                        src="/arrowtop.png"
                                        alt=""
                                        className="w-8 h-8"
                                    />
                                )}
                            </button>

                            {hasDropdown && isRotated && (
                                <div className="absolute top-15 mt-1 bg-gray-800 border border-gray-700 rounded-md shadow-lg min-w-[150px] z-50 -left-18">
                                    {DROPDOWN_ITEMS[item.id as keyof typeof DROPDOWN_ITEMS].map((dropdownItem, index) => (
                                        <button
                                            key={index}
                                            className="block w-full text-left px-4 py-2 text-white/80 hover:text-white hover:bg-gray-700 transition-colors duration-150 first:rounded-t-md last:rounded-b-md"
                                        >
                                            {dropdownItem}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </li>
                    );
                })}
                <li className="pl-3 ml-2"><LogoCart /></li>
            </ul>
        </nav>
    );
}
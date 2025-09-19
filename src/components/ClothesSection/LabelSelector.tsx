interface LabelSelectorProps {
    selected?: string;
}

export function LabelSelector({ selected }: LabelSelectorProps) {
    return (
        <div className="w-full flex justify-between font-family-kanit items-center px-63 mt-10">
            <p className="uppercase">{selected}</p>
        </div>
    )
}
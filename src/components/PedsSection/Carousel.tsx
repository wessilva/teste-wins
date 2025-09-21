import { useState, useEffect } from 'react';

interface PedItem {
    id: string;
    name: string;
    images: string[];
}

export function Carousel() {
    const [pedsData, setPedsData] = useState<PedItem[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const fetchPedsData = async () => {
            try {
                const response = await fetch('https://winsapi.discloud.app/dev/products/peds');
                const data = await response.json();
                const transformedData = data.map((item: any) => ({
                    ...item,
                    images: item.images.map((imageCode: string) => `https://wins.company/assets/TesteFrontEnd/peds/${imageCode}.webp`)
                }));
                setPedsData(transformedData);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchPedsData();
    }, []);

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === pedsData.length - 1 ? 0 : prevIndex + 1
            );
            setIsTransitioning(false);
        }, 150);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? pedsData.length - 1 : prevIndex - 1
            );
            setIsTransitioning(false);
        }, 150);
    };

    const getPrevIndex = () => {
        return currentIndex === 0 ? pedsData.length - 1 : currentIndex - 1;
    };

    const getNextIndex = () => {
        return currentIndex === pedsData.length - 1 ? 0 : currentIndex + 1;
    };

    

    return (
        <div className="z-10 mt-20 flex h-full w-4/5 flex-col items-center justify-center pb-12 lg:pb-40 absolute">
            <div className="flex w-full flex-col items-center justify-center lg:flex-row">
                <div className="mb-8 flex gap-40 lg:mb-0 lg:gap-0 absolute z-20">
                    <button
                        onClick={prevSlide}
                        className="text-white font-bold py-2 px-4  relative right-100 z-1 cursor-pointer hover:scale-110 duration-300 transition-transform"
                    >
                        <img src="/leftButton.png" alt="Previous" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="text-white font-bold py-2 px-4  relative left-100 z-1 cursor-pointer hover:scale-110 duration-300 transition-transform"
                    >
                        <img src="/RightButton1.png" alt="Next" />
                    </button>
                </div>

                <div className="relative z-0 h-[57rem] w-[80rem] overflow-visible lg:h-full">
                    <div className="flex justify-center items-center h-full gap-8">
                       
                        {pedsData.length > 0 && (
                            <div className={`flex justify-center items-center transform scale-75 opacity-50 blur-sm transition-all duration-700 ease-in-out ${isTransitioning ? 'scale-90 opacity-30' : ''}`}>
                                <div className="z-10 mx-auto max-w-96 justify-center text-center">
                                    <h3 className={`mb-2 text-lg font-semibold relative text-white transition-opacity duration-700 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>{pedsData[getPrevIndex()].name}</h3>
                                    <img src="/BluePrice.png" alt="Divisor" className={`mb-20 mx-auto opacity-70 transition-opacity duration-700 ${isTransitioning ? 'opacity-0' : 'opacity-70'}`} />
                                    <img
                                        src={pedsData[getPrevIndex()].images[0]}
                                        alt={pedsData[getPrevIndex()].name}
                                        className={`w-full h-auto object-contain transition-all duration-700 ease-in-out ${isTransitioning ? 'opacity-0 transform scale-110' : 'opacity-100 transform scale-100'}`}
                                    />
                                </div>
                            </div>
                        )}

                       
                        {pedsData.length > 0 && (
                            <div className={`flex justify-center items-center transform scale-100 opacity-100 transition-all duration-700 ease-in-out z-10 ${isTransitioning ? 'scale-105' : ''}`}>
                                <div className="z-10 mx-auto max-w-96 justify-center text-center">
                                    <h3 className={`mb-2 text-lg uppercase relative text-white transition-all duration-700 ease-in-out ${isTransitioning ? 'opacity-0 transform translateY(-10px)' : 'opacity-100 transform translateY(0)'}`}>{pedsData[currentIndex].name}</h3>
                                    <img src="/BluePrice.png" alt="Divisor" className={`mb-20 mx-auto transition-opacity duration-700 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`} />
                                    <img
                                        src={pedsData[currentIndex].images[0]}
                                        alt={pedsData[currentIndex].name}
                                        className={`w-full h-auto object-contain transition-all duration-700 ease-in-out ${isTransitioning ? 'opacity-80 transform scale-110' : 'opacity-100 transform scale-100'}`}
                                    />
                                </div>
                            </div>
                        )}

                      
                        {pedsData.length > 0 && (
                            <div className={`flex justify-center items-center transform scale-75 opacity-50 blur-sm transition-all duration-700 ease-in-out ${isTransitioning ? 'scale-90 opacity-30' : ''}`}>
                                <div className="z-10 mx-auto max-w-96 justify-center text-center">
                                    <h3 className={`mb-2 text-lg font-semibold relative text-white transition-opacity duration-700 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>{pedsData[getNextIndex()].name}</h3>
                                    <img src="/BluePrice.png" alt="Divisor" className={`mb-20 mx-auto opacity-70 transition-opacity duration-700 ${isTransitioning ? 'opacity-0' : 'opacity-70'}`} />
                                    <img
                                        src={pedsData[getNextIndex()].images[0]}
                                        alt={pedsData[getNextIndex()].name}
                                        className={`w-full h-auto object-contain transition-all duration-700 ease-in-out ${isTransitioning ? 'opacity-0 transform scale-110' : 'opacity-100 transform scale-100'}`}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            
            <div className="flex gap-2 mt-4 absolute bottom-15">
                <img src="/bgpeds.png" alt="Indicators" className="mb-2 relative left-2 -top-10 mx-auto" />
                
                
            </div>
        </div>
    );
}
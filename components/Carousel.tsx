import React, {ReactElement, useEffect, useState} from "react";
import {HiArrowCircleLeft, HiArrowCircleRight} from "react-icons/hi";
import {Link} from "react-router-dom";

export default function Carousel(props: { images: string[], texts: string[], links: string[] }): ReactElement {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImage = () => {
        if (currentIndex === 0)
            setCurrentIndex(props.images.length - 1);
        else
            setCurrentIndex(prevState => prevState - 1)
    }

    const nextImage = () => {
        if (currentIndex === props.images.length - 1)
            setCurrentIndex(0);
        else
            setCurrentIndex(prevState => prevState + 1);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage()
        }, 5000);

        return () => clearInterval(interval);
    })

    return (
        <>
            <div className="overflow-hidden relative w-full">
                <div
                    className="flex transition ease-out duration-500"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`
                    }}
                >
                    {
                        props.images.map((source, index) => {
                            return <img
                                onClick={() => {
                                    window.open(
                                        props.links[index],
                                        "_blank"
                                    )
                                }}
                                className="w-full cursor-pointer"
                                alt={props.texts[index]}
                                key={"img" + index}
                                src={source}
                            />
                        })
                    }
                </div>
                <div
                    className="pointer-events-none absolute top-0 h-full w-full items-center justify-between flex px-10 text-4xl">
                    <button className="pointer-events-auto" onClick={prevImage}>
                        <HiArrowCircleLeft/>
                    </button>
                    <button className="pointer-events-auto" onClick={nextImage}>
                        <HiArrowCircleRight/>
                    </button>
                </div>
                <div className="absolute bottom-5 flex justify-center gap-2 w-full">
                    {props.images.map((image, index) => {
                        return (
                            <div
                                key={"selector" + index}
                                className={`w-5 h-5 md:h-2 cursor-pointer ${index === currentIndex ? "bg-main" : "bg-gray-600"}`}
                                onClick={() => {
                                    setCurrentIndex(index);
                                }}
                            >

                            </div>
                        );
                    })}
                </div>
            </div>
            <a href={props.links[currentIndex]} target="_blank">
                {props.texts[currentIndex]}
            </a>
        </>
    )
}
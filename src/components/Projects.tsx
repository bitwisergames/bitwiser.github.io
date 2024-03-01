import {motion} from "framer-motion"
import React, {ReactElement} from "react";
import Scintillate from "../assets/Scintillate.png"
import LevelPlus from "../assets/LevelPlus.png"
import DeathIsFare from "../assets/DeathIsFare.png"
import Carousel from "./Carousel";

export default function Projects(): ReactElement {
    const images: string[] = [
        Scintillate,
        LevelPlus,
        DeathIsFare
    ]

    const texts: string[] = [
        "Scintillate",
        "Level+",
        "Death Is Fare"
    ]

    const links: string[] = [
        "https://poctordepper5446.itch.io/scintillate",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2600460955&searchtext=level%2B",
        "https://poctordepper5446.itch.io/death-is-fare"
    ]

    return (
        <motion.main
            className="overflow-hidden text-center w-4/5 md:w-3/5 lg:w-2/5  mb-auto text-main mx-auto pt-20"
            initial={{height: 0}}
            transition={{duration: 0.2}}
            animate={{height: "auto"}}
            exit={{height: 0, transition: {duration: 1}}}
        >
            <h1 className="text-5xl">Projects</h1>
            <div className="w-full m-auto pt-10">
                <Carousel images={images} texts={texts} links={links}/>
            </div>
        </motion.main>
    );
}
import React, {ReactElement} from "react"
import {motion} from "framer-motion";
import {ReactTyped} from "react-typed";

export default function Landing(): ReactElement {
    return (
        <motion.main
            className="overflow-hidden text-center mb-auto text-main px-20 pt-20"
            initial={{height: 0}}
            transition={{duration: 0.2}}
            animate={{height: "auto"}}
            exit={{height: 0, transition: {duration: 1}}}
        >
            <h1 className="text-5xl">Bitwiser Software</h1>
            <p className="text-3xl pt-5">
                Creators of<br/>
                <span className="text-lg">
                    <ReactTyped strings={["Level+", "Scintillate", "Death is Fare"]} cursorChar="_" backDelay={1200}
                                backSpeed={60}
                                typeSpeed={120}
                                loop/>
                </span>
            </p>
        </motion.main>
    )
}
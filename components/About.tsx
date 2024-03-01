import React, {ReactElement} from "react";
import {motion} from "framer-motion"

export default function About(): ReactElement {
    return (
        <motion.main
            className="overflow-hidden text-center w-4/5 md:w-3/5 lg:w-2/5 mb-auto text-main mx-auto pt-20"
            initial={{height: 0}}
            transition={{duration: 0.2}}
            animate={{height: "auto"}}
            exit={{height: 0, transition: {duration: 1}}}
        >
            <h1 className="text-5xl">About Us</h1>
            <h2 className="text-4xl pt-7">Members</h2>
            <p className="md:text-justify">Bitwiser Software consists of Nathan Sunday and William Venables. Nathan does
                most of the art, sound
                effects, and UI. William does most of the programming and music. We are both pursuing a degree in
                Computer Science. Nathan's concentration is Game Design and Development and William's is
                interdisciplinary.</p>
            <h2 className="text-4xl pt-7">History</h2>
            <p className="md:text-justify">We both started out interested in computers at a young age. Because of that,
                we
                learned programming early
                on. With both of us having a love for gaming and programming, we naturally were inclined towards game
                development. In the past, we have done some game jams. They can be found{" "}
                <a className="underline"
                   rel="noreferrer"
                   target="_blank"
                   href="https://itch.io/profile/bitwisergames">here
                </a>.
                Apart from programming, Nathan has a history of doing art and William was born drawn to music.

            </p>
            <h2 className="text-4xl pt-7">Goals</h2>
            <p className="md:text-justify">We hope to always be learning more about software development. We never want
                to give up on programming or the arts. We want to be a part of the ever-changing field of computer
                science. We long to provide others with the fun and excitement we get out of computers.</p>
        </motion.main>
    )
}
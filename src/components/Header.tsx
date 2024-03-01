import React, {ReactElement, useLayoutEffect, useState} from "react"
import logo from "../assets/bitwiser logo.gif"
import {Link} from "react-router-dom";
import {motion} from "framer-motion"
import {HiChevronDown, HiChevronUp} from "react-icons/hi";

export default function Header(): ReactElement {
    const [isNavOpen, setIsNavOpen] = useState(true);

    useLayoutEffect(() => {
        function onWindowResize() {
            if (window.innerWidth > 768) {
                setIsNavOpen(true);
            } else {
                setIsNavOpen(false);
            }
        }

        window.addEventListener("resize", onWindowResize)

        return () => window.removeEventListener("resize", onWindowResize);
    });

    return (
        <header>
            <motion.nav
                className={`${!isNavOpen && "hidden"} overflow-hidden w-full md:grid-cols-5 gap-3 px-20 text-xl text-main underline-offset-4 cursor-pointer`}
                transition={{duration: 0.2}}
                animate={{height: isNavOpen ? "auto" : 0}}
                exit={{height: 0, transition: {duration: 1}}}
                style={{display: "grid"}}
            >
                <Link to="/" className="col-span-3 md:col-span-1"
                >
                    <img src={logo} className="hidden md:block w-24" alt="bit wiser logo"/>
                    <p className="pt-2 block md:hidden text-center">Home</p>
                </Link>
                <ul className="col-span-3 m-auto grid md:grid-cols-3">
                    <Link className="py-2 text-center md:text-right md:px-5 hover:header-link hover:drop-shadow-fuzz"
                          to="/about">
                        About
                    </Link>
                    <Link className="py-2 text-center md:px-5 hover:header-link hover:drop-shadow-fuzz" to="/projects">
                        Projects
                    </Link>
                    <Link className="py-2 text-center md:text-left md:px-5 hover:header-link hover:drop-shadow-fuzz"
                          to="/contact">
                        Contact
                    </Link>
                </ul>
                <div className="my-auto ml-auto hover:header-link hover:drop-shadow-fuzz"></div>
            </motion.nav>
            <hr className="h-0.5 mx-12 bg-main border-0"/>
            <button onClick={function () {
                setIsNavOpen(prevState => !prevState)
            }}
                    className="border border-main mx-auto px-4 text-main text-center block md:hidden">
                {isNavOpen ? <HiChevronUp/> : <HiChevronDown/>}
            </button>
        </header>
    )
}
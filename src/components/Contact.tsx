import React, {ReactElement} from "react";
import {motion} from "framer-motion"
import ContactInfo from "./ContactInfo";

export default function Contact(): ReactElement {
    return (
        <motion.main
            className="overflow-hidden text-center w-4/5 md:w-3/5 lg:w-2/5  mb-auto text-main mx-auto pt-20"
            initial={{height: 0}}
            transition={{duration: 0.2}}
            animate={{height: "auto"}}
            exit={{height: 0, transition: {duration: 1}}}
        >
            <h1 className="text-5xl">Contact Us</h1>
            <div className="grid 2xl:grid-cols-2 gap-10">
                <ContactInfo
                    name="Nathan Sunday"
                    email="nathanielsunday@bitwisersoftware.com"
                    phone="(651) 314-9123"
                />
                <ContactInfo
                    name="William Venables"
                    email="williamvenables@bitwisersoftware.com"
                    phone="(715) 869-6077"
                />
            </div>
            <h2 className="pt-5 text-3xl">Githubs</h2>
            <hr className="h-0.5 mx-12 2xl:mx-60 bg-main border-0"/>
            <p className="md:text-justify">
                <ul className="text-center">
                    <li>
                        <a href="https://github.com/bitwisergames">Bitwiser</a>
                    </li>
                    <li>
                        <a href="https://github.com/NathanielSunday">Nathan Sunday</a>
                    </li>
                    <li>
                        <a href="https://github.com/WilliamVenables">William Venables</a>
                    </li>
                </ul>
            </p>

        </motion.main>
    );
}
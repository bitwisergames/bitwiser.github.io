import React, {ReactElement} from "react";

export default function Footer(): ReactElement {
    return (
        <footer className="mx-auto text-main pt-5">
            <hr className="h-0.5 mx-12 bg-main border-0"/>
            <span className="block text-sm sm:text-center">© 2024 <a href="#" className="hover:underline">Bitwiser Software</a>. All Rights Reserved.</span>
        </footer>
    )
}
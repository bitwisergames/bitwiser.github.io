import React, {ReactElement} from "react";

export default function ContactInfo(props: {
    name: string,
    email: string,
    phone: string
}): ReactElement {
    return (
        <div>
            <h2 className="pt-5 text-3xl">{props.name}</h2>
            <hr className="h-0.5 mx-12 bg-main border-0"/>
            <ul>
                <li>
                    <a className="hover:header-link"
                       href={`mailto: ${props.email}`}>{props.email}</a>
                </li>
                <li>
                    <a className="hover:header-link phone-spacing" href={`tel: ${props.phone}`}>{props.phone}</a>
                </li>
            </ul>
        </div>
    )
}
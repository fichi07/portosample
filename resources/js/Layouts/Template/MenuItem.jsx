import { Link } from "@inertiajs/react";
import React from "react";
export default function MenuItem({ link, text, isActive, method = "get" }) {
    return (
        <Link
            href={link ? route(link) : null}
            className={`top-link hover:text-portto-light-gold  transition-all duration-300 ${
                isActive && "active"
            }`}
            method={method}
            as="button"
        >
            {text}
        </Link>
    );
}

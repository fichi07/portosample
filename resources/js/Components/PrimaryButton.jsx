import PropTypes from "prop-types";
import React from "react";

PrimaryButton.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    variant: PropTypes.oneOf([
        "primary",
        "secondary",
        "black",
        "update",
        "details",
        "delete",
    ]),
    className: PropTypes.string,
    processing: PropTypes.bool,
    children: PropTypes.node,
    onclick: PropTypes.func,
};

export default function PrimaryButton({
    type = "",
    variant = "",
    className = "",
    processing,
    children,
    onClick,
}) {
    const handleClick = () => {
        if (onClick) {
            onClick(); // Memanggil fungsi onClick jika diberikan
        }
    };
    return (
        <button
            type={type}
            className={`rounded-2xl py-[13px] text-center w-full ${
                processing ? "opacity-30" : ""
            } btn-${variant} ${className}`}
            disabled={processing}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}

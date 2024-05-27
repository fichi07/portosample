import { useState, useRef } from "react";
import { Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import { ListMenu } from "@/Layouts/Template/MenuList";
import MenuItem from "@/Layouts/Template/MenuItem";
import React from "react";
export default function TopbarAdmin({ name }) {
    const [dropdownOpen, setDropdownOpen] = useState(true);
    const dropdownTarget = useRef();

    const triggerDropdown = () => {
        if (dropdownOpen) {
            dropdownTarget.current.classList.remove("hidden");
        } else {
            dropdownTarget.current.classList.add("hidden");
        }
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <>
            <div className=" bg-gray-100">
                <nav className=" bg-indigo-950 border-b border-gray-100">
                    <div className="container max-w-[1200px] mx-auto flex justify-between items-center pt-[20px] z-10">
                        <ul className="flex gap-[50px] items-center text-gray-100 font-medium">
                            {ListMenu.map((menu, index) => (
                                <MenuItem
                                    key={`${index}-${menu.text}`}
                                    link={menu.link}
                                    text={menu.text}
                                    isActive={
                                        menu.link && route().current(menu.link)
                                    }
                                />
                            ))}
                        </ul>
                        <div className="flex justify-between h-20 items-center cursor-pointer">
                            <div className="collapsible-dropdown flex flex-col gap-2 relative">
                                {/*  <div
                                    href="#!"
                                    className="outline outline-1 p-[7px] mb-[10px] rounded-2xl w-fit h-fit dropdown-button"
                                    onClick={triggerDropdown}
                                >
                                    {" "}
                                    <span className="text-gray-100 font-medium hover:text-portto-light-gold transition-all duration-300">
                                        Welcome, {name}
                                    </span>
                                </div> */}
                                <PrimaryButton
                                    type="button"
                                    onClick={triggerDropdown}
                                    className="inline-flex dropdown-button items-center px-3 py-2 border border-transparent leading-4 font-medium rounded-md text-gray-100 bg-portto-black hover:text-portto-light-gold  focus:outline-none transition ease-in-out duration-150"
                                >
                                    Welcome, {name}
                                    <svg
                                        className="ms-2 -me-0.5 h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </PrimaryButton>
                                <div
                                    className="bg-white rounded-2xl text-black font-medium flex flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] hidden overflow-hidden"
                                    ref={dropdownTarget}
                                >
                                    <a
                                        href="#!"
                                        className="transition-all hover:bg-sky-100 p-4"
                                    >
                                        Dashboard
                                    </a>
                                    <a
                                        href="#!"
                                        className="transition-all hover:bg-sky-100 p-4"
                                    >
                                        Settings
                                    </a>
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        className="transition-all hover:bg-sky-100 p-4"
                                    >
                                        Sign Out
                                    </Link>
                                </div>
                            </div>

                            <style jsx="true">
                                {`
                                    .top-search {
                                        background-image: url("/icons/ic_search.svg");
                                    }
                                `}
                            </style>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

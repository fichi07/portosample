import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Faq() {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <>
            <section id="FAQ" className="container max-w-[1130px] mx-auto">
                <div className="flex gap-[70px] items-center pt-[100px] pb-[150px]">
                    <div className="flex flex-col gap-[30px]" d>
                        <div className="flex flex-col gap-[10px]">
                            <h2 className="font-extrabold text-[50px] leading-[70px]">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-lg text-[#878C9C]">
                                If you have any question please contact me.
                            </p>
                        </div>
                        <div className="flex flex-col w-[200px] gap-3 self-start mt-11 leading-[100%] max-md:mt-10">
                            {" "}
                            <Link href={route("book.index")}>
                                <PrimaryButton
                                    type="button"
                                    variant="secondary"
                                    className="  "
                                >
                                    Hire Me
                                </PrimaryButton>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[30px] w-[603px] shrink-0">
                        <div className="flex flex-col p-5 rounded-2xl bg-[#F4F5F8] w-full">
                            <button
                                className="accordion-button flex justify-between gap-1 items-center"
                                onClick={() => toggleAccordion(1)}
                            >
                                <span className="font-bold text-2xl">
                                    How do I work usually?
                                </span>
                                <div
                                    className={`arrow w-9 h-9 flex shrink-0 transition-transform duration-300 ${
                                        openAccordion === 1
                                            ? "transform rotate-180"
                                            : ""
                                    }`}
                                >
                                    <img
                                        src="/images/icons/arrow-circle-down.svg"
                                        className="transition-all duration-300"
                                        alt="icon"
                                    />
                                </div>
                            </button>
                            <div
                                className={`accordion-content transition-max-height duration-500 ease-in-out overflow-hidden ${
                                    openAccordion === 1
                                        ? "max-h-screen"
                                        : "max-h-0"
                                }`}
                            >
                                <p className="text-[20px] leading-[36px] pt-5">
                                    As a freelancer, my work process is
                                    characterized by flexibility,
                                    self-discipline, and a strong emphasis on
                                    client communication.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col p-5 rounded-2xl bg-[#F4F5F8] w-full">
                            <button
                                className="accordion-button flex justify-between gap-1 items-center"
                                onClick={() => toggleAccordion(2)}
                            >
                                <span className="font-bold text-2xl">
                                    How much I charge per project?
                                </span>
                                <div
                                    className={`arrow w-9 h-9 flex shrink-0 transition-transform duration-300 ${
                                        openAccordion === 2
                                            ? "transform rotate-180"
                                            : ""
                                    }`}
                                >
                                    <img
                                        src="/images/icons/arrow-circle-down.svg"
                                        className="transition-all duration-300"
                                        alt="icon"
                                    />
                                </div>
                            </button>
                            <div
                                className={`accordion-content transition-max-height duration-500 ease-in-out overflow-hidden ${
                                    openAccordion === 2
                                        ? "max-h-screen"
                                        : "max-h-0"
                                }`}
                            >
                                <p className="text-[20px] leading-[36px] pt-5">
                                    I don’t charge hourly. I charge based on the
                                    project brief and given timeline to finish
                                    that particular project.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col p-5 rounded-2xl bg-[#F4F5F8] w-full">
                            <button
                                className="accordion-button flex justify-between gap-1 items-center"
                                onClick={() => toggleAccordion(3)}
                            >
                                <span className="font-bold text-2xl">
                                    Can I work full-time?
                                </span>
                                <div
                                    className={`arrow w-9 h-9 flex shrink-0 transition-transform duration-300 ${
                                        openAccordion === 3
                                            ? "transform rotate-180"
                                            : ""
                                    }`}
                                >
                                    <img
                                        src="/images/icons/arrow-circle-down.svg"
                                        className="transition-all duration-300"
                                        alt="icon"
                                    />
                                </div>
                            </button>
                            <div
                                className={`accordion-content transition-max-height duration-500 ease-in-out overflow-hidden ${
                                    openAccordion === 3
                                        ? "max-h-screen"
                                        : "max-h-0"
                                }`}
                            >
                                <p className="text-[20px] leading-[36px] pt-5">
                                    I don’t work full-time. At this moment, I
                                    prefer to work remotely and based on the
                                    certain project only.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

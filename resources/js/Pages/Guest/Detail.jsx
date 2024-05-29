import Template from "@/Layouts/Template/Index";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import Footer from "@/Components/Footer";

export default function Detail({ projects, assignedTools, screenshots }) {
    useEffect(() => {
        const script = document.createElement("script");
        script.src =
            "https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js";
        script.async = true;

        document.body.appendChild(script);

        script.onload = () => {
            const initializeFancybox = () => {
                Fancybox.bind("[data-fancybox]", {
                    // Your custom options
                });
            };
            initializeFancybox();
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const [activeScreenshot, setActiveScreenshot] = useState(
        `/storage/${projects.cover}`
    );
    const [allScreenshots, setAllScreenshots] = useState([]);

    useEffect(() => {
        // Menambahkan cover image sebagai bagian dari screenshots
        setAllScreenshots([
            { id: "main", screenshot: projects.cover },
            ...screenshots,
        ]);
    }, [projects, screenshots]);
    return (
        <>
            <Template>
                <Head title="Details Portofolio">
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css"
                    />
                </Head>
                <section
                    id="Header"
                    style={{
                        backgroundImage: `url('/images/background/Design1.png')`,

                        backgroundPosition: "left",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="container flex flex-col items-center mx-auto max-w-[1130px] pb-[50px]">
                        <div className="flex gap-5 justify-between mt-10 w-full">
                            <div className="flex gap-2 my-auto text-3xl font-semibold leading-10 text-blue-500 whitespace-nowrap">
                                <img loading="lazy" src="../images/logo.png" />
                            </div>
                            <div className="flex gap-6 justify-between px-0.5 text-base font-medium text-black  ">
                                <div className="flex justify-between my-auto whitespace-nowrap ">
                                    <ul className="flex gap-[50px] items-center">
                                        <li>
                                            <a
                                                href={route("guest.index")}
                                                className="font-medium text-lg hover:text-portto-light-blue transition-all duration-300"
                                            >
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <Link
                                                href={route("projects.index")} // Menggunakan href dengan id Services
                                                className="font-medium text-lg hover:text-portto-light-blue transition-all duration-300"
                                            >
                                                Projects
                                            </Link>
                                        </li>

                                        <li>
                                            <a
                                                href=""
                                                className="font-medium text-lg hover:text-portto-light-blue transition-all duration-300"
                                            >
                                                About
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#About" // Menggunakan href dengan id Services
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    scrollToServices("About");
                                                }}
                                                className="font-medium text-lg hover:text-portto-light-blue transition-all duration-300"
                                            >
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <PrimaryButton type="button" variant="primary">
                                    Download CV
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id="Screenshots"
                    className="container max-w-[1130px] mx-auto pt-[20px]"
                >
                    <div className="flex flex-col gap-4">
                        <h2 className="font-extrabold text-2xl mb-[20px]">
                            Screenshots Project {projects.name}
                        </h2>
                        <p className="text-xl leading-[30px] text-white z-10">
                            {projects.category}
                        </p>
                        <div className="flex flex-row gap-5">
                            <div className="flex justify-center mb-5">
                                <img
                                    src={activeScreenshot}
                                    className="w-[750px] h-[500px] rounded-[30px] ring-1 ring-[#E4E5E8]"
                                    alt="Active Screenshot"
                                />
                            </div>
                            <div className="grid grid-rows-4 gap-5 ml-[40px]">
                                {allScreenshots.map((screenshot, index) => (
                                    <a
                                        key={screenshot.id}
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setActiveScreenshot(
                                                `/storage/${screenshot.screenshot}`
                                            );
                                        }}
                                        className="group w-full h-[100px] flex overflow-hidden rounded-[15px] ring-1 transition-all duration-300 hover:ring-[3px] hover:ring-blue-500 relative"
                                        data-caption={`Screenshot #${
                                            index + 1
                                        }`}
                                    >
                                        <img
                                            src={`/storage/${screenshot.screenshot}`}
                                            className="w-full h-full object-cover"
                                            alt={`Screenshot #${index + 1}`}
                                        />
                                        <img
                                            src="../images/icons/eye.svg"
                                            className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10"
                                            alt="View Icon"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="Details"
                    className="container max-w-[1130px] mx-auto pt-[30px]"
                >
                    <div className="flex gap-[50px] justify-between">
                        <div className="flex flex-col gap-5">
                            <h2 className="font-extrabold text-2xl">
                                The First Purpose
                            </h2>
                            <div className="description flex flex-col gap-4 font-medium text-lg leading-[38px]">
                                <p>
                                    FinanceAI is a cutting-edge mobile
                                    application revolutionizing personal finance
                                    management through artificial intelligence.
                                    This intuitive app is engineered to empower
                                    users with real-time financial insights and
                                    personalized.
                                </p>
                                <p>
                                    At the heart of FinanceAI lies a
                                    sophisticated AI engine that analyzes
                                    spending patterns, investment choices, and
                                    saving habits to offer tailored
                                    recommendations. Whether it's optimizing
                                    budgets, identifying investment
                                    opportunities, or potential savings,
                                    FinanceAI ensures users are always a step
                                    ahead in their financial.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex items-center gap-1 bg-[#F4F5F8] p-[8px_10px] rounded-[12px]">
                                    <div className="w-5 h-5 flex shrink-0">
                                        <img
                                            src="../images/icons/crown-black.svg"
                                            alt="icon"
                                        />
                                    </div>
                                    <p className="font-semibold">Startup</p>
                                </div>
                                <div className="flex items-center gap-1 bg-[#F4F5F8] p-[8px_10px] rounded-[12px]">
                                    <div className="w-5 h-5 flex shrink-0">
                                        <img
                                            src="../images/icons/code-black.svg"
                                            alt="icon"
                                        />
                                    </div>
                                    <p className="font-semibold">Future AI</p>
                                </div>
                                <div className="flex items-center gap-1 bg-[#F4F5F8] p-[8px_10px] rounded-[12px]">
                                    <div className="w-5 h-5 flex shrink-0">
                                        <img
                                            src="../images/icons/chart-2-black.svg"
                                            alt="icon"
                                        />
                                    </div>
                                    <p className="font-semibold">Finance</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h2 className="font-extrabold text-2xl">
                                Software Used
                            </h2>
                            <div className="software-container flex flex-col shrink-0 gap-5 w-[325px]">
                                {assignedTools.map((projecttool) => (
                                    <div
                                        key={projecttool.id}
                                        className="card-software w-full flex items-center bg-[#F4F5F8] rounded-2xl p-5 gap-4 transition-all duration-300 hover:ring-2 hover:ring-portto-purple"
                                    >
                                        <div className="w-[70px] h-[70px] bg-white rounded-full flex shrink-0 items-center justify-center">
                                            <img
                                                src={`/storage/${projecttool.logo}`}
                                                alt="tool"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-[2px]">
                                            <p className="tool-title font-bold text-xl leading-[30px]">
                                                {projecttool.name}
                                            </p>
                                            <p className="text-lg text-[#878C9C]">
                                                {projecttool.tagline}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="Featured-testimonial"
                    className="container max-w-[1130px] mx-auto"
                >
                    <div className="flex gap-[100px] items-center px-[65px] pt-[100px]">
                        <div className="flex flex-col gap-5 relative">
                            <div className="flex w-[200px] h-[250px] rounded-[30px] shrink-0 overflow-hidden z-10">
                                <img
                                    src="../images/photo/photo5.png"
                                    alt="photo"
                                />
                            </div>
                            <div className="flex flex-col gap-[6px] text-center">
                                <p className="font-bold text-2xl">
                                    Shirley Pop
                                </p>
                                <p className="text-xl text-[#878C9C]">
                                    Founder Bwalajar
                                </p>
                            </div>
                            <img
                                src="../images/icons/quote.svg"
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 left-[21px] top-[14px]"
                                alt="icon"
                            />
                        </div>
                        <div className="flex flex-col gap-[50px]">
                            <div className="flex shrink-0">
                                <img
                                    src="../images/logos/logo-testi5.svg"
                                    alt="logo"
                                />
                            </div>
                            <p className="font-semibold text-[32px] leading-[60px]">
                                She helped us to build our first prototype to
                                win our investor and early users heart that
                                generate huge attraction. Will hire her back
                                again anytime soon.
                            </p>
                            <div className="flex h-8 w-fit shrink-0">
                                <img
                                    src="../images/icons/Star.svg"
                                    className="w-full h-full"
                                    alt="star"
                                />
                                <img
                                    src="../images/icons/Star.svg"
                                    className="w-full h-full"
                                    alt="star"
                                />
                                <img
                                    src="../images/icons/Star.svg"
                                    className="w-full h-full"
                                    alt="star"
                                />
                                <img
                                    src="../images/icons/Star.svg"
                                    className="w-full h-full"
                                    alt="star"
                                />
                                <img
                                    src="../images/icons/Star.svg"
                                    className="w-full h-full"
                                    alt="star"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="Book"
                    className="container max-w-[1130px] pb-[100px] mx-auto"
                >
                    <div className="bg-blue-500 flex justify-between px-[50px] rounded-[50px] h-[476px] mt-[100px]  relative">
                        <div className="group/projects w-[220px] overflow-hidden">
                            <div className="slider flex flex-col h-max justify-center">
                                <div className="project-container animate-[slideToT_30s_linear_infinite] group-hover/projects:pause-animate flex flex-col gap-[30px] pt-[30px] justify-center">
                                    {screenshots.map((screensho) => (
                                        <div
                                            key={screensho.id}
                                            className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur"
                                        >
                                            <div className="w-full h-full rounded-[20px] overflow-hidden">
                                                <img
                                                    src={`/storage/${screensho.screenshot}`}
                                                    className="w-full h-full object-cover"
                                                    alt="thumbnail"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="slider flex flex-col h-max justify-center">
                                <div className="project-container animate-[slideToT_30s_linear_infinite] group-hover/projects:pause-animate flex flex-col gap-[30px] pt-[30px] justify-center">
                                    {screenshots.map((screensho) => (
                                        <div
                                            key={screensho.id}
                                            className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur"
                                        >
                                            <div className="w-full h-full rounded-[20px] overflow-hidden">
                                                <img
                                                    src={`/storage/${screensho.screenshot}`}
                                                    className="w-full h-full object-cover"
                                                    alt="thumbnail"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 items-center justify-center text-center w-fit">
                            <h2 className="font-extrabold text-[40px] leading-[60px] text-white">
                                Let Me Help You <br />
                                Grow Business Today
                            </h2>
                            <p className="font-semibold text-lg leading-[32px] text-white">
                                I will dedicate my entire career to focus <br />
                                on finishing your future dreams
                            </p>
                            <PrimaryButton type="button" variant="primary">
                                Book a Meeting
                            </PrimaryButton>
                        </div>
                        <div className="group/projects w-[220px] overflow-hidden">
                            <div className="slider flex flex-col h-max justify-center">
                                <div className="project-container animate-[slideToT_30s_linear_infinite] group-hover/projects:pause-animate flex flex-col gap-[30px] pt-[30px] justify-center">
                                    {screenshots.map((screensho) => (
                                        <div
                                            key={screensho.id}
                                            className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur"
                                        >
                                            <div className="w-full h-full rounded-[20px] overflow-hidden">
                                                <img
                                                    src={`/storage/${screensho.screenshot}`}
                                                    className="w-full h-full object-cover"
                                                    alt="thumbnail"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="slider flex flex-col h-max justify-center">
                                <div className="project-container animate-[slideToT_30s_linear_infinite] group-hover/projects:pause-animate flex flex-col gap-[30px] pt-[30px] justify-center">
                                    {screenshots.map((screensho) => (
                                        <div
                                            key={screensho.id}
                                            className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur"
                                        >
                                            <div className="w-full h-full rounded-[20px] overflow-hidden">
                                                <img
                                                    src={`/storage/${screensho.screenshot}`}
                                                    className="w-full h-full object-cover"
                                                    alt="thumbnail"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer></Footer>
            </Template>
        </>
    );
}

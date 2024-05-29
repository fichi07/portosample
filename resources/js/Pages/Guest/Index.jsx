import PrimaryButton from "@/Components/PrimaryButton";
import Flickity from "react-flickity-component";
import ProjectCard from "@/Components/ProjectCard";
import { Head, Link } from "@inertiajs/react";
import Footer from "@/Components/Footer";
import Faq from "@/Components/Faq";
import React from "react";
import Template from "@/Layouts/Template/Index";
import TestimonyCard from "@/Components/TestimonyCard";
import ServiceCard from "@/Components/ServiceCard";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Index({ projects }) {
    const flickityOptions = {
        cellAlign: "center",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <>
            <Template>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                    />
                    <link
                        href="https://unpkg.com/aos@2.3.1/dist/aos.css"
                        rel="stylesheet"
                    ></link>
                    <title>Dashboard</title>
                </Head>
                <section id="Header" data-aos="fade-down">
                    <div className="container flex flex-col items-center mx-auto max-w-[1130px] pb-[30px]">
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
                                            <Link
                                                href={route("book.index")}
                                                className="font-medium text-lg hover:text-portto-light-blue transition-all duration-300"
                                            >
                                                Contact
                                            </Link>
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
                    id="Hero"
                    style={{
                        backgroundImage: `url('/images/background/Design.jpg')`,

                        backgroundPosition: "left",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="container flex flex-col max-w-[1130px] items-center mx-auto pb-[100px]">
                        <div className="flex gap-5 justify-between mt-20 w-full ">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div
                                    className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full"
                                    data-aos="fade-right"
                                >
                                    <div className="flex flex-col self-stretch my-auto text-base font-medium max-md:mt-10 max-md:max-w-full">
                                        <div className="justify-center self-start px-1.5 py-3.5 text-xl leading-7 text-blue-500 whitespace-nowrap rounded-full border border-blue-500 border-solid stroke-[0.5px]">
                                            Welcome
                                        </div>
                                        <div className="mt-5 mr-7 text-6xl font-semibold tracking-tight leading-[70px] text-neutral-950 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                                            I have
                                            <span className="font-bold text-blue-500">
                                                Creative
                                            </span>
                                            <br />
                                            <span className="font-bold tracking-tight text-blue-500">
                                                Design
                                            </span>
                                            <span className="tracking-tight">
                                                Experience
                                            </span>
                                        </div>
                                        <div className="mt-8 leading-6 text-zinc-800 max-md:max-w-full">
                                            I’m Tanvir, a creative Product
                                            Designer. I’ve been helping
                                            businesses
                                            <br />
                                            to solve their problems with my
                                            design for 2 years.
                                        </div>
                                        <div className="flex flex-row w-[400px] gap-3 self-start mt-11 leading-[100%] max-md:mt-10">
                                            <PrimaryButton
                                                type="button"
                                                variant="secondary"
                                            >
                                                Contact Me
                                            </PrimaryButton>

                                            <div className="flex w-full hover:text-portto-light-blue transition-all duration-300">
                                                <PrimaryButton type="button">
                                                    View Portfolio
                                                </PrimaryButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full"
                                    data-aos="fade-left"
                                >
                                    <img
                                        src="../images/photo profil.png"
                                        className="w-full h-full object-contain"
                                        alt="hero image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="Count">
                    <div
                        className="container flex flex-col max-w-[1130px] items-center mx-auto pt-[50px] pb-[100px] justify-between "
                        data-aos="zoom-in"
                    >
                        <div className="flex gap-5 justify-between w-full px-[100px] pt-[30px] pb-[30px] rounded-[30px] bg-gradient-to-r from-[#FFEDD3] to-[#FFCD83]">
                            <div className="flex flex-col">
                                <div className="text-5xl font-semibold text-blue-500 max-md:text-4xl">
                                    80+
                                </div>
                                <div className="mt-5 text-3xl text-black">
                                    Satisfied clients
                                </div>
                            </div>
                            <div className="shrink-0 self-stretch w-px bg-blue-500 border border-blue-500 border-solid h-[102px]" />
                            <div className="flex flex-col">
                                <div className="text-5xl font-semibold text-blue-500 max-md:text-4xl">
                                    200+
                                </div>
                                <div className="mt-5 text-3xl text-black">
                                    Projects completed
                                </div>
                            </div>
                            <div className="shrink-0 self-stretch w-px bg-blue-500 border border-blue-500 border-solid h-[102px]" />
                            <div className="flex flex-col">
                                <div className="text-5xl font-semibold text-blue-500 max-md:text-4xl">
                                    99+
                                </div>
                                <div className="mt-5 text-3xl text-black">
                                    Reviews given
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="Myservice" className="bg-[#F4F5F8]">
                    <div className="container flex flex-col max-w-[1130px] items-center mx-auto pt-[100px] pb-[100px]">
                        <div className="flex gap-5 items-center ml-[20px] justify-between ">
                            <div
                                className="flex flex-col items-center"
                                data-aos="fade-down"
                            >
                                <div className="justify-center self-center px-1.5 py-3 text-xl font-medium leading-7 whitespace-nowrap rounded-full border border-blue-500 border-solid stroke-[0.5px]">
                                    My Services
                                </div>
                                <div className="mt-4 text-4xl font-semibold leading-[54px]">
                                    What I
                                    <span className="ml-[10px] text-blue-500">
                                        Provide
                                    </span>
                                </div>
                            </div>
                        </div>
                        <ServiceCard />
                    </div>
                </section>

                <section
                    id="Myskill"
                    className="container flex flex-col items-center max-w-[1130px] mx-auto pt-[100px] pb-[100px] "
                    style={{
                        backgroundImage: `url('/images/background/Design.jpg')`,

                        backgroundPosition: "right",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className=" flex gap-5 max-md:flex-col mx-auto max-md:gap-0">
                        <div
                            className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full"
                            data-aos="fade-right"
                        >
                            <div className="flex flex-col  text-base font-medium text-blue-500 max-md:mt-10 max-md:max-w-full">
                                <div className="justify-center self-start px-1.5 py-3 text-xl leading-7 rounded-full border border-blue-500 border-solid stroke-[0.5px]">
                                    My Skills
                                </div>
                                <div className="mt-6 text-4xl font-semibold leading-[54px] max-md:max-w-full">
                                    Why Hire Me For Your <br />
                                    <span className="text-neutral-950">
                                        Next
                                    </span>
                                    <span className="text-blue-500">
                                        {" "}
                                        Project?
                                    </span>
                                </div>
                                <div className="mt-9 leading-6 text-zinc-800 max-md:max-w-full">
                                    I’m specialist in UI/UX Designe. My passion
                                    is designing & solving problems through user
                                    experience and research.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full ">
                            <div className="flex flex-col self-stretch my-auto text-xl font-semibold leading-5 text-black max-md:mt-10">
                                <div data-aos="fade-left">
                                    <img
                                        loading="lazy"
                                        src="../images/icons/diamon.png"
                                        className="w-7 aspect-square"
                                    />
                                    <div className="mt-4">Visual Design</div>
                                    <div className="mt-4 text-sm leading-5 text-zinc-800">
                                        Create user interface design with
                                        <br />
                                        unique & modern ideas
                                    </div>
                                </div>
                                <div data-aos="fade-left">
                                    <img
                                        loading="lazy"
                                        src="../images/icons/toga.png"
                                        className="mt-20 w-7 aspect-square max-md:mt-10"
                                    />
                                    <div className="mt-5">UX Research</div>
                                    <div className="mt-5 text-sm leading-5 text-zinc-800">
                                        Create digital user products with
                                        <br />
                                        updated ideas
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full ">
                            <div
                                className="flex flex-col self-stretch my-auto max-md:mt-10"
                                data-aos="fade-left"
                            >
                                <img
                                    loading="lazy"
                                    src="../images/icons/vector.png"
                                    className="w-7 aspect-square"
                                />
                                <div className="mt-4 text-xl font-semibold leading-5 text-black">
                                    Design Prototype
                                </div>
                                <div className="mt-4 text-sm tracking-normal leading-5 text-zinc-800">
                                    <span className="tracking-normal">
                                        Create advance design prototype
                                    </span>{" "}
                                    with Figma apps.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="Projects" className="bg-[#F4F5F8]">
                    <div className="container flex flex-col max-w-[1130px] items-center mx-auto pt-[100px] pb-[100px]">
                        <div className="flex gap-5 items-start justify-between w-full px-5  ">
                            <div
                                className="flex flex-col g w-[50%]"
                                data-aos="fade-up"
                                data-aos-duration="3000"
                            >
                                <div className="flex flex-col px-5 pb-[70px] text-base font-medium leading-5 text-blue-500 max-md:mt-0">
                                    <div className="justify-center self-start px-1.5 py-3.5 text-xl whitespace-nowrap rounded-full border border-blue-500 border-solid stroke-[0.5px]">
                                        Portfolio
                                    </div>
                                    <div className="mt-6 text-4xl  font-semibold tracking-tighter leading-[54px]">
                                        <span className="tracking-tighter">
                                            My Creative Works
                                        </span>
                                        <br />
                                        Latest{" "}
                                        <span className="text-blue-500">
                                            Projects
                                        </span>
                                    </div>
                                    <div className="mt-9 leading-7 text-zinc-800">
                                        I have selected and mentioned here some
                                        of my latest projects to share with you.
                                    </div>
                                </div>
                            </div>

                            <div
                                className="flex flex-col ml-[50px] w-full "
                                data-aos="zoom-out"
                                data-aos-duration="3000"
                            >
                                <Flickity options={flickityOptions}>
                                    {projects.map((project) => (
                                        <ProjectCard
                                            key={project.id}
                                            name={project.name}
                                            slug={project.slug}
                                            cover={project.cover}
                                        />
                                    ))}
                                </Flickity>

                                <div className="self-center w-[200px] gap-3  mt-11 leading-[100%] max-md:mt-10">
                                    <Link href={route("projects.index")}>
                                        <PrimaryButton
                                            type="button"
                                            variant="primary"
                                        >
                                            Show More
                                        </PrimaryButton>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="Testimonial"
                    style={{
                        backgroundImage: `url('/images/background/Design.jpg')`,

                        backgroundPosition: "right",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="container flex flex-col max-w-[1130px] items-center mx-auto pt-[100px] pb-[100px]">
                        <div
                            className="flexitems-center ml-[20px] justify-between "
                            data-aos="fade-zoom-in"
                        >
                            <div className="flex flex-col">
                                <div className="justify-center self-start px-1.5 py-3 text-xl font-medium leading-7 whitespace-nowrap rounded-full border border-blue-500 border-solid stroke-[0.5px]">
                                    Reviews
                                </div>
                                <div className="mt-4 text-4xl font-semibold leading-[54px]">
                                    Our Customer Say
                                    <br />
                                    Something
                                    <span className="text-blue-500">
                                        About Us
                                    </span>
                                </div>
                            </div>
                        </div>
                        <TestimonyCard data-aos="zoom-in-up" />
                    </div>
                </section>

                <Faq />
                <Footer />
            </Template>
        </>
    );
}

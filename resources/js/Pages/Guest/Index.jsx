import PrimaryButton from "@/Components/PrimaryButton";
import Flickity from "react-flickity-component";
import InputError from "@/Components/InputError";
import { Head, Link } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import Footer from "@/Components/Footer";
import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import Template from "@/Layouts/Template/Index";
import TestimonyCard from "@/Components/TestimonyCard";
import ServiceCard from "@/Components/ServiceCard";

export default function Index({ projects }) {
    const { setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        contact: "",
        message: "",
    });
    const flickityOptions = {
        cellAlign: "center",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };

    const ohandleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type == "file"
                ? event.target.files[0]
                : event.target.value
        );
    };
    const submit = (e) => {
        e.preventDefault();

        post(route(""));
    };
    return (
        <>
            <Template>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                    />
                    <title>Dashboard</title>
                </Head>
                <section
                    style={{
                        backgroundImage: `url('/images/background/Design1.png')`,

                        backgroundPosition: "left",
                        backgroundRepeat: "no-repeat",
                    }}
                    id="Header"
                >
                    <div className="container flex flex-col items-center mx-auto max-w-[1130px] pb-[100px]">
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
                                            <a
                                                href="#Services" // Menggunakan href dengan id Services
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    scrollToServices(
                                                        "Services"
                                                    );
                                                }}
                                                className="font-medium text-lg hover:text-portto-light-blue transition-all duration-300"
                                            >
                                                Services
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#Testimonials" // Menggunakan href dengan id Services
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    scrollToServices(
                                                        "Testimonials"
                                                    );
                                                }}
                                                className="font-medium text-lg hover:text-portto-light-blue transition-all duration-300"
                                            >
                                                Testimonials
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href=""
                                                className="font-medium text-lg hover:text-portto-light-blue transition-all duration-300"
                                            >
                                                Pricing
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
                                                About
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <PrimaryButton type="button" variant="primary">
                                    Download CV
                                </PrimaryButton>
                            </div>
                        </div>
                        <div className="flex gap-5 justify-between mt-20 w-full ">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
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
                                <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
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
                    <div className="container flex flex-col max-w-[1130px] items-center mx-auto pt-[50px] pb-[100px] justify-between ">
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
                            <div className="flex flex-col items-center">
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
                        <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
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
                                <div className="flex flex-row w-[200px] gap-3 self-start mt-11 leading-[100%] max-md:mt-10">
                                    <PrimaryButton
                                        type="button"
                                        variant="secondary"
                                        className="  "
                                    >
                                        Hire Me
                                    </PrimaryButton>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col self-stretch my-auto text-xl font-semibold leading-5 text-black max-md:mt-10">
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
                        <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col self-stretch my-auto max-md:mt-10">
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

                <section id="Projectss" className="bg-[#F4F5F8]">
                    <div className="container flex flex-col max-w-[1130px] items-center mx-auto pt-[100px] pb-[100px]">
                        <div className="flex gap-5 items-start justify-between w-full px-5  ">
                            <div className="flex flex-col g w-[50%]">
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

                            <div className="flex flex-col ml-[50px] w-full ">
                                <Flickity options={flickityOptions}>
                                    {projects.map((project) => (
                                        <div
                                            key={project.id}
                                            className="group  w-[550px] h-[350px] flex shrink-0 backdrop-blur relative overflow-hidden group mr-[30px]"
                                        >
                                            <div className="w-[550px] h-[350px] rounded-[30px] overflow-hidden absolute">
                                                <img
                                                    src={`/storage/${project.cover}`}
                                                    className="w-full h-full object-cover"
                                                    alt=""
                                                />
                                                <div
                                                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px]
                                            rounded-br-[28px] flex justify-between items-center px-7 h-[130px]"
                                                >
                                                    <div className="font-medium text-[22px] text-white">
                                                        {project.name}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-col w-full items-center justify-center gap-[50px] bg-portto-black rounded-[30px] relative opacity-0 hover:opacity-100 transition-all duration-300">
                                                <Link
                                                    href={route(
                                                        "guest.detail",
                                                        project.slug
                                                    )}
                                                    className="z-10 font-bold text-lg text-center w-fit h-fit bg-slate-100 border-blue-500 rounded-full p-[14px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#0147ff]"
                                                >
                                                    View Details
                                                </Link>
                                                <img
                                                    src="images/Ellipse.svg"
                                                    className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-1/2"
                                                    alt="background icon"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </Flickity>

                                <div className="self-center w-[200px] gap-3  mt-11 leading-[100%] max-md:mt-10">
                                    <PrimaryButton
                                        type="button"
                                        variant="primary"
                                        className="  "
                                    >
                                        Show More
                                    </PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="Testimonial">
                    <div className="container flex flex-col max-w-[1130px] items-center mx-auto pt-[100px] pb-[90px]">
                        <div className="flexitems-center ml-[20px] justify-between ">
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
                        <TestimonyCard />
                    </div>
                </section>
                <section id="Book" className="bg-[#F4F5F8]">
                    <div className="container flex flex-col max-w-[1130px] items-center mx-auto pt-[80px] pb-[80px] px-5">
                        <div className="flex flex-col justify-between">
                            <div className="justify-center self-center px-1.5 py-3 text-xl font-medium leading-8 text-center text-blue-500 whitespace-nowrap rounded-full border border-blue-500 border-solid stroke-[0.5px]">
                                Contact
                            </div>
                            <div className="self-center mt-5 text-4xl font-semibold text-center text-blue-500 leading-[54px] max-md:max-w-full">
                                Let’s Discuss Your{" "}
                                <span className="text-blue-500">Project</span>
                            </div>
                            <div className="self-center text-base text-center text-zinc-800 w-[509px] max-md:max-w-full">
                                Let’s make something new, different and more
                                meaningful or make thing more visual or
                                conceptual
                            </div>
                            <div className="flex gap-5 mt-20 w-full max-md:flex-wrap max-md:pr-5 max-md:mt-0 max-md:max-w-full">
                                <div className="flex-auto max-md:max-w-full">
                                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                        <div className="flex flex-col w-[40%] max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col grow text-base max-md:mt-10">
                                                <div className="flex gap-5">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/icons/telfon.svg"
                                                        className="shrink-0 w-14 aspect-square"
                                                    />
                                                    <div className="flex flex-col my-auto">
                                                        <div className="tracking-normal leading-[87.5%] text-neutral-400">
                                                            Call me
                                                        </div>
                                                        <div className="mt-5 font-medium tracking-normal leading-[112.5%] text-slate-900">
                                                            +8801613968687
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-5 mt-10 max-md:mt-10">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/icons/pesan.svg"
                                                        className="shrink-0 w-14 aspect-square"
                                                    />
                                                    <div className="flex flex-col my-auto">
                                                        <div className="tracking-normal leading-[87.5%] text-neutral-400">
                                                            Email me
                                                        </div>
                                                        <div className="mt-5 font-medium tracking-normal leading-[112.5%] text-slate-900">
                                                            ahmedtanvir8687@gmail.com
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-5 mt-10 max-md:mt-10">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/icons/lokasi.svg"
                                                        className="shrink-0 w-14 aspect-square"
                                                    />
                                                    <div className="flex flex-col my-auto">
                                                        <div className="tracking-normal leading-[87.5%] text-neutral-400">
                                                            Address
                                                        </div>
                                                        <div className="mt-5 font-medium tracking-normal leading-[112.5%] text-slate-900">
                                                            ahmedtanvir8687@gmail.com
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Form Section */}
                                <div className="flex-auto w-[50%]">
                                    <form className="w-full" onSubmit={submit}>
                                        <div className="flex flex-wrap -mx-3">
                                            <div className="w-full md:w-1/2 px-3 mb-5">
                                                <label
                                                    htmlFor="email"
                                                    className="block text-base font-medium text-zinc-800 mb-2"
                                                >
                                                    Full Name
                                                </label>
                                                <TextInput
                                                    type="text"
                                                    name="name"
                                                    placeholder="What’s your Full Name"
                                                    isFocused={true}
                                                    handleChange={
                                                        ohandleOnChange
                                                    }
                                                    required
                                                    isError={errors.name}
                                                />
                                                <InputError
                                                    message={errors.name}
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div className="w-full md:w-1/2 px-3 mb-5">
                                                <label
                                                    htmlFor="fullName"
                                                    className="block text-base font-medium text-zinc-800 mb-2"
                                                >
                                                    Email
                                                </label>
                                                <TextInput
                                                    type="email"
                                                    name="email"
                                                    placeholder="What’s your email address"
                                                    isFocused={true}
                                                    handleChange={
                                                        ohandleOnChange
                                                    }
                                                    required
                                                    isError={errors.email}
                                                />
                                                <InputError
                                                    message={errors.email}
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div className="w-full md:w-1/2 px-3 mb-5">
                                                <label
                                                    htmlFor="contact"
                                                    className="block text-base font-medium text-zinc-800 mb-2"
                                                >
                                                    Contact
                                                </label>
                                                <TextInput
                                                    type="number"
                                                    name="contact"
                                                    placeholder="Tell me your contact"
                                                    isFocused={true}
                                                    handleChange={
                                                        ohandleOnChange
                                                    }
                                                    required
                                                    isError={errors.contact}
                                                />
                                                <InputError
                                                    message={errors.contact}
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div className="w-full px-3 mb-5">
                                                <label
                                                    htmlFor="message"
                                                    className="block text-base font-medium text-zinc-800 mb-2"
                                                >
                                                    Message
                                                </label>
                                                <TextInput
                                                    type="textarea"
                                                    name="message"
                                                    placeholder="Brief me your a whole project"
                                                    isFocused={true}
                                                    handleChange={
                                                        ohandleOnChange
                                                    }
                                                    required
                                                    rows={5}
                                                    isError={errors.message}
                                                />
                                                <InputError
                                                    message={errors.message}
                                                    className="mt-2"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex justify-end px-3">
                                            <div className="flex flex-col">
                                                <PrimaryButton
                                                    type="submit"
                                                    variant="primary"
                                                    processing={processing}
                                                >
                                                    Submit Message
                                                </PrimaryButton>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </Template>
        </>
    );
}

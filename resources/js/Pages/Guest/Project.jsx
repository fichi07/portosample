import React, { useState, useEffect } from "react";
import { Head, Link } from "@inertiajs/react";
import Template from "@/Layouts/Template/Index";
import PrimaryButton from "@/Components/PrimaryButton";
import Footer from "@/Components/Footer";
import ProjectAll from "@/Components/ProjectAll";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProjectsIndex({ projects }) {
    // Memisahkan proyek ke dalam kategori secara manual
    const category1Projects = projects.filter(
        (project) => project.category === "Mobile Development"
    );
    const category2Projects = projects.filter(
        (project) => project.category === "Website Development"
    );
    const category3Projects = projects.filter(
        (project) => project.category === "UI/UX Design"
    );

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <Template>
            <Head>
                <title>All Projects</title>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
                <link
                    href="https://unpkg.com/aos@2.3.1/dist/aos.css"
                    rel="stylesheet"
                ></link>
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
                id="Projects"
                className="bg-[#F4F5F8] pt-[100px] pb-[100px]"
            >
                <div
                    className="container max-w-[1130px] mx-auto"
                    data-aos="zoom-out-up"
                >
                    <div className="mb-10">
                        <h2
                            className="text-4xl font-bold mb-6"
                            data-aos="fade-right"
                        >
                            Mobile Development
                        </h2>
                        <div className="flex flex-wrap gap-5 mb-[50px] w-full">
                            {category1Projects.map((project) => (
                                <ProjectAll
                                    key={project.id}
                                    name={project.name}
                                    slug={project.slug}
                                    cover={project.cover}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="mb-10">
                        <h2 className="text-4xl font-bold mb-6">
                            Website Development
                        </h2>
                        <div className="flex flex-wrap gap-5 mb-[50px] w-full">
                            {category2Projects.map((project) => (
                                <ProjectAll
                                    key={project.id}
                                    name={project.name}
                                    slug={project.slug}
                                    cover={project.cover}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="mb-10">
                        <h2 className="text-4xl font-bold mb-6">
                            UI/UX Design
                        </h2>
                        <div className="flex flex-wrap gap-5 mb-[50px] w-full">
                            {category3Projects.map((project) => (
                                <div
                                    key={project.id}
                                    className="group w-[350px] h-[250px] flex shrink-0 backdrop-blur relative overflow-hidden mr-[10px] hover:scale-105 transition-transform duration-300 ease-in-out"
                                >
                                    <div className="w-[350px] h-[250px] rounded-[30px] overflow-hidden absolute">
                                        <img
                                            src={`/storage/${project.cover}`}
                                            className="w-full h-full object-cover"
                                            alt={project.name}
                                        />
                                        <div
                                            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px]
                                                rounded-br-[28px] flex flex-col justify-center items-center px-7 py-4 h-[130px]"
                                        >
                                            <div className="font-medium text-[22px] text-white mb-2">
                                                {project.name}
                                            </div>
                                            <Link
                                                href={route(
                                                    "guest.detail",
                                                    project.slug
                                                )}
                                                className="font-bold text-lg text-center w-fit h-fit bg-slate-100 border-blue-500 rounded-full p-[10px_20px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#0147ff]"
                                            >
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Template>
    );
}

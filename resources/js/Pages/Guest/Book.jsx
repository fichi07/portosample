import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import Template from "@/Layouts/Template/Index";
import { Head, Link } from "@inertiajs/react";
import Footer from "@/Components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Book() {
    const { setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        subject: "",
        budget: "",
        brief: "",
    });
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

        post(route("guest.book.store"));
    };
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <Template>
            <Head>
                <title>Contact</title>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
                <link
                    href="https://unpkg.com/aos@2.3.1/dist/aos.css"
                    rel="stylesheet"
                ></link>
            </Head>
            <section
                data-aos="fade-down"
                id="Header"
                style={{
                    backgroundImage: `url('/images/background/Design1.png')`,

                    backgroundPosition: "left",
                    backgroundRepeat: "no-repeat",
                }}
            >
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

            <section id="Book" className="bg-[#F4F5F8]">
                <div className="container flex flex-col max-w-[1130px] items-center mx-auto pt-[100px] pb-[100px] px-5">
                    <div className="flex flex-col justify-between">
                        <div
                            className="flex flex-col justify-between"
                            data-aos="fade-down"
                            data-aos-duration="3000"
                        >
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
                        </div>
                        <div className="flex gap-5 mt-20 w-full max-md:flex-wrap max-md:pr-5 max-md:mt-0 max-md:max-w-full">
                            <div
                                className="flex-auto max-md:max-w-full"
                                data-aos="fade-right"
                                data-aos-duration="3000"
                            >
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
                            <div
                                className="flex-auto w-[50%]"
                                data-aos="fade-left"
                                data-aos-duration="3000"
                            >
                                <form className="w-full" onSubmit={submit}>
                                    <div className="flex flex-wrap -mx-3">
                                        <div className="w-full md:w-1/2 px-3 mb-5">
                                            <label
                                                htmlFor="fullname"
                                                className="block text-base font-medium text-zinc-800 mb-2"
                                            >
                                                Full Name
                                            </label>
                                            <TextInput
                                                type="text"
                                                name="name"
                                                placeholder="What’s your Full Name"
                                                handleChange={ohandleOnChange}
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
                                                htmlFor="email"
                                                className="block text-base font-medium text-zinc-800 mb-2"
                                            >
                                                Email
                                            </label>
                                            <TextInput
                                                type="email"
                                                name="email"
                                                placeholder="What’s your email address"
                                                handleChange={ohandleOnChange}
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
                                                htmlFor="budget"
                                                className="block text-base font-medium text-zinc-800 mb-2"
                                            >
                                                Budget $
                                            </label>
                                            <TextInput
                                                type="number"
                                                name="budget"
                                                placeholder="Tell me your contact"
                                                handleChange={ohandleOnChange}
                                                required
                                                isError={errors.budget}
                                            />
                                            <InputError
                                                message={errors.budget}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3 mb-5">
                                            <label
                                                htmlFor="subject"
                                                className="block text-base font-medium text-zinc-800 mb-2"
                                            >
                                                Subject
                                            </label>
                                            <TextInput
                                                type="text"
                                                name="subject"
                                                placeholder="example: Web Development"
                                                handleChange={ohandleOnChange}
                                                required
                                                isError={errors.subject}
                                            />
                                            <InputError
                                                message={errors.subject}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="w-full px-3 mb-5">
                                            <label
                                                htmlFor="brief"
                                                className="block text-base font-medium text-zinc-800 mb-2"
                                            >
                                                Brief
                                            </label>
                                            <TextInput
                                                type="textarea"
                                                name="brief"
                                                placeholder="Brief me your a whole project"
                                                handleChange={ohandleOnChange}
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
    );
}

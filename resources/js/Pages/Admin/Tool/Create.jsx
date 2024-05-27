import Authenticated from "@/Layouts/Template/Index";
import TopbarAdmin from "@/Layouts/Template/TopbarAdmin";

import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Index({ auth }) {
    const { setData, post, processing, errors } = useForm({
        name: "",
        logo: "",
        tagline: "",
    });
    const ohandleOnChange = (event) => {
        if (event.target.type === "file") {
            const selectedFile = event.target.files[0];
            if (selectedFile && selectedFile.size > 2097152) {
                alert("File size must not exceed 2MB");
                event.target.value = null;
            } else {
                setData(event.target.name, selectedFile);
            }
        } else {
            setData(event.target.name, event.target.value);
        }
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.dashboard.tool.store"));
    };
    return (
        <>
            <Authenticated auth={auth}>
                <Head title="Dashboard Admin"></Head>
                <TopbarAdmin name={auth.user.name} />
                <div className="bg-gray-100 py-12">
                    <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm rounded-2xl p-28">
                            <form
                                action=""
                                className="flex flex-col gap-y-5 item-center"
                                onSubmit={submit}
                            >
                                <h1 className="text-indigo-950 text-3xl font-bold ">
                                    Add New tool
                                </h1>{" "}
                                <label className="flex flex-col gap-y-2 font-semibold">
                                    <span className="text-black font-bold text-lg">
                                        Name Tool
                                    </span>
                                    <TextInput
                                        type="text"
                                        name="name"
                                        placeholder="Write name tools"
                                        isFocused={true}
                                        handleChange={ohandleOnChange}
                                        required
                                        isError={errors.name}
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </label>
                                <label className="flex flex-col gap-[10px] font-semibold">
                                    <span className="text-black font-bold text-lg">
                                        Logo
                                    </span>
                                    <TextInput
                                        type="file"
                                        name="logo"
                                        placeholder="Input Your Cover"
                                        isFocused={true}
                                        handleChange={ohandleOnChange}
                                        required
                                        isError={errors.logo}
                                    />
                                    <InputError
                                        message={errors.logo}
                                        className="mt-2"
                                    />
                                </label>
                                <label className="flex flex-col gap-[10px] font-semibold">
                                    <span className="text-black font-bold text-lg">
                                        Tagline
                                    </span>
                                    <TextInput
                                        type="text"
                                        name="tagline"
                                        placeholder="About your a whole tool"
                                        isFocused={true}
                                        handleChange={ohandleOnChange}
                                        required
                                        isError={errors.tagline}
                                    />
                                    <InputError
                                        message={errors.tagline}
                                        className="mt-2"
                                    />
                                </label>
                                <PrimaryButton
                                    type="submit"
                                    processing={processing}
                                    className="font-bold text-lg text-white bg-portto-purple rounded-[20px] p-5 transition-all duration-300 hover:shadow-[0_10px_20px_0_#4920E5]"
                                >
                                    Upload tool
                                </PrimaryButton>
                            </form>
                        </div>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}

import Authenticated from "@/Layouts/Template/Index";
import TopbarAdmin from "@/Layouts/Template/TopbarAdmin";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";

import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import { Head, Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Index({ auth, project, screenshots }) {
    const { delete: destroy } = useForm();
    const { setData, post, processing, errors } = useForm({
        project_id: "",
        screenshot: "",
    });

    const ohandleOnChange = (event) => {
        const selectedFile = event.target.files[0];

        // Periksa ukuran file yang dipilih
        if (selectedFile && selectedFile.size > 2097152) {
            // Jika ukuran file lebih dari 2MB, tampilkan pesan kesalahan
            alert("File size must not exceed 2MB");
            // Kosongkan input file
            event.target.value = null;
        } else {
            // Jika ukuran file valid, tetapkan data ke state
            setData(
                event.target.name,
                event.target.type == "file" ? selectedFile : event.target.value
            );
        }
    };

    const submit = (e) => {
        e.preventDefault();

        post(
            route("admin.dashboard.projectscreenshot.create.store", project.id)
        );
    };
    const handleDelete = (screenshot) => {
        console.log("Deleting screenshot with ID:", screenshot.id);
        screenshot.deleted_at;
        destroy(route("admin.dashboard.screenshoot.destroy", screenshot.id));
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
                                    Assign Tool to{" "}
                                    {project ? project.name : "Project"}
                                </h1>{" "}
                                <div className="flex flex-row items-center gap-x-5">
                                    <img
                                        src={`/storage/${project.cover}`}
                                        alt=""
                                        className="object-cover w-[160px] h-[100px] rounded-2xl"
                                    />
                                    <div className="flex flex-col gap-y-1 ">
                                        <h3 className="font-bold text-xl">
                                            {project.name}
                                        </h3>
                                        <p className="text-sm text-slate-400">
                                            {project.category}
                                        </p>
                                    </div>
                                </div>
                                <label className="flex flex-col gap-[10px] font-semibold">
                                    <span className="text-black font-bold text-lg">
                                        Cover
                                    </span>
                                    <TextInput
                                        type="file"
                                        name="screenshot"
                                        placeholder="Input Your ScreenShoot"
                                        isFocused={true}
                                        handleChange={ohandleOnChange}
                                        required
                                        isError={errors.screenshot}
                                    />
                                    <InputError
                                        message={errors.screenshot}
                                        className="mt-2"
                                    />
                                    {/*   <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-white rounded-full p-[14px_30px] appearance-none outline-none focus:ring-[3px] focus:ring-portto-green placeholder:font-normal placeholder:text-base placeholder:text-[#878C9C]"
                                placeholder="What’s your email address"
                                required
                            /> */}
                                </label>
                                <PrimaryButton
                                    type="submit"
                                    processing={processing}
                                    className="font-bold text-lg text-white bg-portto-purple rounded-[20px] p-5 transition-all duration-300 hover:shadow-[0_10px_20px_0_#4920E5]"
                                >
                                    Upload Screen Shoot
                                </PrimaryButton>
                            </form>

                            <hr className="my-10" />
                            <span className="text-black font-bold text-lg">
                                Existing Screenshot
                            </span>
                            {screenshots.map((screenshot) => (
                                <div
                                    className="flex flex-col gap-y-5"
                                    key={screenshot.id}
                                >
                                    <div className="item-project flex flex-row items-center mb-5 justify-between">
                                        <div className="flex flex-row items-center gap-x-5">
                                            <img
                                                src={`/storage/${screenshot.screenshot}`}
                                                alt=""
                                                className="object-cover w-[160px] h-[100px] rounded-2xl"
                                            />
                                        </div>

                                        <div className="flex flex-row items-center w-auto gap-x-2">
                                            <span>ID: {screenshot.id}</span>
                                            <div
                                                /*  onClick={() => {
                                                    screenshot.deleted_at
                                                        ? put(
                                                              route(
                                                                  "admin.dashboard.projectscreenshot.restore",
                                                                  screenshot.id
                                                              )
                                                          )
                                                        : destroy(
                                                              route(
                                                                  "admin.dashboard.projectscreenshot.destroy",
                                                                  screenshot.id
                                                              )
                                                          );
                                                }} */
                                                onClick={() =>
                                                    handleDelete(screenshot)
                                                }
                                            >
                                                <PrimaryButton
                                                    type="button"
                                                    variant="delete"
                                                    className="py-3 px-5 rounded-full"
                                                >
                                                    Delete
                                                </PrimaryButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}

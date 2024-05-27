import Authenticated from "@/Layouts/Template/Index";
import TopbarAdmin from "@/Layouts/Template/TopbarAdmin";

import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/inertia-react";
import React, { useState, useEffect } from "react";
import { Head, Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Index({ auth, tools, project, assignedTools }) {
    const { delete: destroy, put } = useForm();
    const { setData, post, processing, errors } = useForm({
        project_id: "",
        tool_id: "",
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

        post(
            route("admin.dashboard.projecttool.assign.tool.store", project.id)
        );
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
                                        Tools
                                    </span>
                                    <select
                                        name="tool_id"
                                        id="toold_id"
                                        onChange={ohandleOnChange}
                                        className="font-semibold text-gray-500 rounded-2xl py-[13px] px-7 w-full appearance-none outline-none placeholder:font-normal placeholder:text-base "
                                        required
                                        isError={errors.tool}
                                    >
                                        <option>Pilih Opsi</option>
                                        {tools.map((tool) => (
                                            <option
                                                key={tool.id}
                                                value={tool.id}
                                            >
                                                {tool.name}
                                            </option>
                                        ))}
                                    </select>

                                    <InputError
                                        message={errors.tool}
                                        className="mt-2"
                                    />
                                </label>
                                <PrimaryButton
                                    type="submit"
                                    processing={processing}
                                    className="font-bold text-lg text-white bg-portto-purple rounded-[20px] p-5 transition-all duration-300 hover:shadow-[0_10px_20px_0_#4920E5]"
                                >
                                    Upload Tools
                                </PrimaryButton>
                            </form>

                            <hr className="my-10" />
                            <span className="text-black font-bold text-lg">
                                Existing Tools
                            </span>
                            {assignedTools.map((projecttool) => (
                                <div
                                    className="flex flex-col gap-y-5"
                                    key={projecttool.pivot.id}
                                >
                                    <div className="item-project flex flex-row items-center mb-5 justify-between">
                                        <div className="flex flex-row items-center gap-x-5">
                                            <img
                                                src={`/storage/${projecttool.logo}`}
                                                alt=""
                                                className="object-cover w-[160px] h-[100px] rounded-2xl"
                                            />
                                            <div className="flex flex-col gap-y-1 ">
                                                <h3 className="font-bold text-xl">
                                                    {projecttool.name}
                                                </h3>
                                                <p className="text-sm text-slate-400">
                                                    {projecttool.tagline}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-row items-center w-auto gap-x-2">
                                            <div
                                                onClick={() => {
                                                    projecttool.deleted_at;
                                                    /*   ? put(
                                                              route(
                                                                  "admin.dashboard.projecttool.restore",
                                                                  projecttool
                                                                      .pivot.id
                                                              )
                                                          )
                                                        : */ destroy(
                                                        route(
                                                            "admin.dashboard.projecttool.destroy",
                                                            projecttool.pivot.id
                                                        )
                                                    );
                                                }}
                                            >
                                                <PrimaryButton
                                                    type="button"
                                                    variant="delete"
                                                    className="py-3 px-5 rounded-full"
                                                >
                                                    {projecttool.deleted_at
                                                        ? "Restore"
                                                        : "Delete"}
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

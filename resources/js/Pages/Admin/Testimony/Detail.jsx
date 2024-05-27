import Authenticated from "@/Layouts/Template/Index";
import TopbarAdmin from "@/Layouts/Template/TopbarAdmin";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/inertia-react";
import { Head } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Index({ auth, testimonial }) {
    return (
        <>
            <Authenticated auth={auth}>
                <Head title="Dashboard Admin"></Head>
                <TopbarAdmin name={auth.user.name} />
                <div className="bg-gray-100 py-12">
                    <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm rounded-2xl p-28">
                            <h1 className="text-indigo-950 text-3xl font-bold ">
                                Testimony from{" "}
                                {testimonial ? testimonial.name : "Testimony"}
                            </h1>{" "}
                            <div className="flex flex-row items-center gap-x-5">
                                <div className="flex flex-col gap-y-2">
                                    <h3 className="text-indigo-950 font-regular text-xl">
                                        {testimonial.role}
                                    </h3>
                                </div>
                            </div>
                            <hr className="my-5" />
                            <div className="flex flex-col gap-y-1">
                                <p className="text-sm text-slate-400">
                                    {testimonial.rate}
                                </p>
                            </div>
                            <hr className="my-5" />
                            <h2 className="text-black font-bold text-lg">
                                Testimony
                            </h2>
                            <p className="text-sm">{testimonial.testimony}</p>
                        </div>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}

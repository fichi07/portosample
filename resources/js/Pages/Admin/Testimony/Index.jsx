import Authenticated from "@/Layouts/Template/Index";
import TopbarAdmin from "@/Layouts/Template/TopbarAdmin";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import Modal from "@/Components/Modal"; // Make sure this path is correct

export default function Index({ auth, testimonial }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTestimonial(null);
    };
    const openModal = (testi) => {
        setSelectedTestimonial(testi);
        setIsModalOpen(true);
    };

    return (
        <>
            <Authenticated>
                <Head title="Dashboard Admin"></Head>
                <TopbarAdmin name={auth.user.name} />
                <div className="bg-gray-100 py-12">
                    <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-10 flex flex-col">
                            <hr className="my-10" />
                            {testimonial.map((testi) => (
                                <div
                                    className="flex flex-col gap-y-5"
                                    key={testi.id}
                                >
                                    <div className="item-project flex flex-row items-center mb-5 justify-between">
                                        <div className="flex flex-row items-center gap-x-5">
                                            <div className="flex flex-col gap-y-2 ">
                                                <h3 className="font-bold text-xl">
                                                    {testi.name}
                                                </h3>
                                                <p className="text-sm text-slate-400">
                                                    {testi.role}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center gap-x-5">
                                            <div className="flex flex-col gap-y-2 ">
                                                <h3 className="font-bold items-center text-xl">
                                                    {testi.rate} Starts
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="flex flex-row items-center w-auto gap-x-2">
                                            <PrimaryButton
                                                onClick={() => openModal(testi)}
                                                type="button"
                                                variant="details"
                                                className="py-3 px-5 rounded-full"
                                            >
                                                View Details
                                            </PrimaryButton>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Authenticated>

            {selectedTestimonial && (
                <Modal show={isModalOpen} onClose={closeModal} maxWidth="2xl">
                    <div className="p-6">
                        <h2 className="text-lg font-medium text-gray-900">
                            {selectedTestimonial.name}
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Role: {selectedTestimonial.role}
                        </p>
                        <p className="mt-2 text-sm text-gray-600">
                            Rating: {selectedTestimonial.rate} Stars
                        </p>
                        <p className="mt-4 text-sm text-gray-600">
                            Testimonial: {selectedTestimonial.testimony}
                        </p>
                    </div>
                </Modal>
            )}
        </>
    );
}

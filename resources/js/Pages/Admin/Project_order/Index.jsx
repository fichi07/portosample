import Authenticated from "@/Layouts/Template/Index";
import TopbarAdmin from "@/Layouts/Template/TopbarAdmin";
import PrimaryButton from "@/Components/PrimaryButton";
import FlashMessage from "@/Components/FlashMessage";
import Modal from "@/Components/Modal";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";

export default function Index({ auth, flashMessage, projectOrder }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProjectOrder, setSelectedProjectOrder] = useState(null);

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProjectOrder(null);
    };
    const openModal = (order) => {
        setSelectedProjectOrder(order);
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
                            {projectOrder.map((order) => (
                                <div
                                    className="flex flex-col gap-y-5"
                                    key={order.id}
                                >
                                    <div className="item-project flex flex-row items-center mb-5 justify-between">
                                        <div className="flex flex-row items-center gap-x-5">
                                            <div className="flex flex-col gap-y-2 ">
                                                <h3 className="font-bold text-xl">
                                                    {order.name}
                                                </h3>
                                                <p className="text-sm text-slate-400">
                                                    {order.email}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center gap-x-5">
                                            <div className="flex flex-col gap-y-2 ">
                                                <h3 className="font-bold text-xl">
                                                    ${order.budget}
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="flex flex-row items-center w-auto gap-x-2">
                                            <PrimaryButton
                                                type="button"
                                                onClick={() => openModal(order)}
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
            {selectedProjectOrder && (
                <Modal show={isModalOpen} onClose={closeModal} maxWidth="2xl">
                    <div className="p-6">
                        <h1 className="text-indigo-950 text-3xl font-bold ">
                            {selectedProjectOrder.name}
                        </h1>{" "}
                        <div className="flex flex-row items-center gap-x-5">
                            <div className="flex flex-col gap-y-2">
                                <h3 className="text-indigo-950 font-regular text-xl">
                                    {selectedProjectOrder.email}
                                </h3>
                            </div>
                        </div>
                        <hr className="my-2" />
                        <div className="flex flex-col gap-y-1">
                            <p className="text-sm text-slate-400">
                                {selectedProjectOrder.category}
                            </p>
                            <p className="text-sm text-slate-400">
                                Budget: ${selectedProjectOrder.budget}
                            </p>
                        </div>
                        <hr className="my-5" />
                        <h2 className="text-indigo-950 font-bold text-lg">
                            Brief
                        </h2>
                        <p className="text-indigo-950">
                            {selectedProjectOrder.brief}
                        </p>
                    </div>
                </Modal>
            )}
        </>
    );
}

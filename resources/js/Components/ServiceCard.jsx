import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ServiceCard() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className="flex flex-col max-w-[1130px] items-center mx-auto ">
            {" "}
            <div className="self-start flex mt-20 w-full" data-aos="fade-left">
                <div className="flex gap-8 flex-row w-full">
                    <div className="flex bg-white flex-col px-6 py-6 text-center rounded-xl border-2 transition-all duration-300 hover:shadow-[0_10px_20px_0_#0147ff] w-[450px] h-[250px] grow items-start hover:scale-105 ">
                        <img
                            loading="lazy"
                            src="../images/icons/physics.png"
                            className="w-[62px] h-[55px] self-center"
                        />
                        <div className="self-stretch mt-6 leading-5">
                            <p className="font-bold text-lg">
                                Front End Development
                            </p>
                        </div>
                        <div className="self-stretch mt-6 text-base leading-5 text-slate-900">
                            As a Front-end developer, I would love to develope
                            any front-end application using Nextjs , React js
                            and its libraries.
                        </div>
                    </div>
                    <div className="flex flex-col px-6 py-6 text-center rounded-xl border-2 transition-all duration-300 hover:shadow-[0_10px_20px_0_#0147ff] w-[450px] h-[250px] grow items-start hover:scale-105 ">
                        <img
                            loading="lazy"
                            src="../images/icons/physics.png"
                            className="w-[62px] h-[55px] self-center"
                        />
                        <div className="self-stretch mt-6 leading-5">
                            <p className="font-bold text-lg">
                                Front End Development
                            </p>
                        </div>
                        <div className="self-stretch mt-6 text-base leading-5 text-slate-900">
                            As a Front-end developer, I would love to develope
                            any front-end application using Nextjs , React js
                            and its libraries.
                        </div>
                    </div>
                    <div className="flex bg-white flex-col px-6 py-6 text-center rounded-xl border-2 transition-all duration-300 hover:shadow-[0_10px_20px_0_#0147ff] w-[450px] h-[250px] grow items-start hover:scale-105 ">
                        <img
                            loading="lazy"
                            src="../images/icons/physics.png"
                            className="w-[62px] h-[55px] self-center"
                        />
                        <div className="self-stretch mt-6 leading-5">
                            <p className="font-bold text-lg">
                                Front End Development
                            </p>
                        </div>
                        <div className="self-stretch mt-6 text-base leading-5 text-slate-900">
                            As a Front-end developer, I would love to develope
                            any front-end application using Nextjs , React js
                            and its libraries.
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-start flex mt-20 w-full" data-aos="fade-right">
                <div className="flex gap-8 flex-row w-full">
                    <div className="flex flex-col px-6 py-6 text-center rounded-xl border-2 transition-all duration-300 hover:shadow-[0_10px_20px_0_#0147ff] w-[450px] h-[250px] grow items-start hover:scale-105 ">
                        <img
                            loading="lazy"
                            src="../images/icons/physics.png"
                            className="w-[62px] h-[55px] self-center"
                        />
                        <div className="self-stretch mt-6 leading-5">
                            <p className="font-bold text-lg">
                                Front End Development
                            </p>
                        </div>
                        <div className="self-stretch mt-6 text-base leading-5 text-slate-900">
                            As a Front-end developer, I would love to develope
                            any front-end application using Nextjs , React js
                            and its libraries.
                        </div>
                    </div>
                    <div className="flex bg-white flex-col px-6 py-6 text-center rounded-xl border-2 transition-all duration-300 hover:shadow-[0_10px_20px_0_#0147ff] w-[450px] h-[250px] grow items-start hover:scale-105 ">
                        <img
                            loading="lazy"
                            src="../images/icons/physics.png"
                            className="w-[62px] h-[55px] self-center"
                        />
                        <div className="self-stretch mt-6 leading-5">
                            <p className="font-bold text-lg">
                                Front End Development
                            </p>
                        </div>
                        <div className="self-stretch mt-6 text-base leading-5 text-slate-900">
                            As a Front-end developer, I would love to develope
                            any front-end application using Nextjs , React js
                            and its libraries.
                        </div>
                    </div>
                    <div className="flex flex-col px-6 py-6 text-center rounded-xl border-2 transition-all duration-300 hover:shadow-[0_10px_20px_0_#0147ff] w-[450px] h-[250px] grow items-start hover:scale-105 ">
                        <img
                            loading="lazy"
                            src="../images/icons/physics.png"
                            className="w-[62px] h-[55px] self-center"
                        />
                        <div className="self-stretch mt-6 leading-5">
                            <p className="font-bold text-lg">
                                Front End Development
                            </p>
                        </div>
                        <div className="self-stretch mt-6 text-base leading-5 text-slate-900">
                            As a Front-end developer, I would love to develope
                            any front-end application using Nextjs , React js
                            and its libraries.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { Link } from "@inertiajs/react";
import PropTypes from "prop-types";

ProjectCard.propTypes = {
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    category: PropTypes.string,
};
export default function ProjectCard({ name, cover, slug }) {
    return (
        <div
            className="group  w-[550px] h-[350px] flex shrink-0 backdrop-blur relative overflow-hidden group mr-[30px]"
            data-aos="zoom-out"
        >
            <div className="w-[550px] h-[350px] rounded-[30px] overflow-hidden absolute">
                <img
                    src={`/storage/${cover}`}
                    className="w-full h-full object-cover"
                    alt=""
                />
                <div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px]
                                            rounded-br-[28px] flex justify-between items-center px-7 h-[130px]"
                >
                    <div className="font-medium text-[22px] text-white">
                        {name}
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-full items-center justify-center gap-[50px] bg-portto-black rounded-[30px] relative opacity-0 hover:opacity-100 transition-all duration-300">
                <Link
                    href={route("guest.detail", slug)}
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
    );
}

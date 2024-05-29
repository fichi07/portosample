import { Link } from "@inertiajs/react";
import PropTypes from "prop-types";

ProjectAll.propTypes = {
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
};
export default function ProjectAll({ name, cover, slug }) {
    return (
        <div className="group w-[350px] h-[250px] flex shrink-0 backdrop-blur relative overflow-hidden mr-[10px] hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="w-[350px] h-[250px] rounded-[30px] overflow-hidden absolute">
                <img
                    src={`/storage/${cover}`}
                    className="w-full h-full object-cover"
                    alt={name}
                />
                <div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px]
                                                rounded-br-[28px] flex flex-col justify-center items-center px-7 py-4 h-[130px]"
                >
                    <div className="font-medium text-[22px] text-white mb-2">
                        {name}
                    </div>
                    <Link
                        href={route("guest.detail", slug)}
                        className="font-bold text-lg text-center w-fit h-fit bg-slate-100 border-blue-500 rounded-full p-[10px_20px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#0147ff]"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
}

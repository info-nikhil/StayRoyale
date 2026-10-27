import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import { experiences } from "../data/experiences";

const Experience = () => {
    const { rooms, navigate, isOwner, setShowHotelReg, user } = useAppContext();

    const countFor = (exp) => rooms.filter(exp.match).length;

    return (
    <div className="pt-28 md:pt-36 px-4 md:px-16 lg:px-24 xl:px-32 pb-24">
        <Title
        align="left"
        title="Find a stay that fits your mood"
        subTitle="Not sure where to go? Pick the kind of trip you want and we will show you the rooms that match."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {experiences.map((exp) => {
            const count = countFor(exp);
            return (
            <Link
                key={exp.slug}
                to={`/rooms?experience=${exp.slug}`}
                onClick={() => scrollTo(0, 0)}
                className="group relative h-80 rounded-xl overflow-hidden text-white flex flex-col justify-end p-6 bg-cover bg-center"
                style={{ backgroundImage: `url(${exp.image})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent group-hover:from-black/85 transition-all" />

                <p className="absolute top-4 left-4 px-3 py-1 text-xs bg-white text-gray-800 font-medium rounded-full">
                {count > 0
                    ? `${count} ${count === 1 ? "stay" : "stays"}`
                    : "Coming soon"}
                </p>

                <div className="relative">
                <p className="text-2xl font-playfair">{exp.title}</p>
                <p className="text-sm text-white/85 mt-1">{exp.tagline}</p>
                <span className="flex items-center gap-2 font-medium mt-4">
                    Explore
                    <img
                    src={assets.arrowIcon}
                    alt=""
                    className="invert group-hover:translate-x-1 transition-all"
                    />
                </span>
                </div>
            </Link>
            );
        })}
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6 bg-gray-50 border border-gray-200 rounded-xl p-8">
        <div>
            <p className="text-2xl font-playfair text-gray-800">
            Own a hotel or property?
            </p>
            <p className="text-gray-500 mt-1">
            List your rooms on StayRoyale and reach guests looking for exactly
            what you offer.
            </p>
        </div>
        {user && (
            <button
            onClick={() =>
                isOwner ? navigate("/owner") : setShowHotelReg(true)
            }
            className="bg-black text-white px-8 py-2.5 rounded-full cursor-pointer"
            >
            {isOwner ? "Open Dashboard" : "List Your Hotel"}
            </button>
        )}
        </div>
    </div>
    );
};

export default Experience;

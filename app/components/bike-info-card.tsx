import React from "react";
import ImageMagnifier from "./image-magnifier";
import Image from "next/image";
import { IBike } from "../types/bike";
import BikeNotSelectedMessage from "./bike-not-selected-message";

interface BikeInfoCardProps {
    bike: IBike | null;
}

const BikeInfoCard: React.FC<BikeInfoCardProps> = ({ bike }) => {
    if (!bike) {
        return <BikeNotSelectedMessage />;
    }

    return (
        <div className="pl-4 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
                <ImageMagnifier
                    width={"100%"}
                    src={"/images/bikes/bike-1.webp"}
                />
                <div className="grid grid-cols-5 p-1 rounded-md bg-[#F4F4F5] dark:bg-[#2B3139]">
                    <Image
                        width={900}
                        height={600}
                        src={"/images/bikes/bike-1.webp"}
                        alt=""
                        className="rounded-md"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <h1 className="font-bold text-zinc-700 dark:text-zinc-300">
                    Slash 9.9 XX1 Flight Attendant Gen 5
                </h1>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Slash 9.9 is the fastest enduro mountain bike in the lineup,
                    so it&apos;s no surprise it&apos;s the go-to ride for the
                    pros of Trek Factory Racing Enduro. A full carbon frame,
                    all-new hard-charging suspension with RockShox Flight
                    Attendant, fast-rolling carbon wheels, and a SRAM wireless
                    electronic drivetrain and dropper make this top-of-the-line
                    ride the undisputed king of enduro.
                </p>
            </div>
        </div>
    );
};

export default BikeInfoCard;

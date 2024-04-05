"use client";

import { listOfBikeCategories } from "@/app/constants/bike-category";
import { dataBikes } from "@/app/constants/bikes";
import { BikeCategory, IBike } from "@/app/types/bike";
import { cn } from "@/lib/utils";
import { IconArrowNarrowRight, IconPlus } from "@tabler/icons-react";
import Link from "next/link";

import React from "react";

export default function Page({ params }: { params: { slug: string } }) {
    const [selectedAccordion, setSelectedAccordion] = React.useState<
        string | null
    >(null);

    const bikes = dataBikes.filter(
        (bike) => bike.id_bike_category === params.slug
    );

    const handleAccordionClick = (
        e: React.MouseEvent<HTMLLIElement, MouseEvent>,
        bike: IBike
    ) => {
        if (bike.id !== selectedAccordion) {
            setSelectedAccordion(bike.id);
        } else {
            setSelectedAccordion(null);
        }

        e.stopPropagation();
    };

    return (
        <div className="">
            <h1 className="text-[#1E2329] dark:text-[#D0D2D5] text-3xl font-bold text-center flex flex-col gap-2">
                <span>Category</span>
                {params.slug && (
                    <span className="text-[#F0B90B] text-sm">
                        {
                            listOfBikeCategories[params.slug! as BikeCategory]
                                ?.name
                        }
                    </span>
                )}
            </h1>
            <div className="mt-6">
                <ul className="flex flex-col gap-4">
                    {bikes.map((bike, index) => (
                        <li
                            key={bike.id}
                            className="group relative cursor-pointer"
                            onClick={(e) => handleAccordionClick(e, bike)}
                        >
                            <div
                                className={cn(
                                    "transition-all absolute top-0 bottom-0 -right-4 -left-5  bg-transparent group-hover:bg-[#FAFAFA] dark:group-hover:bg-[#1E2329] rounded-lg z-10",
                                    bike.id === selectedAccordion &&
                                        "bg-[#FAFAFA] dark:bg-[#1E2329]"
                                )}
                            ></div>
                            <div className="z-20 text-lg flex justify-between  py-6 rounded-xl relative">
                                <div className="flex items-start gap-4">
                                    <span className="border border-zinc-200 dark:border-[#2B3139] px-3 py-1 rounded-md text-xl font-semibold">
                                        {index + 1}
                                    </span>
                                    <div className="flex flex-col h-full">
                                        <h2 className="text-[#1E2329] dark:text-[#EAECEF] font-semibold text-lg sm:text-xl mt-1">
                                            {bike.name}
                                        </h2>
                                        {bike.id === selectedAccordion && (
                                            <div className="mt-6 text-sm font-semibold text-zinc-500">
                                                {bike.description}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className=" ">
                                    <div className="flex gap-1">
                                        <Link
                                            href={`/bike/${bike.id}`}
                                            className="flex"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <span className="transition-all hover:bg-[#F0B90B] hover:text-zinc-900 rounded-full p-2">
                                                <IconArrowNarrowRight
                                                    size={18}
                                                />
                                            </span>
                                        </Link>
                                        <span className="group-hover:bg-[#F0B90B] group-hover:text-zinc-900 rounded-full p-2">
                                            <IconPlus size={18} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

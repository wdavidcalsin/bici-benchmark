"use client";

import BikeInfoCard from "@/app/components/bike-info-card";
import { dataBikes } from "@/app/constants/bikes";
import React from "react";

const findBike = (id: string) => {
    return dataBikes.find((bike) => bike.id === id);
};

export default function Page({ params }: { params: { slug: string } }) {
    const bike = findBike(params.slug);
    return (
        <div className="">
            {bike && <BikeInfoCard key={bike?.id} bike={bike} variant="page" />}
        </div>
    );
}

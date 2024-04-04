"use client";

import React from "react";

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <div className="">
            <h1>{params.slug}</h1>
        </div>
    );
}

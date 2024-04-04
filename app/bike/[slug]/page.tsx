"use client";

import React from "react";

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <div className="min-h-screen">
            <h1>{params.slug}</h1>
        </div>
    );
}

import Image from "next/image";
import React from "react";

interface EmptyImageProps {
    message?: string;
}

const EmptyImage: React.FC<EmptyImageProps> = ({
    message = "No main image cover",
}) => {
    return (
        <div>
            <div className="max-w-96 flex justify-center flex-col gap-4 items-center h-96 ">
                <Image
                    width={50}
                    height={200}
                    src={"/images/bike-cover.svg"}
                    alt=""
                />
                <span className="text-[#848E9C] text-sm font-bold">
                    {message}
                </span>
            </div>
        </div>
    );
};

export default EmptyImage;

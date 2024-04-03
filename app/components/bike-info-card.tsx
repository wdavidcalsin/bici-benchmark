import React from "react";
import ImageMagnifier from "./image-magnifier";
import Image from "next/image";
import { IBike } from "../types/bike";
import BikeNotSelectedMessage from "./bike-not-selected-message";
import EmptyImage from "./empty-image";

interface BikeInfoCardProps {
    bike: IBike | null;
    handleSetMainImage: (image: string) => void;
}

const BikeInfoCard: React.FC<BikeInfoCardProps> = ({
    bike,
    handleSetMainImage,
}) => {
    if (!bike) {
        return <BikeNotSelectedMessage />;
    }

    return (
        <div className="pl-4 flex flex-col gap-4" key={bike.id}>
            <div className="flex flex-col gap-1">
                {bike.main_image ? (
                    <ImageMagnifier width={"100%"} src={bike.main_image} />
                ) : (
                    <EmptyImage message="The bicycle image will be added soon." />
                )}
                {bike.other_images && bike.other_images.length > 0 && (
                    <div className="grid grid-cols-5 p-1 gap-1 rounded-md bg-[#F4F4F5] dark:bg-[#2B3139]">
                        {bike.other_images.map((image, index) => (
                            <Image
                                key={index}
                                width={900}
                                height={400}
                                src={image}
                                alt=""
                                className="transition-all duration-200 rounded-md cursor-pointer hover:scale-[1.02] "
                                onClick={() => handleSetMainImage(image)}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="flex flex-col gap-2">
                <h1 className="font-bold text-zinc-700 dark:text-zinc-300">
                    {bike.name}
                </h1>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {bike.description}
                </p>
            </div>
        </div>
    );
};

export default BikeInfoCard;

import * as React from "react";
import ImageMagnifier from "./image-magnifier";
import Image from "next/image";
import { IBike } from "../types/bike";
import BikeNotSelectedMessage from "./bike-not-selected-message";
import EmptyImage from "./empty-image";
import { cn } from "@/lib/utils";
import { useResponsive } from "../hooks/useResponsive";

type Variant = "default" | "page";

interface BikeInfoCardProps {
    variant?: Variant;
    bike: IBike | null;
    handleSetMainImage?: (image: string) => void;
}

const BikeInfoCard: React.FC<BikeInfoCardProps> = ({
    variant = "default",
    bike,
    handleSetMainImage,
}) => {
    const { isMobile } = useResponsive();
    const [selectedImage, setSelectedImage] = React.useState<string | null>(
        bike?.main_image || null
    );

    if (!bike) {
        return <BikeNotSelectedMessage />;
    }

    return (
        <div
            className={cn(
                " flex flex-col gap-4",
                variant === "default" ? "pl-4" : "p-0"
            )}
            key={bike.id}
        >
            <div
                className={cn(
                    "flex gap-1",
                    variant === "default" ? "flex-col" : "flex-col sm:flex-row"
                )}
            >
                {bike.main_image ? (
                    <ImageMagnifier
                        width={"100%"}
                        src={
                            variant === "default"
                                ? bike.main_image
                                : selectedImage!
                        }
                    />
                ) : (
                    <EmptyImage message="The bicycle image will be added soon." />
                )}
                {bike.other_images && bike.other_images.length > 0 && (
                    <div
                        className={cn(
                            "flex p-1 gap-1 rounded-md bg-[#F4F4F5] dark:bg-[#2B3139]",
                            variant === "default"
                                ? "flex-row"
                                : "flex-row sm:flex-col"
                        )}
                    >
                        {bike.other_images.map((image, index) => (
                            <Image
                                key={index}
                                width={
                                    variant === "default"
                                        ? 100
                                        : isMobile
                                        ? 80
                                        : 250
                                }
                                height={400}
                                src={image}
                                alt=""
                                className="transition-all duration-200 rounded-md cursor-pointer hover:scale-[1.02] "
                                onClick={() => {
                                    if (variant === "default") {
                                        handleSetMainImage &&
                                            handleSetMainImage(image);
                                    } else {
                                        setSelectedImage(image);
                                    }
                                }}
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

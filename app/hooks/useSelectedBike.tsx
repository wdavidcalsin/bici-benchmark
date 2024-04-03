import * as React from "react";
import { IBike } from "../types/bike";

interface IUseSelectedBike {
    bike: IBike | null;
    setBike: React.Dispatch<React.SetStateAction<IBike | null>>;
    handleMouseOver: (rowBike: IBike) => void;
    handleSetMainImage: (image: string) => void;
}

export const useSelectedBike = (): IUseSelectedBike => {
    const [bike, setBike] = React.useState<IBike | null>(null);

    const handleMouseOver = (rowBike: IBike) => {
        setBike(rowBike);
    };

    const handleSetMainImage = (image: string) => {
        setBike((prevBike) => {
            if (prevBike) {
                return {
                    ...prevBike,
                    main_image: image,
                };
            }
            return null;
        });
    };

    return { bike, setBike, handleMouseOver, handleSetMainImage };
};

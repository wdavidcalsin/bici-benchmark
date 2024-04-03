import { BikeCategory, IListOfBikeCategories } from "../types/bike";

const basePathname = "/images/category";

export const listOfBikeCategories: Partial<
    Record<BikeCategory, IListOfBikeCategories>
> = {
    "the-mountain-bike": {
        id: "the-mountain-bike",
        name: "The Mountain Bike",
        description:
            "A bike designed for off-road cycling, typically featuring a sturdy frame, wide tires, and suspension.",
        image_icon: `${basePathname}/the-mountain-bike.png`,
        href: "/category/mountain-bike",
    },
    "the-road-bike": {
        id: "the-road-bike",
        name: "The Road Bike",
        description:
            "A lightweight bicycle designed for traveling at high speeds on paved roads.",
        image_icon: `${basePathname}/the-road-bike.png`,
        href: "/category/road-bike",
    },
    "urban-bicycling": {
        id: "urban-bicycling",
        name: "Urban Bicycling",
        description:
            "Bicycling in urban areas, often for transportation or leisure purposes.",
        href: "/category/urban-bicycling",
    },
    "the-gravel-bike": {
        id: "the-gravel-bike",
        name: "The Gravel Bike",
        description:
            "A versatile bike designed for riding on a variety of surfaces, including gravel roads and trails.",
        href: "/category/gravel-bike",
    },
};

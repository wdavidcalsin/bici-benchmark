import { IListOfBikeCategories } from "../types/bike";

const basePathname = "/images/category";

export const listOfBikeCategories: IListOfBikeCategories[] = [
    {
        id: "the-mountain-bike",
        name: "The Mountain Bike",
        description:
            "A bike designed for off-road cycling, typically featuring a sturdy frame, wide tires, and suspension.",
        image_icon: `${basePathname}/the-mountain-bike.png`,
        href: "/category/mountain-bike",
    },
    {
        id: "the-road-bike",
        name: "The Road Bike",
        description:
            "A lightweight bicycle designed for traveling at high speeds on paved roads.",
        image_icon: `${basePathname}/the-road-bike.png`,
        href: "/category/road-bike",
    },
    {
        id: "urban-bicycling",
        name: "Urban Bicycling",
        description:
            "Bicycling in urban areas, often for transportation or leisure purposes.",
        href: "/category/urban-bicycling",
    },
];

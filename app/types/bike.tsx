export type LevelCategory = "beginner" | "intermediate" | "advanced";

export interface ILevelCategory {
    id: LevelCategory;
    name: string;
}

export type IBike = {
    id: string;
    name: string;
    description?: string;
    id_level_category: LevelCategory;
    id_bike_category?: BikeCategory;
    main_image?: string;
    other_images?: string[];
};

export type BikeCategory =
    | "the-mountain-bike"
    | "the-road-bike"
    | "urban-bicycling";

export interface IListOfBikeCategories {
    id: BikeCategory;
    name: string;
    description?: string;
    image_icon?: string;
    href?: string;
}

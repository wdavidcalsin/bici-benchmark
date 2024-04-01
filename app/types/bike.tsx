export type LevelCategory = "beginner" | "intermediate" | "advanced";

export interface ILevelCategory {
    id: LevelCategory;
    name: string;
}

export type Brands =
    | "trek"
    | "aventon"
    | "canyon"
    | "santa-cruz"
    | "cervelo"
    | "giant"
    | "liv"
    | "specialized";

export type IBike = {
    id: string;
    name: string;
    description?: string;
    id_level_category: LevelCategory;
    id_bike_category?: BikeCategory;
    main_image?: string;
    other_images?: string[];
    brand?: Brands;
};

export type BikeCategory =
    | "the-mountain-bike"
    | "the-road-bike"
    | "urban-bicycling"
    | "the-gravel-bike";

export interface IListOfBikeCategories {
    id: BikeCategory;
    name: string;
    description?: string;
    image_icon?: string;
    href?: string;
}

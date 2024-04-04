import { listOfBikeCategories } from "@/app/constants/bike-category";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ListOfBikeCategoryProps {}

const ListOfBikeCategory: React.FC<ListOfBikeCategoryProps> = () => {
    return (
        <div className="flex gap-2 mb-6 flex-wrap">
            {Object.entries(listOfBikeCategories).map(([key, category]) => (
                <Button
                    className={
                        " bg-[#F5F5F5] dark:bg-[#2B3139] rounded-full font-normal text-xs dark:border-0 py-0 my-0 max-h-8"
                    }
                    size={"sm"}
                    variant={"outline"}
                    key={category.id}
                    asChild
                >
                    <Link href={category.href || ""}>
                        {category.image_icon && (
                            <Image
                                className="mr-2 h-4 w-4"
                                width={20}
                                height={20}
                                src={category.image_icon}
                                alt=""
                            />
                        )}
                        {category.name}
                    </Link>
                </Button>
            ))}
        </div>
    );
};

export default ListOfBikeCategory;

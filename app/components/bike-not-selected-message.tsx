import Image from "next/image";
import React from "react";

interface BikeNotSelectedMessageProps {}

const BikeNotSelectedMessage: React.FC<BikeNotSelectedMessageProps> = () => {
    return (
        <div className="pl-4">
            <div className="max-w-96 border border-[#DFE1E4] dark:border-[#2B3139] rounded-md p-8 flex flex-col gap-4 opacity-80">
                <Image
                    className="mt-4"
                    width={80}
                    height={80}
                    src={"/images/select-row-bici-bechmark.svg"}
                    alt=""
                />
                <div className="flex flex-col gap-2">
                    <h1 className="text-[#202630] dark:text-zinc-200 text-xl font-bold">
                        No bike has been selected
                    </h1>
                    <p className="text-sm text-[#202630] dark:text-zinc-500">
                        Please select a bike from the list to view more details
                        and features. Our bikes offer a variety of options for
                        different needs and riding styles. Explore and find the
                        perfect bike for you!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BikeNotSelectedMessage;

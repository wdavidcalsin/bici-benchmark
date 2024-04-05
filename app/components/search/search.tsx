import { listOfBikeCategories } from "@/app/constants/bike-category";
import { dataBikes } from "@/app/constants/bikes";
import { BikeCategory, IBike } from "@/app/types/bike";
import { cn } from "@/lib/utils";
import { IconBackspace, IconSearch } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Search: React.FC = () => {
    const [search, setSearch] = React.useState<string>("");
    const [searchResults, setSearchResults] = React.useState<IBike[]>([]);
    const [isShowResults, setIsShowResult] = React.useState<boolean>(false);
    const [isOnBlur, setIsOnBlur] = React.useState<boolean>(false);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);

        setSearchResults(
            dataBikes.filter((bike) =>
                bike.name.toLowerCase().includes(e.target.value)
            )
        );

        setIsShowResult(true);
    };

    return (
        <div className="mb-6 relative ">
            <div
                className={cn(
                    "border border-zinc-200  bg-[#F7F7F7] dark:bg-transparent flex gap-1 justify-between max-w-md rounded-md overflow-hidden ",
                    isShowResults
                        ? "outline outline-1 outline-[#F0B90B]  border-transparent"
                        : "dark:border-[#474D57]"
                )}
            >
                <div className="py-3 px-3 ">
                    <IconSearch size={15} />
                </div>
                <input
                    className="bg-transparent border-0 outline-0  w-full text-xs selection:bg-[#F0B90B] selection:text-zinc-900 caret-[#F0B90B] font-semibold"
                    type="text"
                    onChange={handleSearchChange}
                    value={search}
                    placeholder="Search bikes"
                    onFocus={() => setIsShowResult(true)}
                    onBlur={() => {
                        if (!isOnBlur) {
                            setIsShowResult(false);
                        }

                        // console.log(showResultsRef.current);
                        // setTimeout(() => {
                        //     setIsShowResult(false);
                        // }, 100);
                    }}
                />
                {search.length > 0 && (
                    <button
                        className="text-[#F0B90B] py-3 px-3 hover:bg-black/10 "
                        onClick={() => {
                            setSearch("");
                            setSearchResults([]);
                        }}
                    >
                        <IconBackspace size={15} />
                    </button>
                )}
            </div>
            {isShowResults && searchResults.length > 0 && (
                <div
                    className="absolute left-0 right-0 top-full bg-zinc-50 dark:bg-[#1E2329] rounded-lg z-50 max-h-80 overflow-y-auto max-w-md"
                    // ref={showResultsRef}
                    onMouseOver={() => setIsOnBlur(true)}
                    onMouseLeave={() => setIsOnBlur(false)}
                >
                    <ul>
                        {searchResults.map((bike, index) => (
                            <li key={index}>
                                <Link
                                    href={`bike/${bike.id}`}
                                    className="flex flex-col gap-2 py-2 px-4 text-zinc-700  dark:text-zinc-300 text-xs hover:bg-zinc-200/50 dark:hover:bg-[#0B0E11]"
                                >
                                    <span>{bike.name}</span>
                                    <div className="flex gap-1">
                                        <span className="px-1 bg-[#F0B90B] text-[0.5rem] text-zinc-900 rounded-sm font-bold">
                                            {
                                                listOfBikeCategories[
                                                    bike.id_bike_category!
                                                ]?.name
                                            }
                                        </span>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Search;

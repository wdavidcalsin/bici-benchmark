"use client";

import { Button } from "@/components/ui/button";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import BikeInfoCard from "./components/bike-info-card";
import { columnsBikes } from "./components/data-table/columns";
import DataTable from "./components/data-table/data-table";
import { listOfBikeCategories } from "./constants/bike-category";
import { dataBikes } from "./constants/bikes";
import { levelsCategory } from "./constants/level-category";
import { useSelectedBike } from "./hooks/useSelectedBike";
import Search from "./components/search/search";
import ListOfBikeCategory from "./components/home/list-of-bike-category";

export default function Home() {
    const { bike, handleMouseOver, handleSetMainImage } = useSelectedBike();

    return (
        <main className="">
            <div>
                <Search />
            </div>

            <ListOfBikeCategory />

            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel>
                    <div className="pr-4 ">
                        <Tabs defaultValue={"all"} className="">
                            <TabsList className="dark:bg-[#2B3139]">
                                <TabsTrigger
                                    key={"all"}
                                    value={"all"}
                                    className="data-[state=active]:bg-[#F0B90B] data-[state=active]:text-[#181A20]"
                                >
                                    All
                                </TabsTrigger>
                                {levelsCategory.map((level) => (
                                    <TabsTrigger
                                        key={level.id}
                                        value={level.id}
                                        className="data-[state=active]:bg-[#F0B90B] data-[state=active]:text-[#181A20]"
                                    >
                                        {level.name}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                            <TabsContent key={"all"} value={"all"}>
                                <div className="border border-[#EAECEF] dark:border-[#2B3139] rounded-md p-6">
                                    <DataTable
                                        data={dataBikes}
                                        columns={columnsBikes}
                                        handleOnMouseOver={handleMouseOver}
                                    />
                                </div>
                            </TabsContent>
                            {levelsCategory.map((level) => (
                                <TabsContent key={level.id} value={level.id}>
                                    <div className="border border-[#EAECEF] dark:border-[#2B3139] rounded-md p-6">
                                        <DataTable
                                            data={dataBikes.filter(
                                                (bike) =>
                                                    bike.id_level_category ===
                                                    level.id
                                            )}
                                            columns={columnsBikes}
                                            handleOnMouseOver={handleMouseOver}
                                        />
                                    </div>
                                </TabsContent>
                            ))}
                        </Tabs>
                    </div>
                </ResizablePanel>
                <ResizableHandle className="bg-transparent border border-dashed border-zinc-300 dark:border-[#2B3139]" />
                <ResizablePanel>
                    <BikeInfoCard
                        bike={bike}
                        handleSetMainImage={handleSetMainImage}
                    />
                </ResizablePanel>
            </ResizablePanelGroup>
        </main>
    );
}

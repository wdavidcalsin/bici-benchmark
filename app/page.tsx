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

export default function Home() {
    const { bike, handleMouseOver, handleSetMainImage } = useSelectedBike();

    return (
        <main className="min-h-screen ">
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

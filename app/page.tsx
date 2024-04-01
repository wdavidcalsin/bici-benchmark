"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { columnsBikes } from "./components/data-table/columns";
import DataTable from "./components/data-table/data-table";
import { listOfBikeCategories } from "./constants/bike-category";
import { dataBikes } from "./constants/bikes";
import { levelsCategory } from "./constants/level-category";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Home() {
    return (
        <main className="min-h-screen ">
            <div className="flex gap-2 mb-6 flex-wrap">
                {listOfBikeCategories.map((category) => (
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
                                        />
                                    </div>
                                </TabsContent>
                            ))}
                        </Tabs>
                    </div>
                </ResizablePanel>
                <ResizableHandle className="bg-transparent border border-dashed border-[#2B3139]" />
                <ResizablePanel>
                    <div className="pl-4 flex flex-col gap-4">
                        <Image
                            sizes="100vw"
                            width={900}
                            height={600}
                            src={"/images/bikes/bike-1.webp"}
                            alt=""
                            className="rounded-md"
                        />
                        <div className="flex flex-col gap-2">
                            <h1 className="font-bold text-zinc-300">
                                Slash 9.9 XX1 Flight Attendant Gen 5
                            </h1>
                            <p className="text-sm text-zinc-400">
                                Slash 9.9 is the fastest enduro mountain bike in
                                the lineup, so it's no surprise it's the go-to
                                ride for the pros of Trek Factory Racing Enduro.
                                A full carbon frame, all-new hard-charging
                                suspension with RockShox Flight Attendant,
                                fast-rolling carbon wheels, and a SRAM wireless
                                electronic drivetrain and dropper make this
                                top-of-the-line ride the undisputed king of
                                enduro.
                            </p>
                        </div>
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </main>
    );
}

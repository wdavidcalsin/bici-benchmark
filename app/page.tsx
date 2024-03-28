"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { columnsPayment, dataBikes } from "./components/data-table/columns";
import DataTable from "./components/data-table/data-table";

type category = "beginner" | "intermediate" | "advanced";

interface IBike {
    name: string;
    description: string;
    image: string;
    id_category: category[] | string;
}

interface ILevelCategory {
    name: string;
    id_category: category;
}

const levelsCategory: ILevelCategory[] = [
    { name: "Beginner", id_category: "beginner" },
    { name: "Intermediate", id_category: "intermediate" },
    { name: "Advanced", id_category: "advanced" },
];

export default function Home() {
    return (
        <main className="min-h-screen ">
            <Tabs
                defaultValue={levelsCategory[0].id_category}
                className="max-w-[500px]"
            >
                <TabsList className="">
                    {levelsCategory.map((level) => (
                        <TabsTrigger
                            key={level.id_category}
                            value={level.id_category}
                            className="data-[state=active]:bg-[#F0B90B] data-[state=active]:text-[#181A20]"
                        >
                            {level.name}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {levelsCategory.map((level) => (
                    <TabsContent
                        key={level.id_category}
                        value={level.id_category}
                    >
                        <div className="border border-[#2B3139] rounded-md p-4">
                            <DataTable
                                data={dataBikes.filter(
                                    (bike) =>
                                        bike.id_category === level.id_category
                                )}
                                columns={columnsPayment}
                            />
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </main>
    );
}

import { listOfBikeCategories } from "@/app/constants/bike-category";
import { IBike } from "@/app/types/bike";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconDots, IconSelector } from "@tabler/icons-react";
import { ColumnDef } from "@tanstack/react-table";

export const columnsBikes: ColumnDef<IBike>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
                className="border-zinc-500 dark:border-zinc-400 ]"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="border-zinc-500 dark:border-zinc-400 ]"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    // {
    //     accessorKey: "status",
    //     header: "Status",
    //     cell: ({ row }) => (
    //         <div className="capitalize">{row.getValue("status")}</div>
    //     ),
    // },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                    className="text-xs"
                >
                    Name
                    <IconSelector className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => (
            <div className="line-clamp-2 font-semibold">
                {row.getValue("name")}
            </div>
        ),
    },
    {
        accessorKey: "description",
        header: () => <div className="">Description</div>,
        cell: ({ row }) => {
            return (
                <div className="line-clamp-2 dark:text-zinc-400">
                    {row.getValue("description")}
                </div>
            );
        },
    },
    {
        accessorKey: "id_level_category",
        header: () => <div className="">Level Category</div>,
        cell: ({ row }) => {
            return (
                <div className="text-[#0ECB81] capitalize">
                    {row.getValue("id_level_category")}
                </div>
            );
        },
    },
    {
        accessorKey: "id_bike_category",
        header: () => <div className="">Bike Category</div>,
        cell: ({ row }) => {
            return (
                <div className="text-[#F0B90B] capitalize text-nowrap font-semibold">
                    {listOfBikeCategories[row.original.id_bike_category!]?.name}
                    {/* {row.getValue("id_bike_category")} */}
                </div>
            );
        },
    },
    // {
    //     id: "actions",
    //     enableHiding: false,
    //     cell: ({ row }) => {
    //         const payment = row.original;

    //         return (
    //             <DropdownMenu>
    //                 <DropdownMenuTrigger asChild>
    //                     <Button variant="ghost" className="h-8 w-8 p-0">
    //                         <span className="sr-only">Open menu</span>
    //                         <IconDots className="h-4 w-4" />
    //                     </Button>
    //                 </DropdownMenuTrigger>
    //                 <DropdownMenuContent align="end">
    //                     <DropdownMenuLabel>Actions</DropdownMenuLabel>
    //                     <DropdownMenuItem
    //                         onClick={() =>
    //                             navigator.clipboard.writeText(payment.name)
    //                         }
    //                     >
    //                         Copy payment ID
    //                     </DropdownMenuItem>
    //                     <DropdownMenuSeparator />
    //                     <DropdownMenuItem>View customer</DropdownMenuItem>
    //                     <DropdownMenuItem>
    //                         View payment details
    //                     </DropdownMenuItem>
    //                 </DropdownMenuContent>
    //             </DropdownMenu>
    //         );
    //     },
    // },
];

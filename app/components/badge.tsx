import { cn } from "@/lib/utils";
import React from "react";

type Colors = "green" | "yellow";

interface BadgeProps {
    children: React.ReactNode;
    color?: Colors;
}

const Badge: React.FC<BadgeProps> = ({ children, color = "yellow" }) => {
    return (
        <span
            className={cn(
                "flex gap-1 items-center px-1 text-[.6rem] font-bold  rounded-sm text-zinc-800",
                color === "yellow" ? "bg-[#F0B90B]" : "bg-[#0ECB81]"
            )}
        >
            {children}
        </span>
    );
};

export default Badge;

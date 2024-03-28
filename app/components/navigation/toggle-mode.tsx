"use client";

import { cn } from "@/lib/utils";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import React from "react";

const ToggleMode: React.FC = () => {
    const { setTheme, systemTheme } = useTheme();

    const [isCheck, setIsCheck] = React.useState<boolean>(false);

    const handleToggle = (isThemeToggle: boolean) => {
        setIsCheck(!isCheck);

        setTimeout(() => {
            setTheme(isThemeToggle ? "light" : "dark");
        }, 300);
    };

    React.useEffect(() => {
        setIsCheck(systemTheme === "dark" ? false : true);
    }, []);

    return (
        <div className="bg-[#B7BDC6] dark:bg-[#474D57] rounded-full w-[3.3rem] relative h-7 p-0.5">
            <label htmlFor="check" className="w-full ">
                <input
                    type="checkbox"
                    className="hidden"
                    onChange={() => handleToggle(!isCheck)}
                    id="check"
                />
                <div className="absolute top-0 right-0 left-0 bottom-0 h-full w-full p-0.5">
                    <span
                        className={cn(
                            "transition-all text-zinc-900 duration-300 cursor-pointer bg-white  dark:bg-zinc-100 rounded-full h-full w-1/2  flex items-center justify-center",
                            isCheck ? "translate-x-0" : "translate-x-full"
                        )}
                    >
                        {isCheck ? (
                            <IconSun size={"15"} />
                        ) : (
                            <IconMoon size={"15"} />
                        )}
                    </span>
                </div>
            </label>
        </div>
    );
};

export default ToggleMode;

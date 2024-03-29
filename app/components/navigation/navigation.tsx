import Image from "next/image";
import React from "react";
import { Container } from "../container";
import ToggleMode from "./toggle-mode";
import Link from "next/link";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
    return (
        <nav className=" bg-white dark:bg-[#181A20] border-b border-zinc-100 dark:border-zinc-800">
            <Container variant={"fullMobileConstrainedPadded"}>
                <div className="flex justify-between items-center py-4">
                    <div>
                        <Link href={"/"}>
                            <Image
                                width={120}
                                height={50}
                                src={"/images/logo-bici-benchmark.png"}
                                alt=""
                            />
                        </Link>
                    </div>
                    <div>
                        <ToggleMode />
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Navigation;

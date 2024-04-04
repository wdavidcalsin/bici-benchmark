import { useState, useEffect } from "react";

interface ResponsiveState {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
}

export const useResponsive = (): ResponsiveState => {
    const [responsiveState, setResponsiveState] = useState<ResponsiveState>({
        isMobile: false,
        isTablet: false,
        isDesktop: false,
    });

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth < 640;
            const isTablet =
                window.innerWidth >= 640 && window.innerWidth < 1024;
            const isDesktop = window.innerWidth >= 1024;

            setResponsiveState({
                isMobile,
                isTablet,
                isDesktop,
            });
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return responsiveState;
};

import { cn } from "@/lib/utils";
import { IconZoomIn, IconZoomOut } from "@tabler/icons-react";
import Image from "next/image";
import * as React from "react";

const MAX_ZOOM_LEVEL = 4.0;
const MIN_ZOOM_LEVEL = 1.5;

enum ZoomLevelActionKind {
    INCREASE = "INCREASE",
    DECREASE = "DECREASE",
}

interface ZoomLevelAction {
    type: ZoomLevelActionKind;
    payload: number;
}

interface ZoomLevelState {
    zoomLevel: number;
}

const zoomLevelReducer = (state: ZoomLevelState, action: ZoomLevelAction) => {
    const { type, payload } = action;
    switch (type) {
        case ZoomLevelActionKind.INCREASE:
            return {
                ...state,
                zoomLevel:
                    state.zoomLevel >= MAX_ZOOM_LEVEL
                        ? state.zoomLevel
                        : state.zoomLevel + payload,
            };
        case ZoomLevelActionKind.DECREASE:
            return {
                ...state,
                zoomLevel:
                    state.zoomLevel <= MIN_ZOOM_LEVEL
                        ? state.zoomLevel
                        : state.zoomLevel - payload,
            };
        default:
            return state;
    }
};

interface ImageMagnifierProps {
    src: string;
    width?: string;
    height?: string;
    magnifierHeight?: number;
    magnifierWidth?: number;
}

const ImageMagnifier: React.FC<ImageMagnifierProps> = ({
    src,
    width,
    height,
    magnifierHeight = 120,
    magnifierWidth = 120,
}) => {
    const [[x, y], setXY] = React.useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = React.useState([0, 0]);
    const [showMagnifier, setShowMagnifier] = React.useState(false);

    const [state, dispatch] = React.useReducer(zoomLevelReducer, {
        zoomLevel: 1.5,
    });

    const increaseZoom = React.useCallback(() => {
        dispatch({
            type: ZoomLevelActionKind.INCREASE,
            payload: 0.1,
        });
    }, []);

    const decreaseZoom = React.useCallback(() => {
        dispatch({
            type: ZoomLevelActionKind.DECREASE,
            payload: 0.1,
        });
    }, []);

    const { isDisabled: increaseDisabled, buttonClass: increaseButtonClass } =
        getButtonValidation("max", MAX_ZOOM_LEVEL, state.zoomLevel);
    const { isDisabled: decreaseDisabled, buttonClass: decreaseButtonClass } =
        getButtonValidation("min", MIN_ZOOM_LEVEL, state.zoomLevel);

    return (
        <div>
            <div className="flex gap-1 justify-end text-zinc-100">
                <span className="mr-2 text-zinc-300">
                    {state.zoomLevel.toFixed(1)}
                </span>
                <button
                    disabled={increaseDisabled}
                    className={increaseButtonClass}
                    onClick={increaseZoom}
                >
                    <IconZoomIn size={15} />
                </button>
                <button
                    disabled={decreaseDisabled}
                    className={decreaseButtonClass}
                    onClick={decreaseZoom}
                >
                    <IconZoomOut size={15} />
                </button>
            </div>
            <div
                className="overflow-hidden mt-1"
                style={{
                    position: "relative",
                    height: height,
                    width: width,
                }}
            >
                <Image
                    src={src}
                    // style={{ height: height, width: width }}
                    width={900}
                    height={600}
                    alt={"img"}
                    className="rounded-md"
                    onMouseEnter={(e) => {
                        const elem = e.currentTarget;
                        const { width, height } = elem.getBoundingClientRect();
                        setSize([width, height]);
                        setShowMagnifier(true);
                    }}
                    onMouseMove={(e) => {
                        // update cursor position
                        const elem = e.currentTarget;
                        const { top, left } = elem.getBoundingClientRect();

                        // calculate cursor position on the image
                        const x = e.pageX - left - window.pageXOffset;
                        const y = e.pageY - top - window.pageYOffset;
                        setXY([x, y]);
                    }}
                    onMouseLeave={() => {
                        // close magnifier
                        setShowMagnifier(false);
                    }}
                />

                <div
                    className="rounded-full"
                    style={{
                        display: showMagnifier ? "" : "none",
                        position: "absolute",

                        // prevent magnifier blocks the mousemove event of img
                        pointerEvents: "none",
                        // set size of magnifier
                        height: `${magnifierHeight}px`,
                        width: `${magnifierWidth}px`,
                        // move element center to cursor pos
                        top: `${y - magnifierHeight / 2}px`,
                        left: `${x - magnifierWidth / 2}px`,
                        opacity: "1", // reduce opacity so you can verify position
                        border: "5px solid lightgray",
                        backgroundColor: "white",
                        backgroundImage: `url('${src}')`,
                        backgroundRepeat: "no-repeat",

                        //calculate zoomed image size
                        backgroundSize: `${imgWidth * state.zoomLevel}px ${
                            imgHeight * state.zoomLevel
                        }px`,

                        //calculate position of zoomed image.
                        backgroundPositionX: `${
                            -x * state.zoomLevel + magnifierWidth / 2
                        }px`,
                        backgroundPositionY: `${
                            -y * state.zoomLevel + magnifierHeight / 2
                        }px`,
                    }}
                ></div>
            </div>
        </div>
    );
};

export default ImageMagnifier;

type ComparisonType = "max" | "min";

interface ButtonValidationResult {
    isDisabled: boolean;
    buttonClass: string;
}

const getButtonValidation = (
    comparisonType: ComparisonType,
    comparisonValue: number,
    zoomLevel: number
): ButtonValidationResult => {
    const isDisabled =
        comparisonType === "max"
            ? zoomLevel >= comparisonValue
            : zoomLevel <= comparisonValue;
    const buttonClass = cn(
        "bg-slate-700/50 p-1 rounded-sm transition-all",
        isDisabled
            ? "cursor-not-allowed opacity-70"
            : "cursor-pointer hover:opacity-80"
    );
    return { isDisabled, buttonClass };
};

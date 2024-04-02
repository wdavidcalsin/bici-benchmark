import Image from "next/image";
import * as React from "react";

const ImageMagnifier = ({
    src,
    width,
    height,
    magnifierHeight = 120,
    magnifieWidth = 120,
    zoomLevel = 1.5,
}: {
    src: string;
    width?: string;
    height?: string;
    magnifierHeight?: number;
    magnifieWidth?: number;
    zoomLevel?: number;
}) => {
    const [[x, y], setXY] = React.useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = React.useState([0, 0]);
    const [showMagnifier, setShowMagnifier] = React.useState(false);

    return (
        // the container
        <div
            className="overflow-hidden"
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
                    width: `${magnifieWidth}px`,
                    // move element center to cursor pos
                    top: `${y - magnifierHeight / 2}px`,
                    left: `${x - magnifieWidth / 2}px`,
                    opacity: "1", // reduce opacity so you can verify position
                    border: "5px solid lightgray",
                    backgroundColor: "white",
                    backgroundImage: `url('${src}')`,
                    backgroundRepeat: "no-repeat",

                    //calculate zoomed image size
                    backgroundSize: `${imgWidth * zoomLevel}px ${
                        imgHeight * zoomLevel
                    }px`,

                    //calculate position of zoomed image.
                    backgroundPositionX: `${
                        -x * zoomLevel + magnifieWidth / 2
                    }px`,
                    backgroundPositionY: `${
                        -y * zoomLevel + magnifierHeight / 2
                    }px`,
                }}
            ></div>
        </div>
    );
};

export default ImageMagnifier;

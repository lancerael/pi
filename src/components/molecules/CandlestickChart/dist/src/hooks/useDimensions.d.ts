export declare const useDimensions: (svgRef: any | null, length: number, controls: {
    zoomLevel: number;
    panLevel: number;
}) => {
    visibleRange: {
        first: number;
        last: number;
        offset: number;
        totalWidth: number;
    };
    sizes: {
        width: number;
        height: number;
    };
};

export declare const useDimensions: (svgRef: any | null, length: number, zoomLevel: number, panLevel: number) => {
    visibleRange: {
        first: number;
        last: number;
        offset: number;
        totalWidth: number;
    };
    dimensions: {
        width: number;
        height: number;
    };
};

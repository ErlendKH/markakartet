/*
DataDict, eller egentlig bare Data, men kaller dem for DataDict under testing for å bevare Data.
*/

// const originIKartDataDict = window.location.origin + "/";

/**
 * ${1:Description placeholder}
 *
 * @type {{ type: string; dataUrl: string; dataDictName: string; vectorName: string; uiName: string; urlCode: string; strokeColor: {}; fillColor: {\}; strokeWidth: number; strokeColorSelect: {\}; fillColorSelect: {\}; strokeWidthSelect: number; opacity: number; clickEvent: number; \}\}
 */
var dataDictOksBevaringsskoger = {
    type: "GeoJSONdata",
    dataUrl: window.location.origin + "/" + "data/oksBevaringsskoger.geojson",
    dataDictName: "dataDictOksBevaringsskoger",
    vectorName: "vektorlagOksBevaringsskoger",
    uiName: "Bevaringsskoger, Oslo kommune",
    urlCode: "obs",
    strokeColor: [240, 0, 0, 1],
    fillColor: [0, 240, 0, 0.4],
    strokeWidth: 2,
    strokeColorSelect: [240, 0, 0, 0.9],
    fillColorSelect: [0, 240, 0, 0.7],
    strokeWidthSelect: 4,
    opacity: 1,
    clickEvent: 1,
};
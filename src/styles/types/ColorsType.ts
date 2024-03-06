export interface ColorPaletteType {
    peak: string;
    highest: string;
    higher: string;
    high: string;
    medium: string;
    low: string;
}

export interface BorderPaletteType extends ColorPaletteType {
    focus: string;
}

interface StylesColorsType {
    typo: ColorPaletteType;
    background: ColorPaletteType;
    border: BorderPaletteType;
}

export default StylesColorsType;

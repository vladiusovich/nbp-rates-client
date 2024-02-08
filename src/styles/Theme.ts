import { ColorPaletteType } from "./types/ColorsType";
import ThemeType from "./types/ThemeType";

const colors: ColorPaletteType = {
    higher: "#C8C8C8",
    high: "#CCCCCC",
    medium: "#727272",
    low: "#000000"
};

const theme: ThemeType = {
    defaultTheme: "light",
    light: {
        colors: {
            typo: colors,
            background: colors,
            border: colors,
        }
    }
}

export default theme;
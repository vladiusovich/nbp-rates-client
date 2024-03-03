import { ColorPaletteType } from "./types/ColorsType";
import ThemeType from "./types/ThemeType";

const colors: ColorPaletteType = {
    highest: "#F8F8F8",
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
            border: {
                ...colors,
                focus: "rgba(43, 141, 255)"
            },
        }
    },
    borderRadius: {
        regular: "8px"
    }
}

export default theme;
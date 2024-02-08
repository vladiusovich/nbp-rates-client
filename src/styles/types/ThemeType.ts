import StylesColorsType from "./ColorsType";

declare global {
    interface ThemeType {
        defaultTheme: "light" | "dark";
        // dark: {
        //     colors: StylesColorsType;
        // };
        light: {
            colors: StylesColorsType;
        };
    }
}

export default ThemeType;

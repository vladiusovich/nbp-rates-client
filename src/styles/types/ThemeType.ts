import StylesColorsType from "./ColorsType";

declare global {
    interface ThemeType {
        defaultTheme: "light" | "dark";
        light: {
            colors: StylesColorsType;
        };
        borderRadius: {
            regular: string;
        }
        // dark: {
        //     colors: StylesColorsType;
        // };
    }
}

export default ThemeType;

import { createTheme } from "@mui/material";

const getMuiTheme = (theme: ThemeType) => createTheme(
    {
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536,
            },
        },
        typography: {
            fontFamily: "Inter",
        },

    },
);

export default getMuiTheme;

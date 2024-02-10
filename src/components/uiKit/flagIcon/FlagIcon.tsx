import React from "react";
import S from "./FlagIcon.styled";

const countriesIconUrl = "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.4/flags/4x3/";

const getImageUrl = (code: string) => (
    `${countriesIconUrl}${code.toString().toLowerCase()}.svg`
);

// TODO: add size, formats(png, svg)?
export interface FlagIconPropsType {
    code: string | undefined;
    loading?: "eager" | "lazy" | undefined;
}

const FlagIcon: React.FC<FlagIconPropsType> = ({
    code,
    loading,
}) => {
    if (!code) {
        return null;
    }

    return (
        <S.flagImage
            loading={loading ?? "lazy"}
            src={getImageUrl(code ?? "")}
        />
    );
};

export default FlagIcon;

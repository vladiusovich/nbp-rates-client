import React from "react";
import S from "./ErrorContent.styled";
import UI from "@ui";
import typography from "@typography";

interface Props {
    message: string | React.ReactNode;
}

const ErrorContent: React.FC<Props> = ({ message }) => {
    return (
        <S.container>
            <UI.Stack direction="column" alignItems="center">
                <typography.grayBold>
                    Błąd
                </typography.grayBold>
                <typography.small>
                    {message}
                </typography.small>
                <typography.gray>
                    Spróbuj ponownie później
                </typography.gray>
            </UI.Stack>
        </S.container>
    );
};

export default ErrorContent;

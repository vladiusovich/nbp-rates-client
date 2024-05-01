import { useMemo } from 'react';
import S from './FlagIcon.styled';

const flagEmojiForCode = (code: string) => {
    const h = code.toLowerCase().charCodeAt(0) + (0x1f1e6 - 97)
    const l = code.toLowerCase().charCodeAt(1) + (0x1f1e6 - 97)
    return String.fromCodePoint(h, l)
}

// Windows OS < 11 does not support EMOJI
const FlagIcon: React.FC<{ code: string }> = ({ code }) => {
    const cachedFlag = useMemo(() => flagEmojiForCode(code), [code])

    return (
        <S.flagIcon>
            {cachedFlag}
        </S.flagIcon>
    );
};

export default FlagIcon;

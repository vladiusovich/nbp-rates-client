import styled from 'styled-components';

interface Props {
    $imgUrl: string;
    $height: number;
    $width: number;
}

export const S = {
    currencyFlagImage: styled.span <Props>`
        background-image: url('${({ $imgUrl }) => $imgUrl}');
        background-size: cover;
        display: inline-block;
        height: ${({ $height }) => $height}px;
        width: ${({ $width }) => $width}px;
    `
};

export default S;
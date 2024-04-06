import styled from 'styled-components';

interface Props {
    $imgUrl: string;
    $height: number;
    $width: number;
}

export const S = {
    currencyFlagImage: styled.div <Props>`
        vertical-align: middle;
        background-image: url('${({ $imgUrl }) => $imgUrl}');
        background-position: 0px -3px;
        background-size: cover;
        display: inline-block;
        height: ${({ $height }) => $height}px;
        width: ${({ $width }) => $width}px;
    `
};

export default S;
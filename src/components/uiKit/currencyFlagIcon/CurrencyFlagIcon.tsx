import S from './CurrencyFlagIcon.styled';

const imageSrc = `./assets/icons/currencies`;

export type CurrencyFlagSizesType = 'sm' | 'md' | 'lg' | 'xl';

const defaultAspectRatio = 1;

export interface ICurrencyFlagProps {
    currency: string;
    size: CurrencyFlagSizesType;
    aspectRatio?: number;
}

const getCurrencyImage = (currency: string) => `${imageSrc}/${currency.toLowerCase()}.png`;

export const sizes: Record<CurrencyFlagSizesType, number> = {
    sm: 16,
    md: 32,
    lg: 36,
    xl: 48,
};

const defineSize = (size: CurrencyFlagSizesType, aspectRatio: number) => {
    const width = sizes[size];
    const height = width / (aspectRatio > 0 ? aspectRatio : defaultAspectRatio);

    return { width, height };
}

const CurrencyFlagImage: React.FC<ICurrencyFlagProps> = ({ currency, size, aspectRatio = defaultAspectRatio }) => {
    const image = getCurrencyImage(currency);
    const { width, height } = defineSize(size, aspectRatio);

    return (
        <S.currencyFlagImage
            $imgUrl={image}
            $width={width}
            $height={height}
        />
    );
};

export default CurrencyFlagImage;

import S from './CurrencyFlagIcon.styled';

const imageSrc = `./assets/icons/currencies/`;

export type CurrencyFlagSizesType = 'sm' | 'md' | 'lg' | 'xl';

export interface ICurrencyFlagProps {
    currency: string;
    size: CurrencyFlagSizesType;
}

// const getCurrencyImage = (currency: string) => flags[currency.toLowerCase() as keyof typeof flags] ?? flags.$$$;
const getCurrencyImage = (currency: string) => `${imageSrc}/${currency.toLowerCase}.png`;

export const sizes: Record<CurrencyFlagSizesType, number> = {
    sm: 16,
    md: 32,
    lg: 36,
    xl: 48,
};

const defineSize = (size: CurrencyFlagSizesType) => {
    const width = sizes[size];
    const height = width / 1.6;

    return { width, height };
}

const CurrencyFlagImage: React.FC<ICurrencyFlagProps> = ({ currency, size }) => {
    const image = getCurrencyImage(currency);
    const { width, height } = defineSize(size);

    return (
        <S.currencyFlagImage
            $imgUrl={image}
            $width={width}
            $height={height}
        />
    );
};

export default CurrencyFlagImage;

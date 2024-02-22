import flags from './flags';
import S from './CurrencyFlagIcon.styled';

export type CurrencyFlagSizesType = 'sm' | 'md' | 'lg' | 'xl';

export interface ICurrencyFlagProps {
    currency: string;
    size: CurrencyFlagSizesType;
}

const getCurrencyImage = (currency: string) => flags[currency.toLowerCase() as keyof typeof flags] ?? flags.$$$;

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
    const imageSrc = getCurrencyImage(currency);
    const { width, height } = defineSize(size);

    return (
        <S.currencyFlagImage
            $imgUrl={imageSrc}
            $width={width}
            $height={height}
        />
    );
};

export default CurrencyFlagImage;

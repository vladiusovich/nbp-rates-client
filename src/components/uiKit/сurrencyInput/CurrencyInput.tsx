import React, {
    FC,
    useState,
    useEffect,
    useRef,
    forwardRef,
    useMemo,
    useImperativeHandle,
} from 'react';
import { CurrencyInputProps } from './CurrencyInputProps';
import {
    isNumber,
    cleanValue,
    fixedDecimalValue,
    formatValue,
    getLocaleConfig,
    padTrimValue,
    CleanValueOptions,
    getSuffix,
    FormatValueOptions,
    repositionCursor,
} from './utils';
import S from './CurrencyInput.styled';

/* TODO: refactor the component:
    -remove unused fetures
    -split some features
    -improve adornment elements (hove/blur event)
*/
export const CurrencyInput: FC<CurrencyInputProps> = forwardRef<
    HTMLInputElement,
    CurrencyInputProps
>(
    (
        {
            allowDecimals = true,
            allowNegativeValue = true,
            zeroAsEmptyString = false,
            id,
            name,
            className,
            decimalsLimit,
            disabled = false,
            maxLength: userMaxLength,
            value: userValue,
            onValueChange,
            fixedDecimalLength,
            placeholder,
            decimalScale,
            prefix,
            startAdornment,
            suffix,
            endAdornment,
            intlConfig,
            step,
            min,
            max,
            disableGroupSeparators = false,
            disableAbbreviations = false,
            decimalSeparator: _decimalSeparator,
            groupSeparator: _groupSeparator,
            onChange,
            onFocus,
            onBlur,
            onKeyDown,
            onKeyUp,
            transformRawValue,
            formatValueOnBlur = true,
            ...props
        }: CurrencyInputProps,
        ref
    ) => {
        if (_decimalSeparator && isNumber(_decimalSeparator)) {
            throw new Error('decimalSeparator cannot be a number');
        }

        if (_groupSeparator && isNumber(_groupSeparator)) {
            throw new Error('groupSeparator cannot be a number');
        }

        const localeConfig = useMemo(() => getLocaleConfig(intlConfig), [intlConfig]);
        const decimalSeparator = _decimalSeparator || localeConfig.decimalSeparator || '';
        const groupSeparator = _groupSeparator || localeConfig.groupSeparator || '';

        if (
            decimalSeparator &&
            groupSeparator &&
            decimalSeparator === groupSeparator &&
            disableGroupSeparators === false
        ) {
            throw new Error('decimalSeparator cannot be the same as groupSeparator');
        }

        const getformatValueOptions = (zeroAsEmptyString: boolean): Partial<FormatValueOptions> => (
            {
                zeroAsEmptyString: zeroAsEmptyString,
                decimalSeparator,
                groupSeparator,
                disableGroupSeparators,
                intlConfig,
                prefix: prefix || localeConfig.prefix,
                suffix: suffix,
            }
        );

        const [inFocus, setInFocus] = useState(false);
        const [userStartedType, setUserStartedType] = useState(false);
        const [stateValue, setStateValue] = useState(formatValue(
            {
                ...getformatValueOptions(zeroAsEmptyString),
                decimalScale,
                value: String(userValue ?? "")
            }));

        const [dirty, setDirty] = useState(false);
        const [cursor, setCursor] = useState(0);
        const [changeCount, setChangeCount] = useState(0);
        const [lastKeyStroke, setLastKeyStroke] = useState<string | null>(null);
        const inputRef = useRef<HTMLInputElement>(null);
        useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

        const formatValueOptions = getformatValueOptions(zeroAsEmptyString);

        const cleanValueOptions: Partial<CleanValueOptions> = {
            decimalSeparator,
            groupSeparator,
            allowDecimals,
            decimalsLimit: decimalsLimit || fixedDecimalLength || 2,
            allowNegativeValue,
            disableAbbreviations,
            prefix: prefix || localeConfig.prefix,
            transformRawValue,
        };

        /**
         * Process change in value
         */
        const processChange = (value: string, selectionStart?: number | null): void => {
            setDirty(true);

            const { modifiedValue, cursorPosition } = repositionCursor({
                selectionStart,
                value,
                lastKeyStroke,
                stateValue,
                groupSeparator,
            });

            const stringValue = cleanValue({ value: modifiedValue, ...cleanValueOptions });

            if (userMaxLength && stringValue.replace(/-/g, '').length > userMaxLength) {
                return;
            }

            if (stringValue === '' || stringValue === '-' || stringValue === decimalSeparator) {
                onValueChange?.(undefined, name, { float: null, formatted: '', value: '' });
                setStateValue(stringValue);
                // Always sets cursor after '-' or decimalSeparator input
                setCursor(1);
                return;
            }

            const stringValueWithoutSeparator = decimalSeparator
                ? stringValue.replace(decimalSeparator, '.')
                : stringValue;

            const numberValue = parseFloat(stringValueWithoutSeparator);

            const o = getformatValueOptions(zeroAsEmptyString && inFocus && stringValue === "");

            const formattedValue = formatValue({
                value: stringValue,
                ...o,
            });

            if (cursorPosition != null) {
                // Prevent cursor jumping
                let newCursor = cursorPosition + (formattedValue.length - value.length);
                newCursor = newCursor <= 0 ? (prefix ? prefix.length : 0) : newCursor;

                setCursor(newCursor);
                setChangeCount(changeCount + 1);
            }

            setStateValue(formattedValue);

            onValueChange?.(stringValue, name, {
                float: numberValue,
                formatted: formattedValue,
                value: stringValue,
            });
        };

        /**
         * Handle change event
         */
        const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
            processChange(event.target.value, event.target.selectionStart);
            onChange?.(event);
        };

        /**
         * Handle focus event
         */
        const handleOnFocus = (event: React.FocusEvent<HTMLInputElement>): number => {
            setInFocus(true);

            onFocus?.(event);
            return stateValue ? stateValue.length : 0;
        };

        const refEndAdornment = useRef<HTMLInputElement | null>(null);

        /**
         * Handle blur event
         *
         * Format value by padding/trimming decimals if required by
         */
        const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
            const {
                target: { value },
            } = event;

            const a = event.relatedTarget;
            const b = refEndAdornment?.current;
            // TODO: bug. When switch current input using key 'tab' blur does not trigger
            if ((!!a && !!b) && a?.parentElement?.className === b?.className) {
                return;
            }

            setUserStartedType(false);
            setInFocus(false);

            const valueOnly = cleanValue({ value, ...cleanValueOptions });

            if (valueOnly === '-' || valueOnly === decimalSeparator || !valueOnly) {
                setStateValue('');
                onBlur?.(event);
                return;
            }

            const fixedDecimals = fixedDecimalValue(valueOnly, decimalSeparator, fixedDecimalLength);

            const newValue = padTrimValue(
                fixedDecimals,
                decimalSeparator,
                decimalScale !== undefined ? decimalScale : fixedDecimalLength
            );

            const numberValue = parseFloat(newValue.replace(decimalSeparator, '.'));

            const formattedValue = formatValue({
                ...formatValueOptions,
                value: newValue,
            });

            if (onValueChange && formatValueOnBlur) {
                onValueChange(newValue, name, {
                    float: numberValue,
                    formatted: formattedValue,
                    value: newValue,
                });
            }

            setStateValue(formattedValue);

            onBlur && onBlur(event);
        };

        /**
         * Handle key down event
         *
         * Increase or decrease value by step
         */
        const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
            const { key } = event;

            setLastKeyStroke(key);
            setUserStartedType(true);

            if (step && (key === 'ArrowUp' || key === 'ArrowDown')) {
                event.preventDefault();
                setCursor(stateValue.length);

                const currentValue =
                    parseFloat(
                        userValue != null
                            ? String(userValue).replace(decimalSeparator, '.')
                            : cleanValue({ value: stateValue, ...cleanValueOptions })
                    ) || 0;
                const newValue = key === 'ArrowUp' ? currentValue + step : currentValue - step;

                if (min !== undefined && newValue < Number(min)) {
                    return;
                }

                if (max !== undefined && newValue > Number(max)) {
                    return;
                }

                const fixedLength = String(step).includes('.')
                    ? Number(String(step).split('.')[1].length)
                    : undefined;

                processChange(
                    String(fixedLength ? newValue.toFixed(fixedLength) : newValue).replace(
                        '.',
                        decimalSeparator
                    )
                );
            }

            onKeyDown?.(event);
        };

        /**
         * Handle key up event
         *
         * Move cursor if there is a suffix to prevent user typing past suffix
         */
        const handleOnKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
            const {
                key,
                currentTarget: { selectionStart },
            } = event;
            if (key !== 'ArrowUp' && key !== 'ArrowDown' && stateValue !== '-') {
                const suffix = getSuffix(stateValue, { groupSeparator, decimalSeparator });

                if (suffix && selectionStart && selectionStart > stateValue.length - suffix.length) {
                    /* istanbul ignore else */
                    if (inputRef.current) {
                        const newCursor = stateValue.length - suffix.length;
                        inputRef.current.setSelectionRange(newCursor, newCursor);
                    }
                }
            }

            onKeyUp?.(event);
        };

        useEffect(() => {
            // Update state if userValue changes to undefined/0/"" in fucused state of element
            if ((userValue === null || userValue === "0" || userValue === "") && inFocus) {
                setStateValue('');
                setUserStartedType(false);
                return;
            }

            // Update state if userValue changes to undefined
            if (userValue === null) {
                setStateValue('');
                setUserStartedType(false);
            }
        }, [inFocus, userValue]);

        useEffect(() => {
            // prevent cursor jumping if editing value
            if (
                dirty &&
                stateValue !== '-' &&
                inputRef.current &&
                document.activeElement === inputRef.current
            ) {
                inputRef.current.setSelectionRange(cursor, cursor);
            }
        }, [stateValue, cursor, inputRef, dirty, changeCount]);

        // if user focoses on element but does not set any value show empty field
        const renderZeroAsEmptyString = () => {
            return (formatValueOptions.zeroAsEmptyString &&
                (stateValue === "0" || stateValue === "") &&
                inFocus &&
                !userStartedType)
                ?? true;
        }

        /**
         * If user has only entered "-" or decimal separator,
         * keep the char to allow them to enter next value
         */
        const getRenderValue = () => {
            const isValidValue = userValue != null && stateValue !== '-' && stateValue !== decimalSeparator;
            const _allowRenderZero = renderZeroAsEmptyString();

            return isValidValue
                ? formatValue({
                    ...getformatValueOptions(_allowRenderZero),
                    decimalScale: dirty ? undefined : decimalScale,
                    value: String(userValue),
                }) : stateValue;
        };

        const inputProps: React.ComponentPropsWithRef<'input'> = {
            type: 'text',
            inputMode: 'decimal',
            id,
            name,
            className,
            onChange: handleOnChange,
            onBlur: handleOnBlur,
            onFocus: handleOnFocus,
            onKeyDown: handleOnKeyDown,
            onKeyUp: handleOnKeyUp,
            placeholder,
            disabled,
            value: getRenderValue(),
            ref: inputRef,
            ...props,
        };

        return (
            <S.container>
                {startAdornment && (
                    <S.startAdornmentContainer>
                        {startAdornment}
                    </S.startAdornmentContainer>)
                }

                <S.input {...inputProps} />

                {endAdornment && (
                    <S.endAdornmentContainer ref={refEndAdornment}>
                        {endAdornment}
                    </S.endAdornmentContainer>)
                }
            </S.container>
        );
    }
);

CurrencyInput.displayName = 'CurrencyInput';

export * from "./CurrencyInputProps";

export default CurrencyInput;
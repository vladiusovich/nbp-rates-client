import React from "react";
import { FilledTextFieldProps } from "@mui/material";
import MuiTextField from "@mui/material/TextField";

export interface TextFieldPropsType extends Omit<FilledTextFieldProps, "variant" | "size"> {
    numeric?: boolean;
    numericPrecision?: number;
    maxLength?: number;
}

const numericStratigy = (val: string) => {
    let p = val.replace(",", ".");

    if (p.length > 1 && p.at(0) === "0" && p.at(1) !== ".") {
        p = p.replace("0", "")
    }

    return p;
};

// TODO
const stringStratigy = (val: string) => {
    return val;
};

const parseStratigy = (val: string, numeric?: boolean) => {
    return numeric ? numericStratigy(val) : stringStratigy(val);
};

export const getNumericPattern = (precision: number) => new RegExp(`^[0-9]*((\\.|,)[0-9]{0,${precision}})?$`);


const TextField: React.FC<TextFieldPropsType> = ({
    inputRef,
    numeric,
    numericPrecision = 3,
    maxLength = 120,
    onChange,
    ...props
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const usedPattern = (numeric && getNumericPattern(numericPrecision));

        if (usedPattern && !usedPattern.test(e.target.value?.toString())) {
            return;
        }

        e.target.value = parseStratigy(e.target.value, numeric);

        onChange?.(e);
    };

    const InputProps = {
        ...(props.InputProps ?? {}),
        inputProps: {
            maxLength: maxLength,
            ...(props.inputProps ?? {}),
            ...(props.InputProps?.inputProps ?? {}),
        },
    };

    return (
        <MuiTextField
            {...props}
            onChange={handleChange}
            ref={inputRef}
            InputProps={InputProps}
        />
    );
};

export default TextField;

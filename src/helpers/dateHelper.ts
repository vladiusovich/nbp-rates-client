import dayjs from "dayjs";

const defaultDateFormat = "DD-MM-YYYY";
const defaultTimeFormat = "HH:mm:ss";

const formatValue = (dateString: string, format: string): string => {
    if (
        typeof dateString !== "string"
        && !(dateString as unknown instanceof Date)
    ) {
        return dateString;
    }

    const dayJsValue = dayjs(dateString);
    if (!dayJsValue.isValid()) {
        return dateString;
    }

    return dayJsValue.format(format);
};

export const getDisplayedDate = (value: string, dateFormat?: string): string => {
    return formatValue(value, dateFormat ?? defaultDateFormat);
};

export const getCurrentTime = (withSeconds?: boolean): string => {
    const value = dayjs().toISOString();
    const resultTimeFormat = withSeconds ? defaultTimeFormat : defaultTimeFormat.replace(":ss", "");
    return formatValue(value, resultTimeFormat);
};

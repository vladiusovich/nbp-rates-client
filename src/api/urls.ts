import dynamicConfig from "@config";

export const baseUrl = dynamicConfig.serverUrl;

const url = (relative: string) => (`${baseUrl}/${relative}`);

export const urls = {
    exchangerates: {
        tables: url("exchangerates/tables"),
        rates: url("exchangerates/rates"),
    },
    cenyzlota: url("cenyzlota"),
}
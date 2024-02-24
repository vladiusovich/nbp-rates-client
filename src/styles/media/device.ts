import breakpoints, { DeviceType } from "./breakpoints";

export type MediaQueryStrings = {
    [K in DeviceType]: string;
};

export const createMediaQueries = (breakpoints: Record<DeviceType, number>): MediaQueryStrings => {
    return Object.entries(breakpoints).reduce<MediaQueryStrings>((acc, [key, value]) => {
        // Here, `key` is typed as DeviceType and `acc` as MediaQueryStrings
        acc[key as DeviceType] = `(min-width: ${value}px)`;
        return acc;
    }, {} as MediaQueryStrings);
};

export const device = createMediaQueries(breakpoints);

export default device;
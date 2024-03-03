export type DeviceType = "xs" | "sm" | "md" | "lg" | "xl";

const breakpoints: Record<DeviceType, number> = {
    xs: 0,
    sm: 800,
    md: 1024,
    lg: 1400,
    xl: 1920,
};

export default breakpoints;
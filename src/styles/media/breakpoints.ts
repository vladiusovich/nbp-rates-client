export type DeviceType = "xs" | "sm" | "md" | "lg";

const breakpoints: Record<DeviceType, number> = {
    xs: 800,
    sm: 1024,
    md: 1400,
    lg: 1920,
};

export default breakpoints;
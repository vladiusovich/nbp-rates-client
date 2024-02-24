export type DeviceType = "mobile" | "tablet" | "laptop" | "desktop";

const breakpoints: Record<DeviceType, number> = {
    mobile: 800,
    tablet: 1024,
    laptop: 1400,
    desktop: 1920,
};

export default breakpoints;
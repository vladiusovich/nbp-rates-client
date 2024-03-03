export const changeColorAlpha = (rgba: string, alpha: number): string => {
    const parts = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.?\d*))?\)/);
    if (!parts) {
      return rgba;
    }

    return `rgba(${parts[1]}, ${parts[2]}, ${parts[3]}, ${alpha})`;
  };
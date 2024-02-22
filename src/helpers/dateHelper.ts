
const pad = (num: number): string => num.toString().padStart(2, '0');

export const getCurrentTime = (): string => {
    const now = new Date();

    const hours = pad(now.getHours());
    const minutes = pad(now.getMinutes());

    return `${hours}:${minutes}`;
  };

export const getCurrentDateTime = (): string => {
    const now = new Date();

    const day = pad(now.getDate());
    const month = pad(now.getMonth() + 1); // getMonth() returns 0-11
    const year = now.getFullYear();
    const time = getCurrentTime();

    return `${day}-${month}-${year}, ${time}`;
};

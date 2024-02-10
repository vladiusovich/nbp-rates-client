import useSwr from 'swr'
import fetcher from './fetcher';

type RequestStateType<T> = {
    data?: T;
    error: any;
    isLoading: boolean;
};

type RequestPayloadType = {
    [s: string]: string;
};

const generateParams = (payload: RequestPayloadType): string => {
    const values = Object.values(payload);

    const searchParams = values.join("/")

    return "/" + searchParams;
}

export const useRequest = <T>(url: string, payload?: RequestPayloadType) => {
    if (!url) {
        throw new Error('Path is required');
    }

    const searchUrl = payload ? generateParams(payload) : "";

    return useSwr<T, Error>(url + searchUrl, fetcher);
}
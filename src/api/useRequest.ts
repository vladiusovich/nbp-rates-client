import useSwr from 'swr'

type RequestStateType<T> = {
    data?: T;
    error: any;
    isLoading: boolean;
};

type RequestPayloadType = {
    [s: string]: string;
};

const fetcher = (url: string): Promise<any> => fetch(url).then((res) => res.json());


const generateParams = (payload: RequestPayloadType): string => {
    const values = Object.values(payload);

    const searchParams = values.join("/")

    return "/" + searchParams;
}
export const useRequest = <T>(url: string, payload?: RequestPayloadType): RequestStateType<T> => {
    if (!url) {
        throw new Error('Path is required');
    }

    const searchUrl = payload ? generateParams(payload) : "";

    const rr = url + searchUrl;

    console.log(rr);

    return useSwr<T>(rr, fetcher);
}
import { useEffect, useRef, useMemo } from 'react';
import { debounce } from 'lodash';

type CallbackFunction = (...args: any[]) => any;

const useDebounce = <T extends CallbackFunction>(callback: T, delay: number = 300): (() => void) => {
    const ref = useRef<T>();

    useEffect(() => {
        ref.current = callback;
    }, [callback]);

    const debouncedCallback = useMemo(() => {
        const func = (...args: Parameters<T>) => {
            ref.current?.(...args);
        };

        return debounce(func, delay);
    }, [delay]);

    return debouncedCallback;
};

export default useDebounce;

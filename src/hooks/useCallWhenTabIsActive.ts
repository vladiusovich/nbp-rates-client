import { useEffect } from 'react';

const useCallWhenTabIsActive = (callback: () => void) => {
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                callback();
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        if (document.visibilityState === 'visible') {
            callback();
        }

        return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
    }, [callback]);
};

export default useCallWhenTabIsActive;

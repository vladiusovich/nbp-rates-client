type AnyFunction = (...args: any[]) => any;

function debounce<F extends AnyFunction>(func: F, waitMilliseconds = 0): (this: ThisParameterType<F>, ...args: Parameters<F>) => void {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => func.apply(this, args), waitMilliseconds);
    };
}

export default debounce;
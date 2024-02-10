const fetcher = async (url: string): Promise<any> => {
    const res = await fetch(url);

    // we still try to parse and throw it.
    if (!res.ok) {
        const error = new Error('An error occurred while fetching the data.')
        error.message = res.status.toString();
        throw error;
    };

    return res.json();

};


export default fetcher;
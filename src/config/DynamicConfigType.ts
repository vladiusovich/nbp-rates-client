declare global {
    interface DynamicConfigType {
        serverUrl: string;
        visibleCurrencies: string[];
    }
}

export default DynamicConfigType;
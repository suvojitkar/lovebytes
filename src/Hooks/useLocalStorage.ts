const useLocalStorage = () => {
    const setDataInLocalStore = (key: string, value: any) => {
        localStorage.setItem(key, JSON.stringify(value));
    }

    const getDataFromLocalStore = (key: string, defaultVal: any) => {
        if (localStorage.getItem(key) === null || localStorage.getItem(key) === undefined) {
            setDataInLocalStore(key, defaultVal);
        }
        const data: any = localStorage.getItem(key);
        return JSON.parse(data);
    }

    const removeDataFromLocalStore = (key: string) => {
        localStorage.removeItem(key);
    }

    return {setDataInLocalStore, getDataFromLocalStore, removeDataFromLocalStore}
}

export { useLocalStorage };
import { useState } from "react";

const useSearch = () => {
    const [searchText, setSearchText] = useState<any>("");

    return {searchText, setSearchText}
}

export { useSearch };
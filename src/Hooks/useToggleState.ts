import { useState } from "react";

const useToggleState = () => {
    const [checked, setChecked] = useState(false);
    return { checked, setChecked };
}

export { useToggleState };
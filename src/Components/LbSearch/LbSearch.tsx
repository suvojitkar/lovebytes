import { TextField } from "@mui/material";
import { searchContext } from "App";
import { useContext } from "react";

const LbSearch = () => {
    const { setSearchText } = useContext(searchContext);
    
    return <TextField id="outlined-basic" label="What would you like to have today?" variant="outlined" style={{ width: "100%" }} onChange={(e)=>{setSearchText(e.target.value)}} />
}

export { LbSearch };
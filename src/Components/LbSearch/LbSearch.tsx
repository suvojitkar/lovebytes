import { TextField } from "@mui/material";
import { memo } from "react";

const LbSearch = memo((props: any) => {
    return <TextField id="outlined-basic" label="What would you like to have today?" variant="outlined" style={{ width: "100%" }} onChange={(e) => { props.setSearchFn(e.target.value) }} />
});

export { LbSearch };
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { toggleContext } from "App";
import { useContext } from "react";

const LbToggle = () => {
  const { checked, setChecked } = useContext(toggleContext);
  return <FormGroup>
    <FormControlLabel
      control={<Switch color="success" checked={checked} onChange={(e)=>setChecked(e.target.checked)}/>}
      label="VEG"
    />
    </FormGroup>
};

export { LbToggle };
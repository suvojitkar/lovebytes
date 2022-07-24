import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { memo } from "react";

const LbToggle = memo((props: any) => {
  return <FormGroup>
    <FormControlLabel
      control={<Switch color="success" checked={props.isChecked} onChange={(e)=>props.updateToggleCheck(e.target.checked)}/>}
      label="VEG"
    />
    </FormGroup>
});

export { LbToggle };
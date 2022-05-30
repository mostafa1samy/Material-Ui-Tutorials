import { Box, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";

const MuiSele = () => {
  const [sel, setSel] = useState([]);
  console.log({ sel });
  const handle = (e) => {
    const val = e.target.value;
    setSel(typeof val === "string" ? val.split(",") : val);
    // console.log(e.target.value);
  };

  return (
    <Box width="250px">
      <TextField
        color="info"
        helperText="please select your country"
        select
        SelectProps={{
          multiple: true,
        }}
        label="select conutry"
        fullWidth
        value={sel}
        onChange={handle}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Austraia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSele;

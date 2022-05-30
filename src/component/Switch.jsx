import { Box, FormControlLabel, Switch } from "@mui/material";
import React, { useState } from "react";

const Switc = () => {
  const [ch, setCh] = useState(false);
  const hand = (e) => {
    setCh(e.target.checked);
  };
  console.log({ ch });
  return (
    <Box>
      <FormControlLabel
        label="dark Mode"
        control={<Switch checked={ch} onChange={hand} color="success " />}
      />
    </Box>
  );
};

export default Switc;

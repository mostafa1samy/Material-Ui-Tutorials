import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const Redio = () => {
  const [value, setValue] = useState("");
  const handle = (e) => {
    setValue(e.target.value);
  };
  console.log({ value });
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-exprenece">years of experience</FormLabel>
        <RadioGroup
          aria-labelledby="job-exprenece"
          name="experence"
          value={value}
          onChange={handle}
        >
          <FormControlLabel
            control={<Radio color="secondary" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel
            control={<Radio color="secondary" />}
            label="0-4"
            value="0-4"
          />
          <FormControlLabel
            control={<Radio color="secondary" />}
            label="0-3"
            value="0-3"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default Redio;

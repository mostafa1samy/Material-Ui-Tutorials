import { Autocomplete, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
const skills = ["Html", "Css", "Javascript", "React"];
const Autocom = () => {
  const [value, setvalue] = useState([]);

  console.log({ value });
  const handle = (e, v) => {
    setvalue(typeof v === "string" ? v.split(",") : v);
    // console.log(e.target.value);
  };
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        multiple
        options={skills}
        renderInput={(params) => <TextField {...params} label="skill" />}
        value={value}
        onChange={handle}
      />
    </Stack>
  );
};

export default Autocom;

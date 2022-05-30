import React, { useState } from "react";
import { InputAdornment, Stack, TextField } from "@mui/material";

const TextFiel = () => {
  const [input, setInput] = useState();
  return (
    <Stack spacing={4}>
      <Stack spacing={4} direction="row">
        <TextField label="name" variant="outlined" color="info"></TextField>
        <TextField
          label="name"
          variant="standard"
          color="error"
          required
        ></TextField>
        <TextField label="name" variant="filled" color="secondary"></TextField>
        <TextField
          label="name"
          variant="filled"
          color="secondary"
          type="password"
          helperText="enter data"
          InputProps={{
            startAdornment: <InputAdornment position="start">%</InputAdornment>,
          }}
        ></TextField>
        <TextField
          label="name"
          variant="filled"
          color="secondary"
          InputProps={{ readOnly: true }}
        ></TextField>
      </Stack>
      <Stack>
        <TextField
          label="username"
          variant="outlined"
          error={!input}
          helperText={!input ? "Required" : "not show to any one"}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></TextField>
      </Stack>
    </Stack>
  );
};

export default TextFiel;

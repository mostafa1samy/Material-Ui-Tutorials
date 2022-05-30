import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const CheckBox = () => {
  const [acc, setAcc] = useState(false);
  const handle = (e) => {
    setAcc(e.target.checked);
  };
  const [skill, setSkill] = useState([]);
  const hand = (e) => {
    const index = skill.indexOf(e.target.value);
    if (index === -1) {
      setSkill([...skill, e.target.value]);
    } else {
      setSkill(skill.filter((sk) => sk !== e.target.value));
    }
  };
  console.log({ skill });
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="i accept terms and condition"
          control={<Checkbox checked={acc} onChange={handle} />}
        ></FormControlLabel>
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="css"
              control={
                <Checkbox
                  checked={skill.includes("css")}
                  value="css"
                  onChange={hand}
                />
              }
            />
            <FormControlLabel
              label="html"
              control={
                <Checkbox
                  checked={skill.includes("html")}
                  value="html"
                  onChange={hand}
                />
              }
            />
            <FormControlLabel
              label="javascript"
              control={
                <Checkbox
                  checked={skill.includes("javascript")}
                  value="javascript"
                  onChange={hand}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default CheckBox;

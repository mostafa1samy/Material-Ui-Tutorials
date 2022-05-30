import React, { useState } from "react";
import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { faInfo } from "@fortawesome/free-solid-svg-icons/faInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Butto = () => {
  const [formats, setFormats] = useState("");
  const handlechang = (e) => {
    setFormats(e.target.value);
  };
  console.log(formats);
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text">click</Button>
        <Button variant="contained">click</Button>
        <Button variant="outlined">click</Button>
      </Stack>
      <Stack spacing={4} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Stack display="block" spacing={3}>
        <Button variant="contained" size="small" color="primary">
          Small
        </Button>
        <Button variant="contained" size="large" color="primary">
          Large
        </Button>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          startIcon={<SendIcon />}
        >
          Medain
        </Button>
        <IconButton color="primary">
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack display="block" spacing={3}>
        <Button
          variant="contained"
          startIcon={<FontAwesomeIcon icon={faInfo} />}
        >
          Example
        </Button>
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          disableElevation
        >
          <Button>go</Button>
          <Button>back</Button>
          <Button>done</Button>
        </ButtonGroup>
      </Stack>
      <Stack display="block" spacing={3}>
        <ToggleButtonGroup
          color="primary"
          orientation="vertical"
          value={formats}
          onChange={handlechang}
          exclusive
        >
          <ToggleButton value="bold">bold</ToggleButton>
          <ToggleButton value="italc">italic</ToggleButton>
          <ToggleButton value="underline"> underline</ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default Butto;

import { Link, Stack } from "@mui/material";
import React from "react";

const MuiLink = () => {
  return (
    <Stack direction="row" m={2} spacing={2}>
      <Link href="#">Link</Link>
      <Link href="#" color="secondary" underline="none" variant="body1">
        Link
      </Link>
    </Stack>
  );
};

export default MuiLink;

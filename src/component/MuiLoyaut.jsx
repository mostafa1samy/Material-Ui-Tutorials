import React from "react";
import { Box, Divider, Grid, Paper, Stack } from "@mui/material";

const MuiLoyaut = () => {
  return (
    <Paper sx={{ padding: "30px" }} elevation={4}>
      <Stack
        sx={{
          border: "3px solid",
        }}
        // default  direction: "column" can be reverse,
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
        display="flex"
      >
        <Box
          //component='span'
          sx={{
            backgroundColor: "primary.light.main",
            height: "100px",
            width: "100px",
            color: "white",
            "&:hover": {
              backgroundColor: "primary.light.light",
            },
          }}
        >
          mostafa
        </Box>
        <Box
          display="flex"
          width="100px"
          height="100px"
          bgcolor="success.light"
        >
          mmmm
        </Box>
      </Stack>
      <Grid container my={2} rowSpacing={2} columnSpacing={2}>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            item1
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            item2
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            item3
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            item4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiLoyaut;

import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
const MuiBreadCrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs
        aria-label="breadcrumbs"
        separator="/"
        maxItems={3}
        itemsAfterCollapse={2}
        //itemsBeforeCollapse={2}
      >
        <Link href="#" underline="hover">
          Home
        </Link>
        <Link href="#" underline="hover">
          Category
        </Link>
        <Link href="#" underline="hover">
          About
        </Link>
        <Link href="#" underline="hover">
          Contact
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};
export default MuiBreadCrumbs;

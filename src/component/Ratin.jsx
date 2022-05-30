import React, { useState } from "react";
import { Stack, Rating } from "@mui/material";

const Ratin = () => {
  const [val, setVal] = useState(null);
  const handl = (e) => {
    setVal(e.target.value);
  };
  console.log({ val });
  return (
    <Stack>
      <Rating
        value={val}
        onChange={handl}
        precision={0.5}
        // readonly icon={} emptyIcon={} size="" color="" highlightSelectedOnly
      />
    </Stack>
  );
};

export default Ratin;

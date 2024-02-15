import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";

const ReferralBox = ({ setReferral, createReferrals }) => (
  <form onSubmit={createReferrals}>
    <TextField
      className="text"
      id="search-bar"
      label="Enter email to send referral to"
      placeholder="Search..."
      size="small"
      variant="outlined"
      onInput={e => {
        setReferral(e.target.value);
      }}
    />
    <IconButton aria-label="search" type="submit">
      <SearchIcon style={{ fill: "blue" }} />
    </IconButton>
  </form>
);

export default ReferralBox;

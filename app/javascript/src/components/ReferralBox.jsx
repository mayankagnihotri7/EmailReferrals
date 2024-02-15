import React from "react";

import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
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
    <Button
      endIcon={<SendIcon />}
      size="small"
      sx={{ ml: 1 }}
      type="submit"
      variant="contained"
    >
      Invite users
    </Button>
  </form>
);

export default ReferralBox;

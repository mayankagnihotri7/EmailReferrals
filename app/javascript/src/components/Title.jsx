import React from "react";

import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

const Title = props => (
  <Typography gutterBottom color="primary" component="h2" variant="h6">
    {props.children}
  </Typography>
);

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;

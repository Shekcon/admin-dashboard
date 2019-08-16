import React from "react";
import { withStyles } from "@material-ui/core/styles";
import LaunchIcon from "@material-ui/icons/Launch";

const styles = {
  link: {
    textDecoration: "none"
  },
  icon: {
    width: "0.5em",
    paddingLeft: 2
  }
};

const CusLinkField = ({ record = {}, source, classes }) => {
  return (
    <a
      href={`https://${record[source]}`}
      className={classes.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {record[source]}
      <LaunchIcon className={classes.icon} />
    </a>
  );
};

export default withStyles(styles)(CusLinkField);

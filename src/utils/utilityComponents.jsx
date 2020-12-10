import React from "react";
import { green } from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export const Icon = ({ icon }) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      color={green}
      style={{ marginRight: "10px" }}
    />
  );
};

export const LinkIcon = ({ url }) => {
  return (
    <a
      href={url}
      style={{ marginLeft: "10px" }}
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={faExternalLinkAlt} style={{ cursor: "pointer" }} />
    </a>
  );
};

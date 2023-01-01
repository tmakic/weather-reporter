import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShirt } from "@fortawesome/free-solid-svg-icons";

export const ClothIcon = (props: {
  className?: string;
  width?: string;
  height?: string;
}) => {
  return (
    <FontAwesomeIcon
      className={props.className}
      style={{ width: props.width, height: props.height }}
      icon={faShirt}
    />
  );
};

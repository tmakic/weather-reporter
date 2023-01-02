import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShirt } from "@fortawesome/free-solid-svg-icons";
import { roundNum } from "utils/NumberUtils";
import { tempTypeLabel } from "utils/WeatherUtils";
import { TempType } from "types";

import "styles/ClothSearch.scss";

export const ClothSearch = (props: {
  className?: string;
  width?: string;
  height?: string;
  type?: TempType;
  temp: number;
}) => {
  return (
    <a
      className={"ClothSearch" + (props.className ? ` ${props.className}` : "")}
      href={`https://www.google.com/search?q=${tempTypeLabel(
        props.type
      )}気温${roundNum(props.temp)}度+服装`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon
        className="ClothSearchIcon"
        style={{ width: props.width, height: props.height }}
        icon={faShirt}
      />
    </a>
  );
};

import React from "react";
import { roundNum } from "utils/NumberUtils";
import { ClothSearch } from "components/Atoms/ClothSearch";
import { TempType } from "types";

import "styles/StatisticsPanel.scss";

export const StatisticsPanel = ({
  title,
  temp,
  tempType
}: {
  title: string;
  temp: number;
  tempType?: TempType;
}) => {
  return (
    <div className="StatisticsPanel">
      <span className="StatisticsPanel__Title">{title}</span>
      <span className="StatisticsPanel__Content">
        <span className="StatisticsPanel__Content__Num">{roundNum(temp)}</span>
        <span className="StatisticsPanel__Content__Unit">℃</span>
        <ClothSearch
          className="StatisticsPanel__Content__ClothSearch"
          width="24px"
          height="24px"
          type={tempType}
          temp={temp}
        />
      </span>
    </div>
  );
};

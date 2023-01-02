import React from "react";

export const LabelContent = ({
  x,
  y,
  value
}: {
  x?: number | string;
  y?: number | string;
  value?: number | string;
}) => {
  if (!x || !y) return <g></g>;

  return (
    <g>
      <text x={Number(x)} y={Number(y) - 10} fill="#48484A" textAnchor="middle">
        {value}
      </text>
    </g>
  );
};

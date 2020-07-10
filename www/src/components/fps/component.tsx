import React from "react";

type Props = {
  fps: number;
  mean: number;
  min: number;
  max: number;
};

export const Fps: React.FC<Props> = (props) => {
  return (
    <div>
      <p>Frames per Second:</p>
      <ul>
        <li>latest = {Math.round(props.fps)}</li>
        <li>avg of last 100 = {Math.round(props.mean)}</li>
        <li>min of last 100 = {Math.round(props.min)}</li>
        <li>max of last 100 = {Math.round(props.max)}</li>
      </ul>
    </div>
  );
};

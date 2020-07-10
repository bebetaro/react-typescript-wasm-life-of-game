import React from "react";
import { Universe } from "wasm-game-of-life";
import { Button } from "../button";
import { Canvas } from "../canvas";
import { Fps } from "../fps";
import styles from "./app.module.css";

type Props = {
  universe: Universe;
  memory: WebAssembly.Memory;
  isPlay: boolean;
  numerics: {
    fps: number;
    mean: number;
    min: number;
    max: number;
  };
  onClickPlay: () => void;
  calculate: () => void;
};

export const App: React.FC<Props> = (props) => {
  return (
    <div className={styles.root}>
      <Fps
        fps={props.numerics.fps}
        max={props.numerics.max}
        min={props.numerics.min}
        mean={props.numerics.mean}
      />
      <Button isPlay={props.isPlay} onClick={props.onClickPlay} />
      <Canvas
        universe={props.universe}
        memory={props.memory}
        isPlay={props.isPlay}
        calculate={props.calculate}
      />
    </div>
  );
};

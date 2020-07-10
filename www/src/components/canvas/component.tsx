import React from "react";
import { Universe } from "wasm-game-of-life";
import { useRenderGame } from "./hooks";

type Props = {
  isPlay: boolean;
  memory: WebAssembly.Memory;
  universe: Universe;
  calculate: () => void;
};

export const Canvas: React.FC<Props> = ({
  universe,
  memory,
  isPlay,
  calculate,
}) => {
  const { onToggleCanvas, canvasRef } = useRenderGame(
    universe,
    memory,
    isPlay,
    calculate
  );

  return (
    <canvas
      ref={canvasRef}
      onClick={onToggleCanvas(canvasRef.current)}
    ></canvas>
  );
};

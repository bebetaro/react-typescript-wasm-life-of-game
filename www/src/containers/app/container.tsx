import React, { useState, useCallback, useEffect } from "react";
import { Universe } from "wasm-game-of-life";
import { App } from "../../components/app";
import { useCalculateNumerics } from "./hooks";

export const AppContainer = () => {
  const [universe, setUniverse] = useState<Universe>();
  const [memory, setMemory] = useState<WebAssembly.Memory>();
  const [isPlay, setIsPlay] = useState<boolean>(true);

  const onClickPlay = useCallback(() => {
    setIsPlay((prevState) => !prevState);
  }, []);

  useEffect(() => {
    try {
      import("wasm-game-of-life/wasm_game_of_life").then((wasm) => {
        const width = window.matchMedia("(min-width:640px)").matches ? 96 : 64;
        const height = window.matchMedia("(min-width:640px)").matches ? 96 : 64;
        setUniverse(wasm.Universe.new(width, height));
      });

      import("wasm-game-of-life/wasm_game_of_life_bg.wasm").then((wasmBg) => {
        setMemory(wasmBg.memory);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const { numerics, calculate } = useCalculateNumerics();
  if (!universe || !memory) {
    return <div>Loading...</div>;
  } else {
    return (
      <App
        universe={universe}
        memory={memory}
        onClickPlay={onClickPlay}
        isPlay={isPlay}
        numerics={numerics}
        calculate={calculate}
      />
    );
  }
};

import { useRef, useCallback, useState } from "react";

export const useCalculateNumerics = () => {
  const frames: number[] = [];
  const lastFrameTimeStamp = useRef<number>(performance.now());
  const [fps, setFps] = useState<number>(0);
  const [mean, setMean] = useState<number>(0);
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(0);

  const calculate = useCallback(() => {
    const now = performance.now();
    const diff = now - lastFrameTimeStamp.current;
    lastFrameTimeStamp.current = now;
    const temp = (1 / diff) * 1000;
    setFps(temp);

    frames.push(temp);
    if (frames.length > 100) {
      frames.shift();
    }

    let min = Infinity;
    let max = -Infinity;
    let sum = 0;

    for (let index = 0; index < frames.length; index++) {
      sum += frames[index];
      min = Math.min(min, frames[index]);
      max = Math.max(max, frames[index]);
    }

    setMax(max);
    setMin(min);
    setMean(sum / frames.length);
  }, []);

  const numerics = {
    fps,
    mean,
    min,
    max,
  };

  return { calculate, numerics };
};

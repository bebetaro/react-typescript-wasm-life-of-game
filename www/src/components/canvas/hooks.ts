import { useRef, useEffect, useCallback } from "react";
import { getSizes, drawCells, drawGrid } from "./utils";
import { Universe } from "wasm-game-of-life";
import { CELL_SIZE } from "./constants";

export const useRenderGame = (
  universe: Universe,
  memory: WebAssembly.Memory,
  isPlay: boolean,
  calculate: () => void
) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationId = useRef<number>(Infinity);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const { canvas, size } = getSizes(canvasRef.current, universe);
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const renderLoop = () => {
      calculate();
      universe.tick();
      drawGrid(ctx, size);
      drawCells(universe, memory, size, ctx);
      if (isPlay) {
        animationId.current = requestAnimationFrame(renderLoop);
      } else {
        cancelAnimationFrame(animationId.current);
        animationId.current = Infinity;
      }
    };
    drawGrid(ctx, size);
    drawCells(universe, memory, size, ctx);

    renderLoop();
  }, [universe, memory, isPlay, calculate]);

  const onToggleCanvas = useCallback(
    (_canvas: HTMLCanvasElement | null) =>
      _canvas
        ? (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
            const boundingRect = _canvas.getBoundingClientRect();
            const { size } = getSizes(_canvas, universe);
            const scaleX = _canvas.width / boundingRect.width;
            const scaleY = _canvas.height / boundingRect.height;

            const canvasLeft = (event.clientX - boundingRect.left) * scaleX;
            const canvasTop = (event.clientY - boundingRect.top) * scaleY;

            const row = Math.min(
              Math.floor(canvasTop / (CELL_SIZE + 1)),
              size.height - 1
            );
            const col = Math.min(
              Math.floor(canvasLeft / (CELL_SIZE + 1)),
              size.width - 1
            );
            const ctx = _canvas.getContext("2d") as CanvasRenderingContext2D;
            universe.toggle_cell(row, col);
            drawGrid(ctx, size);
            drawCells(universe, memory, size, ctx);
          }
        : () => {},
    []
  );
  return { onToggleCanvas, canvasRef };
};

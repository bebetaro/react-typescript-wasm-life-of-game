import { CELL_SIZE, GRID_COLOR, DEAD_COLOR, ALIVE_COLOR } from "./constants";
import { Universe } from "wasm-game-of-life";

export const getSizes = (canvas: HTMLCanvasElement, universe: Universe) => {
  const size = {
    width: universe.width(),
    height: universe.height(),
  };

  canvas.height = (CELL_SIZE + 1) * size.height + 1;
  canvas.width = (CELL_SIZE + 1) * size.width + 1;
  return { canvas, size };
};

export const drawGrid = (
  ctx: CanvasRenderingContext2D,
  size: { width: number; height: number }
) => {
  ctx.beginPath();
  ctx.strokeStyle = GRID_COLOR;

  // Vertical lines.
  for (let i = 0; i <= size.width; i++) {
    ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);
    ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * size.height + 1);
  }

  // Horizontal lines.
  for (let j = 0; j <= size.height; j++) {
    ctx.moveTo(0, j * (CELL_SIZE + 1) + 1);
    ctx.lineTo((CELL_SIZE + 1) * size.width + 1, j * (CELL_SIZE + 1) + 1);
  }

  ctx.stroke();
};

export const getIndex = (row: number, column: number, width: number) => {
  return row * width + column;
};

export const drawCells = (
  universe: Universe,
  memory: WebAssembly.Memory,
  size: { width: number; height: number },
  ctx: CanvasRenderingContext2D
) => {
  const cellsPtr = universe.cells();
  // Get all memory buffer and range of this life of game
  // cellPtr is start index and game buffer lasts until width * height(= 4096) items
  // So here Uint8Array which is length 4096 and starts from cellsPtr is created
  const cells = new Uint8Array(
    memory.buffer,
    cellsPtr,
    size.width * size.height
  );

  ctx.beginPath();

  ctx.fillStyle = ALIVE_COLOR;

  for (let row = 0; row < size.height; row++) {
    for (let col = 0; col < size.width; col++) {
      const idx = getIndex(row, col, size.width);
      if (cells[idx] === 0) continue;

      ctx.fillRect(
        col * (CELL_SIZE + 1) + 1,
        row * (CELL_SIZE + 1) + 1,
        CELL_SIZE,
        CELL_SIZE
      );
    }
  }

  ctx.fillStyle = DEAD_COLOR;

  for (let row = 0; row < size.height; row++) {
    for (let col = 0; col < size.width; col++) {
      const idx = getIndex(row, col, size.width);
      if (cells[idx] === 1) continue;

      ctx.fillRect(
        col * (CELL_SIZE + 1) + 1,
        row * (CELL_SIZE + 1) + 1,
        CELL_SIZE,
        CELL_SIZE
      );
    }
  }

  ctx.stroke();
};

import CanvasRenderer from "./renderers/canvas/CanvasRenderer";
import WebGLRenderer from "./renderers/webgl/WebGLRenderer";

export function autoRenderer(options) {
  const useGL = options && options.useGL;
  console.log(useGL);

  if (useGL) return new WebGLRenderer(options);
  return new CanvasRenderer(options);
}

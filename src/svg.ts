export const getViewbox = (svg: SVGElement) => {
  const viewboxStr = svg.getAttribute("viewBox");
  if (!viewboxStr) {
    return null;
  }

  const [x, y, width, height] = viewboxStr.split(" ").map(Number);
  return { x, y, width, height };
};

type GetPointAtLengthOptions = {
  scale?: number;
  offset?: {
    x?: number;
    y?: number;
    angle?: number;
  };
};

// Augmented getPointAtLength, returning angle, and allowing scaling
export const getPointAtLength = (
  path: SVGPathElement,
  length: number,
  { scale = 1, offset = {} }: GetPointAtLengthOptions
) => {
  const point = path.getPointAtLength(length);
  const nextPoint = path.getPointAtLength(length + 1);
  const scaledPoint = {
    x: point.x * scale + (offset.x ?? 0),
    y: point.y * scale + (offset.y ?? 0),
  };

  let angle =
    (Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * 180) / Math.PI;
  angle += offset.angle ?? 0;
  return { point: scaledPoint, angle };
};

export const getSvgScale = (svg: SVGElement) => {
  const viewbox = getViewbox(svg);
  if (!viewbox) {
    return 1;
  }

  const { width, height } = svg.getBoundingClientRect();
  return Math.min(width / viewbox.width, height / viewbox.height);
};

export const getPathOffset = (wrapper: Element, path: SVGPathElement) => {
  const svg = path.ownerSVGElement;
  if (!svg) {
    return { x: 0, y: 0 };
  }

  const { left, top } = svg.getBoundingClientRect();
  const { left: wrapperLeft, top: wrapperTop } =
    wrapper.getBoundingClientRect();
  return {
    x: left - wrapperLeft,
    y: top - wrapperTop,
  };
};

export const getPathScale = (path: SVGPathElement) => {
  const svg = path.ownerSVGElement;
  if (!svg) {
    return 1;
  }

  return getSvgScale(svg);
};

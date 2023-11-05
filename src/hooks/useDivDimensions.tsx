import React, { useState, useEffect } from 'react';

const useDivDimensions = (
  ref: React.MutableRefObject<HTMLDivElement | null>
) => {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((event) => {
      // Depending on the layout, you may need to swap inlineSize with blockSize
      // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentBoxSize
      setWidth(event[0].contentBoxSize[0].inlineSize);
      setHeight(event[0].contentBoxSize[0].blockSize);
    });

    if (ref && ref.current) {
      resizeObserver.observe(ref.current);
    }
  }, [ref]);

  return { width, height };
};

export default useDivDimensions;

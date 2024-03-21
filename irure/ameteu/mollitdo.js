function handleTouchStart(evt) {
  if (evt.touches.length === 1) {
    handleSingleTouchStart(evt);
  } else if (evt.touches.length === 2) {
    handleDoubleTouchStart(evt);
  }
}

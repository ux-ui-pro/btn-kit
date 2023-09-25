const ripple = (button) => {
  const btn = button;

  btn.addEventListener("pointerdown", (event) => {
    const { clientX, clientY } = event.touches ? event.touches[0] : event;
    const { left, top, width, height } = btn.getBoundingClientRect();
    const distance = Math.sqrt(width ** 2 + height ** 2) * 2;

    btn.style.cssText = `--s: 0; --o: 1;`;
    btn.offsetTop;
    btn.style.cssText = `--t: 1; --o: 0; --d: ${distance.toFixed(1)}; --x:${(
      clientX - left
    ).toFixed(1)}; --y:${(clientY - top).toFixed(1)};`;
  });
};

export default ripple;

const ripple = (button) => {
	button.addEventListener("pointerdown", (event) => {
		const { clientX, clientY } = event.touches ? event.touches[0] : event;
		const { left, top, width, height } = button.getBoundingClientRect();
		const distance = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) * 2;

		button.style.cssText = `--s: 0; --o: 1;`;
		button.offsetTop;
		button.style.cssText = `--t: 1; --o: 0; --d: ${distance.toFixed(1)}; --x:${(
			clientX - left
		).toFixed(1)}; --y:${(clientY - top).toFixed(1)};`;
	});
};

export default ripple;

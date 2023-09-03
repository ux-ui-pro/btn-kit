export default class ButtonRipple {
	constructor() {
		this.init()
	}

	ripple(e) {
		const button = e.target.closest('.btn--ripple')

		if (!button) return

		const computedStyle = getComputedStyle(button)
		const width = parseFloat(computedStyle.width)
		const height = parseFloat(computedStyle.height)
		const diameter = Math.max(width, height)
		const radius = diameter / 2
		const vpOffset = button.getBoundingClientRect()
		const top = e.pageY - pageYOffset - (vpOffset.top + radius)
		const left = e.pageX - pageXOffset - (vpOffset.left + radius)

		button.style.cssText = `--size: ${Math.round(diameter)}px; --top: ${Math.round(top)}px; --left: ${Math.round(left)}px;`
		button.classList.remove('btn--rippled')

		requestAnimationFrame(() => {
			button.classList.add('btn--rippled')
		})
	}

	init() {
		document.addEventListener('pointerdown', this.ripple.bind(this))
	}
}
<script>
import { ref, computed, onMounted } from 'vue'
import ButtonRipple from '../utils/ButtonRipple.js'

export default {
	name: 'Button',
	props: {
		theme: {
			type: String,
			default: ''
		},
		size: {
			type: String,
			default: 'md'
		},
		shape: {
			type: String,
			default: ''
		},
		variation: {
			type: String,
			default: ''
		},
		ripple: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		progress: {
			type: Boolean,
			default: false
		},
		route: {
			type: String,
			default: ''
		},
		href: {
			type: String,
			default: ''
		}
	},
	setup(props, { emit }) {
		const buttonRef = ref(null)
		let buttonRipple = null

		const btnClass = computed(() => {
			let classes = {
				btn: true,
				'btn--sm': props.size === 'sm',
				'btn--md': props.size === 'md',
				'btn--lg': props.size === 'lg',
				'btn--rounded': props.shape === 'rounded',
				'btn--round': props.shape === 'round',
				'btn--contained': props.variation === 'contained',
				'btn--outlined': props.variation === 'outlined',
				'btn--text': props.variation === 'text',
				[`btn--theme-${props.theme}`]: props.theme !== ''
			}

			if (props.ripple) {
				classes['btn--ripple'] = true
			}

			if (props.progress) {
				classes['btn--progress'] = true
			}

			if (props.disabled) {
				classes['btn--disabled'] = true
			}

			return classes
		})

		const initRipple = () => {
			buttonRipple = new ButtonRipple()
			buttonRipple.init(buttonRef.value)
		}

		onMounted(() => {
			if (props.ripple) {
				initRipple()
			}
		})

		return {
			buttonRef,
			btnClass,
			initRipple
		}
	}
}
</script>

<template>
	<button
		v-if="!route && !href"
		:class="btnClass"
		:disabled="disabled"
	>
		<slot></slot>
	</button>
	<router-link
		v-else-if="route"
		:to="route"
		:class="btnClass"
		:disabled="disabled ? true : undefined"
	>
		<slot></slot>
	</router-link>
	<a
		v-else-if="href"
		:href="href"
		:class="btnClass"
		:disabled="disabled ? true : undefined"
	>
		<slot></slot>
	</a>
</template>

<style lang="scss">
@mixin transition {
	transition-property: background-color, color, fill, stroke, opacity, box-shadow;
	transition-duration: 225ms;
}

.btn-group {
	display: flex;
	align-items: center;
	flex-wrap: wrap;

	&:not(&--merge) {
		.btn {
			&:not(:last-child) {
				margin-right: var(--vbk-group-padding, 20px);
			}
		}
	}

	&--left {
		justify-content: flex-start;
	}

	&--center {
		justify-content: center;
	}

	&--right {
		justify-content: flex-end;
	}

	&--fill {
		justify-content: space-between;

		.btn {
			flex: 1;
		}
	}

	&--merge {
		.btn {
			margin-right: 0;

			&:first-child {
				border-radius: 4px 0 0 4px;
			}

			&:last-child {
				border-radius: 0 4px 4px 0;
			}

			&:not(:last-child) {
				margin-right: -1px;
			}
		}
	}
}

.btn {
	--vbk-background: hsla(var(--vbk-background-h, 0) var(--vbk-background-s, 0%) var(--vbk-background-l, 68%) / var(--vbk-background-a, 1));
	--vbk-color: hsla(var(--vbk-color-h, 0) var(--vbk-color-s, 0%) var(--vbk-color-l, 0%) / var(--vbk-color-a, 1));

	font-family: inherit;
	font-size: var(--vbk-font-size, 16px);
	background-color: var(--vbk-background);
	color: var(--vbk-color);
	height: var(--vbk-button-size, 52px);
	overflow: hidden;
	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	border: none;
	text-decoration: none;
	text-align: center;
	text-transform: var(--vbk-text-transform, uppercase);
	white-space: nowrap;
	outline: none;
	cursor: pointer;
	touch-action: manipulation;
	user-select: none;
	line-height: 1;
	font-weight: var(--vbk-font-weight, 500);
	letter-spacing: var(--vbk-letter-spacing, .1px);
	-webkit-tap-highlight-color: transparent;
	transform: translate3d(0, 0, 0);

	@include transition;

	&:hover {
		--vbk-background-hover-s: calc(var(--vbk-background-s, 0%) - 5%);
		--vbk-background-hover-l: calc(var(--vbk-background-l, 68%) - 10%);

		&:not(.btn--outlined):not(.btn--text) {
			background-color: hsla(var(--vbk-background-h, 0) var(--vbk-background-hover-s, 0%) var(--vbk-background-hover-l, 68%) / var(--vbk-background-a, 1));
		}

		&:not(.btn--contained) {
			background-color: hsla(var(--vbk-background-h, 0) var(--vbk-background-hover-s, 0%) var(--vbk-background-hover-l, 68%) / 0.08);
		}
	}

	&:active {
		--vbk-background-active-s: calc(var(--vbk-background-s, 0%) - 7.5%);
		--vbk-background-active-l: calc(var(--vbk-background-l, 68%) - 25%);

		&:not(.btn--ripple):not(.btn--outlined):not(.btn--text) {
			background-color: hsla(var(--vbk-background-h, 0) var(--vbk-background-active-s, 0%) var(--vbk-background-active-l, 68%) / var(--vbk-background-a, 1));
		}

		&:not(.btn--ripple) {
			background-color: hsla(var(--vbk-background-h, 0) var(--vbk-background-active-s, 0%) var(--vbk-background-active-l, 68%) / .28);
		}
	}

	.label {
		position: relative;
		z-index: 1;
		margin: 0 calc(var(--vbk-button-size, 52px) / 2);

		+ [class*="icon"]:last-child {
			margin-right: calc(var(--vbk-button-size, 52px) / 2);
			margin-left: calc(var(--vbk-button-size, 52px) / 3 * -1);
			transform: translateX(calc(var(--vbk-button-size) / 8));
		}
	}

	[class*="icon"] {
		fill: var(--vbk-color);
		width: var(--vbk-icon-size, 24px);
		height: var(--vbk-icon-size, 24px);

		@include transition;

		&:first-child {
			margin: 0 calc(calc(var(--vbk-button-size, 52px) / 2) + calc(var(--vbk-icon-size, 24px) * -1 / 2));
		}

		&:not(:last-child) {
			margin-right: calc(var(--vbk-button-size, 52px) / 3 * -1);
			margin-left: calc(var(--vbk-button-size, 52px) / 2);
			transform: translateX(calc(var(--vbk-button-size) / 8 * -1));
		}
	}

	&--rounded {
		border-radius: var(--vbk-rounded-radius, 4px);
	}

	&--round {
		border-radius: var(--vbk-round-radius, 100px);
	}

	&--outlined {
		--vbk-color: var(--vbk-background);

		background-color: transparent;
		box-shadow: inset 0 0 0 var(--vbk-border-width, 1px) var(--vbk-outline-color, var(--vbk-background));

		[class*="icon"] {
			--vbk-color: var(--vbk-background);
		}
	}

	&--text {
		background-color: transparent;

		&:not(.btn--progress):not(.btn--disabled) {
			--vbk-color: var(--vbk-background);
		}
	}

	&--rippled {
		&::before {
			content: '';
			background-color: var(--vbk-ripple-background, hsl(0 0% 50%));
			width: var(--size); height: var(--size);
			min-width: var(--size); min-height: var(--size);
			position: absolute;
			top: var(--top); left: var(--left);
			border-radius: 100%;
			animation: ripple var(--vbk-ripple-speed, 750ms) cubic-bezier(0.61, 1, 0.88, 1);
			transform-origin: center;
			pointer-events: none;
			mix-blend-mode: var(--vbk-ripple-mix-blend, luminosity);
			transform: scale(0);
			opacity: var(--vbk-ripple-opacity, .8);

			@keyframes ripple {
				to {
					transform: scale(2);
					opacity: 0;
				}
			}
		}
	}

	&--progress {
		--vbk-color-a: 0;

		cursor: default;
		pointer-events: none;

		&::after {
			content: '';
			position: absolute;
			inset: 0;
			margin: auto;
			width: 24px;
			height: 24px;
			padding: 5px;
			box-sizing: border-box;
			-webkit-mask: linear-gradient(hsl(0 0% 75%) 0 0) content-box, linear-gradient(hsl(0 0% 75%) 0 0);
			mask: linear-gradient(hsl(0 0% 75%) 0 0) content-box, linear-gradient(hsl(0 0% 75%) 0 0);
			-webkit-mask-composite: xor;
			mask-composite: exclude;
			background-image: conic-gradient(from 45deg, transparent, hsl(0 0% 75%));
			border-radius: 12px;
			animation: Spin 825ms linear infinite;
			mix-blend-mode: luminosity;

			@keyframes Spin {
				to {
					transform: rotate(1turn);
				}
			}
		}
	}

	&--disabled,
	&[disabled] {
		--vbk-color-s: 0%;
		--vbk-color-l: 60%;
		--vbk-background-s: 0%;
		--vbk-background-l: 75%;

		cursor: default;
		pointer-events: none;
	}
}
</style>
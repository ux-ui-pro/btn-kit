<script>
import { ref, computed, onMounted } from "vue";
import ripple from "../utils/ripple";

export default {
  name: "AppButton",
  props: {
    theme: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "md",
    },
    shape: {
      type: String,
      default: "",
    },
    variation: {
      type: String,
      default: "",
    },
    ripple: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    progress: {
      type: Boolean,
      default: false,
    },
    route: {
      type: String,
      default: "",
    },
    href: {
      type: String,
      default: "",
    },
    forceRipple: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const buttonRef = ref(null);

    const btnClass = computed(() => {
      const classes = {
        btn: true,
        "btn--sm": props.size === "sm",
        "btn--md": props.size === "md",
        "btn--lg": props.size === "lg",
        "btn--rounded": props.shape === "rounded",
        "btn--round": props.shape === "round",
        "btn--contained": props.variation === "contained",
        "btn--outlined": props.variation === "outlined",
        "btn--text": props.variation === "text",
        [`btn--theme-${props.theme}`]: props.theme !== "",
      };

      if (props.ripple) {
        classes["btn--ripple"] = true;
      }

      if (props.progress) {
        classes["btn--progress"] = true;
      }

      if (props.disabled) {
        classes["btn--disabled"] = true;
      }

      return classes;
    });

    onMounted(() => {
      if (props.ripple || props.forceRipple) {
        ripple(buttonRef.value);
      }
    });

    return {
      buttonRef,
      btnClass,
    };
  },
};
</script>

<template>
  <button
    v-if="!route && !href"
    :class="btnClass"
    :disabled="disabled"
    ref="buttonRef"
  >
    <slot></slot>
  </button>
  <router-link
    v-else-if="route"
    :to="route"
    :class="btnClass"
    :disabled="disabled ? true : undefined"
    ref="buttonRef"
  >
    <slot></slot>
  </router-link>
  <a
    v-else-if="href"
    :href="href"
    :class="btnClass"
    :disabled="disabled ? true : undefined"
    ref="buttonRef"
  >
    <slot></slot>
  </a>
</template>

<style lang="scss">
.btn-group {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  &:not(&--merge) {
    .btn {
      &:not(:last-child) {
        margin-right: var(--bk-group-padding, 20px);
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
  --bk-background: hsla(
    var(--bk-background-h, 0) var(--bk-background-s, 0%)
      var(--bk-background-l, 68%) / var(--bk-background-a, 1)
  );
  --bk-color: hsla(
    var(--bk-color-h, 0) var(--bk-color-s, 0%) var(--bk-color-l, 0%) /
      var(--bk-color-a, 1)
  );

  font-family: inherit;
  font-size: var(--bk-font-size, 16px);
  background-color: var(--bk-background);
  color: var(--bk-color);
  height: var(--bk-button-size, 52px);
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
  text-transform: var(--bk-text-transform, uppercase);
  white-space: nowrap;
  outline: none;
  cursor: pointer;
  touch-action: manipulation;
  user-select: none;
  line-height: 1;
  font-weight: var(--bk-font-weight, 500);
  letter-spacing: var(--bk-letter-spacing, 0.1em);
  -webkit-tap-highlight-color: transparent;
  transform: translate3d(0, 0, 0);
  transition-property: background-color, color, opacity, box-shadow;
  transition-duration: 225ms;

  &:hover {
    --bk-background-hover-s: calc(var(--bk-background-s, 0%) - 5%);
    --bk-background-hover-l: calc(var(--bk-background-l, 68%) - 10%);

    &:not(.btn--outlined):not(.btn--text) {
      background-color: hsla(
        var(--bk-background-h, 0) var(--bk-background-hover-s, 0%)
          var(--bk-background-hover-l, 68%) / var(--bk-background-a, 1)
      );
    }

    &:not(.btn--contained) {
      background-color: hsla(
        var(--bk-background-h, 0) var(--bk-background-hover-s, 0%)
          var(--bk-background-hover-l, 68%) / 0.08
      );
    }
  }

  &:active {
    --bk-background-active-s: calc(var(--bk-background-s, 0%) - 7.5%);
    --bk-background-active-l: calc(var(--bk-background-l, 68%) - 25%);

    &:not(.btn--ripple):not(.btn--outlined):not(.btn--text) {
      background-color: hsla(
        var(--bk-background-h, 0) var(--bk-background-active-s, 0%)
          var(--bk-background-active-l, 68%) / var(--bk-background-a, 1)
      );
    }

    &:not(.btn--ripple) {
      background-color: hsla(
        var(--bk-background-h, 0) var(--bk-background-active-s, 0%)
          var(--bk-background-active-l, 68%) / 0.28
      );
    }
  }

  .label {
    position: relative;
    z-index: 1;
    margin: 0 calc(var(--bk-button-size, 52px) / 2);

    + [class*="icon"]:last-child {
      margin-right: calc(var(--bk-button-size, 52px) / 2);
      margin-left: calc(var(--bk-button-size, 52px) / 3 * -1);
      transform: translateX(calc(var(--bk-button-size) / 8));
    }
  }

  [class*="icon"] {
    fill: var(--bk-color);
    width: var(--bk-icon-size, 24px);
    height: var(--bk-icon-size, 24px);
    transition-property: fill, stroke;
    transition-duration: 225ms;

    &:first-child {
      margin: 0
        calc(
          calc(var(--bk-button-size, 52px) / 2) +
            calc(var(--bk-icon-size, 24px) * -1 / 2)
        );
    }

    &:not(:last-child) {
      margin-right: calc(var(--bk-button-size, 52px) / 3 * -1);
      margin-left: calc(var(--bk-button-size, 52px) / 2);
      transform: translateX(calc(var(--bk-button-size) / 8 * -1));
    }
  }

  &--rounded {
    border-radius: var(--bk-rounded-radius, 4px);
  }

  &--round {
    border-radius: var(--bk-round-radius, 100px);
  }

  &--outlined {
    --bk-color: var(--bk-background);

    background-color: transparent;
    box-shadow: inset 0 0 0 var(--bk-border-width, 1px)
      var(--bk-outline-color, var(--bk-background));
  }

  &--text {
    background-color: transparent;

    &:not(.btn--progress):not(.btn--disabled) {
      --bk-color: var(--bk-background);
    }
  }

  &--ripple {
    &::before {
      content: "";
      position: absolute;
      display: block;
      border-radius: 50%;
      pointer-events: none;

      top: calc(var(--y) * 1px);
      left: calc(var(--x) * 1px);
      width: calc(var(--d) * 1px);
      height: calc(var(--d) * 1px);

      opacity: calc(var(--o, 1) * var(--bk-ripple-opacity, 0.45));
      transition: calc(var(--t, 0) * var(--bk-ripple-duration, 750ms))
        var(--bk-ripple-easing, cubic-bezier(0.61, 1, 0.88, 1));
      transform: translate(-50%, -50%) scale(var(--s, 1));
      transform-origin: center;

      background-color: var(
        --bk-ripple-color,
        hsla(var(--bk-background-h) 20% 65% / var(--bk-background-a, 1))
      );
    }
  }

  &--progress {
    --bk-color: transparent;

    cursor: default;
    pointer-events: none;

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      margin: auto;
      width: 24px;
      height: 24px;
      padding: 5px;
      box-sizing: border-box;
      -webkit-mask:
        linear-gradient(hsl(0 0% 75%) 0 0) content-box,
        linear-gradient(hsl(0 0% 75%) 0 0);
      mask:
        linear-gradient(hsl(0 0% 75%) 0 0) content-box,
        linear-gradient(hsl(0 0% 75%) 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      background-image: conic-gradient(
        from 45deg,
        transparent,
        var(
          --bk-ripple-color,
          hsla(var(--bk-background-h) 50% 75% / var(--bk-background-a, 1))
        )
      );
      border-radius: 24px;
      animation: Spin 825ms linear infinite;

      @keyframes Spin {
        to {
          transform: rotate(1turn);
        }
      }
    }
  }

  &--disabled,
  &[disabled] {
    --bk-color-s: 0%;
    --bk-color-l: 60%;
    --bk-background-s: 0%;
    --bk-background-l: 75%;

    cursor: default;
    pointer-events: none;
  }
}
</style>

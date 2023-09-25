import { ref as h, computed as _, onMounted as m, resolveComponent as y, openBlock as d, createElementBlock as u, normalizeClass as s, renderSlot as i, createBlock as g, withCtx as B, createCommentVNode as x } from "vue";
const k = (e) => {
  const l = e;
  l.addEventListener("pointerdown", (t) => {
    const { clientX: n, clientY: o } = t.touches ? t.touches[0] : t, { left: r, top: a, width: f, height: c } = l.getBoundingClientRect(), b = Math.sqrt(f ** 2 + c ** 2) * 2;
    l.style.cssText = "--s: 0; --o: 1;", l.offsetTop, l.style.cssText = `--t: 1; --o: 0; --d: ${b.toFixed(1)}; --x:${(n - r).toFixed(1)}; --y:${(o - a).toFixed(1)};`;
  });
};
const v = (e, l) => {
  const t = e.__vccOpts || e;
  for (const [n, o] of l)
    t[n] = o;
  return t;
}, C = {
  name: "AppButton",
  props: {
    theme: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "md"
    },
    shape: {
      type: String,
      default: ""
    },
    variation: {
      type: String,
      default: ""
    },
    ripple: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    progress: {
      type: Boolean,
      default: !1
    },
    route: {
      type: String,
      default: ""
    },
    href: {
      type: String,
      default: ""
    },
    forceRipple: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const l = h(null), t = _(() => {
      const n = {
        btn: !0,
        "btn--sm": e.size === "sm",
        "btn--md": e.size === "md",
        "btn--lg": e.size === "lg",
        "btn--rounded": e.shape === "rounded",
        "btn--round": e.shape === "round",
        "btn--contained": e.variation === "contained",
        "btn--outlined": e.variation === "outlined",
        "btn--text": e.variation === "text",
        [`btn--theme-${e.theme}`]: e.theme !== ""
      };
      return e.ripple && (n["btn--ripple"] = !0), e.progress && (n["btn--progress"] = !0), e.disabled && (n["btn--disabled"] = !0), n;
    });
    return m(() => {
      (e.ripple || e.forceRipple) && k(l.value);
    }), {
      buttonRef: l,
      btnClass: t
    };
  }
}, R = ["disabled"], S = ["href", "disabled"];
function p(e, l, t, n, o, r) {
  const a = y("router-link");
  return !t.route && !t.href ? (d(), u("button", {
    key: 0,
    class: s(n.btnClass),
    disabled: t.disabled,
    ref: "buttonRef"
  }, [
    i(e.$slots, "default")
  ], 10, R)) : t.route ? (d(), g(a, {
    key: 1,
    to: t.route,
    class: s(n.btnClass),
    disabled: t.disabled ? !0 : void 0,
    ref: "buttonRef"
  }, {
    default: B(() => [
      i(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["to", "class", "disabled"])) : t.href ? (d(), u("a", {
    key: 2,
    href: t.href,
    class: s(n.btnClass),
    disabled: t.disabled ? !0 : void 0,
    ref: "buttonRef"
  }, [
    i(e.$slots, "default")
  ], 10, S)) : x("", !0);
}
const w = /* @__PURE__ */ v(C, [["render", p]]);
export {
  w as default
};

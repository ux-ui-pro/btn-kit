import { ref as u, computed as h, onMounted as _, resolveComponent as m, openBlock as s, createElementBlock as f, normalizeClass as i, renderSlot as r, createBlock as y, withCtx as g, createCommentVNode as v } from "vue";
const x = (e) => {
  e.addEventListener("pointerdown", (l) => {
    const { clientX: t, clientY: n } = l.touches ? l.touches[0] : l, { left: d, top: a, width: o, height: c } = e.getBoundingClientRect(), b = Math.sqrt(Math.pow(o, 2) + Math.pow(c, 2)) * 2;
    e.style.cssText = "--s: 0; --o: 1;", e.offsetTop, e.style.cssText = `--t: 1; --o: 0; --d: ${b.toFixed(1)}; --x:${(t - d).toFixed(1)}; --y:${(n - a).toFixed(1)};`;
  });
};
const B = (e, l) => {
  const t = e.__vccOpts || e;
  for (const [n, d] of l)
    t[n] = d;
  return t;
}, k = {
  name: "Button",
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
    }
  },
  setup(e, { emit: l }) {
    const t = u(null), n = u(!1), d = h(() => {
      let a = {
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
      return e.ripple && (a["btn--ripple"] = !0), e.progress && (a["btn--progress"] = !0), e.disabled && (a["btn--disabled"] = !0), a;
    });
    return _(() => {
      (e.ripple || n.value) && x(t.value);
    }), {
      buttonRef: t,
      btnClass: d
    };
  }
}, C = ["disabled"], S = ["href", "disabled"];
function R(e, l, t, n, d, a) {
  const o = m("router-link");
  return !t.route && !t.href ? (s(), f("button", {
    key: 0,
    class: i(n.btnClass),
    disabled: t.disabled,
    ref: "buttonRef"
  }, [
    r(e.$slots, "default")
  ], 10, C)) : t.route ? (s(), y(o, {
    key: 1,
    to: t.route,
    class: i(n.btnClass),
    disabled: t.disabled ? !0 : void 0,
    ref: "buttonRef"
  }, {
    default: g(() => [
      r(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["to", "class", "disabled"])) : t.href ? (s(), f("a", {
    key: 2,
    href: t.href,
    class: i(n.btnClass),
    disabled: t.disabled ? !0 : void 0,
    ref: "buttonRef"
  }, [
    r(e.$slots, "default")
  ], 10, S)) : v("", !0);
}
const w = /* @__PURE__ */ B(k, [["render", R]]);
export {
  w as default
};

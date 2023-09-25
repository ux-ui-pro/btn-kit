import { ref as b, computed as h, onMounted as _, resolveComponent as m, openBlock as o, createElementBlock as u, normalizeClass as s, renderSlot as i, createBlock as y, withCtx as g, createCommentVNode as x } from "vue";
const B = (e) => {
  e.addEventListener("pointerdown", (a) => {
    const { clientX: t, clientY: n } = a.touches ? a.touches[0] : a, { left: l, top: r, width: d, height: f } = e.getBoundingClientRect(), c = Math.sqrt(Math.pow(d, 2) + Math.pow(f, 2)) * 2;
    e.style.cssText = "--s: 0; --o: 1;", e.offsetTop, e.style.cssText = `--t: 1; --o: 0; --d: ${c.toFixed(1)}; --x:${(t - l).toFixed(1)}; --y:${(n - r).toFixed(1)};`;
  });
};
const k = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [n, l] of a)
    t[n] = l;
  return t;
}, v = {
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
  setup(e, { emit: a }) {
    const t = b(null), n = h(() => {
      let l = {
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
      return e.ripple && (l["btn--ripple"] = !0), e.progress && (l["btn--progress"] = !0), e.disabled && (l["btn--disabled"] = !0), l;
    });
    return _(() => {
      e.ripple && B(t.value);
    }), {
      buttonRef: t,
      btnClass: n
    };
  }
}, C = ["disabled"], S = ["href", "disabled"];
function w(e, a, t, n, l, r) {
  const d = m("router-link");
  return !t.route && !t.href ? (o(), u("button", {
    key: 0,
    class: s(n.btnClass),
    disabled: t.disabled,
    ref: "buttonRef"
  }, [
    i(e.$slots, "default")
  ], 10, C)) : t.route ? (o(), y(d, {
    key: 1,
    to: t.route,
    class: s(n.btnClass),
    disabled: t.disabled ? !0 : void 0,
    ref: "buttonRef"
  }, {
    default: g(() => [
      i(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["to", "class", "disabled"])) : t.href ? (o(), u("a", {
    key: 2,
    href: t.href,
    class: s(n.btnClass),
    disabled: t.disabled ? !0 : void 0,
    ref: "buttonRef"
  }, [
    i(e.$slots, "default")
  ], 10, S)) : x("", !0);
}
const R = /* @__PURE__ */ k(v, [["render", w]]);
export {
  R as default
};

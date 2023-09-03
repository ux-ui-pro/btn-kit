import { ref as m, computed as p, onMounted as g, resolveComponent as _, openBlock as o, createElementBlock as f, normalizeClass as d, renderSlot as r, createBlock as y, withCtx as v, createCommentVNode as B } from "vue";
class C {
  constructor() {
    this.init();
  }
  ripple(l) {
    const e = l.target.closest(".btn--ripple");
    if (!e)
      return;
    const n = getComputedStyle(e), i = parseFloat(n.width), s = parseFloat(n.height), a = Math.max(i, s), u = a / 2, c = e.getBoundingClientRect(), b = l.pageY - pageYOffset - (c.top + u), h = l.pageX - pageXOffset - (c.left + u);
    e.style.cssText = `--size: ${Math.round(a)}px; --top: ${Math.round(b)}px; --left: ${Math.round(h)}px;`, e.classList.remove("btn--rippled"), requestAnimationFrame(() => {
      e.classList.add("btn--rippled");
    });
  }
  init() {
    document.addEventListener("pointerdown", this.ripple.bind(this));
  }
}
const k = (t, l) => {
  const e = t.__vccOpts || t;
  for (const [n, i] of l)
    e[n] = i;
  return e;
}, x = {
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
  setup(t, { emit: l }) {
    const e = m(null);
    let n = null;
    const i = p(() => {
      let a = {
        btn: !0,
        "btn--sm": t.size === "sm",
        "btn--md": t.size === "md",
        "btn--lg": t.size === "lg",
        "btn--rounded": t.shape === "rounded",
        "btn--round": t.shape === "round",
        "btn--contained": t.variation === "contained",
        "btn--outlined": t.variation === "outlined",
        "btn--text": t.variation === "text",
        [`btn--theme-${t.theme}`]: t.theme !== ""
      };
      return t.ripple && (a["btn--ripple"] = !0), t.progress && (a["btn--progress"] = !0), t.disabled && (a["btn--disabled"] = !0), a;
    }), s = () => {
      n = new C(), n.init(e.value);
    };
    return g(() => {
      t.ripple && s();
    }), {
      buttonRef: e,
      btnClass: i,
      initRipple: s
    };
  }
}, S = ["disabled"], z = ["href", "disabled"];
function w(t, l, e, n, i, s) {
  const a = _("router-link");
  return !e.route && !e.href ? (o(), f("button", {
    key: 0,
    class: d(n.btnClass),
    disabled: e.disabled
  }, [
    r(t.$slots, "default")
  ], 10, S)) : e.route ? (o(), y(a, {
    key: 1,
    to: e.route,
    class: d(n.btnClass),
    disabled: e.disabled ? !0 : void 0
  }, {
    default: v(() => [
      r(t.$slots, "default")
    ]),
    _: 3
  }, 8, ["to", "class", "disabled"])) : e.href ? (o(), f("a", {
    key: 2,
    href: e.href,
    class: d(n.btnClass),
    disabled: e.disabled ? !0 : void 0
  }, [
    r(t.$slots, "default")
  ], 10, z)) : B("", !0);
}
const R = /* @__PURE__ */ k(x, [["render", w]]);
export {
  R as default
};

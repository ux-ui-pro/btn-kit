import { ref as m, computed as p, onMounted as g, resolveComponent as _, openBlock as o, createElementBlock as c, normalizeClass as i, renderSlot as d, createBlock as y, withCtx as v, createCommentVNode as B } from "vue";
class C {
  constructor() {
    this.init();
  }
  ripple(s) {
    const e = s.target.closest(".btn--ripple");
    if (!e)
      return;
    const n = getComputedStyle(e), a = parseFloat(n.width), r = parseFloat(n.height), l = Math.max(a, r), u = l / 2, f = e.getBoundingClientRect(), b = s.pageY - pageYOffset - (f.top + u), h = s.pageX - pageXOffset - (f.left + u);
    e.style.cssText = `--size: ${Math.round(l)}px; --top: ${Math.round(b)}px; --left: ${Math.round(h)}px;`, e.classList.remove("btn--rippled"), requestAnimationFrame(() => {
      e.classList.add("btn--rippled");
    });
  }
  init() {
    document.addEventListener("pointerdown", this.ripple.bind(this));
  }
}
const k = (t, s) => {
  const e = t.__vccOpts || t;
  for (const [n, a] of s)
    e[n] = a;
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
  setup(t, { emit: s }) {
    const e = m(null), n = p(() => {
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
    });
    return g(() => {
      t.ripple && C(e.value);
    }), {
      buttonRef: e,
      btnClass: n
    };
  }
}, S = ["disabled"], z = ["href", "disabled"];
function R(t, s, e, n, a, r) {
  const l = _("router-link");
  return !e.route && !e.href ? (o(), c("button", {
    key: 0,
    class: i(n.btnClass),
    disabled: e.disabled,
    ref: "buttonRef"
  }, [
    d(t.$slots, "default")
  ], 10, S)) : e.route ? (o(), y(l, {
    key: 1,
    to: e.route,
    class: i(n.btnClass),
    disabled: e.disabled ? !0 : void 0,
    ref: "buttonRef"
  }, {
    default: v(() => [
      d(t.$slots, "default")
    ]),
    _: 3
  }, 8, ["to", "class", "disabled"])) : e.href ? (o(), c("a", {
    key: 2,
    href: e.href,
    class: i(n.btnClass),
    disabled: e.disabled ? !0 : void 0,
    ref: "buttonRef"
  }, [
    d(t.$slots, "default")
  ], 10, z)) : B("", !0);
}
const w = /* @__PURE__ */ k(x, [["render", R]]);
export {
  w as default
};

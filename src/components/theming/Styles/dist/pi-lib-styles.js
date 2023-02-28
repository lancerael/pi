import { ThemeProvider as b, createGlobalStyle as l } from "styled-components";
import { jsxs as s, jsx as i } from "react/jsx-runtime";
const p = {
  light: {
    bg: "#ffffff",
    text: "#273327",
    textSoft: "#444c44",
    textStrong: "#4a4a4a",
    subtle: "#f7faf7",
    border: "#ddeade",
    shadow: "#acc6ad",
    input: "#ffffff",
    outline: "#68c9ee",
    mark: "#57829514",
    special: "#578295",
    specialBg: "#598599",
    specialText: "#ffffff",
    specialShadow: "#425965",
    specialMark: "#ffffff14",
    light: "#ecf5fa",
    dark: "#364a53"
  },
  dark: {
    bg: "#202020",
    text: "#d1e4d1",
    textSoft: "#b4beb5",
    textStrong: "#bbbbbb",
    subtle: "#202521",
    border: "#273327",
    shadow: "#000000",
    input: "#1c1c1c",
    outline: "#57a9c8",
    mark: "#6291a714",
    special: "#6291a7",
    specialBg: "#446777",
    specialText: "#dae0e4",
    specialShadow: "#152025",
    specialMark: "#dae0e414",
    light: "#b4d9ed",
    dark: "#243740"
  }
}, n = {
  light: {
    bg: "#ffffff",
    text: "#27313c",
    textSoft: "#444b53",
    textStrong: "#4a4a4a",
    subtle: "#f7f9fd",
    border: "#dde8f6",
    shadow: "#aac1dc",
    input: "#ffffff",
    outline: "#e6b2bb",
    mark: "#e3417114",
    special: "#e34171",
    specialBg: "#e84575",
    specialText: "#ffffff",
    specialShadow: "#744f56",
    specialMark: "#ffffff14",
    light: "#fcf1f3",
    dark: "#5d3e44"
  },
  dark: {
    bg: "#202020",
    text: "#dcdfe5",
    textSoft: "#b8bcc2",
    textStrong: "#bbbbbb",
    subtle: "#212529",
    border: "#26313d",
    shadow: "#000000",
    input: "#1c1c1c",
    outline: "#dc8698",
    mark: "#d7678114",
    special: "#d76781",
    specialBg: "#a3425a",
    specialText: "#e4dedf",
    specialShadow: "#2a1a1d",
    specialMark: "#e4dedf14",
    light: "#edccd1",
    dark: "#452f33"
  }
}, g = {
  light: {
    bg: "#ffffff",
    text: "#312a53",
    textSoft: "#4b4763",
    textStrong: "#4a4a4a",
    subtle: "#f9f9fd",
    border: "#e7e5f7",
    shadow: "#c0bbdf",
    input: "#ffffff",
    outline: "#b7bde7",
    mark: "#6178e214",
    special: "#6178e2",
    specialBg: "#667ce3",
    specialText: "#ffffff",
    specialShadow: "#545874",
    specialMark: "#ffffff14",
    light: "#f2f3fc",
    dark: "#404564"
  },
  dark: {
    bg: "#202020",
    text: "#dfdee4",
    textSoft: "#bbbbc1",
    textStrong: "#bbbbbb",
    subtle: "#242429",
    border: "#312f3d",
    shadow: "#000000",
    input: "#1c1c1c",
    outline: "#919bd7",
    mark: "#7886d214",
    special: "#7886d2",
    specialBg: "#495db1",
    specialText: "#dedfe4",
    specialShadow: "#1c1e2a",
    specialMark: "#dedfe414",
    light: "#cfd2ee",
    dark: "#313445"
  }
}, x = {
  light: {
    bg: "#ffffff",
    text: "#352f26",
    textSoft: "#4e4a43",
    textStrong: "#4a4a4a",
    subtle: "#fbf9f6",
    border: "#ede6d9",
    shadow: "#ccbda3",
    input: "#ffffff",
    outline: "#a9ca64",
    mark: "#70844a14",
    special: "#70844a",
    specialBg: "#73884c",
    specialText: "#ffffff",
    specialShadow: "#515b40",
    specialMark: "#ffffff14",
    light: "#e7fbc6",
    dark: "#414a33"
  },
  dark: {
    bg: "#202020",
    text: "#e5ded4",
    textSoft: "#bfbbb3",
    textStrong: "#bbbbbb",
    subtle: "#27241f",
    border: "#363022",
    shadow: "#000000",
    input: "#1c1c1c",
    outline: "#8ca853",
    mark: "#7d935214",
    special: "#7d9352",
    specialBg: "#586839",
    specialText: "#d9e2cc",
    specialShadow: "#1c2014",
    specialMark: "#d9e2cc14",
    light: "#bfdf80",
    dark: "#303822"
  }
}, u = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pebble: p,
  rose: n,
  electron: g,
  avocado: x
}, Symbol.toStringTag, { value: "Module" })), h = {
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
}, c = (e = "pebble") => ({
  colors: u[e],
  ...h
}), m = ({
  children: e,
  themeName: t = "pebble",
  theme: a = c(t)
}) => {
  const f = r(a);
  return /* @__PURE__ */ s(b, {
    theme: a,
    children: [/* @__PURE__ */ i(f, {
      theme: a
    }), e]
  });
}, o = (e) => Object.entries(e).reduce(
  (t, [a, f]) => `${t} --${a}: ${f};`,
  ""
), r = ({ colors: { light: e, dark: t = e }, fonts: a, fontSizes: f } = c()) => l`
  :root {
    ${o(e)}
    font-family: ${a.join(", ")};
    background-color: var(--bg);
    color: var(--text);
    
    & * {
      transition: all 0.2s;
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      ${o(t)}
    }
  }
`, w = r(), T = ({
  color: e,
  isSpecial: t
} = {}) => {
  const a = t ? "special" : "border", f = t ? "specialText" : "textSoft", d = t ? "specialBg" : "subtle";
  return `
    border: 3px solid var(--${a});
    color: ${e || `var(--${f})`};
    background-color: var(--${d});
    border-radius: 6px;
    padding: 8px;
    box-shadow: 2px 2px 2px 0px rgb(61 61 61 / 20%);
  `;
};
export {
  w as GlobalStyle,
  m as Theme,
  h as baseTheme,
  T as box,
  r as getGlobalStyle,
  c as getTheme
};

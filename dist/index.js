var Cc = Object.defineProperty;
var Sc = (r, n, t) => n in r ? Cc(r, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[n] = t;
var B = (r, n, t) => Sc(r, typeof n != "symbol" ? n + "" : n, t);
import { jsx as N, jsxs as U, Fragment as Ir } from "react/jsx-runtime";
import * as P from "react";
import M, { useRef as Me, useContext as zn, useMemo as ct, useDebugValue as Do, createElement as ri, createContext as ni, useState as ve, useCallback as de, useEffect as ge, forwardRef as Ec, useLayoutEffect as qa, cloneElement as ai, createRef as Et, Component as Se } from "react";
import * as Pc from "react-dom";
import Oc from "react-dom";
var Ce = function() {
  return Ce = Object.assign || function(n) {
    for (var t, e = 1, a = arguments.length; e < a; e++) {
      t = arguments[e];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
    }
    return n;
  }, Ce.apply(this, arguments);
};
function Pt(r, n, t) {
  if (t || arguments.length === 2) for (var e = 0, a = n.length, o; e < a; e++)
    (o || !(e in n)) && (o || (o = Array.prototype.slice.call(n, 0, e)), o[e] = n[e]);
  return r.concat(o || Array.prototype.slice.call(n));
}
function Tc(r) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = r(t)), n[t];
  };
}
var Nc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Yc = /* @__PURE__ */ Tc(
  function(r) {
    return Nc.test(r) || r.charCodeAt(0) === 111 && r.charCodeAt(1) === 110 && r.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Zr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function qe(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var pe = "-ms-", Nr = "-moz-", se = "-webkit-", oi = "comm", Qn = "rule", Ua = "decl", Rc = "@import", si = "@keyframes", Lc = "@layer", ii = Math.abs, Ka = String.fromCharCode, Ca = Object.assign;
function $c(r, n) {
  return _e(r, 0) ^ 45 ? (((n << 2 ^ _e(r, 0)) << 2 ^ _e(r, 1)) << 2 ^ _e(r, 2)) << 2 ^ _e(r, 3) : 0;
}
function ci(r) {
  return r.trim();
}
function it(r, n) {
  return (r = n.exec(r)) ? r[0] : r;
}
function K(r, n, t) {
  return r.replace(n, t);
}
function an(r, n, t) {
  return r.indexOf(n, t);
}
function _e(r, n) {
  return r.charCodeAt(n) | 0;
}
function ar(r, n, t) {
  return r.slice(n, t);
}
function Ge(r) {
  return r.length;
}
function li(r) {
  return r.length;
}
function Er(r, n) {
  return n.push(r), r;
}
function Ic(r, n) {
  return r.map(n).join("");
}
function xo(r, n) {
  return r.filter(function(t) {
    return !it(t, n);
  });
}
var qn = 1, or = 1, ui = 0, Be = 0, xe = 0, yr = "";
function Un(r, n, t, e, a, o, s, i) {
  return { value: r, root: n, parent: t, type: e, props: a, children: o, line: qn, column: or, length: s, return: "", siblings: i };
}
function kt(r, n) {
  return Ca(Un("", null, null, "", null, null, 0, r.siblings), r, { length: -r.length }, n);
}
function Gt(r) {
  for (; r.root; )
    r = kt(r.root, { children: [r] });
  Er(r, r.siblings);
}
function Fc() {
  return xe;
}
function Ac() {
  return xe = Be > 0 ? _e(yr, --Be) : 0, or--, xe === 10 && (or = 1, qn--), xe;
}
function je() {
  return xe = Be < ui ? _e(yr, Be++) : 0, or++, xe === 10 && (or = 1, qn++), xe;
}
function Ft() {
  return _e(yr, Be);
}
function on() {
  return Be;
}
function Kn(r, n) {
  return ar(yr, r, n);
}
function Sa(r) {
  switch (r) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Wc(r) {
  return qn = or = 1, ui = Ge(yr = r), Be = 0, [];
}
function Hc(r) {
  return yr = "", r;
}
function da(r) {
  return ci(Kn(Be - 1, Ea(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function Bc(r) {
  for (; (xe = Ft()) && xe < 33; )
    je();
  return Sa(r) > 2 || Sa(xe) > 3 ? "" : " ";
}
function Vc(r, n) {
  for (; --n && je() && !(xe < 48 || xe > 102 || xe > 57 && xe < 65 || xe > 70 && xe < 97); )
    ;
  return Kn(r, on() + (n < 6 && Ft() == 32 && je() == 32));
}
function Ea(r) {
  for (; je(); )
    switch (xe) {
      // ] ) " '
      case r:
        return Be;
      // " '
      case 34:
      case 39:
        r !== 34 && r !== 39 && Ea(xe);
        break;
      // (
      case 40:
        r === 41 && Ea(r);
        break;
      // \
      case 92:
        je();
        break;
    }
  return Be;
}
function jc(r, n) {
  for (; je() && r + xe !== 57; )
    if (r + xe === 84 && Ft() === 47)
      break;
  return "/*" + Kn(n, Be - 1) + "*" + Ka(r === 47 ? r : je());
}
function Zc(r) {
  for (; !Sa(Ft()); )
    je();
  return Kn(r, Be);
}
function zc(r) {
  return Hc(sn("", null, null, null, [""], r = Wc(r), 0, [0], r));
}
function sn(r, n, t, e, a, o, s, i, c) {
  for (var l = 0, u = 0, d = s, f = 0, p = 0, h = 0, m = 1, v = 1, b = 1, C = 0, D = "", O = a, x = o, w = e, g = D; v; )
    switch (h = C, C = je()) {
      // (
      case 40:
        if (h != 108 && _e(g, d - 1) == 58) {
          an(g += K(da(C), "&", "&\f"), "&\f", ii(l ? i[l - 1] : 0)) != -1 && (b = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        g += da(C);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        g += Bc(h);
        break;
      // \
      case 92:
        g += Vc(on() - 1, 7);
        continue;
      // /
      case 47:
        switch (Ft()) {
          case 42:
          case 47:
            Er(Qc(jc(je(), on()), n, t, c), c);
            break;
          default:
            g += "/";
        }
        break;
      // {
      case 123 * m:
        i[l++] = Ge(g) * b;
      // } ; \0
      case 125 * m:
      case 59:
      case 0:
        switch (C) {
          // \0 }
          case 0:
          case 125:
            v = 0;
          // ;
          case 59 + u:
            b == -1 && (g = K(g, /\f/g, "")), p > 0 && Ge(g) - d && Er(p > 32 ? Mo(g + ";", e, t, d - 1, c) : Mo(K(g, " ", "") + ";", e, t, d - 2, c), c);
            break;
          // @ ;
          case 59:
            g += ";";
          // { rule/at-rule
          default:
            if (Er(w = ko(g, n, t, l, u, a, i, D, O = [], x = [], d, o), o), C === 123)
              if (u === 0)
                sn(g, n, w, w, O, o, d, i, x);
              else
                switch (f === 99 && _e(g, 3) === 110 ? 100 : f) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    sn(r, w, w, e && Er(ko(r, w, w, 0, 0, a, i, D, a, O = [], d, x), x), a, x, d, i, e ? O : x);
                    break;
                  default:
                    sn(g, w, w, w, [""], x, 0, i, x);
                }
        }
        l = u = p = 0, m = b = 1, D = g = "", d = s;
        break;
      // :
      case 58:
        d = 1 + Ge(g), p = h;
      default:
        if (m < 1) {
          if (C == 123)
            --m;
          else if (C == 125 && m++ == 0 && Ac() == 125)
            continue;
        }
        switch (g += Ka(C), C * m) {
          // &
          case 38:
            b = u > 0 ? 1 : (g += "\f", -1);
            break;
          // ,
          case 44:
            i[l++] = (Ge(g) - 1) * b, b = 1;
            break;
          // @
          case 64:
            Ft() === 45 && (g += da(je())), f = Ft(), u = d = Ge(D = g += Zc(on())), C++;
            break;
          // -
          case 45:
            h === 45 && Ge(g) == 2 && (m = 0);
        }
    }
  return o;
}
function ko(r, n, t, e, a, o, s, i, c, l, u, d) {
  for (var f = a - 1, p = a === 0 ? o : [""], h = li(p), m = 0, v = 0, b = 0; m < e; ++m)
    for (var C = 0, D = ar(r, f + 1, f = ii(v = s[m])), O = r; C < h; ++C)
      (O = ci(v > 0 ? p[C] + " " + D : K(D, /&\f/g, p[C]))) && (c[b++] = O);
  return Un(r, n, t, a === 0 ? Qn : i, c, l, u, d);
}
function Qc(r, n, t, e) {
  return Un(r, n, t, oi, Ka(Fc()), ar(r, 2, -2), 0, e);
}
function Mo(r, n, t, e, a) {
  return Un(r, n, t, Ua, ar(r, 0, e), ar(r, e + 1, -1), e, a);
}
function di(r, n, t) {
  switch ($c(r, n)) {
    // color-adjust
    case 5103:
      return se + "print-" + r + r;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return se + r + r;
    // tab-size
    case 4789:
      return Nr + r + r;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return se + r + Nr + r + pe + r + r;
    // writing-mode
    case 5936:
      switch (_e(r, n + 11)) {
        // vertical-l(r)
        case 114:
          return se + r + pe + K(r, /[svh]\w+-[tblr]{2}/, "tb") + r;
        // vertical-r(l)
        case 108:
          return se + r + pe + K(r, /[svh]\w+-[tblr]{2}/, "tb-rl") + r;
        // horizontal(-)tb
        case 45:
          return se + r + pe + K(r, /[svh]\w+-[tblr]{2}/, "lr") + r;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return se + r + pe + r + r;
    // order
    case 6165:
      return se + r + pe + "flex-" + r + r;
    // align-items
    case 5187:
      return se + r + K(r, /(\w+).+(:[^]+)/, se + "box-$1$2" + pe + "flex-$1$2") + r;
    // align-self
    case 5443:
      return se + r + pe + "flex-item-" + K(r, /flex-|-self/g, "") + (it(r, /flex-|baseline/) ? "" : pe + "grid-row-" + K(r, /flex-|-self/g, "")) + r;
    // align-content
    case 4675:
      return se + r + pe + "flex-line-pack" + K(r, /align-content|flex-|-self/g, "") + r;
    // flex-shrink
    case 5548:
      return se + r + pe + K(r, "shrink", "negative") + r;
    // flex-basis
    case 5292:
      return se + r + pe + K(r, "basis", "preferred-size") + r;
    // flex-grow
    case 6060:
      return se + "box-" + K(r, "-grow", "") + se + r + pe + K(r, "grow", "positive") + r;
    // transition
    case 4554:
      return se + K(r, /([^-])(transform)/g, "$1" + se + "$2") + r;
    // cursor
    case 6187:
      return K(K(K(r, /(zoom-|grab)/, se + "$1"), /(image-set)/, se + "$1"), r, "") + r;
    // background, background-image
    case 5495:
    case 3959:
      return K(r, /(image-set\([^]*)/, se + "$1$`$1");
    // justify-content
    case 4968:
      return K(K(r, /(.+:)(flex-)?(.*)/, se + "box-pack:$3" + pe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + se + r + r;
    // justify-self
    case 4200:
      if (!it(r, /flex-|baseline/)) return pe + "grid-column-align" + ar(r, n) + r;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return pe + K(r, "template-", "") + r;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return t && t.some(function(e, a) {
        return n = a, it(e.props, /grid-\w+-end/);
      }) ? ~an(r + (t = t[n].value), "span", 0) ? r : pe + K(r, "-start", "") + r + pe + "grid-row-span:" + (~an(t, "span", 0) ? it(t, /\d+/) : +it(t, /\d+/) - +it(r, /\d+/)) + ";" : pe + K(r, "-start", "") + r;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return t && t.some(function(e) {
        return it(e.props, /grid-\w+-start/);
      }) ? r : pe + K(K(r, "-end", "-span"), "span ", "") + r;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return K(r, /(.+)-inline(.+)/, se + "$1$2") + r;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ge(r) - 1 - n > 6)
        switch (_e(r, n + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (_e(r, n + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return K(r, /(.+:)(.+)-([^]+)/, "$1" + se + "$2-$3$1" + Nr + (_e(r, n + 3) == 108 ? "$3" : "$2-$3")) + r;
          // (s)tretch
          case 115:
            return ~an(r, "stretch", 0) ? di(K(r, "stretch", "fill-available"), n, t) + r : r;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return K(r, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, a, o, s, i, c, l) {
        return pe + a + ":" + o + l + (s ? pe + a + "-span:" + (i ? c : +c - +o) + l : "") + r;
      });
    // position: sticky
    case 4949:
      if (_e(r, n + 6) === 121)
        return K(r, ":", ":" + se) + r;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (_e(r, _e(r, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return K(r, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + se + (_e(r, 14) === 45 ? "inline-" : "") + "box$3$1" + se + "$2$3$1" + pe + "$2box$3") + r;
        // (inline-)?gri(d)
        case 100:
          return K(r, ":", ":" + pe) + r;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return K(r, "scroll-", "scroll-snap-") + r;
  }
  return r;
}
function Cn(r, n) {
  for (var t = "", e = 0; e < r.length; e++)
    t += n(r[e], e, r, n) || "";
  return t;
}
function qc(r, n, t, e) {
  switch (r.type) {
    case Lc:
      if (r.children.length) break;
    case Rc:
    case Ua:
      return r.return = r.return || r.value;
    case oi:
      return "";
    case si:
      return r.return = r.value + "{" + Cn(r.children, e) + "}";
    case Qn:
      if (!Ge(r.value = r.props.join(","))) return "";
  }
  return Ge(t = Cn(r.children, e)) ? r.return = r.value + "{" + t + "}" : "";
}
function Uc(r) {
  var n = li(r);
  return function(t, e, a, o) {
    for (var s = "", i = 0; i < n; i++)
      s += r[i](t, e, a, o) || "";
    return s;
  };
}
function Kc(r) {
  return function(n) {
    n.root || (n = n.return) && r(n);
  };
}
function Gc(r, n, t, e) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case Ua:
        r.return = di(r.value, r.length, t);
        return;
      case si:
        return Cn([kt(r, { value: K(r.value, "@", "@" + se) })], e);
      case Qn:
        if (r.length)
          return Ic(t = r.props, function(a) {
            switch (it(a, e = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Gt(kt(r, { props: [K(a, /:(read-\w+)/, ":" + Nr + "$1")] })), Gt(kt(r, { props: [a] })), Ca(r, { props: xo(t, e) });
                break;
              // :placeholder
              case "::placeholder":
                Gt(kt(r, { props: [K(a, /:(plac\w+)/, ":" + se + "input-$1")] })), Gt(kt(r, { props: [K(a, /:(plac\w+)/, ":" + Nr + "$1")] })), Gt(kt(r, { props: [K(a, /:(plac\w+)/, pe + "input-$1")] })), Gt(kt(r, { props: [a] })), Ca(r, { props: xo(t, e) });
                break;
            }
            return "";
          });
    }
}
var Xc = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Vt = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", fi = "active", pi = "data-styled-version", Gn = "6.1.19", Ga = `/*!sc*/
`, Sn = typeof window < "u" && typeof document < "u", Jc = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), el = {}, _o = /invalid hook call/i, zr = /* @__PURE__ */ new Set(), hi = function(r, n) {
  if (process.env.NODE_ENV !== "production") {
    var t = n ? ' with the id of "'.concat(n, '"') : "", e = "The component ".concat(r).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, a = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        for (var i = [], c = 1; c < arguments.length; c++) i[c - 1] = arguments[c];
        _o.test(s) ? (o = !1, zr.delete(e)) : a.apply(void 0, Pt([s], i, !1));
      }, Me(), o && !zr.has(e) && (console.warn(e), zr.add(e));
    } catch (s) {
      _o.test(s.message) && zr.delete(e);
    } finally {
      console.error = a;
    }
  }
}, Xn = Object.freeze([]), sr = Object.freeze({});
function mi(r, n, t) {
  return t === void 0 && (t = sr), r.theme !== t.theme && r.theme || n || t.theme;
}
var Pa = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), tl = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, rl = /(^-|-$)/g;
function Co(r) {
  return r.replace(tl, "-").replace(rl, "");
}
var nl = /(a)(d)/gi, Qr = 52, So = function(r) {
  return String.fromCharCode(r + (r > 25 ? 39 : 97));
};
function Oa(r) {
  var n, t = "";
  for (n = Math.abs(r); n > Qr; n = n / Qr | 0) t = So(n % Qr) + t;
  return (So(n % Qr) + t).replace(nl, "$1-$2");
}
var fa, vi = 5381, Yt = function(r, n) {
  for (var t = n.length; t; ) r = 33 * r ^ n.charCodeAt(--t);
  return r;
}, gi = function(r) {
  return Yt(vi, r);
};
function Xa(r) {
  return Oa(gi(r) >>> 0);
}
function yi(r) {
  return process.env.NODE_ENV !== "production" && typeof r == "string" && r || r.displayName || r.name || "Component";
}
function pa(r) {
  return typeof r == "string" && (process.env.NODE_ENV === "production" || r.charAt(0) === r.charAt(0).toLowerCase());
}
var wi = typeof Symbol == "function" && Symbol.for, bi = wi ? Symbol.for("react.memo") : 60115, al = wi ? Symbol.for("react.forward_ref") : 60112, ol = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, sl = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Di = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, il = ((fa = {})[al] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, fa[bi] = Di, fa);
function Eo(r) {
  return ("type" in (n = r) && n.type.$$typeof) === bi ? Di : "$$typeof" in r ? il[r.$$typeof] : ol;
  var n;
}
var cl = Object.defineProperty, ll = Object.getOwnPropertyNames, Po = Object.getOwnPropertySymbols, ul = Object.getOwnPropertyDescriptor, dl = Object.getPrototypeOf, Oo = Object.prototype;
function xi(r, n, t) {
  if (typeof n != "string") {
    if (Oo) {
      var e = dl(n);
      e && e !== Oo && xi(r, e, t);
    }
    var a = ll(n);
    Po && (a = a.concat(Po(n)));
    for (var o = Eo(r), s = Eo(n), i = 0; i < a.length; ++i) {
      var c = a[i];
      if (!(c in sl || t && t[c] || s && c in s || o && c in o)) {
        var l = ul(n, c);
        try {
          cl(r, c, l);
        } catch {
        }
      }
    }
  }
  return r;
}
function jt(r) {
  return typeof r == "function";
}
function Ja(r) {
  return typeof r == "object" && "styledComponentId" in r;
}
function Lt(r, n) {
  return r && n ? "".concat(r, " ").concat(n) : r || n || "";
}
function En(r, n) {
  if (r.length === 0) return "";
  for (var t = r[0], e = 1; e < r.length; e++) t += r[e];
  return t;
}
function ir(r) {
  return r !== null && typeof r == "object" && r.constructor.name === Object.name && !("props" in r && r.$$typeof);
}
function Ta(r, n, t) {
  if (t === void 0 && (t = !1), !t && !ir(r) && !Array.isArray(r)) return n;
  if (Array.isArray(n)) for (var e = 0; e < n.length; e++) r[e] = Ta(r[e], n[e]);
  else if (ir(n)) for (var e in n) r[e] = Ta(r[e], n[e]);
  return r;
}
function eo(r, n) {
  Object.defineProperty(r, "toString", { value: n });
}
var fl = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function pl() {
  for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
  for (var t = r[0], e = [], a = 1, o = r.length; a < o; a += 1) e.push(r[a]);
  return e.forEach(function(s) {
    t = t.replace(/%[a-z]/, s);
  }), t;
}
function nt(r) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r, " for more information.").concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")) : new Error(pl.apply(void 0, Pt([fl[r]], n, !1)).trim());
}
var hl = function() {
  function r(n) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = n;
  }
  return r.prototype.indexOfGroup = function(n) {
    for (var t = 0, e = 0; e < n; e++) t += this.groupSizes[e];
    return t;
  }, r.prototype.insertRules = function(n, t) {
    if (n >= this.groupSizes.length) {
      for (var e = this.groupSizes, a = e.length, o = a; n >= o; ) if ((o <<= 1) < 0) throw nt(16, "".concat(n));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(e), this.length = o;
      for (var s = a; s < o; s++) this.groupSizes[s] = 0;
    }
    for (var i = this.indexOfGroup(n + 1), c = (s = 0, t.length); s < c; s++) this.tag.insertRule(i, t[s]) && (this.groupSizes[n]++, i++);
  }, r.prototype.clearGroup = function(n) {
    if (n < this.length) {
      var t = this.groupSizes[n], e = this.indexOfGroup(n), a = e + t;
      this.groupSizes[n] = 0;
      for (var o = e; o < a; o++) this.tag.deleteRule(e);
    }
  }, r.prototype.getGroup = function(n) {
    var t = "";
    if (n >= this.length || this.groupSizes[n] === 0) return t;
    for (var e = this.groupSizes[n], a = this.indexOfGroup(n), o = a + e, s = a; s < o; s++) t += "".concat(this.tag.getRule(s)).concat(Ga);
    return t;
  }, r;
}(), ml = 1 << 30, cn = /* @__PURE__ */ new Map(), Pn = /* @__PURE__ */ new Map(), ln = 1, qr = function(r) {
  if (cn.has(r)) return cn.get(r);
  for (; Pn.has(ln); ) ln++;
  var n = ln++;
  if (process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > ml)) throw nt(16, "".concat(n));
  return cn.set(r, n), Pn.set(n, r), n;
}, vl = function(r, n) {
  ln = n + 1, cn.set(r, n), Pn.set(n, r);
}, gl = "style[".concat(Vt, "][").concat(pi, '="').concat(Gn, '"]'), yl = new RegExp("^".concat(Vt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), wl = function(r, n, t) {
  for (var e, a = t.split(","), o = 0, s = a.length; o < s; o++) (e = a[o]) && r.registerName(n, e);
}, bl = function(r, n) {
  for (var t, e = ((t = n.textContent) !== null && t !== void 0 ? t : "").split(Ga), a = [], o = 0, s = e.length; o < s; o++) {
    var i = e[o].trim();
    if (i) {
      var c = i.match(yl);
      if (c) {
        var l = 0 | parseInt(c[1], 10), u = c[2];
        l !== 0 && (vl(u, l), wl(r, u, c[3]), r.getTag().insertRules(l, a)), a.length = 0;
      } else a.push(i);
    }
  }
}, To = function(r) {
  for (var n = document.querySelectorAll(gl), t = 0, e = n.length; t < e; t++) {
    var a = n[t];
    a && a.getAttribute(Vt) !== fi && (bl(r, a), a.parentNode && a.parentNode.removeChild(a));
  }
};
function Dl() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var ki = function(r) {
  var n = document.head, t = r || n, e = document.createElement("style"), a = function(i) {
    var c = Array.from(i.querySelectorAll("style[".concat(Vt, "]")));
    return c[c.length - 1];
  }(t), o = a !== void 0 ? a.nextSibling : null;
  e.setAttribute(Vt, fi), e.setAttribute(pi, Gn);
  var s = Dl();
  return s && e.setAttribute("nonce", s), t.insertBefore(e, o), e;
}, xl = function() {
  function r(n) {
    this.element = ki(n), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, a = 0, o = e.length; a < o; a++) {
        var s = e[a];
        if (s.ownerNode === t) return s;
      }
      throw nt(17);
    }(this.element), this.length = 0;
  }
  return r.prototype.insertRule = function(n, t) {
    try {
      return this.sheet.insertRule(t, n), this.length++, !0;
    } catch {
      return !1;
    }
  }, r.prototype.deleteRule = function(n) {
    this.sheet.deleteRule(n), this.length--;
  }, r.prototype.getRule = function(n) {
    var t = this.sheet.cssRules[n];
    return t && t.cssText ? t.cssText : "";
  }, r;
}(), kl = function() {
  function r(n) {
    this.element = ki(n), this.nodes = this.element.childNodes, this.length = 0;
  }
  return r.prototype.insertRule = function(n, t) {
    if (n <= this.length && n >= 0) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[n] || null), this.length++, !0;
    }
    return !1;
  }, r.prototype.deleteRule = function(n) {
    this.element.removeChild(this.nodes[n]), this.length--;
  }, r.prototype.getRule = function(n) {
    return n < this.length ? this.nodes[n].textContent : "";
  }, r;
}(), Ml = function() {
  function r(n) {
    this.rules = [], this.length = 0;
  }
  return r.prototype.insertRule = function(n, t) {
    return n <= this.length && (this.rules.splice(n, 0, t), this.length++, !0);
  }, r.prototype.deleteRule = function(n) {
    this.rules.splice(n, 1), this.length--;
  }, r.prototype.getRule = function(n) {
    return n < this.length ? this.rules[n] : "";
  }, r;
}(), No = Sn, _l = { isServer: !Sn, useCSSOMInjection: !Jc }, On = function() {
  function r(n, t, e) {
    n === void 0 && (n = sr), t === void 0 && (t = {});
    var a = this;
    this.options = Ce(Ce({}, _l), n), this.gs = t, this.names = new Map(e), this.server = !!n.isServer, !this.server && Sn && No && (No = !1, To(this)), eo(this, function() {
      return function(o) {
        for (var s = o.getTag(), i = s.length, c = "", l = function(d) {
          var f = function(b) {
            return Pn.get(b);
          }(d);
          if (f === void 0) return "continue";
          var p = o.names.get(f), h = s.getGroup(d);
          if (p === void 0 || !p.size || h.length === 0) return "continue";
          var m = "".concat(Vt, ".g").concat(d, '[id="').concat(f, '"]'), v = "";
          p !== void 0 && p.forEach(function(b) {
            b.length > 0 && (v += "".concat(b, ","));
          }), c += "".concat(h).concat(m, '{content:"').concat(v, '"}').concat(Ga);
        }, u = 0; u < i; u++) l(u);
        return c;
      }(a);
    });
  }
  return r.registerId = function(n) {
    return qr(n);
  }, r.prototype.rehydrate = function() {
    !this.server && Sn && To(this);
  }, r.prototype.reconstructWithOptions = function(n, t) {
    return t === void 0 && (t = !0), new r(Ce(Ce({}, this.options), n), this.gs, t && this.names || void 0);
  }, r.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 0) + 1;
  }, r.prototype.getTag = function() {
    return this.tag || (this.tag = (n = function(t) {
      var e = t.useCSSOMInjection, a = t.target;
      return t.isServer ? new Ml(a) : e ? new xl(a) : new kl(a);
    }(this.options), new hl(n)));
    var n;
  }, r.prototype.hasNameForId = function(n, t) {
    return this.names.has(n) && this.names.get(n).has(t);
  }, r.prototype.registerName = function(n, t) {
    if (qr(n), this.names.has(n)) this.names.get(n).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(n, e);
    }
  }, r.prototype.insertRules = function(n, t, e) {
    this.registerName(n, t), this.getTag().insertRules(qr(n), e);
  }, r.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, r.prototype.clearRules = function(n) {
    this.getTag().clearGroup(qr(n)), this.clearNames(n);
  }, r.prototype.clearTag = function() {
    this.tag = void 0;
  }, r;
}(), Cl = /&/g, Sl = /^\s*\/\/.*$/gm;
function Mi(r, n) {
  return r.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(e) {
      return "".concat(n, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Mi(t.children, n)), t;
  });
}
function El(r) {
  var n, t, e, a = sr, o = a.options, s = o === void 0 ? sr : o, i = a.plugins, c = i === void 0 ? Xn : i, l = function(f, p, h) {
    return h.startsWith(t) && h.endsWith(t) && h.replaceAll(t, "").length > 0 ? ".".concat(n) : f;
  }, u = c.slice();
  u.push(function(f) {
    f.type === Qn && f.value.includes("&") && (f.props[0] = f.props[0].replace(Cl, t).replace(e, l));
  }), s.prefix && u.push(Gc), u.push(qc);
  var d = function(f, p, h, m) {
    p === void 0 && (p = ""), h === void 0 && (h = ""), m === void 0 && (m = "&"), n = m, t = p, e = new RegExp("\\".concat(t, "\\b"), "g");
    var v = f.replace(Sl, ""), b = zc(h || p ? "".concat(h, " ").concat(p, " { ").concat(v, " }") : v);
    s.namespace && (b = Mi(b, s.namespace));
    var C = [];
    return Cn(b, Uc(u.concat(Kc(function(D) {
      return C.push(D);
    })))), C;
  };
  return d.hash = c.length ? c.reduce(function(f, p) {
    return p.name || nt(15), Yt(f, p.name);
  }, vi).toString() : "", d;
}
var Pl = new On(), Na = El(), _i = M.createContext({ shouldForwardProp: void 0, styleSheet: Pl, stylis: Na });
_i.Consumer;
M.createContext(void 0);
function Ya() {
  return zn(_i);
}
var Ra = function() {
  function r(n, t) {
    var e = this;
    this.inject = function(a, o) {
      o === void 0 && (o = Na);
      var s = e.name + o.hash;
      a.hasNameForId(e.id, s) || a.insertRules(e.id, s, o(e.rules, s, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = t, eo(this, function() {
      throw nt(12, String(e.name));
    });
  }
  return r.prototype.getName = function(n) {
    return n === void 0 && (n = Na), this.name + n.hash;
  }, r;
}(), Ol = function(r) {
  return r >= "A" && r <= "Z";
};
function Yo(r) {
  for (var n = "", t = 0; t < r.length; t++) {
    var e = r[t];
    if (t === 1 && e === "-" && r[0] === "-") return r;
    Ol(e) ? n += "-" + e.toLowerCase() : n += e;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var Ci = function(r) {
  return r == null || r === !1 || r === "";
}, Si = function(r) {
  var n, t, e = [];
  for (var a in r) {
    var o = r[a];
    r.hasOwnProperty(a) && !Ci(o) && (Array.isArray(o) && o.isCss || jt(o) ? e.push("".concat(Yo(a), ":"), o, ";") : ir(o) ? e.push.apply(e, Pt(Pt(["".concat(a, " {")], Si(o), !1), ["}"], !1)) : e.push("".concat(Yo(a), ": ").concat((n = a, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || n in Xc || n.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function _t(r, n, t, e) {
  if (Ci(r)) return [];
  if (Ja(r)) return [".".concat(r.styledComponentId)];
  if (jt(r)) {
    if (!jt(o = r) || o.prototype && o.prototype.isReactComponent || !n) return [r];
    var a = r(n);
    return process.env.NODE_ENV === "production" || typeof a != "object" || Array.isArray(a) || a instanceof Ra || ir(a) || a === null || console.error("".concat(yi(r), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), _t(a, n, t, e);
  }
  var o;
  return r instanceof Ra ? t ? (r.inject(t, e), [r.getName(e)]) : [r] : ir(r) ? Si(r) : Array.isArray(r) ? Array.prototype.concat.apply(Xn, r.map(function(s) {
    return _t(s, n, t, e);
  })) : [r.toString()];
}
function Ei(r) {
  for (var n = 0; n < r.length; n += 1) {
    var t = r[n];
    if (jt(t) && !Ja(t)) return !1;
  }
  return !0;
}
var Tl = gi(Gn), Nl = function() {
  function r(n, t, e) {
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (e === void 0 || e.isStatic) && Ei(n), this.componentId = t, this.baseHash = Yt(Tl, t), this.baseStyle = e, On.registerId(t);
  }
  return r.prototype.generateAndInjectStyles = function(n, t, e) {
    var a = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, t, e) : "";
    if (this.isStatic && !e.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) a = Lt(a, this.staticRulesId);
    else {
      var o = En(_t(this.rules, n, t, e)), s = Oa(Yt(this.baseHash, o) >>> 0);
      if (!t.hasNameForId(this.componentId, s)) {
        var i = e(o, ".".concat(s), void 0, this.componentId);
        t.insertRules(this.componentId, s, i);
      }
      a = Lt(a, s), this.staticRulesId = s;
    }
    else {
      for (var c = Yt(this.baseHash, e.hash), l = "", u = 0; u < this.rules.length; u++) {
        var d = this.rules[u];
        if (typeof d == "string") l += d, process.env.NODE_ENV !== "production" && (c = Yt(c, d));
        else if (d) {
          var f = En(_t(d, n, t, e));
          c = Yt(c, f + u), l += f;
        }
      }
      if (l) {
        var p = Oa(c >>> 0);
        t.hasNameForId(this.componentId, p) || t.insertRules(this.componentId, p, e(l, ".".concat(p), void 0, this.componentId)), a = Lt(a, p);
      }
    }
    return a;
  }, r;
}(), cr = M.createContext(void 0);
cr.Consumer;
function Ut() {
  var r = zn(cr);
  if (!r) throw nt(18);
  return r;
}
function Yl(r) {
  var n = M.useContext(cr), t = ct(function() {
    return function(e, a) {
      if (!e) throw nt(14);
      if (jt(e)) {
        var o = e(a);
        if (process.env.NODE_ENV !== "production" && (o === null || Array.isArray(o) || typeof o != "object")) throw nt(7);
        return o;
      }
      if (Array.isArray(e) || typeof e != "object") throw nt(8);
      return a ? Ce(Ce({}, a), e) : e;
    }(r.theme, n);
  }, [r.theme, n]);
  return r.children ? M.createElement(cr.Provider, { value: t }, r.children) : null;
}
var ha = {}, Ro = /* @__PURE__ */ new Set();
function Rl(r, n, t) {
  var e = Ja(r), a = r, o = !pa(r), s = n.attrs, i = s === void 0 ? Xn : s, c = n.componentId, l = c === void 0 ? function(O, x) {
    var w = typeof O != "string" ? "sc" : Co(O);
    ha[w] = (ha[w] || 0) + 1;
    var g = "".concat(w, "-").concat(Xa(Gn + w + ha[w]));
    return x ? "".concat(x, "-").concat(g) : g;
  }(n.displayName, n.parentComponentId) : c, u = n.displayName, d = u === void 0 ? function(O) {
    return pa(O) ? "styled.".concat(O) : "Styled(".concat(yi(O), ")");
  }(r) : u, f = n.displayName && n.componentId ? "".concat(Co(n.displayName), "-").concat(n.componentId) : n.componentId || l, p = e && a.attrs ? a.attrs.concat(i).filter(Boolean) : i, h = n.shouldForwardProp;
  if (e && a.shouldForwardProp) {
    var m = a.shouldForwardProp;
    if (n.shouldForwardProp) {
      var v = n.shouldForwardProp;
      h = function(O, x) {
        return m(O, x) && v(O, x);
      };
    } else h = m;
  }
  var b = new Nl(t, f, e ? a.componentStyle : void 0);
  function C(O, x) {
    return function(w, g, y) {
      var T = w.attrs, R = w.componentStyle, L = w.defaultProps, I = w.foldedComponentIds, V = w.styledComponentId, Y = w.target, S = M.useContext(cr), k = Ya(), E = w.shouldForwardProp || k.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Do(V);
      var _ = mi(g, S, L) || sr, F = function(he, oe, z) {
        for (var ce, fe = Ce(Ce({}, oe), { className: void 0, theme: z }), Q = 0; Q < he.length; Q += 1) {
          var re = jt(ce = he[Q]) ? ce(fe) : ce;
          for (var ne in re) fe[ne] = ne === "className" ? Lt(fe[ne], re[ne]) : ne === "style" ? Ce(Ce({}, fe[ne]), re[ne]) : re[ne];
        }
        return oe.className && (fe.className = Lt(fe.className, oe.className)), fe;
      }(T, g, _), H = F.as || Y, Z = {};
      for (var q in F) F[q] === void 0 || q[0] === "$" || q === "as" || q === "theme" && F.theme === _ || (q === "forwardedAs" ? Z.as = F.forwardedAs : E && !E(q, H) || (Z[q] = F[q], E || process.env.NODE_ENV !== "development" || Yc(q) || Ro.has(q) || !Pa.has(H) || (Ro.add(q), console.warn('styled-components: it looks like an unknown prop "'.concat(q, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var te = function(he, oe) {
        var z = Ya(), ce = he.generateAndInjectStyles(oe, z.styleSheet, z.stylis);
        return process.env.NODE_ENV !== "production" && Do(ce), ce;
      }(R, F);
      process.env.NODE_ENV !== "production" && w.warnTooManyClasses && w.warnTooManyClasses(te);
      var X = Lt(I, V);
      return te && (X += " " + te), F.className && (X += " " + F.className), Z[pa(H) && !Pa.has(H) ? "class" : "className"] = X, y && (Z.ref = y), ri(H, Z);
    }(D, O, x);
  }
  C.displayName = d;
  var D = M.forwardRef(C);
  return D.attrs = p, D.componentStyle = b, D.displayName = d, D.shouldForwardProp = h, D.foldedComponentIds = e ? Lt(a.foldedComponentIds, a.styledComponentId) : "", D.styledComponentId = f, D.target = e ? a.target : r, Object.defineProperty(D, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(O) {
    this._foldedDefaultProps = e ? function(x) {
      for (var w = [], g = 1; g < arguments.length; g++) w[g - 1] = arguments[g];
      for (var y = 0, T = w; y < T.length; y++) Ta(x, T[y], !0);
      return x;
    }({}, a.defaultProps, O) : O;
  } }), process.env.NODE_ENV !== "production" && (hi(d, f), D.warnTooManyClasses = /* @__PURE__ */ function(O, x) {
    var w = {}, g = !1;
    return function(y) {
      if (!g && (w[y] = !0, Object.keys(w).length >= 200)) {
        var T = x ? ' with the id of "'.concat(x, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(O).concat(T, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), g = !0, w = {};
      }
    };
  }(d, f)), eo(D, function() {
    return ".".concat(D.styledComponentId);
  }), o && xi(D, r, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), D;
}
function Lo(r, n) {
  for (var t = [r[0]], e = 0, a = n.length; e < a; e += 1) t.push(n[e], r[e + 1]);
  return t;
}
var $o = function(r) {
  return Object.assign(r, { isCss: !0 });
};
function Zt(r) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
  if (jt(r) || ir(r)) return $o(_t(Lo(Xn, Pt([r], n, !0))));
  var e = r;
  return n.length === 0 && e.length === 1 && typeof e[0] == "string" ? _t(e) : $o(_t(Lo(e, n)));
}
function La(r, n, t) {
  if (t === void 0 && (t = sr), !n) throw nt(1, n);
  var e = function(a) {
    for (var o = [], s = 1; s < arguments.length; s++) o[s - 1] = arguments[s];
    return r(n, t, Zt.apply(void 0, Pt([a], o, !1)));
  };
  return e.attrs = function(a) {
    return La(r, n, Ce(Ce({}, t), { attrs: Array.prototype.concat(t.attrs, a).filter(Boolean) }));
  }, e.withConfig = function(a) {
    return La(r, n, Ce(Ce({}, t), a));
  }, e;
}
var Pi = function(r) {
  return La(Rl, r);
}, $ = Pi;
Pa.forEach(function(r) {
  $[r] = Pi(r);
});
var Ll = function() {
  function r(n, t) {
    this.rules = n, this.componentId = t, this.isStatic = Ei(n), On.registerId(this.componentId + 1);
  }
  return r.prototype.createStyles = function(n, t, e, a) {
    var o = a(En(_t(this.rules, t, e, a)), ""), s = this.componentId + n;
    e.insertRules(s, s, o);
  }, r.prototype.removeStyles = function(n, t) {
    t.clearRules(this.componentId + n);
  }, r.prototype.renderStyles = function(n, t, e, a) {
    n > 2 && On.registerId(this.componentId + n), this.removeStyles(n, e), this.createStyles(n, t, e, a);
  }, r;
}();
function $l(r) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
  var e = Zt.apply(void 0, Pt([r], n, !1)), a = "sc-global-".concat(Xa(JSON.stringify(e))), o = new Ll(e, a);
  process.env.NODE_ENV !== "production" && hi(a);
  var s = function(c) {
    var l = Ya(), u = M.useContext(cr), d = M.useRef(l.styleSheet.allocateGSInstance(a)).current;
    return process.env.NODE_ENV !== "production" && M.Children.count(c.children) && console.warn("The global style component ".concat(a, " was given child JSX. createGlobalStyle does not render children.")), process.env.NODE_ENV !== "production" && e.some(function(f) {
      return typeof f == "string" && f.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), l.styleSheet.server && i(d, c, l.styleSheet, u, l.stylis), M.useLayoutEffect(function() {
      if (!l.styleSheet.server) return i(d, c, l.styleSheet, u, l.stylis), function() {
        return o.removeStyles(d, l.styleSheet);
      };
    }, [d, c, l.styleSheet, u, l.stylis]), null;
  };
  function i(c, l, u, d, f) {
    if (o.isStatic) o.renderStyles(c, el, u, f);
    else {
      var p = Ce(Ce({}, l), { theme: mi(l, d, s.defaultProps) });
      o.renderStyles(c, p, u, f);
    }
  }
  return M.memo(s);
}
function Fr(r) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var e = En(Zt.apply(void 0, Pt([r], n, !1))), a = Xa(e);
  return new Ra(a, e);
}
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Ur = "__sc-".concat(Vt, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Ur] || (window[Ur] = 0), window[Ur] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Ur] += 1);
const Pr = "reactSchedulerOutsideWrapper", Il = $l`

  #${Pr} {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${Pr} *,
 #${Pr} *:before,
 #${Pr} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`, Fl = {
  mode: "light",
  navHeight: "44px",
  colors: {
    background: "#FFFFFF",
    gridBackground: "#FFFFFF",
    primary: "#F8F8FD",
    secondary: "#E6F3FF",
    tertiary: "#C9E5FF",
    textPrimary: "#1C222F",
    textSecondary: "#FFFFFF",
    placeholder: "#777777",
    button: "#FFFFFF",
    border: "#D2D2D2",
    tooltip: "#3B3C5F",
    hover: "#E6F3FF",
    disabled: "#777777",
    warning: "#EF4444",
    defaultTile: "#728DE2",
    accent: "#0A11EB"
  }
}, Al = {
  mode: "dark",
  navHeight: "44px",
  colors: {
    background: "#161B22",
    gridBackground: "#1E252E",
    primary: "#303b49",
    secondary: "#444e5b",
    tertiary: "#6E757F",
    textPrimary: "#DADCE0",
    textSecondary: "#EAEBED",
    placeholder: "#bbbbbb",
    button: "#60676f",
    border: "#2C333A",
    hover: "#303439",
    tooltip: "#3B3C5F",
    disabled: "#38414a",
    warning: "#FF4C4C",
    defaultTile: "#728DE2",
    accent: "#1798c2"
  }
}, wr = `
margin: 0;
padding: 0;
`, Oi = `
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;
$.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;
const Ye = 50, gt = 24, br = 16, At = 40, lr = At + br + gt, ht = 84, $e = 56, Fe = 300, tt = 12, Oe = 50, ur = 24, Yr = 16, $a = 40, Wl = ur + Yr + $a, Io = 1, Fo = 52, ze = {
  topRow: "600 14px Inter",
  middleRow: "400 10px Inter",
  bottomRow: {
    name: "600 14px Inter",
    number: "600 10px Inter"
  }
}, tr = 3, Hl = 1.6, Bl = 4.5, Ia = 12, Tn = 24, Vl = "reactSchedulerCanvasHeaderWrapper", Ti = "reactSchedulerCanvasWrapper", mt = Pr, jl = 4, Zl = 48, Dt = 5, zl = 40, Ao = 8, to = gt / 2 + 2, Ni = br / 2 + gt + 1, Wo = 2, ke = 60;
var un = { exports: {} }, Ql = un.exports, Ho;
function Jn() {
  return Ho || (Ho = 1, function(r, n) {
    (function(t, e) {
      r.exports = e();
    })(Ql, function() {
      var t = 1e3, e = 6e4, a = 36e5, o = "millisecond", s = "second", i = "minute", c = "hour", l = "day", u = "week", d = "month", f = "quarter", p = "year", h = "date", m = "Invalid Date", v = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, b = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, C = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(Y) {
        var S = ["th", "st", "nd", "rd"], k = Y % 100;
        return "[" + Y + (S[(k - 20) % 10] || S[k] || S[0]) + "]";
      } }, D = function(Y, S, k) {
        var E = String(Y);
        return !E || E.length >= S ? Y : "" + Array(S + 1 - E.length).join(k) + Y;
      }, O = { s: D, z: function(Y) {
        var S = -Y.utcOffset(), k = Math.abs(S), E = Math.floor(k / 60), _ = k % 60;
        return (S <= 0 ? "+" : "-") + D(E, 2, "0") + ":" + D(_, 2, "0");
      }, m: function Y(S, k) {
        if (S.date() < k.date()) return -Y(k, S);
        var E = 12 * (k.year() - S.year()) + (k.month() - S.month()), _ = S.clone().add(E, d), F = k - _ < 0, H = S.clone().add(E + (F ? -1 : 1), d);
        return +(-(E + (k - _) / (F ? _ - H : H - _)) || 0);
      }, a: function(Y) {
        return Y < 0 ? Math.ceil(Y) || 0 : Math.floor(Y);
      }, p: function(Y) {
        return { M: d, y: p, w: u, d: l, D: h, h: c, m: i, s, ms: o, Q: f }[Y] || String(Y || "").toLowerCase().replace(/s$/, "");
      }, u: function(Y) {
        return Y === void 0;
      } }, x = "en", w = {};
      w[x] = C;
      var g = "$isDayjsObject", y = function(Y) {
        return Y instanceof I || !(!Y || !Y[g]);
      }, T = function Y(S, k, E) {
        var _;
        if (!S) return x;
        if (typeof S == "string") {
          var F = S.toLowerCase();
          w[F] && (_ = F), k && (w[F] = k, _ = F);
          var H = S.split("-");
          if (!_ && H.length > 1) return Y(H[0]);
        } else {
          var Z = S.name;
          w[Z] = S, _ = Z;
        }
        return !E && _ && (x = _), _ || !E && x;
      }, R = function(Y, S) {
        if (y(Y)) return Y.clone();
        var k = typeof S == "object" ? S : {};
        return k.date = Y, k.args = arguments, new I(k);
      }, L = O;
      L.l = T, L.i = y, L.w = function(Y, S) {
        return R(Y, { locale: S.$L, utc: S.$u, x: S.$x, $offset: S.$offset });
      };
      var I = function() {
        function Y(k) {
          this.$L = T(k.locale, null, !0), this.parse(k), this.$x = this.$x || k.x || {}, this[g] = !0;
        }
        var S = Y.prototype;
        return S.parse = function(k) {
          this.$d = function(E) {
            var _ = E.date, F = E.utc;
            if (_ === null) return /* @__PURE__ */ new Date(NaN);
            if (L.u(_)) return /* @__PURE__ */ new Date();
            if (_ instanceof Date) return new Date(_);
            if (typeof _ == "string" && !/Z$/i.test(_)) {
              var H = _.match(v);
              if (H) {
                var Z = H[2] - 1 || 0, q = (H[7] || "0").substring(0, 3);
                return F ? new Date(Date.UTC(H[1], Z, H[3] || 1, H[4] || 0, H[5] || 0, H[6] || 0, q)) : new Date(H[1], Z, H[3] || 1, H[4] || 0, H[5] || 0, H[6] || 0, q);
              }
            }
            return new Date(_);
          }(k), this.init();
        }, S.init = function() {
          var k = this.$d;
          this.$y = k.getFullYear(), this.$M = k.getMonth(), this.$D = k.getDate(), this.$W = k.getDay(), this.$H = k.getHours(), this.$m = k.getMinutes(), this.$s = k.getSeconds(), this.$ms = k.getMilliseconds();
        }, S.$utils = function() {
          return L;
        }, S.isValid = function() {
          return this.$d.toString() !== m;
        }, S.isSame = function(k, E) {
          var _ = R(k);
          return this.startOf(E) <= _ && _ <= this.endOf(E);
        }, S.isAfter = function(k, E) {
          return R(k) < this.startOf(E);
        }, S.isBefore = function(k, E) {
          return this.endOf(E) < R(k);
        }, S.$g = function(k, E, _) {
          return L.u(k) ? this[E] : this.set(_, k);
        }, S.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, S.valueOf = function() {
          return this.$d.getTime();
        }, S.startOf = function(k, E) {
          var _ = this, F = !!L.u(E) || E, H = L.p(k), Z = function(fe, Q) {
            var re = L.w(_.$u ? Date.UTC(_.$y, Q, fe) : new Date(_.$y, Q, fe), _);
            return F ? re : re.endOf(l);
          }, q = function(fe, Q) {
            return L.w(_.toDate()[fe].apply(_.toDate("s"), (F ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Q)), _);
          }, te = this.$W, X = this.$M, he = this.$D, oe = "set" + (this.$u ? "UTC" : "");
          switch (H) {
            case p:
              return F ? Z(1, 0) : Z(31, 11);
            case d:
              return F ? Z(1, X) : Z(0, X + 1);
            case u:
              var z = this.$locale().weekStart || 0, ce = (te < z ? te + 7 : te) - z;
              return Z(F ? he - ce : he + (6 - ce), X);
            case l:
            case h:
              return q(oe + "Hours", 0);
            case c:
              return q(oe + "Minutes", 1);
            case i:
              return q(oe + "Seconds", 2);
            case s:
              return q(oe + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, S.endOf = function(k) {
          return this.startOf(k, !1);
        }, S.$set = function(k, E) {
          var _, F = L.p(k), H = "set" + (this.$u ? "UTC" : ""), Z = (_ = {}, _[l] = H + "Date", _[h] = H + "Date", _[d] = H + "Month", _[p] = H + "FullYear", _[c] = H + "Hours", _[i] = H + "Minutes", _[s] = H + "Seconds", _[o] = H + "Milliseconds", _)[F], q = F === l ? this.$D + (E - this.$W) : E;
          if (F === d || F === p) {
            var te = this.clone().set(h, 1);
            te.$d[Z](q), te.init(), this.$d = te.set(h, Math.min(this.$D, te.daysInMonth())).$d;
          } else Z && this.$d[Z](q);
          return this.init(), this;
        }, S.set = function(k, E) {
          return this.clone().$set(k, E);
        }, S.get = function(k) {
          return this[L.p(k)]();
        }, S.add = function(k, E) {
          var _, F = this;
          k = Number(k);
          var H = L.p(E), Z = function(X) {
            var he = R(F);
            return L.w(he.date(he.date() + Math.round(X * k)), F);
          };
          if (H === d) return this.set(d, this.$M + k);
          if (H === p) return this.set(p, this.$y + k);
          if (H === l) return Z(1);
          if (H === u) return Z(7);
          var q = (_ = {}, _[i] = e, _[c] = a, _[s] = t, _)[H] || 1, te = this.$d.getTime() + k * q;
          return L.w(te, this);
        }, S.subtract = function(k, E) {
          return this.add(-1 * k, E);
        }, S.format = function(k) {
          var E = this, _ = this.$locale();
          if (!this.isValid()) return _.invalidDate || m;
          var F = k || "YYYY-MM-DDTHH:mm:ssZ", H = L.z(this), Z = this.$H, q = this.$m, te = this.$M, X = _.weekdays, he = _.months, oe = _.meridiem, z = function(Q, re, ne, Ue) {
            return Q && (Q[re] || Q(E, F)) || ne[re].slice(0, Ue);
          }, ce = function(Q) {
            return L.s(Z % 12 || 12, Q, "0");
          }, fe = oe || function(Q, re, ne) {
            var Ue = Q < 12 ? "AM" : "PM";
            return ne ? Ue.toLowerCase() : Ue;
          };
          return F.replace(b, function(Q, re) {
            return re || function(ne) {
              switch (ne) {
                case "YY":
                  return String(E.$y).slice(-2);
                case "YYYY":
                  return L.s(E.$y, 4, "0");
                case "M":
                  return te + 1;
                case "MM":
                  return L.s(te + 1, 2, "0");
                case "MMM":
                  return z(_.monthsShort, te, he, 3);
                case "MMMM":
                  return z(he, te);
                case "D":
                  return E.$D;
                case "DD":
                  return L.s(E.$D, 2, "0");
                case "d":
                  return String(E.$W);
                case "dd":
                  return z(_.weekdaysMin, E.$W, X, 2);
                case "ddd":
                  return z(_.weekdaysShort, E.$W, X, 3);
                case "dddd":
                  return X[E.$W];
                case "H":
                  return String(Z);
                case "HH":
                  return L.s(Z, 2, "0");
                case "h":
                  return ce(1);
                case "hh":
                  return ce(2);
                case "a":
                  return fe(Z, q, !0);
                case "A":
                  return fe(Z, q, !1);
                case "m":
                  return String(q);
                case "mm":
                  return L.s(q, 2, "0");
                case "s":
                  return String(E.$s);
                case "ss":
                  return L.s(E.$s, 2, "0");
                case "SSS":
                  return L.s(E.$ms, 3, "0");
                case "Z":
                  return H;
              }
              return null;
            }(Q) || H.replace(":", "");
          });
        }, S.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, S.diff = function(k, E, _) {
          var F, H = this, Z = L.p(E), q = R(k), te = (q.utcOffset() - this.utcOffset()) * e, X = this - q, he = function() {
            return L.m(H, q);
          };
          switch (Z) {
            case p:
              F = he() / 12;
              break;
            case d:
              F = he();
              break;
            case f:
              F = he() / 3;
              break;
            case u:
              F = (X - te) / 6048e5;
              break;
            case l:
              F = (X - te) / 864e5;
              break;
            case c:
              F = X / a;
              break;
            case i:
              F = X / e;
              break;
            case s:
              F = X / t;
              break;
            default:
              F = X;
          }
          return _ ? F : L.a(F);
        }, S.daysInMonth = function() {
          return this.endOf(d).$D;
        }, S.$locale = function() {
          return w[this.$L];
        }, S.locale = function(k, E) {
          if (!k) return this.$L;
          var _ = this.clone(), F = T(k, E, !0);
          return F && (_.$L = F), _;
        }, S.clone = function() {
          return L.w(this.$d, this);
        }, S.toDate = function() {
          return new Date(this.valueOf());
        }, S.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, S.toISOString = function() {
          return this.$d.toISOString();
        }, S.toString = function() {
          return this.$d.toUTCString();
        }, Y;
      }(), V = I.prototype;
      return R.prototype = V, [["$ms", o], ["$s", s], ["$m", i], ["$H", c], ["$W", l], ["$M", d], ["$y", p], ["$D", h]].forEach(function(Y) {
        V[Y[1]] = function(S) {
          return this.$g(S, Y[0], Y[1]);
        };
      }), R.extend = function(Y, S) {
        return Y.$i || (Y(S, I, R), Y.$i = !0), R;
      }, R.locale = T, R.isDayjs = y, R.unix = function(Y) {
        return R(1e3 * Y);
      }, R.en = w[x], R.Ls = w, R.p = {}, R;
    });
  }(un)), un.exports;
}
var ql = Jn();
const W = /* @__PURE__ */ qe(ql), Bo = (r) => r % 4 === 0 && r % 100 > 0 || r % 400 === 0 ? 366 : 365, ro = (r) => {
  const n = r.day();
  return n !== 0 && n !== 6;
}, Yi = (r, n) => W(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(n, "months").daysInMonth(), Ri = (r) => ({
  hour: r.hour(),
  dayName: r.format("ddd"),
  dayOfMonth: r.date(),
  weekOfYear: r.isoWeek(),
  month: r.month(),
  monthName: r.format("MMMM"),
  isBusinessDay: ro(r),
  isCurrentDay: r.isSame(W(), "day"),
  year: parseInt(r.format("YYYY"))
}), no = (r, n, t, e, a, o, s) => {
  r.strokeStyle = s.colors.border, o ? r.fillStyle = s.colors.secondary : a ? r.fillStyle = "transparent" : r.fillStyle = s.colors.primary, r.beginPath(), r.setLineDash([]), r.fillRect(n, t, e, $e), r.strokeRect(n + 0.5, t + 0.5, e, $e);
}, Ul = (r, n, t, e, a) => {
  for (let o = 0; o < n; o++)
    for (let s = 0; s <= t; s++) {
      const i = W(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(
        s,
        "days"
      ), c = i.isSame(W(), "day");
      no(
        r,
        s * Ye,
        o * $e,
        Ye,
        ro(i),
        c,
        a
      );
    }
}, Kl = (r, n, t, e) => {
  r.setLineDash([5, 5]), r.strokeStyle = e.colors.border, r.moveTo(n + 0.5, 0.5), r.lineTo(n + 0.5, t + 0.5), r.stroke();
}, Gl = (r, n, t, e, a) => {
  let o = 0, s = -(e.dayOfMonth - 1) * tt;
  for (let i = 0; i <= t; i++) {
    const l = W(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(
      i,
      "weeks"
    ).isSame(W(), "week");
    for (let u = 0; u < n; u++)
      no(r, o, u * $e, ht, !0, l, a);
    o += ht;
  }
  for (let i = 0; i < t; i++) {
    const c = Yi(e, i) * tt;
    Kl(r, s, n * $e, a), s += c;
  }
}, Xl = (r, n, t, e, a) => {
  const o = W(`${e.year}-${e.month + 1}-${e.dayOfMonth + 1}`);
  for (let s = 0; s < n; s++)
    for (let i = 0; i <= t; i++) {
      let c;
      i === Math.floor(t / 2) ? c = W() : i > Math.floor(t / 2) ? c = W().add(i - Math.floor(t / 2), "hours") : c = W().subtract(Math.floor(t / 2) - s, "hours");
      const l = o.isSame(W(), "day") && c.isSame(W(), "hour");
      no(
        r,
        i * Oe + Oe / 2 - 0.5,
        // -0.5 to make borders better aligned with hour axis
        s * $e,
        Oe,
        ro(c),
        l,
        a
      );
    }
}, Jl = (r, n, t, e, a, o) => {
  if (r.clearRect(0, 0, r.canvas.width, r.canvas.height), !!document.getElementById(Ti))
    switch (n) {
      case 0:
        Gl(r, t, e, a, o);
        break;
      case 1:
        Ul(r, t, e, a, o);
        break;
      case 2:
        Xl(r, t, e, a, o);
        break;
    }
};
var dn = { exports: {} }, eu = dn.exports, Vo;
function tu() {
  return Vo || (Vo = 1, function(r, n) {
    (function(t, e) {
      r.exports = e();
    })(eu, function() {
      var t = "week", e = "year";
      return function(a, o, s) {
        var i = o.prototype;
        i.week = function(c) {
          if (c === void 0 && (c = null), c !== null) return this.add(7 * (c - this.week()), "day");
          var l = this.$locale().yearStart || 1;
          if (this.month() === 11 && this.date() > 25) {
            var u = s(this).startOf(e).add(1, e).date(l), d = s(this).endOf(t);
            if (u.isBefore(d)) return 1;
          }
          var f = s(this).startOf(e).date(l).startOf(t).subtract(1, "millisecond"), p = this.diff(f, t, !0);
          return p < 0 ? s(this).startOf("week").week() : Math.ceil(p);
        }, i.weeks = function(c) {
          return c === void 0 && (c = null), this.week(c);
        };
      };
    });
  }(dn)), dn.exports;
}
var ru = tu();
const nu = /* @__PURE__ */ qe(ru);
var fn = { exports: {} }, au = fn.exports, jo;
function ou() {
  return jo || (jo = 1, function(r, n) {
    (function(t, e) {
      r.exports = e();
    })(au, function() {
      return function(t, e, a) {
        e.prototype.dayOfYear = function(o) {
          var s = Math.round((a(this).startOf("day") - a(this).startOf("year")) / 864e5) + 1;
          return o == null ? s : this.add(o - s, "day");
        };
      };
    });
  }(fn)), fn.exports;
}
var su = ou();
const iu = /* @__PURE__ */ qe(su);
var pn = { exports: {} }, cu = pn.exports, Zo;
function lu() {
  return Zo || (Zo = 1, function(r, n) {
    (function(t, e) {
      r.exports = e();
    })(cu, function() {
      var t = "day";
      return function(e, a, o) {
        var s = function(l) {
          return l.add(4 - l.isoWeekday(), t);
        }, i = a.prototype;
        i.isoWeekYear = function() {
          return s(this).year();
        }, i.isoWeek = function(l) {
          if (!this.$utils().u(l)) return this.add(7 * (l - this.isoWeek()), t);
          var u, d, f, p, h = s(this), m = (u = this.isoWeekYear(), d = this.$u, f = (d ? o.utc : o)().year(u).startOf("year"), p = 4 - f.isoWeekday(), f.isoWeekday() > 4 && (p += 7), f.add(p, t));
          return h.diff(m, "week") + 1;
        }, i.isoWeekday = function(l) {
          return this.$utils().u(l) ? this.day() || 7 : this.day(this.day() % 7 ? l : l - 7);
        };
        var c = i.startOf;
        i.startOf = function(l, u) {
          var d = this.$utils(), f = !!d.u(u) || u;
          return d.p(l) === "isoweek" ? f ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : c.bind(this)(l, u);
        };
      };
    });
  }(pn)), pn.exports;
}
var uu = lu();
const du = /* @__PURE__ */ qe(uu);
var hn = { exports: {} }, fu = hn.exports, zo;
function pu() {
  return zo || (zo = 1, function(r, n) {
    (function(t, e) {
      r.exports = e();
    })(fu, function() {
      return function(t, e, a) {
        e.prototype.isBetween = function(o, s, i, c) {
          var l = a(o), u = a(s), d = (c = c || "()")[0] === "(", f = c[1] === ")";
          return (d ? this.isAfter(l, i) : !this.isBefore(l, i)) && (f ? this.isBefore(u, i) : !this.isAfter(u, i)) || (d ? this.isBefore(l, i) : !this.isAfter(l, i)) && (f ? this.isAfter(u, i) : !this.isBefore(u, i));
        };
      };
    });
  }(hn)), hn.exports;
}
var hu = pu();
const mu = /* @__PURE__ */ qe(hu);
var mn = { exports: {} }, vu = mn.exports, Qo;
function gu() {
  return Qo || (Qo = 1, function(r, n) {
    (function(t, e) {
      r.exports = e();
    })(vu, function() {
      var t, e, a = 1e3, o = 6e4, s = 36e5, i = 864e5, c = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, l = 31536e6, u = 2628e6, d = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, f = { years: l, months: u, days: i, hours: s, minutes: o, seconds: a, milliseconds: 1, weeks: 6048e5 }, p = function(w) {
        return w instanceof O;
      }, h = function(w, g, y) {
        return new O(w, y, g.$l);
      }, m = function(w) {
        return e.p(w) + "s";
      }, v = function(w) {
        return w < 0;
      }, b = function(w) {
        return v(w) ? Math.ceil(w) : Math.floor(w);
      }, C = function(w) {
        return Math.abs(w);
      }, D = function(w, g) {
        return w ? v(w) ? { negative: !0, format: "" + C(w) + g } : { negative: !1, format: "" + w + g } : { negative: !1, format: "" };
      }, O = function() {
        function w(y, T, R) {
          var L = this;
          if (this.$d = {}, this.$l = R, y === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), T) return h(y * f[m(T)], this);
          if (typeof y == "number") return this.$ms = y, this.parseFromMilliseconds(), this;
          if (typeof y == "object") return Object.keys(y).forEach(function(Y) {
            L.$d[m(Y)] = y[Y];
          }), this.calMilliseconds(), this;
          if (typeof y == "string") {
            var I = y.match(d);
            if (I) {
              var V = I.slice(2).map(function(Y) {
                return Y != null ? Number(Y) : 0;
              });
              return this.$d.years = V[0], this.$d.months = V[1], this.$d.weeks = V[2], this.$d.days = V[3], this.$d.hours = V[4], this.$d.minutes = V[5], this.$d.seconds = V[6], this.calMilliseconds(), this;
            }
          }
          return this;
        }
        var g = w.prototype;
        return g.calMilliseconds = function() {
          var y = this;
          this.$ms = Object.keys(this.$d).reduce(function(T, R) {
            return T + (y.$d[R] || 0) * f[R];
          }, 0);
        }, g.parseFromMilliseconds = function() {
          var y = this.$ms;
          this.$d.years = b(y / l), y %= l, this.$d.months = b(y / u), y %= u, this.$d.days = b(y / i), y %= i, this.$d.hours = b(y / s), y %= s, this.$d.minutes = b(y / o), y %= o, this.$d.seconds = b(y / a), y %= a, this.$d.milliseconds = y;
        }, g.toISOString = function() {
          var y = D(this.$d.years, "Y"), T = D(this.$d.months, "M"), R = +this.$d.days || 0;
          this.$d.weeks && (R += 7 * this.$d.weeks);
          var L = D(R, "D"), I = D(this.$d.hours, "H"), V = D(this.$d.minutes, "M"), Y = this.$d.seconds || 0;
          this.$d.milliseconds && (Y += this.$d.milliseconds / 1e3, Y = Math.round(1e3 * Y) / 1e3);
          var S = D(Y, "S"), k = y.negative || T.negative || L.negative || I.negative || V.negative || S.negative, E = I.format || V.format || S.format ? "T" : "", _ = (k ? "-" : "") + "P" + y.format + T.format + L.format + E + I.format + V.format + S.format;
          return _ === "P" || _ === "-P" ? "P0D" : _;
        }, g.toJSON = function() {
          return this.toISOString();
        }, g.format = function(y) {
          var T = y || "YYYY-MM-DDTHH:mm:ss", R = { Y: this.$d.years, YY: e.s(this.$d.years, 2, "0"), YYYY: e.s(this.$d.years, 4, "0"), M: this.$d.months, MM: e.s(this.$d.months, 2, "0"), D: this.$d.days, DD: e.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: e.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: e.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: e.s(this.$d.seconds, 2, "0"), SSS: e.s(this.$d.milliseconds, 3, "0") };
          return T.replace(c, function(L, I) {
            return I || String(R[L]);
          });
        }, g.as = function(y) {
          return this.$ms / f[m(y)];
        }, g.get = function(y) {
          var T = this.$ms, R = m(y);
          return R === "milliseconds" ? T %= 1e3 : T = R === "weeks" ? b(T / f[R]) : this.$d[R], T || 0;
        }, g.add = function(y, T, R) {
          var L;
          return L = T ? y * f[m(T)] : p(y) ? y.$ms : h(y, this).$ms, h(this.$ms + L * (R ? -1 : 1), this);
        }, g.subtract = function(y, T) {
          return this.add(y, T, !0);
        }, g.locale = function(y) {
          var T = this.clone();
          return T.$l = y, T;
        }, g.clone = function() {
          return h(this.$ms, this);
        }, g.humanize = function(y) {
          return t().add(this.$ms, "ms").locale(this.$l).fromNow(!y);
        }, g.valueOf = function() {
          return this.asMilliseconds();
        }, g.milliseconds = function() {
          return this.get("milliseconds");
        }, g.asMilliseconds = function() {
          return this.as("milliseconds");
        }, g.seconds = function() {
          return this.get("seconds");
        }, g.asSeconds = function() {
          return this.as("seconds");
        }, g.minutes = function() {
          return this.get("minutes");
        }, g.asMinutes = function() {
          return this.as("minutes");
        }, g.hours = function() {
          return this.get("hours");
        }, g.asHours = function() {
          return this.as("hours");
        }, g.days = function() {
          return this.get("days");
        }, g.asDays = function() {
          return this.as("days");
        }, g.weeks = function() {
          return this.get("weeks");
        }, g.asWeeks = function() {
          return this.as("weeks");
        }, g.months = function() {
          return this.get("months");
        }, g.asMonths = function() {
          return this.as("months");
        }, g.years = function() {
          return this.get("years");
        }, g.asYears = function() {
          return this.as("years");
        }, w;
      }(), x = function(w, g, y) {
        return w.add(g.years() * y, "y").add(g.months() * y, "M").add(g.days() * y, "d").add(g.hours() * y, "h").add(g.minutes() * y, "m").add(g.seconds() * y, "s").add(g.milliseconds() * y, "ms");
      };
      return function(w, g, y) {
        t = y, e = y().$utils(), y.duration = function(L, I) {
          var V = y.locale();
          return h(L, { $l: V }, I);
        }, y.isDuration = p;
        var T = g.prototype.add, R = g.prototype.subtract;
        g.prototype.add = function(L, I) {
          return p(L) ? x(this, L, 1) : T.bind(this)(L, I);
        }, g.prototype.subtract = function(L, I) {
          return p(L) ? x(this, L, -1) : R.bind(this)(L, I);
        };
      };
    });
  }(mn)), mn.exports;
}
var yu = gu();
const wu = /* @__PURE__ */ qe(yu);
var ma, qo;
function bu() {
  if (qo) return ma;
  qo = 1;
  var r = "Expected a function", n = NaN, t = "[object Symbol]", e = /^\s+|\s+$/g, a = /^[-+]0x[0-9a-f]+$/i, o = /^0b[01]+$/i, s = /^0o[0-7]+$/i, i = parseInt, c = typeof Zr == "object" && Zr && Zr.Object === Object && Zr, l = typeof self == "object" && self && self.Object === Object && self, u = c || l || Function("return this")(), d = Object.prototype, f = d.toString, p = Math.max, h = Math.min, m = function() {
    return u.Date.now();
  };
  function v(x, w, g) {
    var y, T, R, L, I, V, Y = 0, S = !1, k = !1, E = !0;
    if (typeof x != "function")
      throw new TypeError(r);
    w = O(w) || 0, b(g) && (S = !!g.leading, k = "maxWait" in g, R = k ? p(O(g.maxWait) || 0, w) : R, E = "trailing" in g ? !!g.trailing : E);
    function _(z) {
      var ce = y, fe = T;
      return y = T = void 0, Y = z, L = x.apply(fe, ce), L;
    }
    function F(z) {
      return Y = z, I = setTimeout(q, w), S ? _(z) : L;
    }
    function H(z) {
      var ce = z - V, fe = z - Y, Q = w - ce;
      return k ? h(Q, R - fe) : Q;
    }
    function Z(z) {
      var ce = z - V, fe = z - Y;
      return V === void 0 || ce >= w || ce < 0 || k && fe >= R;
    }
    function q() {
      var z = m();
      if (Z(z))
        return te(z);
      I = setTimeout(q, H(z));
    }
    function te(z) {
      return I = void 0, E && y ? _(z) : (y = T = void 0, L);
    }
    function X() {
      I !== void 0 && clearTimeout(I), Y = 0, y = V = T = I = void 0;
    }
    function he() {
      return I === void 0 ? L : te(m());
    }
    function oe() {
      var z = m(), ce = Z(z);
      if (y = arguments, T = this, V = z, ce) {
        if (I === void 0)
          return F(V);
        if (k)
          return I = setTimeout(q, w), _(V);
      }
      return I === void 0 && (I = setTimeout(q, w)), L;
    }
    return oe.cancel = X, oe.flush = he, oe;
  }
  function b(x) {
    var w = typeof x;
    return !!x && (w == "object" || w == "function");
  }
  function C(x) {
    return !!x && typeof x == "object";
  }
  function D(x) {
    return typeof x == "symbol" || C(x) && f.call(x) == t;
  }
  function O(x) {
    if (typeof x == "number")
      return x;
    if (D(x))
      return n;
    if (b(x)) {
      var w = typeof x.valueOf == "function" ? x.valueOf() : x;
      x = b(w) ? w + "" : w;
    }
    if (typeof x != "string")
      return x === 0 ? x : +x;
    x = x.replace(e, "");
    var g = o.test(x);
    return g || s.test(x) ? i(x.slice(2), g ? 2 : 8) : a.test(x) ? n : +x;
  }
  return ma = v, ma;
}
var Du = bu();
const Rt = /* @__PURE__ */ qe(Du), Fa = [0, 1, 2], xu = (r) => Fa.includes(r), er = (r) => {
  var e;
  const t = (((e = document.getElementById(mt)) == null ? void 0 : e.clientWidth) || 0) - Fe;
  switch (r) {
    case 1:
      return Math.ceil(t / Ye) * tr;
    case 2:
      return Math.ceil(t / Oe) * tr;
    default:
      return Math.ceil(t / ht) * tr;
  }
}, ku = (r) => er(r) / tr, ao = (r, n) => {
  const t = er(n) / 2;
  let e;
  switch (n) {
    case 1:
      e = r.subtract(t, "days");
      break;
    case 2:
      e = r.subtract(t, "hours");
      break;
    default:
      e = r.subtract(t, "weeks");
      break;
  }
  let a;
  switch (n) {
    case 1:
      a = r.add(t, "days");
      break;
    case 2:
      a = r.add(t, "hours");
      break;
    default:
      a = r.add(t, "weeks");
      break;
  }
  return {
    startDate: e,
    endDate: a
  };
}, Mu = (r, n) => {
  const t = ao(r, n);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, oo = () => {
  var t;
  return ((((t = document.getElementById(mt)) == null ? void 0 : t.clientWidth) || 0) - Fe) * tr;
}, _u = (r, n) => {
  const t = document.getElementById(mt);
  if (!t)
    return {
      startDate: r.subtract(2, n === 2 ? "hours" : n === 1 ? "days" : "weeks").toDate(),
      endDate: r.add(2, n === 2 ? "hours" : n === 1 ? "days" : "weeks").toDate()
    };
  const e = t.scrollLeft, o = t.clientWidth - Fe;
  let s, i;
  switch (n) {
    case 1:
      s = Ye, i = "days";
      break;
    case 2:
      s = Oe, i = "hours";
      break;
    default:
      s = ht, i = "weeks";
      break;
  }
  const c = Math.ceil(o / s), l = o * 3, u = Math.ceil(l / s), d = Math.floor(u / 2), p = Math.floor(e / s) - d + Math.floor(c / 2), h = r.add(p - Math.floor(c / 2), i), m = r.add(p + Math.ceil(c / 2), i);
  return {
    startDate: h.toDate(),
    endDate: m.toDate()
  };
}, Li = ni({
  handleGoNext: () => {
  },
  handleScrollNext: () => {
  },
  handleGoPrev: () => {
  },
  handleScrollPrev: () => {
  },
  handleGoToday: () => {
  },
  handleGoDate: () => {
  },
  zoomIn: () => {
  },
  zoomOut: () => {
  },
  handleFilterData: () => {
  },
  updateTilesCoords: () => {
  },
  tilesCoords: [],
  zoom: 0,
  isNextZoom: !1,
  isPrevZoom: !1,
  date: W(),
  isLoading: !1,
  cols: 0,
  startDate: {
    hour: 0,
    dayName: "",
    dayOfMonth: 0,
    weekOfYear: 0,
    month: 0,
    monthName: "",
    isCurrentDay: !1,
    isBusinessDay: !1,
    year: 0
  },
  dayOfYear: 0,
  recordsThreshold: 0,
  config: {
    zoom: 0
  }
});
W.extend(nu);
W.extend(iu);
W.extend(du);
W.extend(mu);
W.extend(wu);
const Cu = ({
  data: r,
  children: n,
  isLoading: t,
  config: e,
  defaultStartDate: a = W(),
  onRangeChange: o,
  onVisibleViewportChange: s,
  onZoomChange: i,
  onFilterData: c,
  onClearFilterData: l
}) => {
  const { zoom: u, maxRecordsPerPage: d = 50, minZoom: f = 0, maxZoom: p = Fa[Fa.length - 1] } = e, [h, m] = ve(u), [v, b] = ve(W()), [C, D] = ve(!1), [O, x] = ve(er(h)), w = h < p, g = h > f, y = ct(() => Mu(v, h), [v, h]), T = ao(v, h).startDate, R = W(T).dayOfYear(), L = Ri(T), I = Me(null), [V, Y] = ve([{ x: 0, y: 0 }]), S = de(
    (Q, re = "auto") => {
      var Ue, bt, Vr, jr;
      const ne = oo();
      switch (Q) {
        case "back":
          return (Ue = I.current) == null ? void 0 : Ue.scrollTo({
            behavior: re,
            left: ne / 3
          });
        case "forward":
          return (bt = I.current) == null ? void 0 : bt.scrollTo({
            behavior: re,
            left: ne / 3
          });
        case "middle": {
          const ua = ne / tr / 4;
          return (Vr = I.current) == null ? void 0 : Vr.scrollTo({
            behavior: re,
            left: ne / 2 - ua
          });
        }
        default:
          return (jr = I.current) == null ? void 0 : jr.scrollTo({
            behavior: re,
            left: ne / 2
          });
      }
    },
    []
  ), k = (Q) => {
    Y(Q);
  }, E = de(() => {
    if (s && C) {
      const Q = _u(v, h);
      s(Q);
    }
  }, [s, v, h, C]), _ = de(
    (Q) => {
      const re = ku(h);
      let ne;
      switch (h) {
        case 0:
          ne = re * 7;
          break;
        case 1:
          ne = re;
          break;
        case 2:
          ne = Math.ceil(re / Tn);
          break;
      }
      Rt(() => {
        switch (Q) {
          case "back":
            b((bt) => bt.subtract(ne, "days"));
            break;
          case "forward":
            b((bt) => bt.add(ne, "days"));
            break;
          case "middle":
            b(W());
            break;
        }
        o == null || o(y);
      }, 300)();
    },
    [o, y, h]
  );
  ge(() => {
    I.current = document.getElementById(mt), x(er(h));
  }, [h]), ge(() => {
    const Q = () => x(er(h));
    return window.addEventListener("resize", Q), () => window.removeEventListener("resize", Q);
  }, [h]), ge(() => {
    const Q = document.getElementById(mt);
    if (!Q) return;
    const re = Rt(E, 100), ne = () => {
      re();
    };
    return Q.addEventListener("scroll", ne), () => {
      Q.removeEventListener("scroll", ne), re.cancel();
    };
  }, [E]), ge(() => {
    o == null || o(y);
  }, [o, y]), ge(() => {
    D(!1);
  }, [a]), ge(() => {
    C || (S("middle"), D(!0), b(a), setTimeout(E, 500));
  }, [a, C, S, E]);
  const F = () => {
    t || (b(
      (Q) => h === 2 ? Q.add(Io, "hours") : Q.add(Wo, "weeks")
    ), o == null || o(y), setTimeout(E, 400));
  }, H = de(() => {
    t || (_("forward"), Rt(() => {
      S("forward");
    }, 300)());
  }, [t, _, S]), Z = () => {
    t || (b(
      (Q) => h === 2 ? Q.subtract(Io, "hours") : Q.subtract(Wo, "weeks")
    ), o == null || o(y), setTimeout(E, 400));
  }, q = de(() => {
    !C || t || (_("back"), Rt(() => {
      S("back");
    }, 300)());
  }, [C, t, _, S]), te = de(() => {
    t || (_("middle"), Rt(() => {
      S("middle", "smooth"), setTimeout(E, 600);
    }, 300)());
  }, [t, _, S, E]), X = de(
    (Q) => {
      t || (b(Q), o == null || o(y), setTimeout(E, 400));
    },
    [t, o, y, E]
  ), he = () => z(h + 1), oe = () => z(h - 1), z = (Q) => {
    if (!xu(Q)) return;
    const re = Q;
    m(re), x(er(re)), o == null || o(y), i == null || i(re), setTimeout(E, 400);
  }, ce = () => c == null ? void 0 : c(), { Provider: fe } = Li;
  return /* @__PURE__ */ N(
    fe,
    {
      value: {
        data: r,
        config: e,
        handleGoNext: F,
        handleScrollNext: H,
        handleGoPrev: Z,
        handleScrollPrev: q,
        handleGoToday: te,
        handleGoDate: X,
        zoomIn: he,
        zoomOut: oe,
        zoom: h,
        isNextZoom: w,
        isPrevZoom: g,
        date: v,
        isLoading: t,
        cols: O,
        startDate: L,
        dayOfYear: R,
        handleFilterData: ce,
        tilesCoords: V,
        updateTilesCoords: k,
        recordsThreshold: d,
        onClearFilterData: l
      },
      children: n
    }
  );
}, Dr = () => zn(Li), $i = (r, n, t) => {
  r.canvas.width = n * window.devicePixelRatio, r.canvas.height = t * window.devicePixelRatio, r.canvas.style.width = n + "px", r.canvas.style.height = t + "px", r.scale(window.devicePixelRatio, window.devicePixelRatio);
}, Su = $.div`
  height: calc(100vh - headerHeight);
`, Eu = $.div`
  position: relative;
`, Pu = $.canvas``;
$.canvas``;
const Uo = $.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ $position: r }) => r === "left" ? 0 : "auto"};
  right: ${({ $position: r }) => r === "right" ? 0 : "auto"};
`, Ou = Ec(function({ zoom: n, rows: t, data: e, onTileClick: a, editable: o, onTileDragEnd: s }, i) {
  const { handleScrollNext: c, handleScrollPrev: l, date: u, isLoading: d, cols: f, startDate: p } = Dr(), h = Me(null), m = Me(null), v = Me(null), b = Ut(), C = de(
    (D) => {
      const O = oo(), x = t * $e + 1;
      $i(D, O, x), Jl(D, n, t, f, p, b);
    },
    [f, p, t, n, b]
  );
  return ge(() => {
    if (!h.current) return;
    const D = h.current.getContext("2d");
    if (!D) return;
    const O = () => C(D);
    return window.addEventListener("resize", O), () => window.removeEventListener("resize", O);
  }, [C]), ge(() => {
    const D = h.current;
    if (!D) return;
    D.style.letterSpacing = "1px";
    const O = D.getContext("2d");
    O && C(O);
  }, [u, t, n, C]), ge(() => {
    if (!m.current) return;
    const D = new IntersectionObserver(
      (O) => O[0].isIntersecting ? c() : null,
      { root: document.getElementById(mt) }
    );
    return D.observe(m.current), () => D.disconnect();
  }, [c]), ge(() => {
    if (!v.current) return;
    const D = new IntersectionObserver(
      (O) => O[0].isIntersecting ? l() : null,
      {
        root: document.getElementById(mt),
        rootMargin: `0px 0px 0px -${Fe}px`
      }
    );
    return D.observe(v.current), () => D.disconnect();
  }, [l]), /* @__PURE__ */ N(Su, { id: Ti, className: "grid-wrapper", children: /* @__PURE__ */ U(Eu, { ref: i, className: "grid-inner-wrapper", children: [
    /* @__PURE__ */ N(Uo, { $position: "left", ref: v, className: "grid-scroll-trigger-left" }),
    /* @__PURE__ */ N(Us, { isLoading: d, $position: "left" }),
    /* @__PURE__ */ N(Pu, { ref: h, className: "grid-canvas" }),
    /* @__PURE__ */ N(Z0, { data: e, zoom: n, onTileClick: a, editable: o, onTileDragEnd: s }),
    /* @__PURE__ */ N(Uo, { ref: m, $position: "right", className: "grid-scroll-trigger-right" }),
    /* @__PURE__ */ N(Us, { isLoading: d, $position: "right" })
  ] }) });
}), Ii = (r) => {
  const n = W.duration(r, "seconds"), t = n.hours(), e = n.minutes();
  return { hours: t, minutes: e };
}, Fi = (r) => {
  let n = 0, t = 0, e = 0;
  return r.forEach((a) => {
    n += a.minutes;
    const o = Math.floor(n / ke);
    t += a.hours + o, e += n % ke, e >= ke && (t++, e -= ke);
  }), { hours: t, minutes: e };
}, Ai = (r, n) => {
  let t = Ao;
  switch (n) {
    case 0:
      t = zl;
      break;
    case 1:
      t = Ao;
      break;
    case 2:
      t = 1;
      break;
  }
  const e = () => {
    let o = t - r.hours - 1, s = ke - r.minutes;
    return s === ke && (o++, s = 0), { hours: Math.max(0, o), minutes: o < 0 ? 0 : s };
  }, a = () => {
    const o = r.hours - t, s = r.minutes;
    return { hours: Math.max(0, o), minutes: o < 0 ? 0 : s };
  };
  return {
    free: e(),
    overtime: a()
  };
}, Tu = (r, n, t) => {
  const e = n.isoWeek(), a = r.map((l) => {
    const u = W(l.startDate).isoWeek(), d = W(l.startDate).isoWeekday(), f = W(l.endDate).isoWeek(), p = W(l.endDate).isoWeekday(), { hours: h, minutes: m } = Ii(l.occupancy);
    if (e === u) {
      const v = (Dt + 1 - d) * h, b = (Dt + 1 - d) * m;
      return { hours: Math.max(0, v), minutes: b };
    } else if (e === f) {
      const v = p > Dt ? Dt * h : p * h, b = p > Dt ? Dt * m : p * m;
      return { hours: v, minutes: b };
    } else if (W(n).isBetween(l.startDate, l.endDate))
      return { hours: Dt * h, minutes: Dt * m };
    return { hours: 0, minutes: 0 };
  }), { hours: o, minutes: s } = Fi(a), { free: i, overtime: c } = Ai({ hours: o, minutes: s }, t);
  return {
    taken: { hours: Math.max(0, o), minutes: Math.max(0, s) },
    free: i,
    overtime: c
  };
}, Nu = (r, n, t, e) => {
  const a = n.isoWeekday(), o = r.map((u) => {
    const { hours: d, minutes: f } = Ii(u.occupancy);
    return a <= (e ? 7 : 5) ? { hours: d, minutes: f } : { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = Fi(o), { free: c, overtime: l } = Ai({ hours: s, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: c,
    overtime: l
  };
}, Yu = (r, n) => {
  let t = 0;
  r.forEach((i) => {
    const c = W(i.startDate).hour(), l = W(i.endDate).hour(), u = n.hour(), d = W(i.endDate).minute(), f = W(i.startDate).minute();
    c < u && l > u ? t += ke : c === u && l === u && f && d ? t += d ? d - f : ke - f : c === u && l >= u ? t += f ? ke - f : ke : l === u && d && (t += d);
  });
  const e = Math.floor(t / ke), a = t % ke, o = e || a ? 0 : 1, s = e ? 0 : a ? ke - a : 0;
  return {
    taken: { hours: e, minutes: a },
    free: { hours: o, minutes: s },
    overtime: { hours: 0, minutes: 0 }
  };
}, Ru = (r, n, t, e, a = !1) => {
  if (n < 0)
    return {
      taken: { hours: 0, minutes: 0 },
      free: { hours: 0, minutes: 0 },
      overtime: { hours: 0, minutes: 0 }
    };
  const o = r.flat(2).filter((s) => e === 1 ? W(t).isBetween(s.startDate, s.endDate, "day", "[]") : e === 2 ? W(t).isBetween(s.startDate, s.endDate, "hour", "[]") : W(s.startDate).isBetween(
    W(t),
    W(t).add(6, "days"),
    "day",
    "[]"
  ) || W(t).isBetween(W(s.startDate), W(s.endDate), "day", "[]"));
  switch (e) {
    case 1:
      return Nu(o, t, e, a);
    case 2:
      return Yu(o, t);
    default:
      return Tu(o, t, e);
  }
}, Lu = (r, n, t, e, a, o = !1) => {
  let s = "weeks", i;
  switch (a) {
    case 0:
      s = "weeks", i = ht;
      break;
    case 1:
      s = "days", i = Ye;
      break;
    case 2:
      s = "hours", i = Oe;
      break;
  }
  const c = Math.ceil(a === 2 ? (n.x - 0.5 * i) / i : n.x / i), l = W(
    `${r.year}-${r.month + 1}-${r.dayOfMonth}T${r.hour}:00:00`
  ).add(c - 1, s), u = Math.ceil(n.y / $e), d = t.findIndex((m, v, b) => b.slice(0, v + 1).reduce((D, O) => D + O, 0) >= u), f = a === 2 ? (c + 1) * i : c * i, p = (u - 1) * $e + $e, h = Ru(
    e[d],
    d,
    l,
    a,
    o
  );
  return { coords: { x: f, y: p }, resourceIndex: d, disposition: h };
}, $u = (r, n, t, e) => {
  const a = [];
  let o = 0, s = [], i = 0;
  return n.length > e ? (n.forEach((c, l) => {
    const u = { id: r[l].id, label: r[l].label, data: c };
    i >= e && (a.push(s), o += s.length, s = [], i = 0), i++, s.push(u);
  }), t.slice(o).length <= e && (s = [], n.slice(o).forEach((c, l) => {
    const u = {
      id: r[l + o].id,
      label: r[l + o].label,
      data: c
    };
    s.push(u), l === n.length - o - 1 && a.push(s);
  })), a) : (n.forEach((c, l) => {
    const u = { id: r[l].id, label: r[l].label, data: c };
    s.push(u);
  }), a.push(s), a);
}, Iu = (r) => {
  const n = [];
  for (const t of r) {
    let e = !1;
    if (n.length)
      for (const a of n) {
        let o = !1;
        for (let s = 0; s < a.length; s++) {
          if (W(t.startDate).isBetween(a[s].startDate, a[s].endDate, null, "[]") || W(t.endDate).isBetween(a[s].startDate, a[s].endDate, null, "[]")) {
            o = !0;
            break;
          }
          if (W(t.startDate).isBefore(a[s].startDate, "day") && W(t.endDate).isAfter(a[s].endDate, "day")) {
            o = !0;
            break;
          }
        }
        if (!o) {
          a.push(t), e = !0;
          break;
        }
      }
    e || n.push([t]);
  }
  return n;
}, Fu = (r) => {
  const n = [[], []], [t, e] = r.reduce((a, o) => {
    const s = Iu(o.data);
    return a[0].push(s), a[1].push(Math.max(s.length, 1)), a;
  }, n);
  return { projectsPerPerson: t, rowsPerPerson: e };
}, Au = (r) => r ? r.map((n) => n.data.length).reduce((n, t) => n + Math.max(t, 1), 0) : 0, Wu = (r) => {
  const { recordsThreshold: n } = Dr(), [t, e] = ve(0), [a, o] = ve(0), s = Me(null);
  ge(() => {
    s.current = document.getElementById(mt);
  }, []);
  const { projectsPerPerson: i, rowsPerPerson: c } = ct(() => Fu(r), [r]), l = ct(
    () => $u(r, i, c, n),
    [r, i, n, c]
  ), u = de(() => {
    l[a].length && s.current && (s.current.scroll({ top: 0 }), e((v) => v + l[Math.max(a, 0)].length), o((v) => Math.min(v + 1, l.length - 1)), window.scroll({ top: 0 }));
  }, [a, l]), d = de(() => {
    l[a].length && (e((v) => Math.max(v - l[a - 1].length, 0)), o((v) => Math.max(v - 1, 0)));
  }, [a, l]), f = de(() => {
    e(0), o(0);
  }, []), p = t + l[a].length, h = ct(
    () => c.slice(t, p),
    [p, c, t]
  ), m = ct(
    () => i.slice(t, p),
    [p, i, t]
  );
  return {
    page: l[a],
    currentPageNum: a,
    pagesAmount: l.length,
    projectsPerPerson: m,
    rowsPerItem: h,
    totalRowsPerPage: Au(l[a]),
    next: u,
    previous: d,
    reset: f
  };
};
var vn = { exports: {} }, Hu = vn.exports, Ko;
function Bu() {
  return Ko || (Ko = 1, function(r, n) {
    (function(t, e) {
      r.exports = e();
    })(Hu, function() {
      return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t) {
        var e = ["th", "st", "nd", "rd"], a = t % 100;
        return "[" + t + (e[(a - 20) % 10] || e[a] || e[0]) + "]";
      } };
    });
  }(vn)), vn.exports;
}
var Vu = Bu();
const ju = /* @__PURE__ */ qe(Vu);
var gn = { exports: {} }, Zu = gn.exports, Go;
function zu() {
  return Go || (Go = 1, function(r, n) {
    (function(t, e) {
      r.exports = e(Jn());
    })(Zu, function(t) {
      function e(f) {
        return f && typeof f == "object" && "default" in f ? f : { default: f };
      }
      var a = e(t);
      function o(f) {
        return f % 10 < 5 && f % 10 > 1 && ~~(f / 10) % 10 != 1;
      }
      function s(f, p, h) {
        var m = f + " ";
        switch (h) {
          case "m":
            return p ? "minuta" : "minutę";
          case "mm":
            return m + (o(f) ? "minuty" : "minut");
          case "h":
            return p ? "godzina" : "godzinę";
          case "hh":
            return m + (o(f) ? "godziny" : "godzin");
          case "MM":
            return m + (o(f) ? "miesiące" : "miesięcy");
          case "yy":
            return m + (o(f) ? "lata" : "lat");
        }
      }
      var i = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), c = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), l = /D MMMM/, u = function(f, p) {
        return l.test(p) ? i[f.month()] : c[f.month()];
      };
      u.s = c, u.f = i;
      var d = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: u, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(f) {
        return f + ".";
      }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: s, mm: s, h: s, hh: s, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: s, y: "rok", yy: s }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
      return a.default.locale(d, null, !0), d;
    });
  }(gn)), gn.exports;
}
var Qu = zu();
const qu = /* @__PURE__ */ qe(Qu);
var yn = { exports: {} }, Uu = yn.exports, Xo;
function Ku() {
  return Xo || (Xo = 1, function(r, n) {
    (function(t, e) {
      r.exports = e(Jn());
    })(Uu, function(t) {
      function e(c) {
        return c && typeof c == "object" && "default" in c ? c : { default: c };
      }
      var a = e(t), o = { s: "ein paar Sekunden", m: ["eine Minute", "einer Minute"], mm: "%d Minuten", h: ["eine Stunde", "einer Stunde"], hh: "%d Stunden", d: ["ein Tag", "einem Tag"], dd: ["%d Tage", "%d Tagen"], M: ["ein Monat", "einem Monat"], MM: ["%d Monate", "%d Monaten"], y: ["ein Jahr", "einem Jahr"], yy: ["%d Jahre", "%d Jahren"] };
      function s(c, l, u) {
        var d = o[u];
        return Array.isArray(d) && (d = d[l ? 0 : 1]), d.replace("%d", c);
      }
      var i = { name: "de", weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"), ordinal: function(c) {
        return c + ".";
      }, weekStart: 1, yearStart: 4, formats: { LTS: "HH:mm:ss", LT: "HH:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "vor %s", s, m: s, mm: s, h: s, hh: s, d: s, dd: s, M: s, MM: s, y: s, yy: s } };
      return a.default.locale(i, null, !0), i;
    });
  }(yn)), yn.exports;
}
var Gu = Ku();
const Xu = /* @__PURE__ */ qe(Gu);
var wn = { exports: {} }, Ju = wn.exports, Jo;
function ed() {
  return Jo || (Jo = 1, function(r, n) {
    (function(t, e) {
      r.exports = e(Jn());
    })(Ju, function(t) {
      function e(u) {
        return u && typeof u == "object" && "default" in u ? u : { default: u };
      }
      var a = e(t), o = "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), s = "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"), i = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/, c = function(u, d) {
        return i.test(d) ? o[u.month()] : s[u.month()];
      };
      c.s = s, c.f = o;
      var l = { name: "lt", weekdays: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"), weekdaysShort: "sek_pir_ant_tre_ket_pen_šeš".split("_"), weekdaysMin: "s_p_a_t_k_pn_š".split("_"), months: c, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), ordinal: function(u) {
        return u + ".";
      }, weekStart: 1, relativeTime: { future: "už %s", past: "prieš %s", s: "kelias sekundes", m: "minutę", mm: "%d minutes", h: "valandą", hh: "%d valandas", d: "dieną", dd: "%d dienas", M: "mėnesį", MM: "%d mėnesius", y: "metus", yy: "%d metus" }, format: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" } };
      return a.default.locale(l, null, !0), l;
    });
  }(wn)), wn.exports;
}
var td = ed();
const rd = /* @__PURE__ */ qe(td), nd = {
  feelingEmpty: "Czuję się taki pusty...",
  free: "Wolne",
  loadNext: "Następne",
  loadPrevious: "Poprzednie",
  over: "ponad",
  taken: "Zajęte",
  topbar: {
    filters: "Filtry",
    next: "następny",
    prev: "poprzedni",
    today: "Dziś",
    view: "Widok"
  },
  search: "szukaj",
  week: "tydzień"
}, ad = {
  feelingEmpty: "I feel so empty...",
  free: "Free",
  loadNext: "Next",
  loadPrevious: "Previous",
  over: "over",
  taken: "Taken",
  topbar: {
    filters: "Filters",
    next: "next",
    prev: "prev",
    today: "Today",
    view: "View"
  },
  search: "search",
  week: "week"
}, od = {
  feelingEmpty: "Keine Ergebnisse...",
  free: "Frei",
  loadNext: "Weiter",
  loadPrevious: "Zurück",
  over: "über",
  taken: "Gebucht",
  topbar: {
    filters: "Filter",
    next: "vor",
    prev: "zurück",
    today: "Heute",
    view: "Ansicht"
  },
  search: "Suche",
  week: "Woche"
}, sd = {
  feelingEmpty: "Jaučiuosi toks tuščias...",
  free: "Laisva",
  loadNext: "Kitas",
  loadPrevious: "Ankstesnis",
  over: "virš",
  taken: "Užimta",
  topbar: {
    filters: "Filtras",
    next: "kitas",
    prev: "ankstesnis",
    today: "Šiandien",
    view: "Rodinys"
  },
  search: "ieškoti",
  week: "savaitė"
}, id = [
  {
    id: "en",
    lang: ad,
    translateCode: "en-GB",
    dayjsTranslations: ju
  },
  {
    id: "pl",
    lang: nd,
    translateCode: "pl-PL",
    dayjsTranslations: qu
  },
  {
    id: "lt",
    lang: sd,
    translateCode: "lt-LT",
    dayjsTranslations: rd
  },
  {
    id: "de",
    lang: od,
    translateCode: "de-DE",
    dayjsTranslations: Xu
  }
];
class cd {
  constructor() {
    B(this, "locales", id);
  }
  getLocales() {
    return this.locales;
  }
  addLocales(n) {
    this.locales.push(n);
  }
}
const Nn = new cd(), Wi = ni({
  localesData: Nn.getLocales(),
  currentLocale: Nn.getLocales()[0],
  setCurrentLocale: () => {
  }
}), ld = ({ children: r, lang: n, translations: t }) => {
  const [e, a] = ve("en"), o = Nn.getLocales(), s = de(() => {
    const d = o.find((f) => f.id === e);
    return typeof (d == null ? void 0 : d.dayjsTranslations) == "object" && W.locale(d.dayjsTranslations), d || o[0];
  }, [e, o]), [i, c] = ve(s()), l = (d) => {
    localStorage.setItem("locale", d.translateCode), c(d);
  };
  ge(() => {
    t == null || t.forEach((d) => {
      o.find((p) => p.id === d.id) || Nn.addLocales(d);
    });
  }, [o, t]), ge(() => {
    const d = localStorage.getItem("locale"), f = n ?? d ?? "en";
    localStorage.setItem("locale", f), a(f), c(s());
  }, [s, n]);
  const { Provider: u } = Wi;
  return /* @__PURE__ */ N(u, { value: { currentLocale: i, localesData: o, setCurrentLocale: l }, children: r });
}, xr = () => zn(Wi).currentLocale.lang, ud = (r) => /* @__PURE__ */ P.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...r }, /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ P.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ P.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ P.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ P.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ P.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ P.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ P.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ P.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ P.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ P.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ P.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ P.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ P.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), dd = $.div`
  height: 440px;
  width: 514px;
  position: relative;
`, fd = $.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({ theme: r }) => r.colors.textPrimary};
`, pd = () => {
  const { feelingEmpty: r } = xr();
  return /* @__PURE__ */ U(dd, { className: "empty-box-wrapper", children: [
    /* @__PURE__ */ N(ud, {}),
    /* @__PURE__ */ N(fd, { className: "empty-box-text", children: r })
  ] });
}, hd = $.div`
  position: relative;
  display: flex;
`, md = $.div`
  position: relative;
  margin-left: ${Fe};
  display: flex;
  flex-direction: column;
  contain: paint;
`, vd = $.div`
  width: calc(${({ width: r }) => r}px - ${Fe}px);
  position: sticky;
  top: 0;
  height: 100%;
  left: ${Fe}px;
  display: flex;
  justify-content: center;
  align-items: center;
`, es = {
  coords: { x: 0, y: 0 },
  resourceIndex: 0,
  disposition: {
    taken: { hours: 0, minutes: 0 },
    free: { hours: 0, minutes: 0 },
    overtime: { hours: 0, minutes: 0 }
  }
}, gd = ({
  data: r,
  onTileClick: n,
  onItemClick: t,
  toggleTheme: e,
  topBarWidth: a,
  editable: o,
  onTileDragEnd: s,
  searchValue: i,
  onSearchChange: c,
  defaultSearchValue: l = ""
}) => {
  const [u, d] = ve(es), [f, p] = ve(r), [h, m] = ve(!1), v = i !== void 0, [b, C] = ve(l), D = v ? i : b, O = Me(!1);
  ge(() => {
    v && !c && !O.current && (console.warn(
      "react-scheduler: `searchValue` prop provided without `onSearchChange`. The search input will be read-only."
    ), O.current = !0);
  }, [v, c]);
  const x = ct(() => D, [D]), {
    zoom: w,
    startDate: g,
    config: { includeTakenHoursOnWeekendsInDayView: y, showTooltip: T, showThemeToggle: R }
  } = Dr(), L = Me(null), {
    page: I,
    projectsPerPerson: V,
    totalRowsPerPage: Y,
    rowsPerItem: S,
    currentPageNum: k,
    pagesAmount: E,
    next: _,
    previous: F,
    reset: H
  } = Wu(f), Z = Me(
    Rt(
      (oe, z, ce, fe, Q) => {
        if (!L.current) return;
        const { left: re, top: ne } = L.current.getBoundingClientRect(), Ue = { x: oe.clientX - re, y: oe.clientY - ne }, {
          coords: { x: bt, y: Vr },
          resourceIndex: jr,
          disposition: ua
        } = Lu(
          z,
          Ue,
          ce,
          fe,
          Q,
          y
        );
        d({ coords: { x: bt, y: Vr }, resourceIndex: jr, disposition: ua }), m(!0);
      },
      300
    )
  ), q = Me(
    Rt((oe, z) => {
      H(), p(
        oe.filter(
          (ce) => ce.label.title.toLowerCase().includes(z.toLowerCase())
        )
      );
    }, 500)
  ), te = (oe) => {
    const z = oe.target.value;
    v || C(z), c == null || c(z), q.current.cancel(), q.current(r, z);
  }, X = de(() => {
    Z.current.cancel(), m(!1), d(es);
  }, []);
  ge(() => {
    const oe = (ce) => Z.current(ce, g, S, V, w), z = L.current;
    if (z)
      return z.addEventListener("mousemove", oe), z.addEventListener("mouseleave", X), () => {
        z.removeEventListener("mousemove", oe), z.removeEventListener("mouseleave", X);
      };
  }, [Z, X, V, S, g, w]);
  const he = Me(x);
  return ge(() => {
    if (he.current !== x && (H(), he.current = x), x) {
      const oe = r.filter(
        (z) => z.label.title.toLowerCase().includes(x.toLowerCase())
      );
      p(oe);
    } else
      p(r);
  }, [r, x, H]), /* @__PURE__ */ U(hd, { className: "calendar-outer-wrapper", children: [
    /* @__PURE__ */ N(
      g0,
      {
        data: I,
        pageNum: k,
        pagesAmount: E,
        rows: S,
        onLoadNext: _,
        onLoadPrevious: F,
        searchInputValue: D,
        onSearchInputChange: te,
        onItemClick: t
      }
    ),
    /* @__PURE__ */ U(md, { className: "calendar-inner-wrapper", children: [
      /* @__PURE__ */ N(
        R0,
        {
          zoom: w,
          topBarWidth: a,
          showThemeToggle: R,
          toggleTheme: e
        }
      ),
      r.length ? /* @__PURE__ */ N(
        Ou,
        {
          data: I,
          zoom: w,
          rows: Y,
          ref: L,
          onTileClick: n,
          editable: o,
          onTileDragEnd: s
        }
      ) : /* @__PURE__ */ N(vd, { width: a, className: "calendar-empty-box-wrapper", children: /* @__PURE__ */ N(pd, {}) }),
      T && h && (u == null ? void 0 : u.resourceIndex) > -1 && /* @__PURE__ */ N(G0, { tooltipData: u, zoom: w })
    ] })
  ] });
};
function Hi(r) {
  var n, t, e = "";
  if (typeof r == "string" || typeof r == "number") e += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var a = r.length;
    for (n = 0; n < a; n++) r[n] && (t = Hi(r[n])) && (e && (e += " "), e += t);
  } else for (t in r) r[t] && (e && (e += " "), e += t);
  return e;
}
function Pe() {
  for (var r, n, t = 0, e = "", a = arguments.length; t < a; t++) (r = arguments[t]) && (n = Hi(r)) && (e && (e += " "), e += n);
  return e;
}
const Bi = 6048e5, yd = 864e5, ea = 6e4, ta = 36e5, wd = 1e3, ts = Symbol.for("constructDateFrom");
function ue(r, n) {
  return typeof r == "function" ? r(n) : r && typeof r == "object" && ts in r ? r[ts](n) : r instanceof Date ? new r.constructor(n) : new Date(n);
}
function j(r, n) {
  return ue(n || r, r);
}
function Ze(r, n, t) {
  const e = j(r, t == null ? void 0 : t.in);
  return isNaN(n) ? ue((t == null ? void 0 : t.in) || r, NaN) : (n && e.setDate(e.getDate() + n), e);
}
function Qe(r, n, t) {
  const e = j(r, t == null ? void 0 : t.in);
  if (isNaN(n)) return ue(r, NaN);
  if (!n)
    return e;
  const a = e.getDate(), o = ue(r, e.getTime());
  o.setMonth(e.getMonth() + n + 1, 0);
  const s = o.getDate();
  return a >= s ? o : (e.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    a
  ), e);
}
function Vi(r, n, t) {
  return ue(r, +j(r) + n);
}
function bd(r, n, t) {
  return Vi(r, n * ta);
}
let Dd = {};
function Kt() {
  return Dd;
}
function vt(r, n) {
  var i, c, l, u;
  const t = Kt(), e = (n == null ? void 0 : n.weekStartsOn) ?? ((c = (i = n == null ? void 0 : n.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? t.weekStartsOn ?? ((u = (l = t.locale) == null ? void 0 : l.options) == null ? void 0 : u.weekStartsOn) ?? 0, a = j(r, n == null ? void 0 : n.in), o = a.getDay(), s = (o < e ? 7 : 0) + o - e;
  return a.setDate(a.getDate() - s), a.setHours(0, 0, 0, 0), a;
}
function dr(r, n) {
  return vt(r, { ...n, weekStartsOn: 1 });
}
function ji(r, n) {
  const t = j(r, n == null ? void 0 : n.in), e = t.getFullYear(), a = ue(t, 0);
  a.setFullYear(e + 1, 0, 4), a.setHours(0, 0, 0, 0);
  const o = dr(a), s = ue(t, 0);
  s.setFullYear(e, 0, 4), s.setHours(0, 0, 0, 0);
  const i = dr(s);
  return t.getTime() >= o.getTime() ? e + 1 : t.getTime() >= i.getTime() ? e : e - 1;
}
function Yn(r) {
  const n = j(r), t = new Date(
    Date.UTC(
      n.getFullYear(),
      n.getMonth(),
      n.getDate(),
      n.getHours(),
      n.getMinutes(),
      n.getSeconds(),
      n.getMilliseconds()
    )
  );
  return t.setUTCFullYear(n.getFullYear()), +r - +t;
}
function yt(r, ...n) {
  const t = ue.bind(
    null,
    n.find((e) => typeof e == "object")
  );
  return n.map(t);
}
function zt(r, n) {
  const t = j(r, n == null ? void 0 : n.in);
  return t.setHours(0, 0, 0, 0), t;
}
function fr(r, n, t) {
  const [e, a] = yt(
    t == null ? void 0 : t.in,
    r,
    n
  ), o = zt(e), s = zt(a), i = +o - Yn(o), c = +s - Yn(s);
  return Math.round((i - c) / yd);
}
function xd(r, n) {
  const t = ji(r, n), e = ue(r, 0);
  return e.setFullYear(t, 0, 4), e.setHours(0, 0, 0, 0), dr(e);
}
function Aa(r, n, t) {
  const e = j(r, t == null ? void 0 : t.in);
  return e.setTime(e.getTime() + n * ea), e;
}
function so(r, n, t) {
  return Qe(r, n * 3, t);
}
function kd(r, n, t) {
  return Vi(r, n * 1e3);
}
function Rn(r, n, t) {
  return Ze(r, n * 7, t);
}
function lt(r, n, t) {
  return Qe(r, n * 12, t);
}
function rs(r, n) {
  let t, e = n == null ? void 0 : n.in;
  return r.forEach((a) => {
    !e && typeof a == "object" && (e = ue.bind(null, a));
    const o = j(a, e);
    (!t || t < o || isNaN(+o)) && (t = o);
  }), ue(e, t || NaN);
}
function ns(r, n) {
  let t, e = n == null ? void 0 : n.in;
  return r.forEach((a) => {
    !e && typeof a == "object" && (e = ue.bind(null, a));
    const o = j(a, e);
    (!t || t > o || isNaN(+o)) && (t = o);
  }), ue(e, t || NaN);
}
function Md(r, n, t) {
  const [e, a] = yt(
    t == null ? void 0 : t.in,
    r,
    n
  );
  return +zt(e) == +zt(a);
}
function ut(r) {
  return r instanceof Date || typeof r == "object" && Object.prototype.toString.call(r) === "[object Date]";
}
function Ln(r) {
  return !(!ut(r) && typeof r != "number" || isNaN(+j(r)));
}
function $n(r, n, t) {
  const [e, a] = yt(
    t == null ? void 0 : t.in,
    r,
    n
  ), o = e.getFullYear() - a.getFullYear(), s = e.getMonth() - a.getMonth();
  return o * 12 + s;
}
function Wt(r, n) {
  const t = j(r, n == null ? void 0 : n.in);
  return Math.trunc(t.getMonth() / 3) + 1;
}
function In(r, n, t) {
  const [e, a] = yt(
    t == null ? void 0 : t.in,
    r,
    n
  ), o = e.getFullYear() - a.getFullYear(), s = Wt(e) - Wt(a);
  return o * 4 + s;
}
function Fn(r, n, t) {
  const [e, a] = yt(
    t == null ? void 0 : t.in,
    r,
    n
  );
  return e.getFullYear() - a.getFullYear();
}
function _d(r, n, t) {
  const [e, a] = yt(
    t == null ? void 0 : t.in,
    r,
    n
  ), o = as(e, a), s = Math.abs(
    fr(e, a)
  );
  e.setDate(e.getDate() - o * s);
  const i = +(as(e, a) === -o), c = o * (s - i);
  return c === 0 ? 0 : c;
}
function as(r, n) {
  const t = r.getFullYear() - n.getFullYear() || r.getMonth() - n.getMonth() || r.getDate() - n.getDate() || r.getHours() - n.getHours() || r.getMinutes() - n.getMinutes() || r.getSeconds() - n.getSeconds() || r.getMilliseconds() - n.getMilliseconds();
  return t < 0 ? -1 : t > 0 ? 1 : t;
}
function Zi(r, n) {
  const t = j(r, n == null ? void 0 : n.in);
  return t.setHours(23, 59, 59, 999), t;
}
function zi(r, n) {
  const t = j(r, n == null ? void 0 : n.in), e = t.getMonth();
  return t.setFullYear(t.getFullYear(), e + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Wa(r, n) {
  const t = j(r, n == null ? void 0 : n.in), e = t.getMonth(), a = e - e % 3;
  return t.setMonth(a, 1), t.setHours(0, 0, 0, 0), t;
}
function Qi(r, n) {
  const t = j(r, n == null ? void 0 : n.in);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function qi(r, n) {
  const t = j(r, n == null ? void 0 : n.in), e = t.getFullYear();
  return t.setFullYear(e + 1, 0, 0), t.setHours(23, 59, 59, 999), t;
}
function ra(r, n) {
  const t = j(r, n == null ? void 0 : n.in);
  return t.setFullYear(t.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
function Cd(r, n) {
  var i, c;
  const t = Kt(), e = t.weekStartsOn ?? ((c = (i = t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? 0, a = j(r, n == null ? void 0 : n.in), o = a.getDay(), s = (o < e ? -7 : 0) + 6 - (o - e);
  return a.setDate(a.getDate() + s), a.setHours(23, 59, 59, 999), a;
}
const Sd = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Ed = (r, n, t) => {
  let e;
  const a = Sd[r];
  return typeof a == "string" ? e = a : n === 1 ? e = a.one : e = a.other.replace("{{count}}", n.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + e : e + " ago" : e;
};
function va(r) {
  return (n = {}) => {
    const t = n.width ? String(n.width) : r.defaultWidth;
    return r.formats[t] || r.formats[r.defaultWidth];
  };
}
const Pd = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Od = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Td = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Nd = {
  date: va({
    formats: Pd,
    defaultWidth: "full"
  }),
  time: va({
    formats: Od,
    defaultWidth: "full"
  }),
  dateTime: va({
    formats: Td,
    defaultWidth: "full"
  })
}, Yd = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Rd = (r, n, t, e) => Yd[r];
function Mr(r) {
  return (n, t) => {
    const e = t != null && t.context ? String(t.context) : "standalone";
    let a;
    if (e === "formatting" && r.formattingValues) {
      const s = r.defaultFormattingWidth || r.defaultWidth, i = t != null && t.width ? String(t.width) : s;
      a = r.formattingValues[i] || r.formattingValues[s];
    } else {
      const s = r.defaultWidth, i = t != null && t.width ? String(t.width) : r.defaultWidth;
      a = r.values[i] || r.values[s];
    }
    const o = r.argumentCallback ? r.argumentCallback(n) : n;
    return a[o];
  };
}
const Ld = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, $d = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Id = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, Fd = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Ad = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Wd = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Hd = (r, n) => {
  const t = Number(r), e = t % 100;
  if (e > 20 || e < 10)
    switch (e % 10) {
      case 1:
        return t + "st";
      case 2:
        return t + "nd";
      case 3:
        return t + "rd";
    }
  return t + "th";
}, Bd = {
  ordinalNumber: Hd,
  era: Mr({
    values: Ld,
    defaultWidth: "wide"
  }),
  quarter: Mr({
    values: $d,
    defaultWidth: "wide",
    argumentCallback: (r) => r - 1
  }),
  month: Mr({
    values: Id,
    defaultWidth: "wide"
  }),
  day: Mr({
    values: Fd,
    defaultWidth: "wide"
  }),
  dayPeriod: Mr({
    values: Ad,
    defaultWidth: "wide",
    formattingValues: Wd,
    defaultFormattingWidth: "wide"
  })
};
function _r(r) {
  return (n, t = {}) => {
    const e = t.width, a = e && r.matchPatterns[e] || r.matchPatterns[r.defaultMatchWidth], o = n.match(a);
    if (!o)
      return null;
    const s = o[0], i = e && r.parsePatterns[e] || r.parsePatterns[r.defaultParseWidth], c = Array.isArray(i) ? jd(i, (d) => d.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      Vd(i, (d) => d.test(s))
    );
    let l;
    l = r.valueCallback ? r.valueCallback(c) : c, l = t.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      t.valueCallback(l)
    ) : l;
    const u = n.slice(s.length);
    return { value: l, rest: u };
  };
}
function Vd(r, n) {
  for (const t in r)
    if (Object.prototype.hasOwnProperty.call(r, t) && n(r[t]))
      return t;
}
function jd(r, n) {
  for (let t = 0; t < r.length; t++)
    if (n(r[t]))
      return t;
}
function Zd(r) {
  return (n, t = {}) => {
    const e = n.match(r.matchPattern);
    if (!e) return null;
    const a = e[0], o = n.match(r.parsePattern);
    if (!o) return null;
    let s = r.valueCallback ? r.valueCallback(o[0]) : o[0];
    s = t.valueCallback ? t.valueCallback(s) : s;
    const i = n.slice(a.length);
    return { value: s, rest: i };
  };
}
const zd = /^(\d+)(th|st|nd|rd)?/i, Qd = /\d+/i, qd = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Ud = {
  any: [/^b/i, /^(a|c)/i]
}, Kd = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Gd = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Xd = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Jd = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, ef = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, tf = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, rf = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, nf = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, af = {
  ordinalNumber: Zd({
    matchPattern: zd,
    parsePattern: Qd,
    valueCallback: (r) => parseInt(r, 10)
  }),
  era: _r({
    matchPatterns: qd,
    defaultMatchWidth: "wide",
    parsePatterns: Ud,
    defaultParseWidth: "any"
  }),
  quarter: _r({
    matchPatterns: Kd,
    defaultMatchWidth: "wide",
    parsePatterns: Gd,
    defaultParseWidth: "any",
    valueCallback: (r) => r + 1
  }),
  month: _r({
    matchPatterns: Xd,
    defaultMatchWidth: "wide",
    parsePatterns: Jd,
    defaultParseWidth: "any"
  }),
  day: _r({
    matchPatterns: ef,
    defaultMatchWidth: "wide",
    parsePatterns: tf,
    defaultParseWidth: "any"
  }),
  dayPeriod: _r({
    matchPatterns: rf,
    defaultMatchWidth: "any",
    parsePatterns: nf,
    defaultParseWidth: "any"
  })
}, Ui = {
  code: "en-US",
  formatDistance: Ed,
  formatLong: Nd,
  formatRelative: Rd,
  localize: Bd,
  match: af,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function of(r, n) {
  const t = j(r, n == null ? void 0 : n.in);
  return fr(t, ra(t)) + 1;
}
function io(r, n) {
  const t = j(r, n == null ? void 0 : n.in), e = +dr(t) - +xd(t);
  return Math.round(e / Bi) + 1;
}
function co(r, n) {
  var u, d, f, p;
  const t = j(r, n == null ? void 0 : n.in), e = t.getFullYear(), a = Kt(), o = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((d = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((p = (f = a.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, s = ue((n == null ? void 0 : n.in) || r, 0);
  s.setFullYear(e + 1, 0, o), s.setHours(0, 0, 0, 0);
  const i = vt(s, n), c = ue((n == null ? void 0 : n.in) || r, 0);
  c.setFullYear(e, 0, o), c.setHours(0, 0, 0, 0);
  const l = vt(c, n);
  return +t >= +i ? e + 1 : +t >= +l ? e : e - 1;
}
function sf(r, n) {
  var i, c, l, u;
  const t = Kt(), e = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((c = (i = n == null ? void 0 : n.locale) == null ? void 0 : i.options) == null ? void 0 : c.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((u = (l = t.locale) == null ? void 0 : l.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, a = co(r, n), o = ue((n == null ? void 0 : n.in) || r, 0);
  return o.setFullYear(a, 0, e), o.setHours(0, 0, 0, 0), vt(o, n);
}
function Ki(r, n) {
  const t = j(r, n == null ? void 0 : n.in), e = +vt(t, n) - +sf(t, n);
  return Math.round(e / Bi) + 1;
}
function le(r, n) {
  const t = r < 0 ? "-" : "", e = Math.abs(r).toString().padStart(n, "0");
  return t + e;
}
const xt = {
  // Year
  y(r, n) {
    const t = r.getFullYear(), e = t > 0 ? t : 1 - t;
    return le(n === "yy" ? e % 100 : e, n.length);
  },
  // Month
  M(r, n) {
    const t = r.getMonth();
    return n === "M" ? String(t + 1) : le(t + 1, 2);
  },
  // Day of the month
  d(r, n) {
    return le(r.getDate(), n.length);
  },
  // AM or PM
  a(r, n) {
    const t = r.getHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return t.toUpperCase();
      case "aaa":
        return t;
      case "aaaaa":
        return t[0];
      case "aaaa":
      default:
        return t === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(r, n) {
    return le(r.getHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H(r, n) {
    return le(r.getHours(), n.length);
  },
  // Minute
  m(r, n) {
    return le(r.getMinutes(), n.length);
  },
  // Second
  s(r, n) {
    return le(r.getSeconds(), n.length);
  },
  // Fraction of second
  S(r, n) {
    const t = n.length, e = r.getMilliseconds(), a = Math.trunc(
      e * Math.pow(10, t - 3)
    );
    return le(a, n.length);
  }
}, Xt = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, os = {
  // Era
  G: function(r, n, t) {
    const e = r.getFullYear() > 0 ? 1 : 0;
    switch (n) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return t.era(e, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return t.era(e, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return t.era(e, { width: "wide" });
    }
  },
  // Year
  y: function(r, n, t) {
    if (n === "yo") {
      const e = r.getFullYear(), a = e > 0 ? e : 1 - e;
      return t.ordinalNumber(a, { unit: "year" });
    }
    return xt.y(r, n);
  },
  // Local week-numbering year
  Y: function(r, n, t, e) {
    const a = co(r, e), o = a > 0 ? a : 1 - a;
    if (n === "YY") {
      const s = o % 100;
      return le(s, 2);
    }
    return n === "Yo" ? t.ordinalNumber(o, { unit: "year" }) : le(o, n.length);
  },
  // ISO week-numbering year
  R: function(r, n) {
    const t = ji(r);
    return le(t, n.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(r, n) {
    const t = r.getFullYear();
    return le(t, n.length);
  },
  // Quarter
  Q: function(r, n, t) {
    const e = Math.ceil((r.getMonth() + 1) / 3);
    switch (n) {
      // 1, 2, 3, 4
      case "Q":
        return String(e);
      // 01, 02, 03, 04
      case "QQ":
        return le(e, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return t.ordinalNumber(e, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return t.quarter(e, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return t.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return t.quarter(e, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(r, n, t) {
    const e = Math.ceil((r.getMonth() + 1) / 3);
    switch (n) {
      // 1, 2, 3, 4
      case "q":
        return String(e);
      // 01, 02, 03, 04
      case "qq":
        return le(e, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return t.ordinalNumber(e, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return t.quarter(e, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return t.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return t.quarter(e, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(r, n, t) {
    const e = r.getMonth();
    switch (n) {
      case "M":
      case "MM":
        return xt.M(r, n);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return t.ordinalNumber(e + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return t.month(e, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return t.month(e, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return t.month(e, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(r, n, t) {
    const e = r.getMonth();
    switch (n) {
      // 1, 2, ..., 12
      case "L":
        return String(e + 1);
      // 01, 02, ..., 12
      case "LL":
        return le(e + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return t.ordinalNumber(e + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return t.month(e, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return t.month(e, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return t.month(e, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(r, n, t, e) {
    const a = Ki(r, e);
    return n === "wo" ? t.ordinalNumber(a, { unit: "week" }) : le(a, n.length);
  },
  // ISO week of year
  I: function(r, n, t) {
    const e = io(r);
    return n === "Io" ? t.ordinalNumber(e, { unit: "week" }) : le(e, n.length);
  },
  // Day of the month
  d: function(r, n, t) {
    return n === "do" ? t.ordinalNumber(r.getDate(), { unit: "date" }) : xt.d(r, n);
  },
  // Day of year
  D: function(r, n, t) {
    const e = of(r);
    return n === "Do" ? t.ordinalNumber(e, { unit: "dayOfYear" }) : le(e, n.length);
  },
  // Day of week
  E: function(r, n, t) {
    const e = r.getDay();
    switch (n) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return t.day(e, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return t.day(e, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return t.day(e, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return t.day(e, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(r, n, t, e) {
    const a = r.getDay(), o = (a - e.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(o);
      // Padded numerical value
      case "ee":
        return le(o, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return t.ordinalNumber(o, { unit: "day" });
      case "eee":
        return t.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return t.day(a, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return t.day(a, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return t.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(r, n, t, e) {
    const a = r.getDay(), o = (a - e.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      // Numerical value (same as in `e`)
      case "c":
        return String(o);
      // Padded numerical value
      case "cc":
        return le(o, n.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return t.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return t.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return t.day(a, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return t.day(a, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return t.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(r, n, t) {
    const e = r.getDay(), a = e === 0 ? 7 : e;
    switch (n) {
      // 2
      case "i":
        return String(a);
      // 02
      case "ii":
        return le(a, n.length);
      // 2nd
      case "io":
        return t.ordinalNumber(a, { unit: "day" });
      // Tue
      case "iii":
        return t.day(e, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return t.day(e, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return t.day(e, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return t.day(e, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(r, n, t) {
    const a = r.getHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return t.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return t.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return t.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return t.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(r, n, t) {
    const e = r.getHours();
    let a;
    switch (e === 12 ? a = Xt.noon : e === 0 ? a = Xt.midnight : a = e / 12 >= 1 ? "pm" : "am", n) {
      case "b":
      case "bb":
        return t.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return t.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return t.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return t.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(r, n, t) {
    const e = r.getHours();
    let a;
    switch (e >= 17 ? a = Xt.evening : e >= 12 ? a = Xt.afternoon : e >= 4 ? a = Xt.morning : a = Xt.night, n) {
      case "B":
      case "BB":
      case "BBB":
        return t.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return t.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return t.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(r, n, t) {
    if (n === "ho") {
      let e = r.getHours() % 12;
      return e === 0 && (e = 12), t.ordinalNumber(e, { unit: "hour" });
    }
    return xt.h(r, n);
  },
  // Hour [0-23]
  H: function(r, n, t) {
    return n === "Ho" ? t.ordinalNumber(r.getHours(), { unit: "hour" }) : xt.H(r, n);
  },
  // Hour [0-11]
  K: function(r, n, t) {
    const e = r.getHours() % 12;
    return n === "Ko" ? t.ordinalNumber(e, { unit: "hour" }) : le(e, n.length);
  },
  // Hour [1-24]
  k: function(r, n, t) {
    let e = r.getHours();
    return e === 0 && (e = 24), n === "ko" ? t.ordinalNumber(e, { unit: "hour" }) : le(e, n.length);
  },
  // Minute
  m: function(r, n, t) {
    return n === "mo" ? t.ordinalNumber(r.getMinutes(), { unit: "minute" }) : xt.m(r, n);
  },
  // Second
  s: function(r, n, t) {
    return n === "so" ? t.ordinalNumber(r.getSeconds(), { unit: "second" }) : xt.s(r, n);
  },
  // Fraction of second
  S: function(r, n) {
    return xt.S(r, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(r, n, t) {
    const e = r.getTimezoneOffset();
    if (e === 0)
      return "Z";
    switch (n) {
      // Hours and optional minutes
      case "X":
        return is(e);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Nt(e);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Nt(e, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(r, n, t) {
    const e = r.getTimezoneOffset();
    switch (n) {
      // Hours and optional minutes
      case "x":
        return is(e);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Nt(e);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Nt(e, ":");
    }
  },
  // Timezone (GMT)
  O: function(r, n, t) {
    const e = r.getTimezoneOffset();
    switch (n) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ss(e, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Nt(e, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(r, n, t) {
    const e = r.getTimezoneOffset();
    switch (n) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + ss(e, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Nt(e, ":");
    }
  },
  // Seconds timestamp
  t: function(r, n, t) {
    const e = Math.trunc(+r / 1e3);
    return le(e, n.length);
  },
  // Milliseconds timestamp
  T: function(r, n, t) {
    return le(+r, n.length);
  }
};
function ss(r, n = "") {
  const t = r > 0 ? "-" : "+", e = Math.abs(r), a = Math.trunc(e / 60), o = e % 60;
  return o === 0 ? t + String(a) : t + String(a) + n + le(o, 2);
}
function is(r, n) {
  return r % 60 === 0 ? (r > 0 ? "-" : "+") + le(Math.abs(r) / 60, 2) : Nt(r, n);
}
function Nt(r, n = "") {
  const t = r > 0 ? "-" : "+", e = Math.abs(r), a = le(Math.trunc(e / 60), 2), o = le(e % 60, 2);
  return t + a + n + o;
}
const cs = (r, n) => {
  switch (r) {
    case "P":
      return n.date({ width: "short" });
    case "PP":
      return n.date({ width: "medium" });
    case "PPP":
      return n.date({ width: "long" });
    case "PPPP":
    default:
      return n.date({ width: "full" });
  }
}, Gi = (r, n) => {
  switch (r) {
    case "p":
      return n.time({ width: "short" });
    case "pp":
      return n.time({ width: "medium" });
    case "ppp":
      return n.time({ width: "long" });
    case "pppp":
    default:
      return n.time({ width: "full" });
  }
}, cf = (r, n) => {
  const t = r.match(/(P+)(p+)?/) || [], e = t[1], a = t[2];
  if (!a)
    return cs(r, n);
  let o;
  switch (e) {
    case "P":
      o = n.dateTime({ width: "short" });
      break;
    case "PP":
      o = n.dateTime({ width: "medium" });
      break;
    case "PPP":
      o = n.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      o = n.dateTime({ width: "full" });
      break;
  }
  return o.replace("{{date}}", cs(e, n)).replace("{{time}}", Gi(a, n));
}, Ha = {
  p: Gi,
  P: cf
}, lf = /^D+$/, uf = /^Y+$/, df = ["D", "DD", "YY", "YYYY"];
function ff(r) {
  return lf.test(r);
}
function pf(r) {
  return uf.test(r);
}
function hf(r, n, t) {
  const e = mf(r, n, t);
  if (console.warn(e), df.includes(r)) throw new RangeError(e);
}
function mf(r, n, t) {
  const e = r[0] === "Y" ? "years" : "days of the month";
  return `Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${n}\`) for formatting ${e} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const vf = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, gf = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, yf = /^'([^]*?)'?$/, wf = /''/g, bf = /[a-zA-Z]/;
function ls(r, n, t) {
  var u, d, f, p, h, m, v, b;
  const e = Kt(), a = (t == null ? void 0 : t.locale) ?? e.locale ?? Ui, o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? e.firstWeekContainsDate ?? ((p = (f = e.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, s = (t == null ? void 0 : t.weekStartsOn) ?? ((m = (h = t == null ? void 0 : t.locale) == null ? void 0 : h.options) == null ? void 0 : m.weekStartsOn) ?? e.weekStartsOn ?? ((b = (v = e.locale) == null ? void 0 : v.options) == null ? void 0 : b.weekStartsOn) ?? 0, i = j(r, t == null ? void 0 : t.in);
  if (!Ln(i))
    throw new RangeError("Invalid time value");
  let c = n.match(gf).map((C) => {
    const D = C[0];
    if (D === "p" || D === "P") {
      const O = Ha[D];
      return O(C, a.formatLong);
    }
    return C;
  }).join("").match(vf).map((C) => {
    if (C === "''")
      return { isToken: !1, value: "'" };
    const D = C[0];
    if (D === "'")
      return { isToken: !1, value: Df(C) };
    if (os[D])
      return { isToken: !0, value: C };
    if (D.match(bf))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + D + "`"
      );
    return { isToken: !1, value: C };
  });
  a.localize.preprocessor && (c = a.localize.preprocessor(i, c));
  const l = {
    firstWeekContainsDate: o,
    weekStartsOn: s,
    locale: a
  };
  return c.map((C) => {
    if (!C.isToken) return C.value;
    const D = C.value;
    (!(t != null && t.useAdditionalWeekYearTokens) && pf(D) || !(t != null && t.useAdditionalDayOfYearTokens) && ff(D)) && hf(D, n, String(r));
    const O = os[D[0]];
    return O(i, D, a.localize, l);
  }).join("");
}
function Df(r) {
  const n = r.match(yf);
  return n ? n[1].replace(wf, "'") : r;
}
function us(r, n) {
  return j(r, n == null ? void 0 : n.in).getDate();
}
function xf(r, n) {
  return j(r, n == null ? void 0 : n.in).getDay();
}
function kf(r, n) {
  const t = j(r, n == null ? void 0 : n.in), e = t.getFullYear(), a = t.getMonth(), o = ue(t, 0);
  return o.setFullYear(e, a + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function Mf() {
  return Object.assign({}, Kt());
}
function dt(r, n) {
  return j(r, n == null ? void 0 : n.in).getHours();
}
function _f(r, n) {
  const t = j(r, n == null ? void 0 : n.in).getDay();
  return t === 0 ? 7 : t;
}
function ft(r, n) {
  return j(r, n == null ? void 0 : n.in).getMinutes();
}
function Te(r, n) {
  return j(r, n == null ? void 0 : n.in).getMonth();
}
function Ct(r) {
  return j(r).getSeconds();
}
function Ba(r) {
  return +j(r);
}
function G(r, n) {
  return j(r, n == null ? void 0 : n.in).getFullYear();
}
function Ot(r, n) {
  return +j(r) > +j(n);
}
function Qt(r, n) {
  return +j(r) < +j(n);
}
function Cf(r, n) {
  return +j(r) == +j(n);
}
function Sf(r, n) {
  const t = Ef(n) ? new n(0) : ue(n, 0);
  return t.setFullYear(r.getFullYear(), r.getMonth(), r.getDate()), t.setHours(
    r.getHours(),
    r.getMinutes(),
    r.getSeconds(),
    r.getMilliseconds()
  ), t;
}
function Ef(r) {
  var n;
  return typeof r == "function" && ((n = r.prototype) == null ? void 0 : n.constructor) === r;
}
const Pf = 10;
class Xi {
  constructor() {
    B(this, "subPriority", 0);
  }
  validate(n, t) {
    return !0;
  }
}
class Of extends Xi {
  constructor(n, t, e, a, o) {
    super(), this.value = n, this.validateValue = t, this.setValue = e, this.priority = a, o && (this.subPriority = o);
  }
  validate(n, t) {
    return this.validateValue(n, this.value, t);
  }
  set(n, t, e) {
    return this.setValue(n, t, this.value, e);
  }
}
class Tf extends Xi {
  constructor(t, e) {
    super();
    B(this, "priority", Pf);
    B(this, "subPriority", -1);
    this.context = t || ((a) => ue(e, a));
  }
  set(t, e) {
    return e.timestampIsSet ? t : ue(t, Sf(t, this.context));
  }
}
class ae {
  run(n, t, e, a) {
    const o = this.parse(n, t, e, a);
    return o ? {
      setter: new Of(
        o.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: o.rest
    } : null;
  }
  validate(n, t, e) {
    return !0;
  }
}
class Nf extends ae {
  constructor() {
    super(...arguments);
    B(this, "priority", 140);
    B(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return a.era(t, { width: "abbreviated" }) || a.era(t, { width: "narrow" });
      // A, B
      case "GGGGG":
        return a.era(t, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return a.era(t, { width: "wide" }) || a.era(t, { width: "abbreviated" }) || a.era(t, { width: "narrow" });
    }
  }
  set(t, e, a) {
    return e.era = a, t.setFullYear(a, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
const be = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, Je = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function De(r, n) {
  return r && {
    value: n(r.value),
    rest: r.rest
  };
}
function ye(r, n) {
  const t = n.match(r);
  return t ? {
    value: parseInt(t[0], 10),
    rest: n.slice(t[0].length)
  } : null;
}
function et(r, n) {
  const t = n.match(r);
  if (!t)
    return null;
  if (t[0] === "Z")
    return {
      value: 0,
      rest: n.slice(1)
    };
  const e = t[1] === "+" ? 1 : -1, a = t[2] ? parseInt(t[2], 10) : 0, o = t[3] ? parseInt(t[3], 10) : 0, s = t[5] ? parseInt(t[5], 10) : 0;
  return {
    value: e * (a * ta + o * ea + s * wd),
    rest: n.slice(t[0].length)
  };
}
function Ji(r) {
  return ye(be.anyDigitsSigned, r);
}
function we(r, n) {
  switch (r) {
    case 1:
      return ye(be.singleDigit, n);
    case 2:
      return ye(be.twoDigits, n);
    case 3:
      return ye(be.threeDigits, n);
    case 4:
      return ye(be.fourDigits, n);
    default:
      return ye(new RegExp("^\\d{1," + r + "}"), n);
  }
}
function An(r, n) {
  switch (r) {
    case 1:
      return ye(be.singleDigitSigned, n);
    case 2:
      return ye(be.twoDigitsSigned, n);
    case 3:
      return ye(be.threeDigitsSigned, n);
    case 4:
      return ye(be.fourDigitsSigned, n);
    default:
      return ye(new RegExp("^-?\\d{1," + r + "}"), n);
  }
}
function lo(r) {
  switch (r) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function ec(r, n) {
  const t = n > 0, e = t ? n : 1 - n;
  let a;
  if (e <= 50)
    a = r || 100;
  else {
    const o = e + 50, s = Math.trunc(o / 100) * 100, i = r >= o % 100;
    a = r + s - (i ? 100 : 0);
  }
  return t ? a : 1 - a;
}
function tc(r) {
  return r % 400 === 0 || r % 4 === 0 && r % 100 !== 0;
}
class Yf extends ae {
  constructor() {
    super(...arguments);
    B(this, "priority", 130);
    B(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(t, e, a) {
    const o = (s) => ({
      year: s,
      isTwoDigitYear: e === "yy"
    });
    switch (e) {
      case "y":
        return De(we(4, t), o);
      case "yo":
        return De(
          a.ordinalNumber(t, {
            unit: "year"
          }),
          o
        );
      default:
        return De(we(e.length, t), o);
    }
  }
  validate(t, e) {
    return e.isTwoDigitYear || e.year > 0;
  }
  set(t, e, a) {
    const o = t.getFullYear();
    if (a.isTwoDigitYear) {
      const i = ec(
        a.year,
        o
      );
      return t.setFullYear(i, 0, 1), t.setHours(0, 0, 0, 0), t;
    }
    const s = !("era" in e) || e.era === 1 ? a.year : 1 - a.year;
    return t.setFullYear(s, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class Rf extends ae {
  constructor() {
    super(...arguments);
    B(this, "priority", 130);
    B(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(t, e, a) {
    const o = (s) => ({
      year: s,
      isTwoDigitYear: e === "YY"
    });
    switch (e) {
      case "Y":
        return De(we(4, t), o);
      case "Yo":
        return De(
          a.ordinalNumber(t, {
            unit: "year"
          }),
          o
        );
      default:
        return De(we(e.length, t), o);
    }
  }
  validate(t, e) {
    return e.isTwoDigitYear || e.year > 0;
  }
  set(t, e, a, o) {
    const s = co(t, o);
    if (a.isTwoDigitYear) {
      const c = ec(
        a.year,
        s
      );
      return t.setFullYear(
        c,
        0,
        o.firstWeekContainsDate
      ), t.setHours(0, 0, 0, 0), vt(t, o);
    }
    const i = !("era" in e) || e.era === 1 ? a.year : 1 - a.year;
    return t.setFullYear(i, 0, o.firstWeekContainsDate), t.setHours(0, 0, 0, 0), vt(t, o);
  }
}
class Lf extends ae {
  constructor() {
    super(...arguments);
    B(this, "priority", 130);
    B(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e) {
    return An(e === "R" ? 4 : e.length, t);
  }
  set(t, e, a) {
    const o = ue(t, 0);
    return o.setFullYear(a, 0, 4), o.setHours(0, 0, 0, 0), dr(o);
  }
}
class $f extends ae {
  constructor() {
    super(...arguments);
    B(this, "priority", 130);
    B(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(t, e) {
    return An(e === "u" ? 4 : e.length, t);
  }
  set(t, e, a) {
    return t.setFullYear(a, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class If extends ae {
  constructor() {
    super(...arguments);
    B(this, "priority", 120);
    B(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, a) {
    switch (e) {
      // 1, 2, 3, 4
      case "Q":
      case "QQ":
        return we(e.length, t);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return a.ordinalNumber(t, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return a.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return a.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return a.quarter(t, {
          width: "wide",
          context: "formatting"
        }) || a.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 4;
  }
  set(t, e, a) {
    return t.setMonth((a - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class Ff extends ae {
  constructor() {
    super(...arguments);
    B(this, "priority", 120);
    B(this, "incompatibleTokens", [
      "Y",
      "R",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, a) {
    switch (e) {
      // 1, 2, 3, 4
      case "q":
      case "qq":
        return we(e.length, t);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return a.ordinalNumber(t, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return a.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        }) || a.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return a.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return a.quarter(t, {
          width: "wide",
          context: "standalone"
        }) || a.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        }) || a.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 4;
  }
  set(t, e, a) {
    return t.setMonth((a - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class Af extends ae {
  constructor() {
    super(...arguments);
    B(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "L",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
    B(this, "priority", 110);
  }
  parse(t, e, a) {
    const o = (s) => s - 1;
    switch (e) {
      // 1, 2, ..., 12
      case "M":
        return De(
          ye(be.month, t),
          o
        );
      // 01, 02, ..., 12
      case "MM":
        return De(we(2, t), o);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return De(
          a.ordinalNumber(t, {
            unit: "month"
          }),
          o
        );
      // Jan, Feb, ..., Dec
      case "MMM":
        return a.month(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.month(t, { width: "narrow", context: "formatting" });
      // J, F, ..., D
      case "MMMMM":
        return a.month(t, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return a.month(t, { width: "wide", context: "formatting" }) || a.month(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.month(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 11;
  }
  set(t, e, a) {
    return t.setMonth(a, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class Wf extends ae {
  constructor() {
    super(...arguments);
    B(this, "priority", 110);
    B(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, a) {
    const o = (s) => s - 1;
    switch (e) {
      // 1, 2, ..., 12
      case "L":
        return De(
          ye(be.month, t),
          o
        );
      // 01, 02, ..., 12
      case "LL":
        return De(we(2, t), o);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return De(
          a.ordinalNumber(t, {
            unit: "month"
          }),
          o
        );
      // Jan, Feb, ..., Dec
      case "LLL":
        return a.month(t, {
          width: "abbreviated",
          context: "standalone"
        }) || a.month(t, { width: "narrow", context: "standalone" });
      // J, F, ..., D
      case "LLLLL":
        return a.month(t, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return a.month(t, { width: "wide", context: "standalone" }) || a.month(t, {
          width: "abbreviated",
          context: "standalone"
        }) || a.month(t, { width: "narrow", context: "standalone" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 11;
  }
  set(t, e, a) {
    return t.setMonth(a, 1), t.setHours(0, 0, 0, 0), t;
  }
}
function Hf(r, n, t) {
  const e = j(r, t == null ? void 0 : t.in), a = Ki(e, t) - n;
  return e.setDate(e.getDate() - a * 7), j(e, t == null ? void 0 : t.in);
}
class Bf extends ae {
  constructor() {
    super(...arguments);
    B(this, "priority", 100);
    B(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(t, e, a) {
    switch (e) {
      case "w":
        return ye(be.week, t);
      case "wo":
        return a.ordinalNumber(t, { unit: "week" });
      default:
        return we(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 53;
  }
  set(t, e, a, o) {
    return vt(Hf(t, a, o), o);
  }
}
function Vf(r, n, t) {
  const e = j(r, t == null ? void 0 : t.in), a = io(e, t) - n;
  return e.setDate(e.getDate() - a * 7), e;
}
class jf extends ae {
  constructor() {
    super(...arguments);
    B(this, "priority", 100);
    B(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, a) {
    switch (e) {
      case "I":
        return ye(be.week, t);
      case "Io":
        return a.ordinalNumber(t, { unit: "week" });
      default:
        return we(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 53;
  }
  set(t, e, a) {
    return dr(Vf(t, a));
  }
}
const Zf = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], zf = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class Qf extends ae {
  constructor() {
    super(...arguments);
    B(this, "priority", 90);
    B(this, "subPriority", 1);
    B(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, a) {
    switch (e) {
      case "d":
        return ye(be.date, t);
      case "do":
        return a.ordinalNumber(t, { unit: "date" });
      default:
        return we(e.length, t);
    }
  }
  validate(t, e) {
    const a = t.getFullYear(), o = tc(a), s = t.getMonth();
    return o ? e >= 1 && e <= zf[s] : e >= 1 && e <= Zf[s];
  }
  set(t, e, a) {
    return t.setDate(a), t.setHours(0, 0, 0, 0), t;
  }
}
class qf extends ae {
  constructor() {
    super(...arguments);
    B(this, "priority", 90);
    B(this, "subpriority", 1);
    B(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "E",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, a) {
    switch (e) {
      case "D":
      case "DD":
        return ye(be.dayOfYear, t);
      case "Do":
        return a.ordinalNumber(t, { unit: "date" });
      default:
        return we(e.length, t);
    }
  }
  validate(t, e) {
    const a = t.getFullYear();
    return tc(a) ? e >= 1 && e <= 366 : e >= 1 && e <= 365;
  }
  set(t, e, a) {
    return t.setMonth(0, a), t.setHours(0, 0, 0, 0), t;
  }
}
function uo(r, n, t) {
  var d, f, p, h;
  const e = Kt(), a = (t == null ? void 0 : t.weekStartsOn) ?? ((f = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ?? e.weekStartsOn ?? ((h = (p = e.locale) == null ? void 0 : p.options) == null ? void 0 : h.weekStartsOn) ?? 0, o = j(r, t == null ? void 0 : t.in), s = o.getDay(), c = (n % 7 + 7) % 7, l = 7 - a, u = n < 0 || n > 6 ? n - (s + l) % 7 : (c + l) % 7 - (s + l) % 7;
  return Ze(o, u, t);
}
class Uf extends ae {
  constructor() {
    super(...arguments);
    B(this, "priority", 90);
    B(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return a.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(t, { width: "short", context: "formatting" }) || a.day(t, { width: "narrow", context: "formatting" });
      // T
      case "EEEEE":
        return a.day(t, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return a.day(t, { width: "short", context: "formatting" }) || a.day(t, { width: "narrow", context: "formatting" });
      // Tuesday
      case "EEEE":
      default:
        return a.day(t, { width: "wide", context: "formatting" }) || a.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(t, { width: "short", context: "formatting" }) || a.day(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 6;
  }
  set(t, e, a, o) {
    return t = uo(t, a, o), t.setHours(0, 0, 0, 0), t;
  }
}
class Kf extends ae {
  constructor() {
    super(...arguments);
    B(this, "priority", 90);
    B(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, a, o) {
    const s = (i) => {
      const c = Math.floor((i - 1) / 7) * 7;
      return (i + o.weekStartsOn + 6) % 7 + c;
    };
    switch (e) {
      // 3
      case "e":
      case "ee":
        return De(we(e.length, t), s);
      // 3rd
      case "eo":
        return De(
          a.ordinalNumber(t, {
            unit: "day"
          }),
          s
        );
      // Tue
      case "eee":
        return a.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(t, { width: "short", context: "formatting" }) || a.day(t, { width: "narrow", context: "formatting" });
      // T
      case "eeeee":
        return a.day(t, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return a.day(t, { width: "short", context: "formatting" }) || a.day(t, { width: "narrow", context: "formatting" });
      // Tuesday
      case "eeee":
      default:
        return a.day(t, { width: "wide", context: "formatting" }) || a.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(t, { width: "short", context: "formatting" }) || a.day(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 6;
  }
  set(t, e, a, o) {
    return t = uo(t, a, o), t.setHours(0, 0, 0, 0), t;
  }
}
class Gf extends ae {
  constructor() {
    super(...arguments);
    B(this, "priority", 90);
    B(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "e",
      "t",
      "T"
    ]);
  }
  parse(t, e, a, o) {
    const s = (i) => {
      const c = Math.floor((i - 1) / 7) * 7;
      return (i + o.weekStartsOn + 6) % 7 + c;
    };
    switch (e) {
      // 3
      case "c":
      case "cc":
        return De(we(e.length, t), s);
      // 3rd
      case "co":
        return De(
          a.ordinalNumber(t, {
            unit: "day"
          }),
          s
        );
      // Tue
      case "ccc":
        return a.day(t, {
          width: "abbreviated",
          context: "standalone"
        }) || a.day(t, { width: "short", context: "standalone" }) || a.day(t, { width: "narrow", context: "standalone" });
      // T
      case "ccccc":
        return a.day(t, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return a.day(t, { width: "short", context: "standalone" }) || a.day(t, { width: "narrow", context: "standalone" });
      // Tuesday
      case "cccc":
      default:
        return a.day(t, { width: "wide", context: "standalone" }) || a.day(t, {
          width: "abbreviated",
          context: "standalone"
        }) || a.day(t, { width: "short", context: "standalone" }) || a.day(t, { width: "narrow", context: "standalone" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 6;
  }
  set(t, e, a, o) {
    return t = uo(t, a, o), t.setHours(0, 0, 0, 0), t;
  }
}
function Xf(r, n, t) {
  const e = j(r, t == null ? void 0 : t.in), a = _f(e, t), o = n - a;
  return Ze(e, o, t);
}
class Jf extends ae {
  constructor() {
    super(...arguments);
    B(this, "priority", 90);
    B(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "E",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, a) {
    const o = (s) => s === 0 ? 7 : s;
    switch (e) {
      // 2
      case "i":
      case "ii":
        return we(e.length, t);
      // 2nd
      case "io":
        return a.ordinalNumber(t, { unit: "day" });
      // Tue
      case "iii":
        return De(
          a.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(t, {
            width: "short",
            context: "formatting"
          }) || a.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      // T
      case "iiiii":
        return De(
          a.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      // Tu
      case "iiiiii":
        return De(
          a.day(t, {
            width: "short",
            context: "formatting"
          }) || a.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      // Tuesday
      case "iiii":
      default:
        return De(
          a.day(t, {
            width: "wide",
            context: "formatting"
          }) || a.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(t, {
            width: "short",
            context: "formatting"
          }) || a.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 7;
  }
  set(t, e, a) {
    return t = Xf(t, a), t.setHours(0, 0, 0, 0), t;
  }
}
class ep extends ae {
  constructor() {
    super(...arguments);
    B(this, "priority", 80);
    B(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "a":
      case "aa":
      case "aaa":
        return a.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return a.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return a.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, e, a) {
    return t.setHours(lo(a), 0, 0, 0), t;
  }
}
class tp extends ae {
  constructor() {
    super(...arguments);
    B(this, "priority", 80);
    B(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "b":
      case "bb":
      case "bbb":
        return a.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return a.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return a.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, e, a) {
    return t.setHours(lo(a), 0, 0, 0), t;
  }
}
class rp extends ae {
  constructor() {
    super(...arguments);
    B(this, "priority", 80);
    B(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "B":
      case "BB":
      case "BBB":
        return a.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return a.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return a.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, e, a) {
    return t.setHours(lo(a), 0, 0, 0), t;
  }
}
class np extends ae {
  constructor() {
    super(...arguments);
    B(this, "priority", 70);
    B(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "h":
        return ye(be.hour12h, t);
      case "ho":
        return a.ordinalNumber(t, { unit: "hour" });
      default:
        return we(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 12;
  }
  set(t, e, a) {
    const o = t.getHours() >= 12;
    return o && a < 12 ? t.setHours(a + 12, 0, 0, 0) : !o && a === 12 ? t.setHours(0, 0, 0, 0) : t.setHours(a, 0, 0, 0), t;
  }
}
class ap extends ae {
  constructor() {
    super(...arguments);
    B(this, "priority", 70);
    B(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "H":
        return ye(be.hour23h, t);
      case "Ho":
        return a.ordinalNumber(t, { unit: "hour" });
      default:
        return we(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 23;
  }
  set(t, e, a) {
    return t.setHours(a, 0, 0, 0), t;
  }
}
class op extends ae {
  constructor() {
    super(...arguments);
    B(this, "priority", 70);
    B(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "K":
        return ye(be.hour11h, t);
      case "Ko":
        return a.ordinalNumber(t, { unit: "hour" });
      default:
        return we(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 11;
  }
  set(t, e, a) {
    return t.getHours() >= 12 && a < 12 ? t.setHours(a + 12, 0, 0, 0) : t.setHours(a, 0, 0, 0), t;
  }
}
class sp extends ae {
  constructor() {
    super(...arguments);
    B(this, "priority", 70);
    B(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "k":
        return ye(be.hour24h, t);
      case "ko":
        return a.ordinalNumber(t, { unit: "hour" });
      default:
        return we(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 24;
  }
  set(t, e, a) {
    const o = a <= 24 ? a % 24 : a;
    return t.setHours(o, 0, 0, 0), t;
  }
}
class ip extends ae {
  constructor() {
    super(...arguments);
    B(this, "priority", 60);
    B(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "m":
        return ye(be.minute, t);
      case "mo":
        return a.ordinalNumber(t, { unit: "minute" });
      default:
        return we(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 59;
  }
  set(t, e, a) {
    return t.setMinutes(a, 0, 0), t;
  }
}
class cp extends ae {
  constructor() {
    super(...arguments);
    B(this, "priority", 50);
    B(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "s":
        return ye(be.second, t);
      case "so":
        return a.ordinalNumber(t, { unit: "second" });
      default:
        return we(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 59;
  }
  set(t, e, a) {
    return t.setSeconds(a, 0), t;
  }
}
class lp extends ae {
  constructor() {
    super(...arguments);
    B(this, "priority", 30);
    B(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, e) {
    const a = (o) => Math.trunc(o * Math.pow(10, -e.length + 3));
    return De(we(e.length, t), a);
  }
  set(t, e, a) {
    return t.setMilliseconds(a), t;
  }
}
class up extends ae {
  constructor() {
    super(...arguments);
    B(this, "priority", 10);
    B(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(t, e) {
    switch (e) {
      case "X":
        return et(
          Je.basicOptionalMinutes,
          t
        );
      case "XX":
        return et(Je.basic, t);
      case "XXXX":
        return et(
          Je.basicOptionalSeconds,
          t
        );
      case "XXXXX":
        return et(
          Je.extendedOptionalSeconds,
          t
        );
      case "XXX":
      default:
        return et(Je.extended, t);
    }
  }
  set(t, e, a) {
    return e.timestampIsSet ? t : ue(
      t,
      t.getTime() - Yn(t) - a
    );
  }
}
class dp extends ae {
  constructor() {
    super(...arguments);
    B(this, "priority", 10);
    B(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(t, e) {
    switch (e) {
      case "x":
        return et(
          Je.basicOptionalMinutes,
          t
        );
      case "xx":
        return et(Je.basic, t);
      case "xxxx":
        return et(
          Je.basicOptionalSeconds,
          t
        );
      case "xxxxx":
        return et(
          Je.extendedOptionalSeconds,
          t
        );
      case "xxx":
      default:
        return et(Je.extended, t);
    }
  }
  set(t, e, a) {
    return e.timestampIsSet ? t : ue(
      t,
      t.getTime() - Yn(t) - a
    );
  }
}
class fp extends ae {
  constructor() {
    super(...arguments);
    B(this, "priority", 40);
    B(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return Ji(t);
  }
  set(t, e, a) {
    return [ue(t, a * 1e3), { timestampIsSet: !0 }];
  }
}
class pp extends ae {
  constructor() {
    super(...arguments);
    B(this, "priority", 20);
    B(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return Ji(t);
  }
  set(t, e, a) {
    return [ue(t, a), { timestampIsSet: !0 }];
  }
}
const hp = {
  G: new Nf(),
  y: new Yf(),
  Y: new Rf(),
  R: new Lf(),
  u: new $f(),
  Q: new If(),
  q: new Ff(),
  M: new Af(),
  L: new Wf(),
  w: new Bf(),
  I: new jf(),
  d: new Qf(),
  D: new qf(),
  E: new Uf(),
  e: new Kf(),
  c: new Gf(),
  i: new Jf(),
  a: new ep(),
  b: new tp(),
  B: new rp(),
  h: new np(),
  H: new ap(),
  K: new op(),
  k: new sp(),
  m: new ip(),
  s: new cp(),
  S: new lp(),
  X: new up(),
  x: new dp(),
  t: new fp(),
  T: new pp()
}, mp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, vp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, gp = /^'([^]*?)'?$/, yp = /''/g, wp = /\S/, bp = /[a-zA-Z]/;
function Dp(r, n, t, e) {
  var v, b, C, D, O, x, w, g;
  const a = () => ue((e == null ? void 0 : e.in) || t, NaN), o = Mf(), s = (e == null ? void 0 : e.locale) ?? o.locale ?? Ui, i = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((b = (v = e == null ? void 0 : e.locale) == null ? void 0 : v.options) == null ? void 0 : b.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((D = (C = o.locale) == null ? void 0 : C.options) == null ? void 0 : D.firstWeekContainsDate) ?? 1, c = (e == null ? void 0 : e.weekStartsOn) ?? ((x = (O = e == null ? void 0 : e.locale) == null ? void 0 : O.options) == null ? void 0 : x.weekStartsOn) ?? o.weekStartsOn ?? ((g = (w = o.locale) == null ? void 0 : w.options) == null ? void 0 : g.weekStartsOn) ?? 0;
  if (!n)
    return r ? a() : j(t, e == null ? void 0 : e.in);
  const l = {
    firstWeekContainsDate: i,
    weekStartsOn: c,
    locale: s
  }, u = [new Tf(e == null ? void 0 : e.in, t)], d = n.match(vp).map((y) => {
    const T = y[0];
    if (T in Ha) {
      const R = Ha[T];
      return R(y, s.formatLong);
    }
    return y;
  }).join("").match(mp), f = [];
  for (let y of d) {
    const T = y[0], R = hp[T];
    if (R) {
      const { incompatibleTokens: L } = R;
      if (Array.isArray(L)) {
        const V = f.find(
          (Y) => L.includes(Y.token) || Y.token === T
        );
        if (V)
          throw new RangeError(
            `The format string mustn't contain \`${V.fullToken}\` and \`${y}\` at the same time`
          );
      } else if (R.incompatibleTokens === "*" && f.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${y}\` and any other token at the same time`
        );
      f.push({ token: T, fullToken: y });
      const I = R.run(
        r,
        y,
        s.match,
        l
      );
      if (!I)
        return a();
      u.push(I.setter), r = I.rest;
    } else {
      if (T.match(bp))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + T + "`"
        );
      if (y === "''" ? y = "'" : T === "'" && (y = xp(y)), r.indexOf(y) === 0)
        r = r.slice(y.length);
      else
        return a();
    }
  }
  if (r.length > 0 && wp.test(r))
    return a();
  const p = u.map((y) => y.priority).sort((y, T) => T - y).filter((y, T, R) => R.indexOf(y) === T).map(
    (y) => u.filter((T) => T.priority === y).sort((T, R) => R.subPriority - T.subPriority)
  ).map((y) => y[0]);
  let h = j(t, e == null ? void 0 : e.in);
  if (isNaN(+h)) return a();
  const m = {};
  for (const y of p) {
    if (!y.validate(h, l))
      return a();
    const T = y.set(h, m, l);
    Array.isArray(T) ? (h = T[0], Object.assign(m, T[1])) : h = T;
  }
  return h;
}
function xp(r) {
  return r.match(gp)[1].replace(yp, "'");
}
function kp(r, n, t) {
  const [e, a] = yt(
    t == null ? void 0 : t.in,
    r,
    n
  );
  return e.getFullYear() === a.getFullYear() && e.getMonth() === a.getMonth();
}
function Mp(r, n, t) {
  const [e, a] = yt(
    t == null ? void 0 : t.in,
    r,
    n
  );
  return +Wa(e) == +Wa(a);
}
function _p(r, n, t) {
  const [e, a] = yt(
    t == null ? void 0 : t.in,
    r,
    n
  );
  return e.getFullYear() === a.getFullYear();
}
function Rr(r, n, t) {
  const e = +j(r, t == null ? void 0 : t.in), [a, o] = [
    +j(n.start, t == null ? void 0 : t.in),
    +j(n.end, t == null ? void 0 : t.in)
  ].sort((s, i) => s - i);
  return e >= a && e <= o;
}
function Cp(r, n, t) {
  return Ze(r, -1, t);
}
function Sp(r, n) {
  const t = () => ue(n == null ? void 0 : n.in, NaN), a = Tp(r);
  let o;
  if (a.date) {
    const l = Np(a.date, 2);
    o = Yp(l.restDateString, l.year);
  }
  if (!o || isNaN(+o)) return t();
  const s = +o;
  let i = 0, c;
  if (a.time && (i = Rp(a.time), isNaN(i)))
    return t();
  if (a.timezone) {
    if (c = Lp(a.timezone), isNaN(c)) return t();
  } else {
    const l = new Date(s + i), u = j(0, n == null ? void 0 : n.in);
    return u.setFullYear(
      l.getUTCFullYear(),
      l.getUTCMonth(),
      l.getUTCDate()
    ), u.setHours(
      l.getUTCHours(),
      l.getUTCMinutes(),
      l.getUTCSeconds(),
      l.getUTCMilliseconds()
    ), u;
  }
  return j(s + i + c, n == null ? void 0 : n.in);
}
const Kr = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, Ep = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, Pp = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, Op = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function Tp(r) {
  const n = {}, t = r.split(Kr.dateTimeDelimiter);
  let e;
  if (t.length > 2)
    return n;
  if (/:/.test(t[0]) ? e = t[0] : (n.date = t[0], e = t[1], Kr.timeZoneDelimiter.test(n.date) && (n.date = r.split(Kr.timeZoneDelimiter)[0], e = r.substr(
    n.date.length,
    r.length
  ))), e) {
    const a = Kr.timezone.exec(e);
    a ? (n.time = e.replace(a[1], ""), n.timezone = a[1]) : n.time = e;
  }
  return n;
}
function Np(r, n) {
  const t = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" + (4 + n) + "})|(\\d{2}|[+-]\\d{" + (2 + n) + "})$)"
  ), e = r.match(t);
  if (!e) return { year: NaN, restDateString: "" };
  const a = e[1] ? parseInt(e[1]) : null, o = e[2] ? parseInt(e[2]) : null;
  return {
    year: o === null ? a : o * 100,
    restDateString: r.slice((e[1] || e[2]).length)
  };
}
function Yp(r, n) {
  if (n === null) return /* @__PURE__ */ new Date(NaN);
  const t = r.match(Ep);
  if (!t) return /* @__PURE__ */ new Date(NaN);
  const e = !!t[4], a = Cr(t[1]), o = Cr(t[2]) - 1, s = Cr(t[3]), i = Cr(t[4]), c = Cr(t[5]) - 1;
  if (e)
    return Wp(n, i, c) ? $p(n, i, c) : /* @__PURE__ */ new Date(NaN);
  {
    const l = /* @__PURE__ */ new Date(0);
    return !Fp(n, o, s) || !Ap(n, a) ? /* @__PURE__ */ new Date(NaN) : (l.setUTCFullYear(n, o, Math.max(a, s)), l);
  }
}
function Cr(r) {
  return r ? parseInt(r) : 1;
}
function Rp(r) {
  const n = r.match(Pp);
  if (!n) return NaN;
  const t = ga(n[1]), e = ga(n[2]), a = ga(n[3]);
  return Hp(t, e, a) ? t * ta + e * ea + a * 1e3 : NaN;
}
function ga(r) {
  return r && parseFloat(r.replace(",", ".")) || 0;
}
function Lp(r) {
  if (r === "Z") return 0;
  const n = r.match(Op);
  if (!n) return 0;
  const t = n[1] === "+" ? -1 : 1, e = parseInt(n[2]), a = n[3] && parseInt(n[3]) || 0;
  return Bp(e, a) ? t * (e * ta + a * ea) : NaN;
}
function $p(r, n, t) {
  const e = /* @__PURE__ */ new Date(0);
  e.setUTCFullYear(r, 0, 4);
  const a = e.getUTCDay() || 7, o = (n - 1) * 7 + t + 1 - a;
  return e.setUTCDate(e.getUTCDate() + o), e;
}
const Ip = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function rc(r) {
  return r % 400 === 0 || r % 4 === 0 && r % 100 !== 0;
}
function Fp(r, n, t) {
  return n >= 0 && n <= 11 && t >= 1 && t <= (Ip[n] || (rc(r) ? 29 : 28));
}
function Ap(r, n) {
  return n >= 1 && n <= (rc(r) ? 366 : 365);
}
function Wp(r, n, t) {
  return n >= 1 && n <= 53 && t >= 0 && t <= 6;
}
function Hp(r, n, t) {
  return r === 24 ? n === 0 && t === 0 : t >= 0 && t < 60 && n >= 0 && n < 60 && r >= 0 && r < 25;
}
function Bp(r, n) {
  return n >= 0 && n <= 59;
}
function We(r, n, t) {
  const e = j(r, t == null ? void 0 : t.in), a = e.getFullYear(), o = e.getDate(), s = ue(r, 0);
  s.setFullYear(a, n, 15), s.setHours(0, 0, 0, 0);
  const i = kf(s);
  return e.setMonth(n, Math.min(o, i)), e;
}
function bn(r, n, t) {
  const e = j(r, t == null ? void 0 : t.in);
  return e.setHours(n), e;
}
function Dn(r, n, t) {
  const e = j(r, t == null ? void 0 : t.in);
  return e.setMinutes(n), e;
}
function Jt(r, n, t) {
  const e = j(r, t == null ? void 0 : t.in), a = Math.trunc(e.getMonth() / 3) + 1, o = n - a;
  return We(e, e.getMonth() + o * 3);
}
function xn(r, n, t) {
  const e = j(r, t == null ? void 0 : t.in);
  return e.setSeconds(n), e;
}
function Ke(r, n, t) {
  const e = j(r, t == null ? void 0 : t.in);
  return isNaN(+e) ? ue(r, NaN) : (e.setFullYear(n), e);
}
function Ht(r, n, t) {
  return Qe(r, -n, t);
}
function nc(r, n, t) {
  return so(r, -1, t);
}
function ds(r, n, t) {
  return Rn(r, -1, t);
}
function pr(r, n, t) {
  return lt(r, -n, t);
}
function na() {
  return typeof window < "u";
}
function kr(r) {
  return ac(r) ? (r.nodeName || "").toLowerCase() : "#document";
}
function Ie(r) {
  var n;
  return (r == null || (n = r.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function st(r) {
  var n;
  return (n = (ac(r) ? r.ownerDocument : r.document) || window.document) == null ? void 0 : n.documentElement;
}
function ac(r) {
  return na() ? r instanceof Node || r instanceof Ie(r).Node : !1;
}
function Ne(r) {
  return na() ? r instanceof Element || r instanceof Ie(r).Element : !1;
}
function ot(r) {
  return na() ? r instanceof HTMLElement || r instanceof Ie(r).HTMLElement : !1;
}
function fs(r) {
  return !na() || typeof ShadowRoot > "u" ? !1 : r instanceof ShadowRoot || r instanceof Ie(r).ShadowRoot;
}
const Vp = /* @__PURE__ */ new Set(["inline", "contents"]);
function Ar(r) {
  const {
    overflow: n,
    overflowX: t,
    overflowY: e,
    display: a
  } = Ve(r);
  return /auto|scroll|overlay|hidden|clip/.test(n + e + t) && !Vp.has(a);
}
const jp = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Zp(r) {
  return jp.has(kr(r));
}
const zp = [":popover-open", ":modal"];
function aa(r) {
  return zp.some((n) => {
    try {
      return r.matches(n);
    } catch {
      return !1;
    }
  });
}
const Qp = ["transform", "translate", "scale", "rotate", "perspective"], qp = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Up = ["paint", "layout", "strict", "content"];
function fo(r) {
  const n = po(), t = Ne(r) ? Ve(r) : r;
  return Qp.some((e) => t[e] ? t[e] !== "none" : !1) || (t.containerType ? t.containerType !== "normal" : !1) || !n && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !n && (t.filter ? t.filter !== "none" : !1) || qp.some((e) => (t.willChange || "").includes(e)) || Up.some((e) => (t.contain || "").includes(e));
}
function Kp(r) {
  let n = Tt(r);
  for (; ot(n) && !hr(n); ) {
    if (fo(n))
      return n;
    if (aa(n))
      return null;
    n = Tt(n);
  }
  return null;
}
function po() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Gp = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function hr(r) {
  return Gp.has(kr(r));
}
function Ve(r) {
  return Ie(r).getComputedStyle(r);
}
function oa(r) {
  return Ne(r) ? {
    scrollLeft: r.scrollLeft,
    scrollTop: r.scrollTop
  } : {
    scrollLeft: r.scrollX,
    scrollTop: r.scrollY
  };
}
function Tt(r) {
  if (kr(r) === "html")
    return r;
  const n = (
    // Step into the shadow DOM of the parent of a slotted node.
    r.assignedSlot || // DOM Element detected.
    r.parentNode || // ShadowRoot detected.
    fs(r) && r.host || // Fallback.
    st(r)
  );
  return fs(n) ? n.host : n;
}
function oc(r) {
  const n = Tt(r);
  return hr(n) ? r.ownerDocument ? r.ownerDocument.body : r.body : ot(n) && Ar(n) ? n : oc(n);
}
function Lr(r, n, t) {
  var e;
  n === void 0 && (n = []), t === void 0 && (t = !0);
  const a = oc(r), o = a === ((e = r.ownerDocument) == null ? void 0 : e.body), s = Ie(a);
  if (o) {
    const i = Va(s);
    return n.concat(s, s.visualViewport || [], Ar(a) ? a : [], i && t ? Lr(i) : []);
  }
  return n.concat(a, Lr(a, [], t));
}
function Va(r) {
  return r.parent && Object.getPrototypeOf(r.parent) ? r.frameElement : null;
}
const mr = Math.min, Bt = Math.max, Wn = Math.round, Gr = Math.floor, at = (r) => ({
  x: r,
  y: r
}), Xp = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Jp = {
  start: "end",
  end: "start"
};
function eh(r, n, t) {
  return Bt(r, mr(n, t));
}
function sa(r, n) {
  return typeof r == "function" ? r(n) : r;
}
function vr(r) {
  return r.split("-")[0];
}
function Wr(r) {
  return r.split("-")[1];
}
function th(r) {
  return r === "x" ? "y" : "x";
}
function ho(r) {
  return r === "y" ? "height" : "width";
}
const rh = /* @__PURE__ */ new Set(["top", "bottom"]);
function $t(r) {
  return rh.has(vr(r)) ? "y" : "x";
}
function mo(r) {
  return th($t(r));
}
function nh(r, n, t) {
  t === void 0 && (t = !1);
  const e = Wr(r), a = mo(r), o = ho(a);
  let s = a === "x" ? e === (t ? "end" : "start") ? "right" : "left" : e === "start" ? "bottom" : "top";
  return n.reference[o] > n.floating[o] && (s = Hn(s)), [s, Hn(s)];
}
function ah(r) {
  const n = Hn(r);
  return [ja(r), n, ja(n)];
}
function ja(r) {
  return r.replace(/start|end/g, (n) => Jp[n]);
}
const ps = ["left", "right"], hs = ["right", "left"], oh = ["top", "bottom"], sh = ["bottom", "top"];
function ih(r, n, t) {
  switch (r) {
    case "top":
    case "bottom":
      return t ? n ? hs : ps : n ? ps : hs;
    case "left":
    case "right":
      return n ? oh : sh;
    default:
      return [];
  }
}
function ch(r, n, t, e) {
  const a = Wr(r);
  let o = ih(vr(r), t === "start", e);
  return a && (o = o.map((s) => s + "-" + a), n && (o = o.concat(o.map(ja)))), o;
}
function Hn(r) {
  return r.replace(/left|right|bottom|top/g, (n) => Xp[n]);
}
function lh(r) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...r
  };
}
function sc(r) {
  return typeof r != "number" ? lh(r) : {
    top: r,
    right: r,
    bottom: r,
    left: r
  };
}
function Bn(r) {
  const {
    x: n,
    y: t,
    width: e,
    height: a
  } = r;
  return {
    width: e,
    height: a,
    top: t,
    left: n,
    right: n + e,
    bottom: t + a,
    x: n,
    y: t
  };
}
var uh = typeof document < "u", dh = function() {
}, Vn = uh ? qa : dh;
const fh = {
  ...P
}, ph = fh.useInsertionEffect, hh = ph || ((r) => r());
function mh(r) {
  const n = P.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return hh(() => {
    n.current = r;
  }), P.useCallback(function() {
    for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++)
      e[a] = arguments[a];
    return n.current == null ? void 0 : n.current(...e);
  }, []);
}
function ms(r, n, t) {
  let {
    reference: e,
    floating: a
  } = r;
  const o = $t(n), s = mo(n), i = ho(s), c = vr(n), l = o === "y", u = e.x + e.width / 2 - a.width / 2, d = e.y + e.height / 2 - a.height / 2, f = e[i] / 2 - a[i] / 2;
  let p;
  switch (c) {
    case "top":
      p = {
        x: u,
        y: e.y - a.height
      };
      break;
    case "bottom":
      p = {
        x: u,
        y: e.y + e.height
      };
      break;
    case "right":
      p = {
        x: e.x + e.width,
        y: d
      };
      break;
    case "left":
      p = {
        x: e.x - a.width,
        y: d
      };
      break;
    default:
      p = {
        x: e.x,
        y: e.y
      };
  }
  switch (Wr(n)) {
    case "start":
      p[s] -= f * (t && l ? -1 : 1);
      break;
    case "end":
      p[s] += f * (t && l ? -1 : 1);
      break;
  }
  return p;
}
const vh = async (r, n, t) => {
  const {
    placement: e = "bottom",
    strategy: a = "absolute",
    middleware: o = [],
    platform: s
  } = t, i = o.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(n));
  let l = await s.getElementRects({
    reference: r,
    floating: n,
    strategy: a
  }), {
    x: u,
    y: d
  } = ms(l, e, c), f = e, p = {}, h = 0;
  for (let m = 0; m < i.length; m++) {
    const {
      name: v,
      fn: b
    } = i[m], {
      x: C,
      y: D,
      data: O,
      reset: x
    } = await b({
      x: u,
      y: d,
      initialPlacement: e,
      placement: f,
      strategy: a,
      middlewareData: p,
      rects: l,
      platform: s,
      elements: {
        reference: r,
        floating: n
      }
    });
    u = C ?? u, d = D ?? d, p = {
      ...p,
      [v]: {
        ...p[v],
        ...O
      }
    }, x && h <= 50 && (h++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await s.getElementRects({
      reference: r,
      floating: n,
      strategy: a
    }) : x.rects), {
      x: u,
      y: d
    } = ms(l, f, c)), m = -1);
  }
  return {
    x: u,
    y: d,
    placement: f,
    strategy: a,
    middlewareData: p
  };
};
async function gh(r, n) {
  var t;
  n === void 0 && (n = {});
  const {
    x: e,
    y: a,
    platform: o,
    rects: s,
    elements: i,
    strategy: c
  } = r, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: p = 0
  } = sa(n, r), h = sc(p), v = i[f ? d === "floating" ? "reference" : "floating" : d], b = Bn(await o.getClippingRect({
    element: (t = await (o.isElement == null ? void 0 : o.isElement(v))) == null || t ? v : v.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), C = d === "floating" ? {
    x: e,
    y: a,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, D = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(i.floating)), O = await (o.isElement == null ? void 0 : o.isElement(D)) ? await (o.getScale == null ? void 0 : o.getScale(D)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = Bn(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: C,
    offsetParent: D,
    strategy: c
  }) : C);
  return {
    top: (b.top - x.top + h.top) / O.y,
    bottom: (x.bottom - b.bottom + h.bottom) / O.y,
    left: (b.left - x.left + h.left) / O.x,
    right: (x.right - b.right + h.right) / O.x
  };
}
const yh = (r) => ({
  name: "arrow",
  options: r,
  async fn(n) {
    const {
      x: t,
      y: e,
      placement: a,
      rects: o,
      platform: s,
      elements: i,
      middlewareData: c
    } = n, {
      element: l,
      padding: u = 0
    } = sa(r, n) || {};
    if (l == null)
      return {};
    const d = sc(u), f = {
      x: t,
      y: e
    }, p = mo(a), h = ho(p), m = await s.getDimensions(l), v = p === "y", b = v ? "top" : "left", C = v ? "bottom" : "right", D = v ? "clientHeight" : "clientWidth", O = o.reference[h] + o.reference[p] - f[p] - o.floating[h], x = f[p] - o.reference[p], w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let g = w ? w[D] : 0;
    (!g || !await (s.isElement == null ? void 0 : s.isElement(w))) && (g = i.floating[D] || o.floating[h]);
    const y = O / 2 - x / 2, T = g / 2 - m[h] / 2 - 1, R = mr(d[b], T), L = mr(d[C], T), I = R, V = g - m[h] - L, Y = g / 2 - m[h] / 2 + y, S = eh(I, Y, V), k = !c.arrow && Wr(a) != null && Y !== S && o.reference[h] / 2 - (Y < I ? R : L) - m[h] / 2 < 0, E = k ? Y < I ? Y - I : Y - V : 0;
    return {
      [p]: f[p] + E,
      data: {
        [p]: S,
        centerOffset: Y - S - E,
        ...k && {
          alignmentOffset: E
        }
      },
      reset: k
    };
  }
}), wh = function(r) {
  return r === void 0 && (r = {}), {
    name: "flip",
    options: r,
    async fn(n) {
      var t, e;
      const {
        placement: a,
        middlewareData: o,
        rects: s,
        initialPlacement: i,
        platform: c,
        elements: l
      } = n, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: m = !0,
        ...v
      } = sa(r, n);
      if ((t = o.arrow) != null && t.alignmentOffset)
        return {};
      const b = vr(a), C = $t(i), D = vr(i) === i, O = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), x = f || (D || !m ? [Hn(i)] : ah(i)), w = h !== "none";
      !f && w && x.push(...ch(i, m, h, O));
      const g = [i, ...x], y = await gh(n, v), T = [];
      let R = ((e = o.flip) == null ? void 0 : e.overflows) || [];
      if (u && T.push(y[b]), d) {
        const Y = nh(a, s, O);
        T.push(y[Y[0]], y[Y[1]]);
      }
      if (R = [...R, {
        placement: a,
        overflows: T
      }], !T.every((Y) => Y <= 0)) {
        var L, I;
        const Y = (((L = o.flip) == null ? void 0 : L.index) || 0) + 1, S = g[Y];
        if (S && (!(d === "alignment" ? C !== $t(S) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        R.every((_) => _.overflows[0] > 0 && $t(_.placement) === C)))
          return {
            data: {
              index: Y,
              overflows: R
            },
            reset: {
              placement: S
            }
          };
        let k = (I = R.filter((E) => E.overflows[0] <= 0).sort((E, _) => E.overflows[1] - _.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!k)
          switch (p) {
            case "bestFit": {
              var V;
              const E = (V = R.filter((_) => {
                if (w) {
                  const F = $t(_.placement);
                  return F === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  F === "y";
                }
                return !0;
              }).map((_) => [_.placement, _.overflows.filter((F) => F > 0).reduce((F, H) => F + H, 0)]).sort((_, F) => _[1] - F[1])[0]) == null ? void 0 : V[0];
              E && (k = E);
              break;
            }
            case "initialPlacement":
              k = i;
              break;
          }
        if (a !== k)
          return {
            reset: {
              placement: k
            }
          };
      }
      return {};
    }
  };
}, bh = /* @__PURE__ */ new Set(["left", "top"]);
async function Dh(r, n) {
  const {
    placement: t,
    platform: e,
    elements: a
  } = r, o = await (e.isRTL == null ? void 0 : e.isRTL(a.floating)), s = vr(t), i = Wr(t), c = $t(t) === "y", l = bh.has(s) ? -1 : 1, u = o && c ? -1 : 1, d = sa(n, r);
  let {
    mainAxis: f,
    crossAxis: p,
    alignmentAxis: h
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return i && typeof h == "number" && (p = i === "end" ? h * -1 : h), c ? {
    x: p * u,
    y: f * l
  } : {
    x: f * l,
    y: p * u
  };
}
const xh = function(r) {
  return r === void 0 && (r = 0), {
    name: "offset",
    options: r,
    async fn(n) {
      var t, e;
      const {
        x: a,
        y: o,
        placement: s,
        middlewareData: i
      } = n, c = await Dh(n, r);
      return s === ((t = i.offset) == null ? void 0 : t.placement) && (e = i.arrow) != null && e.alignmentOffset ? {} : {
        x: a + c.x,
        y: o + c.y,
        data: {
          ...c,
          placement: s
        }
      };
    }
  };
};
function ic(r) {
  const n = Ve(r);
  let t = parseFloat(n.width) || 0, e = parseFloat(n.height) || 0;
  const a = ot(r), o = a ? r.offsetWidth : t, s = a ? r.offsetHeight : e, i = Wn(t) !== o || Wn(e) !== s;
  return i && (t = o, e = s), {
    width: t,
    height: e,
    $: i
  };
}
function vo(r) {
  return Ne(r) ? r : r.contextElement;
}
function rr(r) {
  const n = vo(r);
  if (!ot(n))
    return at(1);
  const t = n.getBoundingClientRect(), {
    width: e,
    height: a,
    $: o
  } = ic(n);
  let s = (o ? Wn(t.width) : t.width) / e, i = (o ? Wn(t.height) : t.height) / a;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const kh = /* @__PURE__ */ at(0);
function cc(r) {
  const n = Ie(r);
  return !po() || !n.visualViewport ? kh : {
    x: n.visualViewport.offsetLeft,
    y: n.visualViewport.offsetTop
  };
}
function Mh(r, n, t) {
  return n === void 0 && (n = !1), !t || n && t !== Ie(r) ? !1 : n;
}
function qt(r, n, t, e) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const a = r.getBoundingClientRect(), o = vo(r);
  let s = at(1);
  n && (e ? Ne(e) && (s = rr(e)) : s = rr(r));
  const i = Mh(o, t, e) ? cc(o) : at(0);
  let c = (a.left + i.x) / s.x, l = (a.top + i.y) / s.y, u = a.width / s.x, d = a.height / s.y;
  if (o) {
    const f = Ie(o), p = e && Ne(e) ? Ie(e) : e;
    let h = f, m = Va(h);
    for (; m && e && p !== h; ) {
      const v = rr(m), b = m.getBoundingClientRect(), C = Ve(m), D = b.left + (m.clientLeft + parseFloat(C.paddingLeft)) * v.x, O = b.top + (m.clientTop + parseFloat(C.paddingTop)) * v.y;
      c *= v.x, l *= v.y, u *= v.x, d *= v.y, c += D, l += O, h = Ie(m), m = Va(h);
    }
  }
  return Bn({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function go(r, n) {
  const t = oa(r).scrollLeft;
  return n ? n.left + t : qt(st(r)).left + t;
}
function lc(r, n, t) {
  t === void 0 && (t = !1);
  const e = r.getBoundingClientRect(), a = e.left + n.scrollLeft - (t ? 0 : (
    // RTL <body> scrollbar.
    go(r, e)
  )), o = e.top + n.scrollTop;
  return {
    x: a,
    y: o
  };
}
function _h(r) {
  let {
    elements: n,
    rect: t,
    offsetParent: e,
    strategy: a
  } = r;
  const o = a === "fixed", s = st(e), i = n ? aa(n.floating) : !1;
  if (e === s || i && o)
    return t;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = at(1);
  const u = at(0), d = ot(e);
  if ((d || !d && !o) && ((kr(e) !== "body" || Ar(s)) && (c = oa(e)), ot(e))) {
    const p = qt(e);
    l = rr(e), u.x = p.x + e.clientLeft, u.y = p.y + e.clientTop;
  }
  const f = s && !d && !o ? lc(s, c, !0) : at(0);
  return {
    width: t.width * l.x,
    height: t.height * l.y,
    x: t.x * l.x - c.scrollLeft * l.x + u.x + f.x,
    y: t.y * l.y - c.scrollTop * l.y + u.y + f.y
  };
}
function Ch(r) {
  return Array.from(r.getClientRects());
}
function Sh(r) {
  const n = st(r), t = oa(r), e = r.ownerDocument.body, a = Bt(n.scrollWidth, n.clientWidth, e.scrollWidth, e.clientWidth), o = Bt(n.scrollHeight, n.clientHeight, e.scrollHeight, e.clientHeight);
  let s = -t.scrollLeft + go(r);
  const i = -t.scrollTop;
  return Ve(e).direction === "rtl" && (s += Bt(n.clientWidth, e.clientWidth) - a), {
    width: a,
    height: o,
    x: s,
    y: i
  };
}
function Eh(r, n) {
  const t = Ie(r), e = st(r), a = t.visualViewport;
  let o = e.clientWidth, s = e.clientHeight, i = 0, c = 0;
  if (a) {
    o = a.width, s = a.height;
    const l = po();
    (!l || l && n === "fixed") && (i = a.offsetLeft, c = a.offsetTop);
  }
  return {
    width: o,
    height: s,
    x: i,
    y: c
  };
}
const Ph = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Oh(r, n) {
  const t = qt(r, !0, n === "fixed"), e = t.top + r.clientTop, a = t.left + r.clientLeft, o = ot(r) ? rr(r) : at(1), s = r.clientWidth * o.x, i = r.clientHeight * o.y, c = a * o.x, l = e * o.y;
  return {
    width: s,
    height: i,
    x: c,
    y: l
  };
}
function vs(r, n, t) {
  let e;
  if (n === "viewport")
    e = Eh(r, t);
  else if (n === "document")
    e = Sh(st(r));
  else if (Ne(n))
    e = Oh(n, t);
  else {
    const a = cc(r);
    e = {
      x: n.x - a.x,
      y: n.y - a.y,
      width: n.width,
      height: n.height
    };
  }
  return Bn(e);
}
function uc(r, n) {
  const t = Tt(r);
  return t === n || !Ne(t) || hr(t) ? !1 : Ve(t).position === "fixed" || uc(t, n);
}
function Th(r, n) {
  const t = n.get(r);
  if (t)
    return t;
  let e = Lr(r, [], !1).filter((i) => Ne(i) && kr(i) !== "body"), a = null;
  const o = Ve(r).position === "fixed";
  let s = o ? Tt(r) : r;
  for (; Ne(s) && !hr(s); ) {
    const i = Ve(s), c = fo(s);
    !c && i.position === "fixed" && (a = null), (o ? !c && !a : !c && i.position === "static" && !!a && Ph.has(a.position) || Ar(s) && !c && uc(r, s)) ? e = e.filter((u) => u !== s) : a = i, s = Tt(s);
  }
  return n.set(r, e), e;
}
function Nh(r) {
  let {
    element: n,
    boundary: t,
    rootBoundary: e,
    strategy: a
  } = r;
  const s = [...t === "clippingAncestors" ? aa(n) ? [] : Th(n, this._c) : [].concat(t), e], i = s[0], c = s.reduce((l, u) => {
    const d = vs(n, u, a);
    return l.top = Bt(d.top, l.top), l.right = mr(d.right, l.right), l.bottom = mr(d.bottom, l.bottom), l.left = Bt(d.left, l.left), l;
  }, vs(n, i, a));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Yh(r) {
  const {
    width: n,
    height: t
  } = ic(r);
  return {
    width: n,
    height: t
  };
}
function Rh(r, n, t) {
  const e = ot(n), a = st(n), o = t === "fixed", s = qt(r, !0, o, n);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = at(0);
  function l() {
    c.x = go(a);
  }
  if (e || !e && !o)
    if ((kr(n) !== "body" || Ar(a)) && (i = oa(n)), e) {
      const p = qt(n, !0, o, n);
      c.x = p.x + n.clientLeft, c.y = p.y + n.clientTop;
    } else a && l();
  o && !e && a && l();
  const u = a && !e && !o ? lc(a, i) : at(0), d = s.left + i.scrollLeft - c.x - u.x, f = s.top + i.scrollTop - c.y - u.y;
  return {
    x: d,
    y: f,
    width: s.width,
    height: s.height
  };
}
function ya(r) {
  return Ve(r).position === "static";
}
function gs(r, n) {
  if (!ot(r) || Ve(r).position === "fixed")
    return null;
  if (n)
    return n(r);
  let t = r.offsetParent;
  return st(r) === t && (t = t.ownerDocument.body), t;
}
function dc(r, n) {
  const t = Ie(r);
  if (aa(r))
    return t;
  if (!ot(r)) {
    let a = Tt(r);
    for (; a && !hr(a); ) {
      if (Ne(a) && !ya(a))
        return a;
      a = Tt(a);
    }
    return t;
  }
  let e = gs(r, n);
  for (; e && Zp(e) && ya(e); )
    e = gs(e, n);
  return e && hr(e) && ya(e) && !fo(e) ? t : e || Kp(r) || t;
}
const Lh = async function(r) {
  const n = this.getOffsetParent || dc, t = this.getDimensions, e = await t(r.floating);
  return {
    reference: Rh(r.reference, await n(r.floating), r.strategy),
    floating: {
      x: 0,
      y: 0,
      width: e.width,
      height: e.height
    }
  };
};
function $h(r) {
  return Ve(r).direction === "rtl";
}
const Ih = {
  convertOffsetParentRelativeRectToViewportRelativeRect: _h,
  getDocumentElement: st,
  getClippingRect: Nh,
  getOffsetParent: dc,
  getElementRects: Lh,
  getClientRects: Ch,
  getDimensions: Yh,
  getScale: rr,
  isElement: Ne,
  isRTL: $h
};
function fc(r, n) {
  return r.x === n.x && r.y === n.y && r.width === n.width && r.height === n.height;
}
function Fh(r, n) {
  let t = null, e;
  const a = st(r);
  function o() {
    var i;
    clearTimeout(e), (i = t) == null || i.disconnect(), t = null;
  }
  function s(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), o();
    const l = r.getBoundingClientRect(), {
      left: u,
      top: d,
      width: f,
      height: p
    } = l;
    if (i || n(), !f || !p)
      return;
    const h = Gr(d), m = Gr(a.clientWidth - (u + f)), v = Gr(a.clientHeight - (d + p)), b = Gr(u), D = {
      rootMargin: -h + "px " + -m + "px " + -v + "px " + -b + "px",
      threshold: Bt(0, mr(1, c)) || 1
    };
    let O = !0;
    function x(w) {
      const g = w[0].intersectionRatio;
      if (g !== c) {
        if (!O)
          return s();
        g ? s(!1, g) : e = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      g === 1 && !fc(l, r.getBoundingClientRect()) && s(), O = !1;
    }
    try {
      t = new IntersectionObserver(x, {
        ...D,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(x, D);
    }
    t.observe(r);
  }
  return s(!0), o;
}
function Ah(r, n, t, e) {
  e === void 0 && (e = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: o = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = e, l = vo(r), u = a || o ? [...l ? Lr(l) : [], ...Lr(n)] : [];
  u.forEach((b) => {
    a && b.addEventListener("scroll", t, {
      passive: !0
    }), o && b.addEventListener("resize", t);
  });
  const d = l && i ? Fh(l, t) : null;
  let f = -1, p = null;
  s && (p = new ResizeObserver((b) => {
    let [C] = b;
    C && C.target === l && p && (p.unobserve(n), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var D;
      (D = p) == null || D.observe(n);
    })), t();
  }), l && !c && p.observe(l), p.observe(n));
  let h, m = c ? qt(r) : null;
  c && v();
  function v() {
    const b = qt(r);
    m && !fc(m, b) && t(), m = b, h = requestAnimationFrame(v);
  }
  return t(), () => {
    var b;
    u.forEach((C) => {
      a && C.removeEventListener("scroll", t), o && C.removeEventListener("resize", t);
    }), d == null || d(), (b = p) == null || b.disconnect(), p = null, c && cancelAnimationFrame(h);
  };
}
const Wh = xh, Hh = wh, ys = yh, Bh = (r, n, t) => {
  const e = /* @__PURE__ */ new Map(), a = {
    platform: Ih,
    ...t
  }, o = {
    ...a.platform,
    _c: e
  };
  return vh(r, n, {
    ...a,
    platform: o
  });
};
var Vh = typeof document < "u", jh = function() {
}, kn = Vh ? qa : jh;
function jn(r, n) {
  if (r === n)
    return !0;
  if (typeof r != typeof n)
    return !1;
  if (typeof r == "function" && r.toString() === n.toString())
    return !0;
  let t, e, a;
  if (r && n && typeof r == "object") {
    if (Array.isArray(r)) {
      if (t = r.length, t !== n.length) return !1;
      for (e = t; e-- !== 0; )
        if (!jn(r[e], n[e]))
          return !1;
      return !0;
    }
    if (a = Object.keys(r), t = a.length, t !== Object.keys(n).length)
      return !1;
    for (e = t; e-- !== 0; )
      if (!{}.hasOwnProperty.call(n, a[e]))
        return !1;
    for (e = t; e-- !== 0; ) {
      const o = a[e];
      if (!(o === "_owner" && r.$$typeof) && !jn(r[o], n[o]))
        return !1;
    }
    return !0;
  }
  return r !== r && n !== n;
}
function pc(r) {
  return typeof window > "u" ? 1 : (r.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ws(r, n) {
  const t = pc(r);
  return Math.round(n * t) / t;
}
function wa(r) {
  const n = P.useRef(r);
  return kn(() => {
    n.current = r;
  }), n;
}
function Zh(r) {
  r === void 0 && (r = {});
  const {
    placement: n = "bottom",
    strategy: t = "absolute",
    middleware: e = [],
    platform: a,
    elements: {
      reference: o,
      floating: s
    } = {},
    transform: i = !0,
    whileElementsMounted: c,
    open: l
  } = r, [u, d] = P.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: n,
    middlewareData: {},
    isPositioned: !1
  }), [f, p] = P.useState(e);
  jn(f, e) || p(e);
  const [h, m] = P.useState(null), [v, b] = P.useState(null), C = P.useCallback((_) => {
    _ !== w.current && (w.current = _, m(_));
  }, []), D = P.useCallback((_) => {
    _ !== g.current && (g.current = _, b(_));
  }, []), O = o || h, x = s || v, w = P.useRef(null), g = P.useRef(null), y = P.useRef(u), T = c != null, R = wa(c), L = wa(a), I = wa(l), V = P.useCallback(() => {
    if (!w.current || !g.current)
      return;
    const _ = {
      placement: n,
      strategy: t,
      middleware: f
    };
    L.current && (_.platform = L.current), Bh(w.current, g.current, _).then((F) => {
      const H = {
        ...F,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: I.current !== !1
      };
      Y.current && !jn(y.current, H) && (y.current = H, Pc.flushSync(() => {
        d(H);
      }));
    });
  }, [f, n, t, L, I]);
  kn(() => {
    l === !1 && y.current.isPositioned && (y.current.isPositioned = !1, d((_) => ({
      ..._,
      isPositioned: !1
    })));
  }, [l]);
  const Y = P.useRef(!1);
  kn(() => (Y.current = !0, () => {
    Y.current = !1;
  }), []), kn(() => {
    if (O && (w.current = O), x && (g.current = x), O && x) {
      if (R.current)
        return R.current(O, x, V);
      V();
    }
  }, [O, x, V, R, T]);
  const S = P.useMemo(() => ({
    reference: w,
    floating: g,
    setReference: C,
    setFloating: D
  }), [C, D]), k = P.useMemo(() => ({
    reference: O,
    floating: x
  }), [O, x]), E = P.useMemo(() => {
    const _ = {
      position: t,
      left: 0,
      top: 0
    };
    if (!k.floating)
      return _;
    const F = ws(k.floating, u.x), H = ws(k.floating, u.y);
    return i ? {
      ..._,
      transform: "translate(" + F + "px, " + H + "px)",
      ...pc(k.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: F,
      top: H
    };
  }, [t, i, k.floating, u.x, u.y]);
  return P.useMemo(() => ({
    ...u,
    update: V,
    refs: S,
    elements: k,
    floatingStyles: E
  }), [u, V, S, k, E]);
}
const zh = (r) => {
  function n(t) {
    return {}.hasOwnProperty.call(t, "current");
  }
  return {
    name: "arrow",
    options: r,
    fn(t) {
      const {
        element: e,
        padding: a
      } = typeof r == "function" ? r(t) : r;
      return e && n(e) ? e.current != null ? ys({
        element: e.current,
        padding: a
      }).fn(t) : {} : e ? ys({
        element: e,
        padding: a
      }).fn(t) : {};
    }
  };
}, Qh = (r, n) => ({
  ...Wh(r),
  options: [r, n]
}), qh = (r, n) => ({
  ...Hh(r),
  options: [r, n]
}), Uh = (r, n) => ({
  ...zh(r),
  options: [r, n]
}), Kh = {
  ...P
};
let bs = !1, Gh = 0;
const Ds = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + Gh++
);
function Xh() {
  const [r, n] = P.useState(() => bs ? Ds() : void 0);
  return Vn(() => {
    r == null && n(Ds());
  }, []), P.useEffect(() => {
    bs = !0;
  }, []), r;
}
const Jh = Kh.useId, hc = Jh || Xh;
let $r;
process.env.NODE_ENV !== "production" && ($r = /* @__PURE__ */ new Set());
function e1() {
  for (var r, n = arguments.length, t = new Array(n), e = 0; e < n; e++)
    t[e] = arguments[e];
  const a = "Floating UI: " + t.join(" ");
  if (!((r = $r) != null && r.has(a))) {
    var o;
    (o = $r) == null || o.add(a), console.warn(a);
  }
}
function t1() {
  for (var r, n = arguments.length, t = new Array(n), e = 0; e < n; e++)
    t[e] = arguments[e];
  const a = "Floating UI: " + t.join(" ");
  if (!((r = $r) != null && r.has(a))) {
    var o;
    (o = $r) == null || o.add(a), console.error(a);
  }
}
const r1 = /* @__PURE__ */ P.forwardRef(function(n, t) {
  const {
    context: {
      placement: e,
      elements: {
        floating: a
      },
      middlewareData: {
        arrow: o,
        shift: s
      }
    },
    width: i = 14,
    height: c = 7,
    tipRadius: l = 0,
    strokeWidth: u = 0,
    staticOffset: d,
    stroke: f,
    d: p,
    style: {
      transform: h,
      ...m
    } = {},
    ...v
  } = n;
  process.env.NODE_ENV !== "production" && (t || e1("The `ref` prop is required for `FloatingArrow`."));
  const b = hc(), [C, D] = P.useState(!1);
  if (Vn(() => {
    if (!a) return;
    Ve(a).direction === "rtl" && D(!0);
  }, [a]), !a)
    return null;
  const [O, x] = e.split("-"), w = O === "top" || O === "bottom";
  let g = d;
  (w && s != null && s.x || !w && s != null && s.y) && (g = null);
  const y = u * 2, T = y / 2, R = i / 2 * (l / -8 + 1), L = c / 2 * l / 4, I = !!p, V = g && x === "end" ? "bottom" : "top";
  let Y = g && x === "end" ? "right" : "left";
  g && C && (Y = x === "end" ? "left" : "right");
  const S = (o == null ? void 0 : o.x) != null ? g || o.x : "", k = (o == null ? void 0 : o.y) != null ? g || o.y : "", E = p || "M0,0" + (" H" + i) + (" L" + (i - R) + "," + (c - L)) + (" Q" + i / 2 + "," + c + " " + R + "," + (c - L)) + " Z", _ = {
    top: I ? "rotate(180deg)" : "",
    left: I ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: I ? "" : "rotate(180deg)",
    right: I ? "rotate(-90deg)" : "rotate(90deg)"
  }[O];
  return /* @__PURE__ */ U("svg", {
    ...v,
    "aria-hidden": !0,
    ref: t,
    width: I ? i : i + y,
    height: i,
    viewBox: "0 0 " + i + " " + (c > i ? c : i),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [Y]: S,
      [V]: k,
      [O]: w || I ? "100%" : "calc(100% - " + y / 2 + "px)",
      transform: [_, h].filter((F) => !!F).join(" "),
      ...m
    },
    children: [y > 0 && /* @__PURE__ */ N("path", {
      clipPath: "url(#" + b + ")",
      fill: "none",
      stroke: f,
      strokeWidth: y + (p ? 0 : 1),
      d: E
    }), /* @__PURE__ */ N("path", {
      stroke: y && !p ? v.fill : "none",
      d: E
    }), /* @__PURE__ */ N("clipPath", {
      id: b,
      children: /* @__PURE__ */ N("rect", {
        x: -T,
        y: T * (I ? -1 : 1),
        width: i + y,
        height: i
      })
    })]
  });
});
function n1() {
  const r = /* @__PURE__ */ new Map();
  return {
    emit(n, t) {
      var e;
      (e = r.get(n)) == null || e.forEach((a) => a(t));
    },
    on(n, t) {
      r.has(n) || r.set(n, /* @__PURE__ */ new Set()), r.get(n).add(t);
    },
    off(n, t) {
      var e;
      (e = r.get(n)) == null || e.delete(t);
    }
  };
}
const a1 = /* @__PURE__ */ P.createContext(null), o1 = /* @__PURE__ */ P.createContext(null), s1 = () => {
  var r;
  return ((r = P.useContext(a1)) == null ? void 0 : r.id) || null;
}, i1 = () => P.useContext(o1);
function c1(r) {
  const {
    open: n = !1,
    onOpenChange: t,
    elements: e
  } = r, a = hc(), o = P.useRef({}), [s] = P.useState(() => n1()), i = s1() != null;
  if (process.env.NODE_ENV !== "production") {
    const p = e.reference;
    p && !Ne(p) && t1("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [c, l] = P.useState(e.reference), u = mh((p, h, m) => {
    o.current.openEvent = p ? h : void 0, s.emit("openchange", {
      open: p,
      event: h,
      reason: m,
      nested: i
    }), t == null || t(p, h, m);
  }), d = P.useMemo(() => ({
    setPositionReference: l
  }), []), f = P.useMemo(() => ({
    reference: c || e.reference || null,
    floating: e.floating || null,
    domReference: e.reference
  }), [c, e.reference, e.floating]);
  return P.useMemo(() => ({
    dataRef: o,
    open: n,
    onOpenChange: u,
    elements: f,
    events: s,
    floatingId: a,
    refs: d
  }), [n, u, f, s, a, d]);
}
function l1(r) {
  r === void 0 && (r = {});
  const {
    nodeId: n
  } = r, t = c1({
    ...r,
    elements: {
      reference: null,
      floating: null,
      ...r.elements
    }
  }), e = r.rootContext || t, a = e.elements, [o, s] = P.useState(null), [i, c] = P.useState(null), u = (a == null ? void 0 : a.domReference) || o, d = P.useRef(null), f = i1();
  Vn(() => {
    u && (d.current = u);
  }, [u]);
  const p = Zh({
    ...r,
    elements: {
      ...a,
      ...i && {
        reference: i
      }
    }
  }), h = P.useCallback((D) => {
    const O = Ne(D) ? {
      getBoundingClientRect: () => D.getBoundingClientRect(),
      getClientRects: () => D.getClientRects(),
      contextElement: D
    } : D;
    c(O), p.refs.setReference(O);
  }, [p.refs]), m = P.useCallback((D) => {
    (Ne(D) || D === null) && (d.current = D, s(D)), (Ne(p.refs.reference.current) || p.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    D !== null && !Ne(D)) && p.refs.setReference(D);
  }, [p.refs]), v = P.useMemo(() => ({
    ...p.refs,
    setReference: m,
    setPositionReference: h,
    domReference: d
  }), [p.refs, m, h]), b = P.useMemo(() => ({
    ...p.elements,
    domReference: u
  }), [p.elements, u]), C = P.useMemo(() => ({
    ...p,
    ...e,
    refs: v,
    elements: b,
    nodeId: n
  }), [p, v, b, n, e]);
  return Vn(() => {
    e.dataRef.current.floatingContext = C;
    const D = f == null ? void 0 : f.nodesRef.current.find((O) => O.id === n);
    D && (D.context = C);
  }), P.useMemo(() => ({
    ...p,
    context: C,
    refs: v,
    elements: b
  }), [p, v, b, C]);
}
/*!
  react-datepicker v8.4.0
  https://github.com/Hacker0x01/react-datepicker
  Released under the MIT License.
*/
var Za = function(n, t) {
  return Za = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(e, a) {
    e.__proto__ = a;
  } || function(e, a) {
    for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
  }, Za(n, t);
};
function Ee(r, n) {
  if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
  Za(r, n);
  function t() {
    this.constructor = r;
  }
  r.prototype = n === null ? Object.create(n) : (t.prototype = n.prototype, new t());
}
var ee = function() {
  return ee = Object.assign || function(t) {
    for (var e, a = 1, o = arguments.length; a < o; a++) {
      e = arguments[a];
      for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, ee.apply(this, arguments);
};
function rt(r, n, t) {
  if (t || arguments.length === 2) for (var e = 0, a = n.length, o; e < a; e++)
    (o || !(e in n)) && (o || (o = Array.prototype.slice.call(n, 0, e)), o[e] = n[e]);
  return r.concat(o || Array.prototype.slice.call(n));
}
var u1 = function(r) {
  var n = r.showTimeSelectOnly, t = n === void 0 ? !1 : n, e = r.showTime, a = e === void 0 ? !1 : e, o = r.className, s = r.children, i = t ? "Choose Time" : "Choose Date".concat(a ? " and Time" : "");
  return M.createElement("div", { className: o, role: "dialog", "aria-label": i, "aria-modal": "true" }, s);
}, d1 = function(r, n) {
  var t = Me(null), e = Me(r);
  e.current = r;
  var a = de(function(o) {
    var s, i = o.composed && o.composedPath && o.composedPath().find(function(c) {
      return c instanceof Node;
    }) || o.target;
    t.current && !t.current.contains(i) && (n && i instanceof HTMLElement && i.classList.contains(n) || (s = e.current) === null || s === void 0 || s.call(e, o));
  }, [n]);
  return ge(function() {
    return document.addEventListener("mousedown", a), function() {
      document.removeEventListener("mousedown", a);
    };
  }, [a]), t;
}, ia = function(r) {
  var n = r.children, t = r.onClickOutside, e = r.className, a = r.containerRef, o = r.style, s = r.ignoreClass, i = d1(t, s);
  return M.createElement("div", { className: e, style: o, ref: function(c) {
    i.current = c, a && (a.current = c);
  } }, n);
}, A;
(function(r) {
  r.ArrowUp = "ArrowUp", r.ArrowDown = "ArrowDown", r.ArrowLeft = "ArrowLeft", r.ArrowRight = "ArrowRight", r.PageUp = "PageUp", r.PageDown = "PageDown", r.Home = "Home", r.End = "End", r.Enter = "Enter", r.Space = " ", r.Tab = "Tab", r.Escape = "Escape", r.Backspace = "Backspace", r.X = "x";
})(A || (A = {}));
function mc() {
  var r = typeof window < "u" ? window : globalThis;
  return r;
}
var Hr = 12;
function ie(r) {
  if (r == null)
    return /* @__PURE__ */ new Date();
  var n = typeof r == "string" ? Sp(r) : j(r);
  return ca(n) ? n : /* @__PURE__ */ new Date();
}
function ba(r, n, t, e, a) {
  a === void 0 && (a = ie());
  for (var o = gr(t) || gr(yo()), s = Array.isArray(n) ? n : [n], i = 0, c = s; i < c.length; i++) {
    var l = c[i], u = Dp(r, l, a, {
      locale: o
    });
    if (ca(u) && (!e || r === me(u, l, t)))
      return u;
  }
  return null;
}
function ca(r, n) {
  return Ln(r) && !Qt(r, /* @__PURE__ */ new Date("1/1/1800"));
}
function me(r, n, t) {
  if (t === "en")
    return ls(r, n, {
      useAdditionalWeekYearTokens: !0,
      useAdditionalDayOfYearTokens: !0
    });
  var e = t ? gr(t) : void 0;
  return t && !e && console.warn('A locale object was not found for the provided string ["'.concat(t, '"].')), e = e || gr(yo()), ls(r, n, {
    locale: e,
    useAdditionalWeekYearTokens: !0,
    useAdditionalDayOfYearTokens: !0
  });
}
function Ae(r, n) {
  var t = n.dateFormat, e = n.locale, a = Array.isArray(t) && t.length > 0 ? t[0] : t;
  return r && me(r, a, e) || "";
}
var vc = " - ";
function f1(r, n, t) {
  if (!r)
    return "";
  var e = Ae(r, t), a = n ? Ae(n, t) : "";
  return "".concat(e).concat(vc).concat(a);
}
function p1(r, n) {
  if (!(r != null && r.length))
    return "";
  var t = r[0] ? Ae(r[0], n) : "";
  if (r.length === 1)
    return t;
  if (r.length === 2 && r[1]) {
    var e = Ae(r[1], n);
    return "".concat(t, ", ").concat(e);
  }
  var a = r.length - 1;
  return "".concat(t, " (+").concat(a, ")");
}
function Da(r, n) {
  var t = n.hour, e = t === void 0 ? 0 : t, a = n.minute, o = a === void 0 ? 0 : a, s = n.second, i = s === void 0 ? 0 : s;
  return bn(Dn(xn(r, i), o), e);
}
function h1(r) {
  return io(r);
}
function m1(r, n) {
  return me(r, "ddd", n);
}
function Mn(r) {
  return zt(r);
}
function St(r, n, t) {
  var e = gr(n || yo());
  return vt(r, {
    locale: e,
    weekStartsOn: t
  });
}
function pt(r) {
  return Qi(r);
}
function Or(r) {
  return ra(r);
}
function xs(r) {
  return Wa(r);
}
function ks() {
  return zt(ie());
}
function Ms(r) {
  return Zi(r);
}
function v1(r) {
  return Cd(r);
}
function g1(r) {
  return zi(r);
}
function Xe(r, n) {
  return r && n ? _p(r, n) : !r && !n;
}
function Re(r, n) {
  return r && n ? kp(r, n) : !r && !n;
}
function Zn(r, n) {
  return r && n ? Mp(r, n) : !r && !n;
}
function J(r, n) {
  return r && n ? Md(r, n) : !r && !n;
}
function It(r, n) {
  return r && n ? Cf(r, n) : !r && !n;
}
function Tr(r, n, t) {
  var e, a = zt(n), o = Zi(t);
  try {
    e = Rr(r, { start: a, end: o });
  } catch {
    e = !1;
  }
  return e;
}
function yo() {
  var r = mc();
  return r.__localeId__;
}
function gr(r) {
  if (typeof r == "string") {
    var n = mc();
    return n.__localeData__ ? n.__localeData__[r] : void 0;
  } else
    return r;
}
function y1(r, n, t) {
  return n(me(r, "EEEE", t));
}
function w1(r, n) {
  return me(r, "EEEEEE", n);
}
function b1(r, n) {
  return me(r, "EEE", n);
}
function wo(r, n) {
  return me(We(ie(), r), "LLLL", n);
}
function gc(r, n) {
  return me(We(ie(), r), "LLL", n);
}
function D1(r, n) {
  return me(Jt(ie(), r), "QQQ", n);
}
function He(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.maxDate, o = t.excludeDates, s = t.excludeDateIntervals, i = t.includeDates, c = t.includeDateIntervals, l = t.filterDate;
  return Br(r, { minDate: e, maxDate: a }) || o && o.some(function(u) {
    return u instanceof Date ? J(r, u) : J(r, u.date);
  }) || s && s.some(function(u) {
    var d = u.start, f = u.end;
    return Rr(r, { start: d, end: f });
  }) || i && !i.some(function(u) {
    return J(r, u);
  }) || c && !c.some(function(u) {
    var d = u.start, f = u.end;
    return Rr(r, { start: d, end: f });
  }) || l && !l(ie(r)) || !1;
}
function bo(r, n) {
  var t = n === void 0 ? {} : n, e = t.excludeDates, a = t.excludeDateIntervals;
  return a && a.length > 0 ? a.some(function(o) {
    var s = o.start, i = o.end;
    return Rr(r, { start: s, end: i });
  }) : e && e.some(function(o) {
    var s;
    return o instanceof Date ? J(r, o) : J(r, (s = o.date) !== null && s !== void 0 ? s : /* @__PURE__ */ new Date());
  }) || !1;
}
function yc(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.maxDate, o = t.excludeDates, s = t.includeDates, i = t.filterDate;
  return Br(r, {
    minDate: e ? Qi(e) : void 0,
    maxDate: a ? zi(a) : void 0
  }) || (o == null ? void 0 : o.some(function(c) {
    return Re(r, c instanceof Date ? c : c.date);
  })) || s && !s.some(function(c) {
    return Re(r, c);
  }) || i && !i(ie(r)) || !1;
}
function Xr(r, n, t, e) {
  var a = G(r), o = Te(r), s = G(n), i = Te(n), c = G(e);
  return a === s && a === c ? o <= t && t <= i : a < s ? c === a && o <= t || c === s && i >= t || c < s && c > a : !1;
}
function x1(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.maxDate, o = t.excludeDates, s = t.includeDates;
  return Br(r, { minDate: e, maxDate: a }) || o && o.some(function(i) {
    return Re(i instanceof Date ? i : i.date, r);
  }) || s && !s.some(function(i) {
    return Re(i, r);
  }) || !1;
}
function Jr(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.maxDate, o = t.excludeDates, s = t.includeDates, i = t.filterDate;
  return Br(r, { minDate: e, maxDate: a }) || (o == null ? void 0 : o.some(function(c) {
    return Zn(r, c instanceof Date ? c : c.date);
  })) || s && !s.some(function(c) {
    return Zn(r, c);
  }) || i && !i(ie(r)) || !1;
}
function en(r, n, t) {
  if (!n || !t || !Ln(n) || !Ln(t))
    return !1;
  var e = G(n), a = G(t);
  return e <= r && a >= r;
}
function _n(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.maxDate, o = t.excludeDates, s = t.includeDates, i = t.filterDate, c = new Date(r, 0, 1);
  return Br(c, {
    minDate: e ? ra(e) : void 0,
    maxDate: a ? qi(a) : void 0
  }) || (o == null ? void 0 : o.some(function(l) {
    return Xe(c, l instanceof Date ? l : l.date);
  })) || s && !s.some(function(l) {
    return Xe(c, l);
  }) || i && !i(ie(c)) || !1;
}
function tn(r, n, t, e) {
  var a = G(r), o = Wt(r), s = G(n), i = Wt(n), c = G(e);
  return a === s && a === c ? o <= t && t <= i : a < s ? c === a && o <= t || c === s && i >= t || c < s && c > a : !1;
}
function Br(r, n) {
  var t, e = n === void 0 ? {} : n, a = e.minDate, o = e.maxDate;
  return (t = a && fr(r, a) < 0 || o && fr(r, o) > 0) !== null && t !== void 0 ? t : !1;
}
function _s(r, n) {
  return n.some(function(t) {
    return dt(t) === dt(r) && ft(t) === ft(r) && Ct(t) === Ct(r);
  });
}
function Cs(r, n) {
  var t = n === void 0 ? {} : n, e = t.excludeTimes, a = t.includeTimes, o = t.filterTime;
  return e && _s(r, e) || a && !_s(r, a) || o && !o(r) || !1;
}
function Ss(r, n) {
  var t = n.minTime, e = n.maxTime;
  if (!t || !e)
    throw new Error("Both minTime and maxTime props required");
  var a = ie();
  a = bn(a, dt(r)), a = Dn(a, ft(r)), a = xn(a, Ct(r));
  var o = ie();
  o = bn(o, dt(t)), o = Dn(o, ft(t)), o = xn(o, Ct(t));
  var s = ie();
  s = bn(s, dt(e)), s = Dn(s, ft(e)), s = xn(s, Ct(e));
  var i;
  try {
    i = !Rr(a, { start: o, end: s });
  } catch {
    i = !1;
  }
  return i;
}
function Es(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.includeDates, o = Ht(r, 1);
  return e && $n(e, o) > 0 || a && a.every(function(s) {
    return $n(s, o) > 0;
  }) || !1;
}
function Ps(r, n) {
  var t = n === void 0 ? {} : n, e = t.maxDate, a = t.includeDates, o = Qe(r, 1);
  return e && $n(o, e) > 0 || a && a.every(function(s) {
    return $n(o, s) > 0;
  }) || !1;
}
function k1(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.includeDates, o = ra(r), s = nc(o);
  return e && In(e, s) > 0 || a && a.every(function(i) {
    return In(i, s) > 0;
  }) || !1;
}
function M1(r, n) {
  var t = n === void 0 ? {} : n, e = t.maxDate, a = t.includeDates, o = qi(r), s = so(o, 1);
  return e && In(s, e) > 0 || a && a.every(function(i) {
    return In(s, i) > 0;
  }) || !1;
}
function Os(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.includeDates, o = pr(r, 1);
  return e && Fn(e, o) > 0 || a && a.every(function(s) {
    return Fn(s, o) > 0;
  }) || !1;
}
function _1(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.yearItemNumber, o = a === void 0 ? Hr : a, s = Or(pr(r, o)), i = Mt(s, o).endPeriod, c = e && G(e);
  return c && c > i || !1;
}
function Ts(r, n) {
  var t = n === void 0 ? {} : n, e = t.maxDate, a = t.includeDates, o = lt(r, 1);
  return e && Fn(o, e) > 0 || a && a.every(function(s) {
    return Fn(o, s) > 0;
  }) || !1;
}
function C1(r, n) {
  var t = n === void 0 ? {} : n, e = t.maxDate, a = t.yearItemNumber, o = a === void 0 ? Hr : a, s = lt(r, o), i = Mt(s, o).startPeriod, c = e && G(e);
  return c && c < i || !1;
}
function wc(r) {
  var n = r.minDate, t = r.includeDates;
  if (t && n) {
    var e = t.filter(function(a) {
      return fr(a, n) >= 0;
    });
    return ns(e);
  } else return t ? ns(t) : n;
}
function bc(r) {
  var n = r.maxDate, t = r.includeDates;
  if (t && n) {
    var e = t.filter(function(a) {
      return fr(a, n) <= 0;
    });
    return rs(e);
  } else return t ? rs(t) : n;
}
function Ns(r, n) {
  var t;
  r === void 0 && (r = []), n === void 0 && (n = "react-datepicker__day--highlighted");
  for (var e = /* @__PURE__ */ new Map(), a = 0, o = r.length; a < o; a++) {
    var s = r[a];
    if (ut(s)) {
      var i = me(s, "MM.dd.yyyy"), c = e.get(i) || [];
      c.includes(n) || (c.push(n), e.set(i, c));
    } else if (typeof s == "object") {
      var l = Object.keys(s), u = (t = l[0]) !== null && t !== void 0 ? t : "", d = s[u];
      if (typeof u == "string" && Array.isArray(d))
        for (var f = 0, p = d.length; f < p; f++) {
          var h = d[f];
          if (h) {
            var i = me(h, "MM.dd.yyyy"), c = e.get(i) || [];
            c.includes(u) || (c.push(u), e.set(i, c));
          }
        }
    }
  }
  return e;
}
function S1(r, n) {
  return r.length !== n.length ? !1 : r.every(function(t, e) {
    return t === n[e];
  });
}
function E1(r, n) {
  r === void 0 && (r = []), n === void 0 && (n = "react-datepicker__day--holidays");
  var t = /* @__PURE__ */ new Map();
  return r.forEach(function(e) {
    var a = e.date, o = e.holidayName;
    if (ut(a)) {
      var s = me(a, "MM.dd.yyyy"), i = t.get(s) || {
        className: "",
        holidayNames: []
      };
      if (!("className" in i && i.className === n && S1(i.holidayNames, [o]))) {
        i.className = n;
        var c = i.holidayNames;
        i.holidayNames = c ? rt(rt([], c, !0), [o], !1) : [o], t.set(s, i);
      }
    }
  }), t;
}
function P1(r, n, t, e, a) {
  for (var o = a.length, s = [], i = 0; i < o; i++) {
    var c = r, l = a[i];
    l && (c = bd(c, dt(l)), c = Aa(c, ft(l)), c = kd(c, Ct(l)));
    var u = Aa(r, (t + 1) * e);
    Ot(c, n) && Qt(c, u) && l != null && s.push(l);
  }
  return s;
}
function Ys(r) {
  return r < 10 ? "0".concat(r) : "".concat(r);
}
function Mt(r, n) {
  n === void 0 && (n = Hr);
  var t = Math.ceil(G(r) / n) * n, e = t - (n - 1);
  return { startPeriod: e, endPeriod: t };
}
function O1(r) {
  var n = new Date(r.getFullYear(), r.getMonth(), r.getDate()), t = new Date(r.getFullYear(), r.getMonth(), r.getDate(), 24);
  return Math.round((+t - +n) / 36e5);
}
function Rs(r) {
  var n = r.getSeconds(), t = r.getMilliseconds();
  return j(r.getTime() - n * 1e3 - t);
}
function T1(r, n) {
  return Rs(r).getTime() === Rs(n).getTime();
}
function Ls(r) {
  if (!ut(r))
    throw new Error("Invalid date");
  var n = new Date(r);
  return n.setHours(0, 0, 0, 0), n;
}
function $s(r, n) {
  if (!ut(r) || !ut(n))
    throw new Error("Invalid date received");
  var t = Ls(r), e = Ls(n);
  return Qt(t, e);
}
function Dc(r) {
  return r.key === A.Space;
}
var N1 = (
  /** @class */
  function(r) {
    Ee(n, r);
    function n(t) {
      var e = r.call(this, t) || this;
      return e.inputRef = M.createRef(), e.onTimeChange = function(a) {
        var o, s;
        e.setState({ time: a });
        var i = e.props.date, c = i instanceof Date && !isNaN(+i), l = c ? i : /* @__PURE__ */ new Date();
        if (a != null && a.includes(":")) {
          var u = a.split(":"), d = u[0], f = u[1];
          l.setHours(Number(d)), l.setMinutes(Number(f));
        }
        (s = (o = e.props).onChange) === null || s === void 0 || s.call(o, l);
      }, e.renderTimeInput = function() {
        var a = e.state.time, o = e.props, s = o.date, i = o.timeString, c = o.customTimeInput;
        return c ? ai(c, {
          date: s,
          value: a,
          onChange: e.onTimeChange
        }) : M.createElement("input", { type: "time", className: "react-datepicker-time__input", placeholder: "Time", name: "time-input", ref: e.inputRef, onClick: function() {
          var l;
          (l = e.inputRef.current) === null || l === void 0 || l.focus();
        }, required: !0, value: a, onChange: function(l) {
          e.onTimeChange(l.target.value || i);
        } });
      }, e.state = {
        time: e.props.timeString
      }, e;
    }
    return n.getDerivedStateFromProps = function(t, e) {
      return t.timeString !== e.time ? {
        time: t.timeString
      } : null;
    }, n.prototype.render = function() {
      return M.createElement(
        "div",
        { className: "react-datepicker__input-time-container" },
        M.createElement("div", { className: "react-datepicker-time__caption" }, this.props.timeInputLabel),
        M.createElement(
          "div",
          { className: "react-datepicker-time__input-container" },
          M.createElement("div", { className: "react-datepicker-time__input" }, this.renderTimeInput())
        )
      );
    }, n;
  }(Se)
), Y1 = (
  /** @class */
  function(r) {
    Ee(n, r);
    function n() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.dayEl = Et(), t.handleClick = function(e) {
        !t.isDisabled() && t.props.onClick && t.props.onClick(e);
      }, t.handleMouseEnter = function(e) {
        !t.isDisabled() && t.props.onMouseEnter && t.props.onMouseEnter(e);
      }, t.handleOnKeyDown = function(e) {
        var a, o, s = e.key;
        s === A.Space && (e.preventDefault(), e.key = A.Enter), (o = (a = t.props).handleOnKeyDown) === null || o === void 0 || o.call(a, e);
      }, t.isSameDay = function(e) {
        return J(t.props.day, e);
      }, t.isKeyboardSelected = function() {
        var e;
        if (t.props.disabledKeyboardNavigation)
          return !1;
        var a = t.props.selectsMultiple ? (e = t.props.selectedDates) === null || e === void 0 ? void 0 : e.some(function(s) {
          return t.isSameDayOrWeek(s);
        }) : t.isSameDayOrWeek(t.props.selected), o = t.props.preSelection && t.isDisabled(t.props.preSelection);
        return !a && t.isSameDayOrWeek(t.props.preSelection) && !o;
      }, t.isDisabled = function(e) {
        return e === void 0 && (e = t.props.day), He(e, {
          minDate: t.props.minDate,
          maxDate: t.props.maxDate,
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals,
          includeDateIntervals: t.props.includeDateIntervals,
          includeDates: t.props.includeDates,
          filterDate: t.props.filterDate
        });
      }, t.isExcluded = function() {
        return bo(t.props.day, {
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals
        });
      }, t.isStartOfWeek = function() {
        return J(t.props.day, St(t.props.day, t.props.locale, t.props.calendarStartDay));
      }, t.isSameWeek = function(e) {
        return t.props.showWeekPicker && J(e, St(t.props.day, t.props.locale, t.props.calendarStartDay));
      }, t.isSameDayOrWeek = function(e) {
        return t.isSameDay(e) || t.isSameWeek(e);
      }, t.getHighLightedClass = function() {
        var e = t.props, a = e.day, o = e.highlightDates;
        if (!o)
          return !1;
        var s = me(a, "MM.dd.yyyy");
        return o.get(s);
      }, t.getHolidaysClass = function() {
        var e, a = t.props, o = a.day, s = a.holidays;
        if (!s)
          return [void 0];
        var i = me(o, "MM.dd.yyyy");
        return s.has(i) ? [(e = s.get(i)) === null || e === void 0 ? void 0 : e.className] : [void 0];
      }, t.isInRange = function() {
        var e = t.props, a = e.day, o = e.startDate, s = e.endDate;
        return !o || !s ? !1 : Tr(a, o, s);
      }, t.isInSelectingRange = function() {
        var e, a = t.props, o = a.day, s = a.selectsStart, i = a.selectsEnd, c = a.selectsRange, l = a.selectsDisabledDaysInRange, u = a.startDate, d = a.endDate, f = (e = t.props.selectingDate) !== null && e !== void 0 ? e : t.props.preSelection;
        return !(s || i || c) || !f || !l && t.isDisabled() ? !1 : s && d && (Qt(f, d) || It(f, d)) ? Tr(o, f, d) : i && u && (Ot(f, u) || It(f, u)) || c && u && !d && (Ot(f, u) || It(f, u)) ? Tr(o, u, f) : !1;
      }, t.isSelectingRangeStart = function() {
        var e;
        if (!t.isInSelectingRange())
          return !1;
        var a = t.props, o = a.day, s = a.startDate, i = a.selectsStart, c = (e = t.props.selectingDate) !== null && e !== void 0 ? e : t.props.preSelection;
        return i ? J(o, c) : J(o, s);
      }, t.isSelectingRangeEnd = function() {
        var e;
        if (!t.isInSelectingRange())
          return !1;
        var a = t.props, o = a.day, s = a.endDate, i = a.selectsEnd, c = a.selectsRange, l = (e = t.props.selectingDate) !== null && e !== void 0 ? e : t.props.preSelection;
        return i || c ? J(o, l) : J(o, s);
      }, t.isRangeStart = function() {
        var e = t.props, a = e.day, o = e.startDate, s = e.endDate;
        return !o || !s ? !1 : J(o, a);
      }, t.isRangeEnd = function() {
        var e = t.props, a = e.day, o = e.startDate, s = e.endDate;
        return !o || !s ? !1 : J(s, a);
      }, t.isWeekend = function() {
        var e = xf(t.props.day);
        return e === 0 || e === 6;
      }, t.isAfterMonth = function() {
        return t.props.month !== void 0 && (t.props.month + 1) % 12 === Te(t.props.day);
      }, t.isBeforeMonth = function() {
        return t.props.month !== void 0 && (Te(t.props.day) + 1) % 12 === t.props.month;
      }, t.isCurrentDay = function() {
        return t.isSameDay(ie());
      }, t.isSelected = function() {
        var e;
        return t.props.selectsMultiple ? (e = t.props.selectedDates) === null || e === void 0 ? void 0 : e.some(function(a) {
          return t.isSameDayOrWeek(a);
        }) : t.isSameDayOrWeek(t.props.selected);
      }, t.getClassNames = function(e) {
        var a = t.props.dayClassName ? t.props.dayClassName(e) : void 0;
        return Pe("react-datepicker__day", a, "react-datepicker__day--" + m1(t.props.day), {
          "react-datepicker__day--disabled": t.isDisabled(),
          "react-datepicker__day--excluded": t.isExcluded(),
          "react-datepicker__day--selected": t.isSelected(),
          "react-datepicker__day--keyboard-selected": t.isKeyboardSelected(),
          "react-datepicker__day--range-start": t.isRangeStart(),
          "react-datepicker__day--range-end": t.isRangeEnd(),
          "react-datepicker__day--in-range": t.isInRange(),
          "react-datepicker__day--in-selecting-range": t.isInSelectingRange(),
          "react-datepicker__day--selecting-range-start": t.isSelectingRangeStart(),
          "react-datepicker__day--selecting-range-end": t.isSelectingRangeEnd(),
          "react-datepicker__day--today": t.isCurrentDay(),
          "react-datepicker__day--weekend": t.isWeekend(),
          "react-datepicker__day--outside-month": t.isAfterMonth() || t.isBeforeMonth()
        }, t.getHighLightedClass(), t.getHolidaysClass());
      }, t.getAriaLabel = function() {
        var e = t.props, a = e.day, o = e.ariaLabelPrefixWhenEnabled, s = o === void 0 ? "Choose" : o, i = e.ariaLabelPrefixWhenDisabled, c = i === void 0 ? "Not available" : i, l = t.isDisabled() || t.isExcluded() ? c : s;
        return "".concat(l, " ").concat(me(a, "PPPP", t.props.locale));
      }, t.getTitle = function() {
        var e = t.props, a = e.day, o = e.holidays, s = o === void 0 ? /* @__PURE__ */ new Map() : o, i = e.excludeDates, c = me(a, "MM.dd.yyyy"), l = [];
        return s.has(c) && l.push.apply(l, s.get(c).holidayNames), t.isExcluded() && l.push(i == null ? void 0 : i.filter(function(u) {
          return u instanceof Date ? J(u, a) : J(u == null ? void 0 : u.date, a);
        }).map(function(u) {
          if (!(u instanceof Date))
            return u == null ? void 0 : u.message;
        })), l.join(", ");
      }, t.getTabIndex = function() {
        var e = t.props.selected, a = t.props.preSelection, o = !(t.props.showWeekPicker && (t.props.showWeekNumber || !t.isStartOfWeek())) && (t.isKeyboardSelected() || t.isSameDay(e) && J(a, e)) ? 0 : -1;
        return o;
      }, t.handleFocusDay = function() {
        var e;
        t.shouldFocusDay() && ((e = t.dayEl.current) === null || e === void 0 || e.focus({ preventScroll: !0 }));
      }, t.renderDayContents = function() {
        return t.props.monthShowsDuplicateDaysEnd && t.isAfterMonth() || t.props.monthShowsDuplicateDaysStart && t.isBeforeMonth() ? null : t.props.renderDayContents ? t.props.renderDayContents(us(t.props.day), t.props.day) : us(t.props.day);
      }, t.render = function() {
        return (
          // TODO: Use <option> instead of the "option" role to ensure accessibility across all devices.
          M.createElement(
            "div",
            { ref: t.dayEl, className: t.getClassNames(t.props.day), onKeyDown: t.handleOnKeyDown, onClick: t.handleClick, onMouseEnter: t.props.usePointerEvent ? void 0 : t.handleMouseEnter, onPointerEnter: t.props.usePointerEvent ? t.handleMouseEnter : void 0, tabIndex: t.getTabIndex(), "aria-label": t.getAriaLabel(), role: "option", title: t.getTitle(), "aria-disabled": t.isDisabled(), "aria-current": t.isCurrentDay() ? "date" : void 0, "aria-selected": t.isSelected() || t.isInRange() },
            t.renderDayContents(),
            t.getTitle() !== "" && M.createElement("span", { className: "overlay" }, t.getTitle())
          )
        );
      }, t;
    }
    return n.prototype.componentDidMount = function() {
      this.handleFocusDay();
    }, n.prototype.componentDidUpdate = function() {
      this.handleFocusDay();
    }, n.prototype.shouldFocusDay = function() {
      var t = !1;
      return this.getTabIndex() === 0 && this.isSameDay(this.props.preSelection) && ((!document.activeElement || document.activeElement === document.body) && (t = !0), this.props.inline && !this.props.shouldFocusDayInline && (t = !1), this.isDayActiveElement() && (t = !0), this.isDuplicateDay() && (t = !1)), t;
    }, n.prototype.isDayActiveElement = function() {
      var t, e, a;
      return ((e = (t = this.props.containerRef) === null || t === void 0 ? void 0 : t.current) === null || e === void 0 ? void 0 : e.contains(document.activeElement)) && ((a = document.activeElement) === null || a === void 0 ? void 0 : a.classList.contains("react-datepicker__day"));
    }, n.prototype.isDuplicateDay = function() {
      return (
        //day is one of the non rendered duplicate days
        this.props.monthShowsDuplicateDaysEnd && this.isAfterMonth() || this.props.monthShowsDuplicateDaysStart && this.isBeforeMonth()
      );
    }, n;
  }(Se)
), R1 = (
  /** @class */
  function(r) {
    Ee(n, r);
    function n() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.weekNumberEl = Et(), t.handleClick = function(e) {
        t.props.onClick && t.props.onClick(e);
      }, t.handleOnKeyDown = function(e) {
        var a, o, s = e.key;
        s === A.Space && (e.preventDefault(), e.key = A.Enter), (o = (a = t.props).handleOnKeyDown) === null || o === void 0 || o.call(a, e);
      }, t.isKeyboardSelected = function() {
        return !t.props.disabledKeyboardNavigation && !J(t.props.date, t.props.selected) && J(t.props.date, t.props.preSelection);
      }, t.getTabIndex = function() {
        return t.props.showWeekPicker && t.props.showWeekNumber && (t.isKeyboardSelected() || J(t.props.date, t.props.selected) && J(t.props.preSelection, t.props.selected)) ? 0 : -1;
      }, t.handleFocusWeekNumber = function(e) {
        var a = !1;
        t.getTabIndex() === 0 && !(e != null && e.isInputFocused) && J(t.props.date, t.props.preSelection) && ((!document.activeElement || document.activeElement === document.body) && (a = !0), t.props.inline && !t.props.shouldFocusDayInline && (a = !1), t.props.containerRef && t.props.containerRef.current && t.props.containerRef.current.contains(document.activeElement) && document.activeElement && document.activeElement.classList.contains("react-datepicker__week-number") && (a = !0)), a && t.weekNumberEl.current && t.weekNumberEl.current.focus({ preventScroll: !0 });
      }, t;
    }
    return Object.defineProperty(n, "defaultProps", {
      get: function() {
        return {
          ariaLabelPrefix: "week "
        };
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.componentDidMount = function() {
      this.handleFocusWeekNumber();
    }, n.prototype.componentDidUpdate = function(t) {
      this.handleFocusWeekNumber(t);
    }, n.prototype.render = function() {
      var t = this.props, e = t.weekNumber, a = t.isWeekDisabled, o = t.ariaLabelPrefix, s = o === void 0 ? n.defaultProps.ariaLabelPrefix : o, i = t.onClick, c = {
        "react-datepicker__week-number": !0,
        "react-datepicker__week-number--clickable": !!i && !a,
        "react-datepicker__week-number--selected": !!i && J(this.props.date, this.props.selected)
      };
      return M.createElement("div", { ref: this.weekNumberEl, className: Pe(c), "aria-label": "".concat(s, " ").concat(this.props.weekNumber), onClick: this.handleClick, onKeyDown: this.handleOnKeyDown, tabIndex: this.getTabIndex() }, e);
    }, n;
  }(Se)
), L1 = (
  /** @class */
  function(r) {
    Ee(n, r);
    function n() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.isDisabled = function(e) {
        return He(e, {
          minDate: t.props.minDate,
          maxDate: t.props.maxDate,
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals,
          includeDateIntervals: t.props.includeDateIntervals,
          includeDates: t.props.includeDates,
          filterDate: t.props.filterDate
        });
      }, t.handleDayClick = function(e, a) {
        t.props.onDayClick && t.props.onDayClick(e, a);
      }, t.handleDayMouseEnter = function(e) {
        t.props.onDayMouseEnter && t.props.onDayMouseEnter(e);
      }, t.handleWeekClick = function(e, a, o) {
        for (var s, i, c, l = new Date(e), u = 0; u < 7; u++) {
          var d = new Date(e);
          d.setDate(d.getDate() + u);
          var f = !t.isDisabled(d);
          if (f) {
            l = d;
            break;
          }
        }
        typeof t.props.onWeekSelect == "function" && t.props.onWeekSelect(l, a, o), t.props.showWeekPicker && t.handleDayClick(l, o), ((s = t.props.shouldCloseOnSelect) !== null && s !== void 0 ? s : n.defaultProps.shouldCloseOnSelect) && ((c = (i = t.props).setOpen) === null || c === void 0 || c.call(i, !1));
      }, t.formatWeekNumber = function(e) {
        return t.props.formatWeekNumber ? t.props.formatWeekNumber(e) : h1(e);
      }, t.isWeekDisabled = function() {
        for (var e = t.startOfWeek(), a = Ze(e, 6), o = new Date(e); o <= a; ) {
          if (!t.isDisabled(o))
            return !1;
          o = Ze(o, 1);
        }
        return !0;
      }, t.renderDays = function() {
        var e = t.startOfWeek(), a = [], o = t.formatWeekNumber(e);
        if (t.props.showWeekNumber) {
          var s = t.props.onWeekSelect || t.props.showWeekPicker ? t.handleWeekClick.bind(t, e, o) : void 0;
          a.push(M.createElement(R1, ee({ key: "W" }, n.defaultProps, t.props, { weekNumber: o, isWeekDisabled: t.isWeekDisabled(), date: e, onClick: s })));
        }
        return a.concat([0, 1, 2, 3, 4, 5, 6].map(function(i) {
          var c = Ze(e, i);
          return M.createElement(Y1, ee({}, n.defaultProps, t.props, { ariaLabelPrefixWhenEnabled: t.props.chooseDayAriaLabelPrefix, ariaLabelPrefixWhenDisabled: t.props.disabledDayAriaLabelPrefix, key: c.valueOf(), day: c, onClick: t.handleDayClick.bind(t, c), onMouseEnter: t.handleDayMouseEnter.bind(t, c) }));
        }));
      }, t.startOfWeek = function() {
        return St(t.props.day, t.props.locale, t.props.calendarStartDay);
      }, t.isKeyboardSelected = function() {
        return !t.props.disabledKeyboardNavigation && !J(t.startOfWeek(), t.props.selected) && J(t.startOfWeek(), t.props.preSelection);
      }, t;
    }
    return Object.defineProperty(n, "defaultProps", {
      get: function() {
        return {
          shouldCloseOnSelect: !0
        };
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.render = function() {
      var t = {
        "react-datepicker__week": !0,
        "react-datepicker__week--selected": J(this.startOfWeek(), this.props.selected),
        "react-datepicker__week--keyboard-selected": this.isKeyboardSelected()
      };
      return M.createElement("div", { className: Pe(t) }, this.renderDays());
    }, n;
  }(Se)
), Sr, $1 = 6, nr = {
  TWO_COLUMNS: "two_columns",
  THREE_COLUMNS: "three_columns",
  FOUR_COLUMNS: "four_columns"
}, xa = (Sr = {}, Sr[nr.TWO_COLUMNS] = {
  grid: [
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [10, 11]
  ],
  verticalNavigationOffset: 2
}, Sr[nr.THREE_COLUMNS] = {
  grid: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9, 10, 11]
  ],
  verticalNavigationOffset: 3
}, Sr[nr.FOUR_COLUMNS] = {
  grid: [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11]
  ],
  verticalNavigationOffset: 4
}, Sr), rn = 1;
function Is(r, n) {
  return r ? nr.FOUR_COLUMNS : n ? nr.TWO_COLUMNS : nr.THREE_COLUMNS;
}
var I1 = (
  /** @class */
  function(r) {
    Ee(n, r);
    function n() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.MONTH_REFS = rt([], Array(12), !0).map(function() {
        return Et();
      }), t.QUARTER_REFS = rt([], Array(4), !0).map(function() {
        return Et();
      }), t.isDisabled = function(e) {
        return He(e, {
          minDate: t.props.minDate,
          maxDate: t.props.maxDate,
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals,
          includeDateIntervals: t.props.includeDateIntervals,
          includeDates: t.props.includeDates,
          filterDate: t.props.filterDate
        });
      }, t.isExcluded = function(e) {
        return bo(e, {
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals
        });
      }, t.handleDayClick = function(e, a) {
        var o, s;
        (s = (o = t.props).onDayClick) === null || s === void 0 || s.call(o, e, a, t.props.orderInDisplay);
      }, t.handleDayMouseEnter = function(e) {
        var a, o;
        (o = (a = t.props).onDayMouseEnter) === null || o === void 0 || o.call(a, e);
      }, t.handleMouseLeave = function() {
        var e, a;
        (a = (e = t.props).onMouseLeave) === null || a === void 0 || a.call(e);
      }, t.isRangeStartMonth = function(e) {
        var a = t.props, o = a.day, s = a.startDate, i = a.endDate;
        return !s || !i ? !1 : Re(We(o, e), s);
      }, t.isRangeStartQuarter = function(e) {
        var a = t.props, o = a.day, s = a.startDate, i = a.endDate;
        return !s || !i ? !1 : Zn(Jt(o, e), s);
      }, t.isRangeEndMonth = function(e) {
        var a = t.props, o = a.day, s = a.startDate, i = a.endDate;
        return !s || !i ? !1 : Re(We(o, e), i);
      }, t.isRangeEndQuarter = function(e) {
        var a = t.props, o = a.day, s = a.startDate, i = a.endDate;
        return !s || !i ? !1 : Zn(Jt(o, e), i);
      }, t.isInSelectingRangeMonth = function(e) {
        var a, o = t.props, s = o.day, i = o.selectsStart, c = o.selectsEnd, l = o.selectsRange, u = o.startDate, d = o.endDate, f = (a = t.props.selectingDate) !== null && a !== void 0 ? a : t.props.preSelection;
        return !(i || c || l) || !f ? !1 : i && d ? Xr(f, d, e, s) : c && u || l && u && !d ? Xr(u, f, e, s) : !1;
      }, t.isSelectingMonthRangeStart = function(e) {
        var a;
        if (!t.isInSelectingRangeMonth(e))
          return !1;
        var o = t.props, s = o.day, i = o.startDate, c = o.selectsStart, l = We(s, e), u = (a = t.props.selectingDate) !== null && a !== void 0 ? a : t.props.preSelection;
        return c ? Re(l, u) : Re(l, i);
      }, t.isSelectingMonthRangeEnd = function(e) {
        var a;
        if (!t.isInSelectingRangeMonth(e))
          return !1;
        var o = t.props, s = o.day, i = o.endDate, c = o.selectsEnd, l = o.selectsRange, u = We(s, e), d = (a = t.props.selectingDate) !== null && a !== void 0 ? a : t.props.preSelection;
        return c || l ? Re(u, d) : Re(u, i);
      }, t.isInSelectingRangeQuarter = function(e) {
        var a, o = t.props, s = o.day, i = o.selectsStart, c = o.selectsEnd, l = o.selectsRange, u = o.startDate, d = o.endDate, f = (a = t.props.selectingDate) !== null && a !== void 0 ? a : t.props.preSelection;
        return !(i || c || l) || !f ? !1 : i && d ? tn(f, d, e, s) : c && u || l && u && !d ? tn(u, f, e, s) : !1;
      }, t.isWeekInMonth = function(e) {
        var a = t.props.day, o = Ze(e, 6);
        return Re(e, a) || Re(o, a);
      }, t.isCurrentMonth = function(e, a) {
        return G(e) === G(ie()) && a === Te(ie());
      }, t.isCurrentQuarter = function(e, a) {
        return G(e) === G(ie()) && a === Wt(ie());
      }, t.isSelectedMonth = function(e, a, o) {
        return Te(o) === a && G(e) === G(o);
      }, t.isSelectMonthInList = function(e, a, o) {
        return o.some(function(s) {
          return t.isSelectedMonth(e, a, s);
        });
      }, t.isSelectedQuarter = function(e, a, o) {
        return Wt(e) === a && G(e) === G(o);
      }, t.isMonthSelected = function() {
        var e = t.props, a = e.day, o = e.selected, s = e.selectedDates, i = e.selectsMultiple, c = Te(a);
        return i ? s == null ? void 0 : s.some(function(l) {
          return t.isSelectedMonth(a, c, l);
        }) : !!o && t.isSelectedMonth(a, c, o);
      }, t.renderWeeks = function() {
        for (var e = [], a = t.props.fixedHeight, o = 0, s = !1, i = St(pt(t.props.day), t.props.locale, t.props.calendarStartDay), c = function(h) {
          return t.props.showWeekPicker ? St(h, t.props.locale, t.props.calendarStartDay) : t.props.preSelection;
        }, l = function(h) {
          return t.props.showWeekPicker ? St(h, t.props.locale, t.props.calendarStartDay) : t.props.selected;
        }, u = t.props.selected ? l(t.props.selected) : void 0, d = t.props.preSelection ? c(t.props.preSelection) : void 0; e.push(M.createElement(L1, ee({}, t.props, { ariaLabelPrefix: t.props.weekAriaLabelPrefix, key: o, day: i, month: Te(t.props.day), onDayClick: t.handleDayClick, onDayMouseEnter: t.handleDayMouseEnter, selected: u, preSelection: d, showWeekNumber: t.props.showWeekNumbers }))), !s; ) {
          o++, i = Rn(i, 1);
          var f = a && o >= $1, p = !a && !t.isWeekInMonth(i);
          if (f || p)
            if (t.props.peekNextMonth)
              s = !0;
            else
              break;
        }
        return e;
      }, t.onMonthClick = function(e, a) {
        var o = t.isMonthDisabledForLabelDate(a), s = o.isDisabled, i = o.labelDate;
        s || t.handleDayClick(pt(i), e);
      }, t.onMonthMouseEnter = function(e) {
        var a = t.isMonthDisabledForLabelDate(e), o = a.isDisabled, s = a.labelDate;
        o || t.handleDayMouseEnter(pt(s));
      }, t.handleMonthNavigation = function(e, a) {
        var o, s, i, c;
        (s = (o = t.props).setPreSelection) === null || s === void 0 || s.call(o, a), (c = (i = t.MONTH_REFS[e]) === null || i === void 0 ? void 0 : i.current) === null || c === void 0 || c.focus();
      }, t.handleKeyboardNavigation = function(e, a, o) {
        var s, i = t.props, c = i.selected, l = i.preSelection, u = i.setPreSelection, d = i.minDate, f = i.maxDate, p = i.showFourColumnMonthYearPicker, h = i.showTwoColumnMonthYearPicker;
        if (l) {
          var m = Is(p, h), v = t.getVerticalOffset(m), b = (s = xa[m]) === null || s === void 0 ? void 0 : s.grid, C = function(g, y, T) {
            var R, L, I = y, V = T;
            switch (g) {
              case A.ArrowRight:
                I = Qe(y, rn), V = T === 11 ? 0 : T + rn;
                break;
              case A.ArrowLeft:
                I = Ht(y, rn), V = T === 0 ? 11 : T - rn;
                break;
              case A.ArrowUp:
                I = Ht(y, v), V = !((R = b == null ? void 0 : b[0]) === null || R === void 0) && R.includes(T) ? T + 12 - v : T - v;
                break;
              case A.ArrowDown:
                I = Qe(y, v), V = !((L = b == null ? void 0 : b[b.length - 1]) === null || L === void 0) && L.includes(T) ? T - 12 + v : T + v;
                break;
            }
            return { newCalculatedDate: I, newCalculatedMonth: V };
          }, D = function(g, y, T) {
            for (var R = 40, L = g, I = !1, V = 0, Y = C(L, y, T), S = Y.newCalculatedDate, k = Y.newCalculatedMonth; !I; ) {
              if (V >= R) {
                S = y, k = T;
                break;
              }
              if (d && S < d) {
                L = A.ArrowRight;
                var E = C(L, S, k);
                S = E.newCalculatedDate, k = E.newCalculatedMonth;
              }
              if (f && S > f) {
                L = A.ArrowLeft;
                var E = C(L, S, k);
                S = E.newCalculatedDate, k = E.newCalculatedMonth;
              }
              if (x1(S, t.props)) {
                var E = C(L, S, k);
                S = E.newCalculatedDate, k = E.newCalculatedMonth;
              } else
                I = !0;
              V++;
            }
            return { newCalculatedDate: S, newCalculatedMonth: k };
          };
          if (a === A.Enter) {
            t.isMonthDisabled(o) || (t.onMonthClick(e, o), u == null || u(c));
            return;
          }
          var O = D(a, l, o), x = O.newCalculatedDate, w = O.newCalculatedMonth;
          switch (a) {
            case A.ArrowRight:
            case A.ArrowLeft:
            case A.ArrowUp:
            case A.ArrowDown:
              t.handleMonthNavigation(w, x);
              break;
          }
        }
      }, t.getVerticalOffset = function(e) {
        var a, o;
        return (o = (a = xa[e]) === null || a === void 0 ? void 0 : a.verticalNavigationOffset) !== null && o !== void 0 ? o : 0;
      }, t.onMonthKeyDown = function(e, a) {
        var o = t.props, s = o.disabledKeyboardNavigation, i = o.handleOnMonthKeyDown, c = e.key;
        c !== A.Tab && e.preventDefault(), s || t.handleKeyboardNavigation(e, c, a), i && i(e);
      }, t.onQuarterClick = function(e, a) {
        var o = Jt(t.props.day, a);
        Jr(o, t.props) || t.handleDayClick(xs(o), e);
      }, t.onQuarterMouseEnter = function(e) {
        var a = Jt(t.props.day, e);
        Jr(a, t.props) || t.handleDayMouseEnter(xs(a));
      }, t.handleQuarterNavigation = function(e, a) {
        var o, s, i, c;
        t.isDisabled(a) || t.isExcluded(a) || ((s = (o = t.props).setPreSelection) === null || s === void 0 || s.call(o, a), (c = (i = t.QUARTER_REFS[e - 1]) === null || i === void 0 ? void 0 : i.current) === null || c === void 0 || c.focus());
      }, t.onQuarterKeyDown = function(e, a) {
        var o, s, i = e.key;
        if (!t.props.disabledKeyboardNavigation)
          switch (i) {
            case A.Enter:
              t.onQuarterClick(e, a), (s = (o = t.props).setPreSelection) === null || s === void 0 || s.call(o, t.props.selected);
              break;
            case A.ArrowRight:
              if (!t.props.preSelection)
                break;
              t.handleQuarterNavigation(a === 4 ? 1 : a + 1, so(t.props.preSelection, 1));
              break;
            case A.ArrowLeft:
              if (!t.props.preSelection)
                break;
              t.handleQuarterNavigation(a === 1 ? 4 : a - 1, nc(t.props.preSelection));
              break;
          }
      }, t.isMonthDisabledForLabelDate = function(e) {
        var a, o = t.props, s = o.day, i = o.minDate, c = o.maxDate, l = o.excludeDates, u = o.includeDates, d = We(s, e);
        return {
          isDisabled: (a = (i || c || l || u) && yc(d, t.props)) !== null && a !== void 0 ? a : !1,
          labelDate: d
        };
      }, t.isMonthDisabled = function(e) {
        var a = t.isMonthDisabledForLabelDate(e).isDisabled;
        return a;
      }, t.getMonthClassNames = function(e) {
        var a = t.props, o = a.day, s = a.startDate, i = a.endDate, c = a.preSelection, l = a.monthClassName, u = l ? l(We(o, e)) : void 0, d = t.getSelection();
        return Pe("react-datepicker__month-text", "react-datepicker__month-".concat(e), u, {
          "react-datepicker__month-text--disabled": t.isMonthDisabled(e),
          "react-datepicker__month-text--selected": d ? t.isSelectMonthInList(o, e, d) : void 0,
          "react-datepicker__month-text--keyboard-selected": !t.props.disabledKeyboardNavigation && c && t.isSelectedMonth(o, e, c) && !t.isMonthSelected() && !t.isMonthDisabled(e),
          "react-datepicker__month-text--in-selecting-range": t.isInSelectingRangeMonth(e),
          "react-datepicker__month-text--in-range": s && i ? Xr(s, i, e, o) : void 0,
          "react-datepicker__month-text--range-start": t.isRangeStartMonth(e),
          "react-datepicker__month-text--range-end": t.isRangeEndMonth(e),
          "react-datepicker__month-text--selecting-range-start": t.isSelectingMonthRangeStart(e),
          "react-datepicker__month-text--selecting-range-end": t.isSelectingMonthRangeEnd(e),
          "react-datepicker__month-text--today": t.isCurrentMonth(o, e)
        });
      }, t.getTabIndex = function(e) {
        if (t.props.preSelection == null)
          return "-1";
        var a = Te(t.props.preSelection), o = t.isMonthDisabledForLabelDate(a).isDisabled, s = e === a && !(o || t.props.disabledKeyboardNavigation) ? "0" : "-1";
        return s;
      }, t.getQuarterTabIndex = function(e) {
        if (t.props.preSelection == null)
          return "-1";
        var a = Wt(t.props.preSelection), o = Jr(t.props.day, t.props), s = e === a && !(o || t.props.disabledKeyboardNavigation) ? "0" : "-1";
        return s;
      }, t.getAriaLabel = function(e) {
        var a = t.props, o = a.chooseDayAriaLabelPrefix, s = o === void 0 ? "Choose" : o, i = a.disabledDayAriaLabelPrefix, c = i === void 0 ? "Not available" : i, l = a.day, u = a.locale, d = We(l, e), f = t.isDisabled(d) || t.isExcluded(d) ? c : s;
        return "".concat(f, " ").concat(me(d, "MMMM yyyy", u));
      }, t.getQuarterClassNames = function(e) {
        var a = t.props, o = a.day, s = a.startDate, i = a.endDate, c = a.selected, l = a.minDate, u = a.maxDate, d = a.excludeDates, f = a.includeDates, p = a.filterDate, h = a.preSelection, m = a.disabledKeyboardNavigation, v = (l || u || d || f || p) && Jr(Jt(o, e), t.props);
        return Pe("react-datepicker__quarter-text", "react-datepicker__quarter-".concat(e), {
          "react-datepicker__quarter-text--disabled": v,
          "react-datepicker__quarter-text--selected": c ? t.isSelectedQuarter(o, e, c) : void 0,
          "react-datepicker__quarter-text--keyboard-selected": !m && h && t.isSelectedQuarter(o, e, h) && !v,
          "react-datepicker__quarter-text--in-selecting-range": t.isInSelectingRangeQuarter(e),
          "react-datepicker__quarter-text--in-range": s && i ? tn(s, i, e, o) : void 0,
          "react-datepicker__quarter-text--range-start": t.isRangeStartQuarter(e),
          "react-datepicker__quarter-text--range-end": t.isRangeEndQuarter(e),
          "react-datepicker__quarter-text--today": t.isCurrentQuarter(o, e)
        });
      }, t.getMonthContent = function(e) {
        var a = t.props, o = a.showFullMonthYearPicker, s = a.renderMonthContent, i = a.locale, c = a.day, l = gc(e, i), u = wo(e, i);
        return s ? s(e, l, u, c) : o ? u : l;
      }, t.getQuarterContent = function(e) {
        var a, o = t.props, s = o.renderQuarterContent, i = o.locale, c = D1(e, i);
        return (a = s == null ? void 0 : s(e, c)) !== null && a !== void 0 ? a : c;
      }, t.renderMonths = function() {
        var e, a = t.props, o = a.showTwoColumnMonthYearPicker, s = a.showFourColumnMonthYearPicker, i = a.day, c = a.selected, l = (e = xa[Is(s, o)]) === null || e === void 0 ? void 0 : e.grid;
        return l == null ? void 0 : l.map(function(u, d) {
          return M.createElement("div", { className: "react-datepicker__month-wrapper", key: d }, u.map(function(f, p) {
            return M.createElement("div", { ref: t.MONTH_REFS[f], key: p, onClick: function(h) {
              t.onMonthClick(h, f);
            }, onKeyDown: function(h) {
              Dc(h) && (h.preventDefault(), h.key = A.Enter), t.onMonthKeyDown(h, f);
            }, onMouseEnter: t.props.usePointerEvent ? void 0 : function() {
              return t.onMonthMouseEnter(f);
            }, onPointerEnter: t.props.usePointerEvent ? function() {
              return t.onMonthMouseEnter(f);
            } : void 0, tabIndex: Number(t.getTabIndex(f)), className: t.getMonthClassNames(f), "aria-disabled": t.isMonthDisabled(f), role: "option", "aria-label": t.getAriaLabel(f), "aria-current": t.isCurrentMonth(i, f) ? "date" : void 0, "aria-selected": c ? t.isSelectedMonth(i, f, c) : void 0 }, t.getMonthContent(f));
          }));
        });
      }, t.renderQuarters = function() {
        var e = t.props, a = e.day, o = e.selected, s = [1, 2, 3, 4];
        return M.createElement("div", { className: "react-datepicker__quarter-wrapper" }, s.map(function(i, c) {
          return M.createElement("div", { key: c, ref: t.QUARTER_REFS[c], role: "option", onClick: function(l) {
            t.onQuarterClick(l, i);
          }, onKeyDown: function(l) {
            t.onQuarterKeyDown(l, i);
          }, onMouseEnter: t.props.usePointerEvent ? void 0 : function() {
            return t.onQuarterMouseEnter(i);
          }, onPointerEnter: t.props.usePointerEvent ? function() {
            return t.onQuarterMouseEnter(i);
          } : void 0, className: t.getQuarterClassNames(i), "aria-selected": o ? t.isSelectedQuarter(a, i, o) : void 0, tabIndex: Number(t.getQuarterTabIndex(i)), "aria-current": t.isCurrentQuarter(a, i) ? "date" : void 0 }, t.getQuarterContent(i));
        }));
      }, t.getClassNames = function() {
        var e = t.props, a = e.selectingDate, o = e.selectsStart, s = e.selectsEnd, i = e.showMonthYearPicker, c = e.showQuarterYearPicker, l = e.showWeekPicker;
        return Pe("react-datepicker__month", {
          "react-datepicker__month--selecting-range": a && (o || s)
        }, { "react-datepicker__monthPicker": i }, { "react-datepicker__quarterPicker": c }, { "react-datepicker__weekPicker": l });
      }, t;
    }
    return n.prototype.getSelection = function() {
      var t = this.props, e = t.selected, a = t.selectedDates, o = t.selectsMultiple;
      if (o)
        return a;
      if (e)
        return [e];
    }, n.prototype.render = function() {
      var t = this.props, e = t.showMonthYearPicker, a = t.showQuarterYearPicker, o = t.day, s = t.ariaLabelPrefix, i = s === void 0 ? "Month " : s, c = i ? i.trim() + " " : "";
      return M.createElement("div", { className: this.getClassNames(), onMouseLeave: this.props.usePointerEvent ? void 0 : this.handleMouseLeave, onPointerLeave: this.props.usePointerEvent ? this.handleMouseLeave : void 0, "aria-label": "".concat(c).concat(me(o, "MMMM, yyyy", this.props.locale)), role: "listbox" }, e ? this.renderMonths() : a ? this.renderQuarters() : this.renderWeeks());
    }, n;
  }(Se)
), F1 = (
  /** @class */
  function(r) {
    Ee(n, r);
    function n() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.isSelectedMonth = function(e) {
        return t.props.month === e;
      }, t.renderOptions = function() {
        return t.props.monthNames.map(function(e, a) {
          return M.createElement(
            "div",
            { className: t.isSelectedMonth(a) ? "react-datepicker__month-option react-datepicker__month-option--selected_month" : "react-datepicker__month-option", key: e, onClick: t.onChange.bind(t, a), "aria-selected": t.isSelectedMonth(a) ? "true" : void 0 },
            t.isSelectedMonth(a) ? M.createElement("span", { className: "react-datepicker__month-option--selected" }, "✓") : "",
            e
          );
        });
      }, t.onChange = function(e) {
        return t.props.onChange(e);
      }, t.handleClickOutside = function() {
        return t.props.onCancel();
      }, t;
    }
    return n.prototype.render = function() {
      return M.createElement(ia, { className: "react-datepicker__month-dropdown", onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, n;
  }(Se)
), A1 = (
  /** @class */
  function(r) {
    Ee(n, r);
    function n() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.state = {
        dropdownVisible: !1
      }, t.renderSelectOptions = function(e) {
        return e.map(function(a, o) {
          return M.createElement("option", { key: a, value: o }, a);
        });
      }, t.renderSelectMode = function(e) {
        return M.createElement("select", { value: t.props.month, className: "react-datepicker__month-select", onChange: function(a) {
          return t.onChange(parseInt(a.target.value));
        } }, t.renderSelectOptions(e));
      }, t.renderReadView = function(e, a) {
        return M.createElement(
          "div",
          { key: "read", style: { visibility: e ? "visible" : "hidden" }, className: "react-datepicker__month-read-view", onClick: t.toggleDropdown },
          M.createElement("span", { className: "react-datepicker__month-read-view--down-arrow" }),
          M.createElement("span", { className: "react-datepicker__month-read-view--selected-month" }, a[t.props.month])
        );
      }, t.renderDropdown = function(e) {
        return M.createElement(F1, ee({ key: "dropdown" }, t.props, { monthNames: e, onChange: t.onChange, onCancel: t.toggleDropdown }));
      }, t.renderScrollMode = function(e) {
        var a = t.state.dropdownVisible, o = [t.renderReadView(!a, e)];
        return a && o.unshift(t.renderDropdown(e)), o;
      }, t.onChange = function(e) {
        t.toggleDropdown(), e !== t.props.month && t.props.onChange(e);
      }, t.toggleDropdown = function() {
        return t.setState({
          dropdownVisible: !t.state.dropdownVisible
        });
      }, t;
    }
    return n.prototype.render = function() {
      var t = this, e = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(this.props.useShortMonthInDropdown ? function(o) {
        return gc(o, t.props.locale);
      } : function(o) {
        return wo(o, t.props.locale);
      }), a;
      switch (this.props.dropdownMode) {
        case "scroll":
          a = this.renderScrollMode(e);
          break;
        case "select":
          a = this.renderSelectMode(e);
          break;
      }
      return M.createElement("div", { className: "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(this.props.dropdownMode) }, a);
    }, n;
  }(Se)
);
function W1(r, n) {
  for (var t = [], e = pt(r), a = pt(n); !Ot(e, a); )
    t.push(ie(e)), e = Qe(e, 1);
  return t;
}
var H1 = (
  /** @class */
  function(r) {
    Ee(n, r);
    function n(t) {
      var e = r.call(this, t) || this;
      return e.renderOptions = function() {
        return e.state.monthYearsList.map(function(a) {
          var o = Ba(a), s = Xe(e.props.date, a) && Re(e.props.date, a);
          return M.createElement(
            "div",
            { className: s ? "react-datepicker__month-year-option--selected_month-year" : "react-datepicker__month-year-option", key: o, onClick: e.onChange.bind(e, o), "aria-selected": s ? "true" : void 0 },
            s ? M.createElement("span", { className: "react-datepicker__month-year-option--selected" }, "✓") : "",
            me(a, e.props.dateFormat, e.props.locale)
          );
        });
      }, e.onChange = function(a) {
        return e.props.onChange(a);
      }, e.handleClickOutside = function() {
        e.props.onCancel();
      }, e.state = {
        monthYearsList: W1(e.props.minDate, e.props.maxDate)
      }, e;
    }
    return n.prototype.render = function() {
      var t = Pe({
        "react-datepicker__month-year-dropdown": !0,
        "react-datepicker__month-year-dropdown--scrollable": this.props.scrollableMonthYearDropdown
      });
      return M.createElement(ia, { className: t, onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, n;
  }(Se)
), B1 = (
  /** @class */
  function(r) {
    Ee(n, r);
    function n() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.state = {
        dropdownVisible: !1
      }, t.renderSelectOptions = function() {
        for (var e = pt(t.props.minDate), a = pt(t.props.maxDate), o = []; !Ot(e, a); ) {
          var s = Ba(e);
          o.push(M.createElement("option", { key: s, value: s }, me(e, t.props.dateFormat, t.props.locale))), e = Qe(e, 1);
        }
        return o;
      }, t.onSelectChange = function(e) {
        t.onChange(parseInt(e.target.value));
      }, t.renderSelectMode = function() {
        return M.createElement("select", { value: Ba(pt(t.props.date)), className: "react-datepicker__month-year-select", onChange: t.onSelectChange }, t.renderSelectOptions());
      }, t.renderReadView = function(e) {
        var a = me(t.props.date, t.props.dateFormat, t.props.locale);
        return M.createElement(
          "div",
          { key: "read", style: { visibility: e ? "visible" : "hidden" }, className: "react-datepicker__month-year-read-view", onClick: t.toggleDropdown },
          M.createElement("span", { className: "react-datepicker__month-year-read-view--down-arrow" }),
          M.createElement("span", { className: "react-datepicker__month-year-read-view--selected-month-year" }, a)
        );
      }, t.renderDropdown = function() {
        return M.createElement(H1, ee({ key: "dropdown" }, t.props, { onChange: t.onChange, onCancel: t.toggleDropdown }));
      }, t.renderScrollMode = function() {
        var e = t.state.dropdownVisible, a = [t.renderReadView(!e)];
        return e && a.unshift(t.renderDropdown()), a;
      }, t.onChange = function(e) {
        t.toggleDropdown();
        var a = ie(e);
        Xe(t.props.date, a) && Re(t.props.date, a) || t.props.onChange(a);
      }, t.toggleDropdown = function() {
        return t.setState({
          dropdownVisible: !t.state.dropdownVisible
        });
      }, t;
    }
    return n.prototype.render = function() {
      var t;
      switch (this.props.dropdownMode) {
        case "scroll":
          t = this.renderScrollMode();
          break;
        case "select":
          t = this.renderSelectMode();
          break;
      }
      return M.createElement("div", { className: "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(this.props.dropdownMode) }, t);
    }, n;
  }(Se)
), V1 = (
  /** @class */
  function(r) {
    Ee(n, r);
    function n() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.state = {
        height: null
      }, t.scrollToTheSelectedTime = function() {
        requestAnimationFrame(function() {
          var e, a, o;
          t.list && (t.list.scrollTop = (o = t.centerLi && n.calcCenterPosition(t.props.monthRef ? t.props.monthRef.clientHeight - ((a = (e = t.header) === null || e === void 0 ? void 0 : e.clientHeight) !== null && a !== void 0 ? a : 0) : t.list.clientHeight, t.centerLi)) !== null && o !== void 0 ? o : 0);
        });
      }, t.handleClick = function(e) {
        var a, o;
        (t.props.minTime || t.props.maxTime) && Ss(e, t.props) || (t.props.excludeTimes || t.props.includeTimes || t.props.filterTime) && Cs(e, t.props) || (o = (a = t.props).onChange) === null || o === void 0 || o.call(a, e);
      }, t.isSelectedTime = function(e) {
        return t.props.selected && T1(t.props.selected, e);
      }, t.isDisabledTime = function(e) {
        return (t.props.minTime || t.props.maxTime) && Ss(e, t.props) || (t.props.excludeTimes || t.props.includeTimes || t.props.filterTime) && Cs(e, t.props);
      }, t.liClasses = function(e) {
        var a, o = [
          "react-datepicker__time-list-item",
          t.props.timeClassName ? t.props.timeClassName(e) : void 0
        ];
        return t.isSelectedTime(e) && o.push("react-datepicker__time-list-item--selected"), t.isDisabledTime(e) && o.push("react-datepicker__time-list-item--disabled"), t.props.injectTimes && (dt(e) * 3600 + ft(e) * 60 + Ct(e)) % (((a = t.props.intervals) !== null && a !== void 0 ? a : n.defaultProps.intervals) * 60) !== 0 && o.push("react-datepicker__time-list-item--injected"), o.join(" ");
      }, t.handleOnKeyDown = function(e, a) {
        var o, s;
        e.key === A.Space && (e.preventDefault(), e.key = A.Enter), (e.key === A.ArrowUp || e.key === A.ArrowLeft) && e.target instanceof HTMLElement && e.target.previousSibling && (e.preventDefault(), e.target.previousSibling instanceof HTMLElement && e.target.previousSibling.focus()), (e.key === A.ArrowDown || e.key === A.ArrowRight) && e.target instanceof HTMLElement && e.target.nextSibling && (e.preventDefault(), e.target.nextSibling instanceof HTMLElement && e.target.nextSibling.focus()), e.key === A.Enter && t.handleClick(a), (s = (o = t.props).handleOnKeyDown) === null || s === void 0 || s.call(o, e);
      }, t.renderTimes = function() {
        for (var e, a = [], o = typeof t.props.format == "string" ? t.props.format : "p", s = (e = t.props.intervals) !== null && e !== void 0 ? e : n.defaultProps.intervals, i = t.props.selected || t.props.openToDate || ie(), c = Mn(i), l = t.props.injectTimes && t.props.injectTimes.sort(function(v, b) {
          return v.getTime() - b.getTime();
        }), u = 60 * O1(i), d = u / s, f = 0; f < d; f++) {
          var p = Aa(c, f * s);
          if (a.push(p), l) {
            var h = P1(c, p, f, s, l);
            a = a.concat(h);
          }
        }
        var m = a.reduce(function(v, b) {
          return b.getTime() <= i.getTime() ? b : v;
        }, a[0]);
        return a.map(function(v) {
          return M.createElement("li", { key: v.valueOf(), onClick: t.handleClick.bind(t, v), className: t.liClasses(v), ref: function(b) {
            v === m && (t.centerLi = b);
          }, onKeyDown: function(b) {
            t.handleOnKeyDown(b, v);
          }, tabIndex: v === m ? 0 : -1, role: "option", "aria-selected": t.isSelectedTime(v) ? "true" : void 0, "aria-disabled": t.isDisabledTime(v) ? "true" : void 0 }, me(v, o, t.props.locale));
        });
      }, t.renderTimeCaption = function() {
        return t.props.showTimeCaption === !1 ? M.createElement(M.Fragment, null) : M.createElement(
          "div",
          { className: "react-datepicker__header react-datepicker__header--time ".concat(t.props.showTimeSelectOnly ? "react-datepicker__header--time--only" : ""), ref: function(e) {
            t.header = e;
          } },
          M.createElement("div", { className: "react-datepicker-time__header" }, t.props.timeCaption)
        );
      }, t;
    }
    return Object.defineProperty(n, "defaultProps", {
      get: function() {
        return {
          intervals: 30,
          todayButton: null,
          timeCaption: "Time",
          showTimeCaption: !0
        };
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.componentDidMount = function() {
      this.scrollToTheSelectedTime(), this.observeDatePickerHeightChanges();
    }, n.prototype.componentWillUnmount = function() {
      var t;
      (t = this.resizeObserver) === null || t === void 0 || t.disconnect();
    }, n.prototype.observeDatePickerHeightChanges = function() {
      var t = this, e = this.props.monthRef;
      this.updateContainerHeight(), e && (this.resizeObserver = new ResizeObserver(function() {
        t.updateContainerHeight();
      }), this.resizeObserver.observe(e));
    }, n.prototype.updateContainerHeight = function() {
      this.props.monthRef && this.header && this.setState({
        height: this.props.monthRef.clientHeight - this.header.clientHeight
      });
    }, n.prototype.render = function() {
      var t = this, e, a = this.state.height;
      return M.createElement(
        "div",
        { className: "react-datepicker__time-container ".concat(((e = this.props.todayButton) !== null && e !== void 0 ? e : n.defaultProps.todayButton) ? "react-datepicker__time-container--with-today-button" : "") },
        this.renderTimeCaption(),
        M.createElement(
          "div",
          { className: "react-datepicker__time" },
          M.createElement(
            "div",
            { className: "react-datepicker__time-box" },
            M.createElement("ul", { className: "react-datepicker__time-list", ref: function(o) {
              t.list = o;
            }, style: a ? { height: a } : {}, role: "listbox", "aria-label": this.props.timeCaption }, this.renderTimes())
          )
        )
      );
    }, n.calcCenterPosition = function(t, e) {
      return e.offsetTop - (t / 2 - e.clientHeight / 2);
    }, n;
  }(Se)
), Fs = 3, j1 = (
  /** @class */
  function(r) {
    Ee(n, r);
    function n(t) {
      var e = r.call(this, t) || this;
      return e.YEAR_REFS = rt([], Array(e.props.yearItemNumber), !0).map(function() {
        return Et();
      }), e.isDisabled = function(a) {
        return He(a, {
          minDate: e.props.minDate,
          maxDate: e.props.maxDate,
          excludeDates: e.props.excludeDates,
          includeDates: e.props.includeDates,
          filterDate: e.props.filterDate
        });
      }, e.isExcluded = function(a) {
        return bo(a, {
          excludeDates: e.props.excludeDates
        });
      }, e.selectingDate = function() {
        var a;
        return (a = e.props.selectingDate) !== null && a !== void 0 ? a : e.props.preSelection;
      }, e.updateFocusOnPaginate = function(a) {
        var o = function() {
          var s, i;
          (i = (s = e.YEAR_REFS[a]) === null || s === void 0 ? void 0 : s.current) === null || i === void 0 || i.focus();
        };
        window.requestAnimationFrame(o);
      }, e.handleYearClick = function(a, o) {
        e.props.onDayClick && e.props.onDayClick(a, o);
      }, e.handleYearNavigation = function(a, o) {
        var s, i, c, l, u = e.props, d = u.date, f = u.yearItemNumber;
        if (!(d === void 0 || f === void 0)) {
          var p = Mt(d, f).startPeriod;
          e.isDisabled(o) || e.isExcluded(o) || ((i = (s = e.props).setPreSelection) === null || i === void 0 || i.call(s, o), a - p < 0 ? e.updateFocusOnPaginate(f - (p - a)) : a - p >= f ? e.updateFocusOnPaginate(Math.abs(f - (a - p))) : (l = (c = e.YEAR_REFS[a - p]) === null || c === void 0 ? void 0 : c.current) === null || l === void 0 || l.focus());
        }
      }, e.isSameDay = function(a, o) {
        return J(a, o);
      }, e.isCurrentYear = function(a) {
        return a === G(ie());
      }, e.isRangeStart = function(a) {
        return e.props.startDate && e.props.endDate && Xe(Ke(ie(), a), e.props.startDate);
      }, e.isRangeEnd = function(a) {
        return e.props.startDate && e.props.endDate && Xe(Ke(ie(), a), e.props.endDate);
      }, e.isInRange = function(a) {
        return en(a, e.props.startDate, e.props.endDate);
      }, e.isInSelectingRange = function(a) {
        var o = e.props, s = o.selectsStart, i = o.selectsEnd, c = o.selectsRange, l = o.startDate, u = o.endDate;
        return !(s || i || c) || !e.selectingDate() ? !1 : s && u ? en(a, e.selectingDate(), u) : i && l || c && l && !u ? en(a, l, e.selectingDate()) : !1;
      }, e.isSelectingRangeStart = function(a) {
        var o;
        if (!e.isInSelectingRange(a))
          return !1;
        var s = e.props, i = s.startDate, c = s.selectsStart, l = Ke(ie(), a);
        return c ? Xe(l, (o = e.selectingDate()) !== null && o !== void 0 ? o : null) : Xe(l, i ?? null);
      }, e.isSelectingRangeEnd = function(a) {
        var o;
        if (!e.isInSelectingRange(a))
          return !1;
        var s = e.props, i = s.endDate, c = s.selectsEnd, l = s.selectsRange, u = Ke(ie(), a);
        return c || l ? Xe(u, (o = e.selectingDate()) !== null && o !== void 0 ? o : null) : Xe(u, i ?? null);
      }, e.isKeyboardSelected = function(a) {
        if (!(e.props.date === void 0 || e.props.selected == null || e.props.preSelection == null)) {
          var o = e.props, s = o.minDate, i = o.maxDate, c = o.excludeDates, l = o.includeDates, u = o.filterDate, d = Or(Ke(e.props.date, a)), f = (s || i || c || l || u) && _n(a, e.props);
          return !e.props.disabledKeyboardNavigation && !e.props.inline && !J(d, Or(e.props.selected)) && J(d, Or(e.props.preSelection)) && !f;
        }
      }, e.isSelectedYear = function(a) {
        var o = e.props, s = o.selectsMultiple, i = o.selected, c = o.selectedDates;
        return s ? c == null ? void 0 : c.some(function(l) {
          return a === G(l);
        }) : !!i && a === G(i);
      }, e.onYearClick = function(a, o) {
        var s = e.props.date;
        s !== void 0 && e.handleYearClick(Or(Ke(s, o)), a);
      }, e.onYearKeyDown = function(a, o) {
        var s, i, c = a.key, l = e.props, u = l.date, d = l.yearItemNumber, f = l.handleOnKeyDown;
        if (c !== A.Tab && a.preventDefault(), !e.props.disabledKeyboardNavigation)
          switch (c) {
            case A.Enter:
              if (e.props.selected == null)
                break;
              e.onYearClick(a, o), (i = (s = e.props).setPreSelection) === null || i === void 0 || i.call(s, e.props.selected);
              break;
            case A.ArrowRight:
              if (e.props.preSelection == null)
                break;
              e.handleYearNavigation(o + 1, lt(e.props.preSelection, 1));
              break;
            case A.ArrowLeft:
              if (e.props.preSelection == null)
                break;
              e.handleYearNavigation(o - 1, pr(e.props.preSelection, 1));
              break;
            case A.ArrowUp: {
              if (u === void 0 || d === void 0 || e.props.preSelection == null)
                break;
              var p = Mt(u, d).startPeriod, h = Fs, m = o - h;
              if (m < p) {
                var v = d % h;
                o >= p && o < p + v ? h = v : h += v, m = o - h;
              }
              e.handleYearNavigation(m, pr(e.props.preSelection, h));
              break;
            }
            case A.ArrowDown: {
              if (u === void 0 || d === void 0 || e.props.preSelection == null)
                break;
              var b = Mt(u, d).endPeriod, h = Fs, m = o + h;
              if (m > b) {
                var v = d % h;
                o <= b && o > b - v ? h = v : h += v, m = o + h;
              }
              e.handleYearNavigation(m, lt(e.props.preSelection, h));
              break;
            }
          }
        f && f(a);
      }, e.getYearClassNames = function(a) {
        var o = e.props, s = o.date, i = o.minDate, c = o.maxDate, l = o.excludeDates, u = o.includeDates, d = o.filterDate, f = o.yearClassName;
        return Pe("react-datepicker__year-text", "react-datepicker__year-".concat(a), s ? f == null ? void 0 : f(Ke(s, a)) : void 0, {
          "react-datepicker__year-text--selected": e.isSelectedYear(a),
          "react-datepicker__year-text--disabled": (i || c || l || u || d) && _n(a, e.props),
          "react-datepicker__year-text--keyboard-selected": e.isKeyboardSelected(a),
          "react-datepicker__year-text--range-start": e.isRangeStart(a),
          "react-datepicker__year-text--range-end": e.isRangeEnd(a),
          "react-datepicker__year-text--in-range": e.isInRange(a),
          "react-datepicker__year-text--in-selecting-range": e.isInSelectingRange(a),
          "react-datepicker__year-text--selecting-range-start": e.isSelectingRangeStart(a),
          "react-datepicker__year-text--selecting-range-end": e.isSelectingRangeEnd(a),
          "react-datepicker__year-text--today": e.isCurrentYear(a)
        });
      }, e.getYearTabIndex = function(a) {
        if (e.props.disabledKeyboardNavigation || e.props.preSelection == null)
          return "-1";
        var o = G(e.props.preSelection), s = _n(a, e.props);
        return a === o && !s ? "0" : "-1";
      }, e.getYearContent = function(a) {
        return e.props.renderYearContent ? e.props.renderYearContent(a) : a;
      }, e;
    }
    return n.prototype.render = function() {
      var t = this, e = [], a = this.props, o = a.date, s = a.yearItemNumber, i = a.onYearMouseEnter, c = a.onYearMouseLeave;
      if (o === void 0)
        return null;
      for (var l = Mt(o, s), u = l.startPeriod, d = l.endPeriod, f = function(m) {
        e.push(M.createElement("div", { ref: p.YEAR_REFS[m - u], onClick: function(v) {
          t.onYearClick(v, m);
        }, onKeyDown: function(v) {
          Dc(v) && (v.preventDefault(), v.key = A.Enter), t.onYearKeyDown(v, m);
        }, tabIndex: Number(p.getYearTabIndex(m)), className: p.getYearClassNames(m), onMouseEnter: p.props.usePointerEvent ? void 0 : function(v) {
          return i(v, m);
        }, onPointerEnter: p.props.usePointerEvent ? function(v) {
          return i(v, m);
        } : void 0, onMouseLeave: p.props.usePointerEvent ? void 0 : function(v) {
          return c(v, m);
        }, onPointerLeave: p.props.usePointerEvent ? function(v) {
          return c(v, m);
        } : void 0, key: m, "aria-current": p.isCurrentYear(m) ? "date" : void 0 }, p.getYearContent(m)));
      }, p = this, h = u; h <= d; h++)
        f(h);
      return M.createElement(
        "div",
        { className: "react-datepicker__year" },
        M.createElement("div", { className: "react-datepicker__year-wrapper", onMouseLeave: this.props.usePointerEvent ? void 0 : this.props.clearSelectingDate, onPointerLeave: this.props.usePointerEvent ? this.props.clearSelectingDate : void 0 }, e)
      );
    }, n;
  }(Se)
);
function Z1(r, n, t, e) {
  for (var a = [], o = 0; o < 2 * n + 1; o++) {
    var s = r + n - o, i = !0;
    t && (i = G(t) <= s), e && i && (i = G(e) >= s), i && a.push(s);
  }
  return a;
}
var z1 = (
  /** @class */
  function(r) {
    Ee(n, r);
    function n(t) {
      var e = r.call(this, t) || this;
      e.renderOptions = function() {
        var i = e.props.year, c = e.state.yearsList.map(function(d) {
          return M.createElement(
            "div",
            { className: i === d ? "react-datepicker__year-option react-datepicker__year-option--selected_year" : "react-datepicker__year-option", key: d, onClick: e.onChange.bind(e, d), "aria-selected": i === d ? "true" : void 0 },
            i === d ? M.createElement("span", { className: "react-datepicker__year-option--selected" }, "✓") : "",
            d
          );
        }), l = e.props.minDate ? G(e.props.minDate) : null, u = e.props.maxDate ? G(e.props.maxDate) : null;
        return (!u || !e.state.yearsList.find(function(d) {
          return d === u;
        })) && c.unshift(M.createElement(
          "div",
          { className: "react-datepicker__year-option", key: "upcoming", onClick: e.incrementYears },
          M.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming" })
        )), (!l || !e.state.yearsList.find(function(d) {
          return d === l;
        })) && c.push(M.createElement(
          "div",
          { className: "react-datepicker__year-option", key: "previous", onClick: e.decrementYears },
          M.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous" })
        )), c;
      }, e.onChange = function(i) {
        e.props.onChange(i);
      }, e.handleClickOutside = function() {
        e.props.onCancel();
      }, e.shiftYears = function(i) {
        var c = e.state.yearsList.map(function(l) {
          return l + i;
        });
        e.setState({
          yearsList: c
        });
      }, e.incrementYears = function() {
        return e.shiftYears(1);
      }, e.decrementYears = function() {
        return e.shiftYears(-1);
      };
      var a = t.yearDropdownItemNumber, o = t.scrollableYearDropdown, s = a || (o ? 10 : 5);
      return e.state = {
        yearsList: Z1(e.props.year, s, e.props.minDate, e.props.maxDate)
      }, e.dropdownRef = Et(), e;
    }
    return n.prototype.componentDidMount = function() {
      var t = this.dropdownRef.current;
      if (t) {
        var e = t.children ? Array.from(t.children) : null, a = e ? e.find(function(o) {
          return o.ariaSelected;
        }) : null;
        t.scrollTop = a && a instanceof HTMLElement ? a.offsetTop + (a.clientHeight - t.clientHeight) / 2 : (t.scrollHeight - t.clientHeight) / 2;
      }
    }, n.prototype.render = function() {
      var t = Pe({
        "react-datepicker__year-dropdown": !0,
        "react-datepicker__year-dropdown--scrollable": this.props.scrollableYearDropdown
      });
      return M.createElement(ia, { className: t, containerRef: this.dropdownRef, onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, n;
  }(Se)
), Q1 = (
  /** @class */
  function(r) {
    Ee(n, r);
    function n() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.state = {
        dropdownVisible: !1
      }, t.renderSelectOptions = function() {
        for (var e = t.props.minDate ? G(t.props.minDate) : 1900, a = t.props.maxDate ? G(t.props.maxDate) : 2100, o = [], s = e; s <= a; s++)
          o.push(M.createElement("option", { key: s, value: s }, s));
        return o;
      }, t.onSelectChange = function(e) {
        t.onChange(parseInt(e.target.value));
      }, t.renderSelectMode = function() {
        return M.createElement("select", { value: t.props.year, className: "react-datepicker__year-select", onChange: t.onSelectChange }, t.renderSelectOptions());
      }, t.renderReadView = function(e) {
        return M.createElement(
          "div",
          { key: "read", style: { visibility: e ? "visible" : "hidden" }, className: "react-datepicker__year-read-view", onClick: function(a) {
            return t.toggleDropdown(a);
          } },
          M.createElement("span", { className: "react-datepicker__year-read-view--down-arrow" }),
          M.createElement("span", { className: "react-datepicker__year-read-view--selected-year" }, t.props.year)
        );
      }, t.renderDropdown = function() {
        return M.createElement(z1, ee({ key: "dropdown" }, t.props, { onChange: t.onChange, onCancel: t.toggleDropdown }));
      }, t.renderScrollMode = function() {
        var e = t.state.dropdownVisible, a = [t.renderReadView(!e)];
        return e && a.unshift(t.renderDropdown()), a;
      }, t.onChange = function(e) {
        t.toggleDropdown(), e !== t.props.year && t.props.onChange(e);
      }, t.toggleDropdown = function(e) {
        t.setState({
          dropdownVisible: !t.state.dropdownVisible
        }, function() {
          t.props.adjustDateOnChange && t.handleYearChange(t.props.date, e);
        });
      }, t.handleYearChange = function(e, a) {
        var o;
        (o = t.onSelect) === null || o === void 0 || o.call(t, e, a), t.setOpen();
      }, t.onSelect = function(e, a) {
        var o, s;
        (s = (o = t.props).onSelect) === null || s === void 0 || s.call(o, e, a);
      }, t.setOpen = function() {
        var e, a;
        (a = (e = t.props).setOpen) === null || a === void 0 || a.call(e, !0);
      }, t;
    }
    return n.prototype.render = function() {
      var t;
      switch (this.props.dropdownMode) {
        case "scroll":
          t = this.renderScrollMode();
          break;
        case "select":
          t = this.renderSelectMode();
          break;
      }
      return M.createElement("div", { className: "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(this.props.dropdownMode) }, t);
    }, n;
  }(Se)
), q1 = [
  "react-datepicker__year-select",
  "react-datepicker__month-select",
  "react-datepicker__month-year-select"
], U1 = function(r) {
  var n = (r.className || "").split(/\s+/);
  return q1.some(function(t) {
    return n.indexOf(t) >= 0;
  });
}, K1 = (
  /** @class */
  function(r) {
    Ee(n, r);
    function n(t) {
      var e = r.call(this, t) || this;
      return e.monthContainer = void 0, e.handleClickOutside = function(a) {
        e.props.onClickOutside(a);
      }, e.setClickOutsideRef = function() {
        return e.containerRef.current;
      }, e.handleDropdownFocus = function(a) {
        var o, s;
        U1(a.target) && ((s = (o = e.props).onDropdownFocus) === null || s === void 0 || s.call(o, a));
      }, e.getDateInView = function() {
        var a = e.props, o = a.preSelection, s = a.selected, i = a.openToDate, c = wc(e.props), l = bc(e.props), u = ie(), d = i || s || o;
        return d || (c && Qt(u, c) ? c : l && Ot(u, l) ? l : u);
      }, e.increaseMonth = function() {
        e.setState(function(a) {
          var o = a.date;
          return {
            date: Qe(o, 1)
          };
        }, function() {
          return e.handleMonthChange(e.state.date);
        });
      }, e.decreaseMonth = function() {
        e.setState(function(a) {
          var o = a.date;
          return {
            date: Ht(o, 1)
          };
        }, function() {
          return e.handleMonthChange(e.state.date);
        });
      }, e.handleDayClick = function(a, o, s) {
        e.props.onSelect(a, o, s), e.props.setPreSelection && e.props.setPreSelection(a);
      }, e.handleDayMouseEnter = function(a) {
        e.setState({ selectingDate: a }), e.props.onDayMouseEnter && e.props.onDayMouseEnter(a);
      }, e.handleMonthMouseLeave = function() {
        e.setState({ selectingDate: void 0 }), e.props.onMonthMouseLeave && e.props.onMonthMouseLeave();
      }, e.handleYearMouseEnter = function(a, o) {
        e.setState({ selectingDate: Ke(ie(), o) }), e.props.onYearMouseEnter && e.props.onYearMouseEnter(a, o);
      }, e.handleYearMouseLeave = function(a, o) {
        e.props.onYearMouseLeave && e.props.onYearMouseLeave(a, o);
      }, e.handleYearChange = function(a) {
        var o, s, i, c;
        (s = (o = e.props).onYearChange) === null || s === void 0 || s.call(o, a), e.setState({ isRenderAriaLiveMessage: !0 }), e.props.adjustDateOnChange && (e.props.onSelect(a), (c = (i = e.props).setOpen) === null || c === void 0 || c.call(i, !0)), e.props.setPreSelection && e.props.setPreSelection(a);
      }, e.getEnabledPreSelectionDateForMonth = function(a) {
        if (!He(a, e.props))
          return a;
        for (var o = pt(a), s = g1(a), i = _d(s, o), c = null, l = 0; l <= i; l++) {
          var u = Ze(o, l);
          if (!He(u, e.props)) {
            c = u;
            break;
          }
        }
        return c;
      }, e.handleMonthChange = function(a) {
        var o, s, i, c = (o = e.getEnabledPreSelectionDateForMonth(a)) !== null && o !== void 0 ? o : a;
        e.handleCustomMonthChange(c), e.props.adjustDateOnChange && (e.props.onSelect(c), (i = (s = e.props).setOpen) === null || i === void 0 || i.call(s, !0)), e.props.setPreSelection && e.props.setPreSelection(c);
      }, e.handleCustomMonthChange = function(a) {
        var o, s;
        (s = (o = e.props).onMonthChange) === null || s === void 0 || s.call(o, a), e.setState({ isRenderAriaLiveMessage: !0 });
      }, e.handleMonthYearChange = function(a) {
        e.handleYearChange(a), e.handleMonthChange(a);
      }, e.changeYear = function(a) {
        e.setState(function(o) {
          var s = o.date;
          return {
            date: Ke(s, Number(a))
          };
        }, function() {
          return e.handleYearChange(e.state.date);
        });
      }, e.changeMonth = function(a) {
        e.setState(function(o) {
          var s = o.date;
          return {
            date: We(s, Number(a))
          };
        }, function() {
          return e.handleMonthChange(e.state.date);
        });
      }, e.changeMonthYear = function(a) {
        e.setState(function(o) {
          var s = o.date;
          return {
            date: Ke(We(s, Te(a)), G(a))
          };
        }, function() {
          return e.handleMonthYearChange(e.state.date);
        });
      }, e.header = function(a) {
        a === void 0 && (a = e.state.date);
        var o = St(a, e.props.locale, e.props.calendarStartDay), s = [];
        return e.props.showWeekNumbers && s.push(M.createElement("div", { key: "W", className: "react-datepicker__day-name" }, e.props.weekLabel || "#")), s.concat([0, 1, 2, 3, 4, 5, 6].map(function(i) {
          var c = Ze(o, i), l = e.formatWeekday(c, e.props.locale), u = e.props.weekDayClassName ? e.props.weekDayClassName(c) : void 0;
          return M.createElement("div", { key: i, "aria-label": me(c, "EEEE", e.props.locale), className: Pe("react-datepicker__day-name", u) }, l);
        }));
      }, e.formatWeekday = function(a, o) {
        return e.props.formatWeekDay ? y1(a, e.props.formatWeekDay, o) : e.props.useWeekdaysShort ? b1(a, o) : w1(a, o);
      }, e.decreaseYear = function() {
        e.setState(function(a) {
          var o, s = a.date;
          return {
            date: pr(s, e.props.showYearPicker ? (o = e.props.yearItemNumber) !== null && o !== void 0 ? o : n.defaultProps.yearItemNumber : 1)
          };
        }, function() {
          return e.handleYearChange(e.state.date);
        });
      }, e.clearSelectingDate = function() {
        e.setState({ selectingDate: void 0 });
      }, e.renderPreviousButton = function() {
        var a, o, s;
        if (!e.props.renderCustomHeader) {
          var i = (a = e.props.monthsShown) !== null && a !== void 0 ? a : n.defaultProps.monthsShown, c = e.props.showPreviousMonths ? i - 1 : 0, l = (o = e.props.monthSelectedIn) !== null && o !== void 0 ? o : c, u = Ht(e.state.date, l), d;
          switch (!0) {
            case e.props.showMonthYearPicker:
              d = Os(e.state.date, e.props);
              break;
            case e.props.showYearPicker:
              d = _1(e.state.date, e.props);
              break;
            case e.props.showQuarterYearPicker:
              d = k1(e.state.date, e.props);
              break;
            default:
              d = Es(u, e.props);
              break;
          }
          if (!(!((s = e.props.forceShowMonthNavigation) !== null && s !== void 0 ? s : n.defaultProps.forceShowMonthNavigation) && !e.props.showDisabledMonthNavigation && d || e.props.showTimeSelectOnly)) {
            var f = [
              "react-datepicker__navigation-icon",
              "react-datepicker__navigation-icon--previous"
            ], p = [
              "react-datepicker__navigation",
              "react-datepicker__navigation--previous"
            ], h = e.decreaseMonth;
            (e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker) && (h = e.decreaseYear), d && e.props.showDisabledMonthNavigation && (p.push("react-datepicker__navigation--previous--disabled"), h = void 0);
            var m = e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker, v = e.props, b = v.previousMonthButtonLabel, C = b === void 0 ? n.defaultProps.previousMonthButtonLabel : b, D = v.previousYearButtonLabel, O = D === void 0 ? n.defaultProps.previousYearButtonLabel : D, x = e.props, w = x.previousMonthAriaLabel, g = w === void 0 ? typeof C == "string" ? C : "Previous Month" : w, y = x.previousYearAriaLabel, T = y === void 0 ? typeof O == "string" ? O : "Previous Year" : y;
            return M.createElement(
              "button",
              { type: "button", className: p.join(" "), onClick: h, onKeyDown: e.props.handleOnKeyDown, "aria-label": m ? T : g },
              M.createElement("span", { className: f.join(" ") }, m ? O : C)
            );
          }
        }
      }, e.increaseYear = function() {
        e.setState(function(a) {
          var o, s = a.date;
          return {
            date: lt(s, e.props.showYearPicker ? (o = e.props.yearItemNumber) !== null && o !== void 0 ? o : n.defaultProps.yearItemNumber : 1)
          };
        }, function() {
          return e.handleYearChange(e.state.date);
        });
      }, e.renderNextButton = function() {
        var a;
        if (!e.props.renderCustomHeader) {
          var o;
          switch (!0) {
            case e.props.showMonthYearPicker:
              o = Ts(e.state.date, e.props);
              break;
            case e.props.showYearPicker:
              o = C1(e.state.date, e.props);
              break;
            case e.props.showQuarterYearPicker:
              o = M1(e.state.date, e.props);
              break;
            default:
              o = Ps(e.state.date, e.props);
              break;
          }
          if (!(!((a = e.props.forceShowMonthNavigation) !== null && a !== void 0 ? a : n.defaultProps.forceShowMonthNavigation) && !e.props.showDisabledMonthNavigation && o || e.props.showTimeSelectOnly)) {
            var s = [
              "react-datepicker__navigation",
              "react-datepicker__navigation--next"
            ], i = [
              "react-datepicker__navigation-icon",
              "react-datepicker__navigation-icon--next"
            ];
            e.props.showTimeSelect && s.push("react-datepicker__navigation--next--with-time"), e.props.todayButton && s.push("react-datepicker__navigation--next--with-today-button");
            var c = e.increaseMonth;
            (e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker) && (c = e.increaseYear), o && e.props.showDisabledMonthNavigation && (s.push("react-datepicker__navigation--next--disabled"), c = void 0);
            var l = e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker, u = e.props, d = u.nextMonthButtonLabel, f = d === void 0 ? n.defaultProps.nextMonthButtonLabel : d, p = u.nextYearButtonLabel, h = p === void 0 ? n.defaultProps.nextYearButtonLabel : p, m = e.props, v = m.nextMonthAriaLabel, b = v === void 0 ? typeof f == "string" ? f : "Next Month" : v, C = m.nextYearAriaLabel, D = C === void 0 ? typeof h == "string" ? h : "Next Year" : C;
            return M.createElement(
              "button",
              { type: "button", className: s.join(" "), onClick: c, onKeyDown: e.props.handleOnKeyDown, "aria-label": l ? D : b },
              M.createElement("span", { className: i.join(" ") }, l ? h : f)
            );
          }
        }
      }, e.renderCurrentMonth = function(a) {
        a === void 0 && (a = e.state.date);
        var o = ["react-datepicker__current-month"];
        return e.props.showYearDropdown && o.push("react-datepicker__current-month--hasYearDropdown"), e.props.showMonthDropdown && o.push("react-datepicker__current-month--hasMonthDropdown"), e.props.showMonthYearDropdown && o.push("react-datepicker__current-month--hasMonthYearDropdown"), M.createElement("h2", { className: o.join(" ") }, me(a, e.props.dateFormat, e.props.locale));
      }, e.renderYearDropdown = function(a) {
        if (a === void 0 && (a = !1), !(!e.props.showYearDropdown || a))
          return M.createElement(Q1, ee({}, n.defaultProps, e.props, { date: e.state.date, onChange: e.changeYear, year: G(e.state.date) }));
      }, e.renderMonthDropdown = function(a) {
        if (a === void 0 && (a = !1), !(!e.props.showMonthDropdown || a))
          return M.createElement(A1, ee({}, n.defaultProps, e.props, { month: Te(e.state.date), onChange: e.changeMonth }));
      }, e.renderMonthYearDropdown = function(a) {
        if (a === void 0 && (a = !1), !(!e.props.showMonthYearDropdown || a))
          return M.createElement(B1, ee({}, n.defaultProps, e.props, { date: e.state.date, onChange: e.changeMonthYear }));
      }, e.handleTodayButtonClick = function(a) {
        e.props.onSelect(ks(), a), e.props.setPreSelection && e.props.setPreSelection(ks());
      }, e.renderTodayButton = function() {
        if (!(!e.props.todayButton || e.props.showTimeSelectOnly))
          return M.createElement("div", { className: "react-datepicker__today-button", onClick: e.handleTodayButtonClick }, e.props.todayButton);
      }, e.renderDefaultHeader = function(a) {
        var o = a.monthDate, s = a.i;
        return M.createElement(
          "div",
          { className: "react-datepicker__header ".concat(e.props.showTimeSelect ? "react-datepicker__header--has-time-select" : "") },
          e.renderCurrentMonth(o),
          M.createElement(
            "div",
            { className: "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(e.props.dropdownMode), onFocus: e.handleDropdownFocus },
            e.renderMonthDropdown(s !== 0),
            e.renderMonthYearDropdown(s !== 0),
            e.renderYearDropdown(s !== 0)
          ),
          M.createElement("div", { className: "react-datepicker__day-names" }, e.header(o))
        );
      }, e.renderCustomHeader = function(a) {
        var o, s, i = a.monthDate, c = a.i;
        if (e.props.showTimeSelect && !e.state.monthContainer || e.props.showTimeSelectOnly)
          return null;
        var l = Es(e.state.date, e.props), u = Ps(e.state.date, e.props), d = Os(e.state.date, e.props), f = Ts(e.state.date, e.props), p = !e.props.showMonthYearPicker && !e.props.showQuarterYearPicker && !e.props.showYearPicker;
        return M.createElement(
          "div",
          { className: "react-datepicker__header react-datepicker__header--custom", onFocus: e.props.onDropdownFocus },
          (s = (o = e.props).renderCustomHeader) === null || s === void 0 ? void 0 : s.call(o, ee(ee({}, e.state), { customHeaderCount: c, monthDate: i, changeMonth: e.changeMonth, changeYear: e.changeYear, decreaseMonth: e.decreaseMonth, increaseMonth: e.increaseMonth, decreaseYear: e.decreaseYear, increaseYear: e.increaseYear, prevMonthButtonDisabled: l, nextMonthButtonDisabled: u, prevYearButtonDisabled: d, nextYearButtonDisabled: f })),
          p && M.createElement("div", { className: "react-datepicker__day-names" }, e.header(i))
        );
      }, e.renderYearHeader = function(a) {
        var o = a.monthDate, s = e.props, i = s.showYearPicker, c = s.yearItemNumber, l = c === void 0 ? n.defaultProps.yearItemNumber : c, u = Mt(o, l), d = u.startPeriod, f = u.endPeriod;
        return M.createElement("div", { className: "react-datepicker__header react-datepicker-year-header" }, i ? "".concat(d, " - ").concat(f) : G(o));
      }, e.renderHeader = function(a) {
        var o = a.monthDate, s = a.i, i = s === void 0 ? 0 : s, c = { monthDate: o, i };
        switch (!0) {
          case e.props.renderCustomHeader !== void 0:
            return e.renderCustomHeader(c);
          case (e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker):
            return e.renderYearHeader(c);
          default:
            return e.renderDefaultHeader(c);
        }
      }, e.renderMonths = function() {
        var a, o;
        if (!(e.props.showTimeSelectOnly || e.props.showYearPicker)) {
          for (var s = [], i = (a = e.props.monthsShown) !== null && a !== void 0 ? a : n.defaultProps.monthsShown, c = e.props.showPreviousMonths ? i - 1 : 0, l = e.props.showMonthYearPicker || e.props.showQuarterYearPicker ? lt(e.state.date, c) : Ht(e.state.date, c), u = (o = e.props.monthSelectedIn) !== null && o !== void 0 ? o : c, d = 0; d < i; ++d) {
            var f = d - u + c, p = e.props.showMonthYearPicker || e.props.showQuarterYearPicker ? lt(l, f) : Qe(l, f), h = "month-".concat(d), m = d < i - 1, v = d > 0;
            s.push(M.createElement(
              "div",
              { key: h, ref: function(b) {
                e.monthContainer = b ?? void 0;
              }, className: "react-datepicker__month-container" },
              e.renderHeader({ monthDate: p, i: d }),
              M.createElement(I1, ee({}, n.defaultProps, e.props, { containerRef: e.containerRef, ariaLabelPrefix: e.props.monthAriaLabelPrefix, day: p, onDayClick: e.handleDayClick, handleOnKeyDown: e.props.handleOnDayKeyDown, handleOnMonthKeyDown: e.props.handleOnKeyDown, onDayMouseEnter: e.handleDayMouseEnter, onMouseLeave: e.handleMonthMouseLeave, orderInDisplay: d, selectingDate: e.state.selectingDate, monthShowsDuplicateDaysEnd: m, monthShowsDuplicateDaysStart: v }))
            ));
          }
          return s;
        }
      }, e.renderYears = function() {
        if (!e.props.showTimeSelectOnly && e.props.showYearPicker)
          return M.createElement(
            "div",
            { className: "react-datepicker__year--container" },
            e.renderHeader({ monthDate: e.state.date }),
            M.createElement(j1, ee({}, n.defaultProps, e.props, { selectingDate: e.state.selectingDate, date: e.state.date, onDayClick: e.handleDayClick, clearSelectingDate: e.clearSelectingDate, onYearMouseEnter: e.handleYearMouseEnter, onYearMouseLeave: e.handleYearMouseLeave }))
          );
      }, e.renderTimeSection = function() {
        if (e.props.showTimeSelect && (e.state.monthContainer || e.props.showTimeSelectOnly))
          return M.createElement(V1, ee({}, n.defaultProps, e.props, { onChange: e.props.onTimeChange, format: e.props.timeFormat, intervals: e.props.timeIntervals, monthRef: e.state.monthContainer }));
      }, e.renderInputTimeSection = function() {
        var a = e.props.selected ? new Date(e.props.selected) : void 0, o = a && ca(a) && !!e.props.selected, s = o ? "".concat(Ys(a.getHours()), ":").concat(Ys(a.getMinutes())) : "";
        if (e.props.showTimeInput)
          return M.createElement(N1, ee({}, n.defaultProps, e.props, { date: a, timeString: s, onChange: e.props.onTimeChange }));
      }, e.renderAriaLiveRegion = function() {
        var a, o = Mt(e.state.date, (a = e.props.yearItemNumber) !== null && a !== void 0 ? a : n.defaultProps.yearItemNumber), s = o.startPeriod, i = o.endPeriod, c;
        return e.props.showYearPicker ? c = "".concat(s, " - ").concat(i) : e.props.showMonthYearPicker || e.props.showQuarterYearPicker ? c = G(e.state.date) : c = "".concat(wo(Te(e.state.date), e.props.locale), " ").concat(G(e.state.date)), M.createElement("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live" }, e.state.isRenderAriaLiveMessage && c);
      }, e.renderChildren = function() {
        if (e.props.children)
          return M.createElement("div", { className: "react-datepicker__children-container" }, e.props.children);
      }, e.containerRef = Et(), e.state = {
        date: e.getDateInView(),
        selectingDate: void 0,
        monthContainer: void 0,
        isRenderAriaLiveMessage: !1
      }, e;
    }
    return Object.defineProperty(n, "defaultProps", {
      get: function() {
        return {
          monthsShown: 1,
          forceShowMonthNavigation: !1,
          timeCaption: "Time",
          previousYearButtonLabel: "Previous Year",
          nextYearButtonLabel: "Next Year",
          previousMonthButtonLabel: "Previous Month",
          nextMonthButtonLabel: "Next Month",
          yearItemNumber: Hr
        };
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.componentDidMount = function() {
      var t = this;
      this.props.showTimeSelect && (this.assignMonthContainer = function() {
        t.setState({ monthContainer: t.monthContainer });
      }());
    }, n.prototype.componentDidUpdate = function(t) {
      var e = this;
      if (this.props.preSelection && (!J(this.props.preSelection, t.preSelection) || this.props.monthSelectedIn !== t.monthSelectedIn)) {
        var a = !Re(this.state.date, this.props.preSelection);
        this.setState({
          date: this.props.preSelection
        }, function() {
          return a && e.handleCustomMonthChange(e.state.date);
        });
      } else this.props.openToDate && !J(this.props.openToDate, t.openToDate) && this.setState({
        date: this.props.openToDate
      });
    }, n.prototype.render = function() {
      var t = this.props.container || u1;
      return M.createElement(
        ia,
        { onClickOutside: this.handleClickOutside, style: { display: "contents" }, ignoreClass: this.props.outsideClickIgnoreClass },
        M.createElement(
          "div",
          { style: { display: "contents" }, ref: this.containerRef },
          M.createElement(
            t,
            { className: Pe("react-datepicker", this.props.className, {
              "react-datepicker--time-only": this.props.showTimeSelectOnly
            }), showTime: this.props.showTimeSelect || this.props.showTimeInput, showTimeSelectOnly: this.props.showTimeSelectOnly },
            this.renderAriaLiveRegion(),
            this.renderPreviousButton(),
            this.renderNextButton(),
            this.renderMonths(),
            this.renderYears(),
            this.renderTodayButton(),
            this.renderTimeSection(),
            this.renderInputTimeSection(),
            this.renderChildren()
          )
        )
      );
    }, n;
  }(Se)
), G1 = function(r) {
  var n = r.icon, t = r.className, e = t === void 0 ? "" : t, a = r.onClick, o = "react-datepicker__calendar-icon";
  if (typeof n == "string")
    return M.createElement("i", { className: "".concat(o, " ").concat(n, " ").concat(e), "aria-hidden": "true", onClick: a });
  if (M.isValidElement(n)) {
    var s = n;
    return M.cloneElement(s, {
      className: "".concat(s.props.className || "", " ").concat(o, " ").concat(e),
      onClick: function(i) {
        typeof s.props.onClick == "function" && s.props.onClick(i), typeof a == "function" && a(i);
      }
    });
  }
  return M.createElement(
    "svg",
    { className: "".concat(o, " ").concat(e), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", onClick: a },
    M.createElement("path", { d: "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" })
  );
}, xc = (
  /** @class */
  function(r) {
    Ee(n, r);
    function n(t) {
      var e = r.call(this, t) || this;
      return e.portalRoot = null, e.el = document.createElement("div"), e;
    }
    return n.prototype.componentDidMount = function() {
      this.portalRoot = (this.props.portalHost || document).getElementById(this.props.portalId), this.portalRoot || (this.portalRoot = document.createElement("div"), this.portalRoot.setAttribute("id", this.props.portalId), (this.props.portalHost || document.body).appendChild(this.portalRoot)), this.portalRoot.appendChild(this.el);
    }, n.prototype.componentWillUnmount = function() {
      this.portalRoot && this.portalRoot.removeChild(this.el);
    }, n.prototype.render = function() {
      return Oc.createPortal(this.props.children, this.el);
    }, n;
  }(Se)
), X1 = "[tabindex], a, button, input, select, textarea", J1 = function(r) {
  return (r instanceof HTMLAnchorElement || !r.disabled) && r.tabIndex !== -1;
}, kc = (
  /** @class */
  function(r) {
    Ee(n, r);
    function n(t) {
      var e = r.call(this, t) || this;
      return e.getTabChildren = function() {
        var a;
        return Array.prototype.slice.call((a = e.tabLoopRef.current) === null || a === void 0 ? void 0 : a.querySelectorAll(X1), 1, -1).filter(J1);
      }, e.handleFocusStart = function() {
        var a = e.getTabChildren();
        a && a.length > 1 && a[a.length - 1].focus();
      }, e.handleFocusEnd = function() {
        var a = e.getTabChildren();
        a && a.length > 1 && a[0].focus();
      }, e.tabLoopRef = Et(), e;
    }
    return n.prototype.render = function() {
      var t;
      return ((t = this.props.enableTabLoop) !== null && t !== void 0 ? t : n.defaultProps.enableTabLoop) ? M.createElement(
        "div",
        { className: "react-datepicker__tab-loop", ref: this.tabLoopRef },
        M.createElement("div", { className: "react-datepicker__tab-loop__start", tabIndex: 0, onFocus: this.handleFocusStart }),
        this.props.children,
        M.createElement("div", { className: "react-datepicker__tab-loop__end", tabIndex: 0, onFocus: this.handleFocusEnd })
      ) : this.props.children;
    }, n.defaultProps = {
      enableTabLoop: !0
    }, n;
  }(Se)
);
function em(r) {
  var n = function(t) {
    var e, a = typeof t.hidePopper == "boolean" ? t.hidePopper : !0, o = Me(null), s = l1(ee({ open: !a, whileElementsMounted: Ah, placement: t.popperPlacement, middleware: rt([
      qh({ padding: 15 }),
      Qh(10),
      Uh({ element: o })
    ], (e = t.popperModifiers) !== null && e !== void 0 ? e : [], !0) }, t.popperProps)), i = ee(ee({}, t), { hidePopper: a, popperProps: ee(ee({}, s), { arrowRef: o }) });
    return M.createElement(r, ee({}, i));
  };
  return n;
}
var tm = (
  /** @class */
  function(r) {
    Ee(n, r);
    function n() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return Object.defineProperty(n, "defaultProps", {
      get: function() {
        return {
          hidePopper: !0
        };
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.render = function() {
      var t = this.props, e = t.className, a = t.wrapperClassName, o = t.hidePopper, s = o === void 0 ? n.defaultProps.hidePopper : o, i = t.popperComponent, c = t.targetComponent, l = t.enableTabLoop, u = t.popperOnKeyDown, d = t.portalId, f = t.portalHost, p = t.popperProps, h = t.showArrow, m = void 0;
      if (!s) {
        var v = Pe("react-datepicker-popper", e);
        m = M.createElement(
          kc,
          { enableTabLoop: l },
          M.createElement(
            "div",
            { ref: p.refs.setFloating, style: p.floatingStyles, className: v, "data-placement": p.placement, onKeyDown: u },
            i,
            h && M.createElement(r1, { ref: p.arrowRef, context: p.context, fill: "currentColor", strokeWidth: 1, height: 8, width: 16, style: { transform: "translateY(-1px)" }, className: "react-datepicker__triangle" })
          )
        );
      }
      this.props.popperContainer && (m = ri(this.props.popperContainer, {}, m)), d && !s && (m = M.createElement(xc, { portalId: d, portalHost: f }, m));
      var b = Pe("react-datepicker-wrapper", a);
      return M.createElement(
        M.Fragment,
        null,
        M.createElement("div", { ref: p.refs.setReference, className: b }, c),
        m
      );
    }, n;
  }(Se)
), rm = em(tm), As = "react-datepicker-ignore-onclickoutside";
function nm(r, n) {
  return r && n ? Te(r) !== Te(n) || G(r) !== G(n) : r !== n;
}
var ka = "Date input not valid.", am = (
  /** @class */
  function(r) {
    Ee(n, r);
    function n(t) {
      var e = r.call(this, t) || this;
      return e.calendar = null, e.input = null, e.getPreSelection = function() {
        return e.props.openToDate ? e.props.openToDate : e.props.selectsEnd && e.props.startDate ? e.props.startDate : e.props.selectsStart && e.props.endDate ? e.props.endDate : ie();
      }, e.modifyHolidays = function() {
        var a;
        return (a = e.props.holidays) === null || a === void 0 ? void 0 : a.reduce(function(o, s) {
          var i = new Date(s.date);
          return ca(i) ? rt(rt([], o, !0), [ee(ee({}, s), { date: i })], !1) : o;
        }, []);
      }, e.calcInitialState = function() {
        var a, o = e.getPreSelection(), s = wc(e.props), i = bc(e.props), c = s && Qt(o, Mn(s)) ? s : i && Ot(o, Ms(i)) ? i : o;
        return {
          open: e.props.startOpen || !1,
          preventFocus: !1,
          inputValue: null,
          preSelection: (a = e.props.selectsRange ? e.props.startDate : e.props.selected) !== null && a !== void 0 ? a : c,
          // transforming highlighted days (perhaps nested array)
          // to flat Map for faster access in day.jsx
          highlightDates: Ns(e.props.highlightDates),
          focused: !1,
          // used to focus day in inline version after month has changed, but not on
          // initial render
          shouldFocusDayInline: !1,
          isRenderAriaLiveMessage: !1,
          wasHidden: !1
        };
      }, e.resetHiddenStatus = function() {
        e.setState(ee(ee({}, e.state), { wasHidden: !1 }));
      }, e.setHiddenStatus = function() {
        e.setState(ee(ee({}, e.state), { wasHidden: !0 }));
      }, e.setHiddenStateOnVisibilityHidden = function() {
        document.visibilityState === "hidden" && e.setHiddenStatus();
      }, e.clearPreventFocusTimeout = function() {
        e.preventFocusTimeout && clearTimeout(e.preventFocusTimeout);
      }, e.setFocus = function() {
        var a, o;
        (o = (a = e.input) === null || a === void 0 ? void 0 : a.focus) === null || o === void 0 || o.call(a, { preventScroll: !0 });
      }, e.setBlur = function() {
        var a, o;
        (o = (a = e.input) === null || a === void 0 ? void 0 : a.blur) === null || o === void 0 || o.call(a), e.cancelFocusInput();
      }, e.deferBlur = function() {
        requestAnimationFrame(function() {
          e.setBlur();
        });
      }, e.setOpen = function(a, o) {
        o === void 0 && (o = !1), e.setState({
          open: a,
          preSelection: a && e.state.open ? e.state.preSelection : e.calcInitialState().preSelection,
          lastPreSelectChange: Ma
        }, function() {
          a || e.setState(function(s) {
            return {
              focused: o ? s.focused : !1
            };
          }, function() {
            !o && e.deferBlur(), e.setState({ inputValue: null });
          });
        });
      }, e.inputOk = function() {
        return ut(e.state.preSelection);
      }, e.isCalendarOpen = function() {
        return e.props.open === void 0 ? e.state.open && !e.props.disabled && !e.props.readOnly : e.props.open;
      }, e.handleFocus = function(a) {
        var o, s, i = e.state.wasHidden, c = i ? e.state.open : !0;
        i && e.resetHiddenStatus(), e.state.preventFocus || ((s = (o = e.props).onFocus) === null || s === void 0 || s.call(o, a), c && !e.props.preventOpenOnFocus && !e.props.readOnly && e.setOpen(!0)), e.setState({ focused: !0 });
      }, e.sendFocusBackToInput = function() {
        e.preventFocusTimeout && e.clearPreventFocusTimeout(), e.setState({ preventFocus: !0 }, function() {
          e.preventFocusTimeout = setTimeout(function() {
            e.setFocus(), e.setState({ preventFocus: !1 });
          });
        });
      }, e.cancelFocusInput = function() {
        clearTimeout(e.inputFocusTimeout), e.inputFocusTimeout = void 0;
      }, e.deferFocusInput = function() {
        e.cancelFocusInput(), e.inputFocusTimeout = setTimeout(function() {
          return e.setFocus();
        }, 1);
      }, e.handleDropdownFocus = function() {
        e.cancelFocusInput();
      }, e.handleBlur = function(a) {
        var o, s;
        (!e.state.open || e.props.withPortal || e.props.showTimeInput) && ((s = (o = e.props).onBlur) === null || s === void 0 || s.call(o, a)), e.state.open && e.props.open === !1 && e.setOpen(!1), e.setState({ focused: !1 });
      }, e.handleCalendarClickOutside = function(a) {
        var o, s;
        e.props.inline || e.setOpen(!1), (s = (o = e.props).onClickOutside) === null || s === void 0 || s.call(o, a), e.props.withPortal && a.preventDefault();
      }, e.handleChange = function() {
        for (var a, o, s, i, c, l = [], u = 0; u < arguments.length; u++)
          l[u] = arguments[u];
        var d = l[0];
        if (!(e.props.onChangeRaw && (e.props.onChangeRaw.apply(e, l), !d || typeof d.isDefaultPrevented != "function" || d.isDefaultPrevented()))) {
          e.setState({
            inputValue: (d == null ? void 0 : d.target) instanceof HTMLInputElement ? d.target.value : null,
            lastPreSelectChange: om
          });
          var f = e.props, p = f.selectsRange, h = f.startDate, m = f.endDate, v = (a = e.props.dateFormat) !== null && a !== void 0 ? a : n.defaultProps.dateFormat, b = (o = e.props.strictParsing) !== null && o !== void 0 ? o : n.defaultProps.strictParsing, C = (d == null ? void 0 : d.target) instanceof HTMLInputElement ? d.target.value : "";
          if (p) {
            var D = C.split(v.includes("-") ? vc : "-", 2).map(function(L) {
              return L.trim();
            }), O = D[0], x = D[1], w = ba(O ?? "", v, e.props.locale, b), g = ba(x ?? "", v, e.props.locale, b), y = (h == null ? void 0 : h.getTime()) !== (w == null ? void 0 : w.getTime()), T = (m == null ? void 0 : m.getTime()) !== (g == null ? void 0 : g.getTime());
            if (!y && !T || w && He(w, e.props) || g && He(g, e.props))
              return;
            (i = (s = e.props).onChange) === null || i === void 0 || i.call(s, [w, g], d);
          } else {
            var R = ba(C, v, e.props.locale, b, (c = e.props.selected) !== null && c !== void 0 ? c : void 0);
            (R || !C) && e.setSelected(R, d, !0);
          }
        }
      }, e.handleSelect = function(a, o, s) {
        if (!e.props.readOnly) {
          if (e.props.shouldCloseOnSelect && !e.props.showTimeSelect && e.sendFocusBackToInput(), e.props.onChangeRaw && e.props.onChangeRaw(o), e.setSelected(a, o, !1, s), e.props.showDateSelect && e.setState({ isRenderAriaLiveMessage: !0 }), !e.props.shouldCloseOnSelect || e.props.showTimeSelect)
            e.setPreSelection(a);
          else if (!e.props.inline) {
            e.props.selectsRange || e.setOpen(!1);
            var i = e.props, c = i.startDate, l = i.endDate;
            c && !l && (e.props.swapRange || !$s(a, c)) && e.setOpen(!1);
          }
        }
      }, e.setSelected = function(a, o, s, i) {
        var c, l, u = a;
        if (e.props.showYearPicker) {
          if (u !== null && _n(G(u), e.props))
            return;
        } else if (e.props.showMonthYearPicker) {
          if (u !== null && yc(u, e.props))
            return;
        } else if (u !== null && He(u, e.props))
          return;
        var d = e.props, f = d.onChange, p = d.selectsRange, h = d.startDate, m = d.endDate, v = d.selectsMultiple, b = d.selectedDates, C = d.minTime, D = d.swapRange;
        if (!It(e.props.selected, u) || e.props.allowSameDay || p || v)
          if (u !== null && (e.props.selected && (!s || !e.props.showTimeSelect && !e.props.showTimeSelectOnly && !e.props.showTimeInput) && (u = Da(u, {
            hour: dt(e.props.selected),
            minute: ft(e.props.selected),
            second: Ct(e.props.selected)
          })), !s && (e.props.showTimeSelect || e.props.showTimeSelectOnly) && C && (u = Da(u, {
            hour: C.getHours(),
            minute: C.getMinutes(),
            second: C.getSeconds()
          })), e.props.inline || e.setState({
            preSelection: u
          }), e.props.focusSelectedMonth || e.setState({ monthSelectedIn: i })), p) {
            var O = !h && !m, x = h && !m, w = h && m;
            O ? f == null || f([u, null], o) : x && (u === null ? f == null || f([null, null], o) : $s(u, h) ? D ? f == null || f([u, h], o) : f == null || f([u, null], o) : f == null || f([h, u], o)), w && (f == null || f([u, null], o));
          } else if (v) {
            if (u !== null)
              if (!(b != null && b.length))
                f == null || f([u], o);
              else {
                var g = b.some(function(T) {
                  return J(T, u);
                });
                if (g) {
                  var y = b.filter(function(T) {
                    return !J(T, u);
                  });
                  f == null || f(y, o);
                } else
                  f == null || f(rt(rt([], b, !0), [u], !1), o);
              }
          } else
            f == null || f(u, o);
        s || ((l = (c = e.props).onSelect) === null || l === void 0 || l.call(c, u, o), e.setState({ inputValue: null }));
      }, e.setPreSelection = function(a) {
        if (!e.props.readOnly) {
          var o = ut(e.props.minDate), s = ut(e.props.maxDate), i = !0;
          if (a) {
            var c = Mn(a);
            if (o && s)
              i = Tr(a, e.props.minDate, e.props.maxDate);
            else if (o) {
              var l = Mn(e.props.minDate);
              i = Ot(a, l) || It(c, l);
            } else if (s) {
              var u = Ms(e.props.maxDate);
              i = Qt(a, u) || It(c, u);
            }
          }
          i && e.setState({
            preSelection: a
          });
        }
      }, e.toggleCalendar = function() {
        e.setOpen(!e.state.open);
      }, e.handleTimeChange = function(a) {
        var o, s;
        if (!(e.props.selectsRange || e.props.selectsMultiple)) {
          var i = e.props.selected ? e.props.selected : e.getPreSelection(), c = e.props.selected ? a : Da(i, {
            hour: dt(a),
            minute: ft(a)
          });
          e.setState({
            preSelection: c
          }), (s = (o = e.props).onChange) === null || s === void 0 || s.call(o, c), e.props.shouldCloseOnSelect && !e.props.showTimeInput && (e.sendFocusBackToInput(), e.setOpen(!1)), e.props.showTimeInput && e.setOpen(!0), (e.props.showTimeSelectOnly || e.props.showTimeSelect) && e.setState({ isRenderAriaLiveMessage: !0 }), e.setState({ inputValue: null });
        }
      }, e.onInputClick = function() {
        var a, o;
        !e.props.disabled && !e.props.readOnly && e.setOpen(!0), (o = (a = e.props).onInputClick) === null || o === void 0 || o.call(a);
      }, e.onInputKeyDown = function(a) {
        var o, s, i, c, l, u;
        (s = (o = e.props).onKeyDown) === null || s === void 0 || s.call(o, a);
        var d = a.key;
        if (!e.state.open && !e.props.inline && !e.props.preventOpenOnFocus) {
          (d === A.ArrowDown || d === A.ArrowUp || d === A.Enter) && ((i = e.onInputClick) === null || i === void 0 || i.call(e));
          return;
        }
        if (e.state.open) {
          if (d === A.ArrowDown || d === A.ArrowUp) {
            a.preventDefault();
            var f = e.props.showTimeSelectOnly ? ".react-datepicker__time-list-item[tabindex='0']" : e.props.showWeekPicker && e.props.showWeekNumbers ? '.react-datepicker__week-number[tabindex="0"]' : e.props.showFullMonthYearPicker || e.props.showMonthYearPicker ? '.react-datepicker__month-text[tabindex="0"]' : '.react-datepicker__day[tabindex="0"]', p = ((c = e.calendar) === null || c === void 0 ? void 0 : c.containerRef.current) instanceof Element && e.calendar.containerRef.current.querySelector(f);
            p instanceof HTMLElement && p.focus({ preventScroll: !0 });
            return;
          }
          var h = ie(e.state.preSelection);
          d === A.Enter ? (a.preventDefault(), a.target.blur(), e.inputOk() && e.state.lastPreSelectChange === Ma ? (e.handleSelect(h, a), !e.props.shouldCloseOnSelect && e.setPreSelection(h)) : e.setOpen(!1)) : d === A.Escape ? (a.preventDefault(), a.target.blur(), e.sendFocusBackToInput(), e.setOpen(!1)) : d === A.Tab && e.setOpen(!1), e.inputOk() || (u = (l = e.props).onInputError) === null || u === void 0 || u.call(l, { code: 1, msg: ka });
        }
      }, e.onPortalKeyDown = function(a) {
        var o = a.key;
        o === A.Escape && (a.preventDefault(), e.setState({
          preventFocus: !0
        }, function() {
          e.setOpen(!1), setTimeout(function() {
            e.setFocus(), e.setState({ preventFocus: !1 });
          });
        }));
      }, e.onDayKeyDown = function(a) {
        var o, s, i, c, l, u, d = e.props, f = d.minDate, p = d.maxDate, h = d.disabledKeyboardNavigation, m = d.showWeekPicker, v = d.shouldCloseOnSelect, b = d.locale, C = d.calendarStartDay, D = d.adjustDateOnChange, O = d.inline;
        if ((s = (o = e.props).onKeyDown) === null || s === void 0 || s.call(o, a), !h) {
          var x = a.key, w = a.shiftKey, g = ie(e.state.preSelection), y = function(S, k) {
            var E = k;
            switch (S) {
              case A.ArrowRight:
                E = m ? Rn(k, 1) : Ze(k, 1);
                break;
              case A.ArrowLeft:
                E = m ? ds(k) : Cp(k);
                break;
              case A.ArrowUp:
                E = ds(k);
                break;
              case A.ArrowDown:
                E = Rn(k, 1);
                break;
              case A.PageUp:
                E = w ? pr(k, 1) : Ht(k, 1);
                break;
              case A.PageDown:
                E = w ? lt(k, 1) : Qe(k, 1);
                break;
              case A.Home:
                E = St(k, b, C);
                break;
              case A.End:
                E = v1(k);
                break;
            }
            return E;
          }, T = function(S, k) {
            for (var E = 40, _ = S, F = !1, H = 0, Z = y(S, k); !F; ) {
              if (H >= E) {
                Z = k;
                break;
              }
              f && Z < f && (_ = A.ArrowRight, Z = He(f, e.props) ? y(_, Z) : f), p && Z > p && (_ = A.ArrowLeft, Z = He(p, e.props) ? y(_, Z) : p), He(Z, e.props) ? ((_ === A.PageUp || _ === A.Home) && (_ = A.ArrowRight), (_ === A.PageDown || _ === A.End) && (_ = A.ArrowLeft), Z = y(_, Z)) : F = !0, H++;
            }
            return Z;
          };
          if (x === A.Enter) {
            a.preventDefault(), e.handleSelect(g, a), !v && e.setPreSelection(g);
            return;
          } else if (x === A.Escape) {
            a.preventDefault(), e.setOpen(!1), e.inputOk() || (c = (i = e.props).onInputError) === null || c === void 0 || c.call(i, { code: 1, msg: ka });
            return;
          }
          var R = null;
          switch (x) {
            case A.ArrowLeft:
            case A.ArrowRight:
            case A.ArrowUp:
            case A.ArrowDown:
            case A.PageUp:
            case A.PageDown:
            case A.Home:
            case A.End:
              R = T(x, g);
              break;
          }
          if (!R) {
            (u = (l = e.props).onInputError) === null || u === void 0 || u.call(l, { code: 1, msg: ka });
            return;
          }
          if (a.preventDefault(), e.setState({ lastPreSelectChange: Ma }), D && e.setSelected(R), e.setPreSelection(R), O) {
            var L = Te(g), I = Te(R), V = G(g), Y = G(R);
            L !== I || V !== Y ? e.setState({ shouldFocusDayInline: !0 }) : e.setState({ shouldFocusDayInline: !1 });
          }
        }
      }, e.onPopperKeyDown = function(a) {
        var o = a.key;
        o === A.Escape && (a.preventDefault(), e.sendFocusBackToInput(), e.setOpen(!1));
      }, e.onClearClick = function(a) {
        a && a.preventDefault && a.preventDefault(), e.sendFocusBackToInput();
        var o = e.props, s = o.selectsRange, i = o.onChange;
        s ? i == null || i([null, null], a) : i == null || i(null, a), e.setState({ inputValue: null });
      }, e.clear = function() {
        e.onClearClick();
      }, e.onScroll = function(a) {
        typeof e.props.closeOnScroll == "boolean" && e.props.closeOnScroll ? (a.target === document || a.target === document.documentElement || a.target === document.body) && e.setOpen(!1) : typeof e.props.closeOnScroll == "function" && e.props.closeOnScroll(a) && e.setOpen(!1);
      }, e.renderCalendar = function() {
        var a, o;
        return !e.props.inline && !e.isCalendarOpen() ? null : M.createElement(K1, ee({ showMonthYearDropdown: void 0, ref: function(s) {
          e.calendar = s;
        } }, e.props, e.state, { setOpen: e.setOpen, dateFormat: (a = e.props.dateFormatCalendar) !== null && a !== void 0 ? a : n.defaultProps.dateFormatCalendar, onSelect: e.handleSelect, onClickOutside: e.handleCalendarClickOutside, holidays: E1(e.modifyHolidays()), outsideClickIgnoreClass: As, onDropdownFocus: e.handleDropdownFocus, onTimeChange: e.handleTimeChange, className: e.props.calendarClassName, container: e.props.calendarContainer, handleOnKeyDown: e.props.onKeyDown, handleOnDayKeyDown: e.onDayKeyDown, setPreSelection: e.setPreSelection, dropdownMode: (o = e.props.dropdownMode) !== null && o !== void 0 ? o : n.defaultProps.dropdownMode }), e.props.children);
      }, e.renderAriaLiveRegion = function() {
        var a = e.props, o = a.dateFormat, s = o === void 0 ? n.defaultProps.dateFormat : o, i = a.locale, c = e.props.showTimeInput || e.props.showTimeSelect, l = c ? "PPPPp" : "PPPP", u;
        return e.props.selectsRange ? u = "Selected start date: ".concat(Ae(e.props.startDate, {
          dateFormat: l,
          locale: i
        }), ". ").concat(e.props.endDate ? "End date: " + Ae(e.props.endDate, {
          dateFormat: l,
          locale: i
        }) : "") : e.props.showTimeSelectOnly ? u = "Selected time: ".concat(Ae(e.props.selected, { dateFormat: s, locale: i })) : e.props.showYearPicker ? u = "Selected year: ".concat(Ae(e.props.selected, { dateFormat: "yyyy", locale: i })) : e.props.showMonthYearPicker ? u = "Selected month: ".concat(Ae(e.props.selected, { dateFormat: "MMMM yyyy", locale: i })) : e.props.showQuarterYearPicker ? u = "Selected quarter: ".concat(Ae(e.props.selected, {
          dateFormat: "yyyy, QQQ",
          locale: i
        })) : u = "Selected date: ".concat(Ae(e.props.selected, {
          dateFormat: l,
          locale: i
        })), M.createElement("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live" }, u);
      }, e.renderDateInput = function() {
        var a, o, s, i = Pe(e.props.className, (a = {}, a[As] = e.state.open, a)), c = e.props.customInput || M.createElement("input", { type: "text" }), l = e.props.customInputRef || "ref", u = e.props, d = u.dateFormat, f = d === void 0 ? n.defaultProps.dateFormat : d, p = u.locale, h = typeof e.props.value == "string" ? e.props.value : typeof e.state.inputValue == "string" ? e.state.inputValue : e.props.selectsRange ? f1(e.props.startDate, e.props.endDate, {
          dateFormat: f,
          locale: p
        }) : e.props.selectsMultiple ? p1((s = e.props.selectedDates) !== null && s !== void 0 ? s : [], {
          dateFormat: f,
          locale: p
        }) : Ae(e.props.selected, {
          dateFormat: f,
          locale: p
        });
        return ai(c, (o = {}, o[l] = function(m) {
          e.input = m;
        }, o.value = h, o.onBlur = e.handleBlur, o.onChange = e.handleChange, o.onClick = e.onInputClick, o.onFocus = e.handleFocus, o.onKeyDown = e.onInputKeyDown, o.id = e.props.id, o.name = e.props.name, o.form = e.props.form, o.autoFocus = e.props.autoFocus, o.placeholder = e.props.placeholderText, o.disabled = e.props.disabled, o.autoComplete = e.props.autoComplete, o.className = Pe(c.props.className, i), o.title = e.props.title, o.readOnly = e.props.readOnly, o.required = e.props.required, o.tabIndex = e.props.tabIndex, o["aria-describedby"] = e.props.ariaDescribedBy, o["aria-invalid"] = e.props.ariaInvalid, o["aria-labelledby"] = e.props.ariaLabelledBy, o["aria-required"] = e.props.ariaRequired, o));
      }, e.renderClearButton = function() {
        var a = e.props, o = a.isClearable, s = a.disabled, i = a.selected, c = a.startDate, l = a.endDate, u = a.clearButtonTitle, d = a.clearButtonClassName, f = d === void 0 ? "" : d, p = a.ariaLabelClose, h = p === void 0 ? "Close" : p, m = a.selectedDates, v = a.readOnly;
        return o && !v && (i != null || c != null || l != null || m != null && m.length) ? M.createElement("button", { type: "button", className: Pe("react-datepicker__close-icon", f, { "react-datepicker__close-icon--disabled": s }), disabled: s, "aria-label": h, onClick: e.onClearClick, title: u, tabIndex: -1 }) : null;
      }, e.state = e.calcInitialState(), e.preventFocusTimeout = void 0, e;
    }
    return Object.defineProperty(n, "defaultProps", {
      get: function() {
        return {
          allowSameDay: !1,
          dateFormat: "MM/dd/yyyy",
          dateFormatCalendar: "LLLL yyyy",
          disabled: !1,
          disabledKeyboardNavigation: !1,
          dropdownMode: "scroll",
          preventOpenOnFocus: !1,
          monthsShown: 1,
          readOnly: !1,
          withPortal: !1,
          selectsDisabledDaysInRange: !1,
          shouldCloseOnSelect: !0,
          showTimeSelect: !1,
          showTimeInput: !1,
          showPreviousMonths: !1,
          showMonthYearPicker: !1,
          showFullMonthYearPicker: !1,
          showTwoColumnMonthYearPicker: !1,
          showFourColumnMonthYearPicker: !1,
          showYearPicker: !1,
          showQuarterYearPicker: !1,
          showWeekPicker: !1,
          strictParsing: !1,
          swapRange: !1,
          timeIntervals: 30,
          timeCaption: "Time",
          previousMonthAriaLabel: "Previous Month",
          previousMonthButtonLabel: "Previous Month",
          nextMonthAriaLabel: "Next Month",
          nextMonthButtonLabel: "Next Month",
          previousYearAriaLabel: "Previous Year",
          previousYearButtonLabel: "Previous Year",
          nextYearAriaLabel: "Next Year",
          nextYearButtonLabel: "Next Year",
          timeInputLabel: "Time",
          enableTabLoop: !0,
          yearItemNumber: Hr,
          focusSelectedMonth: !1,
          showPopperArrow: !0,
          excludeScrollbar: !0,
          customTimeInput: null,
          calendarStartDay: void 0,
          toggleCalendarOnIconClick: !1,
          usePointerEvent: !1
        };
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.componentDidMount = function() {
      window.addEventListener("scroll", this.onScroll, !0), document.addEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
    }, n.prototype.componentDidUpdate = function(t, e) {
      var a, o, s, i;
      t.inline && nm(t.selected, this.props.selected) && this.setPreSelection(this.props.selected), this.state.monthSelectedIn !== void 0 && t.monthsShown !== this.props.monthsShown && this.setState({ monthSelectedIn: 0 }), t.highlightDates !== this.props.highlightDates && this.setState({
        highlightDates: Ns(this.props.highlightDates)
      }), !e.focused && !It(t.selected, this.props.selected) && this.setState({ inputValue: null }), e.open !== this.state.open && (e.open === !1 && this.state.open === !0 && ((o = (a = this.props).onCalendarOpen) === null || o === void 0 || o.call(a)), e.open === !0 && this.state.open === !1 && ((i = (s = this.props).onCalendarClose) === null || i === void 0 || i.call(s)));
    }, n.prototype.componentWillUnmount = function() {
      this.clearPreventFocusTimeout(), window.removeEventListener("scroll", this.onScroll, !0), document.removeEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
    }, n.prototype.renderInputContainer = function() {
      var t = this.props, e = t.showIcon, a = t.icon, o = t.calendarIconClassname, s = t.calendarIconClassName, i = t.toggleCalendarOnIconClick, c = this.state.open;
      return o && console.warn("calendarIconClassname props is deprecated. should use calendarIconClassName props."), M.createElement(
        "div",
        { className: "react-datepicker__input-container".concat(e ? " react-datepicker__view-calendar-icon" : "") },
        e && M.createElement(G1, ee({ icon: a, className: Pe(s, !s && o, c && "react-datepicker-ignore-onclickoutside") }, i ? {
          onClick: this.toggleCalendar
        } : null)),
        this.state.isRenderAriaLiveMessage && this.renderAriaLiveRegion(),
        this.renderDateInput(),
        this.renderClearButton()
      );
    }, n.prototype.render = function() {
      var t = this.renderCalendar();
      if (this.props.inline)
        return t;
      if (this.props.withPortal) {
        var e = this.state.open ? M.createElement(
          kc,
          { enableTabLoop: this.props.enableTabLoop },
          M.createElement("div", { className: "react-datepicker__portal", tabIndex: -1, onKeyDown: this.onPortalKeyDown }, t)
        ) : null;
        return this.state.open && this.props.portalId && (e = M.createElement(xc, ee({ portalId: this.props.portalId }, this.props), e)), M.createElement(
          "div",
          null,
          this.renderInputContainer(),
          e
        );
      }
      return M.createElement(rm, ee({}, this.props, { className: this.props.popperClassName, hidePopper: !this.isCalendarOpen(), targetComponent: this.renderInputContainer(), popperComponent: t, popperOnKeyDown: this.onPopperKeyDown, showArrow: this.props.showPopperArrow }));
    }, n;
  }(Se)
), om = "input", Ma = "navigate";
const la = `
  background: none;
  outline: none;
  border: none;
  font-size: 100%;
  line-height: 1.15
  margin: 0
`, sm = $.div`
  width: calc(${({ width: r }) => r}px - ${Fe}px);
  position: sticky;
  top: 0;
  left: ${Fe}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme: r }) => r.navHeight};
  padding: 0.625rem 1rem;
  background-color: ${({ theme: r }) => r.colors.background};
  z-index: 3;
`, im = $.div`
  ${la};
  display: flex;
  align-items: center;
  position: relative;
  .react-datepicker-wrapper {
    margin-top: 3px;
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 1.5rem;
    background-color: ${({ theme: r }) => r.colors.textPrimary};
  }
  &::before {
    left: -1.125rem;
  }
  &::after {
    right: -1.125rem;
  }
`, cm = $.div`
  display: flex;
  gap: 1.875rem;
`, Ws = $.button`
  ${la};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme: r }) => r.colors.textPrimary};
  :not(:disabled) {
    cursor: pointer;
  }
`, lm = $.button`
  ${la};
  display: flex;
  align-items: center;
  cursor: pointer;
`, um = $.button`
  ${la};
  position: relative;
  font-weight: 600;
  cursor: pointer;
  line-height: 1.5rem;
  color: ${({ theme: r }) => r.colors.textPrimary};
`, dm = $.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({ theme: r }) => r.colors.textPrimary};
`, fm = $.div`
  display: flex;
`, pm = $.div`
  display: flex;
  align-items: "center";
  gap: 1.25rem;
`, hm = ({ width: r, showThemeToggle: n, toggleTheme: t }) => {
  const { topbar: e } = xr(), {
    data: a,
    config: o,
    handleGoNext: s,
    handleGoPrev: i,
    handleGoToday: c,
    handleGoDate: l,
    zoomIn: u,
    zoomOut: d,
    isNextZoom: f,
    isPrevZoom: p,
    handleFilterData: h,
    onClearFilterData: m
  } = Dr(), { colors: v } = Ut(), { filterButtonState: b = -1 } = o, C = (D) => {
    D.stopPropagation(), m == null || m();
  };
  return /* @__PURE__ */ U(sm, { width: r, className: "topbar-wrapper", children: [
    /* @__PURE__ */ N(fm, { className: "topbar-filters", children: b >= 0 && /* @__PURE__ */ U(
      _a,
      {
        $variant: b ? "filled" : "outlined",
        iconName: "filter",
        width: "16",
        height: "16",
        onClick: h,
        children: [
          e.filters,
          !!b && /* @__PURE__ */ N("span", { onClick: C, children: /* @__PURE__ */ N(Le, { iconName: "close", height: "16", width: "16", fill: v.textSecondary }) })
        ]
      }
    ) }),
    /* @__PURE__ */ U(cm, { className: "topbar-navigation", children: [
      /* @__PURE__ */ U(Ws, { disabled: !(a != null && a.length), onClick: i, className: "topbar-nav-prev", children: [
        /* @__PURE__ */ N(Le, { iconName: "arrowLeft", height: "15", fill: v.textPrimary }),
        e.prev
      ] }),
      /* @__PURE__ */ U(im, { className: "topbar-today-wrapper", children: [
        /* @__PURE__ */ N(um, { onClick: c, className: "topbar-today", children: e.today }),
        /* @__PURE__ */ N(
          am,
          {
            selected: /* @__PURE__ */ new Date(),
            onChange: (D) => D && l(W(D)),
            customInput: /* @__PURE__ */ N(lm, { className: "topbar-calendar-button", children: /* @__PURE__ */ N(Le, { iconName: "calendar", height: "15", fill: v.textPrimary }) })
          }
        )
      ] }),
      /* @__PURE__ */ U(Ws, { disabled: !(a != null && a.length), onClick: s, className: "topbar-nav-next", children: [
        e.next,
        /* @__PURE__ */ N(Le, { iconName: "arrowRight", height: "15", fill: v.textPrimary })
      ] })
    ] }),
    /* @__PURE__ */ U(pm, { className: "topbar-options", children: [
      n && /* @__PURE__ */ N(tv, { toggleTheme: t }),
      /* @__PURE__ */ U(dm, { className: "topbar-zoom", children: [
        e.view,
        /* @__PURE__ */ N(
          _a,
          {
            isDisabled: !p,
            onClick: d,
            $isFullRounded: !0,
            iconName: "subtract",
            width: "14"
          }
        ),
        /* @__PURE__ */ N(
          _a,
          {
            isDisabled: !f,
            onClick: u,
            $isFullRounded: !0,
            iconName: "add",
            width: "14"
          }
        )
      ] })
    ] })
  ] });
}, mm = (r) => /* @__PURE__ */ P.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ P.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), vm = (r) => /* @__PURE__ */ P.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ P.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), gm = (r) => /* @__PURE__ */ P.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ P.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ P.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ P.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), ym = (r) => /* @__PURE__ */ P.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ P.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), wm = (r) => /* @__PURE__ */ P.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ P.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), bm = (r) => /* @__PURE__ */ P.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ P.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), Dm = (r) => /* @__PURE__ */ P.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ P.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ P.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ P.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ P.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ P.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ P.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), xm = (r) => /* @__PURE__ */ P.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ P.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ P.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ P.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ P.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), km = (r) => /* @__PURE__ */ P.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ P.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), Mm = (r) => /* @__PURE__ */ P.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ P.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), _m = (r) => /* @__PURE__ */ P.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ P.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), Cm = (r) => /* @__PURE__ */ P.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ P.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), Sm = (r) => /* @__PURE__ */ P.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ P.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), Em = (r) => /* @__PURE__ */ P.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ P.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ P.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ P.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ P.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ P.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ P.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ P.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ P.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ P.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), Pm = (r) => /* @__PURE__ */ P.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ P.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#000000" }), /* @__PURE__ */ P.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#000000" }), /* @__PURE__ */ P.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#000000" }), /* @__PURE__ */ P.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#000000" }), /* @__PURE__ */ P.createElement("line", { x1: 1.75, y1: 6.5, x2: 12.25, y2: 6.5, stroke: "#000000", strokeWidth: 0.5 }), /* @__PURE__ */ P.createElement("line", { x1: 1.75, y1: 8.5, x2: 12.25, y2: 8.5, stroke: "#000000", strokeWidth: 0.5 }), /* @__PURE__ */ P.createElement("line", { x1: 1.75, y1: 10.5, x2: 12.25, y2: 10.5, stroke: "#000000", strokeWidth: 0.5 }), /* @__PURE__ */ P.createElement("line", { x1: 4.25, y1: 5.5, x2: 4.25, y2: 11.5, stroke: "#000000", strokeWidth: 0.5 }), /* @__PURE__ */ P.createElement("line", { x1: 7, y1: 5.5, x2: 7, y2: 11.5, stroke: "#000000", strokeWidth: 0.5 }), /* @__PURE__ */ P.createElement("line", { x1: 9.75, y1: 5.5, x2: 9.75, y2: 11.5, stroke: "#000000", strokeWidth: 0.5 })), Om = {
  add: mm,
  subtract: vm,
  filter: gm,
  arrowLeft: ym,
  arrowRight: wm,
  defaultAvatar: bm,
  calendarWarning: Dm,
  calendarFree: xm,
  arrowDown: Mm,
  arrowUp: km,
  search: _m,
  close: Cm,
  moon: Sm,
  sun: Em,
  calendar: Pm
}, Le = ({ iconName: r, width: n, height: t, fill: e, className: a }) => {
  const { colors: o } = Ut(), s = Om[r];
  return s ? /* @__PURE__ */ N(
    s,
    {
      style: { transition: ".5s ease" },
      fill: e ?? o.accent,
      width: n,
      height: t,
      className: a
    }
  ) : null;
}, Tm = (r, n, t) => ({
  outlined: {
    color: t ? r.colors.disabled : r.colors.accent,
    border: `1px solid ${t ? r.colors.disabled : r.colors.accent}`,
    background: "transparent"
  },
  filled: {
    color: t ? r.colors.primary : r.colors.textSecondary,
    background: t ? r.colors.disabled : r.colors.accent,
    border: "1px solid transparent"
  }
})[n], Nm = $.button`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  min-height: 24px;
  border-radius: ${({ $isFullRounded: r }) => r ? "50%" : "4px"};
  cursor: ${({ disabled: r }) => r ? "auto" : "pointer"};
  font-size: 14px;
  gap: 4px;
  padding: ${({ $hasChildren: r }) => r ? "0 10px" : "0"};
  transition: 0.5s ease;
  ${({ theme: r, $variant: n, disabled: t }) => Tm(r, n, t)}
`, _a = ({
  iconName: r,
  width: n,
  height: t,
  fill: e,
  className: a,
  onClick: o,
  children: s,
  $isFullRounded: i,
  isDisabled: c,
  $variant: l = "outlined"
}) => {
  const { colors: u } = Ut();
  return /* @__PURE__ */ U(
    Nm,
    {
      onClick: o,
      $isFullRounded: i,
      $hasChildren: !!s,
      disabled: c,
      $variant: l,
      className: "icon-button",
      children: [
        /* @__PURE__ */ N(
          Le,
          {
            iconName: r,
            width: n,
            height: t,
            fill: c ? u.disabled : e,
            className: a
          }
        ),
        s
      ]
    }
  );
}, Ym = $.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ $showScroll: r }) => r ? "scroll" : "hidden"};
  background-color: ${({ theme: r }) => r.colors.gridBackground};
`, Rm = $.div`
  position: relative;
`, Lm = Fr`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`, $m = Fr`
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`, Im = $.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 9998;
  animation: ${Lm} 0.15s ease-out;
`, Fm = $.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme: r }) => r.colors.background};
  border: 1px solid ${({ theme: r }) => r.colors.border};
  border-radius: 12px;
  padding: 24px;
  min-width: 360px;
  max-width: 90vw;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  z-index: 9999;
  animation: ${$m} 0.2s ease-out;
`, Am = $.h3`
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme: r }) => r.colors.textPrimary};
`, Wm = $.div`
  margin-bottom: 16px;
  padding: 12px;
  background: ${({ theme: r }) => r.colors.secondary};
  border-radius: 8px;
  border-left: 4px solid ${({ theme: r }) => r.colors.accent};
`, Hm = $.div`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme: r }) => r.colors.textPrimary};
  margin-bottom: 2px;
`, Bm = $.div`
  font-size: 13px;
  color: ${({ theme: r }) => r.colors.placeholder};
`, Vm = $.div`
  margin-bottom: 20px;
`, Hs = $.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: ${({ theme: r }) => r.colors.primary};
  border-radius: 8px;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`, Bs = $.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme: r }) => r.colors.placeholder};
  min-width: 60px;
`, Vs = $.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
`, js = $.span`
  font-size: 13px;
  color: ${({ theme: r }) => r.colors.placeholder};
  text-decoration: line-through;
`, Zs = $.span`
  color: ${({ theme: r }) => r.colors.accent};
  font-weight: bold;
`, zs = $.span`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme: r }) => r.colors.textPrimary};
`, jm = $.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`, Mc = $.button`
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
  border: none;
  outline: none;

  &:focus-visible {
    box-shadow: 0 0 0 2px ${({ theme: r }) => r.colors.accent};
  }
`, Zm = $(Mc)`
  background: ${({ theme: r }) => r.colors.primary};
  color: ${({ theme: r }) => r.colors.textPrimary};

  &:hover {
    background: ${({ theme: r }) => r.colors.secondary};
  }
`, zm = $(Mc)`
  background: ${({ theme: r }) => r.colors.accent};
  color: white;

  &:hover {
    filter: brightness(1.1);
  }
`, Qm = ({
  isOpen: r,
  pendingUpdate: n,
  onConfirm: t,
  onCancel: e,
  dateFormat: a = "MMM D, YYYY",
  timeFormat: o = "HH:mm"
}) => {
  const s = de(
    (u) => {
      u.key === "Escape" ? e() : u.key === "Enter" && t();
    },
    [e, t]
  );
  if (ge(() => {
    if (r)
      return document.addEventListener("keydown", s), () => document.removeEventListener("keydown", s);
  }, [r, s]), !r || !n) return null;
  const i = (u) => {
    const d = W(u);
    return `${d.format(a)} ${d.format(o)}`;
  }, c = n.startDate.getTime() !== n.originalStartDate.getTime(), l = n.endDate.getTime() !== n.originalEndDate.getTime();
  return /* @__PURE__ */ U(Ir, { children: [
    /* @__PURE__ */ N(Im, { onClick: e }),
    /* @__PURE__ */ U(Fm, { role: "dialog", "aria-modal": "true", "aria-labelledby": "confirm-dialog-title", children: [
      /* @__PURE__ */ N(Am, { id: "confirm-dialog-title", children: "Confirm Schedule Change" }),
      /* @__PURE__ */ U(Wm, { children: [
        /* @__PURE__ */ N(Hm, { children: n.title }),
        n.subtitle && /* @__PURE__ */ N(Bm, { children: n.subtitle })
      ] }),
      /* @__PURE__ */ U(Vm, { children: [
        c && /* @__PURE__ */ U(Hs, { children: [
          /* @__PURE__ */ N(Bs, { children: "Start:" }),
          /* @__PURE__ */ U(Vs, { children: [
            /* @__PURE__ */ N(js, { children: i(n.originalStartDate) }),
            /* @__PURE__ */ N(Zs, { children: "→" }),
            /* @__PURE__ */ N(zs, { children: i(n.startDate) })
          ] })
        ] }),
        l && /* @__PURE__ */ U(Hs, { children: [
          /* @__PURE__ */ N(Bs, { children: "End:" }),
          /* @__PURE__ */ U(Vs, { children: [
            /* @__PURE__ */ N(js, { children: i(n.originalEndDate) }),
            /* @__PURE__ */ N(Zs, { children: "→" }),
            /* @__PURE__ */ N(zs, { children: i(n.endDate) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ U(jm, { children: [
        /* @__PURE__ */ N(Zm, { onClick: e, type: "button", children: "Cancel" }),
        /* @__PURE__ */ N(zm, { onClick: t, type: "button", autoFocus: !0, children: "Confirm" })
      ] })
    ] })
  ] });
}, qm = Fr`
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`, Um = Fr`
  from {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
`, Km = $.div`
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10000;
  animation: ${({ $isLeaving: r }) => r ? Um : qm} 0.25s ease-out forwards;
`, Gm = $.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 20px;
  background: ${({ theme: r }) => r.colors.tooltip};
  color: ${({ theme: r }) => r.colors.textSecondary};
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  font-size: 14px;
`, Xm = $.span`
  font-weight: 400;
`, Jm = $.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: ${({ theme: r }) => r.colors.textSecondary};
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
  }

  &:active {
    transform: scale(0.97);
  }
`, e0 = $.button`
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  padding: 4px;
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
  transition: color 0.15s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`, t0 = $.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: ${({ theme: r }) => r.colors.accent};
  border-radius: 0 0 10px 10px;
  animation: shrink ${({ $duration: r }) => r}ms linear forwards;

  @keyframes shrink {
    from {
      width: 100%;
    }
    to {
      width: 0%;
    }
  }
`, r0 = ({
  isVisible: r,
  message: n,
  onUndo: t,
  onDismiss: e,
  duration: a = 5e3
}) => {
  const [o, s] = ve(!1), [i, c] = ve(!1), l = de(() => {
    s(!0), setTimeout(() => {
      c(!1), s(!1), e();
    }, 250);
  }, [e]), u = de(() => {
    t(), l();
  }, [t, l]);
  return ge(() => {
    if (r) {
      c(!0), s(!1);
      const d = setTimeout(() => {
        l();
      }, a);
      return () => clearTimeout(d);
    }
  }, [r, a, l]), i ? /* @__PURE__ */ N(Km, { $isLeaving: o, children: /* @__PURE__ */ U(Gm, { children: [
    /* @__PURE__ */ N(Xm, { children: n }),
    /* @__PURE__ */ N(Jm, { onClick: u, type: "button", children: "Undo" }),
    /* @__PURE__ */ N(e0, { onClick: l, type: "button", "aria-label": "Dismiss", children: "×" }),
    /* @__PURE__ */ N(t0, { $duration: a })
  ] }) }) : null;
}, sv = ({
  data: r,
  config: n,
  startDate: t,
  onRangeChange: e,
  onVisibleViewportChange: a,
  onZoomChange: o,
  onTileClick: s,
  onFilterData: i,
  onClearFilterData: c,
  onItemClick: l,
  onTileUpdate: u,
  isLoading: d,
  searchValue: f,
  onSearchChange: p,
  defaultSearchValue: h
}) => {
  var te;
  const m = ct(
    () => ({
      zoom: 0,
      filterButtonState: 1,
      includeTakenHoursOnWeekendsInDayView: !1,
      showTooltip: !0,
      translations: void 0,
      dateFormat: "dddd DD.MM.YYYY",
      timeFormat: "HH:00",
      editable: !1,
      ...n
    }),
    [n]
  ), v = Me(null), [b, C] = ve((te = v.current) == null ? void 0 : te.clientWidth), D = ct(() => W(t), [t]), [O, x] = ve(m.defaultTheme ?? "light"), w = () => {
    x(O === "light" ? "dark" : "light");
  }, [g, y] = ve(null), [T, R] = ve(!1), [L, I] = ve(!1), [V, Y] = ve(null), S = O === "light" ? Fl : Al, k = m.theme ? m.theme[S.mode] : {}, E = {
    ...S,
    colors: {
      ...S.colors,
      ...k
    }
  };
  ge(() => {
    const X = () => {
      v.current && C(v.current.clientWidth);
    };
    return X(), window.addEventListener("resize", X), () => window.removeEventListener("resize", X);
  }, []);
  const _ = de((X) => {
    y(X), R(!0);
  }, []), F = de(() => {
    if (g && u) {
      const X = {
        id: g.id,
        startDate: g.startDate,
        endDate: g.endDate
      };
      u(X), Y(g), I(!0);
    }
    R(!1), y(null);
  }, [g, u]), H = de(() => {
    R(!1), y(null);
  }, []), Z = de(() => {
    if (V && u) {
      const X = {
        id: V.id,
        startDate: V.originalStartDate,
        endDate: V.originalEndDate
      };
      u(X);
    }
    Y(null);
  }, [V, u]), q = de(() => {
    I(!1), Y(null);
  }, []);
  return v.current, /* @__PURE__ */ U(Ir, { children: [
    /* @__PURE__ */ N(Il, {}),
    /* @__PURE__ */ N(Yl, { theme: E, children: /* @__PURE__ */ N(ld, { lang: m.lang, translations: m.translations, children: /* @__PURE__ */ U(
      Cu,
      {
        data: r,
        isLoading: !!d,
        config: m,
        onRangeChange: e,
        onVisibleViewportChange: a,
        onZoomChange: o,
        defaultStartDate: D,
        onFilterData: i,
        onClearFilterData: c,
        children: [
          /* @__PURE__ */ N(
            Ym,
            {
              $showScroll: !!r.length,
              id: mt,
              ref: v,
              className: "scheduler-outside-wrapper",
              children: /* @__PURE__ */ N(Rm, { className: "scheduler-inner-wrapper", children: /* @__PURE__ */ N(
                gd,
                {
                  data: r,
                  onTileClick: s,
                  topBarWidth: b ?? 0,
                  onItemClick: l,
                  toggleTheme: w,
                  editable: m.editable,
                  onTileDragEnd: _,
                  searchValue: f,
                  onSearchChange: p,
                  defaultSearchValue: h
                }
              ) })
            }
          ),
          /* @__PURE__ */ N(
            Qm,
            {
              isOpen: T,
              pendingUpdate: g,
              onConfirm: F,
              onCancel: H,
              dateFormat: m.dateFormat,
              timeFormat: m.timeFormat
            }
          ),
          /* @__PURE__ */ N(
            r0,
            {
              isVisible: L,
              message: "Schedule updated successfully",
              onUndo: Z,
              onDismiss: q,
              duration: 5e3
            }
          )
        ]
      }
    ) }) })
  ] });
}, n0 = $.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ $intent: r, theme: n }) => r === "next" ? `1px solid ${n.colors.border}` : "none"};
`, a0 = $.button`
  margin-top: 0px;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid ${({ theme: r }) => r.colors.accent};
  border-radius: 4px;
  font-size: 14px;
  color: ${({ theme: r }) => r.colors.accent};
  line-height: 150%;
  letter-spacing: 1px;
  cursor: pointer;
  opacity: ${({ $isVisible: r }) => r ? "1" : "0"};
  pointer-events: ${({ $isVisible: r }) => r ? "auto" : "none"};
  &:hover {
    transition: 0.5s ease;
    background-color: ${({ theme: r }) => r.colors.hover};
  }
`, o0 = $.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, s0 = $.p`
  ${wr}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`, Qs = ({
  $intent: r,
  onClick: n,
  icon: t,
  $isVisible: e,
  pageNum: a,
  pagesAmount: o
}) => {
  const { loadNext: s, loadPrevious: i } = xr(), c = r === "next" ? `${s} ${a + 2}/${o}` : `${i} ${a}/${o}`;
  return /* @__PURE__ */ N(n0, { $intent: r, className: "pagination-button-wrapper", children: /* @__PURE__ */ U(a0, { onClick: n, $isVisible: e, className: "pagination-button", children: [
    t && /* @__PURE__ */ N(o0, { className: "pagination-button-icon", children: t }),
    /* @__PURE__ */ N(s0, { className: "pagination-button-text", children: c })
  ] }) });
}, i0 = $.div`
  min-width: ${Fe + "px"};
  max-width: ${Fe + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: r }) => r.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, c0 = $.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: 124px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${Fe}px;
  background-color: ${({ theme: r }) => r.colors.background};
  z-index: 3;
`, l0 = $.input`
  height: 100%;
  width: calc(100% - 44px);
  background-color: transparent;
  color: ${({ theme: r }) => r.colors.textPrimary};
  padding: 7px 0 7px 12px;
  border: 0;
  outline: none;
  &::placeholder {
    color: ${({ theme: r }) => r.colors.placeholder};
  }
`, u0 = $.div`
  margin-left: 10px;
  height: 36px;
  width: calc(100% - 20px); //20px = 10px margin each side
  background-color: ${({ theme: r }) => r.colors.primary};
  border: 1px solid
    ${({ theme: r, $isFocused: n }) => n ? r.colors.accent : r.colors.border};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    margin-left: auto;
    margin-right: 12px;
    height: 24px;
    width: 24px;
  }
`, d0 = $.div`
  display: flex;
  align-items: ${({ rows: r }) => r > 1 ? "start" : "center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${$e}px;
  height: calc(${$e}px * ${({ rows: r }) => r});
  border-top: 1px solid ${({ theme: r }) => r.colors.border};
  transition: 0.5s ease;
  cursor: ${({ $clickable: r }) => r ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: r }) => r.colors.hover};
  }
`, f0 = $.div`
  display: flex;
  align-items: center;
`, p0 = $.div`
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`, h0 = $.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, m0 = $.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, qs = $.p`
  margin: 0;
  padding: 0;
  font-size: ${({ $isMain: r }) => r ? 0.75 + "rem" : 0.625 + "rem"};
  letter-spacing: ${({ $isMain: r }) => r ? "1px" : 0.5 + "px"};
  line-height: ${({ $isMain: r }) => r ? 1.125 + "rem" : 0.75 + "rem"};
  color: ${({ $isMain: r, theme: n }) => r ? n.colors.textPrimary : n.colors.placeholder};
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 144px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
`, v0 = ({ id: r, item: n, rows: t, onItemClick: e }) => /* @__PURE__ */ N(
  d0,
  {
    title: n.title + " | " + n.subtitle,
    $clickable: typeof e == "function" ? "true" : "false",
    rows: t,
    onClick: () => e == null ? void 0 : e({ id: r, label: n }),
    className: "left-column-item-wrapper",
    children: /* @__PURE__ */ U(f0, { className: "left-column-item-inner", children: [
      /* @__PURE__ */ N(p0, { className: "left-column-item-image-wrapper", children: n.icon ? /* @__PURE__ */ N(h0, { src: n.icon, alt: "Icon", className: "left-column-item-image" }) : /* @__PURE__ */ N(Le, { iconName: "defaultAvatar" }) }),
      /* @__PURE__ */ U(m0, { className: "left-column-item-text-wrapper", children: [
        /* @__PURE__ */ N(qs, { $isMain: !0, className: "left-column-item-title", children: n.title }),
        /* @__PURE__ */ N(qs, { className: "left-column-item-subtitle", children: n.subtitle })
      ] })
    ] })
  }
), g0 = ({
  data: r,
  rows: n,
  onLoadNext: t,
  onLoadPrevious: e,
  pageNum: a,
  pagesAmount: o,
  searchInputValue: s,
  onSearchInputChange: i,
  onItemClick: c
}) => {
  const [l, u] = ve(!1), { search: d } = xr(), f = () => u((p) => !p);
  return /* @__PURE__ */ U(i0, { className: "left-column-wrapper", children: [
    /* @__PURE__ */ U(c0, { className: "left-column-header", children: [
      /* @__PURE__ */ U(u0, { $isFocused: l, className: "left-column-search-wrapper", children: [
        /* @__PURE__ */ N(
          l0,
          {
            placeholder: d,
            value: s,
            onChange: i,
            onFocus: f,
            onBlur: f,
            className: "left-column-search-input"
          }
        ),
        /* @__PURE__ */ N(Le, { iconName: "search" })
      ] }),
      /* @__PURE__ */ N(
        Qs,
        {
          $intent: "previous",
          $isVisible: a !== 0,
          onClick: e,
          icon: /* @__PURE__ */ N(Le, { iconName: "arrowUp", width: "16", height: "16" }),
          pageNum: a,
          pagesAmount: o
        }
      )
    ] }),
    r.map((p, h) => /* @__PURE__ */ N(
      v0,
      {
        id: p.id,
        item: p.label,
        rows: n[h],
        onItemClick: c
      },
      p.id
    )),
    /* @__PURE__ */ N(
      Qs,
      {
        $intent: "next",
        $isVisible: a !== o - 1,
        onClick: t,
        icon: /* @__PURE__ */ N(Le, { iconName: "arrowDown", width: "16", height: "16" }),
        pageNum: a,
        pagesAmount: o
      }
    )
  ] });
}, y0 = $.div`
  width: 388px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ $position: r }) => r === "left" ? 0 : "auto"};
  right: ${({ $position: r }) => r === "right" ? 0 : "auto"};
  background-color: ${({ theme: r }) => r.colors.secondary};
  opacity: 0.7;
  overflow: hidden;
  z-index: 1;
`, w0 = Fr`
from{
    left: -100%;
}
to{
    left: 100%;
}`, b0 = $.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${w0} 1s infinite;
`, Us = ({ isLoading: r, $position: n }) => r ? /* @__PURE__ */ N(y0, { $position: n, className: "loader-wrapper", children: /* @__PURE__ */ N(b0, { className: "loader-walker" }) }) : null, wt = (r, n) => {
  const {
    ctx: t,
    x: e,
    y: a,
    width: o,
    height: s,
    textYPos: i,
    label: c,
    font: l,
    isBottomRow: u,
    fillStyle: d,
    topText: f,
    bottomText: p,
    labelBetweenCells: h
  } = r;
  if (t.beginPath(), t.strokeStyle = n.colors.border, t.setLineDash([]), c && l && i) {
    t.fillStyle = n.colors.gridBackground, t.fillRect(e, a, o, s), h ? (t.moveTo(e, a), t.lineTo(e + o, a), t.stroke(), t.moveTo(e, a + s), t.lineTo(e + o, a + s), t.stroke(), t.moveTo(e + o / 2, a + s), t.lineTo(e + o / 2, a + s - 5), t.stroke()) : t.strokeRect(e + 0.5, a + 0.5, o, s), t.font = l;
    const m = e + o / 2 - t.measureText(c).width / 2;
    t.textBaseline = "middle", t.fillStyle = n.colors.placeholder, t.fillText(c, m, i);
  }
  if (u && d && f && p) {
    t.fillStyle = d, t.fillRect(e, a, o, s), t.strokeRect(e + 0.5, a + 0.5, o, s), t.font = f.font;
    const m = e + o / 2 - t.measureText(f.label).width / 2;
    t.fillStyle = f.color, t.fillText(f.label, m, f.y), t.font = p.font;
    const v = e + o / 2 - t.measureText(p.label).width / 2;
    t.fillStyle = p.color, t.fillText(p.label, v, p.y);
  }
}, _c = (r, n) => {
  const { isCurrent: t, isBusinessDay: e, $variant: a } = r;
  return a === "yearView" ? t ? n.colors.tertiary : n.colors.gridBackground : t || !e ? n.colors.secondary : n.colors.primary;
}, za = (r, n) => {
  const { isCurrent: t, isBusinessDay: e, $variant: a } = r;
  return t ? a === "bottomRow" ? n.colors.placeholder : n.colors.accent : e ? a === "bottomRow" ? n.colors.placeholder : n.colors.textPrimary : n.colors.placeholder;
}, D0 = (r, n, t, e) => {
  const a = lr - At / Hl, o = lr - At / Bl, s = gt + br;
  let i = 0;
  for (let c = 0; c < n; c++) {
    const l = Ri(
      W(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(c, "days")
    );
    wt(
      {
        ctx: r,
        x: i,
        y: s,
        width: Ye,
        height: At,
        isBottomRow: !0,
        fillStyle: _c(
          {
            isCurrent: l.isCurrentDay,
            isBusinessDay: l.isBusinessDay
          },
          e
        ),
        topText: {
          y: a,
          label: l.dayName.toUpperCase(),
          font: ze.bottomRow.name,
          color: za(
            { isCurrent: l.isCurrentDay, isBusinessDay: l.isBusinessDay },
            e
          )
        },
        bottomText: {
          y: o,
          label: `${l.dayOfMonth}`,
          font: ze.bottomRow.number,
          color: za(
            {
              isCurrent: l.isCurrentDay,
              isBusinessDay: l.isBusinessDay,
              $variant: "bottomRow"
            },
            e
          )
        }
      },
      e
    ), i += Ye;
  }
}, x0 = (r, n, t, e) => {
  let a = -(t.dayOfMonth - 1) * tt;
  const o = gt;
  let i = t.month;
  for (let c = 0; c < n; c++) {
    i >= Ia && (i = 0);
    const l = Yi(t, c) * tt;
    wt(
      {
        ctx: r,
        x: a,
        y: o,
        width: l,
        height: br,
        textYPos: Ni,
        label: W().month(i).format("MMMM").toUpperCase(),
        font: ze.bottomRow.number
      },
      e
    ), a += l, i++;
  }
}, k0 = (r, n, t) => {
  let a = 0, o = 0, s = 0, i = W(
    `${n.year}-${n.month + 1}-${n.dayOfMonth}`
  ).month();
  a = -n.dayOfMonth * Ye + Ye;
  for (let c = 0; c < Ia; c++)
    i > Ia - 1 && (i = 0, s++), o = W(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(c, "months").daysInMonth() * Ye, wt(
      {
        ctx: r,
        x: a,
        y: 0,
        width: o,
        height: gt,
        textYPos: to,
        label: W(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).month(i).format("MMMM").toUpperCase() + ` ${W(`${n.year + s}-${n.month + 1}-${n.dayOfMonth}`).month(i).format("YYYY")}`,
        font: ze.topRow
      },
      t
    ), a += o, i++;
}, M0 = (r, n, t, e) => {
  const a = 7 * Ye, o = gt, s = r.canvas.width / a + a, i = n.weekOfYear;
  let c = 0;
  for (let l = 0; l < s; l++) {
    const u = W(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).day();
    let d = (i + l) % Fo;
    d <= 0 && (d += Fo), u !== 1 && l === 0 && (c = -u * Ye + Ye), wt(
      {
        ctx: r,
        x: c,
        y: o,
        width: a,
        height: br,
        textYPos: Ni,
        label: `${t.toUpperCase()} ${d}`,
        font: ze.middleRow
      },
      e
    ), c += a;
  }
}, _0 = (r, n, t, e, a) => {
  const o = lr - At / 1.6, s = lr - At / 4.5, i = gt + br;
  let c = 0;
  for (let l = 0; l < n; l++) {
    const u = W(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      l,
      "weeks"
    ), d = u.isSame(W(), "week");
    wt(
      {
        ctx: r,
        x: c,
        y: i,
        width: ht,
        height: At,
        isBottomRow: !0,
        fillStyle: _c({ isCurrent: d, $variant: "yearView" }, a),
        topText: {
          y: o,
          label: u.isoWeek().toString(),
          font: ze.bottomRow.name,
          color: za({ isCurrent: d }, a)
        },
        bottomText: {
          y: s,
          label: e.toUpperCase(),
          font: ze.middleRow,
          color: a.colors.placeholder
        }
      },
      a
    ), c += ht;
  }
}, C0 = (r, n, t, e) => {
  const o = n.year, s = r.canvas.width * 2;
  let i = 0, c = 0, l = (Bo(o) - t + 1) * tt, u = 0;
  for (; i + u <= s; )
    c > 0 && (l = Bo(o + c) * tt), u + l > s && c > 0 && (l = Math.ceil((s - u) / tt) * tt), wt(
      {
        ctx: r,
        x: i,
        y: 0,
        width: l,
        height: gt,
        textYPos: to,
        label: (o + c).toString(),
        font: ze.topRow
      },
      e
    ), i += l, u += l, c++;
}, S0 = (r, n, t, e, a) => {
  const o = Math.floor(n / Tn) + 2, s = Tn * Oe;
  let l = -W(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ).hour() * Oe + 0.5 * Oe;
  for (let u = 0; u < o; u++) {
    const d = W(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(u, "day").format(a).toUpperCase();
    wt(
      {
        ctx: r,
        x: l,
        y: ur,
        width: s,
        height: Yr,
        textYPos: ur + Yr / 2 + 2,
        label: d,
        font: ze.bottomRow.number
      },
      e
    ), l += s;
  }
}, E0 = (r, n, t, e) => {
  const a = Math.ceil(n / Tn), o = W(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), s = o.add(a - 1, "days"), i = o.month(), c = s.add(1, "day").month(), l = i === c ? 1 : 2;
  let u = 0.5 * Oe;
  for (let d = 0; d < l; d++) {
    const f = W(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), h = W(`${t.year}-${t.month + d + 1}-01T:23:59:59`).endOf("month"), m = h.format("MMMM").toUpperCase(), v = h.diff(f, "hour") + 1, b = d === 0 ? v * Oe : n * Oe;
    wt(
      {
        ctx: r,
        x: u,
        y: 0,
        width: b,
        height: ur,
        textYPos: to,
        label: m,
        font: ze.topRow
      },
      e
    ), u += b;
  }
}, P0 = (r, n, t, e, a) => {
  let o = 0;
  const s = ur + Yr, i = W(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ), c = Oe;
  for (let l = 0; l < n; l++) {
    const u = i.add(l, "hours").format(a).toUpperCase();
    wt(
      {
        ctx: r,
        x: o,
        y: s,
        width: c,
        height: $a,
        label: u,
        font: ze.bottomRow.number,
        textYPos: ur + Yr + $a / 2 + 2,
        labelBetweenCells: !0
      },
      e
    ), o += Oe;
  }
}, O0 = (r, n, t, e, a, o, s, i = "dddd DD.MM.YYYY", c = "HH:00") => {
  switch (n) {
    case 0:
      C0(r, e, o, s), x0(r, t, e, s), _0(r, t, e, a, s);
      break;
    case 1:
      k0(r, e, s), M0(r, e, a, s), D0(r, t, e, s);
      break;
    case 2:
      E0(r, t, e, s), S0(r, t, e, s, i), P0(r, t, e, s, c);
      break;
  }
}, T0 = $.div`
  position: sticky;
  top: 0;
  z-index: 1;
`, N0 = $.div`
  height: ${lr}px;
  display: block;
`, Y0 = $.canvas``, R0 = ({ zoom: r, topBarWidth: n, showThemeToggle: t, toggleTheme: e }) => {
  const { week: a } = xr(), { date: o, cols: s, dayOfYear: i, startDate: c, config: l } = Dr(), { dateFormat: u, timeFormat: d } = l, f = Me(null), p = Ut(), h = de(
    (m) => {
      const v = oo(), C = (r === 2 ? Wl : lr) + 1;
      $i(m, v, C), O0(m, r, s, c, a, i, p, u, d);
    },
    [s, i, c, a, r, p, u, d]
  );
  return ge(() => {
    if (!f.current) return;
    const m = f.current.getContext("2d");
    if (!m) return;
    const v = () => h(m);
    return window.addEventListener("resize", v), () => window.removeEventListener("resize", v);
  }, [h]), ge(() => {
    const m = f.current;
    if (!m) return;
    m.style.letterSpacing = "1px";
    const v = m.getContext("2d");
    v && h(v);
  }, [o, r, h]), /* @__PURE__ */ U(T0, { className: "header-outer-wrapper", children: [
    /* @__PURE__ */ N(hm, { width: n, showThemeToggle: t, toggleTheme: e }),
    /* @__PURE__ */ N(N0, { id: Vl, className: "header-wrapper", children: /* @__PURE__ */ N(Y0, { ref: f, className: "header-canvas" }) })
  ] });
}, L0 = (r, n, t) => {
  let e;
  switch (t) {
    case 0:
      e = tt;
      break;
    case 2:
      e = Oe;
      break;
    default:
      e = Ye;
  }
  const a = () => {
    let o;
    switch (t) {
      case 2:
        o = (r.startDate.diff(n.startDate, "minute") / ke + 1) * e - e / 2;
        break;
      default:
        o = (r.startDate.diff(n.startDate, "day") + 1) * e;
    }
    return Math.max(0, o);
  };
  if (r.startDate.isAfter(n.startDate) && r.endDate.isBefore(n.endDate)) {
    let o;
    switch (t) {
      case 2:
        o = r.endDate.diff(r.startDate, "minute") / ke * e;
        break;
      default:
        o = r.endDate.diff(r.startDate, "day") * e + e;
    }
    return { x: a(), width: o };
  }
  if (r.startDate.isBefore(n.startDate) && r.endDate.isBefore(n.endDate)) {
    let o;
    switch (t) {
      case 2:
        o = r.endDate.diff(n.startDate, "minute") / ke * e + 0.5 * e;
        break;
      default:
        o = r.endDate.diff(n.startDate, "day") * e + e;
    }
    return { x: a(), width: o };
  }
  if (r.startDate.isAfter(n.startDate) && r.endDate.isAfter(n.endDate)) {
    let o;
    switch (t) {
      case 2:
        o = n.endDate.diff(r.startDate, "minute") / ke * e;
        break;
      default:
        o = n.endDate.diff(r.startDate, "day") * e + e;
    }
    return { x: a(), width: o };
  }
  if (r.startDate.isBefore(n.startDate) && r.endDate.isAfter(n.endDate)) {
    let o;
    switch (t) {
      case 2:
        o = n.endDate.diff(n.startDate, "minute") / ke * e;
        break;
      default:
        o = n.endDate.diff(n.startDate, "day") * e + e;
    }
    return { x: a(), width: o };
  }
  return { x: a(), width: 0 };
}, $0 = (r, n, t, e, a, o) => {
  const s = r * $e + jl, i = n.hour(), c = t.hour();
  let l, u, d, f;
  switch (o) {
    case 2: {
      l = W(e), u = W(a), d = W(n).hour(i).minute(0), f = W(t).hour(c).minute(0);
      break;
    }
    default: {
      l = W(e).hour(0).minute(0), u = W(a).hour(23).minute(59), d = n, f = t;
      break;
    }
  }
  return {
    ...L0(
      { startDate: l, endDate: u },
      { startDate: d, endDate: f },
      o
    ),
    y: s
  };
}, I0 = (r) => {
  if (!r) return "white";
  const n = [];
  for (let a = 1; a < 6; a += 2)
    n.push(parseInt(r.slice(a, a + 2), 16) / 255);
  const t = n.map(
    (a) => a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2] > 0.5 ? "black" : "white";
}, F0 = (r, n) => {
  let t;
  switch (n) {
    case 0:
      t = tt;
      break;
    case 2:
      t = Oe;
      break;
    default:
      t = Ye;
  }
  if (n === 2) {
    const e = r / t, a = Math.floor(e), o = Math.round((e - a) * ke);
    return { days: 0, hours: a, minutes: o };
  } else
    return { days: Math.round(r / t), hours: 0, minutes: 0 };
}, nn = (r, n, t) => {
  const e = F0(n, t);
  let a = W(r);
  return e.days !== 0 && (a = a.add(e.days, "day")), e.hours !== 0 && (a = a.add(e.hours, "hour")), e.minutes !== 0 && (a = a.add(e.minutes, "minute")), a.toDate();
}, Ks = (r, n) => {
  const t = W(r);
  switch (n) {
    case 2:
      return t.startOf("hour").toDate();
    case 1:
      return t.startOf("day").toDate();
    case 0:
    default:
      return t.startOf("day").toDate();
  }
}, Qa = $.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 8px;
  cursor: ew-resize;
  opacity: 0;
  transition: opacity 0.15s ease;
  z-index: 2;

  ${({ $position: r }) => r === "left" ? Zt`
          left: 0;
          border-radius: 4px 0 0 4px;
        ` : Zt`
          right: 0;
          border-radius: 0 4px 4px 0;
        `}

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${({ $position: r }) => r === "left" ? "left: 2px;" : "right: 2px;"}
    width: 4px;
    height: 24px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 2px;
  }
`, A0 = $.button`
  ${wr}
  height: ${Zl}px;
  position: absolute;
  outline: none;
  border: none;
  border-radius: 4px;
  text-align: left;
  color: ${({ theme: r }) => r.colors.textPrimary};
  width: 100%;
  cursor: ${({ $editable: r }) => r ? "grab" : "pointer"};
  transition: box-shadow 0.15s ease, transform 0.1s ease;
  user-select: none;

  ${({ $isDragging: r }) => r && Zt`
      cursor: grabbing;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
      z-index: 100;
      opacity: 0.9;
    `}

  ${({ $editable: r }) => r && Zt`
      &:hover {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

        ${Qa} {
          opacity: 1;
        }
      }
    `}
`, W0 = $.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
  pointer-events: none;
`, Gs = $.p`
  ${wr}
  ${Oi}
  display: inline;
  font-weight: ${({ $bold: r }) => r ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, H0 = $.p`
  ${wr}
  ${Oi}
`, B0 = $.div`
  position: sticky;
  left: ${Fe + 16}px;
  overflow: hidden;
`, V0 = 5, Xs = {
  isDragging: !1,
  dragType: null,
  startX: 0,
  startY: 0,
  currentDeltaX: 0,
  originalStartDate: /* @__PURE__ */ new Date(),
  originalEndDate: /* @__PURE__ */ new Date()
}, j0 = ({ row: r, data: n, zoom: t, onTileClick: e, editable: a = !1, onTileDragEnd: o }) => {
  const { date: s } = Dr(), i = ao(s, t), { y: c, x: l, width: u } = $0(
    r,
    i.startDate,
    i.endDate,
    n.startDate,
    n.endDate,
    t
  ), { colors: d } = Ut(), [f, p] = ve(Xs), h = Me(!1), m = Me(!1), v = de(
    (w, g) => {
      a && (w.preventDefault(), w.stopPropagation(), p({
        isDragging: !1,
        // Will become true after threshold
        dragType: g,
        startX: w.clientX,
        startY: w.clientY,
        currentDeltaX: 0,
        originalStartDate: n.startDate,
        originalEndDate: n.endDate
      }), h.current = !1, m.current = !1);
    },
    [a, n.startDate, n.endDate]
  ), b = de(
    (w) => {
      if (!f.dragType) return;
      const g = w.clientX - f.startX, y = w.clientY - f.startY;
      if (!h.current) {
        if (Math.sqrt(g * g + y * y) < V0) return;
        h.current = !0, m.current = !0, p((R) => ({ ...R, isDragging: !0 }));
      }
      p((T) => ({ ...T, currentDeltaX: g }));
    },
    [f.dragType, f.startX, f.startY]
  ), C = de(() => {
    if (f.dragType) {
      if (h.current && f.currentDeltaX !== 0 && o) {
        let w = f.originalStartDate, g = f.originalEndDate;
        switch (f.dragType) {
          case "move":
            w = nn(f.originalStartDate, f.currentDeltaX, t), g = nn(f.originalEndDate, f.currentDeltaX, t);
            break;
          case "resize-left":
            w = nn(f.originalStartDate, f.currentDeltaX, t), w >= f.originalEndDate && (w = new Date(f.originalEndDate.getTime() - 36e5));
            break;
          case "resize-right":
            g = nn(f.originalEndDate, f.currentDeltaX, t), g <= f.originalStartDate && (g = new Date(f.originalStartDate.getTime() + 36e5));
            break;
        }
        w = Ks(w, t), g = Ks(g, t), o({
          id: n.id,
          startDate: w,
          endDate: g,
          originalStartDate: f.originalStartDate,
          originalEndDate: f.originalEndDate,
          title: n.title,
          subtitle: n.subtitle
        });
      }
      p(Xs), h.current = !1;
    }
  }, [f, t, o, n.id]);
  ge(() => {
    if (f.dragType)
      return window.addEventListener("mousemove", b), window.addEventListener("mouseup", C), () => {
        window.removeEventListener("mousemove", b), window.removeEventListener("mouseup", C);
      };
  }, [f.dragType, b, C]);
  const D = de(
    (w) => {
      if (m.current) {
        w.preventDefault(), w.stopPropagation(), m.current = !1;
        return;
      }
      e == null || e(n);
    },
    [e, n]
  );
  let O = l, x = u;
  if (f.isDragging)
    switch (f.dragType) {
      case "move":
        O = l + f.currentDeltaX;
        break;
      case "resize-left":
        O = l + f.currentDeltaX, x = u - f.currentDeltaX;
        break;
      case "resize-right":
        x = u + f.currentDeltaX;
        break;
    }
  return /* @__PURE__ */ U(
    A0,
    {
      style: {
        left: `${O}px`,
        top: `${c}px`,
        backgroundColor: `${n.bgColor ?? d.defaultTile}`,
        width: `${Math.max(x, 20)}px`,
        color: I0(n.bgColor ?? "")
      },
      onClick: D,
      onMouseDown: (w) => v(w, "move"),
      className: "tile-wrapper",
      $isDragging: f.isDragging,
      $editable: a,
      children: [
        a && /* @__PURE__ */ U(Ir, { children: [
          /* @__PURE__ */ N(
            Qa,
            {
              $position: "left",
              onMouseDown: (w) => {
                w.stopPropagation(), v(w, "resize-left");
              },
              className: "tile-resize-handle-left"
            }
          ),
          /* @__PURE__ */ N(
            Qa,
            {
              $position: "right",
              onMouseDown: (w) => {
                w.stopPropagation(), v(w, "resize-right");
              },
              className: "tile-resize-handle-right"
            }
          )
        ] }),
        /* @__PURE__ */ N(W0, { className: "tile-text-wrapper", children: /* @__PURE__ */ U(B0, { className: "tile-sticky-wrapper", children: [
          /* @__PURE__ */ N(Gs, { $bold: "600", className: "tile-title", children: n.title }),
          /* @__PURE__ */ N(Gs, { className: "tile-subtitle", children: n.subtitle }),
          /* @__PURE__ */ N(H0, { className: "tile-description", children: n.description })
        ] }) })
      ]
    }
  );
}, Z0 = ({ data: r, zoom: n, onTileClick: t, editable: e, onTileDragEnd: a }) => {
  const o = de(() => {
    let s = 0;
    return r.map((i, c) => (c > 0 && (s += Math.max(r[c - 1].data.length, 1)), i.data.map(
      (l, u) => l.map((d) => /* @__PURE__ */ N(
        j0,
        {
          row: u + s,
          data: d,
          zoom: n,
          onTileClick: t,
          editable: e,
          onTileDragEnd: a
        },
        d.id
      ))
    ))).flat(2);
  }, [r, t, n, e, a]);
  return /* @__PURE__ */ N(Ir, { children: o() });
};
$.div`
  box-sizing: border-box;
  font-family: Inter;
  padding: 0 0.5rem;
  height: 125px;
  position: fixed;
  top: ${({ $isExpanded: r }) => r ? 0 : "-129px"};
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 999;
`;
$.div`
  width: 100%;
  margin-top: 2px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.5px;
  background-color: white;
`;
$.label`
  font-size: 14px;
`;
$.input`
  width: 45px;
  height: 18px;
  font-size: 14px;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  background-color: white;
  outline: none;
`;
$.input`
  height: 18px;
  width: 18px;
`;
$.button`
  width: 100%;
  font-size: 14px;
  outline: none;
  background-color: #fff;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  color: #0a11eb;
  cursor: pointer;
  &:hover {
    background-color: #c9e5ff;
  }
`;
$.form`
  background-color: rgba(255, 255, 255, 0.75);
`;
const z0 = $.div`
  padding: 8px 16px;
  position: absolute;
  background-color: ${({ theme: r }) => r.colors.tooltip};
  border-radius: 8px;
  z-index: 3;
  transition: all 0.25s;
  transition-timing-function: ease-out;
  pointer-events: none;
`, Q0 = $.div`
  width: 100%;
`, q0 = $.div`
  position: absolute;
  width: 0;
  height: 0;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-top: 14px solid ${({ theme: r }) => r.colors.tooltip};
`, U0 = $.div``, Js = $.div`
  display: flex;
  align-items: center;
  &:first-child {
    margin-bottom: 8px;
  }
`, ei = $.div`
  ${wr}
  display: flex;
  align-items: center;
  font-size: 10px;
  color: ${({ theme: r }) => r.colors.textSecondary};
  line-height: 12px;
  letter-spacing: 0.5px;
`, ti = $.p`
  ${wr}
  margin-left: 4px;
  color: ${({ theme: r }) => r.colors.textSecondary};
`, K0 = $.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: r }) => r.colors.warning};
`, G0 = ({ tooltipData: r, zoom: n }) => {
  const { taken: t, free: e, over: a } = xr(), { coords: o, disposition: s } = r, i = Me(null);
  let c = ht;
  switch (n) {
    case 0:
      c = ht;
      break;
    case 1:
      c = Ye;
      break;
    case 2:
      c = Oe;
      break;
  }
  return qa(() => {
    if (!i.current) return;
    const { width: l } = i.current.getBoundingClientRect();
    let u;
    switch (n) {
      case 2:
        u = l / 2 + c;
        break;
      default:
        u = l / 2 + c / 2;
        break;
    }
    i.current.style.left = `${o.x - u}px`, i.current.style.top = `${o.y + 8}px`;
  }, [o.x, c, s.overtime, o.y, n]), /* @__PURE__ */ U(z0, { ref: i, className: "tooltip-wrapper", children: [
    /* @__PURE__ */ N(Q0, { className: "tooltip-content", children: /* @__PURE__ */ U(U0, { className: "tooltip-content-inner", children: [
      /* @__PURE__ */ U(Js, { className: "tooltip-taken-info", children: [
        /* @__PURE__ */ N(Le, { iconName: "calendarWarning", height: "14" }),
        /* @__PURE__ */ U(ei, { className: "tooltip-text-wrapper", children: [
          /* @__PURE__ */ N(ti, { className: "tooltip-text", children: `${t}: ${s.taken.hours}h ${s.taken.minutes}m` }),
          (s.overtime.hours > 0 || s.overtime.minutes > 0) && /* @__PURE__ */ U(Ir, { children: [
            " ",
            "-",
            " ",
            /* @__PURE__ */ N(K0, { className: "tooltip-overtime-warning", children: `${s.overtime.hours}h ${s.overtime.minutes}m ${a}` })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ U(Js, { className: "tooltip-free-info", children: [
        /* @__PURE__ */ N(Le, { iconName: "calendarFree", height: "14" }),
        /* @__PURE__ */ N(ei, { className: "tooltip-text-wrapper", children: /* @__PURE__ */ N(ti, { className: "tooltip-text", children: `${e}: ${s.free.hours}h ${s.free.minutes}m` }) })
      ] })
    ] }) }),
    /* @__PURE__ */ N(q0, { className: "tooltip-beak" })
  ] });
}, X0 = $.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 26px;
  background-color: ${({ theme: r }) => r.colors.secondary};
  border-radius: 30px;
  position: relative;
  transition: background-color 0.3s ease;
`, J0 = $.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme: r }) => r.colors.button};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({ theme: r }) => r.mode === "light" ? "4px" : "34px"};
  transition: left 0.3s ease;
`, ev = $.div`
  position: absolute;
  top: 5px;
  left: ${({ theme: r }) => r.mode === "light" ? "38px" : "4px"};
  transition: left 0.3s ease;
`, tv = ({ toggleTheme: r }) => {
  const n = Ut();
  return /* @__PURE__ */ U(X0, { onClick: r, className: "theme-toggle-container", children: [
    /* @__PURE__ */ N(J0, { className: "theme-toggle-circle" }),
    /* @__PURE__ */ N(ev, { className: "theme-toggle-icon", children: n.mode === "light" ? /* @__PURE__ */ N(Le, { iconName: "sun", height: "16", width: "16" }) : /* @__PURE__ */ N(Le, { iconName: "moon", height: "16", width: "16" }) })
  ] });
};
export {
  sv as Scheduler
};

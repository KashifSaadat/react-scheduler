var dc = Object.defineProperty;
var fc = (r, n, t) => n in r ? dc(r, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[n] = t;
var F = (r, n, t) => fc(r, typeof n != "symbol" ? n + "" : n, t);
import { jsx as L, jsxs as re, Fragment as Fa } from "react/jsx-runtime";
import * as E from "react";
import k, { useRef as Ne, useContext as Fn, useMemo as wt, useDebugValue as ho, createElement as Hs, createContext as Bs, useState as Se, useCallback as Te, useEffect as De, forwardRef as pc, useLayoutEffect as Wa, cloneElement as Vs, createRef as Mt, Component as xe } from "react";
import * as hc from "react-dom";
import mc from "react-dom";
var ke = function() {
  return ke = Object.assign || function(n) {
    for (var t, e = 1, a = arguments.length; e < a; e++) {
      t = arguments[e];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
    }
    return n;
  }, ke.apply(this, arguments);
};
function _t(r, n, t) {
  if (t || arguments.length === 2) for (var e = 0, a = n.length, o; e < a; e++)
    (o || !(e in n)) && (o || (o = Array.prototype.slice.call(n, 0, e)), o[e] = n[e]);
  return r.concat(o || Array.prototype.slice.call(n));
}
function vc(r) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = r(t)), n[t];
  };
}
var gc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, yc = /* @__PURE__ */ vc(
  function(r) {
    return gc.test(r) || r.charCodeAt(0) === 111 && r.charCodeAt(1) === 110 && r.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Fr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function qe(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var le = "-ms-", Or = "-moz-", te = "-webkit-", Zs = "comm", Wn = "rule", Ha = "decl", wc = "@import", js = "@keyframes", bc = "@layer", zs = Math.abs, Ba = String.fromCharCode, ya = Object.assign;
function Dc(r, n) {
  return we(r, 0) ^ 45 ? (((n << 2 ^ we(r, 0)) << 2 ^ we(r, 1)) << 2 ^ we(r, 2)) << 2 ^ we(r, 3) : 0;
}
function Qs(r) {
  return r.trim();
}
function ot(r, n) {
  return (r = n.exec(r)) ? r[0] : r;
}
function q(r, n, t) {
  return r.replace(n, t);
}
function Gr(r, n, t) {
  return r.indexOf(n, t);
}
function we(r, n) {
  return r.charCodeAt(n) | 0;
}
function rr(r, n, t) {
  return r.slice(n, t);
}
function Ke(r) {
  return r.length;
}
function qs(r) {
  return r.length;
}
function Cr(r, n) {
  return n.push(r), r;
}
function kc(r, n) {
  return r.map(n).join("");
}
function mo(r, n) {
  return r.filter(function(t) {
    return !ot(t, n);
  });
}
var Hn = 1, nr = 1, Us = 0, He = 0, ye = 0, vr = "";
function Bn(r, n, t, e, a, o, s, i) {
  return { value: r, root: n, parent: t, type: e, props: a, children: o, line: Hn, column: nr, length: s, return: "", siblings: i };
}
function yt(r, n) {
  return ya(Bn("", null, null, "", null, null, 0, r.siblings), r, { length: -r.length }, n);
}
function qt(r) {
  for (; r.root; )
    r = yt(r.root, { children: [r] });
  Cr(r, r.siblings);
}
function xc() {
  return ye;
}
function Mc() {
  return ye = He > 0 ? we(vr, --He) : 0, nr--, ye === 10 && (nr = 1, Hn--), ye;
}
function Ze() {
  return ye = He < Us ? we(vr, He++) : 0, nr++, ye === 10 && (nr = 1, Hn++), ye;
}
function Lt() {
  return we(vr, He);
}
function Xr() {
  return He;
}
function Vn(r, n) {
  return rr(vr, r, n);
}
function wa(r) {
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
function _c(r) {
  return Hn = nr = 1, Us = Ke(vr = r), He = 0, [];
}
function Cc(r) {
  return vr = "", r;
}
function na(r) {
  return Qs(Vn(He - 1, ba(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function Sc(r) {
  for (; (ye = Lt()) && ye < 33; )
    Ze();
  return wa(r) > 2 || wa(ye) > 3 ? "" : " ";
}
function Ec(r, n) {
  for (; --n && Ze() && !(ye < 48 || ye > 102 || ye > 57 && ye < 65 || ye > 70 && ye < 97); )
    ;
  return Vn(r, Xr() + (n < 6 && Lt() == 32 && Ze() == 32));
}
function ba(r) {
  for (; Ze(); )
    switch (ye) {
      // ] ) " '
      case r:
        return He;
      // " '
      case 34:
      case 39:
        r !== 34 && r !== 39 && ba(ye);
        break;
      // (
      case 40:
        r === 41 && ba(r);
        break;
      // \
      case 92:
        Ze();
        break;
    }
  return He;
}
function Pc(r, n) {
  for (; Ze() && r + ye !== 57; )
    if (r + ye === 84 && Lt() === 47)
      break;
  return "/*" + Vn(n, He - 1) + "*" + Ba(r === 47 ? r : Ze());
}
function Oc(r) {
  for (; !wa(Lt()); )
    Ze();
  return Vn(r, He);
}
function Tc(r) {
  return Cc(Jr("", null, null, null, [""], r = _c(r), 0, [0], r));
}
function Jr(r, n, t, e, a, o, s, i, c) {
  for (var l = 0, u = 0, d = s, f = 0, p = 0, h = 0, m = 1, v = 1, g = 1, _ = 0, x = "", T = a, C = o, D = e, y = x; v; )
    switch (h = _, _ = Ze()) {
      // (
      case 40:
        if (h != 108 && we(y, d - 1) == 58) {
          Gr(y += q(na(_), "&", "&\f"), "&\f", zs(l ? i[l - 1] : 0)) != -1 && (g = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        y += na(_);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        y += Sc(h);
        break;
      // \
      case 92:
        y += Ec(Xr() - 1, 7);
        continue;
      // /
      case 47:
        switch (Lt()) {
          case 42:
          case 47:
            Cr(Nc(Pc(Ze(), Xr()), n, t, c), c);
            break;
          default:
            y += "/";
        }
        break;
      // {
      case 123 * m:
        i[l++] = Ke(y) * g;
      // } ; \0
      case 125 * m:
      case 59:
      case 0:
        switch (_) {
          // \0 }
          case 0:
          case 125:
            v = 0;
          // ;
          case 59 + u:
            g == -1 && (y = q(y, /\f/g, "")), p > 0 && Ke(y) - d && Cr(p > 32 ? go(y + ";", e, t, d - 1, c) : go(q(y, " ", "") + ";", e, t, d - 2, c), c);
            break;
          // @ ;
          case 59:
            y += ";";
          // { rule/at-rule
          default:
            if (Cr(D = vo(y, n, t, l, u, a, i, x, T = [], C = [], d, o), o), _ === 123)
              if (u === 0)
                Jr(y, n, D, D, T, o, d, i, C);
              else
                switch (f === 99 && we(y, 3) === 110 ? 100 : f) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Jr(r, D, D, e && Cr(vo(r, D, D, 0, 0, a, i, x, a, T = [], d, C), C), a, C, d, i, e ? T : C);
                    break;
                  default:
                    Jr(y, D, D, D, [""], C, 0, i, C);
                }
        }
        l = u = p = 0, m = g = 1, x = y = "", d = s;
        break;
      // :
      case 58:
        d = 1 + Ke(y), p = h;
      default:
        if (m < 1) {
          if (_ == 123)
            --m;
          else if (_ == 125 && m++ == 0 && Mc() == 125)
            continue;
        }
        switch (y += Ba(_), _ * m) {
          // &
          case 38:
            g = u > 0 ? 1 : (y += "\f", -1);
            break;
          // ,
          case 44:
            i[l++] = (Ke(y) - 1) * g, g = 1;
            break;
          // @
          case 64:
            Lt() === 45 && (y += na(Ze())), f = Lt(), u = d = Ke(x = y += Oc(Xr())), _++;
            break;
          // -
          case 45:
            h === 45 && Ke(y) == 2 && (m = 0);
        }
    }
  return o;
}
function vo(r, n, t, e, a, o, s, i, c, l, u, d) {
  for (var f = a - 1, p = a === 0 ? o : [""], h = qs(p), m = 0, v = 0, g = 0; m < e; ++m)
    for (var _ = 0, x = rr(r, f + 1, f = zs(v = s[m])), T = r; _ < h; ++_)
      (T = Qs(v > 0 ? p[_] + " " + x : q(x, /&\f/g, p[_]))) && (c[g++] = T);
  return Bn(r, n, t, a === 0 ? Wn : i, c, l, u, d);
}
function Nc(r, n, t, e) {
  return Bn(r, n, t, Zs, Ba(xc()), rr(r, 2, -2), 0, e);
}
function go(r, n, t, e, a) {
  return Bn(r, n, t, Ha, rr(r, 0, e), rr(r, e + 1, -1), e, a);
}
function Ks(r, n, t) {
  switch (Dc(r, n)) {
    // color-adjust
    case 5103:
      return te + "print-" + r + r;
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
      return te + r + r;
    // tab-size
    case 4789:
      return Or + r + r;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return te + r + Or + r + le + r + r;
    // writing-mode
    case 5936:
      switch (we(r, n + 11)) {
        // vertical-l(r)
        case 114:
          return te + r + le + q(r, /[svh]\w+-[tblr]{2}/, "tb") + r;
        // vertical-r(l)
        case 108:
          return te + r + le + q(r, /[svh]\w+-[tblr]{2}/, "tb-rl") + r;
        // horizontal(-)tb
        case 45:
          return te + r + le + q(r, /[svh]\w+-[tblr]{2}/, "lr") + r;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return te + r + le + r + r;
    // order
    case 6165:
      return te + r + le + "flex-" + r + r;
    // align-items
    case 5187:
      return te + r + q(r, /(\w+).+(:[^]+)/, te + "box-$1$2" + le + "flex-$1$2") + r;
    // align-self
    case 5443:
      return te + r + le + "flex-item-" + q(r, /flex-|-self/g, "") + (ot(r, /flex-|baseline/) ? "" : le + "grid-row-" + q(r, /flex-|-self/g, "")) + r;
    // align-content
    case 4675:
      return te + r + le + "flex-line-pack" + q(r, /align-content|flex-|-self/g, "") + r;
    // flex-shrink
    case 5548:
      return te + r + le + q(r, "shrink", "negative") + r;
    // flex-basis
    case 5292:
      return te + r + le + q(r, "basis", "preferred-size") + r;
    // flex-grow
    case 6060:
      return te + "box-" + q(r, "-grow", "") + te + r + le + q(r, "grow", "positive") + r;
    // transition
    case 4554:
      return te + q(r, /([^-])(transform)/g, "$1" + te + "$2") + r;
    // cursor
    case 6187:
      return q(q(q(r, /(zoom-|grab)/, te + "$1"), /(image-set)/, te + "$1"), r, "") + r;
    // background, background-image
    case 5495:
    case 3959:
      return q(r, /(image-set\([^]*)/, te + "$1$`$1");
    // justify-content
    case 4968:
      return q(q(r, /(.+:)(flex-)?(.*)/, te + "box-pack:$3" + le + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + te + r + r;
    // justify-self
    case 4200:
      if (!ot(r, /flex-|baseline/)) return le + "grid-column-align" + rr(r, n) + r;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return le + q(r, "template-", "") + r;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return t && t.some(function(e, a) {
        return n = a, ot(e.props, /grid-\w+-end/);
      }) ? ~Gr(r + (t = t[n].value), "span", 0) ? r : le + q(r, "-start", "") + r + le + "grid-row-span:" + (~Gr(t, "span", 0) ? ot(t, /\d+/) : +ot(t, /\d+/) - +ot(r, /\d+/)) + ";" : le + q(r, "-start", "") + r;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return t && t.some(function(e) {
        return ot(e.props, /grid-\w+-start/);
      }) ? r : le + q(q(r, "-end", "-span"), "span ", "") + r;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return q(r, /(.+)-inline(.+)/, te + "$1$2") + r;
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
      if (Ke(r) - 1 - n > 6)
        switch (we(r, n + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (we(r, n + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return q(r, /(.+:)(.+)-([^]+)/, "$1" + te + "$2-$3$1" + Or + (we(r, n + 3) == 108 ? "$3" : "$2-$3")) + r;
          // (s)tretch
          case 115:
            return ~Gr(r, "stretch", 0) ? Ks(q(r, "stretch", "fill-available"), n, t) + r : r;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return q(r, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, a, o, s, i, c, l) {
        return le + a + ":" + o + l + (s ? le + a + "-span:" + (i ? c : +c - +o) + l : "") + r;
      });
    // position: sticky
    case 4949:
      if (we(r, n + 6) === 121)
        return q(r, ":", ":" + te) + r;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (we(r, we(r, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return q(r, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + te + (we(r, 14) === 45 ? "inline-" : "") + "box$3$1" + te + "$2$3$1" + le + "$2box$3") + r;
        // (inline-)?gri(d)
        case 100:
          return q(r, ":", ":" + le) + r;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return q(r, "scroll-", "scroll-snap-") + r;
  }
  return r;
}
function wn(r, n) {
  for (var t = "", e = 0; e < r.length; e++)
    t += n(r[e], e, r, n) || "";
  return t;
}
function Yc(r, n, t, e) {
  switch (r.type) {
    case bc:
      if (r.children.length) break;
    case wc:
    case Ha:
      return r.return = r.return || r.value;
    case Zs:
      return "";
    case js:
      return r.return = r.value + "{" + wn(r.children, e) + "}";
    case Wn:
      if (!Ke(r.value = r.props.join(","))) return "";
  }
  return Ke(t = wn(r.children, e)) ? r.return = r.value + "{" + t + "}" : "";
}
function Rc(r) {
  var n = qs(r);
  return function(t, e, a, o) {
    for (var s = "", i = 0; i < n; i++)
      s += r[i](t, e, a, o) || "";
    return s;
  };
}
function Lc(r) {
  return function(n) {
    n.root || (n = n.return) && r(n);
  };
}
function Ic(r, n, t, e) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case Ha:
        r.return = Ks(r.value, r.length, t);
        return;
      case js:
        return wn([yt(r, { value: q(r.value, "@", "@" + te) })], e);
      case Wn:
        if (r.length)
          return kc(t = r.props, function(a) {
            switch (ot(a, e = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                qt(yt(r, { props: [q(a, /:(read-\w+)/, ":" + Or + "$1")] })), qt(yt(r, { props: [a] })), ya(r, { props: mo(t, e) });
                break;
              // :placeholder
              case "::placeholder":
                qt(yt(r, { props: [q(a, /:(plac\w+)/, ":" + te + "input-$1")] })), qt(yt(r, { props: [q(a, /:(plac\w+)/, ":" + Or + "$1")] })), qt(yt(r, { props: [q(a, /:(plac\w+)/, le + "input-$1")] })), qt(yt(r, { props: [a] })), ya(r, { props: mo(t, e) });
                break;
            }
            return "";
          });
    }
}
var $c = {
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
}, Wt = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Gs = "active", Xs = "data-styled-version", Zn = "6.1.19", Va = `/*!sc*/
`, bn = typeof window < "u" && typeof document < "u", Ac = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Fc = {}, yo = /invalid hook call/i, Wr = /* @__PURE__ */ new Set(), Js = function(r, n) {
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
        yo.test(s) ? (o = !1, Wr.delete(e)) : a.apply(void 0, _t([s], i, !1));
      }, Ne(), o && !Wr.has(e) && (console.warn(e), Wr.add(e));
    } catch (s) {
      yo.test(s.message) && Wr.delete(e);
    } finally {
      console.error = a;
    }
  }
}, jn = Object.freeze([]), ar = Object.freeze({});
function ei(r, n, t) {
  return t === void 0 && (t = ar), r.theme !== t.theme && r.theme || n || t.theme;
}
var Da = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Wc = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Hc = /(^-|-$)/g;
function wo(r) {
  return r.replace(Wc, "-").replace(Hc, "");
}
var Bc = /(a)(d)/gi, Hr = 52, bo = function(r) {
  return String.fromCharCode(r + (r > 25 ? 39 : 97));
};
function ka(r) {
  var n, t = "";
  for (n = Math.abs(r); n > Hr; n = n / Hr | 0) t = bo(n % Hr) + t;
  return (bo(n % Hr) + t).replace(Bc, "$1-$2");
}
var aa, ti = 5381, Tt = function(r, n) {
  for (var t = n.length; t; ) r = 33 * r ^ n.charCodeAt(--t);
  return r;
}, ri = function(r) {
  return Tt(ti, r);
};
function Za(r) {
  return ka(ri(r) >>> 0);
}
function ni(r) {
  return process.env.NODE_ENV !== "production" && typeof r == "string" && r || r.displayName || r.name || "Component";
}
function oa(r) {
  return typeof r == "string" && (process.env.NODE_ENV === "production" || r.charAt(0) === r.charAt(0).toLowerCase());
}
var ai = typeof Symbol == "function" && Symbol.for, oi = ai ? Symbol.for("react.memo") : 60115, Vc = ai ? Symbol.for("react.forward_ref") : 60112, Zc = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, jc = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, si = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, zc = ((aa = {})[Vc] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, aa[oi] = si, aa);
function Do(r) {
  return ("type" in (n = r) && n.type.$$typeof) === oi ? si : "$$typeof" in r ? zc[r.$$typeof] : Zc;
  var n;
}
var Qc = Object.defineProperty, qc = Object.getOwnPropertyNames, ko = Object.getOwnPropertySymbols, Uc = Object.getOwnPropertyDescriptor, Kc = Object.getPrototypeOf, xo = Object.prototype;
function ii(r, n, t) {
  if (typeof n != "string") {
    if (xo) {
      var e = Kc(n);
      e && e !== xo && ii(r, e, t);
    }
    var a = qc(n);
    ko && (a = a.concat(ko(n)));
    for (var o = Do(r), s = Do(n), i = 0; i < a.length; ++i) {
      var c = a[i];
      if (!(c in jc || t && t[c] || s && c in s || o && c in o)) {
        var l = Uc(n, c);
        try {
          Qc(r, c, l);
        } catch {
        }
      }
    }
  }
  return r;
}
function Ht(r) {
  return typeof r == "function";
}
function ja(r) {
  return typeof r == "object" && "styledComponentId" in r;
}
function Nt(r, n) {
  return r && n ? "".concat(r, " ").concat(n) : r || n || "";
}
function Dn(r, n) {
  if (r.length === 0) return "";
  for (var t = r[0], e = 1; e < r.length; e++) t += r[e];
  return t;
}
function or(r) {
  return r !== null && typeof r == "object" && r.constructor.name === Object.name && !("props" in r && r.$$typeof);
}
function xa(r, n, t) {
  if (t === void 0 && (t = !1), !t && !or(r) && !Array.isArray(r)) return n;
  if (Array.isArray(n)) for (var e = 0; e < n.length; e++) r[e] = xa(r[e], n[e]);
  else if (or(n)) for (var e in n) r[e] = xa(r[e], n[e]);
  return r;
}
function za(r, n) {
  Object.defineProperty(r, "toString", { value: n });
}
var Gc = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Xc() {
  for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
  for (var t = r[0], e = [], a = 1, o = r.length; a < o; a += 1) e.push(r[a]);
  return e.forEach(function(s) {
    t = t.replace(/%[a-z]/, s);
  }), t;
}
function tt(r) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r, " for more information.").concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")) : new Error(Xc.apply(void 0, _t([Gc[r]], n, !1)).trim());
}
var Jc = function() {
  function r(n) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = n;
  }
  return r.prototype.indexOfGroup = function(n) {
    for (var t = 0, e = 0; e < n; e++) t += this.groupSizes[e];
    return t;
  }, r.prototype.insertRules = function(n, t) {
    if (n >= this.groupSizes.length) {
      for (var e = this.groupSizes, a = e.length, o = a; n >= o; ) if ((o <<= 1) < 0) throw tt(16, "".concat(n));
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
    for (var e = this.groupSizes[n], a = this.indexOfGroup(n), o = a + e, s = a; s < o; s++) t += "".concat(this.tag.getRule(s)).concat(Va);
    return t;
  }, r;
}(), el = 1 << 30, en = /* @__PURE__ */ new Map(), kn = /* @__PURE__ */ new Map(), tn = 1, Br = function(r) {
  if (en.has(r)) return en.get(r);
  for (; kn.has(tn); ) tn++;
  var n = tn++;
  if (process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > el)) throw tt(16, "".concat(n));
  return en.set(r, n), kn.set(n, r), n;
}, tl = function(r, n) {
  tn = n + 1, en.set(r, n), kn.set(n, r);
}, rl = "style[".concat(Wt, "][").concat(Xs, '="').concat(Zn, '"]'), nl = new RegExp("^".concat(Wt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), al = function(r, n, t) {
  for (var e, a = t.split(","), o = 0, s = a.length; o < s; o++) (e = a[o]) && r.registerName(n, e);
}, ol = function(r, n) {
  for (var t, e = ((t = n.textContent) !== null && t !== void 0 ? t : "").split(Va), a = [], o = 0, s = e.length; o < s; o++) {
    var i = e[o].trim();
    if (i) {
      var c = i.match(nl);
      if (c) {
        var l = 0 | parseInt(c[1], 10), u = c[2];
        l !== 0 && (tl(u, l), al(r, u, c[3]), r.getTag().insertRules(l, a)), a.length = 0;
      } else a.push(i);
    }
  }
}, Mo = function(r) {
  for (var n = document.querySelectorAll(rl), t = 0, e = n.length; t < e; t++) {
    var a = n[t];
    a && a.getAttribute(Wt) !== Gs && (ol(r, a), a.parentNode && a.parentNode.removeChild(a));
  }
};
function sl() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var ci = function(r) {
  var n = document.head, t = r || n, e = document.createElement("style"), a = function(i) {
    var c = Array.from(i.querySelectorAll("style[".concat(Wt, "]")));
    return c[c.length - 1];
  }(t), o = a !== void 0 ? a.nextSibling : null;
  e.setAttribute(Wt, Gs), e.setAttribute(Xs, Zn);
  var s = sl();
  return s && e.setAttribute("nonce", s), t.insertBefore(e, o), e;
}, il = function() {
  function r(n) {
    this.element = ci(n), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, a = 0, o = e.length; a < o; a++) {
        var s = e[a];
        if (s.ownerNode === t) return s;
      }
      throw tt(17);
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
}(), cl = function() {
  function r(n) {
    this.element = ci(n), this.nodes = this.element.childNodes, this.length = 0;
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
}(), ll = function() {
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
}(), _o = bn, ul = { isServer: !bn, useCSSOMInjection: !Ac }, xn = function() {
  function r(n, t, e) {
    n === void 0 && (n = ar), t === void 0 && (t = {});
    var a = this;
    this.options = ke(ke({}, ul), n), this.gs = t, this.names = new Map(e), this.server = !!n.isServer, !this.server && bn && _o && (_o = !1, Mo(this)), za(this, function() {
      return function(o) {
        for (var s = o.getTag(), i = s.length, c = "", l = function(d) {
          var f = function(g) {
            return kn.get(g);
          }(d);
          if (f === void 0) return "continue";
          var p = o.names.get(f), h = s.getGroup(d);
          if (p === void 0 || !p.size || h.length === 0) return "continue";
          var m = "".concat(Wt, ".g").concat(d, '[id="').concat(f, '"]'), v = "";
          p !== void 0 && p.forEach(function(g) {
            g.length > 0 && (v += "".concat(g, ","));
          }), c += "".concat(h).concat(m, '{content:"').concat(v, '"}').concat(Va);
        }, u = 0; u < i; u++) l(u);
        return c;
      }(a);
    });
  }
  return r.registerId = function(n) {
    return Br(n);
  }, r.prototype.rehydrate = function() {
    !this.server && bn && Mo(this);
  }, r.prototype.reconstructWithOptions = function(n, t) {
    return t === void 0 && (t = !0), new r(ke(ke({}, this.options), n), this.gs, t && this.names || void 0);
  }, r.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 0) + 1;
  }, r.prototype.getTag = function() {
    return this.tag || (this.tag = (n = function(t) {
      var e = t.useCSSOMInjection, a = t.target;
      return t.isServer ? new ll(a) : e ? new il(a) : new cl(a);
    }(this.options), new Jc(n)));
    var n;
  }, r.prototype.hasNameForId = function(n, t) {
    return this.names.has(n) && this.names.get(n).has(t);
  }, r.prototype.registerName = function(n, t) {
    if (Br(n), this.names.has(n)) this.names.get(n).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(n, e);
    }
  }, r.prototype.insertRules = function(n, t, e) {
    this.registerName(n, t), this.getTag().insertRules(Br(n), e);
  }, r.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, r.prototype.clearRules = function(n) {
    this.getTag().clearGroup(Br(n)), this.clearNames(n);
  }, r.prototype.clearTag = function() {
    this.tag = void 0;
  }, r;
}(), dl = /&/g, fl = /^\s*\/\/.*$/gm;
function li(r, n) {
  return r.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(e) {
      return "".concat(n, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = li(t.children, n)), t;
  });
}
function pl(r) {
  var n, t, e, a = ar, o = a.options, s = o === void 0 ? ar : o, i = a.plugins, c = i === void 0 ? jn : i, l = function(f, p, h) {
    return h.startsWith(t) && h.endsWith(t) && h.replaceAll(t, "").length > 0 ? ".".concat(n) : f;
  }, u = c.slice();
  u.push(function(f) {
    f.type === Wn && f.value.includes("&") && (f.props[0] = f.props[0].replace(dl, t).replace(e, l));
  }), s.prefix && u.push(Ic), u.push(Yc);
  var d = function(f, p, h, m) {
    p === void 0 && (p = ""), h === void 0 && (h = ""), m === void 0 && (m = "&"), n = m, t = p, e = new RegExp("\\".concat(t, "\\b"), "g");
    var v = f.replace(fl, ""), g = Tc(h || p ? "".concat(h, " ").concat(p, " { ").concat(v, " }") : v);
    s.namespace && (g = li(g, s.namespace));
    var _ = [];
    return wn(g, Rc(u.concat(Lc(function(x) {
      return _.push(x);
    })))), _;
  };
  return d.hash = c.length ? c.reduce(function(f, p) {
    return p.name || tt(15), Tt(f, p.name);
  }, ti).toString() : "", d;
}
var hl = new xn(), Ma = pl(), ui = k.createContext({ shouldForwardProp: void 0, styleSheet: hl, stylis: Ma });
ui.Consumer;
k.createContext(void 0);
function _a() {
  return Fn(ui);
}
var Ca = function() {
  function r(n, t) {
    var e = this;
    this.inject = function(a, o) {
      o === void 0 && (o = Ma);
      var s = e.name + o.hash;
      a.hasNameForId(e.id, s) || a.insertRules(e.id, s, o(e.rules, s, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = t, za(this, function() {
      throw tt(12, String(e.name));
    });
  }
  return r.prototype.getName = function(n) {
    return n === void 0 && (n = Ma), this.name + n.hash;
  }, r;
}(), ml = function(r) {
  return r >= "A" && r <= "Z";
};
function Co(r) {
  for (var n = "", t = 0; t < r.length; t++) {
    var e = r[t];
    if (t === 1 && e === "-" && r[0] === "-") return r;
    ml(e) ? n += "-" + e.toLowerCase() : n += e;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var di = function(r) {
  return r == null || r === !1 || r === "";
}, fi = function(r) {
  var n, t, e = [];
  for (var a in r) {
    var o = r[a];
    r.hasOwnProperty(a) && !di(o) && (Array.isArray(o) && o.isCss || Ht(o) ? e.push("".concat(Co(a), ":"), o, ";") : or(o) ? e.push.apply(e, _t(_t(["".concat(a, " {")], fi(o), !1), ["}"], !1)) : e.push("".concat(Co(a), ": ").concat((n = a, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || n in $c || n.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function Dt(r, n, t, e) {
  if (di(r)) return [];
  if (ja(r)) return [".".concat(r.styledComponentId)];
  if (Ht(r)) {
    if (!Ht(o = r) || o.prototype && o.prototype.isReactComponent || !n) return [r];
    var a = r(n);
    return process.env.NODE_ENV === "production" || typeof a != "object" || Array.isArray(a) || a instanceof Ca || or(a) || a === null || console.error("".concat(ni(r), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Dt(a, n, t, e);
  }
  var o;
  return r instanceof Ca ? t ? (r.inject(t, e), [r.getName(e)]) : [r] : or(r) ? fi(r) : Array.isArray(r) ? Array.prototype.concat.apply(jn, r.map(function(s) {
    return Dt(s, n, t, e);
  })) : [r.toString()];
}
function pi(r) {
  for (var n = 0; n < r.length; n += 1) {
    var t = r[n];
    if (Ht(t) && !ja(t)) return !1;
  }
  return !0;
}
var vl = ri(Zn), gl = function() {
  function r(n, t, e) {
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (e === void 0 || e.isStatic) && pi(n), this.componentId = t, this.baseHash = Tt(vl, t), this.baseStyle = e, xn.registerId(t);
  }
  return r.prototype.generateAndInjectStyles = function(n, t, e) {
    var a = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, t, e) : "";
    if (this.isStatic && !e.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) a = Nt(a, this.staticRulesId);
    else {
      var o = Dn(Dt(this.rules, n, t, e)), s = ka(Tt(this.baseHash, o) >>> 0);
      if (!t.hasNameForId(this.componentId, s)) {
        var i = e(o, ".".concat(s), void 0, this.componentId);
        t.insertRules(this.componentId, s, i);
      }
      a = Nt(a, s), this.staticRulesId = s;
    }
    else {
      for (var c = Tt(this.baseHash, e.hash), l = "", u = 0; u < this.rules.length; u++) {
        var d = this.rules[u];
        if (typeof d == "string") l += d, process.env.NODE_ENV !== "production" && (c = Tt(c, d));
        else if (d) {
          var f = Dn(Dt(d, n, t, e));
          c = Tt(c, f + u), l += f;
        }
      }
      if (l) {
        var p = ka(c >>> 0);
        t.hasNameForId(this.componentId, p) || t.insertRules(this.componentId, p, e(l, ".".concat(p), void 0, this.componentId)), a = Nt(a, p);
      }
    }
    return a;
  }, r;
}(), sr = k.createContext(void 0);
sr.Consumer;
function zt() {
  var r = Fn(sr);
  if (!r) throw tt(18);
  return r;
}
function yl(r) {
  var n = k.useContext(sr), t = wt(function() {
    return function(e, a) {
      if (!e) throw tt(14);
      if (Ht(e)) {
        var o = e(a);
        if (process.env.NODE_ENV !== "production" && (o === null || Array.isArray(o) || typeof o != "object")) throw tt(7);
        return o;
      }
      if (Array.isArray(e) || typeof e != "object") throw tt(8);
      return a ? ke(ke({}, a), e) : e;
    }(r.theme, n);
  }, [r.theme, n]);
  return r.children ? k.createElement(sr.Provider, { value: t }, r.children) : null;
}
var sa = {}, So = /* @__PURE__ */ new Set();
function wl(r, n, t) {
  var e = ja(r), a = r, o = !oa(r), s = n.attrs, i = s === void 0 ? jn : s, c = n.componentId, l = c === void 0 ? function(T, C) {
    var D = typeof T != "string" ? "sc" : wo(T);
    sa[D] = (sa[D] || 0) + 1;
    var y = "".concat(D, "-").concat(Za(Zn + D + sa[D]));
    return C ? "".concat(C, "-").concat(y) : y;
  }(n.displayName, n.parentComponentId) : c, u = n.displayName, d = u === void 0 ? function(T) {
    return oa(T) ? "styled.".concat(T) : "Styled(".concat(ni(T), ")");
  }(r) : u, f = n.displayName && n.componentId ? "".concat(wo(n.displayName), "-").concat(n.componentId) : n.componentId || l, p = e && a.attrs ? a.attrs.concat(i).filter(Boolean) : i, h = n.shouldForwardProp;
  if (e && a.shouldForwardProp) {
    var m = a.shouldForwardProp;
    if (n.shouldForwardProp) {
      var v = n.shouldForwardProp;
      h = function(T, C) {
        return m(T, C) && v(T, C);
      };
    } else h = m;
  }
  var g = new gl(t, f, e ? a.componentStyle : void 0);
  function _(T, C) {
    return function(D, y, w) {
      var O = D.attrs, Y = D.componentStyle, R = D.defaultProps, $ = D.foldedComponentIds, H = D.styledComponentId, N = D.target, P = k.useContext(sr), b = _a(), S = D.shouldForwardProp || b.shouldForwardProp;
      process.env.NODE_ENV !== "production" && ho(H);
      var M = ei(y, P, R) || ar, I = function(de, ve, j) {
        for (var ee, K = ke(ke({}, ve), { className: void 0, theme: j }), ce = 0; ce < de.length; ce += 1) {
          var ge = Ht(ee = de[ce]) ? ee(K) : ee;
          for (var _e in ge) K[_e] = _e === "className" ? Nt(K[_e], ge[_e]) : _e === "style" ? ke(ke({}, K[_e]), ge[_e]) : ge[_e];
        }
        return ve.className && (K.className = Nt(K.className, ve.className)), K;
      }(O, y, M), V = I.as || N, z = {};
      for (var Q in I) I[Q] === void 0 || Q[0] === "$" || Q === "as" || Q === "theme" && I.theme === M || (Q === "forwardedAs" ? z.as = I.forwardedAs : S && !S(Q, V) || (z[Q] = I[Q], S || process.env.NODE_ENV !== "development" || yc(Q) || So.has(Q) || !Da.has(V) || (So.add(Q), console.warn('styled-components: it looks like an unknown prop "'.concat(Q, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ae = function(de, ve) {
        var j = _a(), ee = de.generateAndInjectStyles(ve, j.styleSheet, j.stylis);
        return process.env.NODE_ENV !== "production" && ho(ee), ee;
      }(Y, I);
      process.env.NODE_ENV !== "production" && D.warnTooManyClasses && D.warnTooManyClasses(ae);
      var ie = Nt($, H);
      return ae && (ie += " " + ae), I.className && (ie += " " + I.className), z[oa(V) && !Da.has(V) ? "class" : "className"] = ie, w && (z.ref = w), Hs(V, z);
    }(x, T, C);
  }
  _.displayName = d;
  var x = k.forwardRef(_);
  return x.attrs = p, x.componentStyle = g, x.displayName = d, x.shouldForwardProp = h, x.foldedComponentIds = e ? Nt(a.foldedComponentIds, a.styledComponentId) : "", x.styledComponentId = f, x.target = e ? a.target : r, Object.defineProperty(x, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(T) {
    this._foldedDefaultProps = e ? function(C) {
      for (var D = [], y = 1; y < arguments.length; y++) D[y - 1] = arguments[y];
      for (var w = 0, O = D; w < O.length; w++) xa(C, O[w], !0);
      return C;
    }({}, a.defaultProps, T) : T;
  } }), process.env.NODE_ENV !== "production" && (Js(d, f), x.warnTooManyClasses = /* @__PURE__ */ function(T, C) {
    var D = {}, y = !1;
    return function(w) {
      if (!y && (D[w] = !0, Object.keys(D).length >= 200)) {
        var O = C ? ' with the id of "'.concat(C, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(T).concat(O, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), y = !0, D = {};
      }
    };
  }(d, f)), za(x, function() {
    return ".".concat(x.styledComponentId);
  }), o && ii(x, r, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), x;
}
function Eo(r, n) {
  for (var t = [r[0]], e = 0, a = n.length; e < a; e += 1) t.push(n[e], r[e + 1]);
  return t;
}
var Po = function(r) {
  return Object.assign(r, { isCss: !0 });
};
function Qa(r) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
  if (Ht(r) || or(r)) return Po(Dt(Eo(jn, _t([r], n, !0))));
  var e = r;
  return n.length === 0 && e.length === 1 && typeof e[0] == "string" ? Dt(e) : Po(Dt(Eo(e, n)));
}
function Sa(r, n, t) {
  if (t === void 0 && (t = ar), !n) throw tt(1, n);
  var e = function(a) {
    for (var o = [], s = 1; s < arguments.length; s++) o[s - 1] = arguments[s];
    return r(n, t, Qa.apply(void 0, _t([a], o, !1)));
  };
  return e.attrs = function(a) {
    return Sa(r, n, ke(ke({}, t), { attrs: Array.prototype.concat(t.attrs, a).filter(Boolean) }));
  }, e.withConfig = function(a) {
    return Sa(r, n, ke(ke({}, t), a));
  }, e;
}
var hi = function(r) {
  return Sa(wl, r);
}, B = hi;
Da.forEach(function(r) {
  B[r] = hi(r);
});
var bl = function() {
  function r(n, t) {
    this.rules = n, this.componentId = t, this.isStatic = pi(n), xn.registerId(this.componentId + 1);
  }
  return r.prototype.createStyles = function(n, t, e, a) {
    var o = a(Dn(Dt(this.rules, t, e, a)), ""), s = this.componentId + n;
    e.insertRules(s, s, o);
  }, r.prototype.removeStyles = function(n, t) {
    t.clearRules(this.componentId + n);
  }, r.prototype.renderStyles = function(n, t, e, a) {
    n > 2 && xn.registerId(this.componentId + n), this.removeStyles(n, e), this.createStyles(n, t, e, a);
  }, r;
}();
function Dl(r) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
  var e = Qa.apply(void 0, _t([r], n, !1)), a = "sc-global-".concat(Za(JSON.stringify(e))), o = new bl(e, a);
  process.env.NODE_ENV !== "production" && Js(a);
  var s = function(c) {
    var l = _a(), u = k.useContext(sr), d = k.useRef(l.styleSheet.allocateGSInstance(a)).current;
    return process.env.NODE_ENV !== "production" && k.Children.count(c.children) && console.warn("The global style component ".concat(a, " was given child JSX. createGlobalStyle does not render children.")), process.env.NODE_ENV !== "production" && e.some(function(f) {
      return typeof f == "string" && f.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), l.styleSheet.server && i(d, c, l.styleSheet, u, l.stylis), k.useLayoutEffect(function() {
      if (!l.styleSheet.server) return i(d, c, l.styleSheet, u, l.stylis), function() {
        return o.removeStyles(d, l.styleSheet);
      };
    }, [d, c, l.styleSheet, u, l.stylis]), null;
  };
  function i(c, l, u, d, f) {
    if (o.isStatic) o.renderStyles(c, Fc, u, f);
    else {
      var p = ke(ke({}, l), { theme: ei(l, d, s.defaultProps) });
      o.renderStyles(c, p, u, f);
    }
  }
  return k.memo(s);
}
function kl(r) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var e = Dn(Qa.apply(void 0, _t([r], n, !1))), a = Za(e);
  return new Ca(a, e);
}
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Vr = "__sc-".concat(Wt, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Vr] || (window[Vr] = 0), window[Vr] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Vr] += 1);
const Sr = "reactSchedulerOutsideWrapper", xl = Dl`

  #${Sr} {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${Sr} *,
 #${Sr} *:before,
 #${Sr} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`, Ml = {
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
}, _l = {
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
}, gr = `
margin: 0;
padding: 0;
`, mi = `
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;
B.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;
const Re = 50, pt = 24, yr = 16, It = 40, ir = It + yr + pt, Ct = 84, Ie = 56, Be = 300, st = 12, Ye = 50, cr = 24, Tr = 16, Ea = 40, Cl = cr + Tr + Ea, Oo = 1, To = 52, ze = {
  topRow: "600 14px Inter",
  middleRow: "400 10px Inter",
  bottomRow: {
    name: "600 14px Inter",
    number: "600 10px Inter"
  }
}, Jt = 3, Sl = 1.6, El = 4.5, Pa = 12, Mn = 24, Pl = "reactSchedulerCanvasHeaderWrapper", vi = "reactSchedulerCanvasWrapper", Bt = Sr, Ol = 4, Tl = 48, vt = 5, Nl = 40, No = 8, qa = pt / 2 + 2, gi = yr / 2 + pt + 1, Yo = 2, be = 60;
var rn = { exports: {} }, Yl = rn.exports, Ro;
function zn() {
  return Ro || (Ro = 1, function(r, n) {
    (function(t, e) {
      r.exports = e();
    })(Yl, function() {
      var t = 1e3, e = 6e4, a = 36e5, o = "millisecond", s = "second", i = "minute", c = "hour", l = "day", u = "week", d = "month", f = "quarter", p = "year", h = "date", m = "Invalid Date", v = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, g = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, _ = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(N) {
        var P = ["th", "st", "nd", "rd"], b = N % 100;
        return "[" + N + (P[(b - 20) % 10] || P[b] || P[0]) + "]";
      } }, x = function(N, P, b) {
        var S = String(N);
        return !S || S.length >= P ? N : "" + Array(P + 1 - S.length).join(b) + N;
      }, T = { s: x, z: function(N) {
        var P = -N.utcOffset(), b = Math.abs(P), S = Math.floor(b / 60), M = b % 60;
        return (P <= 0 ? "+" : "-") + x(S, 2, "0") + ":" + x(M, 2, "0");
      }, m: function N(P, b) {
        if (P.date() < b.date()) return -N(b, P);
        var S = 12 * (b.year() - P.year()) + (b.month() - P.month()), M = P.clone().add(S, d), I = b - M < 0, V = P.clone().add(S + (I ? -1 : 1), d);
        return +(-(S + (b - M) / (I ? M - V : V - M)) || 0);
      }, a: function(N) {
        return N < 0 ? Math.ceil(N) || 0 : Math.floor(N);
      }, p: function(N) {
        return { M: d, y: p, w: u, d: l, D: h, h: c, m: i, s, ms: o, Q: f }[N] || String(N || "").toLowerCase().replace(/s$/, "");
      }, u: function(N) {
        return N === void 0;
      } }, C = "en", D = {};
      D[C] = _;
      var y = "$isDayjsObject", w = function(N) {
        return N instanceof $ || !(!N || !N[y]);
      }, O = function N(P, b, S) {
        var M;
        if (!P) return C;
        if (typeof P == "string") {
          var I = P.toLowerCase();
          D[I] && (M = I), b && (D[I] = b, M = I);
          var V = P.split("-");
          if (!M && V.length > 1) return N(V[0]);
        } else {
          var z = P.name;
          D[z] = P, M = z;
        }
        return !S && M && (C = M), M || !S && C;
      }, Y = function(N, P) {
        if (w(N)) return N.clone();
        var b = typeof P == "object" ? P : {};
        return b.date = N, b.args = arguments, new $(b);
      }, R = T;
      R.l = O, R.i = w, R.w = function(N, P) {
        return Y(N, { locale: P.$L, utc: P.$u, x: P.$x, $offset: P.$offset });
      };
      var $ = function() {
        function N(b) {
          this.$L = O(b.locale, null, !0), this.parse(b), this.$x = this.$x || b.x || {}, this[y] = !0;
        }
        var P = N.prototype;
        return P.parse = function(b) {
          this.$d = function(S) {
            var M = S.date, I = S.utc;
            if (M === null) return /* @__PURE__ */ new Date(NaN);
            if (R.u(M)) return /* @__PURE__ */ new Date();
            if (M instanceof Date) return new Date(M);
            if (typeof M == "string" && !/Z$/i.test(M)) {
              var V = M.match(v);
              if (V) {
                var z = V[2] - 1 || 0, Q = (V[7] || "0").substring(0, 3);
                return I ? new Date(Date.UTC(V[1], z, V[3] || 1, V[4] || 0, V[5] || 0, V[6] || 0, Q)) : new Date(V[1], z, V[3] || 1, V[4] || 0, V[5] || 0, V[6] || 0, Q);
              }
            }
            return new Date(M);
          }(b), this.init();
        }, P.init = function() {
          var b = this.$d;
          this.$y = b.getFullYear(), this.$M = b.getMonth(), this.$D = b.getDate(), this.$W = b.getDay(), this.$H = b.getHours(), this.$m = b.getMinutes(), this.$s = b.getSeconds(), this.$ms = b.getMilliseconds();
        }, P.$utils = function() {
          return R;
        }, P.isValid = function() {
          return this.$d.toString() !== m;
        }, P.isSame = function(b, S) {
          var M = Y(b);
          return this.startOf(S) <= M && M <= this.endOf(S);
        }, P.isAfter = function(b, S) {
          return Y(b) < this.startOf(S);
        }, P.isBefore = function(b, S) {
          return this.endOf(S) < Y(b);
        }, P.$g = function(b, S, M) {
          return R.u(b) ? this[S] : this.set(M, b);
        }, P.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, P.valueOf = function() {
          return this.$d.getTime();
        }, P.startOf = function(b, S) {
          var M = this, I = !!R.u(S) || S, V = R.p(b), z = function(K, ce) {
            var ge = R.w(M.$u ? Date.UTC(M.$y, ce, K) : new Date(M.$y, ce, K), M);
            return I ? ge : ge.endOf(l);
          }, Q = function(K, ce) {
            return R.w(M.toDate()[K].apply(M.toDate("s"), (I ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ce)), M);
          }, ae = this.$W, ie = this.$M, de = this.$D, ve = "set" + (this.$u ? "UTC" : "");
          switch (V) {
            case p:
              return I ? z(1, 0) : z(31, 11);
            case d:
              return I ? z(1, ie) : z(0, ie + 1);
            case u:
              var j = this.$locale().weekStart || 0, ee = (ae < j ? ae + 7 : ae) - j;
              return z(I ? de - ee : de + (6 - ee), ie);
            case l:
            case h:
              return Q(ve + "Hours", 0);
            case c:
              return Q(ve + "Minutes", 1);
            case i:
              return Q(ve + "Seconds", 2);
            case s:
              return Q(ve + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, P.endOf = function(b) {
          return this.startOf(b, !1);
        }, P.$set = function(b, S) {
          var M, I = R.p(b), V = "set" + (this.$u ? "UTC" : ""), z = (M = {}, M[l] = V + "Date", M[h] = V + "Date", M[d] = V + "Month", M[p] = V + "FullYear", M[c] = V + "Hours", M[i] = V + "Minutes", M[s] = V + "Seconds", M[o] = V + "Milliseconds", M)[I], Q = I === l ? this.$D + (S - this.$W) : S;
          if (I === d || I === p) {
            var ae = this.clone().set(h, 1);
            ae.$d[z](Q), ae.init(), this.$d = ae.set(h, Math.min(this.$D, ae.daysInMonth())).$d;
          } else z && this.$d[z](Q);
          return this.init(), this;
        }, P.set = function(b, S) {
          return this.clone().$set(b, S);
        }, P.get = function(b) {
          return this[R.p(b)]();
        }, P.add = function(b, S) {
          var M, I = this;
          b = Number(b);
          var V = R.p(S), z = function(ie) {
            var de = Y(I);
            return R.w(de.date(de.date() + Math.round(ie * b)), I);
          };
          if (V === d) return this.set(d, this.$M + b);
          if (V === p) return this.set(p, this.$y + b);
          if (V === l) return z(1);
          if (V === u) return z(7);
          var Q = (M = {}, M[i] = e, M[c] = a, M[s] = t, M)[V] || 1, ae = this.$d.getTime() + b * Q;
          return R.w(ae, this);
        }, P.subtract = function(b, S) {
          return this.add(-1 * b, S);
        }, P.format = function(b) {
          var S = this, M = this.$locale();
          if (!this.isValid()) return M.invalidDate || m;
          var I = b || "YYYY-MM-DDTHH:mm:ssZ", V = R.z(this), z = this.$H, Q = this.$m, ae = this.$M, ie = M.weekdays, de = M.months, ve = M.meridiem, j = function(ce, ge, _e, Pt) {
            return ce && (ce[ge] || ce(S, I)) || _e[ge].slice(0, Pt);
          }, ee = function(ce) {
            return R.s(z % 12 || 12, ce, "0");
          }, K = ve || function(ce, ge, _e) {
            var Pt = ce < 12 ? "AM" : "PM";
            return _e ? Pt.toLowerCase() : Pt;
          };
          return I.replace(g, function(ce, ge) {
            return ge || function(_e) {
              switch (_e) {
                case "YY":
                  return String(S.$y).slice(-2);
                case "YYYY":
                  return R.s(S.$y, 4, "0");
                case "M":
                  return ae + 1;
                case "MM":
                  return R.s(ae + 1, 2, "0");
                case "MMM":
                  return j(M.monthsShort, ae, de, 3);
                case "MMMM":
                  return j(de, ae);
                case "D":
                  return S.$D;
                case "DD":
                  return R.s(S.$D, 2, "0");
                case "d":
                  return String(S.$W);
                case "dd":
                  return j(M.weekdaysMin, S.$W, ie, 2);
                case "ddd":
                  return j(M.weekdaysShort, S.$W, ie, 3);
                case "dddd":
                  return ie[S.$W];
                case "H":
                  return String(z);
                case "HH":
                  return R.s(z, 2, "0");
                case "h":
                  return ee(1);
                case "hh":
                  return ee(2);
                case "a":
                  return K(z, Q, !0);
                case "A":
                  return K(z, Q, !1);
                case "m":
                  return String(Q);
                case "mm":
                  return R.s(Q, 2, "0");
                case "s":
                  return String(S.$s);
                case "ss":
                  return R.s(S.$s, 2, "0");
                case "SSS":
                  return R.s(S.$ms, 3, "0");
                case "Z":
                  return V;
              }
              return null;
            }(ce) || V.replace(":", "");
          });
        }, P.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, P.diff = function(b, S, M) {
          var I, V = this, z = R.p(S), Q = Y(b), ae = (Q.utcOffset() - this.utcOffset()) * e, ie = this - Q, de = function() {
            return R.m(V, Q);
          };
          switch (z) {
            case p:
              I = de() / 12;
              break;
            case d:
              I = de();
              break;
            case f:
              I = de() / 3;
              break;
            case u:
              I = (ie - ae) / 6048e5;
              break;
            case l:
              I = (ie - ae) / 864e5;
              break;
            case c:
              I = ie / a;
              break;
            case i:
              I = ie / e;
              break;
            case s:
              I = ie / t;
              break;
            default:
              I = ie;
          }
          return M ? I : R.a(I);
        }, P.daysInMonth = function() {
          return this.endOf(d).$D;
        }, P.$locale = function() {
          return D[this.$L];
        }, P.locale = function(b, S) {
          if (!b) return this.$L;
          var M = this.clone(), I = O(b, S, !0);
          return I && (M.$L = I), M;
        }, P.clone = function() {
          return R.w(this.$d, this);
        }, P.toDate = function() {
          return new Date(this.valueOf());
        }, P.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, P.toISOString = function() {
          return this.$d.toISOString();
        }, P.toString = function() {
          return this.$d.toUTCString();
        }, N;
      }(), H = $.prototype;
      return Y.prototype = H, [["$ms", o], ["$s", s], ["$m", i], ["$H", c], ["$W", l], ["$M", d], ["$y", p], ["$D", h]].forEach(function(N) {
        H[N[1]] = function(P) {
          return this.$g(P, N[0], N[1]);
        };
      }), Y.extend = function(N, P) {
        return N.$i || (N(P, $, Y), N.$i = !0), Y;
      }, Y.locale = O, Y.isDayjs = w, Y.unix = function(N) {
        return Y(1e3 * N);
      }, Y.en = D[C], Y.Ls = D, Y.p = {}, Y;
    });
  }(rn)), rn.exports;
}
var Rl = zn();
const W = /* @__PURE__ */ qe(Rl), Lo = (r) => r % 4 === 0 && r % 100 > 0 || r % 400 === 0 ? 366 : 365, Ua = (r) => {
  const n = r.day();
  return n !== 0 && n !== 6;
}, yi = (r, n) => W(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(n, "months").daysInMonth(), wi = (r) => ({
  hour: r.hour(),
  dayName: r.format("ddd"),
  dayOfMonth: r.date(),
  weekOfYear: r.isoWeek(),
  month: r.month(),
  monthName: r.format("MMMM"),
  isBusinessDay: Ua(r),
  isCurrentDay: r.isSame(W(), "day"),
  year: parseInt(r.format("YYYY"))
}), Ka = (r, n, t, e, a, o, s) => {
  r.strokeStyle = s.colors.border, o ? r.fillStyle = s.colors.secondary : a ? r.fillStyle = "transparent" : r.fillStyle = s.colors.primary, r.beginPath(), r.setLineDash([]), r.fillRect(n, t, e, Ie), r.strokeRect(n + 0.5, t + 0.5, e, Ie);
}, Ll = (r, n, t, e, a) => {
  for (let o = 0; o < n; o++)
    for (let s = 0; s <= t; s++) {
      const i = W(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(
        s,
        "days"
      ), c = i.isSame(W(), "day");
      Ka(
        r,
        s * Re,
        o * Ie,
        Re,
        Ua(i),
        c,
        a
      );
    }
}, Il = (r, n, t, e) => {
  r.setLineDash([5, 5]), r.strokeStyle = e.colors.border, r.moveTo(n + 0.5, 0.5), r.lineTo(n + 0.5, t + 0.5), r.stroke();
}, $l = (r, n, t, e, a) => {
  let o = 0, s = -(e.dayOfMonth - 1) * st;
  for (let i = 0; i <= t; i++) {
    const l = W(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(
      i,
      "weeks"
    ).isSame(W(), "week");
    for (let u = 0; u < n; u++)
      Ka(r, o, u * Ie, Ct, !0, l, a);
    o += Ct;
  }
  for (let i = 0; i < t; i++) {
    const c = yi(e, i) * st;
    Il(r, s, n * Ie, a), s += c;
  }
}, Al = (r, n, t, e, a) => {
  const o = W(`${e.year}-${e.month + 1}-${e.dayOfMonth + 1}`);
  for (let s = 0; s < n; s++)
    for (let i = 0; i <= t; i++) {
      let c;
      i === Math.floor(t / 2) ? c = W() : i > Math.floor(t / 2) ? c = W().add(i - Math.floor(t / 2), "hours") : c = W().subtract(Math.floor(t / 2) - s, "hours");
      const l = o.isSame(W(), "day") && c.isSame(W(), "hour");
      Ka(
        r,
        i * Ye + Ye / 2 - 0.5,
        // -0.5 to make borders better aligned with hour axis
        s * Ie,
        Ye,
        Ua(c),
        l,
        a
      );
    }
}, Fl = (r, n, t, e, a, o) => {
  if (r.clearRect(0, 0, r.canvas.width, r.canvas.height), !!document.getElementById(vi))
    switch (n) {
      case 0:
        $l(r, t, e, a, o);
        break;
      case 1:
        Ll(r, t, e, a, o);
        break;
      case 2:
        Al(r, t, e, a, o);
        break;
    }
};
var nn = { exports: {} }, Wl = nn.exports, Io;
function Hl() {
  return Io || (Io = 1, function(r, n) {
    (function(t, e) {
      r.exports = e();
    })(Wl, function() {
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
  }(nn)), nn.exports;
}
var Bl = Hl();
const Vl = /* @__PURE__ */ qe(Bl);
var an = { exports: {} }, Zl = an.exports, $o;
function jl() {
  return $o || ($o = 1, function(r, n) {
    (function(t, e) {
      r.exports = e();
    })(Zl, function() {
      return function(t, e, a) {
        e.prototype.dayOfYear = function(o) {
          var s = Math.round((a(this).startOf("day") - a(this).startOf("year")) / 864e5) + 1;
          return o == null ? s : this.add(o - s, "day");
        };
      };
    });
  }(an)), an.exports;
}
var zl = jl();
const Ql = /* @__PURE__ */ qe(zl);
var on = { exports: {} }, ql = on.exports, Ao;
function Ul() {
  return Ao || (Ao = 1, function(r, n) {
    (function(t, e) {
      r.exports = e();
    })(ql, function() {
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
  }(on)), on.exports;
}
var Kl = Ul();
const Gl = /* @__PURE__ */ qe(Kl);
var sn = { exports: {} }, Xl = sn.exports, Fo;
function Jl() {
  return Fo || (Fo = 1, function(r, n) {
    (function(t, e) {
      r.exports = e();
    })(Xl, function() {
      return function(t, e, a) {
        e.prototype.isBetween = function(o, s, i, c) {
          var l = a(o), u = a(s), d = (c = c || "()")[0] === "(", f = c[1] === ")";
          return (d ? this.isAfter(l, i) : !this.isBefore(l, i)) && (f ? this.isBefore(u, i) : !this.isAfter(u, i)) || (d ? this.isBefore(l, i) : !this.isAfter(l, i)) && (f ? this.isAfter(u, i) : !this.isBefore(u, i));
        };
      };
    });
  }(sn)), sn.exports;
}
var eu = Jl();
const tu = /* @__PURE__ */ qe(eu);
var cn = { exports: {} }, ru = cn.exports, Wo;
function nu() {
  return Wo || (Wo = 1, function(r, n) {
    (function(t, e) {
      r.exports = e();
    })(ru, function() {
      var t, e, a = 1e3, o = 6e4, s = 36e5, i = 864e5, c = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, l = 31536e6, u = 2628e6, d = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, f = { years: l, months: u, days: i, hours: s, minutes: o, seconds: a, milliseconds: 1, weeks: 6048e5 }, p = function(D) {
        return D instanceof T;
      }, h = function(D, y, w) {
        return new T(D, w, y.$l);
      }, m = function(D) {
        return e.p(D) + "s";
      }, v = function(D) {
        return D < 0;
      }, g = function(D) {
        return v(D) ? Math.ceil(D) : Math.floor(D);
      }, _ = function(D) {
        return Math.abs(D);
      }, x = function(D, y) {
        return D ? v(D) ? { negative: !0, format: "" + _(D) + y } : { negative: !1, format: "" + D + y } : { negative: !1, format: "" };
      }, T = function() {
        function D(w, O, Y) {
          var R = this;
          if (this.$d = {}, this.$l = Y, w === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), O) return h(w * f[m(O)], this);
          if (typeof w == "number") return this.$ms = w, this.parseFromMilliseconds(), this;
          if (typeof w == "object") return Object.keys(w).forEach(function(N) {
            R.$d[m(N)] = w[N];
          }), this.calMilliseconds(), this;
          if (typeof w == "string") {
            var $ = w.match(d);
            if ($) {
              var H = $.slice(2).map(function(N) {
                return N != null ? Number(N) : 0;
              });
              return this.$d.years = H[0], this.$d.months = H[1], this.$d.weeks = H[2], this.$d.days = H[3], this.$d.hours = H[4], this.$d.minutes = H[5], this.$d.seconds = H[6], this.calMilliseconds(), this;
            }
          }
          return this;
        }
        var y = D.prototype;
        return y.calMilliseconds = function() {
          var w = this;
          this.$ms = Object.keys(this.$d).reduce(function(O, Y) {
            return O + (w.$d[Y] || 0) * f[Y];
          }, 0);
        }, y.parseFromMilliseconds = function() {
          var w = this.$ms;
          this.$d.years = g(w / l), w %= l, this.$d.months = g(w / u), w %= u, this.$d.days = g(w / i), w %= i, this.$d.hours = g(w / s), w %= s, this.$d.minutes = g(w / o), w %= o, this.$d.seconds = g(w / a), w %= a, this.$d.milliseconds = w;
        }, y.toISOString = function() {
          var w = x(this.$d.years, "Y"), O = x(this.$d.months, "M"), Y = +this.$d.days || 0;
          this.$d.weeks && (Y += 7 * this.$d.weeks);
          var R = x(Y, "D"), $ = x(this.$d.hours, "H"), H = x(this.$d.minutes, "M"), N = this.$d.seconds || 0;
          this.$d.milliseconds && (N += this.$d.milliseconds / 1e3, N = Math.round(1e3 * N) / 1e3);
          var P = x(N, "S"), b = w.negative || O.negative || R.negative || $.negative || H.negative || P.negative, S = $.format || H.format || P.format ? "T" : "", M = (b ? "-" : "") + "P" + w.format + O.format + R.format + S + $.format + H.format + P.format;
          return M === "P" || M === "-P" ? "P0D" : M;
        }, y.toJSON = function() {
          return this.toISOString();
        }, y.format = function(w) {
          var O = w || "YYYY-MM-DDTHH:mm:ss", Y = { Y: this.$d.years, YY: e.s(this.$d.years, 2, "0"), YYYY: e.s(this.$d.years, 4, "0"), M: this.$d.months, MM: e.s(this.$d.months, 2, "0"), D: this.$d.days, DD: e.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: e.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: e.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: e.s(this.$d.seconds, 2, "0"), SSS: e.s(this.$d.milliseconds, 3, "0") };
          return O.replace(c, function(R, $) {
            return $ || String(Y[R]);
          });
        }, y.as = function(w) {
          return this.$ms / f[m(w)];
        }, y.get = function(w) {
          var O = this.$ms, Y = m(w);
          return Y === "milliseconds" ? O %= 1e3 : O = Y === "weeks" ? g(O / f[Y]) : this.$d[Y], O || 0;
        }, y.add = function(w, O, Y) {
          var R;
          return R = O ? w * f[m(O)] : p(w) ? w.$ms : h(w, this).$ms, h(this.$ms + R * (Y ? -1 : 1), this);
        }, y.subtract = function(w, O) {
          return this.add(w, O, !0);
        }, y.locale = function(w) {
          var O = this.clone();
          return O.$l = w, O;
        }, y.clone = function() {
          return h(this.$ms, this);
        }, y.humanize = function(w) {
          return t().add(this.$ms, "ms").locale(this.$l).fromNow(!w);
        }, y.valueOf = function() {
          return this.asMilliseconds();
        }, y.milliseconds = function() {
          return this.get("milliseconds");
        }, y.asMilliseconds = function() {
          return this.as("milliseconds");
        }, y.seconds = function() {
          return this.get("seconds");
        }, y.asSeconds = function() {
          return this.as("seconds");
        }, y.minutes = function() {
          return this.get("minutes");
        }, y.asMinutes = function() {
          return this.as("minutes");
        }, y.hours = function() {
          return this.get("hours");
        }, y.asHours = function() {
          return this.as("hours");
        }, y.days = function() {
          return this.get("days");
        }, y.asDays = function() {
          return this.as("days");
        }, y.weeks = function() {
          return this.get("weeks");
        }, y.asWeeks = function() {
          return this.as("weeks");
        }, y.months = function() {
          return this.get("months");
        }, y.asMonths = function() {
          return this.as("months");
        }, y.years = function() {
          return this.get("years");
        }, y.asYears = function() {
          return this.as("years");
        }, D;
      }(), C = function(D, y, w) {
        return D.add(y.years() * w, "y").add(y.months() * w, "M").add(y.days() * w, "d").add(y.hours() * w, "h").add(y.minutes() * w, "m").add(y.seconds() * w, "s").add(y.milliseconds() * w, "ms");
      };
      return function(D, y, w) {
        t = w, e = w().$utils(), w.duration = function(R, $) {
          var H = w.locale();
          return h(R, { $l: H }, $);
        }, w.isDuration = p;
        var O = y.prototype.add, Y = y.prototype.subtract;
        y.prototype.add = function(R, $) {
          return p(R) ? C(this, R, 1) : O.bind(this)(R, $);
        }, y.prototype.subtract = function(R, $) {
          return p(R) ? C(this, R, -1) : Y.bind(this)(R, $);
        };
      };
    });
  }(cn)), cn.exports;
}
var au = nu();
const ou = /* @__PURE__ */ qe(au);
var ia, Ho;
function su() {
  if (Ho) return ia;
  Ho = 1;
  var r = "Expected a function", n = NaN, t = "[object Symbol]", e = /^\s+|\s+$/g, a = /^[-+]0x[0-9a-f]+$/i, o = /^0b[01]+$/i, s = /^0o[0-7]+$/i, i = parseInt, c = typeof Fr == "object" && Fr && Fr.Object === Object && Fr, l = typeof self == "object" && self && self.Object === Object && self, u = c || l || Function("return this")(), d = Object.prototype, f = d.toString, p = Math.max, h = Math.min, m = function() {
    return u.Date.now();
  };
  function v(C, D, y) {
    var w, O, Y, R, $, H, N = 0, P = !1, b = !1, S = !0;
    if (typeof C != "function")
      throw new TypeError(r);
    D = T(D) || 0, g(y) && (P = !!y.leading, b = "maxWait" in y, Y = b ? p(T(y.maxWait) || 0, D) : Y, S = "trailing" in y ? !!y.trailing : S);
    function M(j) {
      var ee = w, K = O;
      return w = O = void 0, N = j, R = C.apply(K, ee), R;
    }
    function I(j) {
      return N = j, $ = setTimeout(Q, D), P ? M(j) : R;
    }
    function V(j) {
      var ee = j - H, K = j - N, ce = D - ee;
      return b ? h(ce, Y - K) : ce;
    }
    function z(j) {
      var ee = j - H, K = j - N;
      return H === void 0 || ee >= D || ee < 0 || b && K >= Y;
    }
    function Q() {
      var j = m();
      if (z(j))
        return ae(j);
      $ = setTimeout(Q, V(j));
    }
    function ae(j) {
      return $ = void 0, S && w ? M(j) : (w = O = void 0, R);
    }
    function ie() {
      $ !== void 0 && clearTimeout($), N = 0, w = H = O = $ = void 0;
    }
    function de() {
      return $ === void 0 ? R : ae(m());
    }
    function ve() {
      var j = m(), ee = z(j);
      if (w = arguments, O = this, H = j, ee) {
        if ($ === void 0)
          return I(H);
        if (b)
          return $ = setTimeout(Q, D), M(H);
      }
      return $ === void 0 && ($ = setTimeout(Q, D)), R;
    }
    return ve.cancel = ie, ve.flush = de, ve;
  }
  function g(C) {
    var D = typeof C;
    return !!C && (D == "object" || D == "function");
  }
  function _(C) {
    return !!C && typeof C == "object";
  }
  function x(C) {
    return typeof C == "symbol" || _(C) && f.call(C) == t;
  }
  function T(C) {
    if (typeof C == "number")
      return C;
    if (x(C))
      return n;
    if (g(C)) {
      var D = typeof C.valueOf == "function" ? C.valueOf() : C;
      C = g(D) ? D + "" : D;
    }
    if (typeof C != "string")
      return C === 0 ? C : +C;
    C = C.replace(e, "");
    var y = o.test(C);
    return y || s.test(C) ? i(C.slice(2), y ? 2 : 8) : a.test(C) ? n : +C;
  }
  return ia = v, ia;
}
var iu = su();
const Gt = /* @__PURE__ */ qe(iu), Oa = [0, 1, 2], cu = (r) => Oa.includes(r), Xt = (r) => {
  var e;
  const t = (((e = document.getElementById(Bt)) == null ? void 0 : e.clientWidth) || 0) - Be;
  switch (r) {
    case 1:
      return Math.ceil(t / Re) * Jt;
    case 2:
      return Math.ceil(t / Ye) * Jt;
    default:
      return Math.ceil(t / Ct) * Jt;
  }
}, lu = (r) => Xt(r) / Jt, Ga = (r, n) => {
  const t = Xt(n) / 2;
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
}, uu = (r, n) => {
  const t = Ga(r, n);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, Xa = () => {
  var t;
  return ((((t = document.getElementById(Bt)) == null ? void 0 : t.clientWidth) || 0) - Be) * Jt;
}, bi = Bs({
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
W.extend(Vl);
W.extend(Ql);
W.extend(Gl);
W.extend(tu);
W.extend(ou);
const du = ({
  data: r,
  children: n,
  isLoading: t,
  config: e,
  defaultStartDate: a = W(),
  onRangeChange: o,
  onFilterData: s,
  onClearFilterData: i
}) => {
  const { zoom: c, maxRecordsPerPage: l = 50, minZoom: u = 0, maxZoom: d = Oa[Oa.length - 1] } = e, [f, p] = Se(c), [h, m] = Se(W()), [v, g] = Se(!1), [_, x] = Se(Xt(f)), T = f < d, C = f > u, D = wt(() => uu(h, f), [h, f]), y = Ga(h, f).startDate, w = W(y).dayOfYear(), O = wi(y), Y = Ne(null), [R, $] = Se([{ x: 0, y: 0 }]), H = Te(
    (j, ee = "auto") => {
      var ce, ge, _e, Pt;
      const K = Xa();
      switch (j) {
        case "back":
          return (ce = Y.current) == null ? void 0 : ce.scrollTo({
            behavior: ee,
            left: K / 3
          });
        case "forward":
          return (ge = Y.current) == null ? void 0 : ge.scrollTo({
            behavior: ee,
            left: K / 3
          });
        case "middle": {
          const uc = K / Jt / 4;
          return (_e = Y.current) == null ? void 0 : _e.scrollTo({
            behavior: ee,
            left: K / 2 - uc
          });
        }
        default:
          return (Pt = Y.current) == null ? void 0 : Pt.scrollTo({
            behavior: ee,
            left: K / 2
          });
      }
    },
    []
  ), N = (j) => {
    $(j);
  }, P = Te(
    (j) => {
      const ee = lu(f);
      let K;
      switch (f) {
        case 0:
          K = ee * 7;
          break;
        case 1:
          K = ee;
          break;
        case 2:
          K = Math.ceil(ee / Mn);
          break;
      }
      Gt(() => {
        switch (j) {
          case "back":
            m((ge) => ge.subtract(K, "days"));
            break;
          case "forward":
            m((ge) => ge.add(K, "days"));
            break;
          case "middle":
            m(W());
            break;
        }
        o == null || o(D);
      }, 300)();
    },
    [o, D, f]
  );
  De(() => {
    Y.current = document.getElementById(Bt), x(Xt(f));
  }, [f]), De(() => {
    const j = () => x(Xt(f));
    return window.addEventListener("resize", j), () => window.removeEventListener("resize", j);
  }, [f]), De(() => {
    o == null || o(D);
  }, [o, D]), De(() => {
    g(!1);
  }, [a]), De(() => {
    v || (H("middle"), g(!0), m(a));
  }, [a, v, H]);
  const b = () => {
    t || (m(
      (j) => f === 2 ? j.add(Oo, "hours") : j.add(Yo, "weeks")
    ), o == null || o(D));
  }, S = Te(() => {
    t || (P("forward"), Gt(() => {
      H("forward");
    }, 300)());
  }, [t, P, H]), M = () => {
    t || (m(
      (j) => f === 2 ? j.subtract(Oo, "hours") : j.subtract(Yo, "weeks")
    ), o == null || o(D));
  }, I = Te(() => {
    !v || t || (P("back"), Gt(() => {
      H("back");
    }, 300)());
  }, [v, t, P, H]), V = Te(() => {
    t || (P("middle"), Gt(() => {
      H("middle", "smooth");
    }, 300)());
  }, [t, P, H]), z = Te(
    (j) => {
      t || (m(j), o == null || o(D));
    },
    [t, o, D]
  ), Q = () => ie(f + 1), ae = () => ie(f - 1), ie = (j) => {
    cu(j) && (p(j), x(Xt(j)), o == null || o(D));
  }, de = () => s == null ? void 0 : s(), { Provider: ve } = bi;
  return /* @__PURE__ */ L(
    ve,
    {
      value: {
        data: r,
        config: e,
        handleGoNext: b,
        handleScrollNext: S,
        handleGoPrev: M,
        handleScrollPrev: I,
        handleGoToday: V,
        handleGoDate: z,
        zoomIn: Q,
        zoomOut: ae,
        zoom: f,
        isNextZoom: T,
        isPrevZoom: C,
        date: h,
        isLoading: t,
        cols: _,
        startDate: O,
        dayOfYear: w,
        handleFilterData: de,
        tilesCoords: R,
        updateTilesCoords: N,
        recordsThreshold: l,
        onClearFilterData: i
      },
      children: n
    }
  );
}, wr = () => Fn(bi), Di = (r, n, t) => {
  r.canvas.width = n * window.devicePixelRatio, r.canvas.height = t * window.devicePixelRatio, r.canvas.style.width = n + "px", r.canvas.style.height = t + "px", r.scale(window.devicePixelRatio, window.devicePixelRatio);
}, fu = B.div`
  height: calc(100vh - headerHeight);
`, pu = B.div`
  position: relative;
`, hu = B.canvas``;
B.canvas``;
const Bo = B.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ $position: r }) => r === "left" ? 0 : "auto"};
  right: ${({ $position: r }) => r === "right" ? 0 : "auto"};
`, mu = pc(function({ zoom: n, rows: t, data: e, onTileClick: a }, o) {
  const { handleScrollNext: s, handleScrollPrev: i, date: c, isLoading: l, cols: u, startDate: d } = wr(), f = Ne(null), p = Ne(null), h = Ne(null), m = zt(), v = Te(
    (g) => {
      const _ = Xa(), x = t * Ie + 1;
      Di(g, _, x), Fl(g, n, t, u, d, m);
    },
    [u, d, t, n, m]
  );
  return De(() => {
    if (!f.current) return;
    const g = f.current.getContext("2d");
    if (!g) return;
    const _ = () => v(g);
    return window.addEventListener("resize", _), () => window.removeEventListener("resize", _);
  }, [v]), De(() => {
    const g = f.current;
    if (!g) return;
    g.style.letterSpacing = "1px";
    const _ = g.getContext("2d");
    _ && v(_);
  }, [c, t, n, v]), De(() => {
    if (!p.current) return;
    const g = new IntersectionObserver(
      (_) => _[0].isIntersecting ? s() : null,
      { root: document.getElementById(Bt) }
    );
    return g.observe(p.current), () => g.disconnect();
  }, [s]), De(() => {
    if (!h.current) return;
    const g = new IntersectionObserver(
      (_) => _[0].isIntersecting ? i() : null,
      {
        root: document.getElementById(Bt),
        rootMargin: `0px 0px 0px -${Be}px`
      }
    );
    return g.observe(h.current), () => g.disconnect();
  }, [i]), /* @__PURE__ */ L(fu, { id: vi, className: "grid-wrapper", children: /* @__PURE__ */ re(pu, { ref: o, className: "grid-inner-wrapper", children: [
    /* @__PURE__ */ L(Bo, { $position: "left", ref: h, className: "grid-scroll-trigger-left" }),
    /* @__PURE__ */ L(Is, { isLoading: l, $position: "left" }),
    /* @__PURE__ */ L(hu, { ref: f, className: "grid-canvas" }),
    /* @__PURE__ */ L(s0, { data: e, zoom: n, onTileClick: a }),
    /* @__PURE__ */ L(Bo, { ref: p, $position: "right", className: "grid-scroll-trigger-right" }),
    /* @__PURE__ */ L(Is, { isLoading: l, $position: "right" })
  ] }) });
}), ki = (r) => {
  const n = W.duration(r, "seconds"), t = n.hours(), e = n.minutes();
  return { hours: t, minutes: e };
}, xi = (r) => {
  let n = 0, t = 0, e = 0;
  return r.forEach((a) => {
    n += a.minutes;
    const o = Math.floor(n / be);
    t += a.hours + o, e += n % be, e >= be && (t++, e -= be);
  }), { hours: t, minutes: e };
}, Mi = (r, n) => {
  let t = No;
  switch (n) {
    case 0:
      t = Nl;
      break;
    case 1:
      t = No;
      break;
    case 2:
      t = 1;
      break;
  }
  const e = () => {
    let o = t - r.hours - 1, s = be - r.minutes;
    return s === be && (o++, s = 0), { hours: Math.max(0, o), minutes: o < 0 ? 0 : s };
  }, a = () => {
    const o = r.hours - t, s = r.minutes;
    return { hours: Math.max(0, o), minutes: o < 0 ? 0 : s };
  };
  return {
    free: e(),
    overtime: a()
  };
}, vu = (r, n, t) => {
  const e = n.isoWeek(), a = r.map((l) => {
    const u = W(l.startDate).isoWeek(), d = W(l.startDate).isoWeekday(), f = W(l.endDate).isoWeek(), p = W(l.endDate).isoWeekday(), { hours: h, minutes: m } = ki(l.occupancy);
    if (e === u) {
      const v = (vt + 1 - d) * h, g = (vt + 1 - d) * m;
      return { hours: Math.max(0, v), minutes: g };
    } else if (e === f) {
      const v = p > vt ? vt * h : p * h, g = p > vt ? vt * m : p * m;
      return { hours: v, minutes: g };
    } else if (W(n).isBetween(l.startDate, l.endDate))
      return { hours: vt * h, minutes: vt * m };
    return { hours: 0, minutes: 0 };
  }), { hours: o, minutes: s } = xi(a), { free: i, overtime: c } = Mi({ hours: o, minutes: s }, t);
  return {
    taken: { hours: Math.max(0, o), minutes: Math.max(0, s) },
    free: i,
    overtime: c
  };
}, gu = (r, n, t, e) => {
  const a = n.isoWeekday(), o = r.map((u) => {
    const { hours: d, minutes: f } = ki(u.occupancy);
    return a <= (e ? 7 : 5) ? { hours: d, minutes: f } : { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = xi(o), { free: c, overtime: l } = Mi({ hours: s, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: c,
    overtime: l
  };
}, yu = (r, n) => {
  let t = 0;
  r.forEach((i) => {
    const c = W(i.startDate).hour(), l = W(i.endDate).hour(), u = n.hour(), d = W(i.endDate).minute(), f = W(i.startDate).minute();
    c < u && l > u ? t += be : c === u && l === u && f && d ? t += d ? d - f : be - f : c === u && l >= u ? t += f ? be - f : be : l === u && d && (t += d);
  });
  const e = Math.floor(t / be), a = t % be, o = e || a ? 0 : 1, s = e ? 0 : a ? be - a : 0;
  return {
    taken: { hours: e, minutes: a },
    free: { hours: o, minutes: s },
    overtime: { hours: 0, minutes: 0 }
  };
}, wu = (r, n, t, e, a = !1) => {
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
      return gu(o, t, e, a);
    case 2:
      return yu(o, t);
    default:
      return vu(o, t, e);
  }
}, bu = (r, n, t, e, a, o = !1) => {
  let s = "weeks", i;
  switch (a) {
    case 0:
      s = "weeks", i = Ct;
      break;
    case 1:
      s = "days", i = Re;
      break;
    case 2:
      s = "hours", i = Ye;
      break;
  }
  const c = Math.ceil(a === 2 ? (n.x - 0.5 * i) / i : n.x / i), l = W(
    `${r.year}-${r.month + 1}-${r.dayOfMonth}T${r.hour}:00:00`
  ).add(c - 1, s), u = Math.ceil(n.y / Ie), d = t.findIndex((m, v, g) => g.slice(0, v + 1).reduce((x, T) => x + T, 0) >= u), f = a === 2 ? (c + 1) * i : c * i, p = (u - 1) * Ie + Ie, h = wu(
    e[d],
    d,
    l,
    a,
    o
  );
  return { coords: { x: f, y: p }, resourceIndex: d, disposition: h };
}, Du = (r, n, t, e) => {
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
}, ku = (r) => {
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
}, xu = (r) => {
  const n = [[], []], [t, e] = r.reduce((a, o) => {
    const s = ku(o.data);
    return a[0].push(s), a[1].push(Math.max(s.length, 1)), a;
  }, n);
  return { projectsPerPerson: t, rowsPerPerson: e };
}, Mu = (r) => r ? r.map((n) => n.data.length).reduce((n, t) => n + Math.max(t, 1), 0) : 0, _u = (r) => {
  const { recordsThreshold: n } = wr(), [t, e] = Se(0), [a, o] = Se(0), s = Ne(null);
  De(() => {
    s.current = document.getElementById(Bt);
  }, []);
  const { projectsPerPerson: i, rowsPerPerson: c } = wt(() => xu(r), [r]), l = wt(
    () => Du(r, i, c, n),
    [r, i, n, c]
  ), u = Te(() => {
    l[a].length && s.current && (s.current.scroll({ top: 0 }), e((v) => v + l[Math.max(a, 0)].length), o((v) => Math.min(v + 1, l.length - 1)), window.scroll({ top: 0 }));
  }, [a, l]), d = Te(() => {
    l[a].length && (e((v) => Math.max(v - l[a - 1].length, 0)), o((v) => Math.max(v - 1, 0)));
  }, [a, l]), f = Te(() => {
    e(0), o(0);
  }, []), p = t + l[a].length, h = wt(
    () => c.slice(t, p),
    [p, c, t]
  ), m = wt(
    () => i.slice(t, p),
    [p, i, t]
  );
  return {
    page: l[a],
    currentPageNum: a,
    pagesAmount: l.length,
    projectsPerPerson: m,
    rowsPerItem: h,
    totalRowsPerPage: Mu(l[a]),
    next: u,
    previous: d,
    reset: f
  };
};
var ln = { exports: {} }, Cu = ln.exports, Vo;
function Su() {
  return Vo || (Vo = 1, function(r, n) {
    (function(t, e) {
      r.exports = e();
    })(Cu, function() {
      return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t) {
        var e = ["th", "st", "nd", "rd"], a = t % 100;
        return "[" + t + (e[(a - 20) % 10] || e[a] || e[0]) + "]";
      } };
    });
  }(ln)), ln.exports;
}
var Eu = Su();
const Pu = /* @__PURE__ */ qe(Eu);
var un = { exports: {} }, Ou = un.exports, Zo;
function Tu() {
  return Zo || (Zo = 1, function(r, n) {
    (function(t, e) {
      r.exports = e(zn());
    })(Ou, function(t) {
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
  }(un)), un.exports;
}
var Nu = Tu();
const Yu = /* @__PURE__ */ qe(Nu);
var dn = { exports: {} }, Ru = dn.exports, jo;
function Lu() {
  return jo || (jo = 1, function(r, n) {
    (function(t, e) {
      r.exports = e(zn());
    })(Ru, function(t) {
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
  }(dn)), dn.exports;
}
var Iu = Lu();
const $u = /* @__PURE__ */ qe(Iu);
var fn = { exports: {} }, Au = fn.exports, zo;
function Fu() {
  return zo || (zo = 1, function(r, n) {
    (function(t, e) {
      r.exports = e(zn());
    })(Au, function(t) {
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
  }(fn)), fn.exports;
}
var Wu = Fu();
const Hu = /* @__PURE__ */ qe(Wu), Bu = {
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
}, Vu = {
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
}, Zu = {
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
}, ju = {
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
}, zu = [
  {
    id: "en",
    lang: Vu,
    translateCode: "en-GB",
    dayjsTranslations: Pu
  },
  {
    id: "pl",
    lang: Bu,
    translateCode: "pl-PL",
    dayjsTranslations: Yu
  },
  {
    id: "lt",
    lang: ju,
    translateCode: "lt-LT",
    dayjsTranslations: Hu
  },
  {
    id: "de",
    lang: Zu,
    translateCode: "de-DE",
    dayjsTranslations: $u
  }
];
class Qu {
  constructor() {
    F(this, "locales", zu);
  }
  getLocales() {
    return this.locales;
  }
  addLocales(n) {
    this.locales.push(n);
  }
}
const _n = new Qu(), _i = Bs({
  localesData: _n.getLocales(),
  currentLocale: _n.getLocales()[0],
  setCurrentLocale: () => {
  }
}), qu = ({ children: r, lang: n, translations: t }) => {
  const [e, a] = Se("en"), o = _n.getLocales(), s = Te(() => {
    const d = o.find((f) => f.id === e);
    return typeof (d == null ? void 0 : d.dayjsTranslations) == "object" && W.locale(d.dayjsTranslations), d || o[0];
  }, [e, o]), [i, c] = Se(s()), l = (d) => {
    localStorage.setItem("locale", d.translateCode), c(d);
  };
  De(() => {
    t == null || t.forEach((d) => {
      o.find((p) => p.id === d.id) || _n.addLocales(d);
    });
  }, [o, t]), De(() => {
    const d = localStorage.getItem("locale"), f = n ?? d ?? "en";
    localStorage.setItem("locale", f), a(f), c(s());
  }, [s, n]);
  const { Provider: u } = _i;
  return /* @__PURE__ */ L(u, { value: { currentLocale: i, localesData: o, setCurrentLocale: l }, children: r });
}, br = () => Fn(_i).currentLocale.lang, Uu = (r) => /* @__PURE__ */ E.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...r }, /* @__PURE__ */ E.createElement("defs", null, /* @__PURE__ */ E.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ E.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ E.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ E.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ E.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ E.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ E.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ E.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ E.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ E.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ E.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ E.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ E.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ E.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), Ku = B.div`
  height: 440px;
  width: 514px;
  position: relative;
`, Gu = B.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({ theme: r }) => r.colors.textPrimary};
`, Xu = () => {
  const { feelingEmpty: r } = br();
  return /* @__PURE__ */ re(Ku, { className: "empty-box-wrapper", children: [
    /* @__PURE__ */ L(Uu, {}),
    /* @__PURE__ */ L(Gu, { className: "empty-box-text", children: r })
  ] });
}, Ju = B.div`
  position: relative;
  display: flex;
`, ed = B.div`
  position: relative;
  margin-left: ${Be};
  display: flex;
  flex-direction: column;
  contain: paint;
`, td = B.div`
  width: calc(${({ width: r }) => r}px - ${Be}px);
  position: sticky;
  top: 0;
  height: 100%;
  left: ${Be}px;
  display: flex;
  justify-content: center;
  align-items: center;
`, Qo = {
  coords: { x: 0, y: 0 },
  resourceIndex: 0,
  disposition: {
    taken: { hours: 0, minutes: 0 },
    free: { hours: 0, minutes: 0 },
    overtime: { hours: 0, minutes: 0 }
  }
}, rd = ({
  data: r,
  onTileClick: n,
  onItemClick: t,
  toggleTheme: e,
  topBarWidth: a
}) => {
  const [o, s] = Se(Qo), [i, c] = Se(r), [l, u] = Se(!1), [d, f] = Se(""), {
    zoom: p,
    startDate: h,
    config: { includeTakenHoursOnWeekendsInDayView: m, showTooltip: v, showThemeToggle: g }
  } = wr(), _ = Ne(null), {
    page: x,
    projectsPerPerson: T,
    totalRowsPerPage: C,
    rowsPerItem: D,
    currentPageNum: y,
    pagesAmount: w,
    next: O,
    previous: Y,
    reset: R
  } = _u(i), $ = Ne(
    Gt(
      (b, S, M, I, V) => {
        if (!_.current) return;
        const { left: z, top: Q } = _.current.getBoundingClientRect(), ae = { x: b.clientX - z, y: b.clientY - Q }, {
          coords: { x: ie, y: de },
          resourceIndex: ve,
          disposition: j
        } = bu(
          S,
          ae,
          M,
          I,
          V,
          m
        );
        s({ coords: { x: ie, y: de }, resourceIndex: ve, disposition: j }), u(!0);
      },
      300
    )
  ), H = Ne(
    Gt((b, S) => {
      R(), c(
        b.filter(
          (M) => M.label.title.toLowerCase().includes(S.toLowerCase())
        )
      );
    }, 500)
  ), N = (b) => {
    const S = b.target.value;
    f(S), H.current.cancel(), H.current(r, S);
  }, P = Te(() => {
    $.current.cancel(), u(!1), s(Qo);
  }, []);
  return De(() => {
    const b = (M) => $.current(M, h, D, T, p), S = _.current;
    if (S)
      return S.addEventListener("mousemove", b), S.addEventListener("mouseleave", P), () => {
        S.removeEventListener("mousemove", b), S.removeEventListener("mouseleave", P);
      };
  }, [$, P, T, D, h, p]), De(() => {
    d || c(r);
  }, [r, d]), /* @__PURE__ */ re(Ju, { className: "calendar-outer-wrapper", children: [
    /* @__PURE__ */ L(
      Rm,
      {
        data: x,
        pageNum: y,
        pagesAmount: w,
        rows: D,
        onLoadNext: O,
        onLoadPrevious: Y,
        searchInputValue: d,
        onSearchInputChange: N,
        onItemClick: t
      }
    ),
    /* @__PURE__ */ re(ed, { className: "calendar-inner-wrapper", children: [
      /* @__PURE__ */ L(
        Gm,
        {
          zoom: p,
          topBarWidth: a,
          showThemeToggle: g,
          toggleTheme: e
        }
      ),
      r.length ? /* @__PURE__ */ L(
        mu,
        {
          data: x,
          zoom: p,
          rows: C,
          ref: _,
          onTileClick: n
        }
      ) : /* @__PURE__ */ L(td, { width: a, className: "calendar-empty-box-wrapper", children: /* @__PURE__ */ L(Xu, {}) }),
      v && l && (o == null ? void 0 : o.resourceIndex) > -1 && /* @__PURE__ */ L(f0, { tooltipData: o, zoom: p })
    ] })
  ] });
};
function Ci(r) {
  var n, t, e = "";
  if (typeof r == "string" || typeof r == "number") e += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var a = r.length;
    for (n = 0; n < a; n++) r[n] && (t = Ci(r[n])) && (e && (e += " "), e += t);
  } else for (t in r) r[t] && (e && (e += " "), e += t);
  return e;
}
function Ce() {
  for (var r, n, t = 0, e = "", a = arguments.length; t < a; t++) (r = arguments[t]) && (n = Ci(r)) && (e && (e += " "), e += n);
  return e;
}
const Si = 6048e5, nd = 864e5, Qn = 6e4, qn = 36e5, ad = 1e3, qo = Symbol.for("constructDateFrom");
function se(r, n) {
  return typeof r == "function" ? r(n) : r && typeof r == "object" && qo in r ? r[qo](n) : r instanceof Date ? new r.constructor(n) : new Date(n);
}
function Z(r, n) {
  return se(n || r, r);
}
function je(r, n, t) {
  const e = Z(r, t == null ? void 0 : t.in);
  return isNaN(n) ? se((t == null ? void 0 : t.in) || r, NaN) : (n && e.setDate(e.getDate() + n), e);
}
function Qe(r, n, t) {
  const e = Z(r, t == null ? void 0 : t.in);
  if (isNaN(n)) return se(r, NaN);
  if (!n)
    return e;
  const a = e.getDate(), o = se(r, e.getTime());
  o.setMonth(e.getMonth() + n + 1, 0);
  const s = o.getDate();
  return a >= s ? o : (e.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    a
  ), e);
}
function Ei(r, n, t) {
  return se(r, +Z(r) + n);
}
function od(r, n, t) {
  return Ei(r, n * qn);
}
let sd = {};
function Qt() {
  return sd;
}
function ft(r, n) {
  var i, c, l, u;
  const t = Qt(), e = (n == null ? void 0 : n.weekStartsOn) ?? ((c = (i = n == null ? void 0 : n.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? t.weekStartsOn ?? ((u = (l = t.locale) == null ? void 0 : l.options) == null ? void 0 : u.weekStartsOn) ?? 0, a = Z(r, n == null ? void 0 : n.in), o = a.getDay(), s = (o < e ? 7 : 0) + o - e;
  return a.setDate(a.getDate() - s), a.setHours(0, 0, 0, 0), a;
}
function lr(r, n) {
  return ft(r, { ...n, weekStartsOn: 1 });
}
function Pi(r, n) {
  const t = Z(r, n == null ? void 0 : n.in), e = t.getFullYear(), a = se(t, 0);
  a.setFullYear(e + 1, 0, 4), a.setHours(0, 0, 0, 0);
  const o = lr(a), s = se(t, 0);
  s.setFullYear(e, 0, 4), s.setHours(0, 0, 0, 0);
  const i = lr(s);
  return t.getTime() >= o.getTime() ? e + 1 : t.getTime() >= i.getTime() ? e : e - 1;
}
function Cn(r) {
  const n = Z(r), t = new Date(
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
function ht(r, ...n) {
  const t = se.bind(
    null,
    n.find((e) => typeof e == "object")
  );
  return n.map(t);
}
function Vt(r, n) {
  const t = Z(r, n == null ? void 0 : n.in);
  return t.setHours(0, 0, 0, 0), t;
}
function ur(r, n, t) {
  const [e, a] = ht(
    t == null ? void 0 : t.in,
    r,
    n
  ), o = Vt(e), s = Vt(a), i = +o - Cn(o), c = +s - Cn(s);
  return Math.round((i - c) / nd);
}
function id(r, n) {
  const t = Pi(r, n), e = se(r, 0);
  return e.setFullYear(t, 0, 4), e.setHours(0, 0, 0, 0), lr(e);
}
function Ta(r, n, t) {
  const e = Z(r, t == null ? void 0 : t.in);
  return e.setTime(e.getTime() + n * Qn), e;
}
function Ja(r, n, t) {
  return Qe(r, n * 3, t);
}
function cd(r, n, t) {
  return Ei(r, n * 1e3);
}
function Sn(r, n, t) {
  return je(r, n * 7, t);
}
function it(r, n, t) {
  return Qe(r, n * 12, t);
}
function Uo(r, n) {
  let t, e = n == null ? void 0 : n.in;
  return r.forEach((a) => {
    !e && typeof a == "object" && (e = se.bind(null, a));
    const o = Z(a, e);
    (!t || t < o || isNaN(+o)) && (t = o);
  }), se(e, t || NaN);
}
function Ko(r, n) {
  let t, e = n == null ? void 0 : n.in;
  return r.forEach((a) => {
    !e && typeof a == "object" && (e = se.bind(null, a));
    const o = Z(a, e);
    (!t || t > o || isNaN(+o)) && (t = o);
  }), se(e, t || NaN);
}
function ld(r, n, t) {
  const [e, a] = ht(
    t == null ? void 0 : t.in,
    r,
    n
  );
  return +Vt(e) == +Vt(a);
}
function ct(r) {
  return r instanceof Date || typeof r == "object" && Object.prototype.toString.call(r) === "[object Date]";
}
function En(r) {
  return !(!ct(r) && typeof r != "number" || isNaN(+Z(r)));
}
function Pn(r, n, t) {
  const [e, a] = ht(
    t == null ? void 0 : t.in,
    r,
    n
  ), o = e.getFullYear() - a.getFullYear(), s = e.getMonth() - a.getMonth();
  return o * 12 + s;
}
function $t(r, n) {
  const t = Z(r, n == null ? void 0 : n.in);
  return Math.trunc(t.getMonth() / 3) + 1;
}
function On(r, n, t) {
  const [e, a] = ht(
    t == null ? void 0 : t.in,
    r,
    n
  ), o = e.getFullYear() - a.getFullYear(), s = $t(e) - $t(a);
  return o * 4 + s;
}
function Tn(r, n, t) {
  const [e, a] = ht(
    t == null ? void 0 : t.in,
    r,
    n
  );
  return e.getFullYear() - a.getFullYear();
}
function ud(r, n, t) {
  const [e, a] = ht(
    t == null ? void 0 : t.in,
    r,
    n
  ), o = Go(e, a), s = Math.abs(
    ur(e, a)
  );
  e.setDate(e.getDate() - o * s);
  const i = +(Go(e, a) === -o), c = o * (s - i);
  return c === 0 ? 0 : c;
}
function Go(r, n) {
  const t = r.getFullYear() - n.getFullYear() || r.getMonth() - n.getMonth() || r.getDate() - n.getDate() || r.getHours() - n.getHours() || r.getMinutes() - n.getMinutes() || r.getSeconds() - n.getSeconds() || r.getMilliseconds() - n.getMilliseconds();
  return t < 0 ? -1 : t > 0 ? 1 : t;
}
function Oi(r, n) {
  const t = Z(r, n == null ? void 0 : n.in);
  return t.setHours(23, 59, 59, 999), t;
}
function Ti(r, n) {
  const t = Z(r, n == null ? void 0 : n.in), e = t.getMonth();
  return t.setFullYear(t.getFullYear(), e + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Na(r, n) {
  const t = Z(r, n == null ? void 0 : n.in), e = t.getMonth(), a = e - e % 3;
  return t.setMonth(a, 1), t.setHours(0, 0, 0, 0), t;
}
function Ni(r, n) {
  const t = Z(r, n == null ? void 0 : n.in);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Yi(r, n) {
  const t = Z(r, n == null ? void 0 : n.in), e = t.getFullYear();
  return t.setFullYear(e + 1, 0, 0), t.setHours(23, 59, 59, 999), t;
}
function Un(r, n) {
  const t = Z(r, n == null ? void 0 : n.in);
  return t.setFullYear(t.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
function dd(r, n) {
  var i, c;
  const t = Qt(), e = t.weekStartsOn ?? ((c = (i = t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? 0, a = Z(r, n == null ? void 0 : n.in), o = a.getDay(), s = (o < e ? -7 : 0) + 6 - (o - e);
  return a.setDate(a.getDate() + s), a.setHours(23, 59, 59, 999), a;
}
const fd = {
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
}, pd = (r, n, t) => {
  let e;
  const a = fd[r];
  return typeof a == "string" ? e = a : n === 1 ? e = a.one : e = a.other.replace("{{count}}", n.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + e : e + " ago" : e;
};
function ca(r) {
  return (n = {}) => {
    const t = n.width ? String(n.width) : r.defaultWidth;
    return r.formats[t] || r.formats[r.defaultWidth];
  };
}
const hd = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, md = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, vd = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, gd = {
  date: ca({
    formats: hd,
    defaultWidth: "full"
  }),
  time: ca({
    formats: md,
    defaultWidth: "full"
  }),
  dateTime: ca({
    formats: vd,
    defaultWidth: "full"
  })
}, yd = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, wd = (r, n, t, e) => yd[r];
function kr(r) {
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
const bd = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Dd = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, kd = {
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
}, xd = {
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
}, Md = {
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
}, _d = {
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
}, Cd = (r, n) => {
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
}, Sd = {
  ordinalNumber: Cd,
  era: kr({
    values: bd,
    defaultWidth: "wide"
  }),
  quarter: kr({
    values: Dd,
    defaultWidth: "wide",
    argumentCallback: (r) => r - 1
  }),
  month: kr({
    values: kd,
    defaultWidth: "wide"
  }),
  day: kr({
    values: xd,
    defaultWidth: "wide"
  }),
  dayPeriod: kr({
    values: Md,
    defaultWidth: "wide",
    formattingValues: _d,
    defaultFormattingWidth: "wide"
  })
};
function xr(r) {
  return (n, t = {}) => {
    const e = t.width, a = e && r.matchPatterns[e] || r.matchPatterns[r.defaultMatchWidth], o = n.match(a);
    if (!o)
      return null;
    const s = o[0], i = e && r.parsePatterns[e] || r.parsePatterns[r.defaultParseWidth], c = Array.isArray(i) ? Pd(i, (d) => d.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      Ed(i, (d) => d.test(s))
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
function Ed(r, n) {
  for (const t in r)
    if (Object.prototype.hasOwnProperty.call(r, t) && n(r[t]))
      return t;
}
function Pd(r, n) {
  for (let t = 0; t < r.length; t++)
    if (n(r[t]))
      return t;
}
function Od(r) {
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
const Td = /^(\d+)(th|st|nd|rd)?/i, Nd = /\d+/i, Yd = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Rd = {
  any: [/^b/i, /^(a|c)/i]
}, Ld = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Id = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, $d = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Ad = {
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
}, Fd = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Wd = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Hd = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Bd = {
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
}, Vd = {
  ordinalNumber: Od({
    matchPattern: Td,
    parsePattern: Nd,
    valueCallback: (r) => parseInt(r, 10)
  }),
  era: xr({
    matchPatterns: Yd,
    defaultMatchWidth: "wide",
    parsePatterns: Rd,
    defaultParseWidth: "any"
  }),
  quarter: xr({
    matchPatterns: Ld,
    defaultMatchWidth: "wide",
    parsePatterns: Id,
    defaultParseWidth: "any",
    valueCallback: (r) => r + 1
  }),
  month: xr({
    matchPatterns: $d,
    defaultMatchWidth: "wide",
    parsePatterns: Ad,
    defaultParseWidth: "any"
  }),
  day: xr({
    matchPatterns: Fd,
    defaultMatchWidth: "wide",
    parsePatterns: Wd,
    defaultParseWidth: "any"
  }),
  dayPeriod: xr({
    matchPatterns: Hd,
    defaultMatchWidth: "any",
    parsePatterns: Bd,
    defaultParseWidth: "any"
  })
}, Ri = {
  code: "en-US",
  formatDistance: pd,
  formatLong: gd,
  formatRelative: wd,
  localize: Sd,
  match: Vd,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Zd(r, n) {
  const t = Z(r, n == null ? void 0 : n.in);
  return ur(t, Un(t)) + 1;
}
function eo(r, n) {
  const t = Z(r, n == null ? void 0 : n.in), e = +lr(t) - +id(t);
  return Math.round(e / Si) + 1;
}
function to(r, n) {
  var u, d, f, p;
  const t = Z(r, n == null ? void 0 : n.in), e = t.getFullYear(), a = Qt(), o = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((d = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((p = (f = a.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, s = se((n == null ? void 0 : n.in) || r, 0);
  s.setFullYear(e + 1, 0, o), s.setHours(0, 0, 0, 0);
  const i = ft(s, n), c = se((n == null ? void 0 : n.in) || r, 0);
  c.setFullYear(e, 0, o), c.setHours(0, 0, 0, 0);
  const l = ft(c, n);
  return +t >= +i ? e + 1 : +t >= +l ? e : e - 1;
}
function jd(r, n) {
  var i, c, l, u;
  const t = Qt(), e = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((c = (i = n == null ? void 0 : n.locale) == null ? void 0 : i.options) == null ? void 0 : c.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((u = (l = t.locale) == null ? void 0 : l.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, a = to(r, n), o = se((n == null ? void 0 : n.in) || r, 0);
  return o.setFullYear(a, 0, e), o.setHours(0, 0, 0, 0), ft(o, n);
}
function Li(r, n) {
  const t = Z(r, n == null ? void 0 : n.in), e = +ft(t, n) - +jd(t, n);
  return Math.round(e / Si) + 1;
}
function oe(r, n) {
  const t = r < 0 ? "-" : "", e = Math.abs(r).toString().padStart(n, "0");
  return t + e;
}
const gt = {
  // Year
  y(r, n) {
    const t = r.getFullYear(), e = t > 0 ? t : 1 - t;
    return oe(n === "yy" ? e % 100 : e, n.length);
  },
  // Month
  M(r, n) {
    const t = r.getMonth();
    return n === "M" ? String(t + 1) : oe(t + 1, 2);
  },
  // Day of the month
  d(r, n) {
    return oe(r.getDate(), n.length);
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
    return oe(r.getHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H(r, n) {
    return oe(r.getHours(), n.length);
  },
  // Minute
  m(r, n) {
    return oe(r.getMinutes(), n.length);
  },
  // Second
  s(r, n) {
    return oe(r.getSeconds(), n.length);
  },
  // Fraction of second
  S(r, n) {
    const t = n.length, e = r.getMilliseconds(), a = Math.trunc(
      e * Math.pow(10, t - 3)
    );
    return oe(a, n.length);
  }
}, Ut = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Xo = {
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
    return gt.y(r, n);
  },
  // Local week-numbering year
  Y: function(r, n, t, e) {
    const a = to(r, e), o = a > 0 ? a : 1 - a;
    if (n === "YY") {
      const s = o % 100;
      return oe(s, 2);
    }
    return n === "Yo" ? t.ordinalNumber(o, { unit: "year" }) : oe(o, n.length);
  },
  // ISO week-numbering year
  R: function(r, n) {
    const t = Pi(r);
    return oe(t, n.length);
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
    return oe(t, n.length);
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
        return oe(e, 2);
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
        return oe(e, 2);
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
        return gt.M(r, n);
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
        return oe(e + 1, 2);
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
    const a = Li(r, e);
    return n === "wo" ? t.ordinalNumber(a, { unit: "week" }) : oe(a, n.length);
  },
  // ISO week of year
  I: function(r, n, t) {
    const e = eo(r);
    return n === "Io" ? t.ordinalNumber(e, { unit: "week" }) : oe(e, n.length);
  },
  // Day of the month
  d: function(r, n, t) {
    return n === "do" ? t.ordinalNumber(r.getDate(), { unit: "date" }) : gt.d(r, n);
  },
  // Day of year
  D: function(r, n, t) {
    const e = Zd(r);
    return n === "Do" ? t.ordinalNumber(e, { unit: "dayOfYear" }) : oe(e, n.length);
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
        return oe(o, 2);
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
        return oe(o, n.length);
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
        return oe(a, n.length);
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
    switch (e === 12 ? a = Ut.noon : e === 0 ? a = Ut.midnight : a = e / 12 >= 1 ? "pm" : "am", n) {
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
    switch (e >= 17 ? a = Ut.evening : e >= 12 ? a = Ut.afternoon : e >= 4 ? a = Ut.morning : a = Ut.night, n) {
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
    return gt.h(r, n);
  },
  // Hour [0-23]
  H: function(r, n, t) {
    return n === "Ho" ? t.ordinalNumber(r.getHours(), { unit: "hour" }) : gt.H(r, n);
  },
  // Hour [0-11]
  K: function(r, n, t) {
    const e = r.getHours() % 12;
    return n === "Ko" ? t.ordinalNumber(e, { unit: "hour" }) : oe(e, n.length);
  },
  // Hour [1-24]
  k: function(r, n, t) {
    let e = r.getHours();
    return e === 0 && (e = 24), n === "ko" ? t.ordinalNumber(e, { unit: "hour" }) : oe(e, n.length);
  },
  // Minute
  m: function(r, n, t) {
    return n === "mo" ? t.ordinalNumber(r.getMinutes(), { unit: "minute" }) : gt.m(r, n);
  },
  // Second
  s: function(r, n, t) {
    return n === "so" ? t.ordinalNumber(r.getSeconds(), { unit: "second" }) : gt.s(r, n);
  },
  // Fraction of second
  S: function(r, n) {
    return gt.S(r, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(r, n, t) {
    const e = r.getTimezoneOffset();
    if (e === 0)
      return "Z";
    switch (n) {
      // Hours and optional minutes
      case "X":
        return es(e);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Ot(e);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Ot(e, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(r, n, t) {
    const e = r.getTimezoneOffset();
    switch (n) {
      // Hours and optional minutes
      case "x":
        return es(e);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Ot(e);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Ot(e, ":");
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
        return "GMT" + Jo(e, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Ot(e, ":");
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
        return "GMT" + Jo(e, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Ot(e, ":");
    }
  },
  // Seconds timestamp
  t: function(r, n, t) {
    const e = Math.trunc(+r / 1e3);
    return oe(e, n.length);
  },
  // Milliseconds timestamp
  T: function(r, n, t) {
    return oe(+r, n.length);
  }
};
function Jo(r, n = "") {
  const t = r > 0 ? "-" : "+", e = Math.abs(r), a = Math.trunc(e / 60), o = e % 60;
  return o === 0 ? t + String(a) : t + String(a) + n + oe(o, 2);
}
function es(r, n) {
  return r % 60 === 0 ? (r > 0 ? "-" : "+") + oe(Math.abs(r) / 60, 2) : Ot(r, n);
}
function Ot(r, n = "") {
  const t = r > 0 ? "-" : "+", e = Math.abs(r), a = oe(Math.trunc(e / 60), 2), o = oe(e % 60, 2);
  return t + a + n + o;
}
const ts = (r, n) => {
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
}, Ii = (r, n) => {
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
}, zd = (r, n) => {
  const t = r.match(/(P+)(p+)?/) || [], e = t[1], a = t[2];
  if (!a)
    return ts(r, n);
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
  return o.replace("{{date}}", ts(e, n)).replace("{{time}}", Ii(a, n));
}, Ya = {
  p: Ii,
  P: zd
}, Qd = /^D+$/, qd = /^Y+$/, Ud = ["D", "DD", "YY", "YYYY"];
function Kd(r) {
  return Qd.test(r);
}
function Gd(r) {
  return qd.test(r);
}
function Xd(r, n, t) {
  const e = Jd(r, n, t);
  if (console.warn(e), Ud.includes(r)) throw new RangeError(e);
}
function Jd(r, n, t) {
  const e = r[0] === "Y" ? "years" : "days of the month";
  return `Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${n}\`) for formatting ${e} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const ef = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, tf = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, rf = /^'([^]*?)'?$/, nf = /''/g, af = /[a-zA-Z]/;
function rs(r, n, t) {
  var u, d, f, p, h, m, v, g;
  const e = Qt(), a = (t == null ? void 0 : t.locale) ?? e.locale ?? Ri, o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? e.firstWeekContainsDate ?? ((p = (f = e.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, s = (t == null ? void 0 : t.weekStartsOn) ?? ((m = (h = t == null ? void 0 : t.locale) == null ? void 0 : h.options) == null ? void 0 : m.weekStartsOn) ?? e.weekStartsOn ?? ((g = (v = e.locale) == null ? void 0 : v.options) == null ? void 0 : g.weekStartsOn) ?? 0, i = Z(r, t == null ? void 0 : t.in);
  if (!En(i))
    throw new RangeError("Invalid time value");
  let c = n.match(tf).map((_) => {
    const x = _[0];
    if (x === "p" || x === "P") {
      const T = Ya[x];
      return T(_, a.formatLong);
    }
    return _;
  }).join("").match(ef).map((_) => {
    if (_ === "''")
      return { isToken: !1, value: "'" };
    const x = _[0];
    if (x === "'")
      return { isToken: !1, value: of(_) };
    if (Xo[x])
      return { isToken: !0, value: _ };
    if (x.match(af))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + x + "`"
      );
    return { isToken: !1, value: _ };
  });
  a.localize.preprocessor && (c = a.localize.preprocessor(i, c));
  const l = {
    firstWeekContainsDate: o,
    weekStartsOn: s,
    locale: a
  };
  return c.map((_) => {
    if (!_.isToken) return _.value;
    const x = _.value;
    (!(t != null && t.useAdditionalWeekYearTokens) && Gd(x) || !(t != null && t.useAdditionalDayOfYearTokens) && Kd(x)) && Xd(x, n, String(r));
    const T = Xo[x[0]];
    return T(i, x, a.localize, l);
  }).join("");
}
function of(r) {
  const n = r.match(rf);
  return n ? n[1].replace(nf, "'") : r;
}
function ns(r, n) {
  return Z(r, n == null ? void 0 : n.in).getDate();
}
function sf(r, n) {
  return Z(r, n == null ? void 0 : n.in).getDay();
}
function cf(r, n) {
  const t = Z(r, n == null ? void 0 : n.in), e = t.getFullYear(), a = t.getMonth(), o = se(t, 0);
  return o.setFullYear(e, a + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function lf() {
  return Object.assign({}, Qt());
}
function lt(r, n) {
  return Z(r, n == null ? void 0 : n.in).getHours();
}
function uf(r, n) {
  const t = Z(r, n == null ? void 0 : n.in).getDay();
  return t === 0 ? 7 : t;
}
function ut(r, n) {
  return Z(r, n == null ? void 0 : n.in).getMinutes();
}
function Ee(r, n) {
  return Z(r, n == null ? void 0 : n.in).getMonth();
}
function kt(r) {
  return Z(r).getSeconds();
}
function Ra(r) {
  return +Z(r);
}
function U(r, n) {
  return Z(r, n == null ? void 0 : n.in).getFullYear();
}
function St(r, n) {
  return +Z(r) > +Z(n);
}
function Zt(r, n) {
  return +Z(r) < +Z(n);
}
function df(r, n) {
  return +Z(r) == +Z(n);
}
function ff(r, n) {
  const t = pf(n) ? new n(0) : se(n, 0);
  return t.setFullYear(r.getFullYear(), r.getMonth(), r.getDate()), t.setHours(
    r.getHours(),
    r.getMinutes(),
    r.getSeconds(),
    r.getMilliseconds()
  ), t;
}
function pf(r) {
  var n;
  return typeof r == "function" && ((n = r.prototype) == null ? void 0 : n.constructor) === r;
}
const hf = 10;
class $i {
  constructor() {
    F(this, "subPriority", 0);
  }
  validate(n, t) {
    return !0;
  }
}
class mf extends $i {
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
class vf extends $i {
  constructor(t, e) {
    super();
    F(this, "priority", hf);
    F(this, "subPriority", -1);
    this.context = t || ((a) => se(e, a));
  }
  set(t, e) {
    return e.timestampIsSet ? t : se(t, ff(t, this.context));
  }
}
class J {
  run(n, t, e, a) {
    const o = this.parse(n, t, e, a);
    return o ? {
      setter: new mf(
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
class gf extends J {
  constructor() {
    super(...arguments);
    F(this, "priority", 140);
    F(this, "incompatibleTokens", ["R", "u", "t", "T"]);
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
const he = {
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
}, Xe = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function me(r, n) {
  return r && {
    value: n(r.value),
    rest: r.rest
  };
}
function fe(r, n) {
  const t = n.match(r);
  return t ? {
    value: parseInt(t[0], 10),
    rest: n.slice(t[0].length)
  } : null;
}
function Je(r, n) {
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
    value: e * (a * qn + o * Qn + s * ad),
    rest: n.slice(t[0].length)
  };
}
function Ai(r) {
  return fe(he.anyDigitsSigned, r);
}
function pe(r, n) {
  switch (r) {
    case 1:
      return fe(he.singleDigit, n);
    case 2:
      return fe(he.twoDigits, n);
    case 3:
      return fe(he.threeDigits, n);
    case 4:
      return fe(he.fourDigits, n);
    default:
      return fe(new RegExp("^\\d{1," + r + "}"), n);
  }
}
function Nn(r, n) {
  switch (r) {
    case 1:
      return fe(he.singleDigitSigned, n);
    case 2:
      return fe(he.twoDigitsSigned, n);
    case 3:
      return fe(he.threeDigitsSigned, n);
    case 4:
      return fe(he.fourDigitsSigned, n);
    default:
      return fe(new RegExp("^-?\\d{1," + r + "}"), n);
  }
}
function ro(r) {
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
function Fi(r, n) {
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
function Wi(r) {
  return r % 400 === 0 || r % 4 === 0 && r % 100 !== 0;
}
class yf extends J {
  constructor() {
    super(...arguments);
    F(this, "priority", 130);
    F(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(t, e, a) {
    const o = (s) => ({
      year: s,
      isTwoDigitYear: e === "yy"
    });
    switch (e) {
      case "y":
        return me(pe(4, t), o);
      case "yo":
        return me(
          a.ordinalNumber(t, {
            unit: "year"
          }),
          o
        );
      default:
        return me(pe(e.length, t), o);
    }
  }
  validate(t, e) {
    return e.isTwoDigitYear || e.year > 0;
  }
  set(t, e, a) {
    const o = t.getFullYear();
    if (a.isTwoDigitYear) {
      const i = Fi(
        a.year,
        o
      );
      return t.setFullYear(i, 0, 1), t.setHours(0, 0, 0, 0), t;
    }
    const s = !("era" in e) || e.era === 1 ? a.year : 1 - a.year;
    return t.setFullYear(s, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class wf extends J {
  constructor() {
    super(...arguments);
    F(this, "priority", 130);
    F(this, "incompatibleTokens", [
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
        return me(pe(4, t), o);
      case "Yo":
        return me(
          a.ordinalNumber(t, {
            unit: "year"
          }),
          o
        );
      default:
        return me(pe(e.length, t), o);
    }
  }
  validate(t, e) {
    return e.isTwoDigitYear || e.year > 0;
  }
  set(t, e, a, o) {
    const s = to(t, o);
    if (a.isTwoDigitYear) {
      const c = Fi(
        a.year,
        s
      );
      return t.setFullYear(
        c,
        0,
        o.firstWeekContainsDate
      ), t.setHours(0, 0, 0, 0), ft(t, o);
    }
    const i = !("era" in e) || e.era === 1 ? a.year : 1 - a.year;
    return t.setFullYear(i, 0, o.firstWeekContainsDate), t.setHours(0, 0, 0, 0), ft(t, o);
  }
}
class bf extends J {
  constructor() {
    super(...arguments);
    F(this, "priority", 130);
    F(this, "incompatibleTokens", [
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
    return Nn(e === "R" ? 4 : e.length, t);
  }
  set(t, e, a) {
    const o = se(t, 0);
    return o.setFullYear(a, 0, 4), o.setHours(0, 0, 0, 0), lr(o);
  }
}
class Df extends J {
  constructor() {
    super(...arguments);
    F(this, "priority", 130);
    F(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(t, e) {
    return Nn(e === "u" ? 4 : e.length, t);
  }
  set(t, e, a) {
    return t.setFullYear(a, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class kf extends J {
  constructor() {
    super(...arguments);
    F(this, "priority", 120);
    F(this, "incompatibleTokens", [
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
        return pe(e.length, t);
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
class xf extends J {
  constructor() {
    super(...arguments);
    F(this, "priority", 120);
    F(this, "incompatibleTokens", [
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
        return pe(e.length, t);
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
class Mf extends J {
  constructor() {
    super(...arguments);
    F(this, "incompatibleTokens", [
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
    F(this, "priority", 110);
  }
  parse(t, e, a) {
    const o = (s) => s - 1;
    switch (e) {
      // 1, 2, ..., 12
      case "M":
        return me(
          fe(he.month, t),
          o
        );
      // 01, 02, ..., 12
      case "MM":
        return me(pe(2, t), o);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return me(
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
class _f extends J {
  constructor() {
    super(...arguments);
    F(this, "priority", 110);
    F(this, "incompatibleTokens", [
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
        return me(
          fe(he.month, t),
          o
        );
      // 01, 02, ..., 12
      case "LL":
        return me(pe(2, t), o);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return me(
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
function Cf(r, n, t) {
  const e = Z(r, t == null ? void 0 : t.in), a = Li(e, t) - n;
  return e.setDate(e.getDate() - a * 7), Z(e, t == null ? void 0 : t.in);
}
class Sf extends J {
  constructor() {
    super(...arguments);
    F(this, "priority", 100);
    F(this, "incompatibleTokens", [
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
        return fe(he.week, t);
      case "wo":
        return a.ordinalNumber(t, { unit: "week" });
      default:
        return pe(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 53;
  }
  set(t, e, a, o) {
    return ft(Cf(t, a, o), o);
  }
}
function Ef(r, n, t) {
  const e = Z(r, t == null ? void 0 : t.in), a = eo(e, t) - n;
  return e.setDate(e.getDate() - a * 7), e;
}
class Pf extends J {
  constructor() {
    super(...arguments);
    F(this, "priority", 100);
    F(this, "incompatibleTokens", [
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
        return fe(he.week, t);
      case "Io":
        return a.ordinalNumber(t, { unit: "week" });
      default:
        return pe(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 53;
  }
  set(t, e, a) {
    return lr(Ef(t, a));
  }
}
const Of = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Tf = [
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
class Nf extends J {
  constructor() {
    super(...arguments);
    F(this, "priority", 90);
    F(this, "subPriority", 1);
    F(this, "incompatibleTokens", [
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
        return fe(he.date, t);
      case "do":
        return a.ordinalNumber(t, { unit: "date" });
      default:
        return pe(e.length, t);
    }
  }
  validate(t, e) {
    const a = t.getFullYear(), o = Wi(a), s = t.getMonth();
    return o ? e >= 1 && e <= Tf[s] : e >= 1 && e <= Of[s];
  }
  set(t, e, a) {
    return t.setDate(a), t.setHours(0, 0, 0, 0), t;
  }
}
class Yf extends J {
  constructor() {
    super(...arguments);
    F(this, "priority", 90);
    F(this, "subpriority", 1);
    F(this, "incompatibleTokens", [
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
        return fe(he.dayOfYear, t);
      case "Do":
        return a.ordinalNumber(t, { unit: "date" });
      default:
        return pe(e.length, t);
    }
  }
  validate(t, e) {
    const a = t.getFullYear();
    return Wi(a) ? e >= 1 && e <= 366 : e >= 1 && e <= 365;
  }
  set(t, e, a) {
    return t.setMonth(0, a), t.setHours(0, 0, 0, 0), t;
  }
}
function no(r, n, t) {
  var d, f, p, h;
  const e = Qt(), a = (t == null ? void 0 : t.weekStartsOn) ?? ((f = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ?? e.weekStartsOn ?? ((h = (p = e.locale) == null ? void 0 : p.options) == null ? void 0 : h.weekStartsOn) ?? 0, o = Z(r, t == null ? void 0 : t.in), s = o.getDay(), c = (n % 7 + 7) % 7, l = 7 - a, u = n < 0 || n > 6 ? n - (s + l) % 7 : (c + l) % 7 - (s + l) % 7;
  return je(o, u, t);
}
class Rf extends J {
  constructor() {
    super(...arguments);
    F(this, "priority", 90);
    F(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
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
    return t = no(t, a, o), t.setHours(0, 0, 0, 0), t;
  }
}
class Lf extends J {
  constructor() {
    super(...arguments);
    F(this, "priority", 90);
    F(this, "incompatibleTokens", [
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
        return me(pe(e.length, t), s);
      // 3rd
      case "eo":
        return me(
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
    return t = no(t, a, o), t.setHours(0, 0, 0, 0), t;
  }
}
class If extends J {
  constructor() {
    super(...arguments);
    F(this, "priority", 90);
    F(this, "incompatibleTokens", [
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
        return me(pe(e.length, t), s);
      // 3rd
      case "co":
        return me(
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
    return t = no(t, a, o), t.setHours(0, 0, 0, 0), t;
  }
}
function $f(r, n, t) {
  const e = Z(r, t == null ? void 0 : t.in), a = uf(e, t), o = n - a;
  return je(e, o, t);
}
class Af extends J {
  constructor() {
    super(...arguments);
    F(this, "priority", 90);
    F(this, "incompatibleTokens", [
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
        return pe(e.length, t);
      // 2nd
      case "io":
        return a.ordinalNumber(t, { unit: "day" });
      // Tue
      case "iii":
        return me(
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
        return me(
          a.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      // Tu
      case "iiiiii":
        return me(
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
        return me(
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
    return t = $f(t, a), t.setHours(0, 0, 0, 0), t;
  }
}
class Ff extends J {
  constructor() {
    super(...arguments);
    F(this, "priority", 80);
    F(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
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
    return t.setHours(ro(a), 0, 0, 0), t;
  }
}
class Wf extends J {
  constructor() {
    super(...arguments);
    F(this, "priority", 80);
    F(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
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
    return t.setHours(ro(a), 0, 0, 0), t;
  }
}
class Hf extends J {
  constructor() {
    super(...arguments);
    F(this, "priority", 80);
    F(this, "incompatibleTokens", ["a", "b", "t", "T"]);
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
    return t.setHours(ro(a), 0, 0, 0), t;
  }
}
class Bf extends J {
  constructor() {
    super(...arguments);
    F(this, "priority", 70);
    F(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "h":
        return fe(he.hour12h, t);
      case "ho":
        return a.ordinalNumber(t, { unit: "hour" });
      default:
        return pe(e.length, t);
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
class Vf extends J {
  constructor() {
    super(...arguments);
    F(this, "priority", 70);
    F(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "H":
        return fe(he.hour23h, t);
      case "Ho":
        return a.ordinalNumber(t, { unit: "hour" });
      default:
        return pe(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 23;
  }
  set(t, e, a) {
    return t.setHours(a, 0, 0, 0), t;
  }
}
class Zf extends J {
  constructor() {
    super(...arguments);
    F(this, "priority", 70);
    F(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "K":
        return fe(he.hour11h, t);
      case "Ko":
        return a.ordinalNumber(t, { unit: "hour" });
      default:
        return pe(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 11;
  }
  set(t, e, a) {
    return t.getHours() >= 12 && a < 12 ? t.setHours(a + 12, 0, 0, 0) : t.setHours(a, 0, 0, 0), t;
  }
}
class jf extends J {
  constructor() {
    super(...arguments);
    F(this, "priority", 70);
    F(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "k":
        return fe(he.hour24h, t);
      case "ko":
        return a.ordinalNumber(t, { unit: "hour" });
      default:
        return pe(e.length, t);
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
class zf extends J {
  constructor() {
    super(...arguments);
    F(this, "priority", 60);
    F(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "m":
        return fe(he.minute, t);
      case "mo":
        return a.ordinalNumber(t, { unit: "minute" });
      default:
        return pe(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 59;
  }
  set(t, e, a) {
    return t.setMinutes(a, 0, 0), t;
  }
}
class Qf extends J {
  constructor() {
    super(...arguments);
    F(this, "priority", 50);
    F(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "s":
        return fe(he.second, t);
      case "so":
        return a.ordinalNumber(t, { unit: "second" });
      default:
        return pe(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 59;
  }
  set(t, e, a) {
    return t.setSeconds(a, 0), t;
  }
}
class qf extends J {
  constructor() {
    super(...arguments);
    F(this, "priority", 30);
    F(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, e) {
    const a = (o) => Math.trunc(o * Math.pow(10, -e.length + 3));
    return me(pe(e.length, t), a);
  }
  set(t, e, a) {
    return t.setMilliseconds(a), t;
  }
}
class Uf extends J {
  constructor() {
    super(...arguments);
    F(this, "priority", 10);
    F(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(t, e) {
    switch (e) {
      case "X":
        return Je(
          Xe.basicOptionalMinutes,
          t
        );
      case "XX":
        return Je(Xe.basic, t);
      case "XXXX":
        return Je(
          Xe.basicOptionalSeconds,
          t
        );
      case "XXXXX":
        return Je(
          Xe.extendedOptionalSeconds,
          t
        );
      case "XXX":
      default:
        return Je(Xe.extended, t);
    }
  }
  set(t, e, a) {
    return e.timestampIsSet ? t : se(
      t,
      t.getTime() - Cn(t) - a
    );
  }
}
class Kf extends J {
  constructor() {
    super(...arguments);
    F(this, "priority", 10);
    F(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(t, e) {
    switch (e) {
      case "x":
        return Je(
          Xe.basicOptionalMinutes,
          t
        );
      case "xx":
        return Je(Xe.basic, t);
      case "xxxx":
        return Je(
          Xe.basicOptionalSeconds,
          t
        );
      case "xxxxx":
        return Je(
          Xe.extendedOptionalSeconds,
          t
        );
      case "xxx":
      default:
        return Je(Xe.extended, t);
    }
  }
  set(t, e, a) {
    return e.timestampIsSet ? t : se(
      t,
      t.getTime() - Cn(t) - a
    );
  }
}
class Gf extends J {
  constructor() {
    super(...arguments);
    F(this, "priority", 40);
    F(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return Ai(t);
  }
  set(t, e, a) {
    return [se(t, a * 1e3), { timestampIsSet: !0 }];
  }
}
class Xf extends J {
  constructor() {
    super(...arguments);
    F(this, "priority", 20);
    F(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return Ai(t);
  }
  set(t, e, a) {
    return [se(t, a), { timestampIsSet: !0 }];
  }
}
const Jf = {
  G: new gf(),
  y: new yf(),
  Y: new wf(),
  R: new bf(),
  u: new Df(),
  Q: new kf(),
  q: new xf(),
  M: new Mf(),
  L: new _f(),
  w: new Sf(),
  I: new Pf(),
  d: new Nf(),
  D: new Yf(),
  E: new Rf(),
  e: new Lf(),
  c: new If(),
  i: new Af(),
  a: new Ff(),
  b: new Wf(),
  B: new Hf(),
  h: new Bf(),
  H: new Vf(),
  K: new Zf(),
  k: new jf(),
  m: new zf(),
  s: new Qf(),
  S: new qf(),
  X: new Uf(),
  x: new Kf(),
  t: new Gf(),
  T: new Xf()
}, ep = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, tp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, rp = /^'([^]*?)'?$/, np = /''/g, ap = /\S/, op = /[a-zA-Z]/;
function sp(r, n, t, e) {
  var v, g, _, x, T, C, D, y;
  const a = () => se((e == null ? void 0 : e.in) || t, NaN), o = lf(), s = (e == null ? void 0 : e.locale) ?? o.locale ?? Ri, i = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((g = (v = e == null ? void 0 : e.locale) == null ? void 0 : v.options) == null ? void 0 : g.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((x = (_ = o.locale) == null ? void 0 : _.options) == null ? void 0 : x.firstWeekContainsDate) ?? 1, c = (e == null ? void 0 : e.weekStartsOn) ?? ((C = (T = e == null ? void 0 : e.locale) == null ? void 0 : T.options) == null ? void 0 : C.weekStartsOn) ?? o.weekStartsOn ?? ((y = (D = o.locale) == null ? void 0 : D.options) == null ? void 0 : y.weekStartsOn) ?? 0;
  if (!n)
    return r ? a() : Z(t, e == null ? void 0 : e.in);
  const l = {
    firstWeekContainsDate: i,
    weekStartsOn: c,
    locale: s
  }, u = [new vf(e == null ? void 0 : e.in, t)], d = n.match(tp).map((w) => {
    const O = w[0];
    if (O in Ya) {
      const Y = Ya[O];
      return Y(w, s.formatLong);
    }
    return w;
  }).join("").match(ep), f = [];
  for (let w of d) {
    const O = w[0], Y = Jf[O];
    if (Y) {
      const { incompatibleTokens: R } = Y;
      if (Array.isArray(R)) {
        const H = f.find(
          (N) => R.includes(N.token) || N.token === O
        );
        if (H)
          throw new RangeError(
            `The format string mustn't contain \`${H.fullToken}\` and \`${w}\` at the same time`
          );
      } else if (Y.incompatibleTokens === "*" && f.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${w}\` and any other token at the same time`
        );
      f.push({ token: O, fullToken: w });
      const $ = Y.run(
        r,
        w,
        s.match,
        l
      );
      if (!$)
        return a();
      u.push($.setter), r = $.rest;
    } else {
      if (O.match(op))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + O + "`"
        );
      if (w === "''" ? w = "'" : O === "'" && (w = ip(w)), r.indexOf(w) === 0)
        r = r.slice(w.length);
      else
        return a();
    }
  }
  if (r.length > 0 && ap.test(r))
    return a();
  const p = u.map((w) => w.priority).sort((w, O) => O - w).filter((w, O, Y) => Y.indexOf(w) === O).map(
    (w) => u.filter((O) => O.priority === w).sort((O, Y) => Y.subPriority - O.subPriority)
  ).map((w) => w[0]);
  let h = Z(t, e == null ? void 0 : e.in);
  if (isNaN(+h)) return a();
  const m = {};
  for (const w of p) {
    if (!w.validate(h, l))
      return a();
    const O = w.set(h, m, l);
    Array.isArray(O) ? (h = O[0], Object.assign(m, O[1])) : h = O;
  }
  return h;
}
function ip(r) {
  return r.match(rp)[1].replace(np, "'");
}
function cp(r, n, t) {
  const [e, a] = ht(
    t == null ? void 0 : t.in,
    r,
    n
  );
  return e.getFullYear() === a.getFullYear() && e.getMonth() === a.getMonth();
}
function lp(r, n, t) {
  const [e, a] = ht(
    t == null ? void 0 : t.in,
    r,
    n
  );
  return +Na(e) == +Na(a);
}
function up(r, n, t) {
  const [e, a] = ht(
    t == null ? void 0 : t.in,
    r,
    n
  );
  return e.getFullYear() === a.getFullYear();
}
function Nr(r, n, t) {
  const e = +Z(r, t == null ? void 0 : t.in), [a, o] = [
    +Z(n.start, t == null ? void 0 : t.in),
    +Z(n.end, t == null ? void 0 : t.in)
  ].sort((s, i) => s - i);
  return e >= a && e <= o;
}
function dp(r, n, t) {
  return je(r, -1, t);
}
function fp(r, n) {
  const t = () => se(n == null ? void 0 : n.in, NaN), a = vp(r);
  let o;
  if (a.date) {
    const l = gp(a.date, 2);
    o = yp(l.restDateString, l.year);
  }
  if (!o || isNaN(+o)) return t();
  const s = +o;
  let i = 0, c;
  if (a.time && (i = wp(a.time), isNaN(i)))
    return t();
  if (a.timezone) {
    if (c = bp(a.timezone), isNaN(c)) return t();
  } else {
    const l = new Date(s + i), u = Z(0, n == null ? void 0 : n.in);
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
  return Z(s + i + c, n == null ? void 0 : n.in);
}
const Zr = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, pp = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, hp = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, mp = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function vp(r) {
  const n = {}, t = r.split(Zr.dateTimeDelimiter);
  let e;
  if (t.length > 2)
    return n;
  if (/:/.test(t[0]) ? e = t[0] : (n.date = t[0], e = t[1], Zr.timeZoneDelimiter.test(n.date) && (n.date = r.split(Zr.timeZoneDelimiter)[0], e = r.substr(
    n.date.length,
    r.length
  ))), e) {
    const a = Zr.timezone.exec(e);
    a ? (n.time = e.replace(a[1], ""), n.timezone = a[1]) : n.time = e;
  }
  return n;
}
function gp(r, n) {
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
function yp(r, n) {
  if (n === null) return /* @__PURE__ */ new Date(NaN);
  const t = r.match(pp);
  if (!t) return /* @__PURE__ */ new Date(NaN);
  const e = !!t[4], a = Mr(t[1]), o = Mr(t[2]) - 1, s = Mr(t[3]), i = Mr(t[4]), c = Mr(t[5]) - 1;
  if (e)
    return _p(n, i, c) ? Dp(n, i, c) : /* @__PURE__ */ new Date(NaN);
  {
    const l = /* @__PURE__ */ new Date(0);
    return !xp(n, o, s) || !Mp(n, a) ? /* @__PURE__ */ new Date(NaN) : (l.setUTCFullYear(n, o, Math.max(a, s)), l);
  }
}
function Mr(r) {
  return r ? parseInt(r) : 1;
}
function wp(r) {
  const n = r.match(hp);
  if (!n) return NaN;
  const t = la(n[1]), e = la(n[2]), a = la(n[3]);
  return Cp(t, e, a) ? t * qn + e * Qn + a * 1e3 : NaN;
}
function la(r) {
  return r && parseFloat(r.replace(",", ".")) || 0;
}
function bp(r) {
  if (r === "Z") return 0;
  const n = r.match(mp);
  if (!n) return 0;
  const t = n[1] === "+" ? -1 : 1, e = parseInt(n[2]), a = n[3] && parseInt(n[3]) || 0;
  return Sp(e, a) ? t * (e * qn + a * Qn) : NaN;
}
function Dp(r, n, t) {
  const e = /* @__PURE__ */ new Date(0);
  e.setUTCFullYear(r, 0, 4);
  const a = e.getUTCDay() || 7, o = (n - 1) * 7 + t + 1 - a;
  return e.setUTCDate(e.getUTCDate() + o), e;
}
const kp = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Hi(r) {
  return r % 400 === 0 || r % 4 === 0 && r % 100 !== 0;
}
function xp(r, n, t) {
  return n >= 0 && n <= 11 && t >= 1 && t <= (kp[n] || (Hi(r) ? 29 : 28));
}
function Mp(r, n) {
  return n >= 1 && n <= (Hi(r) ? 366 : 365);
}
function _p(r, n, t) {
  return n >= 1 && n <= 53 && t >= 0 && t <= 6;
}
function Cp(r, n, t) {
  return r === 24 ? n === 0 && t === 0 : t >= 0 && t < 60 && n >= 0 && n < 60 && r >= 0 && r < 25;
}
function Sp(r, n) {
  return n >= 0 && n <= 59;
}
function Fe(r, n, t) {
  const e = Z(r, t == null ? void 0 : t.in), a = e.getFullYear(), o = e.getDate(), s = se(r, 0);
  s.setFullYear(a, n, 15), s.setHours(0, 0, 0, 0);
  const i = cf(s);
  return e.setMonth(n, Math.min(o, i)), e;
}
function pn(r, n, t) {
  const e = Z(r, t == null ? void 0 : t.in);
  return e.setHours(n), e;
}
function hn(r, n, t) {
  const e = Z(r, t == null ? void 0 : t.in);
  return e.setMinutes(n), e;
}
function Kt(r, n, t) {
  const e = Z(r, t == null ? void 0 : t.in), a = Math.trunc(e.getMonth() / 3) + 1, o = n - a;
  return Fe(e, e.getMonth() + o * 3);
}
function mn(r, n, t) {
  const e = Z(r, t == null ? void 0 : t.in);
  return e.setSeconds(n), e;
}
function Ue(r, n, t) {
  const e = Z(r, t == null ? void 0 : t.in);
  return isNaN(+e) ? se(r, NaN) : (e.setFullYear(n), e);
}
function At(r, n, t) {
  return Qe(r, -n, t);
}
function Bi(r, n, t) {
  return Ja(r, -1, t);
}
function as(r, n, t) {
  return Sn(r, -1, t);
}
function dr(r, n, t) {
  return it(r, -n, t);
}
function Kn() {
  return typeof window < "u";
}
function Dr(r) {
  return Vi(r) ? (r.nodeName || "").toLowerCase() : "#document";
}
function $e(r) {
  var n;
  return (r == null || (n = r.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function at(r) {
  var n;
  return (n = (Vi(r) ? r.ownerDocument : r.document) || window.document) == null ? void 0 : n.documentElement;
}
function Vi(r) {
  return Kn() ? r instanceof Node || r instanceof $e(r).Node : !1;
}
function Pe(r) {
  return Kn() ? r instanceof Element || r instanceof $e(r).Element : !1;
}
function nt(r) {
  return Kn() ? r instanceof HTMLElement || r instanceof $e(r).HTMLElement : !1;
}
function os(r) {
  return !Kn() || typeof ShadowRoot > "u" ? !1 : r instanceof ShadowRoot || r instanceof $e(r).ShadowRoot;
}
const Ep = /* @__PURE__ */ new Set(["inline", "contents"]);
function Lr(r) {
  const {
    overflow: n,
    overflowX: t,
    overflowY: e,
    display: a
  } = Ve(r);
  return /auto|scroll|overlay|hidden|clip/.test(n + e + t) && !Ep.has(a);
}
const Pp = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Op(r) {
  return Pp.has(Dr(r));
}
const Tp = [":popover-open", ":modal"];
function Gn(r) {
  return Tp.some((n) => {
    try {
      return r.matches(n);
    } catch {
      return !1;
    }
  });
}
const Np = ["transform", "translate", "scale", "rotate", "perspective"], Yp = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Rp = ["paint", "layout", "strict", "content"];
function ao(r) {
  const n = oo(), t = Pe(r) ? Ve(r) : r;
  return Np.some((e) => t[e] ? t[e] !== "none" : !1) || (t.containerType ? t.containerType !== "normal" : !1) || !n && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !n && (t.filter ? t.filter !== "none" : !1) || Yp.some((e) => (t.willChange || "").includes(e)) || Rp.some((e) => (t.contain || "").includes(e));
}
function Lp(r) {
  let n = Et(r);
  for (; nt(n) && !fr(n); ) {
    if (ao(n))
      return n;
    if (Gn(n))
      return null;
    n = Et(n);
  }
  return null;
}
function oo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Ip = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function fr(r) {
  return Ip.has(Dr(r));
}
function Ve(r) {
  return $e(r).getComputedStyle(r);
}
function Xn(r) {
  return Pe(r) ? {
    scrollLeft: r.scrollLeft,
    scrollTop: r.scrollTop
  } : {
    scrollLeft: r.scrollX,
    scrollTop: r.scrollY
  };
}
function Et(r) {
  if (Dr(r) === "html")
    return r;
  const n = (
    // Step into the shadow DOM of the parent of a slotted node.
    r.assignedSlot || // DOM Element detected.
    r.parentNode || // ShadowRoot detected.
    os(r) && r.host || // Fallback.
    at(r)
  );
  return os(n) ? n.host : n;
}
function Zi(r) {
  const n = Et(r);
  return fr(n) ? r.ownerDocument ? r.ownerDocument.body : r.body : nt(n) && Lr(n) ? n : Zi(n);
}
function Yr(r, n, t) {
  var e;
  n === void 0 && (n = []), t === void 0 && (t = !0);
  const a = Zi(r), o = a === ((e = r.ownerDocument) == null ? void 0 : e.body), s = $e(a);
  if (o) {
    const i = La(s);
    return n.concat(s, s.visualViewport || [], Lr(a) ? a : [], i && t ? Yr(i) : []);
  }
  return n.concat(a, Yr(a, [], t));
}
function La(r) {
  return r.parent && Object.getPrototypeOf(r.parent) ? r.frameElement : null;
}
const pr = Math.min, Ft = Math.max, Yn = Math.round, jr = Math.floor, rt = (r) => ({
  x: r,
  y: r
}), $p = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ap = {
  start: "end",
  end: "start"
};
function Fp(r, n, t) {
  return Ft(r, pr(n, t));
}
function Jn(r, n) {
  return typeof r == "function" ? r(n) : r;
}
function hr(r) {
  return r.split("-")[0];
}
function Ir(r) {
  return r.split("-")[1];
}
function Wp(r) {
  return r === "x" ? "y" : "x";
}
function so(r) {
  return r === "y" ? "height" : "width";
}
const Hp = /* @__PURE__ */ new Set(["top", "bottom"]);
function Yt(r) {
  return Hp.has(hr(r)) ? "y" : "x";
}
function io(r) {
  return Wp(Yt(r));
}
function Bp(r, n, t) {
  t === void 0 && (t = !1);
  const e = Ir(r), a = io(r), o = so(a);
  let s = a === "x" ? e === (t ? "end" : "start") ? "right" : "left" : e === "start" ? "bottom" : "top";
  return n.reference[o] > n.floating[o] && (s = Rn(s)), [s, Rn(s)];
}
function Vp(r) {
  const n = Rn(r);
  return [Ia(r), n, Ia(n)];
}
function Ia(r) {
  return r.replace(/start|end/g, (n) => Ap[n]);
}
const ss = ["left", "right"], is = ["right", "left"], Zp = ["top", "bottom"], jp = ["bottom", "top"];
function zp(r, n, t) {
  switch (r) {
    case "top":
    case "bottom":
      return t ? n ? is : ss : n ? ss : is;
    case "left":
    case "right":
      return n ? Zp : jp;
    default:
      return [];
  }
}
function Qp(r, n, t, e) {
  const a = Ir(r);
  let o = zp(hr(r), t === "start", e);
  return a && (o = o.map((s) => s + "-" + a), n && (o = o.concat(o.map(Ia)))), o;
}
function Rn(r) {
  return r.replace(/left|right|bottom|top/g, (n) => $p[n]);
}
function qp(r) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...r
  };
}
function ji(r) {
  return typeof r != "number" ? qp(r) : {
    top: r,
    right: r,
    bottom: r,
    left: r
  };
}
function Ln(r) {
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
var Up = typeof document < "u", Kp = function() {
}, In = Up ? Wa : Kp;
const Gp = {
  ...E
}, Xp = Gp.useInsertionEffect, Jp = Xp || ((r) => r());
function eh(r) {
  const n = E.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return Jp(() => {
    n.current = r;
  }), E.useCallback(function() {
    for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++)
      e[a] = arguments[a];
    return n.current == null ? void 0 : n.current(...e);
  }, []);
}
function cs(r, n, t) {
  let {
    reference: e,
    floating: a
  } = r;
  const o = Yt(n), s = io(n), i = so(s), c = hr(n), l = o === "y", u = e.x + e.width / 2 - a.width / 2, d = e.y + e.height / 2 - a.height / 2, f = e[i] / 2 - a[i] / 2;
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
  switch (Ir(n)) {
    case "start":
      p[s] -= f * (t && l ? -1 : 1);
      break;
    case "end":
      p[s] += f * (t && l ? -1 : 1);
      break;
  }
  return p;
}
const th = async (r, n, t) => {
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
  } = cs(l, e, c), f = e, p = {}, h = 0;
  for (let m = 0; m < i.length; m++) {
    const {
      name: v,
      fn: g
    } = i[m], {
      x: _,
      y: x,
      data: T,
      reset: C
    } = await g({
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
    u = _ ?? u, d = x ?? d, p = {
      ...p,
      [v]: {
        ...p[v],
        ...T
      }
    }, C && h <= 50 && (h++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (l = C.rects === !0 ? await s.getElementRects({
      reference: r,
      floating: n,
      strategy: a
    }) : C.rects), {
      x: u,
      y: d
    } = cs(l, f, c)), m = -1);
  }
  return {
    x: u,
    y: d,
    placement: f,
    strategy: a,
    middlewareData: p
  };
};
async function rh(r, n) {
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
  } = Jn(n, r), h = ji(p), v = i[f ? d === "floating" ? "reference" : "floating" : d], g = Ln(await o.getClippingRect({
    element: (t = await (o.isElement == null ? void 0 : o.isElement(v))) == null || t ? v : v.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), _ = d === "floating" ? {
    x: e,
    y: a,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, x = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(i.floating)), T = await (o.isElement == null ? void 0 : o.isElement(x)) ? await (o.getScale == null ? void 0 : o.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Ln(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: _,
    offsetParent: x,
    strategy: c
  }) : _);
  return {
    top: (g.top - C.top + h.top) / T.y,
    bottom: (C.bottom - g.bottom + h.bottom) / T.y,
    left: (g.left - C.left + h.left) / T.x,
    right: (C.right - g.right + h.right) / T.x
  };
}
const nh = (r) => ({
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
    } = Jn(r, n) || {};
    if (l == null)
      return {};
    const d = ji(u), f = {
      x: t,
      y: e
    }, p = io(a), h = so(p), m = await s.getDimensions(l), v = p === "y", g = v ? "top" : "left", _ = v ? "bottom" : "right", x = v ? "clientHeight" : "clientWidth", T = o.reference[h] + o.reference[p] - f[p] - o.floating[h], C = f[p] - o.reference[p], D = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let y = D ? D[x] : 0;
    (!y || !await (s.isElement == null ? void 0 : s.isElement(D))) && (y = i.floating[x] || o.floating[h]);
    const w = T / 2 - C / 2, O = y / 2 - m[h] / 2 - 1, Y = pr(d[g], O), R = pr(d[_], O), $ = Y, H = y - m[h] - R, N = y / 2 - m[h] / 2 + w, P = Fp($, N, H), b = !c.arrow && Ir(a) != null && N !== P && o.reference[h] / 2 - (N < $ ? Y : R) - m[h] / 2 < 0, S = b ? N < $ ? N - $ : N - H : 0;
    return {
      [p]: f[p] + S,
      data: {
        [p]: P,
        centerOffset: N - P - S,
        ...b && {
          alignmentOffset: S
        }
      },
      reset: b
    };
  }
}), ah = function(r) {
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
      } = Jn(r, n);
      if ((t = o.arrow) != null && t.alignmentOffset)
        return {};
      const g = hr(a), _ = Yt(i), x = hr(i) === i, T = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), C = f || (x || !m ? [Rn(i)] : Vp(i)), D = h !== "none";
      !f && D && C.push(...Qp(i, m, h, T));
      const y = [i, ...C], w = await rh(n, v), O = [];
      let Y = ((e = o.flip) == null ? void 0 : e.overflows) || [];
      if (u && O.push(w[g]), d) {
        const N = Bp(a, s, T);
        O.push(w[N[0]], w[N[1]]);
      }
      if (Y = [...Y, {
        placement: a,
        overflows: O
      }], !O.every((N) => N <= 0)) {
        var R, $;
        const N = (((R = o.flip) == null ? void 0 : R.index) || 0) + 1, P = y[N];
        if (P && (!(d === "alignment" ? _ !== Yt(P) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        Y.every((M) => M.overflows[0] > 0 && Yt(M.placement) === _)))
          return {
            data: {
              index: N,
              overflows: Y
            },
            reset: {
              placement: P
            }
          };
        let b = ($ = Y.filter((S) => S.overflows[0] <= 0).sort((S, M) => S.overflows[1] - M.overflows[1])[0]) == null ? void 0 : $.placement;
        if (!b)
          switch (p) {
            case "bestFit": {
              var H;
              const S = (H = Y.filter((M) => {
                if (D) {
                  const I = Yt(M.placement);
                  return I === _ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  I === "y";
                }
                return !0;
              }).map((M) => [M.placement, M.overflows.filter((I) => I > 0).reduce((I, V) => I + V, 0)]).sort((M, I) => M[1] - I[1])[0]) == null ? void 0 : H[0];
              S && (b = S);
              break;
            }
            case "initialPlacement":
              b = i;
              break;
          }
        if (a !== b)
          return {
            reset: {
              placement: b
            }
          };
      }
      return {};
    }
  };
}, oh = /* @__PURE__ */ new Set(["left", "top"]);
async function sh(r, n) {
  const {
    placement: t,
    platform: e,
    elements: a
  } = r, o = await (e.isRTL == null ? void 0 : e.isRTL(a.floating)), s = hr(t), i = Ir(t), c = Yt(t) === "y", l = oh.has(s) ? -1 : 1, u = o && c ? -1 : 1, d = Jn(n, r);
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
const ih = function(r) {
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
      } = n, c = await sh(n, r);
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
function zi(r) {
  const n = Ve(r);
  let t = parseFloat(n.width) || 0, e = parseFloat(n.height) || 0;
  const a = nt(r), o = a ? r.offsetWidth : t, s = a ? r.offsetHeight : e, i = Yn(t) !== o || Yn(e) !== s;
  return i && (t = o, e = s), {
    width: t,
    height: e,
    $: i
  };
}
function co(r) {
  return Pe(r) ? r : r.contextElement;
}
function er(r) {
  const n = co(r);
  if (!nt(n))
    return rt(1);
  const t = n.getBoundingClientRect(), {
    width: e,
    height: a,
    $: o
  } = zi(n);
  let s = (o ? Yn(t.width) : t.width) / e, i = (o ? Yn(t.height) : t.height) / a;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const ch = /* @__PURE__ */ rt(0);
function Qi(r) {
  const n = $e(r);
  return !oo() || !n.visualViewport ? ch : {
    x: n.visualViewport.offsetLeft,
    y: n.visualViewport.offsetTop
  };
}
function lh(r, n, t) {
  return n === void 0 && (n = !1), !t || n && t !== $e(r) ? !1 : n;
}
function jt(r, n, t, e) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const a = r.getBoundingClientRect(), o = co(r);
  let s = rt(1);
  n && (e ? Pe(e) && (s = er(e)) : s = er(r));
  const i = lh(o, t, e) ? Qi(o) : rt(0);
  let c = (a.left + i.x) / s.x, l = (a.top + i.y) / s.y, u = a.width / s.x, d = a.height / s.y;
  if (o) {
    const f = $e(o), p = e && Pe(e) ? $e(e) : e;
    let h = f, m = La(h);
    for (; m && e && p !== h; ) {
      const v = er(m), g = m.getBoundingClientRect(), _ = Ve(m), x = g.left + (m.clientLeft + parseFloat(_.paddingLeft)) * v.x, T = g.top + (m.clientTop + parseFloat(_.paddingTop)) * v.y;
      c *= v.x, l *= v.y, u *= v.x, d *= v.y, c += x, l += T, h = $e(m), m = La(h);
    }
  }
  return Ln({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function lo(r, n) {
  const t = Xn(r).scrollLeft;
  return n ? n.left + t : jt(at(r)).left + t;
}
function qi(r, n, t) {
  t === void 0 && (t = !1);
  const e = r.getBoundingClientRect(), a = e.left + n.scrollLeft - (t ? 0 : (
    // RTL <body> scrollbar.
    lo(r, e)
  )), o = e.top + n.scrollTop;
  return {
    x: a,
    y: o
  };
}
function uh(r) {
  let {
    elements: n,
    rect: t,
    offsetParent: e,
    strategy: a
  } = r;
  const o = a === "fixed", s = at(e), i = n ? Gn(n.floating) : !1;
  if (e === s || i && o)
    return t;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = rt(1);
  const u = rt(0), d = nt(e);
  if ((d || !d && !o) && ((Dr(e) !== "body" || Lr(s)) && (c = Xn(e)), nt(e))) {
    const p = jt(e);
    l = er(e), u.x = p.x + e.clientLeft, u.y = p.y + e.clientTop;
  }
  const f = s && !d && !o ? qi(s, c, !0) : rt(0);
  return {
    width: t.width * l.x,
    height: t.height * l.y,
    x: t.x * l.x - c.scrollLeft * l.x + u.x + f.x,
    y: t.y * l.y - c.scrollTop * l.y + u.y + f.y
  };
}
function dh(r) {
  return Array.from(r.getClientRects());
}
function fh(r) {
  const n = at(r), t = Xn(r), e = r.ownerDocument.body, a = Ft(n.scrollWidth, n.clientWidth, e.scrollWidth, e.clientWidth), o = Ft(n.scrollHeight, n.clientHeight, e.scrollHeight, e.clientHeight);
  let s = -t.scrollLeft + lo(r);
  const i = -t.scrollTop;
  return Ve(e).direction === "rtl" && (s += Ft(n.clientWidth, e.clientWidth) - a), {
    width: a,
    height: o,
    x: s,
    y: i
  };
}
function ph(r, n) {
  const t = $e(r), e = at(r), a = t.visualViewport;
  let o = e.clientWidth, s = e.clientHeight, i = 0, c = 0;
  if (a) {
    o = a.width, s = a.height;
    const l = oo();
    (!l || l && n === "fixed") && (i = a.offsetLeft, c = a.offsetTop);
  }
  return {
    width: o,
    height: s,
    x: i,
    y: c
  };
}
const hh = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function mh(r, n) {
  const t = jt(r, !0, n === "fixed"), e = t.top + r.clientTop, a = t.left + r.clientLeft, o = nt(r) ? er(r) : rt(1), s = r.clientWidth * o.x, i = r.clientHeight * o.y, c = a * o.x, l = e * o.y;
  return {
    width: s,
    height: i,
    x: c,
    y: l
  };
}
function ls(r, n, t) {
  let e;
  if (n === "viewport")
    e = ph(r, t);
  else if (n === "document")
    e = fh(at(r));
  else if (Pe(n))
    e = mh(n, t);
  else {
    const a = Qi(r);
    e = {
      x: n.x - a.x,
      y: n.y - a.y,
      width: n.width,
      height: n.height
    };
  }
  return Ln(e);
}
function Ui(r, n) {
  const t = Et(r);
  return t === n || !Pe(t) || fr(t) ? !1 : Ve(t).position === "fixed" || Ui(t, n);
}
function vh(r, n) {
  const t = n.get(r);
  if (t)
    return t;
  let e = Yr(r, [], !1).filter((i) => Pe(i) && Dr(i) !== "body"), a = null;
  const o = Ve(r).position === "fixed";
  let s = o ? Et(r) : r;
  for (; Pe(s) && !fr(s); ) {
    const i = Ve(s), c = ao(s);
    !c && i.position === "fixed" && (a = null), (o ? !c && !a : !c && i.position === "static" && !!a && hh.has(a.position) || Lr(s) && !c && Ui(r, s)) ? e = e.filter((u) => u !== s) : a = i, s = Et(s);
  }
  return n.set(r, e), e;
}
function gh(r) {
  let {
    element: n,
    boundary: t,
    rootBoundary: e,
    strategy: a
  } = r;
  const s = [...t === "clippingAncestors" ? Gn(n) ? [] : vh(n, this._c) : [].concat(t), e], i = s[0], c = s.reduce((l, u) => {
    const d = ls(n, u, a);
    return l.top = Ft(d.top, l.top), l.right = pr(d.right, l.right), l.bottom = pr(d.bottom, l.bottom), l.left = Ft(d.left, l.left), l;
  }, ls(n, i, a));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function yh(r) {
  const {
    width: n,
    height: t
  } = zi(r);
  return {
    width: n,
    height: t
  };
}
function wh(r, n, t) {
  const e = nt(n), a = at(n), o = t === "fixed", s = jt(r, !0, o, n);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = rt(0);
  function l() {
    c.x = lo(a);
  }
  if (e || !e && !o)
    if ((Dr(n) !== "body" || Lr(a)) && (i = Xn(n)), e) {
      const p = jt(n, !0, o, n);
      c.x = p.x + n.clientLeft, c.y = p.y + n.clientTop;
    } else a && l();
  o && !e && a && l();
  const u = a && !e && !o ? qi(a, i) : rt(0), d = s.left + i.scrollLeft - c.x - u.x, f = s.top + i.scrollTop - c.y - u.y;
  return {
    x: d,
    y: f,
    width: s.width,
    height: s.height
  };
}
function ua(r) {
  return Ve(r).position === "static";
}
function us(r, n) {
  if (!nt(r) || Ve(r).position === "fixed")
    return null;
  if (n)
    return n(r);
  let t = r.offsetParent;
  return at(r) === t && (t = t.ownerDocument.body), t;
}
function Ki(r, n) {
  const t = $e(r);
  if (Gn(r))
    return t;
  if (!nt(r)) {
    let a = Et(r);
    for (; a && !fr(a); ) {
      if (Pe(a) && !ua(a))
        return a;
      a = Et(a);
    }
    return t;
  }
  let e = us(r, n);
  for (; e && Op(e) && ua(e); )
    e = us(e, n);
  return e && fr(e) && ua(e) && !ao(e) ? t : e || Lp(r) || t;
}
const bh = async function(r) {
  const n = this.getOffsetParent || Ki, t = this.getDimensions, e = await t(r.floating);
  return {
    reference: wh(r.reference, await n(r.floating), r.strategy),
    floating: {
      x: 0,
      y: 0,
      width: e.width,
      height: e.height
    }
  };
};
function Dh(r) {
  return Ve(r).direction === "rtl";
}
const kh = {
  convertOffsetParentRelativeRectToViewportRelativeRect: uh,
  getDocumentElement: at,
  getClippingRect: gh,
  getOffsetParent: Ki,
  getElementRects: bh,
  getClientRects: dh,
  getDimensions: yh,
  getScale: er,
  isElement: Pe,
  isRTL: Dh
};
function Gi(r, n) {
  return r.x === n.x && r.y === n.y && r.width === n.width && r.height === n.height;
}
function xh(r, n) {
  let t = null, e;
  const a = at(r);
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
    const h = jr(d), m = jr(a.clientWidth - (u + f)), v = jr(a.clientHeight - (d + p)), g = jr(u), x = {
      rootMargin: -h + "px " + -m + "px " + -v + "px " + -g + "px",
      threshold: Ft(0, pr(1, c)) || 1
    };
    let T = !0;
    function C(D) {
      const y = D[0].intersectionRatio;
      if (y !== c) {
        if (!T)
          return s();
        y ? s(!1, y) : e = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      y === 1 && !Gi(l, r.getBoundingClientRect()) && s(), T = !1;
    }
    try {
      t = new IntersectionObserver(C, {
        ...x,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(C, x);
    }
    t.observe(r);
  }
  return s(!0), o;
}
function Mh(r, n, t, e) {
  e === void 0 && (e = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: o = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = e, l = co(r), u = a || o ? [...l ? Yr(l) : [], ...Yr(n)] : [];
  u.forEach((g) => {
    a && g.addEventListener("scroll", t, {
      passive: !0
    }), o && g.addEventListener("resize", t);
  });
  const d = l && i ? xh(l, t) : null;
  let f = -1, p = null;
  s && (p = new ResizeObserver((g) => {
    let [_] = g;
    _ && _.target === l && p && (p.unobserve(n), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var x;
      (x = p) == null || x.observe(n);
    })), t();
  }), l && !c && p.observe(l), p.observe(n));
  let h, m = c ? jt(r) : null;
  c && v();
  function v() {
    const g = jt(r);
    m && !Gi(m, g) && t(), m = g, h = requestAnimationFrame(v);
  }
  return t(), () => {
    var g;
    u.forEach((_) => {
      a && _.removeEventListener("scroll", t), o && _.removeEventListener("resize", t);
    }), d == null || d(), (g = p) == null || g.disconnect(), p = null, c && cancelAnimationFrame(h);
  };
}
const _h = ih, Ch = ah, ds = nh, Sh = (r, n, t) => {
  const e = /* @__PURE__ */ new Map(), a = {
    platform: kh,
    ...t
  }, o = {
    ...a.platform,
    _c: e
  };
  return th(r, n, {
    ...a,
    platform: o
  });
};
var Eh = typeof document < "u", Ph = function() {
}, vn = Eh ? Wa : Ph;
function $n(r, n) {
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
        if (!$n(r[e], n[e]))
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
      if (!(o === "_owner" && r.$$typeof) && !$n(r[o], n[o]))
        return !1;
    }
    return !0;
  }
  return r !== r && n !== n;
}
function Xi(r) {
  return typeof window > "u" ? 1 : (r.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function fs(r, n) {
  const t = Xi(r);
  return Math.round(n * t) / t;
}
function da(r) {
  const n = E.useRef(r);
  return vn(() => {
    n.current = r;
  }), n;
}
function Oh(r) {
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
  } = r, [u, d] = E.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: n,
    middlewareData: {},
    isPositioned: !1
  }), [f, p] = E.useState(e);
  $n(f, e) || p(e);
  const [h, m] = E.useState(null), [v, g] = E.useState(null), _ = E.useCallback((M) => {
    M !== D.current && (D.current = M, m(M));
  }, []), x = E.useCallback((M) => {
    M !== y.current && (y.current = M, g(M));
  }, []), T = o || h, C = s || v, D = E.useRef(null), y = E.useRef(null), w = E.useRef(u), O = c != null, Y = da(c), R = da(a), $ = da(l), H = E.useCallback(() => {
    if (!D.current || !y.current)
      return;
    const M = {
      placement: n,
      strategy: t,
      middleware: f
    };
    R.current && (M.platform = R.current), Sh(D.current, y.current, M).then((I) => {
      const V = {
        ...I,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: $.current !== !1
      };
      N.current && !$n(w.current, V) && (w.current = V, hc.flushSync(() => {
        d(V);
      }));
    });
  }, [f, n, t, R, $]);
  vn(() => {
    l === !1 && w.current.isPositioned && (w.current.isPositioned = !1, d((M) => ({
      ...M,
      isPositioned: !1
    })));
  }, [l]);
  const N = E.useRef(!1);
  vn(() => (N.current = !0, () => {
    N.current = !1;
  }), []), vn(() => {
    if (T && (D.current = T), C && (y.current = C), T && C) {
      if (Y.current)
        return Y.current(T, C, H);
      H();
    }
  }, [T, C, H, Y, O]);
  const P = E.useMemo(() => ({
    reference: D,
    floating: y,
    setReference: _,
    setFloating: x
  }), [_, x]), b = E.useMemo(() => ({
    reference: T,
    floating: C
  }), [T, C]), S = E.useMemo(() => {
    const M = {
      position: t,
      left: 0,
      top: 0
    };
    if (!b.floating)
      return M;
    const I = fs(b.floating, u.x), V = fs(b.floating, u.y);
    return i ? {
      ...M,
      transform: "translate(" + I + "px, " + V + "px)",
      ...Xi(b.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: I,
      top: V
    };
  }, [t, i, b.floating, u.x, u.y]);
  return E.useMemo(() => ({
    ...u,
    update: H,
    refs: P,
    elements: b,
    floatingStyles: S
  }), [u, H, P, b, S]);
}
const Th = (r) => {
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
      return e && n(e) ? e.current != null ? ds({
        element: e.current,
        padding: a
      }).fn(t) : {} : e ? ds({
        element: e,
        padding: a
      }).fn(t) : {};
    }
  };
}, Nh = (r, n) => ({
  ..._h(r),
  options: [r, n]
}), Yh = (r, n) => ({
  ...Ch(r),
  options: [r, n]
}), Rh = (r, n) => ({
  ...Th(r),
  options: [r, n]
}), Lh = {
  ...E
};
let ps = !1, Ih = 0;
const hs = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + Ih++
);
function $h() {
  const [r, n] = E.useState(() => ps ? hs() : void 0);
  return In(() => {
    r == null && n(hs());
  }, []), E.useEffect(() => {
    ps = !0;
  }, []), r;
}
const Ah = Lh.useId, Ji = Ah || $h;
let Rr;
process.env.NODE_ENV !== "production" && (Rr = /* @__PURE__ */ new Set());
function Fh() {
  for (var r, n = arguments.length, t = new Array(n), e = 0; e < n; e++)
    t[e] = arguments[e];
  const a = "Floating UI: " + t.join(" ");
  if (!((r = Rr) != null && r.has(a))) {
    var o;
    (o = Rr) == null || o.add(a), console.warn(a);
  }
}
function Wh() {
  for (var r, n = arguments.length, t = new Array(n), e = 0; e < n; e++)
    t[e] = arguments[e];
  const a = "Floating UI: " + t.join(" ");
  if (!((r = Rr) != null && r.has(a))) {
    var o;
    (o = Rr) == null || o.add(a), console.error(a);
  }
}
const Hh = /* @__PURE__ */ E.forwardRef(function(n, t) {
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
  process.env.NODE_ENV !== "production" && (t || Fh("The `ref` prop is required for `FloatingArrow`."));
  const g = Ji(), [_, x] = E.useState(!1);
  if (In(() => {
    if (!a) return;
    Ve(a).direction === "rtl" && x(!0);
  }, [a]), !a)
    return null;
  const [T, C] = e.split("-"), D = T === "top" || T === "bottom";
  let y = d;
  (D && s != null && s.x || !D && s != null && s.y) && (y = null);
  const w = u * 2, O = w / 2, Y = i / 2 * (l / -8 + 1), R = c / 2 * l / 4, $ = !!p, H = y && C === "end" ? "bottom" : "top";
  let N = y && C === "end" ? "right" : "left";
  y && _ && (N = C === "end" ? "left" : "right");
  const P = (o == null ? void 0 : o.x) != null ? y || o.x : "", b = (o == null ? void 0 : o.y) != null ? y || o.y : "", S = p || "M0,0" + (" H" + i) + (" L" + (i - Y) + "," + (c - R)) + (" Q" + i / 2 + "," + c + " " + Y + "," + (c - R)) + " Z", M = {
    top: $ ? "rotate(180deg)" : "",
    left: $ ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: $ ? "" : "rotate(180deg)",
    right: $ ? "rotate(-90deg)" : "rotate(90deg)"
  }[T];
  return /* @__PURE__ */ re("svg", {
    ...v,
    "aria-hidden": !0,
    ref: t,
    width: $ ? i : i + w,
    height: i,
    viewBox: "0 0 " + i + " " + (c > i ? c : i),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [N]: P,
      [H]: b,
      [T]: D || $ ? "100%" : "calc(100% - " + w / 2 + "px)",
      transform: [M, h].filter((I) => !!I).join(" "),
      ...m
    },
    children: [w > 0 && /* @__PURE__ */ L("path", {
      clipPath: "url(#" + g + ")",
      fill: "none",
      stroke: f,
      strokeWidth: w + (p ? 0 : 1),
      d: S
    }), /* @__PURE__ */ L("path", {
      stroke: w && !p ? v.fill : "none",
      d: S
    }), /* @__PURE__ */ L("clipPath", {
      id: g,
      children: /* @__PURE__ */ L("rect", {
        x: -O,
        y: O * ($ ? -1 : 1),
        width: i + w,
        height: i
      })
    })]
  });
});
function Bh() {
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
const Vh = /* @__PURE__ */ E.createContext(null), Zh = /* @__PURE__ */ E.createContext(null), jh = () => {
  var r;
  return ((r = E.useContext(Vh)) == null ? void 0 : r.id) || null;
}, zh = () => E.useContext(Zh);
function Qh(r) {
  const {
    open: n = !1,
    onOpenChange: t,
    elements: e
  } = r, a = Ji(), o = E.useRef({}), [s] = E.useState(() => Bh()), i = jh() != null;
  if (process.env.NODE_ENV !== "production") {
    const p = e.reference;
    p && !Pe(p) && Wh("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [c, l] = E.useState(e.reference), u = eh((p, h, m) => {
    o.current.openEvent = p ? h : void 0, s.emit("openchange", {
      open: p,
      event: h,
      reason: m,
      nested: i
    }), t == null || t(p, h, m);
  }), d = E.useMemo(() => ({
    setPositionReference: l
  }), []), f = E.useMemo(() => ({
    reference: c || e.reference || null,
    floating: e.floating || null,
    domReference: e.reference
  }), [c, e.reference, e.floating]);
  return E.useMemo(() => ({
    dataRef: o,
    open: n,
    onOpenChange: u,
    elements: f,
    events: s,
    floatingId: a,
    refs: d
  }), [n, u, f, s, a, d]);
}
function qh(r) {
  r === void 0 && (r = {});
  const {
    nodeId: n
  } = r, t = Qh({
    ...r,
    elements: {
      reference: null,
      floating: null,
      ...r.elements
    }
  }), e = r.rootContext || t, a = e.elements, [o, s] = E.useState(null), [i, c] = E.useState(null), u = (a == null ? void 0 : a.domReference) || o, d = E.useRef(null), f = zh();
  In(() => {
    u && (d.current = u);
  }, [u]);
  const p = Oh({
    ...r,
    elements: {
      ...a,
      ...i && {
        reference: i
      }
    }
  }), h = E.useCallback((x) => {
    const T = Pe(x) ? {
      getBoundingClientRect: () => x.getBoundingClientRect(),
      getClientRects: () => x.getClientRects(),
      contextElement: x
    } : x;
    c(T), p.refs.setReference(T);
  }, [p.refs]), m = E.useCallback((x) => {
    (Pe(x) || x === null) && (d.current = x, s(x)), (Pe(p.refs.reference.current) || p.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    x !== null && !Pe(x)) && p.refs.setReference(x);
  }, [p.refs]), v = E.useMemo(() => ({
    ...p.refs,
    setReference: m,
    setPositionReference: h,
    domReference: d
  }), [p.refs, m, h]), g = E.useMemo(() => ({
    ...p.elements,
    domReference: u
  }), [p.elements, u]), _ = E.useMemo(() => ({
    ...p,
    ...e,
    refs: v,
    elements: g,
    nodeId: n
  }), [p, v, g, n, e]);
  return In(() => {
    e.dataRef.current.floatingContext = _;
    const x = f == null ? void 0 : f.nodesRef.current.find((T) => T.id === n);
    x && (x.context = _);
  }), E.useMemo(() => ({
    ...p,
    context: _,
    refs: v,
    elements: g
  }), [p, v, g, _]);
}
/*!
  react-datepicker v8.4.0
  https://github.com/Hacker0x01/react-datepicker
  Released under the MIT License.
*/
var $a = function(n, t) {
  return $a = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(e, a) {
    e.__proto__ = a;
  } || function(e, a) {
    for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
  }, $a(n, t);
};
function Me(r, n) {
  if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
  $a(r, n);
  function t() {
    this.constructor = r;
  }
  r.prototype = n === null ? Object.create(n) : (t.prototype = n.prototype, new t());
}
var X = function() {
  return X = Object.assign || function(t) {
    for (var e, a = 1, o = arguments.length; a < o; a++) {
      e = arguments[a];
      for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, X.apply(this, arguments);
};
function et(r, n, t) {
  if (t || arguments.length === 2) for (var e = 0, a = n.length, o; e < a; e++)
    (o || !(e in n)) && (o || (o = Array.prototype.slice.call(n, 0, e)), o[e] = n[e]);
  return r.concat(o || Array.prototype.slice.call(n));
}
var Uh = function(r) {
  var n = r.showTimeSelectOnly, t = n === void 0 ? !1 : n, e = r.showTime, a = e === void 0 ? !1 : e, o = r.className, s = r.children, i = t ? "Choose Time" : "Choose Date".concat(a ? " and Time" : "");
  return k.createElement("div", { className: o, role: "dialog", "aria-label": i, "aria-modal": "true" }, s);
}, Kh = function(r, n) {
  var t = Ne(null), e = Ne(r);
  e.current = r;
  var a = Te(function(o) {
    var s, i = o.composed && o.composedPath && o.composedPath().find(function(c) {
      return c instanceof Node;
    }) || o.target;
    t.current && !t.current.contains(i) && (n && i instanceof HTMLElement && i.classList.contains(n) || (s = e.current) === null || s === void 0 || s.call(e, o));
  }, [n]);
  return De(function() {
    return document.addEventListener("mousedown", a), function() {
      document.removeEventListener("mousedown", a);
    };
  }, [a]), t;
}, ea = function(r) {
  var n = r.children, t = r.onClickOutside, e = r.className, a = r.containerRef, o = r.style, s = r.ignoreClass, i = Kh(t, s);
  return k.createElement("div", { className: e, style: o, ref: function(c) {
    i.current = c, a && (a.current = c);
  } }, n);
}, A;
(function(r) {
  r.ArrowUp = "ArrowUp", r.ArrowDown = "ArrowDown", r.ArrowLeft = "ArrowLeft", r.ArrowRight = "ArrowRight", r.PageUp = "PageUp", r.PageDown = "PageDown", r.Home = "Home", r.End = "End", r.Enter = "Enter", r.Space = " ", r.Tab = "Tab", r.Escape = "Escape", r.Backspace = "Backspace", r.X = "x";
})(A || (A = {}));
function ec() {
  var r = typeof window < "u" ? window : globalThis;
  return r;
}
var $r = 12;
function ne(r) {
  if (r == null)
    return /* @__PURE__ */ new Date();
  var n = typeof r == "string" ? fp(r) : Z(r);
  return ta(n) ? n : /* @__PURE__ */ new Date();
}
function fa(r, n, t, e, a) {
  a === void 0 && (a = ne());
  for (var o = mr(t) || mr(uo()), s = Array.isArray(n) ? n : [n], i = 0, c = s; i < c.length; i++) {
    var l = c[i], u = sp(r, l, a, {
      locale: o
    });
    if (ta(u) && (!e || r === ue(u, l, t)))
      return u;
  }
  return null;
}
function ta(r, n) {
  return En(r) && !Zt(r, /* @__PURE__ */ new Date("1/1/1800"));
}
function ue(r, n, t) {
  if (t === "en")
    return rs(r, n, {
      useAdditionalWeekYearTokens: !0,
      useAdditionalDayOfYearTokens: !0
    });
  var e = t ? mr(t) : void 0;
  return t && !e && console.warn('A locale object was not found for the provided string ["'.concat(t, '"].')), e = e || mr(uo()), rs(r, n, {
    locale: e,
    useAdditionalWeekYearTokens: !0,
    useAdditionalDayOfYearTokens: !0
  });
}
function Ae(r, n) {
  var t = n.dateFormat, e = n.locale, a = Array.isArray(t) && t.length > 0 ? t[0] : t;
  return r && ue(r, a, e) || "";
}
var tc = " - ";
function Gh(r, n, t) {
  if (!r)
    return "";
  var e = Ae(r, t), a = n ? Ae(n, t) : "";
  return "".concat(e).concat(tc).concat(a);
}
function Xh(r, n) {
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
function pa(r, n) {
  var t = n.hour, e = t === void 0 ? 0 : t, a = n.minute, o = a === void 0 ? 0 : a, s = n.second, i = s === void 0 ? 0 : s;
  return pn(hn(mn(r, i), o), e);
}
function Jh(r) {
  return eo(r);
}
function e1(r, n) {
  return ue(r, "ddd", n);
}
function gn(r) {
  return Vt(r);
}
function xt(r, n, t) {
  var e = mr(n || uo());
  return ft(r, {
    locale: e,
    weekStartsOn: t
  });
}
function dt(r) {
  return Ni(r);
}
function Er(r) {
  return Un(r);
}
function ms(r) {
  return Na(r);
}
function vs() {
  return Vt(ne());
}
function gs(r) {
  return Oi(r);
}
function t1(r) {
  return dd(r);
}
function r1(r) {
  return Ti(r);
}
function Ge(r, n) {
  return r && n ? up(r, n) : !r && !n;
}
function Oe(r, n) {
  return r && n ? cp(r, n) : !r && !n;
}
function An(r, n) {
  return r && n ? lp(r, n) : !r && !n;
}
function G(r, n) {
  return r && n ? ld(r, n) : !r && !n;
}
function Rt(r, n) {
  return r && n ? df(r, n) : !r && !n;
}
function Pr(r, n, t) {
  var e, a = Vt(n), o = Oi(t);
  try {
    e = Nr(r, { start: a, end: o });
  } catch {
    e = !1;
  }
  return e;
}
function uo() {
  var r = ec();
  return r.__localeId__;
}
function mr(r) {
  if (typeof r == "string") {
    var n = ec();
    return n.__localeData__ ? n.__localeData__[r] : void 0;
  } else
    return r;
}
function n1(r, n, t) {
  return n(ue(r, "EEEE", t));
}
function a1(r, n) {
  return ue(r, "EEEEEE", n);
}
function o1(r, n) {
  return ue(r, "EEE", n);
}
function fo(r, n) {
  return ue(Fe(ne(), r), "LLLL", n);
}
function rc(r, n) {
  return ue(Fe(ne(), r), "LLL", n);
}
function s1(r, n) {
  return ue(Kt(ne(), r), "QQQ", n);
}
function We(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.maxDate, o = t.excludeDates, s = t.excludeDateIntervals, i = t.includeDates, c = t.includeDateIntervals, l = t.filterDate;
  return Ar(r, { minDate: e, maxDate: a }) || o && o.some(function(u) {
    return u instanceof Date ? G(r, u) : G(r, u.date);
  }) || s && s.some(function(u) {
    var d = u.start, f = u.end;
    return Nr(r, { start: d, end: f });
  }) || i && !i.some(function(u) {
    return G(r, u);
  }) || c && !c.some(function(u) {
    var d = u.start, f = u.end;
    return Nr(r, { start: d, end: f });
  }) || l && !l(ne(r)) || !1;
}
function po(r, n) {
  var t = n === void 0 ? {} : n, e = t.excludeDates, a = t.excludeDateIntervals;
  return a && a.length > 0 ? a.some(function(o) {
    var s = o.start, i = o.end;
    return Nr(r, { start: s, end: i });
  }) : e && e.some(function(o) {
    var s;
    return o instanceof Date ? G(r, o) : G(r, (s = o.date) !== null && s !== void 0 ? s : /* @__PURE__ */ new Date());
  }) || !1;
}
function nc(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.maxDate, o = t.excludeDates, s = t.includeDates, i = t.filterDate;
  return Ar(r, {
    minDate: e ? Ni(e) : void 0,
    maxDate: a ? Ti(a) : void 0
  }) || (o == null ? void 0 : o.some(function(c) {
    return Oe(r, c instanceof Date ? c : c.date);
  })) || s && !s.some(function(c) {
    return Oe(r, c);
  }) || i && !i(ne(r)) || !1;
}
function zr(r, n, t, e) {
  var a = U(r), o = Ee(r), s = U(n), i = Ee(n), c = U(e);
  return a === s && a === c ? o <= t && t <= i : a < s ? c === a && o <= t || c === s && i >= t || c < s && c > a : !1;
}
function i1(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.maxDate, o = t.excludeDates, s = t.includeDates;
  return Ar(r, { minDate: e, maxDate: a }) || o && o.some(function(i) {
    return Oe(i instanceof Date ? i : i.date, r);
  }) || s && !s.some(function(i) {
    return Oe(i, r);
  }) || !1;
}
function Qr(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.maxDate, o = t.excludeDates, s = t.includeDates, i = t.filterDate;
  return Ar(r, { minDate: e, maxDate: a }) || (o == null ? void 0 : o.some(function(c) {
    return An(r, c instanceof Date ? c : c.date);
  })) || s && !s.some(function(c) {
    return An(r, c);
  }) || i && !i(ne(r)) || !1;
}
function qr(r, n, t) {
  if (!n || !t || !En(n) || !En(t))
    return !1;
  var e = U(n), a = U(t);
  return e <= r && a >= r;
}
function yn(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.maxDate, o = t.excludeDates, s = t.includeDates, i = t.filterDate, c = new Date(r, 0, 1);
  return Ar(c, {
    minDate: e ? Un(e) : void 0,
    maxDate: a ? Yi(a) : void 0
  }) || (o == null ? void 0 : o.some(function(l) {
    return Ge(c, l instanceof Date ? l : l.date);
  })) || s && !s.some(function(l) {
    return Ge(c, l);
  }) || i && !i(ne(c)) || !1;
}
function Ur(r, n, t, e) {
  var a = U(r), o = $t(r), s = U(n), i = $t(n), c = U(e);
  return a === s && a === c ? o <= t && t <= i : a < s ? c === a && o <= t || c === s && i >= t || c < s && c > a : !1;
}
function Ar(r, n) {
  var t, e = n === void 0 ? {} : n, a = e.minDate, o = e.maxDate;
  return (t = a && ur(r, a) < 0 || o && ur(r, o) > 0) !== null && t !== void 0 ? t : !1;
}
function ys(r, n) {
  return n.some(function(t) {
    return lt(t) === lt(r) && ut(t) === ut(r) && kt(t) === kt(r);
  });
}
function ws(r, n) {
  var t = n === void 0 ? {} : n, e = t.excludeTimes, a = t.includeTimes, o = t.filterTime;
  return e && ys(r, e) || a && !ys(r, a) || o && !o(r) || !1;
}
function bs(r, n) {
  var t = n.minTime, e = n.maxTime;
  if (!t || !e)
    throw new Error("Both minTime and maxTime props required");
  var a = ne();
  a = pn(a, lt(r)), a = hn(a, ut(r)), a = mn(a, kt(r));
  var o = ne();
  o = pn(o, lt(t)), o = hn(o, ut(t)), o = mn(o, kt(t));
  var s = ne();
  s = pn(s, lt(e)), s = hn(s, ut(e)), s = mn(s, kt(e));
  var i;
  try {
    i = !Nr(a, { start: o, end: s });
  } catch {
    i = !1;
  }
  return i;
}
function Ds(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.includeDates, o = At(r, 1);
  return e && Pn(e, o) > 0 || a && a.every(function(s) {
    return Pn(s, o) > 0;
  }) || !1;
}
function ks(r, n) {
  var t = n === void 0 ? {} : n, e = t.maxDate, a = t.includeDates, o = Qe(r, 1);
  return e && Pn(o, e) > 0 || a && a.every(function(s) {
    return Pn(o, s) > 0;
  }) || !1;
}
function c1(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.includeDates, o = Un(r), s = Bi(o);
  return e && On(e, s) > 0 || a && a.every(function(i) {
    return On(i, s) > 0;
  }) || !1;
}
function l1(r, n) {
  var t = n === void 0 ? {} : n, e = t.maxDate, a = t.includeDates, o = Yi(r), s = Ja(o, 1);
  return e && On(s, e) > 0 || a && a.every(function(i) {
    return On(s, i) > 0;
  }) || !1;
}
function xs(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.includeDates, o = dr(r, 1);
  return e && Tn(e, o) > 0 || a && a.every(function(s) {
    return Tn(s, o) > 0;
  }) || !1;
}
function u1(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.yearItemNumber, o = a === void 0 ? $r : a, s = Er(dr(r, o)), i = bt(s, o).endPeriod, c = e && U(e);
  return c && c > i || !1;
}
function Ms(r, n) {
  var t = n === void 0 ? {} : n, e = t.maxDate, a = t.includeDates, o = it(r, 1);
  return e && Tn(o, e) > 0 || a && a.every(function(s) {
    return Tn(o, s) > 0;
  }) || !1;
}
function d1(r, n) {
  var t = n === void 0 ? {} : n, e = t.maxDate, a = t.yearItemNumber, o = a === void 0 ? $r : a, s = it(r, o), i = bt(s, o).startPeriod, c = e && U(e);
  return c && c < i || !1;
}
function ac(r) {
  var n = r.minDate, t = r.includeDates;
  if (t && n) {
    var e = t.filter(function(a) {
      return ur(a, n) >= 0;
    });
    return Ko(e);
  } else return t ? Ko(t) : n;
}
function oc(r) {
  var n = r.maxDate, t = r.includeDates;
  if (t && n) {
    var e = t.filter(function(a) {
      return ur(a, n) <= 0;
    });
    return Uo(e);
  } else return t ? Uo(t) : n;
}
function _s(r, n) {
  var t;
  r === void 0 && (r = []), n === void 0 && (n = "react-datepicker__day--highlighted");
  for (var e = /* @__PURE__ */ new Map(), a = 0, o = r.length; a < o; a++) {
    var s = r[a];
    if (ct(s)) {
      var i = ue(s, "MM.dd.yyyy"), c = e.get(i) || [];
      c.includes(n) || (c.push(n), e.set(i, c));
    } else if (typeof s == "object") {
      var l = Object.keys(s), u = (t = l[0]) !== null && t !== void 0 ? t : "", d = s[u];
      if (typeof u == "string" && Array.isArray(d))
        for (var f = 0, p = d.length; f < p; f++) {
          var h = d[f];
          if (h) {
            var i = ue(h, "MM.dd.yyyy"), c = e.get(i) || [];
            c.includes(u) || (c.push(u), e.set(i, c));
          }
        }
    }
  }
  return e;
}
function f1(r, n) {
  return r.length !== n.length ? !1 : r.every(function(t, e) {
    return t === n[e];
  });
}
function p1(r, n) {
  r === void 0 && (r = []), n === void 0 && (n = "react-datepicker__day--holidays");
  var t = /* @__PURE__ */ new Map();
  return r.forEach(function(e) {
    var a = e.date, o = e.holidayName;
    if (ct(a)) {
      var s = ue(a, "MM.dd.yyyy"), i = t.get(s) || {
        className: "",
        holidayNames: []
      };
      if (!("className" in i && i.className === n && f1(i.holidayNames, [o]))) {
        i.className = n;
        var c = i.holidayNames;
        i.holidayNames = c ? et(et([], c, !0), [o], !1) : [o], t.set(s, i);
      }
    }
  }), t;
}
function h1(r, n, t, e, a) {
  for (var o = a.length, s = [], i = 0; i < o; i++) {
    var c = r, l = a[i];
    l && (c = od(c, lt(l)), c = Ta(c, ut(l)), c = cd(c, kt(l)));
    var u = Ta(r, (t + 1) * e);
    St(c, n) && Zt(c, u) && l != null && s.push(l);
  }
  return s;
}
function Cs(r) {
  return r < 10 ? "0".concat(r) : "".concat(r);
}
function bt(r, n) {
  n === void 0 && (n = $r);
  var t = Math.ceil(U(r) / n) * n, e = t - (n - 1);
  return { startPeriod: e, endPeriod: t };
}
function m1(r) {
  var n = new Date(r.getFullYear(), r.getMonth(), r.getDate()), t = new Date(r.getFullYear(), r.getMonth(), r.getDate(), 24);
  return Math.round((+t - +n) / 36e5);
}
function Ss(r) {
  var n = r.getSeconds(), t = r.getMilliseconds();
  return Z(r.getTime() - n * 1e3 - t);
}
function v1(r, n) {
  return Ss(r).getTime() === Ss(n).getTime();
}
function Es(r) {
  if (!ct(r))
    throw new Error("Invalid date");
  var n = new Date(r);
  return n.setHours(0, 0, 0, 0), n;
}
function Ps(r, n) {
  if (!ct(r) || !ct(n))
    throw new Error("Invalid date received");
  var t = Es(r), e = Es(n);
  return Zt(t, e);
}
function sc(r) {
  return r.key === A.Space;
}
var g1 = (
  /** @class */
  function(r) {
    Me(n, r);
    function n(t) {
      var e = r.call(this, t) || this;
      return e.inputRef = k.createRef(), e.onTimeChange = function(a) {
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
        return c ? Vs(c, {
          date: s,
          value: a,
          onChange: e.onTimeChange
        }) : k.createElement("input", { type: "time", className: "react-datepicker-time__input", placeholder: "Time", name: "time-input", ref: e.inputRef, onClick: function() {
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
      return k.createElement(
        "div",
        { className: "react-datepicker__input-time-container" },
        k.createElement("div", { className: "react-datepicker-time__caption" }, this.props.timeInputLabel),
        k.createElement(
          "div",
          { className: "react-datepicker-time__input-container" },
          k.createElement("div", { className: "react-datepicker-time__input" }, this.renderTimeInput())
        )
      );
    }, n;
  }(xe)
), y1 = (
  /** @class */
  function(r) {
    Me(n, r);
    function n() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.dayEl = Mt(), t.handleClick = function(e) {
        !t.isDisabled() && t.props.onClick && t.props.onClick(e);
      }, t.handleMouseEnter = function(e) {
        !t.isDisabled() && t.props.onMouseEnter && t.props.onMouseEnter(e);
      }, t.handleOnKeyDown = function(e) {
        var a, o, s = e.key;
        s === A.Space && (e.preventDefault(), e.key = A.Enter), (o = (a = t.props).handleOnKeyDown) === null || o === void 0 || o.call(a, e);
      }, t.isSameDay = function(e) {
        return G(t.props.day, e);
      }, t.isKeyboardSelected = function() {
        var e;
        if (t.props.disabledKeyboardNavigation)
          return !1;
        var a = t.props.selectsMultiple ? (e = t.props.selectedDates) === null || e === void 0 ? void 0 : e.some(function(s) {
          return t.isSameDayOrWeek(s);
        }) : t.isSameDayOrWeek(t.props.selected), o = t.props.preSelection && t.isDisabled(t.props.preSelection);
        return !a && t.isSameDayOrWeek(t.props.preSelection) && !o;
      }, t.isDisabled = function(e) {
        return e === void 0 && (e = t.props.day), We(e, {
          minDate: t.props.minDate,
          maxDate: t.props.maxDate,
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals,
          includeDateIntervals: t.props.includeDateIntervals,
          includeDates: t.props.includeDates,
          filterDate: t.props.filterDate
        });
      }, t.isExcluded = function() {
        return po(t.props.day, {
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals
        });
      }, t.isStartOfWeek = function() {
        return G(t.props.day, xt(t.props.day, t.props.locale, t.props.calendarStartDay));
      }, t.isSameWeek = function(e) {
        return t.props.showWeekPicker && G(e, xt(t.props.day, t.props.locale, t.props.calendarStartDay));
      }, t.isSameDayOrWeek = function(e) {
        return t.isSameDay(e) || t.isSameWeek(e);
      }, t.getHighLightedClass = function() {
        var e = t.props, a = e.day, o = e.highlightDates;
        if (!o)
          return !1;
        var s = ue(a, "MM.dd.yyyy");
        return o.get(s);
      }, t.getHolidaysClass = function() {
        var e, a = t.props, o = a.day, s = a.holidays;
        if (!s)
          return [void 0];
        var i = ue(o, "MM.dd.yyyy");
        return s.has(i) ? [(e = s.get(i)) === null || e === void 0 ? void 0 : e.className] : [void 0];
      }, t.isInRange = function() {
        var e = t.props, a = e.day, o = e.startDate, s = e.endDate;
        return !o || !s ? !1 : Pr(a, o, s);
      }, t.isInSelectingRange = function() {
        var e, a = t.props, o = a.day, s = a.selectsStart, i = a.selectsEnd, c = a.selectsRange, l = a.selectsDisabledDaysInRange, u = a.startDate, d = a.endDate, f = (e = t.props.selectingDate) !== null && e !== void 0 ? e : t.props.preSelection;
        return !(s || i || c) || !f || !l && t.isDisabled() ? !1 : s && d && (Zt(f, d) || Rt(f, d)) ? Pr(o, f, d) : i && u && (St(f, u) || Rt(f, u)) || c && u && !d && (St(f, u) || Rt(f, u)) ? Pr(o, u, f) : !1;
      }, t.isSelectingRangeStart = function() {
        var e;
        if (!t.isInSelectingRange())
          return !1;
        var a = t.props, o = a.day, s = a.startDate, i = a.selectsStart, c = (e = t.props.selectingDate) !== null && e !== void 0 ? e : t.props.preSelection;
        return i ? G(o, c) : G(o, s);
      }, t.isSelectingRangeEnd = function() {
        var e;
        if (!t.isInSelectingRange())
          return !1;
        var a = t.props, o = a.day, s = a.endDate, i = a.selectsEnd, c = a.selectsRange, l = (e = t.props.selectingDate) !== null && e !== void 0 ? e : t.props.preSelection;
        return i || c ? G(o, l) : G(o, s);
      }, t.isRangeStart = function() {
        var e = t.props, a = e.day, o = e.startDate, s = e.endDate;
        return !o || !s ? !1 : G(o, a);
      }, t.isRangeEnd = function() {
        var e = t.props, a = e.day, o = e.startDate, s = e.endDate;
        return !o || !s ? !1 : G(s, a);
      }, t.isWeekend = function() {
        var e = sf(t.props.day);
        return e === 0 || e === 6;
      }, t.isAfterMonth = function() {
        return t.props.month !== void 0 && (t.props.month + 1) % 12 === Ee(t.props.day);
      }, t.isBeforeMonth = function() {
        return t.props.month !== void 0 && (Ee(t.props.day) + 1) % 12 === t.props.month;
      }, t.isCurrentDay = function() {
        return t.isSameDay(ne());
      }, t.isSelected = function() {
        var e;
        return t.props.selectsMultiple ? (e = t.props.selectedDates) === null || e === void 0 ? void 0 : e.some(function(a) {
          return t.isSameDayOrWeek(a);
        }) : t.isSameDayOrWeek(t.props.selected);
      }, t.getClassNames = function(e) {
        var a = t.props.dayClassName ? t.props.dayClassName(e) : void 0;
        return Ce("react-datepicker__day", a, "react-datepicker__day--" + e1(t.props.day), {
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
        return "".concat(l, " ").concat(ue(a, "PPPP", t.props.locale));
      }, t.getTitle = function() {
        var e = t.props, a = e.day, o = e.holidays, s = o === void 0 ? /* @__PURE__ */ new Map() : o, i = e.excludeDates, c = ue(a, "MM.dd.yyyy"), l = [];
        return s.has(c) && l.push.apply(l, s.get(c).holidayNames), t.isExcluded() && l.push(i == null ? void 0 : i.filter(function(u) {
          return u instanceof Date ? G(u, a) : G(u == null ? void 0 : u.date, a);
        }).map(function(u) {
          if (!(u instanceof Date))
            return u == null ? void 0 : u.message;
        })), l.join(", ");
      }, t.getTabIndex = function() {
        var e = t.props.selected, a = t.props.preSelection, o = !(t.props.showWeekPicker && (t.props.showWeekNumber || !t.isStartOfWeek())) && (t.isKeyboardSelected() || t.isSameDay(e) && G(a, e)) ? 0 : -1;
        return o;
      }, t.handleFocusDay = function() {
        var e;
        t.shouldFocusDay() && ((e = t.dayEl.current) === null || e === void 0 || e.focus({ preventScroll: !0 }));
      }, t.renderDayContents = function() {
        return t.props.monthShowsDuplicateDaysEnd && t.isAfterMonth() || t.props.monthShowsDuplicateDaysStart && t.isBeforeMonth() ? null : t.props.renderDayContents ? t.props.renderDayContents(ns(t.props.day), t.props.day) : ns(t.props.day);
      }, t.render = function() {
        return (
          // TODO: Use <option> instead of the "option" role to ensure accessibility across all devices.
          k.createElement(
            "div",
            { ref: t.dayEl, className: t.getClassNames(t.props.day), onKeyDown: t.handleOnKeyDown, onClick: t.handleClick, onMouseEnter: t.props.usePointerEvent ? void 0 : t.handleMouseEnter, onPointerEnter: t.props.usePointerEvent ? t.handleMouseEnter : void 0, tabIndex: t.getTabIndex(), "aria-label": t.getAriaLabel(), role: "option", title: t.getTitle(), "aria-disabled": t.isDisabled(), "aria-current": t.isCurrentDay() ? "date" : void 0, "aria-selected": t.isSelected() || t.isInRange() },
            t.renderDayContents(),
            t.getTitle() !== "" && k.createElement("span", { className: "overlay" }, t.getTitle())
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
  }(xe)
), w1 = (
  /** @class */
  function(r) {
    Me(n, r);
    function n() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.weekNumberEl = Mt(), t.handleClick = function(e) {
        t.props.onClick && t.props.onClick(e);
      }, t.handleOnKeyDown = function(e) {
        var a, o, s = e.key;
        s === A.Space && (e.preventDefault(), e.key = A.Enter), (o = (a = t.props).handleOnKeyDown) === null || o === void 0 || o.call(a, e);
      }, t.isKeyboardSelected = function() {
        return !t.props.disabledKeyboardNavigation && !G(t.props.date, t.props.selected) && G(t.props.date, t.props.preSelection);
      }, t.getTabIndex = function() {
        return t.props.showWeekPicker && t.props.showWeekNumber && (t.isKeyboardSelected() || G(t.props.date, t.props.selected) && G(t.props.preSelection, t.props.selected)) ? 0 : -1;
      }, t.handleFocusWeekNumber = function(e) {
        var a = !1;
        t.getTabIndex() === 0 && !(e != null && e.isInputFocused) && G(t.props.date, t.props.preSelection) && ((!document.activeElement || document.activeElement === document.body) && (a = !0), t.props.inline && !t.props.shouldFocusDayInline && (a = !1), t.props.containerRef && t.props.containerRef.current && t.props.containerRef.current.contains(document.activeElement) && document.activeElement && document.activeElement.classList.contains("react-datepicker__week-number") && (a = !0)), a && t.weekNumberEl.current && t.weekNumberEl.current.focus({ preventScroll: !0 });
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
        "react-datepicker__week-number--selected": !!i && G(this.props.date, this.props.selected)
      };
      return k.createElement("div", { ref: this.weekNumberEl, className: Ce(c), "aria-label": "".concat(s, " ").concat(this.props.weekNumber), onClick: this.handleClick, onKeyDown: this.handleOnKeyDown, tabIndex: this.getTabIndex() }, e);
    }, n;
  }(xe)
), b1 = (
  /** @class */
  function(r) {
    Me(n, r);
    function n() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.isDisabled = function(e) {
        return We(e, {
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
        return t.props.formatWeekNumber ? t.props.formatWeekNumber(e) : Jh(e);
      }, t.isWeekDisabled = function() {
        for (var e = t.startOfWeek(), a = je(e, 6), o = new Date(e); o <= a; ) {
          if (!t.isDisabled(o))
            return !1;
          o = je(o, 1);
        }
        return !0;
      }, t.renderDays = function() {
        var e = t.startOfWeek(), a = [], o = t.formatWeekNumber(e);
        if (t.props.showWeekNumber) {
          var s = t.props.onWeekSelect || t.props.showWeekPicker ? t.handleWeekClick.bind(t, e, o) : void 0;
          a.push(k.createElement(w1, X({ key: "W" }, n.defaultProps, t.props, { weekNumber: o, isWeekDisabled: t.isWeekDisabled(), date: e, onClick: s })));
        }
        return a.concat([0, 1, 2, 3, 4, 5, 6].map(function(i) {
          var c = je(e, i);
          return k.createElement(y1, X({}, n.defaultProps, t.props, { ariaLabelPrefixWhenEnabled: t.props.chooseDayAriaLabelPrefix, ariaLabelPrefixWhenDisabled: t.props.disabledDayAriaLabelPrefix, key: c.valueOf(), day: c, onClick: t.handleDayClick.bind(t, c), onMouseEnter: t.handleDayMouseEnter.bind(t, c) }));
        }));
      }, t.startOfWeek = function() {
        return xt(t.props.day, t.props.locale, t.props.calendarStartDay);
      }, t.isKeyboardSelected = function() {
        return !t.props.disabledKeyboardNavigation && !G(t.startOfWeek(), t.props.selected) && G(t.startOfWeek(), t.props.preSelection);
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
        "react-datepicker__week--selected": G(this.startOfWeek(), this.props.selected),
        "react-datepicker__week--keyboard-selected": this.isKeyboardSelected()
      };
      return k.createElement("div", { className: Ce(t) }, this.renderDays());
    }, n;
  }(xe)
), _r, D1 = 6, tr = {
  TWO_COLUMNS: "two_columns",
  THREE_COLUMNS: "three_columns",
  FOUR_COLUMNS: "four_columns"
}, ha = (_r = {}, _r[tr.TWO_COLUMNS] = {
  grid: [
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [10, 11]
  ],
  verticalNavigationOffset: 2
}, _r[tr.THREE_COLUMNS] = {
  grid: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9, 10, 11]
  ],
  verticalNavigationOffset: 3
}, _r[tr.FOUR_COLUMNS] = {
  grid: [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11]
  ],
  verticalNavigationOffset: 4
}, _r), Kr = 1;
function Os(r, n) {
  return r ? tr.FOUR_COLUMNS : n ? tr.TWO_COLUMNS : tr.THREE_COLUMNS;
}
var k1 = (
  /** @class */
  function(r) {
    Me(n, r);
    function n() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.MONTH_REFS = et([], Array(12), !0).map(function() {
        return Mt();
      }), t.QUARTER_REFS = et([], Array(4), !0).map(function() {
        return Mt();
      }), t.isDisabled = function(e) {
        return We(e, {
          minDate: t.props.minDate,
          maxDate: t.props.maxDate,
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals,
          includeDateIntervals: t.props.includeDateIntervals,
          includeDates: t.props.includeDates,
          filterDate: t.props.filterDate
        });
      }, t.isExcluded = function(e) {
        return po(e, {
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
        return !s || !i ? !1 : Oe(Fe(o, e), s);
      }, t.isRangeStartQuarter = function(e) {
        var a = t.props, o = a.day, s = a.startDate, i = a.endDate;
        return !s || !i ? !1 : An(Kt(o, e), s);
      }, t.isRangeEndMonth = function(e) {
        var a = t.props, o = a.day, s = a.startDate, i = a.endDate;
        return !s || !i ? !1 : Oe(Fe(o, e), i);
      }, t.isRangeEndQuarter = function(e) {
        var a = t.props, o = a.day, s = a.startDate, i = a.endDate;
        return !s || !i ? !1 : An(Kt(o, e), i);
      }, t.isInSelectingRangeMonth = function(e) {
        var a, o = t.props, s = o.day, i = o.selectsStart, c = o.selectsEnd, l = o.selectsRange, u = o.startDate, d = o.endDate, f = (a = t.props.selectingDate) !== null && a !== void 0 ? a : t.props.preSelection;
        return !(i || c || l) || !f ? !1 : i && d ? zr(f, d, e, s) : c && u || l && u && !d ? zr(u, f, e, s) : !1;
      }, t.isSelectingMonthRangeStart = function(e) {
        var a;
        if (!t.isInSelectingRangeMonth(e))
          return !1;
        var o = t.props, s = o.day, i = o.startDate, c = o.selectsStart, l = Fe(s, e), u = (a = t.props.selectingDate) !== null && a !== void 0 ? a : t.props.preSelection;
        return c ? Oe(l, u) : Oe(l, i);
      }, t.isSelectingMonthRangeEnd = function(e) {
        var a;
        if (!t.isInSelectingRangeMonth(e))
          return !1;
        var o = t.props, s = o.day, i = o.endDate, c = o.selectsEnd, l = o.selectsRange, u = Fe(s, e), d = (a = t.props.selectingDate) !== null && a !== void 0 ? a : t.props.preSelection;
        return c || l ? Oe(u, d) : Oe(u, i);
      }, t.isInSelectingRangeQuarter = function(e) {
        var a, o = t.props, s = o.day, i = o.selectsStart, c = o.selectsEnd, l = o.selectsRange, u = o.startDate, d = o.endDate, f = (a = t.props.selectingDate) !== null && a !== void 0 ? a : t.props.preSelection;
        return !(i || c || l) || !f ? !1 : i && d ? Ur(f, d, e, s) : c && u || l && u && !d ? Ur(u, f, e, s) : !1;
      }, t.isWeekInMonth = function(e) {
        var a = t.props.day, o = je(e, 6);
        return Oe(e, a) || Oe(o, a);
      }, t.isCurrentMonth = function(e, a) {
        return U(e) === U(ne()) && a === Ee(ne());
      }, t.isCurrentQuarter = function(e, a) {
        return U(e) === U(ne()) && a === $t(ne());
      }, t.isSelectedMonth = function(e, a, o) {
        return Ee(o) === a && U(e) === U(o);
      }, t.isSelectMonthInList = function(e, a, o) {
        return o.some(function(s) {
          return t.isSelectedMonth(e, a, s);
        });
      }, t.isSelectedQuarter = function(e, a, o) {
        return $t(e) === a && U(e) === U(o);
      }, t.isMonthSelected = function() {
        var e = t.props, a = e.day, o = e.selected, s = e.selectedDates, i = e.selectsMultiple, c = Ee(a);
        return i ? s == null ? void 0 : s.some(function(l) {
          return t.isSelectedMonth(a, c, l);
        }) : !!o && t.isSelectedMonth(a, c, o);
      }, t.renderWeeks = function() {
        for (var e = [], a = t.props.fixedHeight, o = 0, s = !1, i = xt(dt(t.props.day), t.props.locale, t.props.calendarStartDay), c = function(h) {
          return t.props.showWeekPicker ? xt(h, t.props.locale, t.props.calendarStartDay) : t.props.preSelection;
        }, l = function(h) {
          return t.props.showWeekPicker ? xt(h, t.props.locale, t.props.calendarStartDay) : t.props.selected;
        }, u = t.props.selected ? l(t.props.selected) : void 0, d = t.props.preSelection ? c(t.props.preSelection) : void 0; e.push(k.createElement(b1, X({}, t.props, { ariaLabelPrefix: t.props.weekAriaLabelPrefix, key: o, day: i, month: Ee(t.props.day), onDayClick: t.handleDayClick, onDayMouseEnter: t.handleDayMouseEnter, selected: u, preSelection: d, showWeekNumber: t.props.showWeekNumbers }))), !s; ) {
          o++, i = Sn(i, 1);
          var f = a && o >= D1, p = !a && !t.isWeekInMonth(i);
          if (f || p)
            if (t.props.peekNextMonth)
              s = !0;
            else
              break;
        }
        return e;
      }, t.onMonthClick = function(e, a) {
        var o = t.isMonthDisabledForLabelDate(a), s = o.isDisabled, i = o.labelDate;
        s || t.handleDayClick(dt(i), e);
      }, t.onMonthMouseEnter = function(e) {
        var a = t.isMonthDisabledForLabelDate(e), o = a.isDisabled, s = a.labelDate;
        o || t.handleDayMouseEnter(dt(s));
      }, t.handleMonthNavigation = function(e, a) {
        var o, s, i, c;
        (s = (o = t.props).setPreSelection) === null || s === void 0 || s.call(o, a), (c = (i = t.MONTH_REFS[e]) === null || i === void 0 ? void 0 : i.current) === null || c === void 0 || c.focus();
      }, t.handleKeyboardNavigation = function(e, a, o) {
        var s, i = t.props, c = i.selected, l = i.preSelection, u = i.setPreSelection, d = i.minDate, f = i.maxDate, p = i.showFourColumnMonthYearPicker, h = i.showTwoColumnMonthYearPicker;
        if (l) {
          var m = Os(p, h), v = t.getVerticalOffset(m), g = (s = ha[m]) === null || s === void 0 ? void 0 : s.grid, _ = function(y, w, O) {
            var Y, R, $ = w, H = O;
            switch (y) {
              case A.ArrowRight:
                $ = Qe(w, Kr), H = O === 11 ? 0 : O + Kr;
                break;
              case A.ArrowLeft:
                $ = At(w, Kr), H = O === 0 ? 11 : O - Kr;
                break;
              case A.ArrowUp:
                $ = At(w, v), H = !((Y = g == null ? void 0 : g[0]) === null || Y === void 0) && Y.includes(O) ? O + 12 - v : O - v;
                break;
              case A.ArrowDown:
                $ = Qe(w, v), H = !((R = g == null ? void 0 : g[g.length - 1]) === null || R === void 0) && R.includes(O) ? O - 12 + v : O + v;
                break;
            }
            return { newCalculatedDate: $, newCalculatedMonth: H };
          }, x = function(y, w, O) {
            for (var Y = 40, R = y, $ = !1, H = 0, N = _(R, w, O), P = N.newCalculatedDate, b = N.newCalculatedMonth; !$; ) {
              if (H >= Y) {
                P = w, b = O;
                break;
              }
              if (d && P < d) {
                R = A.ArrowRight;
                var S = _(R, P, b);
                P = S.newCalculatedDate, b = S.newCalculatedMonth;
              }
              if (f && P > f) {
                R = A.ArrowLeft;
                var S = _(R, P, b);
                P = S.newCalculatedDate, b = S.newCalculatedMonth;
              }
              if (i1(P, t.props)) {
                var S = _(R, P, b);
                P = S.newCalculatedDate, b = S.newCalculatedMonth;
              } else
                $ = !0;
              H++;
            }
            return { newCalculatedDate: P, newCalculatedMonth: b };
          };
          if (a === A.Enter) {
            t.isMonthDisabled(o) || (t.onMonthClick(e, o), u == null || u(c));
            return;
          }
          var T = x(a, l, o), C = T.newCalculatedDate, D = T.newCalculatedMonth;
          switch (a) {
            case A.ArrowRight:
            case A.ArrowLeft:
            case A.ArrowUp:
            case A.ArrowDown:
              t.handleMonthNavigation(D, C);
              break;
          }
        }
      }, t.getVerticalOffset = function(e) {
        var a, o;
        return (o = (a = ha[e]) === null || a === void 0 ? void 0 : a.verticalNavigationOffset) !== null && o !== void 0 ? o : 0;
      }, t.onMonthKeyDown = function(e, a) {
        var o = t.props, s = o.disabledKeyboardNavigation, i = o.handleOnMonthKeyDown, c = e.key;
        c !== A.Tab && e.preventDefault(), s || t.handleKeyboardNavigation(e, c, a), i && i(e);
      }, t.onQuarterClick = function(e, a) {
        var o = Kt(t.props.day, a);
        Qr(o, t.props) || t.handleDayClick(ms(o), e);
      }, t.onQuarterMouseEnter = function(e) {
        var a = Kt(t.props.day, e);
        Qr(a, t.props) || t.handleDayMouseEnter(ms(a));
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
              t.handleQuarterNavigation(a === 4 ? 1 : a + 1, Ja(t.props.preSelection, 1));
              break;
            case A.ArrowLeft:
              if (!t.props.preSelection)
                break;
              t.handleQuarterNavigation(a === 1 ? 4 : a - 1, Bi(t.props.preSelection));
              break;
          }
      }, t.isMonthDisabledForLabelDate = function(e) {
        var a, o = t.props, s = o.day, i = o.minDate, c = o.maxDate, l = o.excludeDates, u = o.includeDates, d = Fe(s, e);
        return {
          isDisabled: (a = (i || c || l || u) && nc(d, t.props)) !== null && a !== void 0 ? a : !1,
          labelDate: d
        };
      }, t.isMonthDisabled = function(e) {
        var a = t.isMonthDisabledForLabelDate(e).isDisabled;
        return a;
      }, t.getMonthClassNames = function(e) {
        var a = t.props, o = a.day, s = a.startDate, i = a.endDate, c = a.preSelection, l = a.monthClassName, u = l ? l(Fe(o, e)) : void 0, d = t.getSelection();
        return Ce("react-datepicker__month-text", "react-datepicker__month-".concat(e), u, {
          "react-datepicker__month-text--disabled": t.isMonthDisabled(e),
          "react-datepicker__month-text--selected": d ? t.isSelectMonthInList(o, e, d) : void 0,
          "react-datepicker__month-text--keyboard-selected": !t.props.disabledKeyboardNavigation && c && t.isSelectedMonth(o, e, c) && !t.isMonthSelected() && !t.isMonthDisabled(e),
          "react-datepicker__month-text--in-selecting-range": t.isInSelectingRangeMonth(e),
          "react-datepicker__month-text--in-range": s && i ? zr(s, i, e, o) : void 0,
          "react-datepicker__month-text--range-start": t.isRangeStartMonth(e),
          "react-datepicker__month-text--range-end": t.isRangeEndMonth(e),
          "react-datepicker__month-text--selecting-range-start": t.isSelectingMonthRangeStart(e),
          "react-datepicker__month-text--selecting-range-end": t.isSelectingMonthRangeEnd(e),
          "react-datepicker__month-text--today": t.isCurrentMonth(o, e)
        });
      }, t.getTabIndex = function(e) {
        if (t.props.preSelection == null)
          return "-1";
        var a = Ee(t.props.preSelection), o = t.isMonthDisabledForLabelDate(a).isDisabled, s = e === a && !(o || t.props.disabledKeyboardNavigation) ? "0" : "-1";
        return s;
      }, t.getQuarterTabIndex = function(e) {
        if (t.props.preSelection == null)
          return "-1";
        var a = $t(t.props.preSelection), o = Qr(t.props.day, t.props), s = e === a && !(o || t.props.disabledKeyboardNavigation) ? "0" : "-1";
        return s;
      }, t.getAriaLabel = function(e) {
        var a = t.props, o = a.chooseDayAriaLabelPrefix, s = o === void 0 ? "Choose" : o, i = a.disabledDayAriaLabelPrefix, c = i === void 0 ? "Not available" : i, l = a.day, u = a.locale, d = Fe(l, e), f = t.isDisabled(d) || t.isExcluded(d) ? c : s;
        return "".concat(f, " ").concat(ue(d, "MMMM yyyy", u));
      }, t.getQuarterClassNames = function(e) {
        var a = t.props, o = a.day, s = a.startDate, i = a.endDate, c = a.selected, l = a.minDate, u = a.maxDate, d = a.excludeDates, f = a.includeDates, p = a.filterDate, h = a.preSelection, m = a.disabledKeyboardNavigation, v = (l || u || d || f || p) && Qr(Kt(o, e), t.props);
        return Ce("react-datepicker__quarter-text", "react-datepicker__quarter-".concat(e), {
          "react-datepicker__quarter-text--disabled": v,
          "react-datepicker__quarter-text--selected": c ? t.isSelectedQuarter(o, e, c) : void 0,
          "react-datepicker__quarter-text--keyboard-selected": !m && h && t.isSelectedQuarter(o, e, h) && !v,
          "react-datepicker__quarter-text--in-selecting-range": t.isInSelectingRangeQuarter(e),
          "react-datepicker__quarter-text--in-range": s && i ? Ur(s, i, e, o) : void 0,
          "react-datepicker__quarter-text--range-start": t.isRangeStartQuarter(e),
          "react-datepicker__quarter-text--range-end": t.isRangeEndQuarter(e),
          "react-datepicker__quarter-text--today": t.isCurrentQuarter(o, e)
        });
      }, t.getMonthContent = function(e) {
        var a = t.props, o = a.showFullMonthYearPicker, s = a.renderMonthContent, i = a.locale, c = a.day, l = rc(e, i), u = fo(e, i);
        return s ? s(e, l, u, c) : o ? u : l;
      }, t.getQuarterContent = function(e) {
        var a, o = t.props, s = o.renderQuarterContent, i = o.locale, c = s1(e, i);
        return (a = s == null ? void 0 : s(e, c)) !== null && a !== void 0 ? a : c;
      }, t.renderMonths = function() {
        var e, a = t.props, o = a.showTwoColumnMonthYearPicker, s = a.showFourColumnMonthYearPicker, i = a.day, c = a.selected, l = (e = ha[Os(s, o)]) === null || e === void 0 ? void 0 : e.grid;
        return l == null ? void 0 : l.map(function(u, d) {
          return k.createElement("div", { className: "react-datepicker__month-wrapper", key: d }, u.map(function(f, p) {
            return k.createElement("div", { ref: t.MONTH_REFS[f], key: p, onClick: function(h) {
              t.onMonthClick(h, f);
            }, onKeyDown: function(h) {
              sc(h) && (h.preventDefault(), h.key = A.Enter), t.onMonthKeyDown(h, f);
            }, onMouseEnter: t.props.usePointerEvent ? void 0 : function() {
              return t.onMonthMouseEnter(f);
            }, onPointerEnter: t.props.usePointerEvent ? function() {
              return t.onMonthMouseEnter(f);
            } : void 0, tabIndex: Number(t.getTabIndex(f)), className: t.getMonthClassNames(f), "aria-disabled": t.isMonthDisabled(f), role: "option", "aria-label": t.getAriaLabel(f), "aria-current": t.isCurrentMonth(i, f) ? "date" : void 0, "aria-selected": c ? t.isSelectedMonth(i, f, c) : void 0 }, t.getMonthContent(f));
          }));
        });
      }, t.renderQuarters = function() {
        var e = t.props, a = e.day, o = e.selected, s = [1, 2, 3, 4];
        return k.createElement("div", { className: "react-datepicker__quarter-wrapper" }, s.map(function(i, c) {
          return k.createElement("div", { key: c, ref: t.QUARTER_REFS[c], role: "option", onClick: function(l) {
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
        return Ce("react-datepicker__month", {
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
      return k.createElement("div", { className: this.getClassNames(), onMouseLeave: this.props.usePointerEvent ? void 0 : this.handleMouseLeave, onPointerLeave: this.props.usePointerEvent ? this.handleMouseLeave : void 0, "aria-label": "".concat(c).concat(ue(o, "MMMM, yyyy", this.props.locale)), role: "listbox" }, e ? this.renderMonths() : a ? this.renderQuarters() : this.renderWeeks());
    }, n;
  }(xe)
), x1 = (
  /** @class */
  function(r) {
    Me(n, r);
    function n() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.isSelectedMonth = function(e) {
        return t.props.month === e;
      }, t.renderOptions = function() {
        return t.props.monthNames.map(function(e, a) {
          return k.createElement(
            "div",
            { className: t.isSelectedMonth(a) ? "react-datepicker__month-option react-datepicker__month-option--selected_month" : "react-datepicker__month-option", key: e, onClick: t.onChange.bind(t, a), "aria-selected": t.isSelectedMonth(a) ? "true" : void 0 },
            t.isSelectedMonth(a) ? k.createElement("span", { className: "react-datepicker__month-option--selected" }, "✓") : "",
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
      return k.createElement(ea, { className: "react-datepicker__month-dropdown", onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, n;
  }(xe)
), M1 = (
  /** @class */
  function(r) {
    Me(n, r);
    function n() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.state = {
        dropdownVisible: !1
      }, t.renderSelectOptions = function(e) {
        return e.map(function(a, o) {
          return k.createElement("option", { key: a, value: o }, a);
        });
      }, t.renderSelectMode = function(e) {
        return k.createElement("select", { value: t.props.month, className: "react-datepicker__month-select", onChange: function(a) {
          return t.onChange(parseInt(a.target.value));
        } }, t.renderSelectOptions(e));
      }, t.renderReadView = function(e, a) {
        return k.createElement(
          "div",
          { key: "read", style: { visibility: e ? "visible" : "hidden" }, className: "react-datepicker__month-read-view", onClick: t.toggleDropdown },
          k.createElement("span", { className: "react-datepicker__month-read-view--down-arrow" }),
          k.createElement("span", { className: "react-datepicker__month-read-view--selected-month" }, a[t.props.month])
        );
      }, t.renderDropdown = function(e) {
        return k.createElement(x1, X({ key: "dropdown" }, t.props, { monthNames: e, onChange: t.onChange, onCancel: t.toggleDropdown }));
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
        return rc(o, t.props.locale);
      } : function(o) {
        return fo(o, t.props.locale);
      }), a;
      switch (this.props.dropdownMode) {
        case "scroll":
          a = this.renderScrollMode(e);
          break;
        case "select":
          a = this.renderSelectMode(e);
          break;
      }
      return k.createElement("div", { className: "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(this.props.dropdownMode) }, a);
    }, n;
  }(xe)
);
function _1(r, n) {
  for (var t = [], e = dt(r), a = dt(n); !St(e, a); )
    t.push(ne(e)), e = Qe(e, 1);
  return t;
}
var C1 = (
  /** @class */
  function(r) {
    Me(n, r);
    function n(t) {
      var e = r.call(this, t) || this;
      return e.renderOptions = function() {
        return e.state.monthYearsList.map(function(a) {
          var o = Ra(a), s = Ge(e.props.date, a) && Oe(e.props.date, a);
          return k.createElement(
            "div",
            { className: s ? "react-datepicker__month-year-option--selected_month-year" : "react-datepicker__month-year-option", key: o, onClick: e.onChange.bind(e, o), "aria-selected": s ? "true" : void 0 },
            s ? k.createElement("span", { className: "react-datepicker__month-year-option--selected" }, "✓") : "",
            ue(a, e.props.dateFormat, e.props.locale)
          );
        });
      }, e.onChange = function(a) {
        return e.props.onChange(a);
      }, e.handleClickOutside = function() {
        e.props.onCancel();
      }, e.state = {
        monthYearsList: _1(e.props.minDate, e.props.maxDate)
      }, e;
    }
    return n.prototype.render = function() {
      var t = Ce({
        "react-datepicker__month-year-dropdown": !0,
        "react-datepicker__month-year-dropdown--scrollable": this.props.scrollableMonthYearDropdown
      });
      return k.createElement(ea, { className: t, onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, n;
  }(xe)
), S1 = (
  /** @class */
  function(r) {
    Me(n, r);
    function n() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.state = {
        dropdownVisible: !1
      }, t.renderSelectOptions = function() {
        for (var e = dt(t.props.minDate), a = dt(t.props.maxDate), o = []; !St(e, a); ) {
          var s = Ra(e);
          o.push(k.createElement("option", { key: s, value: s }, ue(e, t.props.dateFormat, t.props.locale))), e = Qe(e, 1);
        }
        return o;
      }, t.onSelectChange = function(e) {
        t.onChange(parseInt(e.target.value));
      }, t.renderSelectMode = function() {
        return k.createElement("select", { value: Ra(dt(t.props.date)), className: "react-datepicker__month-year-select", onChange: t.onSelectChange }, t.renderSelectOptions());
      }, t.renderReadView = function(e) {
        var a = ue(t.props.date, t.props.dateFormat, t.props.locale);
        return k.createElement(
          "div",
          { key: "read", style: { visibility: e ? "visible" : "hidden" }, className: "react-datepicker__month-year-read-view", onClick: t.toggleDropdown },
          k.createElement("span", { className: "react-datepicker__month-year-read-view--down-arrow" }),
          k.createElement("span", { className: "react-datepicker__month-year-read-view--selected-month-year" }, a)
        );
      }, t.renderDropdown = function() {
        return k.createElement(C1, X({ key: "dropdown" }, t.props, { onChange: t.onChange, onCancel: t.toggleDropdown }));
      }, t.renderScrollMode = function() {
        var e = t.state.dropdownVisible, a = [t.renderReadView(!e)];
        return e && a.unshift(t.renderDropdown()), a;
      }, t.onChange = function(e) {
        t.toggleDropdown();
        var a = ne(e);
        Ge(t.props.date, a) && Oe(t.props.date, a) || t.props.onChange(a);
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
      return k.createElement("div", { className: "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(this.props.dropdownMode) }, t);
    }, n;
  }(xe)
), E1 = (
  /** @class */
  function(r) {
    Me(n, r);
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
        (t.props.minTime || t.props.maxTime) && bs(e, t.props) || (t.props.excludeTimes || t.props.includeTimes || t.props.filterTime) && ws(e, t.props) || (o = (a = t.props).onChange) === null || o === void 0 || o.call(a, e);
      }, t.isSelectedTime = function(e) {
        return t.props.selected && v1(t.props.selected, e);
      }, t.isDisabledTime = function(e) {
        return (t.props.minTime || t.props.maxTime) && bs(e, t.props) || (t.props.excludeTimes || t.props.includeTimes || t.props.filterTime) && ws(e, t.props);
      }, t.liClasses = function(e) {
        var a, o = [
          "react-datepicker__time-list-item",
          t.props.timeClassName ? t.props.timeClassName(e) : void 0
        ];
        return t.isSelectedTime(e) && o.push("react-datepicker__time-list-item--selected"), t.isDisabledTime(e) && o.push("react-datepicker__time-list-item--disabled"), t.props.injectTimes && (lt(e) * 3600 + ut(e) * 60 + kt(e)) % (((a = t.props.intervals) !== null && a !== void 0 ? a : n.defaultProps.intervals) * 60) !== 0 && o.push("react-datepicker__time-list-item--injected"), o.join(" ");
      }, t.handleOnKeyDown = function(e, a) {
        var o, s;
        e.key === A.Space && (e.preventDefault(), e.key = A.Enter), (e.key === A.ArrowUp || e.key === A.ArrowLeft) && e.target instanceof HTMLElement && e.target.previousSibling && (e.preventDefault(), e.target.previousSibling instanceof HTMLElement && e.target.previousSibling.focus()), (e.key === A.ArrowDown || e.key === A.ArrowRight) && e.target instanceof HTMLElement && e.target.nextSibling && (e.preventDefault(), e.target.nextSibling instanceof HTMLElement && e.target.nextSibling.focus()), e.key === A.Enter && t.handleClick(a), (s = (o = t.props).handleOnKeyDown) === null || s === void 0 || s.call(o, e);
      }, t.renderTimes = function() {
        for (var e, a = [], o = typeof t.props.format == "string" ? t.props.format : "p", s = (e = t.props.intervals) !== null && e !== void 0 ? e : n.defaultProps.intervals, i = t.props.selected || t.props.openToDate || ne(), c = gn(i), l = t.props.injectTimes && t.props.injectTimes.sort(function(v, g) {
          return v.getTime() - g.getTime();
        }), u = 60 * m1(i), d = u / s, f = 0; f < d; f++) {
          var p = Ta(c, f * s);
          if (a.push(p), l) {
            var h = h1(c, p, f, s, l);
            a = a.concat(h);
          }
        }
        var m = a.reduce(function(v, g) {
          return g.getTime() <= i.getTime() ? g : v;
        }, a[0]);
        return a.map(function(v) {
          return k.createElement("li", { key: v.valueOf(), onClick: t.handleClick.bind(t, v), className: t.liClasses(v), ref: function(g) {
            v === m && (t.centerLi = g);
          }, onKeyDown: function(g) {
            t.handleOnKeyDown(g, v);
          }, tabIndex: v === m ? 0 : -1, role: "option", "aria-selected": t.isSelectedTime(v) ? "true" : void 0, "aria-disabled": t.isDisabledTime(v) ? "true" : void 0 }, ue(v, o, t.props.locale));
        });
      }, t.renderTimeCaption = function() {
        return t.props.showTimeCaption === !1 ? k.createElement(k.Fragment, null) : k.createElement(
          "div",
          { className: "react-datepicker__header react-datepicker__header--time ".concat(t.props.showTimeSelectOnly ? "react-datepicker__header--time--only" : ""), ref: function(e) {
            t.header = e;
          } },
          k.createElement("div", { className: "react-datepicker-time__header" }, t.props.timeCaption)
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
      return k.createElement(
        "div",
        { className: "react-datepicker__time-container ".concat(((e = this.props.todayButton) !== null && e !== void 0 ? e : n.defaultProps.todayButton) ? "react-datepicker__time-container--with-today-button" : "") },
        this.renderTimeCaption(),
        k.createElement(
          "div",
          { className: "react-datepicker__time" },
          k.createElement(
            "div",
            { className: "react-datepicker__time-box" },
            k.createElement("ul", { className: "react-datepicker__time-list", ref: function(o) {
              t.list = o;
            }, style: a ? { height: a } : {}, role: "listbox", "aria-label": this.props.timeCaption }, this.renderTimes())
          )
        )
      );
    }, n.calcCenterPosition = function(t, e) {
      return e.offsetTop - (t / 2 - e.clientHeight / 2);
    }, n;
  }(xe)
), Ts = 3, P1 = (
  /** @class */
  function(r) {
    Me(n, r);
    function n(t) {
      var e = r.call(this, t) || this;
      return e.YEAR_REFS = et([], Array(e.props.yearItemNumber), !0).map(function() {
        return Mt();
      }), e.isDisabled = function(a) {
        return We(a, {
          minDate: e.props.minDate,
          maxDate: e.props.maxDate,
          excludeDates: e.props.excludeDates,
          includeDates: e.props.includeDates,
          filterDate: e.props.filterDate
        });
      }, e.isExcluded = function(a) {
        return po(a, {
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
          var p = bt(d, f).startPeriod;
          e.isDisabled(o) || e.isExcluded(o) || ((i = (s = e.props).setPreSelection) === null || i === void 0 || i.call(s, o), a - p < 0 ? e.updateFocusOnPaginate(f - (p - a)) : a - p >= f ? e.updateFocusOnPaginate(Math.abs(f - (a - p))) : (l = (c = e.YEAR_REFS[a - p]) === null || c === void 0 ? void 0 : c.current) === null || l === void 0 || l.focus());
        }
      }, e.isSameDay = function(a, o) {
        return G(a, o);
      }, e.isCurrentYear = function(a) {
        return a === U(ne());
      }, e.isRangeStart = function(a) {
        return e.props.startDate && e.props.endDate && Ge(Ue(ne(), a), e.props.startDate);
      }, e.isRangeEnd = function(a) {
        return e.props.startDate && e.props.endDate && Ge(Ue(ne(), a), e.props.endDate);
      }, e.isInRange = function(a) {
        return qr(a, e.props.startDate, e.props.endDate);
      }, e.isInSelectingRange = function(a) {
        var o = e.props, s = o.selectsStart, i = o.selectsEnd, c = o.selectsRange, l = o.startDate, u = o.endDate;
        return !(s || i || c) || !e.selectingDate() ? !1 : s && u ? qr(a, e.selectingDate(), u) : i && l || c && l && !u ? qr(a, l, e.selectingDate()) : !1;
      }, e.isSelectingRangeStart = function(a) {
        var o;
        if (!e.isInSelectingRange(a))
          return !1;
        var s = e.props, i = s.startDate, c = s.selectsStart, l = Ue(ne(), a);
        return c ? Ge(l, (o = e.selectingDate()) !== null && o !== void 0 ? o : null) : Ge(l, i ?? null);
      }, e.isSelectingRangeEnd = function(a) {
        var o;
        if (!e.isInSelectingRange(a))
          return !1;
        var s = e.props, i = s.endDate, c = s.selectsEnd, l = s.selectsRange, u = Ue(ne(), a);
        return c || l ? Ge(u, (o = e.selectingDate()) !== null && o !== void 0 ? o : null) : Ge(u, i ?? null);
      }, e.isKeyboardSelected = function(a) {
        if (!(e.props.date === void 0 || e.props.selected == null || e.props.preSelection == null)) {
          var o = e.props, s = o.minDate, i = o.maxDate, c = o.excludeDates, l = o.includeDates, u = o.filterDate, d = Er(Ue(e.props.date, a)), f = (s || i || c || l || u) && yn(a, e.props);
          return !e.props.disabledKeyboardNavigation && !e.props.inline && !G(d, Er(e.props.selected)) && G(d, Er(e.props.preSelection)) && !f;
        }
      }, e.isSelectedYear = function(a) {
        var o = e.props, s = o.selectsMultiple, i = o.selected, c = o.selectedDates;
        return s ? c == null ? void 0 : c.some(function(l) {
          return a === U(l);
        }) : !!i && a === U(i);
      }, e.onYearClick = function(a, o) {
        var s = e.props.date;
        s !== void 0 && e.handleYearClick(Er(Ue(s, o)), a);
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
              e.handleYearNavigation(o + 1, it(e.props.preSelection, 1));
              break;
            case A.ArrowLeft:
              if (e.props.preSelection == null)
                break;
              e.handleYearNavigation(o - 1, dr(e.props.preSelection, 1));
              break;
            case A.ArrowUp: {
              if (u === void 0 || d === void 0 || e.props.preSelection == null)
                break;
              var p = bt(u, d).startPeriod, h = Ts, m = o - h;
              if (m < p) {
                var v = d % h;
                o >= p && o < p + v ? h = v : h += v, m = o - h;
              }
              e.handleYearNavigation(m, dr(e.props.preSelection, h));
              break;
            }
            case A.ArrowDown: {
              if (u === void 0 || d === void 0 || e.props.preSelection == null)
                break;
              var g = bt(u, d).endPeriod, h = Ts, m = o + h;
              if (m > g) {
                var v = d % h;
                o <= g && o > g - v ? h = v : h += v, m = o + h;
              }
              e.handleYearNavigation(m, it(e.props.preSelection, h));
              break;
            }
          }
        f && f(a);
      }, e.getYearClassNames = function(a) {
        var o = e.props, s = o.date, i = o.minDate, c = o.maxDate, l = o.excludeDates, u = o.includeDates, d = o.filterDate, f = o.yearClassName;
        return Ce("react-datepicker__year-text", "react-datepicker__year-".concat(a), s ? f == null ? void 0 : f(Ue(s, a)) : void 0, {
          "react-datepicker__year-text--selected": e.isSelectedYear(a),
          "react-datepicker__year-text--disabled": (i || c || l || u || d) && yn(a, e.props),
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
        var o = U(e.props.preSelection), s = yn(a, e.props);
        return a === o && !s ? "0" : "-1";
      }, e.getYearContent = function(a) {
        return e.props.renderYearContent ? e.props.renderYearContent(a) : a;
      }, e;
    }
    return n.prototype.render = function() {
      var t = this, e = [], a = this.props, o = a.date, s = a.yearItemNumber, i = a.onYearMouseEnter, c = a.onYearMouseLeave;
      if (o === void 0)
        return null;
      for (var l = bt(o, s), u = l.startPeriod, d = l.endPeriod, f = function(m) {
        e.push(k.createElement("div", { ref: p.YEAR_REFS[m - u], onClick: function(v) {
          t.onYearClick(v, m);
        }, onKeyDown: function(v) {
          sc(v) && (v.preventDefault(), v.key = A.Enter), t.onYearKeyDown(v, m);
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
      return k.createElement(
        "div",
        { className: "react-datepicker__year" },
        k.createElement("div", { className: "react-datepicker__year-wrapper", onMouseLeave: this.props.usePointerEvent ? void 0 : this.props.clearSelectingDate, onPointerLeave: this.props.usePointerEvent ? this.props.clearSelectingDate : void 0 }, e)
      );
    }, n;
  }(xe)
);
function O1(r, n, t, e) {
  for (var a = [], o = 0; o < 2 * n + 1; o++) {
    var s = r + n - o, i = !0;
    t && (i = U(t) <= s), e && i && (i = U(e) >= s), i && a.push(s);
  }
  return a;
}
var T1 = (
  /** @class */
  function(r) {
    Me(n, r);
    function n(t) {
      var e = r.call(this, t) || this;
      e.renderOptions = function() {
        var i = e.props.year, c = e.state.yearsList.map(function(d) {
          return k.createElement(
            "div",
            { className: i === d ? "react-datepicker__year-option react-datepicker__year-option--selected_year" : "react-datepicker__year-option", key: d, onClick: e.onChange.bind(e, d), "aria-selected": i === d ? "true" : void 0 },
            i === d ? k.createElement("span", { className: "react-datepicker__year-option--selected" }, "✓") : "",
            d
          );
        }), l = e.props.minDate ? U(e.props.minDate) : null, u = e.props.maxDate ? U(e.props.maxDate) : null;
        return (!u || !e.state.yearsList.find(function(d) {
          return d === u;
        })) && c.unshift(k.createElement(
          "div",
          { className: "react-datepicker__year-option", key: "upcoming", onClick: e.incrementYears },
          k.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming" })
        )), (!l || !e.state.yearsList.find(function(d) {
          return d === l;
        })) && c.push(k.createElement(
          "div",
          { className: "react-datepicker__year-option", key: "previous", onClick: e.decrementYears },
          k.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous" })
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
        yearsList: O1(e.props.year, s, e.props.minDate, e.props.maxDate)
      }, e.dropdownRef = Mt(), e;
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
      var t = Ce({
        "react-datepicker__year-dropdown": !0,
        "react-datepicker__year-dropdown--scrollable": this.props.scrollableYearDropdown
      });
      return k.createElement(ea, { className: t, containerRef: this.dropdownRef, onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, n;
  }(xe)
), N1 = (
  /** @class */
  function(r) {
    Me(n, r);
    function n() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.state = {
        dropdownVisible: !1
      }, t.renderSelectOptions = function() {
        for (var e = t.props.minDate ? U(t.props.minDate) : 1900, a = t.props.maxDate ? U(t.props.maxDate) : 2100, o = [], s = e; s <= a; s++)
          o.push(k.createElement("option", { key: s, value: s }, s));
        return o;
      }, t.onSelectChange = function(e) {
        t.onChange(parseInt(e.target.value));
      }, t.renderSelectMode = function() {
        return k.createElement("select", { value: t.props.year, className: "react-datepicker__year-select", onChange: t.onSelectChange }, t.renderSelectOptions());
      }, t.renderReadView = function(e) {
        return k.createElement(
          "div",
          { key: "read", style: { visibility: e ? "visible" : "hidden" }, className: "react-datepicker__year-read-view", onClick: function(a) {
            return t.toggleDropdown(a);
          } },
          k.createElement("span", { className: "react-datepicker__year-read-view--down-arrow" }),
          k.createElement("span", { className: "react-datepicker__year-read-view--selected-year" }, t.props.year)
        );
      }, t.renderDropdown = function() {
        return k.createElement(T1, X({ key: "dropdown" }, t.props, { onChange: t.onChange, onCancel: t.toggleDropdown }));
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
      return k.createElement("div", { className: "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(this.props.dropdownMode) }, t);
    }, n;
  }(xe)
), Y1 = [
  "react-datepicker__year-select",
  "react-datepicker__month-select",
  "react-datepicker__month-year-select"
], R1 = function(r) {
  var n = (r.className || "").split(/\s+/);
  return Y1.some(function(t) {
    return n.indexOf(t) >= 0;
  });
}, L1 = (
  /** @class */
  function(r) {
    Me(n, r);
    function n(t) {
      var e = r.call(this, t) || this;
      return e.monthContainer = void 0, e.handleClickOutside = function(a) {
        e.props.onClickOutside(a);
      }, e.setClickOutsideRef = function() {
        return e.containerRef.current;
      }, e.handleDropdownFocus = function(a) {
        var o, s;
        R1(a.target) && ((s = (o = e.props).onDropdownFocus) === null || s === void 0 || s.call(o, a));
      }, e.getDateInView = function() {
        var a = e.props, o = a.preSelection, s = a.selected, i = a.openToDate, c = ac(e.props), l = oc(e.props), u = ne(), d = i || s || o;
        return d || (c && Zt(u, c) ? c : l && St(u, l) ? l : u);
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
            date: At(o, 1)
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
        e.setState({ selectingDate: Ue(ne(), o) }), e.props.onYearMouseEnter && e.props.onYearMouseEnter(a, o);
      }, e.handleYearMouseLeave = function(a, o) {
        e.props.onYearMouseLeave && e.props.onYearMouseLeave(a, o);
      }, e.handleYearChange = function(a) {
        var o, s, i, c;
        (s = (o = e.props).onYearChange) === null || s === void 0 || s.call(o, a), e.setState({ isRenderAriaLiveMessage: !0 }), e.props.adjustDateOnChange && (e.props.onSelect(a), (c = (i = e.props).setOpen) === null || c === void 0 || c.call(i, !0)), e.props.setPreSelection && e.props.setPreSelection(a);
      }, e.getEnabledPreSelectionDateForMonth = function(a) {
        if (!We(a, e.props))
          return a;
        for (var o = dt(a), s = r1(a), i = ud(s, o), c = null, l = 0; l <= i; l++) {
          var u = je(o, l);
          if (!We(u, e.props)) {
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
            date: Ue(s, Number(a))
          };
        }, function() {
          return e.handleYearChange(e.state.date);
        });
      }, e.changeMonth = function(a) {
        e.setState(function(o) {
          var s = o.date;
          return {
            date: Fe(s, Number(a))
          };
        }, function() {
          return e.handleMonthChange(e.state.date);
        });
      }, e.changeMonthYear = function(a) {
        e.setState(function(o) {
          var s = o.date;
          return {
            date: Ue(Fe(s, Ee(a)), U(a))
          };
        }, function() {
          return e.handleMonthYearChange(e.state.date);
        });
      }, e.header = function(a) {
        a === void 0 && (a = e.state.date);
        var o = xt(a, e.props.locale, e.props.calendarStartDay), s = [];
        return e.props.showWeekNumbers && s.push(k.createElement("div", { key: "W", className: "react-datepicker__day-name" }, e.props.weekLabel || "#")), s.concat([0, 1, 2, 3, 4, 5, 6].map(function(i) {
          var c = je(o, i), l = e.formatWeekday(c, e.props.locale), u = e.props.weekDayClassName ? e.props.weekDayClassName(c) : void 0;
          return k.createElement("div", { key: i, "aria-label": ue(c, "EEEE", e.props.locale), className: Ce("react-datepicker__day-name", u) }, l);
        }));
      }, e.formatWeekday = function(a, o) {
        return e.props.formatWeekDay ? n1(a, e.props.formatWeekDay, o) : e.props.useWeekdaysShort ? o1(a, o) : a1(a, o);
      }, e.decreaseYear = function() {
        e.setState(function(a) {
          var o, s = a.date;
          return {
            date: dr(s, e.props.showYearPicker ? (o = e.props.yearItemNumber) !== null && o !== void 0 ? o : n.defaultProps.yearItemNumber : 1)
          };
        }, function() {
          return e.handleYearChange(e.state.date);
        });
      }, e.clearSelectingDate = function() {
        e.setState({ selectingDate: void 0 });
      }, e.renderPreviousButton = function() {
        var a, o, s;
        if (!e.props.renderCustomHeader) {
          var i = (a = e.props.monthsShown) !== null && a !== void 0 ? a : n.defaultProps.monthsShown, c = e.props.showPreviousMonths ? i - 1 : 0, l = (o = e.props.monthSelectedIn) !== null && o !== void 0 ? o : c, u = At(e.state.date, l), d;
          switch (!0) {
            case e.props.showMonthYearPicker:
              d = xs(e.state.date, e.props);
              break;
            case e.props.showYearPicker:
              d = u1(e.state.date, e.props);
              break;
            case e.props.showQuarterYearPicker:
              d = c1(e.state.date, e.props);
              break;
            default:
              d = Ds(u, e.props);
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
            var m = e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker, v = e.props, g = v.previousMonthButtonLabel, _ = g === void 0 ? n.defaultProps.previousMonthButtonLabel : g, x = v.previousYearButtonLabel, T = x === void 0 ? n.defaultProps.previousYearButtonLabel : x, C = e.props, D = C.previousMonthAriaLabel, y = D === void 0 ? typeof _ == "string" ? _ : "Previous Month" : D, w = C.previousYearAriaLabel, O = w === void 0 ? typeof T == "string" ? T : "Previous Year" : w;
            return k.createElement(
              "button",
              { type: "button", className: p.join(" "), onClick: h, onKeyDown: e.props.handleOnKeyDown, "aria-label": m ? O : y },
              k.createElement("span", { className: f.join(" ") }, m ? T : _)
            );
          }
        }
      }, e.increaseYear = function() {
        e.setState(function(a) {
          var o, s = a.date;
          return {
            date: it(s, e.props.showYearPicker ? (o = e.props.yearItemNumber) !== null && o !== void 0 ? o : n.defaultProps.yearItemNumber : 1)
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
              o = Ms(e.state.date, e.props);
              break;
            case e.props.showYearPicker:
              o = d1(e.state.date, e.props);
              break;
            case e.props.showQuarterYearPicker:
              o = l1(e.state.date, e.props);
              break;
            default:
              o = ks(e.state.date, e.props);
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
            var l = e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker, u = e.props, d = u.nextMonthButtonLabel, f = d === void 0 ? n.defaultProps.nextMonthButtonLabel : d, p = u.nextYearButtonLabel, h = p === void 0 ? n.defaultProps.nextYearButtonLabel : p, m = e.props, v = m.nextMonthAriaLabel, g = v === void 0 ? typeof f == "string" ? f : "Next Month" : v, _ = m.nextYearAriaLabel, x = _ === void 0 ? typeof h == "string" ? h : "Next Year" : _;
            return k.createElement(
              "button",
              { type: "button", className: s.join(" "), onClick: c, onKeyDown: e.props.handleOnKeyDown, "aria-label": l ? x : g },
              k.createElement("span", { className: i.join(" ") }, l ? h : f)
            );
          }
        }
      }, e.renderCurrentMonth = function(a) {
        a === void 0 && (a = e.state.date);
        var o = ["react-datepicker__current-month"];
        return e.props.showYearDropdown && o.push("react-datepicker__current-month--hasYearDropdown"), e.props.showMonthDropdown && o.push("react-datepicker__current-month--hasMonthDropdown"), e.props.showMonthYearDropdown && o.push("react-datepicker__current-month--hasMonthYearDropdown"), k.createElement("h2", { className: o.join(" ") }, ue(a, e.props.dateFormat, e.props.locale));
      }, e.renderYearDropdown = function(a) {
        if (a === void 0 && (a = !1), !(!e.props.showYearDropdown || a))
          return k.createElement(N1, X({}, n.defaultProps, e.props, { date: e.state.date, onChange: e.changeYear, year: U(e.state.date) }));
      }, e.renderMonthDropdown = function(a) {
        if (a === void 0 && (a = !1), !(!e.props.showMonthDropdown || a))
          return k.createElement(M1, X({}, n.defaultProps, e.props, { month: Ee(e.state.date), onChange: e.changeMonth }));
      }, e.renderMonthYearDropdown = function(a) {
        if (a === void 0 && (a = !1), !(!e.props.showMonthYearDropdown || a))
          return k.createElement(S1, X({}, n.defaultProps, e.props, { date: e.state.date, onChange: e.changeMonthYear }));
      }, e.handleTodayButtonClick = function(a) {
        e.props.onSelect(vs(), a), e.props.setPreSelection && e.props.setPreSelection(vs());
      }, e.renderTodayButton = function() {
        if (!(!e.props.todayButton || e.props.showTimeSelectOnly))
          return k.createElement("div", { className: "react-datepicker__today-button", onClick: e.handleTodayButtonClick }, e.props.todayButton);
      }, e.renderDefaultHeader = function(a) {
        var o = a.monthDate, s = a.i;
        return k.createElement(
          "div",
          { className: "react-datepicker__header ".concat(e.props.showTimeSelect ? "react-datepicker__header--has-time-select" : "") },
          e.renderCurrentMonth(o),
          k.createElement(
            "div",
            { className: "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(e.props.dropdownMode), onFocus: e.handleDropdownFocus },
            e.renderMonthDropdown(s !== 0),
            e.renderMonthYearDropdown(s !== 0),
            e.renderYearDropdown(s !== 0)
          ),
          k.createElement("div", { className: "react-datepicker__day-names" }, e.header(o))
        );
      }, e.renderCustomHeader = function(a) {
        var o, s, i = a.monthDate, c = a.i;
        if (e.props.showTimeSelect && !e.state.monthContainer || e.props.showTimeSelectOnly)
          return null;
        var l = Ds(e.state.date, e.props), u = ks(e.state.date, e.props), d = xs(e.state.date, e.props), f = Ms(e.state.date, e.props), p = !e.props.showMonthYearPicker && !e.props.showQuarterYearPicker && !e.props.showYearPicker;
        return k.createElement(
          "div",
          { className: "react-datepicker__header react-datepicker__header--custom", onFocus: e.props.onDropdownFocus },
          (s = (o = e.props).renderCustomHeader) === null || s === void 0 ? void 0 : s.call(o, X(X({}, e.state), { customHeaderCount: c, monthDate: i, changeMonth: e.changeMonth, changeYear: e.changeYear, decreaseMonth: e.decreaseMonth, increaseMonth: e.increaseMonth, decreaseYear: e.decreaseYear, increaseYear: e.increaseYear, prevMonthButtonDisabled: l, nextMonthButtonDisabled: u, prevYearButtonDisabled: d, nextYearButtonDisabled: f })),
          p && k.createElement("div", { className: "react-datepicker__day-names" }, e.header(i))
        );
      }, e.renderYearHeader = function(a) {
        var o = a.monthDate, s = e.props, i = s.showYearPicker, c = s.yearItemNumber, l = c === void 0 ? n.defaultProps.yearItemNumber : c, u = bt(o, l), d = u.startPeriod, f = u.endPeriod;
        return k.createElement("div", { className: "react-datepicker__header react-datepicker-year-header" }, i ? "".concat(d, " - ").concat(f) : U(o));
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
          for (var s = [], i = (a = e.props.monthsShown) !== null && a !== void 0 ? a : n.defaultProps.monthsShown, c = e.props.showPreviousMonths ? i - 1 : 0, l = e.props.showMonthYearPicker || e.props.showQuarterYearPicker ? it(e.state.date, c) : At(e.state.date, c), u = (o = e.props.monthSelectedIn) !== null && o !== void 0 ? o : c, d = 0; d < i; ++d) {
            var f = d - u + c, p = e.props.showMonthYearPicker || e.props.showQuarterYearPicker ? it(l, f) : Qe(l, f), h = "month-".concat(d), m = d < i - 1, v = d > 0;
            s.push(k.createElement(
              "div",
              { key: h, ref: function(g) {
                e.monthContainer = g ?? void 0;
              }, className: "react-datepicker__month-container" },
              e.renderHeader({ monthDate: p, i: d }),
              k.createElement(k1, X({}, n.defaultProps, e.props, { containerRef: e.containerRef, ariaLabelPrefix: e.props.monthAriaLabelPrefix, day: p, onDayClick: e.handleDayClick, handleOnKeyDown: e.props.handleOnDayKeyDown, handleOnMonthKeyDown: e.props.handleOnKeyDown, onDayMouseEnter: e.handleDayMouseEnter, onMouseLeave: e.handleMonthMouseLeave, orderInDisplay: d, selectingDate: e.state.selectingDate, monthShowsDuplicateDaysEnd: m, monthShowsDuplicateDaysStart: v }))
            ));
          }
          return s;
        }
      }, e.renderYears = function() {
        if (!e.props.showTimeSelectOnly && e.props.showYearPicker)
          return k.createElement(
            "div",
            { className: "react-datepicker__year--container" },
            e.renderHeader({ monthDate: e.state.date }),
            k.createElement(P1, X({}, n.defaultProps, e.props, { selectingDate: e.state.selectingDate, date: e.state.date, onDayClick: e.handleDayClick, clearSelectingDate: e.clearSelectingDate, onYearMouseEnter: e.handleYearMouseEnter, onYearMouseLeave: e.handleYearMouseLeave }))
          );
      }, e.renderTimeSection = function() {
        if (e.props.showTimeSelect && (e.state.monthContainer || e.props.showTimeSelectOnly))
          return k.createElement(E1, X({}, n.defaultProps, e.props, { onChange: e.props.onTimeChange, format: e.props.timeFormat, intervals: e.props.timeIntervals, monthRef: e.state.monthContainer }));
      }, e.renderInputTimeSection = function() {
        var a = e.props.selected ? new Date(e.props.selected) : void 0, o = a && ta(a) && !!e.props.selected, s = o ? "".concat(Cs(a.getHours()), ":").concat(Cs(a.getMinutes())) : "";
        if (e.props.showTimeInput)
          return k.createElement(g1, X({}, n.defaultProps, e.props, { date: a, timeString: s, onChange: e.props.onTimeChange }));
      }, e.renderAriaLiveRegion = function() {
        var a, o = bt(e.state.date, (a = e.props.yearItemNumber) !== null && a !== void 0 ? a : n.defaultProps.yearItemNumber), s = o.startPeriod, i = o.endPeriod, c;
        return e.props.showYearPicker ? c = "".concat(s, " - ").concat(i) : e.props.showMonthYearPicker || e.props.showQuarterYearPicker ? c = U(e.state.date) : c = "".concat(fo(Ee(e.state.date), e.props.locale), " ").concat(U(e.state.date)), k.createElement("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live" }, e.state.isRenderAriaLiveMessage && c);
      }, e.renderChildren = function() {
        if (e.props.children)
          return k.createElement("div", { className: "react-datepicker__children-container" }, e.props.children);
      }, e.containerRef = Mt(), e.state = {
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
          yearItemNumber: $r
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
      if (this.props.preSelection && (!G(this.props.preSelection, t.preSelection) || this.props.monthSelectedIn !== t.monthSelectedIn)) {
        var a = !Oe(this.state.date, this.props.preSelection);
        this.setState({
          date: this.props.preSelection
        }, function() {
          return a && e.handleCustomMonthChange(e.state.date);
        });
      } else this.props.openToDate && !G(this.props.openToDate, t.openToDate) && this.setState({
        date: this.props.openToDate
      });
    }, n.prototype.render = function() {
      var t = this.props.container || Uh;
      return k.createElement(
        ea,
        { onClickOutside: this.handleClickOutside, style: { display: "contents" }, ignoreClass: this.props.outsideClickIgnoreClass },
        k.createElement(
          "div",
          { style: { display: "contents" }, ref: this.containerRef },
          k.createElement(
            t,
            { className: Ce("react-datepicker", this.props.className, {
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
  }(xe)
), I1 = function(r) {
  var n = r.icon, t = r.className, e = t === void 0 ? "" : t, a = r.onClick, o = "react-datepicker__calendar-icon";
  if (typeof n == "string")
    return k.createElement("i", { className: "".concat(o, " ").concat(n, " ").concat(e), "aria-hidden": "true", onClick: a });
  if (k.isValidElement(n)) {
    var s = n;
    return k.cloneElement(s, {
      className: "".concat(s.props.className || "", " ").concat(o, " ").concat(e),
      onClick: function(i) {
        typeof s.props.onClick == "function" && s.props.onClick(i), typeof a == "function" && a(i);
      }
    });
  }
  return k.createElement(
    "svg",
    { className: "".concat(o, " ").concat(e), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", onClick: a },
    k.createElement("path", { d: "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" })
  );
}, ic = (
  /** @class */
  function(r) {
    Me(n, r);
    function n(t) {
      var e = r.call(this, t) || this;
      return e.portalRoot = null, e.el = document.createElement("div"), e;
    }
    return n.prototype.componentDidMount = function() {
      this.portalRoot = (this.props.portalHost || document).getElementById(this.props.portalId), this.portalRoot || (this.portalRoot = document.createElement("div"), this.portalRoot.setAttribute("id", this.props.portalId), (this.props.portalHost || document.body).appendChild(this.portalRoot)), this.portalRoot.appendChild(this.el);
    }, n.prototype.componentWillUnmount = function() {
      this.portalRoot && this.portalRoot.removeChild(this.el);
    }, n.prototype.render = function() {
      return mc.createPortal(this.props.children, this.el);
    }, n;
  }(xe)
), $1 = "[tabindex], a, button, input, select, textarea", A1 = function(r) {
  return (r instanceof HTMLAnchorElement || !r.disabled) && r.tabIndex !== -1;
}, cc = (
  /** @class */
  function(r) {
    Me(n, r);
    function n(t) {
      var e = r.call(this, t) || this;
      return e.getTabChildren = function() {
        var a;
        return Array.prototype.slice.call((a = e.tabLoopRef.current) === null || a === void 0 ? void 0 : a.querySelectorAll($1), 1, -1).filter(A1);
      }, e.handleFocusStart = function() {
        var a = e.getTabChildren();
        a && a.length > 1 && a[a.length - 1].focus();
      }, e.handleFocusEnd = function() {
        var a = e.getTabChildren();
        a && a.length > 1 && a[0].focus();
      }, e.tabLoopRef = Mt(), e;
    }
    return n.prototype.render = function() {
      var t;
      return ((t = this.props.enableTabLoop) !== null && t !== void 0 ? t : n.defaultProps.enableTabLoop) ? k.createElement(
        "div",
        { className: "react-datepicker__tab-loop", ref: this.tabLoopRef },
        k.createElement("div", { className: "react-datepicker__tab-loop__start", tabIndex: 0, onFocus: this.handleFocusStart }),
        this.props.children,
        k.createElement("div", { className: "react-datepicker__tab-loop__end", tabIndex: 0, onFocus: this.handleFocusEnd })
      ) : this.props.children;
    }, n.defaultProps = {
      enableTabLoop: !0
    }, n;
  }(xe)
);
function F1(r) {
  var n = function(t) {
    var e, a = typeof t.hidePopper == "boolean" ? t.hidePopper : !0, o = Ne(null), s = qh(X({ open: !a, whileElementsMounted: Mh, placement: t.popperPlacement, middleware: et([
      Yh({ padding: 15 }),
      Nh(10),
      Rh({ element: o })
    ], (e = t.popperModifiers) !== null && e !== void 0 ? e : [], !0) }, t.popperProps)), i = X(X({}, t), { hidePopper: a, popperProps: X(X({}, s), { arrowRef: o }) });
    return k.createElement(r, X({}, i));
  };
  return n;
}
var W1 = (
  /** @class */
  function(r) {
    Me(n, r);
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
        var v = Ce("react-datepicker-popper", e);
        m = k.createElement(
          cc,
          { enableTabLoop: l },
          k.createElement(
            "div",
            { ref: p.refs.setFloating, style: p.floatingStyles, className: v, "data-placement": p.placement, onKeyDown: u },
            i,
            h && k.createElement(Hh, { ref: p.arrowRef, context: p.context, fill: "currentColor", strokeWidth: 1, height: 8, width: 16, style: { transform: "translateY(-1px)" }, className: "react-datepicker__triangle" })
          )
        );
      }
      this.props.popperContainer && (m = Hs(this.props.popperContainer, {}, m)), d && !s && (m = k.createElement(ic, { portalId: d, portalHost: f }, m));
      var g = Ce("react-datepicker-wrapper", a);
      return k.createElement(
        k.Fragment,
        null,
        k.createElement("div", { ref: p.refs.setReference, className: g }, c),
        m
      );
    }, n;
  }(xe)
), H1 = F1(W1), Ns = "react-datepicker-ignore-onclickoutside";
function B1(r, n) {
  return r && n ? Ee(r) !== Ee(n) || U(r) !== U(n) : r !== n;
}
var ma = "Date input not valid.", V1 = (
  /** @class */
  function(r) {
    Me(n, r);
    function n(t) {
      var e = r.call(this, t) || this;
      return e.calendar = null, e.input = null, e.getPreSelection = function() {
        return e.props.openToDate ? e.props.openToDate : e.props.selectsEnd && e.props.startDate ? e.props.startDate : e.props.selectsStart && e.props.endDate ? e.props.endDate : ne();
      }, e.modifyHolidays = function() {
        var a;
        return (a = e.props.holidays) === null || a === void 0 ? void 0 : a.reduce(function(o, s) {
          var i = new Date(s.date);
          return ta(i) ? et(et([], o, !0), [X(X({}, s), { date: i })], !1) : o;
        }, []);
      }, e.calcInitialState = function() {
        var a, o = e.getPreSelection(), s = ac(e.props), i = oc(e.props), c = s && Zt(o, gn(s)) ? s : i && St(o, gs(i)) ? i : o;
        return {
          open: e.props.startOpen || !1,
          preventFocus: !1,
          inputValue: null,
          preSelection: (a = e.props.selectsRange ? e.props.startDate : e.props.selected) !== null && a !== void 0 ? a : c,
          // transforming highlighted days (perhaps nested array)
          // to flat Map for faster access in day.jsx
          highlightDates: _s(e.props.highlightDates),
          focused: !1,
          // used to focus day in inline version after month has changed, but not on
          // initial render
          shouldFocusDayInline: !1,
          isRenderAriaLiveMessage: !1,
          wasHidden: !1
        };
      }, e.resetHiddenStatus = function() {
        e.setState(X(X({}, e.state), { wasHidden: !1 }));
      }, e.setHiddenStatus = function() {
        e.setState(X(X({}, e.state), { wasHidden: !0 }));
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
          lastPreSelectChange: va
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
        return ct(e.state.preSelection);
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
            lastPreSelectChange: Z1
          });
          var f = e.props, p = f.selectsRange, h = f.startDate, m = f.endDate, v = (a = e.props.dateFormat) !== null && a !== void 0 ? a : n.defaultProps.dateFormat, g = (o = e.props.strictParsing) !== null && o !== void 0 ? o : n.defaultProps.strictParsing, _ = (d == null ? void 0 : d.target) instanceof HTMLInputElement ? d.target.value : "";
          if (p) {
            var x = _.split(v.includes("-") ? tc : "-", 2).map(function(R) {
              return R.trim();
            }), T = x[0], C = x[1], D = fa(T ?? "", v, e.props.locale, g), y = fa(C ?? "", v, e.props.locale, g), w = (h == null ? void 0 : h.getTime()) !== (D == null ? void 0 : D.getTime()), O = (m == null ? void 0 : m.getTime()) !== (y == null ? void 0 : y.getTime());
            if (!w && !O || D && We(D, e.props) || y && We(y, e.props))
              return;
            (i = (s = e.props).onChange) === null || i === void 0 || i.call(s, [D, y], d);
          } else {
            var Y = fa(_, v, e.props.locale, g, (c = e.props.selected) !== null && c !== void 0 ? c : void 0);
            (Y || !_) && e.setSelected(Y, d, !0);
          }
        }
      }, e.handleSelect = function(a, o, s) {
        if (!e.props.readOnly) {
          if (e.props.shouldCloseOnSelect && !e.props.showTimeSelect && e.sendFocusBackToInput(), e.props.onChangeRaw && e.props.onChangeRaw(o), e.setSelected(a, o, !1, s), e.props.showDateSelect && e.setState({ isRenderAriaLiveMessage: !0 }), !e.props.shouldCloseOnSelect || e.props.showTimeSelect)
            e.setPreSelection(a);
          else if (!e.props.inline) {
            e.props.selectsRange || e.setOpen(!1);
            var i = e.props, c = i.startDate, l = i.endDate;
            c && !l && (e.props.swapRange || !Ps(a, c)) && e.setOpen(!1);
          }
        }
      }, e.setSelected = function(a, o, s, i) {
        var c, l, u = a;
        if (e.props.showYearPicker) {
          if (u !== null && yn(U(u), e.props))
            return;
        } else if (e.props.showMonthYearPicker) {
          if (u !== null && nc(u, e.props))
            return;
        } else if (u !== null && We(u, e.props))
          return;
        var d = e.props, f = d.onChange, p = d.selectsRange, h = d.startDate, m = d.endDate, v = d.selectsMultiple, g = d.selectedDates, _ = d.minTime, x = d.swapRange;
        if (!Rt(e.props.selected, u) || e.props.allowSameDay || p || v)
          if (u !== null && (e.props.selected && (!s || !e.props.showTimeSelect && !e.props.showTimeSelectOnly && !e.props.showTimeInput) && (u = pa(u, {
            hour: lt(e.props.selected),
            minute: ut(e.props.selected),
            second: kt(e.props.selected)
          })), !s && (e.props.showTimeSelect || e.props.showTimeSelectOnly) && _ && (u = pa(u, {
            hour: _.getHours(),
            minute: _.getMinutes(),
            second: _.getSeconds()
          })), e.props.inline || e.setState({
            preSelection: u
          }), e.props.focusSelectedMonth || e.setState({ monthSelectedIn: i })), p) {
            var T = !h && !m, C = h && !m, D = h && m;
            T ? f == null || f([u, null], o) : C && (u === null ? f == null || f([null, null], o) : Ps(u, h) ? x ? f == null || f([u, h], o) : f == null || f([u, null], o) : f == null || f([h, u], o)), D && (f == null || f([u, null], o));
          } else if (v) {
            if (u !== null)
              if (!(g != null && g.length))
                f == null || f([u], o);
              else {
                var y = g.some(function(O) {
                  return G(O, u);
                });
                if (y) {
                  var w = g.filter(function(O) {
                    return !G(O, u);
                  });
                  f == null || f(w, o);
                } else
                  f == null || f(et(et([], g, !0), [u], !1), o);
              }
          } else
            f == null || f(u, o);
        s || ((l = (c = e.props).onSelect) === null || l === void 0 || l.call(c, u, o), e.setState({ inputValue: null }));
      }, e.setPreSelection = function(a) {
        if (!e.props.readOnly) {
          var o = ct(e.props.minDate), s = ct(e.props.maxDate), i = !0;
          if (a) {
            var c = gn(a);
            if (o && s)
              i = Pr(a, e.props.minDate, e.props.maxDate);
            else if (o) {
              var l = gn(e.props.minDate);
              i = St(a, l) || Rt(c, l);
            } else if (s) {
              var u = gs(e.props.maxDate);
              i = Zt(a, u) || Rt(c, u);
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
          var i = e.props.selected ? e.props.selected : e.getPreSelection(), c = e.props.selected ? a : pa(i, {
            hour: lt(a),
            minute: ut(a)
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
          var h = ne(e.state.preSelection);
          d === A.Enter ? (a.preventDefault(), a.target.blur(), e.inputOk() && e.state.lastPreSelectChange === va ? (e.handleSelect(h, a), !e.props.shouldCloseOnSelect && e.setPreSelection(h)) : e.setOpen(!1)) : d === A.Escape ? (a.preventDefault(), a.target.blur(), e.sendFocusBackToInput(), e.setOpen(!1)) : d === A.Tab && e.setOpen(!1), e.inputOk() || (u = (l = e.props).onInputError) === null || u === void 0 || u.call(l, { code: 1, msg: ma });
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
        var o, s, i, c, l, u, d = e.props, f = d.minDate, p = d.maxDate, h = d.disabledKeyboardNavigation, m = d.showWeekPicker, v = d.shouldCloseOnSelect, g = d.locale, _ = d.calendarStartDay, x = d.adjustDateOnChange, T = d.inline;
        if ((s = (o = e.props).onKeyDown) === null || s === void 0 || s.call(o, a), !h) {
          var C = a.key, D = a.shiftKey, y = ne(e.state.preSelection), w = function(P, b) {
            var S = b;
            switch (P) {
              case A.ArrowRight:
                S = m ? Sn(b, 1) : je(b, 1);
                break;
              case A.ArrowLeft:
                S = m ? as(b) : dp(b);
                break;
              case A.ArrowUp:
                S = as(b);
                break;
              case A.ArrowDown:
                S = Sn(b, 1);
                break;
              case A.PageUp:
                S = D ? dr(b, 1) : At(b, 1);
                break;
              case A.PageDown:
                S = D ? it(b, 1) : Qe(b, 1);
                break;
              case A.Home:
                S = xt(b, g, _);
                break;
              case A.End:
                S = t1(b);
                break;
            }
            return S;
          }, O = function(P, b) {
            for (var S = 40, M = P, I = !1, V = 0, z = w(P, b); !I; ) {
              if (V >= S) {
                z = b;
                break;
              }
              f && z < f && (M = A.ArrowRight, z = We(f, e.props) ? w(M, z) : f), p && z > p && (M = A.ArrowLeft, z = We(p, e.props) ? w(M, z) : p), We(z, e.props) ? ((M === A.PageUp || M === A.Home) && (M = A.ArrowRight), (M === A.PageDown || M === A.End) && (M = A.ArrowLeft), z = w(M, z)) : I = !0, V++;
            }
            return z;
          };
          if (C === A.Enter) {
            a.preventDefault(), e.handleSelect(y, a), !v && e.setPreSelection(y);
            return;
          } else if (C === A.Escape) {
            a.preventDefault(), e.setOpen(!1), e.inputOk() || (c = (i = e.props).onInputError) === null || c === void 0 || c.call(i, { code: 1, msg: ma });
            return;
          }
          var Y = null;
          switch (C) {
            case A.ArrowLeft:
            case A.ArrowRight:
            case A.ArrowUp:
            case A.ArrowDown:
            case A.PageUp:
            case A.PageDown:
            case A.Home:
            case A.End:
              Y = O(C, y);
              break;
          }
          if (!Y) {
            (u = (l = e.props).onInputError) === null || u === void 0 || u.call(l, { code: 1, msg: ma });
            return;
          }
          if (a.preventDefault(), e.setState({ lastPreSelectChange: va }), x && e.setSelected(Y), e.setPreSelection(Y), T) {
            var R = Ee(y), $ = Ee(Y), H = U(y), N = U(Y);
            R !== $ || H !== N ? e.setState({ shouldFocusDayInline: !0 }) : e.setState({ shouldFocusDayInline: !1 });
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
        return !e.props.inline && !e.isCalendarOpen() ? null : k.createElement(L1, X({ showMonthYearDropdown: void 0, ref: function(s) {
          e.calendar = s;
        } }, e.props, e.state, { setOpen: e.setOpen, dateFormat: (a = e.props.dateFormatCalendar) !== null && a !== void 0 ? a : n.defaultProps.dateFormatCalendar, onSelect: e.handleSelect, onClickOutside: e.handleCalendarClickOutside, holidays: p1(e.modifyHolidays()), outsideClickIgnoreClass: Ns, onDropdownFocus: e.handleDropdownFocus, onTimeChange: e.handleTimeChange, className: e.props.calendarClassName, container: e.props.calendarContainer, handleOnKeyDown: e.props.onKeyDown, handleOnDayKeyDown: e.onDayKeyDown, setPreSelection: e.setPreSelection, dropdownMode: (o = e.props.dropdownMode) !== null && o !== void 0 ? o : n.defaultProps.dropdownMode }), e.props.children);
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
        })), k.createElement("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live" }, u);
      }, e.renderDateInput = function() {
        var a, o, s, i = Ce(e.props.className, (a = {}, a[Ns] = e.state.open, a)), c = e.props.customInput || k.createElement("input", { type: "text" }), l = e.props.customInputRef || "ref", u = e.props, d = u.dateFormat, f = d === void 0 ? n.defaultProps.dateFormat : d, p = u.locale, h = typeof e.props.value == "string" ? e.props.value : typeof e.state.inputValue == "string" ? e.state.inputValue : e.props.selectsRange ? Gh(e.props.startDate, e.props.endDate, {
          dateFormat: f,
          locale: p
        }) : e.props.selectsMultiple ? Xh((s = e.props.selectedDates) !== null && s !== void 0 ? s : [], {
          dateFormat: f,
          locale: p
        }) : Ae(e.props.selected, {
          dateFormat: f,
          locale: p
        });
        return Vs(c, (o = {}, o[l] = function(m) {
          e.input = m;
        }, o.value = h, o.onBlur = e.handleBlur, o.onChange = e.handleChange, o.onClick = e.onInputClick, o.onFocus = e.handleFocus, o.onKeyDown = e.onInputKeyDown, o.id = e.props.id, o.name = e.props.name, o.form = e.props.form, o.autoFocus = e.props.autoFocus, o.placeholder = e.props.placeholderText, o.disabled = e.props.disabled, o.autoComplete = e.props.autoComplete, o.className = Ce(c.props.className, i), o.title = e.props.title, o.readOnly = e.props.readOnly, o.required = e.props.required, o.tabIndex = e.props.tabIndex, o["aria-describedby"] = e.props.ariaDescribedBy, o["aria-invalid"] = e.props.ariaInvalid, o["aria-labelledby"] = e.props.ariaLabelledBy, o["aria-required"] = e.props.ariaRequired, o));
      }, e.renderClearButton = function() {
        var a = e.props, o = a.isClearable, s = a.disabled, i = a.selected, c = a.startDate, l = a.endDate, u = a.clearButtonTitle, d = a.clearButtonClassName, f = d === void 0 ? "" : d, p = a.ariaLabelClose, h = p === void 0 ? "Close" : p, m = a.selectedDates, v = a.readOnly;
        return o && !v && (i != null || c != null || l != null || m != null && m.length) ? k.createElement("button", { type: "button", className: Ce("react-datepicker__close-icon", f, { "react-datepicker__close-icon--disabled": s }), disabled: s, "aria-label": h, onClick: e.onClearClick, title: u, tabIndex: -1 }) : null;
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
          yearItemNumber: $r,
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
      t.inline && B1(t.selected, this.props.selected) && this.setPreSelection(this.props.selected), this.state.monthSelectedIn !== void 0 && t.monthsShown !== this.props.monthsShown && this.setState({ monthSelectedIn: 0 }), t.highlightDates !== this.props.highlightDates && this.setState({
        highlightDates: _s(this.props.highlightDates)
      }), !e.focused && !Rt(t.selected, this.props.selected) && this.setState({ inputValue: null }), e.open !== this.state.open && (e.open === !1 && this.state.open === !0 && ((o = (a = this.props).onCalendarOpen) === null || o === void 0 || o.call(a)), e.open === !0 && this.state.open === !1 && ((i = (s = this.props).onCalendarClose) === null || i === void 0 || i.call(s)));
    }, n.prototype.componentWillUnmount = function() {
      this.clearPreventFocusTimeout(), window.removeEventListener("scroll", this.onScroll, !0), document.removeEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
    }, n.prototype.renderInputContainer = function() {
      var t = this.props, e = t.showIcon, a = t.icon, o = t.calendarIconClassname, s = t.calendarIconClassName, i = t.toggleCalendarOnIconClick, c = this.state.open;
      return o && console.warn("calendarIconClassname props is deprecated. should use calendarIconClassName props."), k.createElement(
        "div",
        { className: "react-datepicker__input-container".concat(e ? " react-datepicker__view-calendar-icon" : "") },
        e && k.createElement(I1, X({ icon: a, className: Ce(s, !s && o, c && "react-datepicker-ignore-onclickoutside") }, i ? {
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
        var e = this.state.open ? k.createElement(
          cc,
          { enableTabLoop: this.props.enableTabLoop },
          k.createElement("div", { className: "react-datepicker__portal", tabIndex: -1, onKeyDown: this.onPortalKeyDown }, t)
        ) : null;
        return this.state.open && this.props.portalId && (e = k.createElement(ic, X({ portalId: this.props.portalId }, this.props), e)), k.createElement(
          "div",
          null,
          this.renderInputContainer(),
          e
        );
      }
      return k.createElement(H1, X({}, this.props, { className: this.props.popperClassName, hidePopper: !this.isCalendarOpen(), targetComponent: this.renderInputContainer(), popperComponent: t, popperOnKeyDown: this.onPopperKeyDown, showArrow: this.props.showPopperArrow }));
    }, n;
  }(xe)
), Z1 = "input", va = "navigate";
const ra = `
  background: none;
  outline: none;
  border: none;
  font-size: 100%;
  line-height: 1.15
  margin: 0
`, j1 = B.div`
  width: calc(${({ width: r }) => r}px - ${Be}px);
  position: sticky;
  top: 0;
  left: ${Be}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme: r }) => r.navHeight};
  padding: 0.625rem 1rem;
  background-color: ${({ theme: r }) => r.colors.background};
  z-index: 3;
`, z1 = B.div`
  ${ra};
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
`, Q1 = B.div`
  display: flex;
  gap: 1.875rem;
`, Ys = B.button`
  ${ra};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme: r }) => r.colors.textPrimary};
  :not(:disabled) {
    cursor: pointer;
  }
`, q1 = B.button`
  ${ra};
  display: flex;
  align-items: center;
  cursor: pointer;
`, U1 = B.button`
  ${ra};
  position: relative;
  font-weight: 600;
  cursor: pointer;
  line-height: 1.5rem;
  color: ${({ theme: r }) => r.colors.textPrimary};
`, K1 = B.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({ theme: r }) => r.colors.textPrimary};
`, G1 = B.div`
  display: flex;
`, X1 = B.div`
  display: flex;
  align-items: "center";
  gap: 1.25rem;
`, J1 = ({ width: r, showThemeToggle: n, toggleTheme: t }) => {
  const { topbar: e } = br(), {
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
  } = wr(), { colors: v } = zt(), { filterButtonState: g = -1 } = o, _ = (x) => {
    x.stopPropagation(), m == null || m();
  };
  return /* @__PURE__ */ re(j1, { width: r, className: "topbar-wrapper", children: [
    /* @__PURE__ */ L(G1, { className: "topbar-filters", children: g >= 0 && /* @__PURE__ */ re(
      ga,
      {
        $variant: g ? "filled" : "outlined",
        iconName: "filter",
        width: "16",
        height: "16",
        onClick: h,
        children: [
          e.filters,
          !!g && /* @__PURE__ */ L("span", { onClick: _, children: /* @__PURE__ */ L(Le, { iconName: "close", height: "16", width: "16", fill: v.textSecondary }) })
        ]
      }
    ) }),
    /* @__PURE__ */ re(Q1, { className: "topbar-navigation", children: [
      /* @__PURE__ */ re(Ys, { disabled: !(a != null && a.length), onClick: i, className: "topbar-nav-prev", children: [
        /* @__PURE__ */ L(Le, { iconName: "arrowLeft", height: "15", fill: v.textPrimary }),
        e.prev
      ] }),
      /* @__PURE__ */ re(z1, { className: "topbar-today-wrapper", children: [
        /* @__PURE__ */ L(U1, { onClick: c, className: "topbar-today", children: e.today }),
        /* @__PURE__ */ L(
          V1,
          {
            selected: /* @__PURE__ */ new Date(),
            onChange: (x) => x && l(W(x)),
            customInput: /* @__PURE__ */ L(q1, { className: "topbar-calendar-button", children: /* @__PURE__ */ L(Le, { iconName: "calendar", height: "15", fill: v.textPrimary }) })
          }
        )
      ] }),
      /* @__PURE__ */ re(Ys, { disabled: !(a != null && a.length), onClick: s, className: "topbar-nav-next", children: [
        e.next,
        /* @__PURE__ */ L(Le, { iconName: "arrowRight", height: "15", fill: v.textPrimary })
      ] })
    ] }),
    /* @__PURE__ */ re(X1, { className: "topbar-options", children: [
      n && /* @__PURE__ */ L(v0, { toggleTheme: t }),
      /* @__PURE__ */ re(K1, { className: "topbar-zoom", children: [
        e.view,
        /* @__PURE__ */ L(
          ga,
          {
            isDisabled: !p,
            onClick: d,
            $isFullRounded: !0,
            iconName: "subtract",
            width: "14"
          }
        ),
        /* @__PURE__ */ L(
          ga,
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
}, em = (r) => /* @__PURE__ */ E.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), tm = (r) => /* @__PURE__ */ E.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), rm = (r) => /* @__PURE__ */ E.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), nm = (r) => /* @__PURE__ */ E.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), am = (r) => /* @__PURE__ */ E.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), om = (r) => /* @__PURE__ */ E.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), sm = (r) => /* @__PURE__ */ E.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), im = (r) => /* @__PURE__ */ E.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), cm = (r) => /* @__PURE__ */ E.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), lm = (r) => /* @__PURE__ */ E.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), um = (r) => /* @__PURE__ */ E.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), dm = (r) => /* @__PURE__ */ E.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), fm = (r) => /* @__PURE__ */ E.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ E.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), pm = (r) => /* @__PURE__ */ E.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ E.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ E.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ E.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ E.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ E.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ E.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ E.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ E.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ E.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), hm = (r) => /* @__PURE__ */ E.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#000000" }), /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#000000" }), /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#000000" }), /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#000000" }), /* @__PURE__ */ E.createElement("line", { x1: 1.75, y1: 6.5, x2: 12.25, y2: 6.5, stroke: "#000000", strokeWidth: 0.5 }), /* @__PURE__ */ E.createElement("line", { x1: 1.75, y1: 8.5, x2: 12.25, y2: 8.5, stroke: "#000000", strokeWidth: 0.5 }), /* @__PURE__ */ E.createElement("line", { x1: 1.75, y1: 10.5, x2: 12.25, y2: 10.5, stroke: "#000000", strokeWidth: 0.5 }), /* @__PURE__ */ E.createElement("line", { x1: 4.25, y1: 5.5, x2: 4.25, y2: 11.5, stroke: "#000000", strokeWidth: 0.5 }), /* @__PURE__ */ E.createElement("line", { x1: 7, y1: 5.5, x2: 7, y2: 11.5, stroke: "#000000", strokeWidth: 0.5 }), /* @__PURE__ */ E.createElement("line", { x1: 9.75, y1: 5.5, x2: 9.75, y2: 11.5, stroke: "#000000", strokeWidth: 0.5 })), mm = {
  add: em,
  subtract: tm,
  filter: rm,
  arrowLeft: nm,
  arrowRight: am,
  defaultAvatar: om,
  calendarWarning: sm,
  calendarFree: im,
  arrowDown: lm,
  arrowUp: cm,
  search: um,
  close: dm,
  moon: fm,
  sun: pm,
  calendar: hm
}, Le = ({ iconName: r, width: n, height: t, fill: e, className: a }) => {
  const { colors: o } = zt(), s = mm[r];
  return s ? /* @__PURE__ */ L(
    s,
    {
      style: { transition: ".5s ease" },
      fill: e ?? o.accent,
      width: n,
      height: t,
      className: a
    }
  ) : null;
}, vm = (r, n, t) => ({
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
})[n], gm = B.button`
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
  ${({ theme: r, $variant: n, disabled: t }) => vm(r, n, t)}
`, ga = ({
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
  const { colors: u } = zt();
  return /* @__PURE__ */ re(
    gm,
    {
      onClick: o,
      $isFullRounded: i,
      $hasChildren: !!s,
      disabled: c,
      $variant: l,
      className: "icon-button",
      children: [
        /* @__PURE__ */ L(
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
}, ym = B.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ $showScroll: r }) => r ? "scroll" : "hidden"};
  background-color: ${({ theme: r }) => r.colors.gridBackground};
`, wm = B.div`
  position: relative;
`, D0 = ({
  data: r,
  config: n,
  startDate: t,
  onRangeChange: e,
  onTileClick: a,
  onFilterData: o,
  onClearFilterData: s,
  onItemClick: i,
  isLoading: c
}) => {
  var T;
  const l = wt(
    () => ({
      zoom: 0,
      filterButtonState: 1,
      includeTakenHoursOnWeekendsInDayView: !1,
      showTooltip: !0,
      translations: void 0,
      dateFormat: "dddd DD.MM.YYYY",
      timeFormat: "HH:00",
      ...n
    }),
    [n]
  ), u = Ne(null), [d, f] = Se((T = u.current) == null ? void 0 : T.clientWidth), p = wt(() => W(t), [t]), [h, m] = Se(l.defaultTheme ?? "light"), v = () => {
    m(h === "light" ? "dark" : "light");
  }, g = h === "light" ? Ml : _l, _ = l.theme ? l.theme[g.mode] : {}, x = {
    ...g,
    colors: {
      ...g.colors,
      ..._
    }
  };
  return De(() => {
    const C = () => {
      u.current && f(u.current.clientWidth);
    };
    return C(), window.addEventListener("resize", C), () => window.removeEventListener("resize", C);
  }, []), u.current, /* @__PURE__ */ re(Fa, { children: [
    /* @__PURE__ */ L(xl, {}),
    /* @__PURE__ */ L(yl, { theme: x, children: /* @__PURE__ */ L(qu, { lang: l.lang, translations: l.translations, children: /* @__PURE__ */ L(
      du,
      {
        data: r,
        isLoading: !!c,
        config: l,
        onRangeChange: e,
        defaultStartDate: p,
        onFilterData: o,
        onClearFilterData: s,
        children: /* @__PURE__ */ L(
          ym,
          {
            $showScroll: !!r.length,
            id: Bt,
            ref: u,
            className: "scheduler-outside-wrapper",
            children: /* @__PURE__ */ L(wm, { className: "scheduler-inner-wrapper", children: /* @__PURE__ */ L(
              rd,
              {
                data: r,
                onTileClick: a,
                topBarWidth: d ?? 0,
                onItemClick: i,
                toggleTheme: v
              }
            ) })
          }
        )
      }
    ) }) })
  ] });
}, bm = B.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ $intent: r, theme: n }) => r === "next" ? `1px solid ${n.colors.border}` : "none"};
`, Dm = B.button`
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
`, km = B.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, xm = B.p`
  ${gr}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`, Rs = ({
  $intent: r,
  onClick: n,
  icon: t,
  $isVisible: e,
  pageNum: a,
  pagesAmount: o
}) => {
  const { loadNext: s, loadPrevious: i } = br(), c = r === "next" ? `${s} ${a + 2}/${o}` : `${i} ${a}/${o}`;
  return /* @__PURE__ */ L(bm, { $intent: r, className: "pagination-button-wrapper", children: /* @__PURE__ */ re(Dm, { onClick: n, $isVisible: e, className: "pagination-button", children: [
    t && /* @__PURE__ */ L(km, { className: "pagination-button-icon", children: t }),
    /* @__PURE__ */ L(xm, { className: "pagination-button-text", children: c })
  ] }) });
}, Mm = B.div`
  min-width: ${Be + "px"};
  max-width: ${Be + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: r }) => r.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, _m = B.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: 124px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${Be}px;
  background-color: ${({ theme: r }) => r.colors.background};
  z-index: 3;
`, Cm = B.input`
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
`, Sm = B.div`
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
`, Em = B.div`
  display: flex;
  align-items: ${({ rows: r }) => r > 1 ? "start" : "center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${Ie}px;
  height: calc(${Ie}px * ${({ rows: r }) => r});
  border-top: 1px solid ${({ theme: r }) => r.colors.border};
  transition: 0.5s ease;
  cursor: ${({ $clickable: r }) => r ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: r }) => r.colors.hover};
  }
`, Pm = B.div`
  display: flex;
  align-items: center;
`, Om = B.div`
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`, Tm = B.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, Nm = B.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, Ls = B.p`
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
`, Ym = ({ id: r, item: n, rows: t, onItemClick: e }) => /* @__PURE__ */ L(
  Em,
  {
    title: n.title + " | " + n.subtitle,
    $clickable: typeof e == "function" ? "true" : "false",
    rows: t,
    onClick: () => e == null ? void 0 : e({ id: r, label: n }),
    className: "left-column-item-wrapper",
    children: /* @__PURE__ */ re(Pm, { className: "left-column-item-inner", children: [
      /* @__PURE__ */ L(Om, { className: "left-column-item-image-wrapper", children: n.icon ? /* @__PURE__ */ L(Tm, { src: n.icon, alt: "Icon", className: "left-column-item-image" }) : /* @__PURE__ */ L(Le, { iconName: "defaultAvatar" }) }),
      /* @__PURE__ */ re(Nm, { className: "left-column-item-text-wrapper", children: [
        /* @__PURE__ */ L(Ls, { $isMain: !0, className: "left-column-item-title", children: n.title }),
        /* @__PURE__ */ L(Ls, { className: "left-column-item-subtitle", children: n.subtitle })
      ] })
    ] })
  }
), Rm = ({
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
  const [l, u] = Se(!1), { search: d } = br(), f = () => u((p) => !p);
  return /* @__PURE__ */ re(Mm, { className: "left-column-wrapper", children: [
    /* @__PURE__ */ re(_m, { className: "left-column-header", children: [
      /* @__PURE__ */ re(Sm, { $isFocused: l, className: "left-column-search-wrapper", children: [
        /* @__PURE__ */ L(
          Cm,
          {
            placeholder: d,
            value: s,
            onChange: i,
            onFocus: f,
            onBlur: f,
            className: "left-column-search-input"
          }
        ),
        /* @__PURE__ */ L(Le, { iconName: "search" })
      ] }),
      /* @__PURE__ */ L(
        Rs,
        {
          $intent: "previous",
          $isVisible: a !== 0,
          onClick: e,
          icon: /* @__PURE__ */ L(Le, { iconName: "arrowUp", width: "16", height: "16" }),
          pageNum: a,
          pagesAmount: o
        }
      )
    ] }),
    r.map((p, h) => /* @__PURE__ */ L(
      Ym,
      {
        id: p.id,
        item: p.label,
        rows: n[h],
        onItemClick: c
      },
      p.id
    )),
    /* @__PURE__ */ L(
      Rs,
      {
        $intent: "next",
        $isVisible: a !== o - 1,
        onClick: t,
        icon: /* @__PURE__ */ L(Le, { iconName: "arrowDown", width: "16", height: "16" }),
        pageNum: a,
        pagesAmount: o
      }
    )
  ] });
}, Lm = B.div`
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
`, Im = kl`
from{
    left: -100%;
}
to{
    left: 100%;
}`, $m = B.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Im} 1s infinite;
`, Is = ({ isLoading: r, $position: n }) => r ? /* @__PURE__ */ L(Lm, { $position: n, className: "loader-wrapper", children: /* @__PURE__ */ L($m, { className: "loader-walker" }) }) : null, mt = (r, n) => {
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
}, lc = (r, n) => {
  const { isCurrent: t, isBusinessDay: e, $variant: a } = r;
  return a === "yearView" ? t ? n.colors.tertiary : n.colors.gridBackground : t || !e ? n.colors.secondary : n.colors.primary;
}, Aa = (r, n) => {
  const { isCurrent: t, isBusinessDay: e, $variant: a } = r;
  return t ? a === "bottomRow" ? n.colors.placeholder : n.colors.accent : e ? a === "bottomRow" ? n.colors.placeholder : n.colors.textPrimary : n.colors.placeholder;
}, Am = (r, n, t, e) => {
  const a = ir - It / Sl, o = ir - It / El, s = pt + yr;
  let i = 0;
  for (let c = 0; c < n; c++) {
    const l = wi(
      W(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(c, "days")
    );
    mt(
      {
        ctx: r,
        x: i,
        y: s,
        width: Re,
        height: It,
        isBottomRow: !0,
        fillStyle: lc(
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
          color: Aa(
            { isCurrent: l.isCurrentDay, isBusinessDay: l.isBusinessDay },
            e
          )
        },
        bottomText: {
          y: o,
          label: `${l.dayOfMonth}`,
          font: ze.bottomRow.number,
          color: Aa(
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
    ), i += Re;
  }
}, Fm = (r, n, t, e) => {
  let a = -(t.dayOfMonth - 1) * st;
  const o = pt;
  let i = t.month;
  for (let c = 0; c < n; c++) {
    i >= Pa && (i = 0);
    const l = yi(t, c) * st;
    mt(
      {
        ctx: r,
        x: a,
        y: o,
        width: l,
        height: yr,
        textYPos: gi,
        label: W().month(i).format("MMMM").toUpperCase(),
        font: ze.bottomRow.number
      },
      e
    ), a += l, i++;
  }
}, Wm = (r, n, t) => {
  let a = 0, o = 0, s = 0, i = W(
    `${n.year}-${n.month + 1}-${n.dayOfMonth}`
  ).month();
  a = -n.dayOfMonth * Re + Re;
  for (let c = 0; c < Pa; c++)
    i > Pa - 1 && (i = 0, s++), o = W(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(c, "months").daysInMonth() * Re, mt(
      {
        ctx: r,
        x: a,
        y: 0,
        width: o,
        height: pt,
        textYPos: qa,
        label: W(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).month(i).format("MMMM").toUpperCase() + ` ${W(`${n.year + s}-${n.month + 1}-${n.dayOfMonth}`).month(i).format("YYYY")}`,
        font: ze.topRow
      },
      t
    ), a += o, i++;
}, Hm = (r, n, t, e) => {
  const a = 7 * Re, o = pt, s = r.canvas.width / a + a, i = n.weekOfYear;
  let c = 0;
  for (let l = 0; l < s; l++) {
    const u = W(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).day();
    let d = (i + l) % To;
    d <= 0 && (d += To), u !== 1 && l === 0 && (c = -u * Re + Re), mt(
      {
        ctx: r,
        x: c,
        y: o,
        width: a,
        height: yr,
        textYPos: gi,
        label: `${t.toUpperCase()} ${d}`,
        font: ze.middleRow
      },
      e
    ), c += a;
  }
}, Bm = (r, n, t, e, a) => {
  const o = ir - It / 1.6, s = ir - It / 4.5, i = pt + yr;
  let c = 0;
  for (let l = 0; l < n; l++) {
    const u = W(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      l,
      "weeks"
    ), d = u.isSame(W(), "week");
    mt(
      {
        ctx: r,
        x: c,
        y: i,
        width: Ct,
        height: It,
        isBottomRow: !0,
        fillStyle: lc({ isCurrent: d, $variant: "yearView" }, a),
        topText: {
          y: o,
          label: u.isoWeek().toString(),
          font: ze.bottomRow.name,
          color: Aa({ isCurrent: d }, a)
        },
        bottomText: {
          y: s,
          label: e.toUpperCase(),
          font: ze.middleRow,
          color: a.colors.placeholder
        }
      },
      a
    ), c += Ct;
  }
}, Vm = (r, n, t, e) => {
  const o = n.year, s = r.canvas.width * 2;
  let i = 0, c = 0, l = (Lo(o) - t + 1) * st, u = 0;
  for (; i + u <= s; )
    c > 0 && (l = Lo(o + c) * st), u + l > s && c > 0 && (l = Math.ceil((s - u) / st) * st), mt(
      {
        ctx: r,
        x: i,
        y: 0,
        width: l,
        height: pt,
        textYPos: qa,
        label: (o + c).toString(),
        font: ze.topRow
      },
      e
    ), i += l, u += l, c++;
}, Zm = (r, n, t, e, a) => {
  const o = Math.floor(n / Mn) + 2, s = Mn * Ye;
  let l = -W(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ).hour() * Ye + 0.5 * Ye;
  for (let u = 0; u < o; u++) {
    const d = W(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(u, "day").format(a).toUpperCase();
    mt(
      {
        ctx: r,
        x: l,
        y: cr,
        width: s,
        height: Tr,
        textYPos: cr + Tr / 2 + 2,
        label: d,
        font: ze.bottomRow.number
      },
      e
    ), l += s;
  }
}, jm = (r, n, t, e) => {
  const a = Math.ceil(n / Mn), o = W(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), s = o.add(a - 1, "days"), i = o.month(), c = s.add(1, "day").month(), l = i === c ? 1 : 2;
  let u = 0.5 * Ye;
  for (let d = 0; d < l; d++) {
    const f = W(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), h = W(`${t.year}-${t.month + d + 1}-01T:23:59:59`).endOf("month"), m = h.format("MMMM").toUpperCase(), v = h.diff(f, "hour") + 1, g = d === 0 ? v * Ye : n * Ye;
    mt(
      {
        ctx: r,
        x: u,
        y: 0,
        width: g,
        height: cr,
        textYPos: qa,
        label: m,
        font: ze.topRow
      },
      e
    ), u += g;
  }
}, zm = (r, n, t, e, a) => {
  let o = 0;
  const s = cr + Tr, i = W(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ), c = Ye;
  for (let l = 0; l < n; l++) {
    const u = i.add(l, "hours").format(a).toUpperCase();
    mt(
      {
        ctx: r,
        x: o,
        y: s,
        width: c,
        height: Ea,
        label: u,
        font: ze.bottomRow.number,
        textYPos: cr + Tr + Ea / 2 + 2,
        labelBetweenCells: !0
      },
      e
    ), o += Ye;
  }
}, Qm = (r, n, t, e, a, o, s, i = "dddd DD.MM.YYYY", c = "HH:00") => {
  switch (n) {
    case 0:
      Vm(r, e, o, s), Fm(r, t, e, s), Bm(r, t, e, a, s);
      break;
    case 1:
      Wm(r, e, s), Hm(r, e, a, s), Am(r, t, e, s);
      break;
    case 2:
      jm(r, t, e, s), Zm(r, t, e, s, i), zm(r, t, e, s, c);
      break;
  }
}, qm = B.div`
  position: sticky;
  top: 0;
  z-index: 1;
`, Um = B.div`
  height: ${ir}px;
  display: block;
`, Km = B.canvas``, Gm = ({ zoom: r, topBarWidth: n, showThemeToggle: t, toggleTheme: e }) => {
  const { week: a } = br(), { date: o, cols: s, dayOfYear: i, startDate: c, config: l } = wr(), { dateFormat: u, timeFormat: d } = l, f = Ne(null), p = zt(), h = Te(
    (m) => {
      const v = Xa(), _ = (r === 2 ? Cl : ir) + 1;
      Di(m, v, _), Qm(m, r, s, c, a, i, p, u, d);
    },
    [s, i, c, a, r, p, u, d]
  );
  return De(() => {
    if (!f.current) return;
    const m = f.current.getContext("2d");
    if (!m) return;
    const v = () => h(m);
    return window.addEventListener("resize", v), () => window.removeEventListener("resize", v);
  }, [h]), De(() => {
    const m = f.current;
    if (!m) return;
    m.style.letterSpacing = "1px";
    const v = m.getContext("2d");
    v && h(v);
  }, [o, r, h]), /* @__PURE__ */ re(qm, { className: "header-outer-wrapper", children: [
    /* @__PURE__ */ L(J1, { width: n, showThemeToggle: t, toggleTheme: e }),
    /* @__PURE__ */ L(Um, { id: Pl, className: "header-wrapper", children: /* @__PURE__ */ L(Km, { ref: f, className: "header-canvas" }) })
  ] });
}, Xm = (r, n, t) => {
  let e;
  switch (t) {
    case 0:
      e = st;
      break;
    case 2:
      e = Ye;
      break;
    default:
      e = Re;
  }
  const a = () => {
    let o;
    switch (t) {
      case 2:
        o = (r.startDate.diff(n.startDate, "minute") / be + 1) * e - e / 2;
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
        o = r.endDate.diff(r.startDate, "minute") / be * e;
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
        o = r.endDate.diff(n.startDate, "minute") / be * e + 0.5 * e;
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
        o = n.endDate.diff(r.startDate, "minute") / be * e;
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
        o = n.endDate.diff(n.startDate, "minute") / be * e;
        break;
      default:
        o = n.endDate.diff(n.startDate, "day") * e + e;
    }
    return { x: a(), width: o };
  }
  return { x: a(), width: 0 };
}, Jm = (r, n, t, e, a, o) => {
  const s = r * Ie + Ol, i = n.hour(), c = t.hour();
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
    ...Xm(
      { startDate: l, endDate: u },
      { startDate: d, endDate: f },
      o
    ),
    y: s
  };
}, e0 = (r) => {
  if (!r) return "white";
  const n = [];
  for (let a = 1; a < 6; a += 2)
    n.push(parseInt(r.slice(a, a + 2), 16) / 255);
  const t = n.map(
    (a) => a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2] > 0.5 ? "black" : "white";
}, t0 = B.button`
  ${gr}
  height: ${Tl}px;
  position: absolute;
  outline: none;
  border: none;
  border-radius: 4px;
  text-align: left;
  color: ${({ theme: r }) => r.colors.textPrimary};
  width: 100%;
  cursor: pointer;
`, r0 = B.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, $s = B.p`
  ${gr}
  ${mi}
  display: inline;
  font-weight: ${({ $bold: r }) => r ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, n0 = B.p`
  ${gr}
  ${mi}
`, a0 = B.div`
  position: sticky;
  left: ${Be + 16}px;
  overflow: hidden;
`, o0 = ({ row: r, data: n, zoom: t, onTileClick: e }) => {
  const { date: a } = wr(), o = Ga(a, t), { y: s, x: i, width: c } = Jm(
    r,
    o.startDate,
    o.endDate,
    n.startDate,
    n.endDate,
    t
  ), { colors: l } = zt();
  return /* @__PURE__ */ L(
    t0,
    {
      style: {
        left: `${i}px`,
        top: `${s}px`,
        backgroundColor: `${n.bgColor ?? l.defaultTile}`,
        width: `${c}px`,
        color: e0(n.bgColor ?? "")
      },
      onClick: () => e == null ? void 0 : e(n),
      className: "tile-wrapper",
      children: /* @__PURE__ */ L(r0, { className: "tile-text-wrapper", children: /* @__PURE__ */ re(a0, { className: "tile-sticky-wrapper", children: [
        /* @__PURE__ */ L($s, { $bold: "600", className: "tile-title", children: n.title }),
        /* @__PURE__ */ L($s, { className: "tile-subtitle", children: n.subtitle }),
        /* @__PURE__ */ L(n0, { className: "tile-description", children: n.description })
      ] }) })
    }
  );
}, s0 = ({ data: r, zoom: n, onTileClick: t }) => {
  const e = Te(() => {
    let a = 0;
    return r.map((o, s) => (s > 0 && (a += Math.max(r[s - 1].data.length, 1)), o.data.map(
      (i, c) => i.map((l) => /* @__PURE__ */ L(
        o0,
        {
          row: c + a,
          data: l,
          zoom: n,
          onTileClick: t
        },
        l.id
      ))
    ))).flat(2);
  }, [r, t, n]);
  return /* @__PURE__ */ L(Fa, { children: e() });
};
B.div`
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
B.div`
  width: 100%;
  margin-top: 2px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.5px;
  background-color: white;
`;
B.label`
  font-size: 14px;
`;
B.input`
  width: 45px;
  height: 18px;
  font-size: 14px;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  background-color: white;
  outline: none;
`;
B.input`
  height: 18px;
  width: 18px;
`;
B.button`
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
B.form`
  background-color: rgba(255, 255, 255, 0.75);
`;
const i0 = B.div`
  padding: 8px 16px;
  position: absolute;
  background-color: ${({ theme: r }) => r.colors.tooltip};
  border-radius: 8px;
  z-index: 3;
  transition: all 0.25s;
  transition-timing-function: ease-out;
  pointer-events: none;
`, c0 = B.div`
  width: 100%;
`, l0 = B.div`
  position: absolute;
  width: 0;
  height: 0;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-top: 14px solid ${({ theme: r }) => r.colors.tooltip};
`, u0 = B.div``, As = B.div`
  display: flex;
  align-items: center;
  &:first-child {
    margin-bottom: 8px;
  }
`, Fs = B.div`
  ${gr}
  display: flex;
  align-items: center;
  font-size: 10px;
  color: ${({ theme: r }) => r.colors.textSecondary};
  line-height: 12px;
  letter-spacing: 0.5px;
`, Ws = B.p`
  ${gr}
  margin-left: 4px;
  color: ${({ theme: r }) => r.colors.textSecondary};
`, d0 = B.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: r }) => r.colors.warning};
`, f0 = ({ tooltipData: r, zoom: n }) => {
  const { taken: t, free: e, over: a } = br(), { coords: o, disposition: s } = r, i = Ne(null);
  let c = Ct;
  switch (n) {
    case 0:
      c = Ct;
      break;
    case 1:
      c = Re;
      break;
    case 2:
      c = Ye;
      break;
  }
  return Wa(() => {
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
  }, [o.x, c, s.overtime, o.y, n]), /* @__PURE__ */ re(i0, { ref: i, className: "tooltip-wrapper", children: [
    /* @__PURE__ */ L(c0, { className: "tooltip-content", children: /* @__PURE__ */ re(u0, { className: "tooltip-content-inner", children: [
      /* @__PURE__ */ re(As, { className: "tooltip-taken-info", children: [
        /* @__PURE__ */ L(Le, { iconName: "calendarWarning", height: "14" }),
        /* @__PURE__ */ re(Fs, { className: "tooltip-text-wrapper", children: [
          /* @__PURE__ */ L(Ws, { className: "tooltip-text", children: `${t}: ${s.taken.hours}h ${s.taken.minutes}m` }),
          (s.overtime.hours > 0 || s.overtime.minutes > 0) && /* @__PURE__ */ re(Fa, { children: [
            " ",
            "-",
            " ",
            /* @__PURE__ */ L(d0, { className: "tooltip-overtime-warning", children: `${s.overtime.hours}h ${s.overtime.minutes}m ${a}` })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ re(As, { className: "tooltip-free-info", children: [
        /* @__PURE__ */ L(Le, { iconName: "calendarFree", height: "14" }),
        /* @__PURE__ */ L(Fs, { className: "tooltip-text-wrapper", children: /* @__PURE__ */ L(Ws, { className: "tooltip-text", children: `${e}: ${s.free.hours}h ${s.free.minutes}m` }) })
      ] })
    ] }) }),
    /* @__PURE__ */ L(l0, { className: "tooltip-beak" })
  ] });
}, p0 = B.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 26px;
  background-color: ${({ theme: r }) => r.colors.secondary};
  border-radius: 30px;
  position: relative;
  transition: background-color 0.3s ease;
`, h0 = B.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme: r }) => r.colors.button};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({ theme: r }) => r.mode === "light" ? "4px" : "34px"};
  transition: left 0.3s ease;
`, m0 = B.div`
  position: absolute;
  top: 5px;
  left: ${({ theme: r }) => r.mode === "light" ? "38px" : "4px"};
  transition: left 0.3s ease;
`, v0 = ({ toggleTheme: r }) => {
  const n = zt();
  return /* @__PURE__ */ re(p0, { onClick: r, className: "theme-toggle-container", children: [
    /* @__PURE__ */ L(h0, { className: "theme-toggle-circle" }),
    /* @__PURE__ */ L(m0, { className: "theme-toggle-icon", children: n.mode === "light" ? /* @__PURE__ */ L(Le, { iconName: "sun", height: "16", width: "16" }) : /* @__PURE__ */ L(Le, { iconName: "moon", height: "16", width: "16" }) })
  ] });
};
export {
  D0 as Scheduler
};

var Xr = Object.defineProperty;
var Kr = (e, t, n) => t in e ? Xr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var $n = (e, t, n) => Kr(e, typeof t != "symbol" ? t + "" : t, n);
import { jsx as k, jsxs as X, Fragment as dn } from "react/jsx-runtime";
import * as O from "react";
import fe, { useRef as pe, useContext as Rt, useMemo as Ee, useDebugValue as Cn, createElement as Qr, createContext as hr, useState as ie, useCallback as ue, useEffect as se, forwardRef as eo, useLayoutEffect as to } from "react";
var oe = function() {
  return oe = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, oe.apply(this, arguments);
};
function Te(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
function no(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var ro = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, oo = /* @__PURE__ */ no(
  function(e) {
    return ro.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xe(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var K = "-ms-", st = "-moz-", q = "-webkit-", fr = "comm", Nt = "rule", un = "decl", so = "@import", pr = "@keyframes", io = "@layer", mr = Math.abs, hn = String.fromCharCode, Jt = Object.assign;
function ao(e, t) {
  return ne(e, 0) ^ 45 ? (((t << 2 ^ ne(e, 0)) << 2 ^ ne(e, 1)) << 2 ^ ne(e, 2)) << 2 ^ ne(e, 3) : 0;
}
function yr(e) {
  return e.trim();
}
function $e(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function B(e, t, n) {
  return e.replace(t, n);
}
function ft(e, t, n) {
  return e.indexOf(t, n);
}
function ne(e, t) {
  return e.charCodeAt(t) | 0;
}
function ze(e, t, n) {
  return e.slice(t, n);
}
function be(e) {
  return e.length;
}
function vr(e) {
  return e.length;
}
function rt(e, t) {
  return t.push(e), e;
}
function co(e, t) {
  return e.map(t).join("");
}
function Mn(e, t) {
  return e.filter(function(n) {
    return !$e(n, t);
  });
}
var Ht = 1, Ve = 1, gr = 0, ye = 0, te = 0, Ke = "";
function Wt(e, t, n, r, o, s, i, l) {
  return { value: e, root: t, parent: n, type: r, props: o, children: s, line: Ht, column: Ve, length: i, return: "", siblings: l };
}
function De(e, t) {
  return Jt(Wt("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Ze(e) {
  for (; e.root; )
    e = De(e.root, { children: [e] });
  rt(e, e.siblings);
}
function lo() {
  return te;
}
function uo() {
  return te = ye > 0 ? ne(Ke, --ye) : 0, Ve--, te === 10 && (Ve = 1, Ht--), te;
}
function ge() {
  return te = ye < gr ? ne(Ke, ye++) : 0, Ve++, te === 10 && (Ve = 1, Ht++), te;
}
function Ye() {
  return ne(Ke, ye);
}
function pt() {
  return ye;
}
function At(e, t) {
  return ze(Ke, e, t);
}
function Xt(e) {
  switch (e) {
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
function ho(e) {
  return Ht = Ve = 1, gr = be(Ke = e), ye = 0, [];
}
function fo(e) {
  return Ke = "", e;
}
function Ft(e) {
  return yr(At(ye - 1, Kt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function po(e) {
  for (; (te = Ye()) && te < 33; )
    ge();
  return Xt(e) > 2 || Xt(te) > 3 ? "" : " ";
}
function mo(e, t) {
  for (; --t && ge() && !(te < 48 || te > 102 || te > 57 && te < 65 || te > 70 && te < 97); )
    ;
  return At(e, pt() + (t < 6 && Ye() == 32 && ge() == 32));
}
function Kt(e) {
  for (; ge(); )
    switch (te) {
      // ] ) " '
      case e:
        return ye;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Kt(te);
        break;
      // (
      case 40:
        e === 41 && Kt(e);
        break;
      // \
      case 92:
        ge();
        break;
    }
  return ye;
}
function yo(e, t) {
  for (; ge() && e + te !== 57; )
    if (e + te === 84 && Ye() === 47)
      break;
  return "/*" + At(t, ye - 1) + "*" + hn(e === 47 ? e : ge());
}
function vo(e) {
  for (; !Xt(Ye()); )
    ge();
  return At(e, ye);
}
function go(e) {
  return fo(mt("", null, null, null, [""], e = ho(e), 0, [0], e));
}
function mt(e, t, n, r, o, s, i, l, a) {
  for (var c = 0, d = 0, u = i, h = 0, f = 0, x = 0, C = 1, P = 1, M = 1, I = 0, Y = "", R = o, $ = s, v = r, p = Y; P; )
    switch (x = I, I = ge()) {
      // (
      case 40:
        if (x != 108 && ne(p, u - 1) == 58) {
          ft(p += B(Ft(I), "&", "&\f"), "&\f", mr(c ? l[c - 1] : 0)) != -1 && (M = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        p += Ft(I);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        p += po(x);
        break;
      // \
      case 92:
        p += mo(pt() - 1, 7);
        continue;
      // /
      case 47:
        switch (Ye()) {
          case 42:
          case 47:
            rt(wo(yo(ge(), pt()), t, n, a), a);
            break;
          default:
            p += "/";
        }
        break;
      // {
      case 123 * C:
        l[c++] = be(p) * M;
      // } ; \0
      case 125 * C:
      case 59:
      case 0:
        switch (I) {
          // \0 }
          case 0:
          case 125:
            P = 0;
          // ;
          case 59 + d:
            M == -1 && (p = B(p, /\f/g, "")), f > 0 && be(p) - u && rt(f > 32 ? _n(p + ";", r, n, u - 1, a) : _n(B(p, " ", "") + ";", r, n, u - 2, a), a);
            break;
          // @ ;
          case 59:
            p += ";";
          // { rule/at-rule
          default:
            if (rt(v = Sn(p, t, n, c, d, o, l, Y, R = [], $ = [], u, s), s), I === 123)
              if (d === 0)
                mt(p, t, v, v, R, s, u, l, $);
              else
                switch (h === 99 && ne(p, 3) === 110 ? 100 : h) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    mt(e, v, v, r && rt(Sn(e, v, v, 0, 0, o, l, Y, o, R = [], u, $), $), o, $, u, l, r ? R : $);
                    break;
                  default:
                    mt(p, v, v, v, [""], $, 0, l, $);
                }
        }
        c = d = f = 0, C = M = 1, Y = p = "", u = i;
        break;
      // :
      case 58:
        u = 1 + be(p), f = x;
      default:
        if (C < 1) {
          if (I == 123)
            --C;
          else if (I == 125 && C++ == 0 && uo() == 125)
            continue;
        }
        switch (p += hn(I), I * C) {
          // &
          case 38:
            M = d > 0 ? 1 : (p += "\f", -1);
            break;
          // ,
          case 44:
            l[c++] = (be(p) - 1) * M, M = 1;
            break;
          // @
          case 64:
            Ye() === 45 && (p += Ft(ge())), h = Ye(), d = u = be(Y = p += vo(pt())), I++;
            break;
          // -
          case 45:
            x === 45 && be(p) == 2 && (C = 0);
        }
    }
  return s;
}
function Sn(e, t, n, r, o, s, i, l, a, c, d, u) {
  for (var h = o - 1, f = o === 0 ? s : [""], x = vr(f), C = 0, P = 0, M = 0; C < r; ++C)
    for (var I = 0, Y = ze(e, h + 1, h = mr(P = i[C])), R = e; I < x; ++I)
      (R = yr(P > 0 ? f[I] + " " + Y : B(Y, /&\f/g, f[I]))) && (a[M++] = R);
  return Wt(e, t, n, o === 0 ? Nt : l, a, c, d, u);
}
function wo(e, t, n, r) {
  return Wt(e, t, n, fr, hn(lo()), ze(e, 2, -2), 0, r);
}
function _n(e, t, n, r, o) {
  return Wt(e, t, n, un, ze(e, 0, r), ze(e, r + 1, -1), r, o);
}
function wr(e, t, n) {
  switch (ao(e, t)) {
    // color-adjust
    case 5103:
      return q + "print-" + e + e;
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
      return q + e + e;
    // tab-size
    case 4789:
      return st + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return q + e + st + e + K + e + e;
    // writing-mode
    case 5936:
      switch (ne(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return q + e + K + B(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return q + e + K + B(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return q + e + K + B(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return q + e + K + e + e;
    // order
    case 6165:
      return q + e + K + "flex-" + e + e;
    // align-items
    case 5187:
      return q + e + B(e, /(\w+).+(:[^]+)/, q + "box-$1$2" + K + "flex-$1$2") + e;
    // align-self
    case 5443:
      return q + e + K + "flex-item-" + B(e, /flex-|-self/g, "") + ($e(e, /flex-|baseline/) ? "" : K + "grid-row-" + B(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return q + e + K + "flex-line-pack" + B(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return q + e + K + B(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return q + e + K + B(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return q + "box-" + B(e, "-grow", "") + q + e + K + B(e, "grow", "positive") + e;
    // transition
    case 4554:
      return q + B(e, /([^-])(transform)/g, "$1" + q + "$2") + e;
    // cursor
    case 6187:
      return B(B(B(e, /(zoom-|grab)/, q + "$1"), /(image-set)/, q + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return B(e, /(image-set\([^]*)/, q + "$1$`$1");
    // justify-content
    case 4968:
      return B(B(e, /(.+:)(flex-)?(.*)/, q + "box-pack:$3" + K + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + q + e + e;
    // justify-self
    case 4200:
      if (!$e(e, /flex-|baseline/)) return K + "grid-column-align" + ze(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return K + B(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, $e(r.props, /grid-\w+-end/);
      }) ? ~ft(e + (n = n[t].value), "span", 0) ? e : K + B(e, "-start", "") + e + K + "grid-row-span:" + (~ft(n, "span", 0) ? $e(n, /\d+/) : +$e(n, /\d+/) - +$e(e, /\d+/)) + ";" : K + B(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return $e(r.props, /grid-\w+-start/);
      }) ? e : K + B(B(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return B(e, /(.+)-inline(.+)/, q + "$1$2") + e;
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
      if (be(e) - 1 - t > 6)
        switch (ne(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (ne(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return B(e, /(.+:)(.+)-([^]+)/, "$1" + q + "$2-$3$1" + st + (ne(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~ft(e, "stretch", 0) ? wr(B(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return B(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, s, i, l, a, c) {
        return K + o + ":" + s + c + (i ? K + o + "-span:" + (l ? a : +a - +s) + c : "") + e;
      });
    // position: sticky
    case 4949:
      if (ne(e, t + 6) === 121)
        return B(e, ":", ":" + q) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (ne(e, ne(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return B(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + q + (ne(e, 14) === 45 ? "inline-" : "") + "box$3$1" + q + "$2$3$1" + K + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return B(e, ":", ":" + K) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return B(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Et(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function xo(e, t, n, r) {
  switch (e.type) {
    case io:
      if (e.children.length) break;
    case so:
    case un:
      return e.return = e.return || e.value;
    case fr:
      return "";
    case pr:
      return e.return = e.value + "{" + Et(e.children, r) + "}";
    case Nt:
      if (!be(e.value = e.props.join(","))) return "";
  }
  return be(n = Et(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function bo(e) {
  var t = vr(e);
  return function(n, r, o, s) {
    for (var i = "", l = 0; l < t; l++)
      i += e[l](n, r, o, s) || "";
    return i;
  };
}
function ko(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function $o(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case un:
        e.return = wr(e.value, e.length, n);
        return;
      case pr:
        return Et([De(e, { value: B(e.value, "@", "@" + q) })], r);
      case Nt:
        if (e.length)
          return co(n = e.props, function(o) {
            switch ($e(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Ze(De(e, { props: [B(o, /:(read-\w+)/, ":" + st + "$1")] })), Ze(De(e, { props: [o] })), Jt(e, { props: Mn(n, r) });
                break;
              // :placeholder
              case "::placeholder":
                Ze(De(e, { props: [B(o, /:(plac\w+)/, ":" + q + "input-$1")] })), Ze(De(e, { props: [B(o, /:(plac\w+)/, ":" + st + "$1")] })), Ze(De(e, { props: [B(o, /:(plac\w+)/, K + "input-$1")] })), Ze(De(e, { props: [o] })), Jt(e, { props: Mn(n, r) });
                break;
            }
            return "";
          });
    }
}
var Co = {
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
}, Ne = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", xr = "active", br = "data-styled-version", Zt = "6.1.17", fn = `/*!sc*/
`, Ot = typeof window < "u" && "HTMLElement" in window, Mo = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), So = {}, Dn = /invalid hook call/i, lt = /* @__PURE__ */ new Set(), kr = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, o = console.error;
    try {
      var s = !0;
      console.error = function(i) {
        for (var l = [], a = 1; a < arguments.length; a++) l[a - 1] = arguments[a];
        Dn.test(i) ? (s = !1, lt.delete(r)) : o.apply(void 0, Te([i], l, !1));
      }, pe(), s && !lt.has(r) && (console.warn(r), lt.add(r));
    } catch (i) {
      Dn.test(i.message) && lt.delete(r);
    } finally {
      console.error = o;
    }
  }
}, Bt = Object.freeze([]), Ge = Object.freeze({});
function $r(e, t, n) {
  return n === void 0 && (n = Ge), e.theme !== n.theme && e.theme || t || n.theme;
}
var Qt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), _o = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Do = /(^-|-$)/g;
function En(e) {
  return e.replace(_o, "-").replace(Do, "");
}
var Eo = /(a)(d)/gi, dt = 52, On = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function en(e) {
  var t, n = "";
  for (t = Math.abs(e); t > dt; t = t / dt | 0) n = On(t % dt) + n;
  return (On(t % dt) + n).replace(Eo, "$1-$2");
}
var zt, Cr = 5381, Le = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Mr = function(e) {
  return Le(Cr, e);
};
function pn(e) {
  return en(Mr(e) >>> 0);
}
function Sr(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Vt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var _r = typeof Symbol == "function" && Symbol.for, Dr = _r ? Symbol.for("react.memo") : 60115, Oo = _r ? Symbol.for("react.forward_ref") : 60112, To = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Po = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Er = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Lo = ((zt = {})[Oo] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, zt[Dr] = Er, zt);
function Tn(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Dr ? Er : "$$typeof" in e ? Lo[e.$$typeof] : To;
  var t;
}
var Io = Object.defineProperty, Yo = Object.getOwnPropertyNames, Pn = Object.getOwnPropertySymbols, Ro = Object.getOwnPropertyDescriptor, No = Object.getPrototypeOf, Ln = Object.prototype;
function Or(e, t, n) {
  if (typeof t != "string") {
    if (Ln) {
      var r = No(t);
      r && r !== Ln && Or(e, r, n);
    }
    var o = Yo(t);
    Pn && (o = o.concat(Pn(t)));
    for (var s = Tn(e), i = Tn(t), l = 0; l < o.length; ++l) {
      var a = o[l];
      if (!(a in Po || n && n[a] || i && a in i || s && a in s)) {
        var c = Ro(t, a);
        try {
          Io(e, a, c);
        } catch {
        }
      }
    }
  }
  return e;
}
function He(e) {
  return typeof e == "function";
}
function mn(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Ie(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Tt(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function qe(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function tn(e, t, n) {
  if (n === void 0 && (n = !1), !n && !qe(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = tn(e[r], t[r]);
  else if (qe(t)) for (var r in t) e[r] = tn(e[r], t[r]);
  return e;
}
function yn(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Ho = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Wo() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, s = e.length; o < s; o += 1) r.push(e[o]);
  return r.forEach(function(i) {
    n = n.replace(/%[a-z]/, i);
  }), n;
}
function ke(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Wo.apply(void 0, Te([Ho[e]], t, !1)).trim());
}
var Ao = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
    return n;
  }, e.prototype.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, s = o; t >= s; ) if ((s <<= 1) < 0) throw ke(16, "".concat(t));
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(r), this.length = s;
      for (var i = o; i < s; i++) this.groupSizes[i] = 0;
    }
    for (var l = this.indexOfGroup(t + 1), a = (i = 0, n.length); i < a; i++) this.tag.insertRule(l, n[i]) && (this.groupSizes[t]++, l++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], r = this.indexOfGroup(t), o = r + n;
      this.groupSizes[t] = 0;
      for (var s = r; s < o; s++) this.tag.deleteRule(r);
    }
  }, e.prototype.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), s = o + r, i = o; i < s; i++) n += "".concat(this.tag.getRule(i)).concat(fn);
    return n;
  }, e;
}(), Zo = 1 << 30, yt = /* @__PURE__ */ new Map(), Pt = /* @__PURE__ */ new Map(), vt = 1, ut = function(e) {
  if (yt.has(e)) return yt.get(e);
  for (; Pt.has(vt); ) vt++;
  var t = vt++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > Zo)) throw ke(16, "".concat(t));
  return yt.set(e, t), Pt.set(t, e), t;
}, Bo = function(e, t) {
  vt = t + 1, yt.set(e, t), Pt.set(t, e);
}, jo = "style[".concat(Ne, "][").concat(br, '="').concat(Zt, '"]'), Fo = new RegExp("^".concat(Ne, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), zo = function(e, t, n) {
  for (var r, o = n.split(","), s = 0, i = o.length; s < i; s++) (r = o[s]) && e.registerName(t, r);
}, Vo = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(fn), o = [], s = 0, i = r.length; s < i; s++) {
    var l = r[s].trim();
    if (l) {
      var a = l.match(Fo);
      if (a) {
        var c = 0 | parseInt(a[1], 10), d = a[2];
        c !== 0 && (Bo(d, c), zo(e, d, a[3]), e.getTag().insertRules(c, o)), o.length = 0;
      } else o.push(l);
    }
  }
}, In = function(e) {
  for (var t = document.querySelectorAll(jo), n = 0, r = t.length; n < r; n++) {
    var o = t[n];
    o && o.getAttribute(Ne) !== xr && (Vo(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function Go() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Tr = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(l) {
    var a = Array.from(l.querySelectorAll("style[".concat(Ne, "]")));
    return a[a.length - 1];
  }(n), s = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(Ne, xr), r.setAttribute(br, Zt);
  var i = Go();
  return i && r.setAttribute("nonce", i), n.insertBefore(r, s), r;
}, qo = function() {
  function e(t) {
    this.element = Tr(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet) return n.sheet;
      for (var r = document.styleSheets, o = 0, s = r.length; o < s; o++) {
        var i = r[o];
        if (i.ownerNode === n) return i;
      }
      throw ke(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n && n.cssText ? n.cssText : "";
  }, e;
}(), Uo = function() {
  function e(t) {
    this.element = Tr(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var r = document.createTextNode(n);
      return this.element.insertBefore(r, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Jo = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), Yn = Ot, Xo = { isServer: !Ot, useCSSOMInjection: !Mo }, Lt = function() {
  function e(t, n, r) {
    t === void 0 && (t = Ge), n === void 0 && (n = {});
    var o = this;
    this.options = oe(oe({}, Xo), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && Ot && Yn && (Yn = !1, In(this)), yn(this, function() {
      return function(s) {
        for (var i = s.getTag(), l = i.length, a = "", c = function(u) {
          var h = function(M) {
            return Pt.get(M);
          }(u);
          if (h === void 0) return "continue";
          var f = s.names.get(h), x = i.getGroup(u);
          if (f === void 0 || !f.size || x.length === 0) return "continue";
          var C = "".concat(Ne, ".g").concat(u, '[id="').concat(h, '"]'), P = "";
          f !== void 0 && f.forEach(function(M) {
            M.length > 0 && (P += "".concat(M, ","));
          }), a += "".concat(x).concat(C, '{content:"').concat(P, '"}').concat(fn);
        }, d = 0; d < l; d++) c(d);
        return a;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return ut(t);
  }, e.prototype.rehydrate = function() {
    !this.server && Ot && In(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(oe(oe({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new Jo(o) : r ? new qo(o) : new Uo(o);
    }(this.options), new Ao(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (ut(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(ut(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(ut(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), Ko = /&/g, Qo = /^\s*\/\/.*$/gm;
function Pr(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = Pr(n.children, t)), n;
  });
}
function es(e) {
  var t, n, r, o = Ge, s = o.options, i = s === void 0 ? Ge : s, l = o.plugins, a = l === void 0 ? Bt : l, c = function(h, f, x) {
    return x.startsWith(n) && x.endsWith(n) && x.replaceAll(n, "").length > 0 ? ".".concat(t) : h;
  }, d = a.slice();
  d.push(function(h) {
    h.type === Nt && h.value.includes("&") && (h.props[0] = h.props[0].replace(Ko, n).replace(r, c));
  }), i.prefix && d.push($o), d.push(xo);
  var u = function(h, f, x, C) {
    f === void 0 && (f = ""), x === void 0 && (x = ""), C === void 0 && (C = "&"), t = C, n = f, r = new RegExp("\\".concat(n, "\\b"), "g");
    var P = h.replace(Qo, ""), M = go(x || f ? "".concat(x, " ").concat(f, " { ").concat(P, " }") : P);
    i.namespace && (M = Pr(M, i.namespace));
    var I = [];
    return Et(M, bo(d.concat(ko(function(Y) {
      return I.push(Y);
    })))), I;
  };
  return u.hash = a.length ? a.reduce(function(h, f) {
    return f.name || ke(15), Le(h, f.name);
  }, Cr).toString() : "", u;
}
var ts = new Lt(), nn = es(), Lr = fe.createContext({ shouldForwardProp: void 0, styleSheet: ts, stylis: nn });
Lr.Consumer;
fe.createContext(void 0);
function rn() {
  return Rt(Lr);
}
var on = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, s) {
      s === void 0 && (s = nn);
      var i = r.name + s.hash;
      o.hasNameForId(r.id, i) || o.insertRules(r.id, i, s(r.rules, i, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, yn(this, function() {
      throw ke(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = nn), this.name + t.hash;
  }, e;
}(), ns = function(e) {
  return e >= "A" && e <= "Z";
};
function Rn(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    ns(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Ir = function(e) {
  return e == null || e === !1 || e === "";
}, Yr = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var s = e[o];
    e.hasOwnProperty(o) && !Ir(s) && (Array.isArray(s) && s.isCss || He(s) ? r.push("".concat(Rn(o), ":"), s, ";") : qe(s) ? r.push.apply(r, Te(Te(["".concat(o, " {")], Yr(s), !1), ["}"], !1)) : r.push("".concat(Rn(o), ": ").concat((t = o, (n = s) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in Co || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function Oe(e, t, n, r) {
  if (Ir(e)) return [];
  if (mn(e)) return [".".concat(e.styledComponentId)];
  if (He(e)) {
    if (!He(s = e) || s.prototype && s.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof on || qe(o) || o === null || console.error("".concat(Sr(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Oe(o, t, n, r);
  }
  var s;
  return e instanceof on ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : qe(e) ? Yr(e) : Array.isArray(e) ? Array.prototype.concat.apply(Bt, e.map(function(i) {
    return Oe(i, t, n, r);
  })) : [e.toString()];
}
function Rr(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (He(n) && !mn(n)) return !1;
  }
  return !0;
}
var rs = Mr(Zt), os = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Rr(t), this.componentId = n, this.baseHash = Le(rs, n), this.baseStyle = r, Lt.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = Ie(o, this.staticRulesId);
    else {
      var s = Tt(Oe(this.rules, t, n, r)), i = en(Le(this.baseHash, s) >>> 0);
      if (!n.hasNameForId(this.componentId, i)) {
        var l = r(s, ".".concat(i), void 0, this.componentId);
        n.insertRules(this.componentId, i, l);
      }
      o = Ie(o, i), this.staticRulesId = i;
    }
    else {
      for (var a = Le(this.baseHash, r.hash), c = "", d = 0; d < this.rules.length; d++) {
        var u = this.rules[d];
        if (typeof u == "string") c += u, process.env.NODE_ENV !== "production" && (a = Le(a, u));
        else if (u) {
          var h = Tt(Oe(u, t, n, r));
          a = Le(a, h + d), c += h;
        }
      }
      if (c) {
        var f = en(a >>> 0);
        n.hasNameForId(this.componentId, f) || n.insertRules(this.componentId, f, r(c, ".".concat(f), void 0, this.componentId)), o = Ie(o, f);
      }
    }
    return o;
  }, e;
}(), Ue = fe.createContext(void 0);
Ue.Consumer;
function Ae() {
  var e = Rt(Ue);
  if (!e) throw ke(18);
  return e;
}
function ss(e) {
  var t = fe.useContext(Ue), n = Ee(function() {
    return function(r, o) {
      if (!r) throw ke(14);
      if (He(r)) {
        var s = r(o);
        if (process.env.NODE_ENV !== "production" && (s === null || Array.isArray(s) || typeof s != "object")) throw ke(7);
        return s;
      }
      if (Array.isArray(r) || typeof r != "object") throw ke(8);
      return o ? oe(oe({}, o), r) : r;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? fe.createElement(Ue.Provider, { value: n }, e.children) : null;
}
var Gt = {}, Nn = /* @__PURE__ */ new Set();
function is(e, t, n) {
  var r = mn(e), o = e, s = !Vt(e), i = t.attrs, l = i === void 0 ? Bt : i, a = t.componentId, c = a === void 0 ? function(R, $) {
    var v = typeof R != "string" ? "sc" : En(R);
    Gt[v] = (Gt[v] || 0) + 1;
    var p = "".concat(v, "-").concat(pn(Zt + v + Gt[v]));
    return $ ? "".concat($, "-").concat(p) : p;
  }(t.displayName, t.parentComponentId) : a, d = t.displayName, u = d === void 0 ? function(R) {
    return Vt(R) ? "styled.".concat(R) : "Styled(".concat(Sr(R), ")");
  }(e) : d, h = t.displayName && t.componentId ? "".concat(En(t.displayName), "-").concat(t.componentId) : t.componentId || c, f = r && o.attrs ? o.attrs.concat(l).filter(Boolean) : l, x = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var C = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var P = t.shouldForwardProp;
      x = function(R, $) {
        return C(R, $) && P(R, $);
      };
    } else x = C;
  }
  var M = new os(n, h, r ? o.componentStyle : void 0);
  function I(R, $) {
    return function(v, p, y) {
      var H = v.attrs, N = v.componentStyle, S = v.defaultProps, j = v.foldedComponentIds, z = v.styledComponentId, D = v.target, w = fe.useContext(Ue), m = rn(), b = v.shouldForwardProp || m.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Cn(z);
      var g = $r(p, w, S) || Ge, T = function(V, G, F) {
        for (var J, Q = oe(oe({}, G), { className: void 0, theme: F }), ee = 0; ee < V.length; ee += 1) {
          var ae = He(J = V[ee]) ? J(Q) : J;
          for (var le in ae) Q[le] = le === "className" ? Ie(Q[le], ae[le]) : le === "style" ? oe(oe({}, Q[le]), ae[le]) : ae[le];
        }
        return G.className && (Q.className = Ie(Q.className, G.className)), Q;
      }(H, p, g), L = T.as || D, Z = {};
      for (var W in T) T[W] === void 0 || W[0] === "$" || W === "as" || W === "theme" && T.theme === g || (W === "forwardedAs" ? Z.as = T.forwardedAs : b && !b(W, L) || (Z[W] = T[W], b || process.env.NODE_ENV !== "development" || oo(W) || Nn.has(W) || !Qt.has(L) || (Nn.add(W), console.warn('styled-components: it looks like an unknown prop "'.concat(W, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var U = function(V, G) {
        var F = rn(), J = V.generateAndInjectStyles(G, F.styleSheet, F.stylis);
        return process.env.NODE_ENV !== "production" && Cn(J), J;
      }(N, T);
      process.env.NODE_ENV !== "production" && v.warnTooManyClasses && v.warnTooManyClasses(U);
      var A = Ie(j, z);
      return U && (A += " " + U), T.className && (A += " " + T.className), Z[Vt(L) && !Qt.has(L) ? "class" : "className"] = A, y && (Z.ref = y), Qr(L, Z);
    }(Y, R, $);
  }
  I.displayName = u;
  var Y = fe.forwardRef(I);
  return Y.attrs = f, Y.componentStyle = M, Y.displayName = u, Y.shouldForwardProp = x, Y.foldedComponentIds = r ? Ie(o.foldedComponentIds, o.styledComponentId) : "", Y.styledComponentId = h, Y.target = r ? o.target : e, Object.defineProperty(Y, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(R) {
    this._foldedDefaultProps = r ? function($) {
      for (var v = [], p = 1; p < arguments.length; p++) v[p - 1] = arguments[p];
      for (var y = 0, H = v; y < H.length; y++) tn($, H[y], !0);
      return $;
    }({}, o.defaultProps, R) : R;
  } }), process.env.NODE_ENV !== "production" && (kr(u, h), Y.warnTooManyClasses = /* @__PURE__ */ function(R, $) {
    var v = {}, p = !1;
    return function(y) {
      if (!p && (v[y] = !0, Object.keys(v).length >= 200)) {
        var H = $ ? ' with the id of "'.concat($, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(R).concat(H, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), p = !0, v = {};
      }
    };
  }(u, h)), yn(Y, function() {
    return ".".concat(Y.styledComponentId);
  }), s && Or(Y, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), Y;
}
function Hn(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var Wn = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function vn(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (He(e) || qe(e)) return Wn(Oe(Hn(Bt, Te([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? Oe(r) : Wn(Oe(Hn(r, t)));
}
function sn(e, t, n) {
  if (n === void 0 && (n = Ge), !t) throw ke(1, t);
  var r = function(o) {
    for (var s = [], i = 1; i < arguments.length; i++) s[i - 1] = arguments[i];
    return e(t, n, vn.apply(void 0, Te([o], s, !1)));
  };
  return r.attrs = function(o) {
    return sn(e, t, oe(oe({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return sn(e, t, oe(oe({}, n), o));
  }, r;
}
var Nr = function(e) {
  return sn(is, e);
}, E = Nr;
Qt.forEach(function(e) {
  E[e] = Nr(e);
});
var as = function() {
  function e(t, n) {
    this.rules = t, this.componentId = n, this.isStatic = Rr(t), Lt.registerId(this.componentId + 1);
  }
  return e.prototype.createStyles = function(t, n, r, o) {
    var s = o(Tt(Oe(this.rules, n, r, o)), ""), i = this.componentId + t;
    r.insertRules(i, i, s);
  }, e.prototype.removeStyles = function(t, n) {
    n.clearRules(this.componentId + t);
  }, e.prototype.renderStyles = function(t, n, r, o) {
    t > 2 && Lt.registerId(this.componentId + t), this.removeStyles(t, r), this.createStyles(t, n, r, o);
  }, e;
}();
function cs(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  var r = vn.apply(void 0, Te([e], t, !1)), o = "sc-global-".concat(pn(JSON.stringify(r))), s = new as(r, o);
  process.env.NODE_ENV !== "production" && kr(o);
  var i = function(a) {
    var c = rn(), d = fe.useContext(Ue), u = fe.useRef(c.styleSheet.allocateGSInstance(o)).current;
    return process.env.NODE_ENV !== "production" && fe.Children.count(a.children) && console.warn("The global style component ".concat(o, " was given child JSX. createGlobalStyle does not render children.")), process.env.NODE_ENV !== "production" && r.some(function(h) {
      return typeof h == "string" && h.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), c.styleSheet.server && l(u, a, c.styleSheet, d, c.stylis), fe.useLayoutEffect(function() {
      if (!c.styleSheet.server) return l(u, a, c.styleSheet, d, c.stylis), function() {
        return s.removeStyles(u, c.styleSheet);
      };
    }, [u, a, c.styleSheet, d, c.stylis]), null;
  };
  function l(a, c, d, u, h) {
    if (s.isStatic) s.renderStyles(a, So, d, h);
    else {
      var f = oe(oe({}, c), { theme: $r(c, u, i.defaultProps) });
      s.renderStyles(a, f, d, h);
    }
  }
  return fe.memo(i);
}
function ls(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = Tt(vn.apply(void 0, Te([e], t, !1))), o = pn(r);
  return new on(o, r);
}
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var ht = "__sc-".concat(Ne, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[ht] || (window[ht] = 0), window[ht] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[ht] += 1);
const ot = "reactSchedulerOutsideWrapper", ds = cs`

  #${ot} {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${ot} *,
 #${ot} *:before,
 #${ot} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`, us = {
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
}, hs = {
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
}, Qe = `
margin: 0;
padding: 0;
`, Hr = `
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;
E.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;
const de = 50, Me = 24, et = 16, Re = 40, Je = Re + et + Me, Pe = 84, he = 56, ve = 196, Ce = 12, ce = 50, Xe = 24, it = 16, an = 40, fs = Xe + it + an, An = 1, Zn = 52, we = {
  topRow: "600 14px Inter",
  middleRow: "400 10px Inter",
  bottomRow: {
    name: "600 14px Inter",
    number: "600 10px Inter"
  }
}, Fe = 3, ps = 1.6, ms = 4.5, cn = 12, It = 24, ys = "reactSchedulerCanvasHeaderWrapper", Wr = "reactSchedulerCanvasWrapper", We = ot, vs = 4, gs = 48, _e = 5, ws = 40, Bn = 8, gn = Me / 2 + 2, Ar = et / 2 + Me + 1, jn = 2, re = 60;
var gt = { exports: {} }, xs = gt.exports, Fn;
function jt() {
  return Fn || (Fn = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(xs, function() {
      var n = 1e3, r = 6e4, o = 36e5, s = "millisecond", i = "second", l = "minute", a = "hour", c = "day", d = "week", u = "month", h = "quarter", f = "year", x = "date", C = "Invalid Date", P = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, M = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, I = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(D) {
        var w = ["th", "st", "nd", "rd"], m = D % 100;
        return "[" + D + (w[(m - 20) % 10] || w[m] || w[0]) + "]";
      } }, Y = function(D, w, m) {
        var b = String(D);
        return !b || b.length >= w ? D : "" + Array(w + 1 - b.length).join(m) + D;
      }, R = { s: Y, z: function(D) {
        var w = -D.utcOffset(), m = Math.abs(w), b = Math.floor(m / 60), g = m % 60;
        return (w <= 0 ? "+" : "-") + Y(b, 2, "0") + ":" + Y(g, 2, "0");
      }, m: function D(w, m) {
        if (w.date() < m.date()) return -D(m, w);
        var b = 12 * (m.year() - w.year()) + (m.month() - w.month()), g = w.clone().add(b, u), T = m - g < 0, L = w.clone().add(b + (T ? -1 : 1), u);
        return +(-(b + (m - g) / (T ? g - L : L - g)) || 0);
      }, a: function(D) {
        return D < 0 ? Math.ceil(D) || 0 : Math.floor(D);
      }, p: function(D) {
        return { M: u, y: f, w: d, d: c, D: x, h: a, m: l, s: i, ms: s, Q: h }[D] || String(D || "").toLowerCase().replace(/s$/, "");
      }, u: function(D) {
        return D === void 0;
      } }, $ = "en", v = {};
      v[$] = I;
      var p = "$isDayjsObject", y = function(D) {
        return D instanceof j || !(!D || !D[p]);
      }, H = function D(w, m, b) {
        var g;
        if (!w) return $;
        if (typeof w == "string") {
          var T = w.toLowerCase();
          v[T] && (g = T), m && (v[T] = m, g = T);
          var L = w.split("-");
          if (!g && L.length > 1) return D(L[0]);
        } else {
          var Z = w.name;
          v[Z] = w, g = Z;
        }
        return !b && g && ($ = g), g || !b && $;
      }, N = function(D, w) {
        if (y(D)) return D.clone();
        var m = typeof w == "object" ? w : {};
        return m.date = D, m.args = arguments, new j(m);
      }, S = R;
      S.l = H, S.i = y, S.w = function(D, w) {
        return N(D, { locale: w.$L, utc: w.$u, x: w.$x, $offset: w.$offset });
      };
      var j = function() {
        function D(m) {
          this.$L = H(m.locale, null, !0), this.parse(m), this.$x = this.$x || m.x || {}, this[p] = !0;
        }
        var w = D.prototype;
        return w.parse = function(m) {
          this.$d = function(b) {
            var g = b.date, T = b.utc;
            if (g === null) return /* @__PURE__ */ new Date(NaN);
            if (S.u(g)) return /* @__PURE__ */ new Date();
            if (g instanceof Date) return new Date(g);
            if (typeof g == "string" && !/Z$/i.test(g)) {
              var L = g.match(P);
              if (L) {
                var Z = L[2] - 1 || 0, W = (L[7] || "0").substring(0, 3);
                return T ? new Date(Date.UTC(L[1], Z, L[3] || 1, L[4] || 0, L[5] || 0, L[6] || 0, W)) : new Date(L[1], Z, L[3] || 1, L[4] || 0, L[5] || 0, L[6] || 0, W);
              }
            }
            return new Date(g);
          }(m), this.init();
        }, w.init = function() {
          var m = this.$d;
          this.$y = m.getFullYear(), this.$M = m.getMonth(), this.$D = m.getDate(), this.$W = m.getDay(), this.$H = m.getHours(), this.$m = m.getMinutes(), this.$s = m.getSeconds(), this.$ms = m.getMilliseconds();
        }, w.$utils = function() {
          return S;
        }, w.isValid = function() {
          return this.$d.toString() !== C;
        }, w.isSame = function(m, b) {
          var g = N(m);
          return this.startOf(b) <= g && g <= this.endOf(b);
        }, w.isAfter = function(m, b) {
          return N(m) < this.startOf(b);
        }, w.isBefore = function(m, b) {
          return this.endOf(b) < N(m);
        }, w.$g = function(m, b, g) {
          return S.u(m) ? this[b] : this.set(g, m);
        }, w.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, w.valueOf = function() {
          return this.$d.getTime();
        }, w.startOf = function(m, b) {
          var g = this, T = !!S.u(b) || b, L = S.p(m), Z = function(Q, ee) {
            var ae = S.w(g.$u ? Date.UTC(g.$y, ee, Q) : new Date(g.$y, ee, Q), g);
            return T ? ae : ae.endOf(c);
          }, W = function(Q, ee) {
            return S.w(g.toDate()[Q].apply(g.toDate("s"), (T ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ee)), g);
          }, U = this.$W, A = this.$M, V = this.$D, G = "set" + (this.$u ? "UTC" : "");
          switch (L) {
            case f:
              return T ? Z(1, 0) : Z(31, 11);
            case u:
              return T ? Z(1, A) : Z(0, A + 1);
            case d:
              var F = this.$locale().weekStart || 0, J = (U < F ? U + 7 : U) - F;
              return Z(T ? V - J : V + (6 - J), A);
            case c:
            case x:
              return W(G + "Hours", 0);
            case a:
              return W(G + "Minutes", 1);
            case l:
              return W(G + "Seconds", 2);
            case i:
              return W(G + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, w.endOf = function(m) {
          return this.startOf(m, !1);
        }, w.$set = function(m, b) {
          var g, T = S.p(m), L = "set" + (this.$u ? "UTC" : ""), Z = (g = {}, g[c] = L + "Date", g[x] = L + "Date", g[u] = L + "Month", g[f] = L + "FullYear", g[a] = L + "Hours", g[l] = L + "Minutes", g[i] = L + "Seconds", g[s] = L + "Milliseconds", g)[T], W = T === c ? this.$D + (b - this.$W) : b;
          if (T === u || T === f) {
            var U = this.clone().set(x, 1);
            U.$d[Z](W), U.init(), this.$d = U.set(x, Math.min(this.$D, U.daysInMonth())).$d;
          } else Z && this.$d[Z](W);
          return this.init(), this;
        }, w.set = function(m, b) {
          return this.clone().$set(m, b);
        }, w.get = function(m) {
          return this[S.p(m)]();
        }, w.add = function(m, b) {
          var g, T = this;
          m = Number(m);
          var L = S.p(b), Z = function(A) {
            var V = N(T);
            return S.w(V.date(V.date() + Math.round(A * m)), T);
          };
          if (L === u) return this.set(u, this.$M + m);
          if (L === f) return this.set(f, this.$y + m);
          if (L === c) return Z(1);
          if (L === d) return Z(7);
          var W = (g = {}, g[l] = r, g[a] = o, g[i] = n, g)[L] || 1, U = this.$d.getTime() + m * W;
          return S.w(U, this);
        }, w.subtract = function(m, b) {
          return this.add(-1 * m, b);
        }, w.format = function(m) {
          var b = this, g = this.$locale();
          if (!this.isValid()) return g.invalidDate || C;
          var T = m || "YYYY-MM-DDTHH:mm:ssZ", L = S.z(this), Z = this.$H, W = this.$m, U = this.$M, A = g.weekdays, V = g.months, G = g.meridiem, F = function(ee, ae, le, at) {
            return ee && (ee[ae] || ee(b, T)) || le[ae].slice(0, at);
          }, J = function(ee) {
            return S.s(Z % 12 || 12, ee, "0");
          }, Q = G || function(ee, ae, le) {
            var at = ee < 12 ? "AM" : "PM";
            return le ? at.toLowerCase() : at;
          };
          return T.replace(M, function(ee, ae) {
            return ae || function(le) {
              switch (le) {
                case "YY":
                  return String(b.$y).slice(-2);
                case "YYYY":
                  return S.s(b.$y, 4, "0");
                case "M":
                  return U + 1;
                case "MM":
                  return S.s(U + 1, 2, "0");
                case "MMM":
                  return F(g.monthsShort, U, V, 3);
                case "MMMM":
                  return F(V, U);
                case "D":
                  return b.$D;
                case "DD":
                  return S.s(b.$D, 2, "0");
                case "d":
                  return String(b.$W);
                case "dd":
                  return F(g.weekdaysMin, b.$W, A, 2);
                case "ddd":
                  return F(g.weekdaysShort, b.$W, A, 3);
                case "dddd":
                  return A[b.$W];
                case "H":
                  return String(Z);
                case "HH":
                  return S.s(Z, 2, "0");
                case "h":
                  return J(1);
                case "hh":
                  return J(2);
                case "a":
                  return Q(Z, W, !0);
                case "A":
                  return Q(Z, W, !1);
                case "m":
                  return String(W);
                case "mm":
                  return S.s(W, 2, "0");
                case "s":
                  return String(b.$s);
                case "ss":
                  return S.s(b.$s, 2, "0");
                case "SSS":
                  return S.s(b.$ms, 3, "0");
                case "Z":
                  return L;
              }
              return null;
            }(ee) || L.replace(":", "");
          });
        }, w.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, w.diff = function(m, b, g) {
          var T, L = this, Z = S.p(b), W = N(m), U = (W.utcOffset() - this.utcOffset()) * r, A = this - W, V = function() {
            return S.m(L, W);
          };
          switch (Z) {
            case f:
              T = V() / 12;
              break;
            case u:
              T = V();
              break;
            case h:
              T = V() / 3;
              break;
            case d:
              T = (A - U) / 6048e5;
              break;
            case c:
              T = (A - U) / 864e5;
              break;
            case a:
              T = A / o;
              break;
            case l:
              T = A / r;
              break;
            case i:
              T = A / n;
              break;
            default:
              T = A;
          }
          return g ? T : S.a(T);
        }, w.daysInMonth = function() {
          return this.endOf(u).$D;
        }, w.$locale = function() {
          return v[this.$L];
        }, w.locale = function(m, b) {
          if (!m) return this.$L;
          var g = this.clone(), T = H(m, b, !0);
          return T && (g.$L = T), g;
        }, w.clone = function() {
          return S.w(this.$d, this);
        }, w.toDate = function() {
          return new Date(this.valueOf());
        }, w.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, w.toISOString = function() {
          return this.$d.toISOString();
        }, w.toString = function() {
          return this.$d.toUTCString();
        }, D;
      }(), z = j.prototype;
      return N.prototype = z, [["$ms", s], ["$s", i], ["$m", l], ["$H", a], ["$W", c], ["$M", u], ["$y", f], ["$D", x]].forEach(function(D) {
        z[D[1]] = function(w) {
          return this.$g(w, D[0], D[1]);
        };
      }), N.extend = function(D, w) {
        return D.$i || (D(w, j, N), D.$i = !0), N;
      }, N.locale = H, N.isDayjs = y, N.unix = function(D) {
        return N(1e3 * D);
      }, N.en = v[$], N.Ls = v, N.p = {}, N;
    });
  }(gt)), gt.exports;
}
var bs = jt();
const _ = /* @__PURE__ */ xe(bs), zn = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, wn = (e) => {
  const t = e.day();
  return t !== 0 && t !== 6;
}, Zr = (e, t) => _(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(t, "months").daysInMonth(), Br = (e) => ({
  hour: e.hour(),
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: wn(e),
  isCurrentDay: e.isSame(_(), "day"),
  year: parseInt(e.format("YYYY"))
}), xn = (e, t, n, r, o, s, i) => {
  e.strokeStyle = i.colors.border, s ? e.fillStyle = i.colors.secondary : o ? e.fillStyle = "transparent" : e.fillStyle = i.colors.primary, e.beginPath(), e.setLineDash([]), e.fillRect(t, n, r, he), e.strokeRect(t + 0.5, n + 0.5, r, he);
}, ks = (e, t, n, r, o) => {
  for (let s = 0; s < t; s++)
    for (let i = 0; i <= n; i++) {
      const l = _(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
        i,
        "days"
      ), a = l.isSame(_(), "day");
      xn(
        e,
        i * de,
        s * he,
        de,
        wn(l),
        a,
        o
      );
    }
}, $s = (e, t, n, r) => {
  e.setLineDash([5, 5]), e.strokeStyle = r.colors.border, e.moveTo(t + 0.5, 0.5), e.lineTo(t + 0.5, n + 0.5), e.stroke();
}, Cs = (e, t, n, r, o) => {
  let s = 0, i = -(r.dayOfMonth - 1) * Ce;
  for (let l = 0; l <= n; l++) {
    const c = _(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
      l,
      "weeks"
    ).isSame(_(), "week");
    for (let d = 0; d < t; d++)
      xn(e, s, d * he, Pe, !0, c, o);
    s += Pe;
  }
  for (let l = 0; l < n; l++) {
    const a = Zr(r, l) * Ce;
    $s(e, i, t * he, o), i += a;
  }
}, Ms = (e, t, n, r, o) => {
  const s = _(`${r.year}-${r.month + 1}-${r.dayOfMonth + 1}`);
  for (let i = 0; i < t; i++)
    for (let l = 0; l <= n; l++) {
      let a;
      l === Math.floor(n / 2) ? a = _() : l > Math.floor(n / 2) ? a = _().add(l - Math.floor(n / 2), "hours") : a = _().subtract(Math.floor(n / 2) - i, "hours");
      const c = s.isSame(_(), "day") && a.isSame(_(), "hour");
      xn(
        e,
        l * ce + ce / 2 - 0.5,
        // -0.5 to make borders better aligned with hour axis
        i * he,
        ce,
        wn(a),
        c,
        o
      );
    }
}, Ss = (e, t, n, r, o, s) => {
  if (e.clearRect(0, 0, e.canvas.width, e.canvas.height), !!document.getElementById(Wr))
    switch (t) {
      case 0:
        Cs(e, n, r, o, s);
        break;
      case 1:
        ks(e, n, r, o, s);
        break;
      case 2:
        Ms(e, n, r, o, s);
        break;
    }
};
var wt = { exports: {} }, _s = wt.exports, Vn;
function Ds() {
  return Vn || (Vn = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(_s, function() {
      var n = "week", r = "year";
      return function(o, s, i) {
        var l = s.prototype;
        l.week = function(a) {
          if (a === void 0 && (a = null), a !== null) return this.add(7 * (a - this.week()), "day");
          var c = this.$locale().yearStart || 1;
          if (this.month() === 11 && this.date() > 25) {
            var d = i(this).startOf(r).add(1, r).date(c), u = i(this).endOf(n);
            if (d.isBefore(u)) return 1;
          }
          var h = i(this).startOf(r).date(c).startOf(n).subtract(1, "millisecond"), f = this.diff(h, n, !0);
          return f < 0 ? i(this).startOf("week").week() : Math.ceil(f);
        }, l.weeks = function(a) {
          return a === void 0 && (a = null), this.week(a);
        };
      };
    });
  }(wt)), wt.exports;
}
var Es = Ds();
const Os = /* @__PURE__ */ xe(Es);
var xt = { exports: {} }, Ts = xt.exports, Gn;
function Ps() {
  return Gn || (Gn = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(Ts, function() {
      return function(n, r, o) {
        r.prototype.dayOfYear = function(s) {
          var i = Math.round((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
          return s == null ? i : this.add(s - i, "day");
        };
      };
    });
  }(xt)), xt.exports;
}
var Ls = Ps();
const Is = /* @__PURE__ */ xe(Ls);
var bt = { exports: {} }, Ys = bt.exports, qn;
function Rs() {
  return qn || (qn = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(Ys, function() {
      var n = "day";
      return function(r, o, s) {
        var i = function(c) {
          return c.add(4 - c.isoWeekday(), n);
        }, l = o.prototype;
        l.isoWeekYear = function() {
          return i(this).year();
        }, l.isoWeek = function(c) {
          if (!this.$utils().u(c)) return this.add(7 * (c - this.isoWeek()), n);
          var d, u, h, f, x = i(this), C = (d = this.isoWeekYear(), u = this.$u, h = (u ? s.utc : s)().year(d).startOf("year"), f = 4 - h.isoWeekday(), h.isoWeekday() > 4 && (f += 7), h.add(f, n));
          return x.diff(C, "week") + 1;
        }, l.isoWeekday = function(c) {
          return this.$utils().u(c) ? this.day() || 7 : this.day(this.day() % 7 ? c : c - 7);
        };
        var a = l.startOf;
        l.startOf = function(c, d) {
          var u = this.$utils(), h = !!u.u(d) || d;
          return u.p(c) === "isoweek" ? h ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : a.bind(this)(c, d);
        };
      };
    });
  }(bt)), bt.exports;
}
var Ns = Rs();
const Hs = /* @__PURE__ */ xe(Ns);
var kt = { exports: {} }, Ws = kt.exports, Un;
function As() {
  return Un || (Un = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(Ws, function() {
      return function(n, r, o) {
        r.prototype.isBetween = function(s, i, l, a) {
          var c = o(s), d = o(i), u = (a = a || "()")[0] === "(", h = a[1] === ")";
          return (u ? this.isAfter(c, l) : !this.isBefore(c, l)) && (h ? this.isBefore(d, l) : !this.isAfter(d, l)) || (u ? this.isBefore(c, l) : !this.isAfter(c, l)) && (h ? this.isAfter(d, l) : !this.isBefore(d, l));
        };
      };
    });
  }(kt)), kt.exports;
}
var Zs = As();
const Bs = /* @__PURE__ */ xe(Zs);
var $t = { exports: {} }, js = $t.exports, Jn;
function Fs() {
  return Jn || (Jn = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(js, function() {
      var n, r, o = 1e3, s = 6e4, i = 36e5, l = 864e5, a = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, c = 31536e6, d = 2628e6, u = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, h = { years: c, months: d, days: l, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, f = function(v) {
        return v instanceof R;
      }, x = function(v, p, y) {
        return new R(v, y, p.$l);
      }, C = function(v) {
        return r.p(v) + "s";
      }, P = function(v) {
        return v < 0;
      }, M = function(v) {
        return P(v) ? Math.ceil(v) : Math.floor(v);
      }, I = function(v) {
        return Math.abs(v);
      }, Y = function(v, p) {
        return v ? P(v) ? { negative: !0, format: "" + I(v) + p } : { negative: !1, format: "" + v + p } : { negative: !1, format: "" };
      }, R = function() {
        function v(y, H, N) {
          var S = this;
          if (this.$d = {}, this.$l = N, y === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), H) return x(y * h[C(H)], this);
          if (typeof y == "number") return this.$ms = y, this.parseFromMilliseconds(), this;
          if (typeof y == "object") return Object.keys(y).forEach(function(D) {
            S.$d[C(D)] = y[D];
          }), this.calMilliseconds(), this;
          if (typeof y == "string") {
            var j = y.match(u);
            if (j) {
              var z = j.slice(2).map(function(D) {
                return D != null ? Number(D) : 0;
              });
              return this.$d.years = z[0], this.$d.months = z[1], this.$d.weeks = z[2], this.$d.days = z[3], this.$d.hours = z[4], this.$d.minutes = z[5], this.$d.seconds = z[6], this.calMilliseconds(), this;
            }
          }
          return this;
        }
        var p = v.prototype;
        return p.calMilliseconds = function() {
          var y = this;
          this.$ms = Object.keys(this.$d).reduce(function(H, N) {
            return H + (y.$d[N] || 0) * h[N];
          }, 0);
        }, p.parseFromMilliseconds = function() {
          var y = this.$ms;
          this.$d.years = M(y / c), y %= c, this.$d.months = M(y / d), y %= d, this.$d.days = M(y / l), y %= l, this.$d.hours = M(y / i), y %= i, this.$d.minutes = M(y / s), y %= s, this.$d.seconds = M(y / o), y %= o, this.$d.milliseconds = y;
        }, p.toISOString = function() {
          var y = Y(this.$d.years, "Y"), H = Y(this.$d.months, "M"), N = +this.$d.days || 0;
          this.$d.weeks && (N += 7 * this.$d.weeks);
          var S = Y(N, "D"), j = Y(this.$d.hours, "H"), z = Y(this.$d.minutes, "M"), D = this.$d.seconds || 0;
          this.$d.milliseconds && (D += this.$d.milliseconds / 1e3, D = Math.round(1e3 * D) / 1e3);
          var w = Y(D, "S"), m = y.negative || H.negative || S.negative || j.negative || z.negative || w.negative, b = j.format || z.format || w.format ? "T" : "", g = (m ? "-" : "") + "P" + y.format + H.format + S.format + b + j.format + z.format + w.format;
          return g === "P" || g === "-P" ? "P0D" : g;
        }, p.toJSON = function() {
          return this.toISOString();
        }, p.format = function(y) {
          var H = y || "YYYY-MM-DDTHH:mm:ss", N = { Y: this.$d.years, YY: r.s(this.$d.years, 2, "0"), YYYY: r.s(this.$d.years, 4, "0"), M: this.$d.months, MM: r.s(this.$d.months, 2, "0"), D: this.$d.days, DD: r.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: r.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: r.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: r.s(this.$d.seconds, 2, "0"), SSS: r.s(this.$d.milliseconds, 3, "0") };
          return H.replace(a, function(S, j) {
            return j || String(N[S]);
          });
        }, p.as = function(y) {
          return this.$ms / h[C(y)];
        }, p.get = function(y) {
          var H = this.$ms, N = C(y);
          return N === "milliseconds" ? H %= 1e3 : H = N === "weeks" ? M(H / h[N]) : this.$d[N], H || 0;
        }, p.add = function(y, H, N) {
          var S;
          return S = H ? y * h[C(H)] : f(y) ? y.$ms : x(y, this).$ms, x(this.$ms + S * (N ? -1 : 1), this);
        }, p.subtract = function(y, H) {
          return this.add(y, H, !0);
        }, p.locale = function(y) {
          var H = this.clone();
          return H.$l = y, H;
        }, p.clone = function() {
          return x(this.$ms, this);
        }, p.humanize = function(y) {
          return n().add(this.$ms, "ms").locale(this.$l).fromNow(!y);
        }, p.valueOf = function() {
          return this.asMilliseconds();
        }, p.milliseconds = function() {
          return this.get("milliseconds");
        }, p.asMilliseconds = function() {
          return this.as("milliseconds");
        }, p.seconds = function() {
          return this.get("seconds");
        }, p.asSeconds = function() {
          return this.as("seconds");
        }, p.minutes = function() {
          return this.get("minutes");
        }, p.asMinutes = function() {
          return this.as("minutes");
        }, p.hours = function() {
          return this.get("hours");
        }, p.asHours = function() {
          return this.as("hours");
        }, p.days = function() {
          return this.get("days");
        }, p.asDays = function() {
          return this.as("days");
        }, p.weeks = function() {
          return this.get("weeks");
        }, p.asWeeks = function() {
          return this.as("weeks");
        }, p.months = function() {
          return this.get("months");
        }, p.asMonths = function() {
          return this.as("months");
        }, p.years = function() {
          return this.get("years");
        }, p.asYears = function() {
          return this.as("years");
        }, v;
      }(), $ = function(v, p, y) {
        return v.add(p.years() * y, "y").add(p.months() * y, "M").add(p.days() * y, "d").add(p.hours() * y, "h").add(p.minutes() * y, "m").add(p.seconds() * y, "s").add(p.milliseconds() * y, "ms");
      };
      return function(v, p, y) {
        n = y, r = y().$utils(), y.duration = function(S, j) {
          var z = y.locale();
          return x(S, { $l: z }, j);
        }, y.isDuration = f;
        var H = p.prototype.add, N = p.prototype.subtract;
        p.prototype.add = function(S, j) {
          return f(S) ? $(this, S, 1) : H.bind(this)(S, j);
        }, p.prototype.subtract = function(S, j) {
          return f(S) ? $(this, S, -1) : N.bind(this)(S, j);
        };
      };
    });
  }($t)), $t.exports;
}
var zs = Fs();
const Vs = /* @__PURE__ */ xe(zs);
var qt, Xn;
function Gs() {
  if (Xn) return qt;
  Xn = 1;
  var e = "Expected a function", t = NaN, n = "[object Symbol]", r = /^\s+|\s+$/g, o = /^[-+]0x[0-9a-f]+$/i, s = /^0b[01]+$/i, i = /^0o[0-7]+$/i, l = parseInt, a = typeof ct == "object" && ct && ct.Object === Object && ct, c = typeof self == "object" && self && self.Object === Object && self, d = a || c || Function("return this")(), u = Object.prototype, h = u.toString, f = Math.max, x = Math.min, C = function() {
    return d.Date.now();
  };
  function P($, v, p) {
    var y, H, N, S, j, z, D = 0, w = !1, m = !1, b = !0;
    if (typeof $ != "function")
      throw new TypeError(e);
    v = R(v) || 0, M(p) && (w = !!p.leading, m = "maxWait" in p, N = m ? f(R(p.maxWait) || 0, v) : N, b = "trailing" in p ? !!p.trailing : b);
    function g(F) {
      var J = y, Q = H;
      return y = H = void 0, D = F, S = $.apply(Q, J), S;
    }
    function T(F) {
      return D = F, j = setTimeout(W, v), w ? g(F) : S;
    }
    function L(F) {
      var J = F - z, Q = F - D, ee = v - J;
      return m ? x(ee, N - Q) : ee;
    }
    function Z(F) {
      var J = F - z, Q = F - D;
      return z === void 0 || J >= v || J < 0 || m && Q >= N;
    }
    function W() {
      var F = C();
      if (Z(F))
        return U(F);
      j = setTimeout(W, L(F));
    }
    function U(F) {
      return j = void 0, b && y ? g(F) : (y = H = void 0, S);
    }
    function A() {
      j !== void 0 && clearTimeout(j), D = 0, y = z = H = j = void 0;
    }
    function V() {
      return j === void 0 ? S : U(C());
    }
    function G() {
      var F = C(), J = Z(F);
      if (y = arguments, H = this, z = F, J) {
        if (j === void 0)
          return T(z);
        if (m)
          return j = setTimeout(W, v), g(z);
      }
      return j === void 0 && (j = setTimeout(W, v)), S;
    }
    return G.cancel = A, G.flush = V, G;
  }
  function M($) {
    var v = typeof $;
    return !!$ && (v == "object" || v == "function");
  }
  function I($) {
    return !!$ && typeof $ == "object";
  }
  function Y($) {
    return typeof $ == "symbol" || I($) && h.call($) == n;
  }
  function R($) {
    if (typeof $ == "number")
      return $;
    if (Y($))
      return t;
    if (M($)) {
      var v = typeof $.valueOf == "function" ? $.valueOf() : $;
      $ = M(v) ? v + "" : v;
    }
    if (typeof $ != "string")
      return $ === 0 ? $ : +$;
    $ = $.replace(r, "");
    var p = s.test($);
    return p || i.test($) ? l($.slice(2), p ? 2 : 8) : o.test($) ? t : +$;
  }
  return qt = P, qt;
}
var qs = Gs();
const Be = /* @__PURE__ */ xe(qs), Ct = [0, 1, 2], Us = (e) => Ct.includes(e), je = (e) => {
  var r;
  const n = (((r = document.getElementById(We)) == null ? void 0 : r.clientWidth) || 0) - ve;
  switch (e) {
    case 1:
      return Math.ceil(n / de) * Fe;
    case 2:
      return Math.ceil(n / ce) * Fe;
    default:
      return Math.ceil(n / Pe) * Fe;
  }
}, Js = (e) => je(e) / Fe, bn = (e, t) => {
  const n = je(t) / 2;
  let r;
  switch (t) {
    case 1:
      r = e.subtract(n, "days");
      break;
    case 2:
      r = e.subtract(n, "hours");
      break;
    default:
      r = e.subtract(n, "weeks");
      break;
  }
  let o;
  switch (t) {
    case 1:
      o = e.add(n, "days");
      break;
    case 2:
      o = e.add(n, "hours");
      break;
    default:
      o = e.add(n, "weeks");
      break;
  }
  return {
    startDate: r,
    endDate: o
  };
}, Xs = (e, t) => {
  const n = bn(e, t);
  return {
    startDate: n.startDate.toDate(),
    endDate: n.endDate.toDate()
  };
}, kn = () => {
  var n;
  return ((((n = document.getElementById(We)) == null ? void 0 : n.clientWidth) || 0) - ve) * Fe;
}, jr = hr({
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
  date: _(),
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
_.extend(Os);
_.extend(Is);
_.extend(Hs);
_.extend(Bs);
_.extend(Vs);
const Ks = ({
  data: e,
  children: t,
  isLoading: n,
  config: r,
  defaultStartDate: o = _(),
  onRangeChange: s,
  onFilterData: i,
  onClearFilterData: l
}) => {
  const { zoom: a, maxRecordsPerPage: c = 50 } = r, [d, u] = ie(a), [h, f] = ie(_()), [x, C] = ie(!1), [P, M] = ie(je(d)), I = Ct[d] !== Ct[Ct.length - 1], Y = d !== 0, R = Ee(() => Xs(h, d), [h, d]), $ = bn(h, d).startDate, v = _($).dayOfYear(), p = Br($), y = pe(null), [H, N] = ie([{ x: 0, y: 0 }]), S = ue(
    (A, V = "auto") => {
      var F, J, Q, ee;
      const G = kn();
      switch (A) {
        case "back":
          return (F = y.current) == null ? void 0 : F.scrollTo({
            behavior: V,
            left: G / 3
          });
        case "forward":
          return (J = y.current) == null ? void 0 : J.scrollTo({
            behavior: V,
            left: G / 3
          });
        case "middle": {
          const ae = G / Fe / 4;
          return (Q = y.current) == null ? void 0 : Q.scrollTo({
            behavior: V,
            left: G / 2 - ae
          });
        }
        default:
          return (ee = y.current) == null ? void 0 : ee.scrollTo({
            behavior: V,
            left: G / 2
          });
      }
    },
    []
  ), j = (A) => {
    N(A);
  }, z = ue(
    (A) => {
      const V = Js(d);
      let G;
      switch (d) {
        case 0:
          G = V * 7;
          break;
        case 1:
          G = V;
          break;
        case 2:
          G = Math.ceil(V / It);
          break;
      }
      Be(() => {
        switch (A) {
          case "back":
            f((J) => J.subtract(G, "days"));
            break;
          case "forward":
            f((J) => J.add(G, "days"));
            break;
          case "middle":
            f(_());
            break;
        }
        s == null || s(R);
      }, 300)();
    },
    [s, R, d]
  );
  se(() => {
    y.current = document.getElementById(We), M(je(d));
  }, [d]), se(() => {
    const A = () => M(je(d));
    return window.addEventListener("resize", A), () => window.removeEventListener("resize", A);
  }, [d]), se(() => {
    s == null || s(R);
  }, [s, R]), se(() => {
    C(!1);
  }, [o]), se(() => {
    x || (S("middle"), C(!0), f(o));
  }, [o, x, S]);
  const D = () => {
    n || (f(
      (A) => d === 2 ? A.add(An, "hours") : A.add(jn, "weeks")
    ), s == null || s(R));
  }, w = ue(() => {
    n || (z("forward"), Be(() => {
      S("forward");
    }, 300)());
  }, [n, z, S]), m = () => {
    n || (f(
      (A) => d === 2 ? A.subtract(An, "hours") : A.subtract(jn, "weeks")
    ), s == null || s(R));
  }, b = ue(() => {
    !x || n || (z("back"), Be(() => {
      S("back");
    }, 300)());
  }, [x, n, z, S]), g = ue(() => {
    n || (z("middle"), Be(() => {
      S("middle", "smooth");
    }, 300)());
  }, [n, z, S]), T = () => Z(d + 1), L = () => Z(d - 1), Z = (A) => {
    Us(A) && (u(A), M(je(A)), s == null || s(R));
  }, W = () => i == null ? void 0 : i(), { Provider: U } = jr;
  return /* @__PURE__ */ k(
    U,
    {
      value: {
        data: e,
        config: r,
        handleGoNext: D,
        handleScrollNext: w,
        handleGoPrev: m,
        handleScrollPrev: b,
        handleGoToday: g,
        zoomIn: T,
        zoomOut: L,
        zoom: d,
        isNextZoom: I,
        isPrevZoom: Y,
        date: h,
        isLoading: n,
        cols: P,
        startDate: p,
        dayOfYear: v,
        handleFilterData: W,
        tilesCoords: H,
        updateTilesCoords: j,
        recordsThreshold: c,
        onClearFilterData: l
      },
      children: t
    }
  );
}, tt = () => Rt(jr), Fr = (e, t, n) => {
  e.canvas.width = t * window.devicePixelRatio, e.canvas.height = n * window.devicePixelRatio, e.canvas.style.width = t + "px", e.canvas.style.height = n + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, Qs = E.div`
  height: calc(100vh - headerHeight);
`, ei = E.div`
  position: relative;
`, ti = E.canvas``;
E.canvas``;
const Kn = E.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ $position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ $position: e }) => e === "right" ? 0 : "auto"};
`, ni = eo(function({ zoom: t, rows: n, data: r, onTileClick: o }, s) {
  const { handleScrollNext: i, handleScrollPrev: l, date: a, isLoading: c, cols: d, startDate: u } = tt(), h = pe(null), f = pe(null), x = pe(null), C = Ae(), P = ue(
    (M) => {
      const I = kn(), Y = n * he + 1;
      Fr(M, I, Y), Ss(M, t, n, d, u, C);
    },
    [d, u, n, t, C]
  );
  return se(() => {
    if (!h.current) return;
    const M = h.current.getContext("2d");
    if (!M) return;
    const I = () => P(M);
    return window.addEventListener("resize", I), () => window.removeEventListener("resize", I);
  }, [P]), se(() => {
    const M = h.current;
    if (!M) return;
    M.style.letterSpacing = "1px";
    const I = M.getContext("2d");
    I && P(I);
  }, [a, n, t, P]), se(() => {
    if (!f.current) return;
    const M = new IntersectionObserver(
      (I) => I[0].isIntersecting ? i() : null,
      { root: document.getElementById(We) }
    );
    return M.observe(f.current), () => M.disconnect();
  }, [i]), se(() => {
    if (!x.current) return;
    const M = new IntersectionObserver(
      (I) => I[0].isIntersecting ? l() : null,
      {
        root: document.getElementById(We),
        rootMargin: `0px 0px 0px -${ve}px`
      }
    );
    return M.observe(x.current), () => M.disconnect();
  }, [l]), /* @__PURE__ */ k(Qs, { id: Wr, children: /* @__PURE__ */ X(ei, { ref: s, children: [
    /* @__PURE__ */ k(Kn, { $position: "left", ref: x }),
    /* @__PURE__ */ k(ar, { isLoading: c, $position: "left" }),
    /* @__PURE__ */ k(ti, { ref: h }),
    /* @__PURE__ */ k(n1, { data: r, zoom: t, onTileClick: o }),
    /* @__PURE__ */ k(Kn, { ref: f, $position: "right" }),
    /* @__PURE__ */ k(ar, { isLoading: c, $position: "right" })
  ] }) });
}), zr = (e) => {
  const t = _.duration(e, "seconds"), n = t.hours(), r = t.minutes();
  return { hours: n, minutes: r };
}, Vr = (e) => {
  let t = 0, n = 0, r = 0;
  return e.forEach((o) => {
    t += o.minutes;
    const s = Math.floor(t / re);
    n += o.hours + s, r += t % re, r >= re && (n++, r -= re);
  }), { hours: n, minutes: r };
}, Gr = (e, t) => {
  let n = Bn;
  switch (t) {
    case 0:
      n = ws;
      break;
    case 1:
      n = Bn;
      break;
    case 2:
      n = 1;
      break;
  }
  const r = () => {
    let s = n - e.hours - 1, i = re - e.minutes;
    return i === re && (s++, i = 0), { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  }, o = () => {
    const s = e.hours - n, i = e.minutes;
    return { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  };
  return {
    free: r(),
    overtime: o()
  };
}, ri = (e, t, n) => {
  const r = t.isoWeek(), o = e.map((c) => {
    const d = _(c.startDate).isoWeek(), u = _(c.startDate).isoWeekday(), h = _(c.endDate).isoWeek(), f = _(c.endDate).isoWeekday(), { hours: x, minutes: C } = zr(c.occupancy);
    if (r === d) {
      const P = (_e + 1 - u) * x, M = (_e + 1 - u) * C;
      return { hours: Math.max(0, P), minutes: M };
    } else if (r === h) {
      const P = f > _e ? _e * x : f * x, M = f > _e ? _e * C : f * C;
      return { hours: P, minutes: M };
    } else if (_(t).isBetween(c.startDate, c.endDate))
      return { hours: _e * x, minutes: _e * C };
    return { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = Vr(o), { free: l, overtime: a } = Gr({ hours: s, minutes: i }, n);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: l,
    overtime: a
  };
}, oi = (e, t, n, r) => {
  const o = t.isoWeekday(), s = e.map((d) => {
    const { hours: u, minutes: h } = zr(d.occupancy);
    return o <= (r ? 7 : 5) ? { hours: u, minutes: h } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: l } = Vr(s), { free: a, overtime: c } = Gr({ hours: i, minutes: l }, n);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, l) },
    free: a,
    overtime: c
  };
}, si = (e, t) => {
  let n = 0;
  e.forEach((l) => {
    const a = _(l.startDate).hour(), c = _(l.endDate).hour(), d = t.hour(), u = _(l.endDate).minute(), h = _(l.startDate).minute();
    a < d && c > d ? n += re : a === d && c === d && h && u ? n += u ? u - h : re - h : a === d && c >= d ? n += h ? re - h : re : c === d && u && (n += u);
  });
  const r = Math.floor(n / re), o = n % re, s = r || o ? 0 : 1, i = r ? 0 : o ? re - o : 0;
  return {
    taken: { hours: r, minutes: o },
    free: { hours: s, minutes: i },
    overtime: { hours: 0, minutes: 0 }
  };
}, ii = (e, t, n, r, o = !1) => {
  if (t < 0)
    return {
      taken: { hours: 0, minutes: 0 },
      free: { hours: 0, minutes: 0 },
      overtime: { hours: 0, minutes: 0 }
    };
  const s = e.flat(2).filter((i) => r === 1 ? _(n).isBetween(i.startDate, i.endDate, "day", "[]") : r === 2 ? _(n).isBetween(i.startDate, i.endDate, "hour", "[]") : _(i.startDate).isBetween(
    _(n),
    _(n).add(6, "days"),
    "day",
    "[]"
  ) || _(n).isBetween(_(i.startDate), _(i.endDate), "day", "[]"));
  switch (r) {
    case 1:
      return oi(s, n, r, o);
    case 2:
      return si(s, n);
    default:
      return ri(s, n, r);
  }
}, ai = (e, t, n, r, o, s = !1) => {
  let i = "weeks", l;
  switch (o) {
    case 0:
      i = "weeks", l = Pe;
      break;
    case 1:
      i = "days", l = de;
      break;
    case 2:
      i = "hours", l = ce;
      break;
  }
  const a = Math.ceil(o === 2 ? (t.x - 0.5 * l) / l : t.x / l), c = _(
    `${e.year}-${e.month + 1}-${e.dayOfMonth}T${e.hour}:00:00`
  ).add(a - 1, i), d = Math.ceil(t.y / he), u = n.findIndex((C, P, M) => M.slice(0, P + 1).reduce((Y, R) => Y + R, 0) >= d), h = o === 2 ? (a + 1) * l : a * l, f = (d - 1) * he + he, x = ii(
    r[u],
    u,
    c,
    o,
    s
  );
  return { coords: { x: h, y: f }, resourceIndex: u, disposition: x };
}, ci = (e, t, n, r) => {
  const o = [];
  let s = 0, i = [], l = 0;
  return t.length > r ? (t.forEach((a, c) => {
    const d = { id: e[c].id, label: e[c].label, data: a };
    l >= r && (o.push(i), s += i.length, i = [], l = 0), l++, i.push(d);
  }), n.slice(s).length <= r && (i = [], t.slice(s).forEach((a, c) => {
    const d = {
      id: e[c + s].id,
      label: e[c + s].label,
      data: a
    };
    i.push(d), c === t.length - s - 1 && o.push(i);
  })), o) : (t.forEach((a, c) => {
    const d = { id: e[c].id, label: e[c].label, data: a };
    i.push(d);
  }), o.push(i), o);
}, li = (e) => {
  const t = [];
  for (const n of e) {
    let r = !1;
    if (t.length)
      for (const o of t) {
        let s = !1;
        for (let i = 0; i < o.length; i++) {
          if (_(n.startDate).isBetween(o[i].startDate, o[i].endDate, null, "[]") || _(n.endDate).isBetween(o[i].startDate, o[i].endDate, null, "[]")) {
            s = !0;
            break;
          }
          if (_(n.startDate).isBefore(o[i].startDate, "day") && _(n.endDate).isAfter(o[i].endDate, "day")) {
            s = !0;
            break;
          }
        }
        if (!s) {
          o.push(n), r = !0;
          break;
        }
      }
    r || t.push([n]);
  }
  return t;
}, di = (e) => {
  const t = [[], []], [n, r] = e.reduce((o, s) => {
    const i = li(s.data);
    return o[0].push(i), o[1].push(Math.max(i.length, 1)), o;
  }, t);
  return { projectsPerPerson: n, rowsPerPerson: r };
}, ui = (e) => e ? e.map((t) => t.data.length).reduce((t, n) => t + Math.max(n, 1), 0) : 0, hi = (e) => {
  const { recordsThreshold: t } = tt(), [n, r] = ie(0), [o, s] = ie(0), i = pe(null);
  se(() => {
    i.current = document.getElementById(We);
  }, []);
  const { projectsPerPerson: l, rowsPerPerson: a } = Ee(() => di(e), [e]), c = Ee(
    () => ci(e, l, a, t),
    [e, l, t, a]
  ), d = ue(() => {
    c[o].length && i.current && (i.current.scroll({ top: 0 }), r((P) => P + c[Math.max(o, 0)].length), s((P) => Math.min(P + 1, c.length - 1)), window.scroll({ top: 0 }));
  }, [o, c]), u = ue(() => {
    c[o].length && (r((P) => Math.max(P - c[o - 1].length, 0)), s((P) => Math.max(P - 1, 0)));
  }, [o, c]), h = ue(() => {
    r(0), s(0);
  }, []), f = n + c[o].length, x = Ee(
    () => a.slice(n, f),
    [f, a, n]
  ), C = Ee(
    () => l.slice(n, f),
    [f, l, n]
  );
  return {
    page: c[o],
    currentPageNum: o,
    pagesAmount: c.length,
    projectsPerPerson: C,
    rowsPerItem: x,
    totalRowsPerPage: ui(c[o]),
    next: d,
    previous: u,
    reset: h
  };
};
var Mt = { exports: {} }, fi = Mt.exports, Qn;
function pi() {
  return Qn || (Qn = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(fi, function() {
      return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(n) {
        var r = ["th", "st", "nd", "rd"], o = n % 100;
        return "[" + n + (r[(o - 20) % 10] || r[o] || r[0]) + "]";
      } };
    });
  }(Mt)), Mt.exports;
}
var mi = pi();
const yi = /* @__PURE__ */ xe(mi);
var St = { exports: {} }, vi = St.exports, er;
function gi() {
  return er || (er = 1, function(e, t) {
    (function(n, r) {
      e.exports = r(jt());
    })(vi, function(n) {
      function r(h) {
        return h && typeof h == "object" && "default" in h ? h : { default: h };
      }
      var o = r(n);
      function s(h) {
        return h % 10 < 5 && h % 10 > 1 && ~~(h / 10) % 10 != 1;
      }
      function i(h, f, x) {
        var C = h + " ";
        switch (x) {
          case "m":
            return f ? "minuta" : "minutę";
          case "mm":
            return C + (s(h) ? "minuty" : "minut");
          case "h":
            return f ? "godzina" : "godzinę";
          case "hh":
            return C + (s(h) ? "godziny" : "godzin");
          case "MM":
            return C + (s(h) ? "miesiące" : "miesięcy");
          case "yy":
            return C + (s(h) ? "lata" : "lat");
        }
      }
      var l = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), a = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), c = /D MMMM/, d = function(h, f) {
        return c.test(f) ? l[h.month()] : a[h.month()];
      };
      d.s = a, d.f = l;
      var u = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: d, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(h) {
        return h + ".";
      }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: i, mm: i, h: i, hh: i, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: i, y: "rok", yy: i }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
      return o.default.locale(u, null, !0), u;
    });
  }(St)), St.exports;
}
var wi = gi();
const xi = /* @__PURE__ */ xe(wi);
var _t = { exports: {} }, bi = _t.exports, tr;
function ki() {
  return tr || (tr = 1, function(e, t) {
    (function(n, r) {
      e.exports = r(jt());
    })(bi, function(n) {
      function r(a) {
        return a && typeof a == "object" && "default" in a ? a : { default: a };
      }
      var o = r(n), s = { s: "ein paar Sekunden", m: ["eine Minute", "einer Minute"], mm: "%d Minuten", h: ["eine Stunde", "einer Stunde"], hh: "%d Stunden", d: ["ein Tag", "einem Tag"], dd: ["%d Tage", "%d Tagen"], M: ["ein Monat", "einem Monat"], MM: ["%d Monate", "%d Monaten"], y: ["ein Jahr", "einem Jahr"], yy: ["%d Jahre", "%d Jahren"] };
      function i(a, c, d) {
        var u = s[d];
        return Array.isArray(u) && (u = u[c ? 0 : 1]), u.replace("%d", a);
      }
      var l = { name: "de", weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"), ordinal: function(a) {
        return a + ".";
      }, weekStart: 1, yearStart: 4, formats: { LTS: "HH:mm:ss", LT: "HH:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "vor %s", s: i, m: i, mm: i, h: i, hh: i, d: i, dd: i, M: i, MM: i, y: i, yy: i } };
      return o.default.locale(l, null, !0), l;
    });
  }(_t)), _t.exports;
}
var $i = ki();
const Ci = /* @__PURE__ */ xe($i);
var Dt = { exports: {} }, Mi = Dt.exports, nr;
function Si() {
  return nr || (nr = 1, function(e, t) {
    (function(n, r) {
      e.exports = r(jt());
    })(Mi, function(n) {
      function r(d) {
        return d && typeof d == "object" && "default" in d ? d : { default: d };
      }
      var o = r(n), s = "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), i = "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"), l = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/, a = function(d, u) {
        return l.test(u) ? s[d.month()] : i[d.month()];
      };
      a.s = i, a.f = s;
      var c = { name: "lt", weekdays: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"), weekdaysShort: "sek_pir_ant_tre_ket_pen_šeš".split("_"), weekdaysMin: "s_p_a_t_k_pn_š".split("_"), months: a, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), ordinal: function(d) {
        return d + ".";
      }, weekStart: 1, relativeTime: { future: "už %s", past: "prieš %s", s: "kelias sekundes", m: "minutę", mm: "%d minutes", h: "valandą", hh: "%d valandas", d: "dieną", dd: "%d dienas", M: "mėnesį", MM: "%d mėnesius", y: "metus", yy: "%d metus" }, format: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" } };
      return o.default.locale(c, null, !0), c;
    });
  }(Dt)), Dt.exports;
}
var _i = Si();
const Di = /* @__PURE__ */ xe(_i), Ei = {
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
}, Oi = {
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
}, Ti = {
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
}, Pi = {
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
}, Li = [
  {
    id: "en",
    lang: Oi,
    translateCode: "en-GB",
    dayjsTranslations: yi
  },
  {
    id: "pl",
    lang: Ei,
    translateCode: "pl-PL",
    dayjsTranslations: xi
  },
  {
    id: "lt",
    lang: Pi,
    translateCode: "lt-LT",
    dayjsTranslations: Di
  },
  {
    id: "de",
    lang: Ti,
    translateCode: "de-DE",
    dayjsTranslations: Ci
  }
];
class Ii {
  constructor() {
    $n(this, "locales", Li);
  }
  getLocales() {
    return this.locales;
  }
  addLocales(t) {
    this.locales.push(t);
  }
}
const Yt = new Ii(), qr = hr({
  localesData: Yt.getLocales(),
  currentLocale: Yt.getLocales()[0],
  setCurrentLocale: () => {
  }
}), Yi = ({ children: e, lang: t, translations: n }) => {
  const [r, o] = ie("en"), s = Yt.getLocales(), i = ue(() => {
    const u = s.find((h) => h.id === r);
    return typeof (u == null ? void 0 : u.dayjsTranslations) == "object" && _.locale(u.dayjsTranslations), u || s[0];
  }, [r, s]), [l, a] = ie(i()), c = (u) => {
    localStorage.setItem("locale", u.translateCode), a(u);
  };
  se(() => {
    n == null || n.forEach((u) => {
      s.find((f) => f.id === u.id) || Yt.addLocales(u);
    });
  }, [s, n]), se(() => {
    const u = localStorage.getItem("locale"), h = t ?? u ?? "en";
    localStorage.setItem("locale", h), o(h), a(i());
  }, [i, t]);
  const { Provider: d } = qr;
  return /* @__PURE__ */ k(d, { value: { currentLocale: l, localesData: s, setCurrentLocale: c }, children: e });
}, nt = () => Rt(qr).currentLocale.lang, Ri = (e) => /* @__PURE__ */ O.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ O.createElement("defs", null, /* @__PURE__ */ O.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ O.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ O.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ O.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ O.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ O.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ O.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ O.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ O.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ O.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ O.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ O.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ O.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ O.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), Ni = E.div`
  height: 440px;
  width: 514px;
  position: relative;
`, Hi = E.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Wi = () => {
  const { feelingEmpty: e } = nt();
  return /* @__PURE__ */ X(Ni, { children: [
    /* @__PURE__ */ k(Ri, {}),
    /* @__PURE__ */ k(Hi, { children: e })
  ] });
}, Ai = E.div`
  position: relative;
  display: flex;
`, Zi = E.div`
  position: relative;
  margin-left: ${ve};
  display: flex;
  flex-direction: column;
  contain: paint;
`, Bi = E.div`
  width: calc(${({ width: e }) => e}px - ${ve}px);
  position: sticky;
  top: 0;
  height: 100%;
  left: ${ve}px;
  display: flex;
  justify-content: center;
  align-items: center;
`, rr = {
  coords: { x: 0, y: 0 },
  resourceIndex: 0,
  disposition: {
    taken: { hours: 0, minutes: 0 },
    free: { hours: 0, minutes: 0 },
    overtime: { hours: 0, minutes: 0 }
  }
}, ji = ({
  data: e,
  onTileClick: t,
  onItemClick: n,
  toggleTheme: r,
  topBarWidth: o
}) => {
  const [s, i] = ie(rr), [l, a] = ie(e), [c, d] = ie(!1), [u, h] = ie(""), {
    zoom: f,
    startDate: x,
    config: { includeTakenHoursOnWeekendsInDayView: C, showTooltip: P, showThemeToggle: M }
  } = tt(), I = pe(null), {
    page: Y,
    projectsPerPerson: R,
    totalRowsPerPage: $,
    rowsPerItem: v,
    currentPageNum: p,
    pagesAmount: y,
    next: H,
    previous: N,
    reset: S
  } = hi(l), j = pe(
    Be(
      (m, b, g, T, L) => {
        if (!I.current) return;
        const { left: Z, top: W } = I.current.getBoundingClientRect(), U = { x: m.clientX - Z, y: m.clientY - W }, {
          coords: { x: A, y: V },
          resourceIndex: G,
          disposition: F
        } = ai(
          b,
          U,
          g,
          T,
          L,
          C
        );
        i({ coords: { x: A, y: V }, resourceIndex: G, disposition: F }), d(!0);
      },
      300
    )
  ), z = pe(
    Be((m, b) => {
      S(), a(
        m.filter(
          (g) => g.label.title.toLowerCase().includes(b.toLowerCase())
        )
      );
    }, 500)
  ), D = (m) => {
    const b = m.target.value;
    h(b), z.current.cancel(), z.current(e, b);
  }, w = ue(() => {
    j.current.cancel(), d(!1), i(rr);
  }, []);
  return se(() => {
    const m = (g) => j.current(g, x, v, R, f), b = I.current;
    if (b)
      return b.addEventListener("mousemove", m), b.addEventListener("mouseleave", w), () => {
        b.removeEventListener("mousemove", m), b.removeEventListener("mouseleave", w);
      };
  }, [j, w, R, v, x, f]), se(() => {
    u || a(e);
  }, [e, u]), /* @__PURE__ */ X(Ai, { children: [
    /* @__PURE__ */ k(
      Oa,
      {
        data: Y,
        pageNum: p,
        pagesAmount: y,
        rows: v,
        onLoadNext: H,
        onLoadPrevious: N,
        searchInputValue: u,
        onSearchInputChange: D,
        onItemClick: n
      }
    ),
    /* @__PURE__ */ X(Zi, { children: [
      /* @__PURE__ */ k(
        Ga,
        {
          zoom: f,
          topBarWidth: o,
          showThemeToggle: M,
          toggleTheme: r
        }
      ),
      e.length ? /* @__PURE__ */ k(
        ni,
        {
          data: Y,
          zoom: f,
          rows: $,
          ref: I,
          onTileClick: t
        }
      ) : /* @__PURE__ */ k(Bi, { width: o, children: /* @__PURE__ */ k(Wi, {}) }),
      P && c && (s == null ? void 0 : s.resourceIndex) > -1 && /* @__PURE__ */ k(c1, { tooltipData: s, zoom: f })
    ] })
  ] });
}, Ur = `
  background: none;
  outline: none;
  border: none;
  font-size: 100%;
  line-height: 1.15
  margin: 0
`, Fi = E.div`
  width: calc(${({ width: e }) => e}px - ${ve}px);
  position: sticky;
  top: 0;
  left: ${ve}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme: e }) => e.navHeight};
  padding: 0.625rem 1rem;
  background-color: ${({ theme: e }) => e.colors.background};
  z-index: 3;
`, zi = E.div`
  display: flex;
  gap: 1.875rem;
`, or = E.button`
  ${Ur};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme: e }) => e.colors.textPrimary};
  :not(:disabled) {
    cursor: pointer;
  }
`, Vi = E.button`
  ${Ur};
  position: relative;
  font-weight: 600;
  cursor: pointer;
  line-height: 1.5rem;
  color: ${({ theme: e }) => e.colors.textPrimary};

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 1.5rem;
    background-color: ${({ theme: e }) => e.colors.textPrimary};
  }
  &::before {
    left: -1.125rem;
  }
  &::after {
    right: -1.125rem;
  }
`, Gi = E.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, qi = E.div`
  display: flex;
`, Ui = E.div`
  display: flex;
  align-items: "center";
  gap: 1.25rem;
`, Ji = ({ width: e, showThemeToggle: t, toggleTheme: n }) => {
  const { topbar: r } = nt(), {
    data: o,
    config: s,
    handleGoNext: i,
    handleGoPrev: l,
    handleGoToday: a,
    zoomIn: c,
    zoomOut: d,
    isNextZoom: u,
    isPrevZoom: h,
    handleFilterData: f,
    onClearFilterData: x
  } = tt(), { colors: C } = Ae(), { filterButtonState: P = -1 } = s, M = (I) => {
    I.stopPropagation(), x == null || x();
  };
  return /* @__PURE__ */ X(Fi, { width: e, children: [
    /* @__PURE__ */ k(qi, { children: P >= 0 && /* @__PURE__ */ X(
      Ut,
      {
        $variant: P ? "filled" : "outlined",
        iconName: "filter",
        width: "16",
        height: "16",
        onClick: f,
        children: [
          r.filters,
          !!P && /* @__PURE__ */ k("span", { onClick: M, children: /* @__PURE__ */ k(me, { iconName: "close", height: "16", width: "16", fill: C.textSecondary }) })
        ]
      }
    ) }),
    /* @__PURE__ */ X(zi, { children: [
      /* @__PURE__ */ X(or, { disabled: !(o != null && o.length), onClick: l, children: [
        /* @__PURE__ */ k(me, { iconName: "arrowLeft", height: "15", fill: C.textPrimary }),
        r.prev
      ] }),
      /* @__PURE__ */ k(Vi, { onClick: a, children: r.today }),
      /* @__PURE__ */ X(or, { disabled: !(o != null && o.length), onClick: i, children: [
        r.next,
        /* @__PURE__ */ k(me, { iconName: "arrowRight", height: "15", fill: C.textPrimary })
      ] })
    ] }),
    /* @__PURE__ */ X(Ui, { children: [
      t && /* @__PURE__ */ k(h1, { toggleTheme: n }),
      /* @__PURE__ */ X(Gi, { children: [
        r.view,
        /* @__PURE__ */ k(
          Ut,
          {
            isDisabled: !h,
            onClick: d,
            $isFullRounded: !0,
            iconName: "subtract",
            width: "14"
          }
        ),
        /* @__PURE__ */ k(
          Ut,
          {
            isDisabled: !u,
            onClick: c,
            $isFullRounded: !0,
            iconName: "add",
            width: "14"
          }
        )
      ] })
    ] })
  ] });
}, Xi = (e) => /* @__PURE__ */ O.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ O.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), Ki = (e) => /* @__PURE__ */ O.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ O.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), Qi = (e) => /* @__PURE__ */ O.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ O.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ O.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ O.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), ea = (e) => /* @__PURE__ */ O.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ O.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), ta = (e) => /* @__PURE__ */ O.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ O.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), na = (e) => /* @__PURE__ */ O.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ O.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), ra = (e) => /* @__PURE__ */ O.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ O.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ O.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ O.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ O.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ O.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ O.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), oa = (e) => /* @__PURE__ */ O.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ O.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ O.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ O.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ O.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), sa = (e) => /* @__PURE__ */ O.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ O.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), ia = (e) => /* @__PURE__ */ O.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ O.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), aa = (e) => /* @__PURE__ */ O.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ O.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), ca = (e) => /* @__PURE__ */ O.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ O.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), la = (e) => /* @__PURE__ */ O.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ O.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), da = (e) => /* @__PURE__ */ O.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ O.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ O.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ O.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ O.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ O.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ O.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ O.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ O.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ O.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), ua = {
  add: Xi,
  subtract: Ki,
  filter: Qi,
  arrowLeft: ea,
  arrowRight: ta,
  defaultAvatar: na,
  calendarWarning: ra,
  calendarFree: oa,
  arrowDown: ia,
  arrowUp: sa,
  search: aa,
  close: ca,
  moon: la,
  sun: da
}, me = ({ iconName: e, width: t, height: n, fill: r, className: o }) => {
  const { colors: s } = Ae(), i = ua[e];
  return i ? /* @__PURE__ */ k(
    i,
    {
      style: { transition: ".5s ease" },
      fill: r ?? s.accent,
      width: t,
      height: n,
      className: o
    }
  ) : null;
}, ha = (e, t, n) => ({
  outlined: {
    color: n ? e.colors.disabled : e.colors.accent,
    border: `1px solid ${n ? e.colors.disabled : e.colors.accent}`,
    background: "transparent"
  },
  filled: {
    color: n ? e.colors.primary : e.colors.textSecondary,
    background: n ? e.colors.disabled : e.colors.accent,
    border: "1px solid transparent"
  }
})[t], fa = E.button`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  min-height: 24px;
  border-radius: ${({ $isFullRounded: e }) => e ? "50%" : "4px"};
  cursor: ${({ disabled: e }) => e ? "auto" : "pointer"};
  font-size: 14px;
  gap: 4px;
  padding: ${({ $hasChildren: e }) => e ? "0 10px" : "0"};
  transition: 0.5s ease;
  ${({ theme: e, $variant: t, disabled: n }) => ha(e, t, n)}
`, Ut = ({
  iconName: e,
  width: t,
  height: n,
  fill: r,
  className: o,
  onClick: s,
  children: i,
  $isFullRounded: l,
  isDisabled: a,
  $variant: c = "outlined"
}) => {
  const { colors: d } = Ae();
  return /* @__PURE__ */ X(
    fa,
    {
      onClick: s,
      $isFullRounded: l,
      $hasChildren: !!i,
      disabled: a,
      $variant: c,
      children: [
        /* @__PURE__ */ k(
          me,
          {
            iconName: e,
            width: t,
            height: n,
            fill: a ? d.disabled : r,
            className: o
          }
        ),
        i
      ]
    }
  );
}, pa = E.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ $showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, ma = E.div`
  position: relative;
`, y1 = ({
  data: e,
  config: t,
  startDate: n,
  onRangeChange: r,
  onTileClick: o,
  onFilterData: s,
  onClearFilterData: i,
  onItemClick: l,
  isLoading: a
}) => {
  var R;
  const c = Ee(
    () => ({
      zoom: 0,
      filterButtonState: 1,
      includeTakenHoursOnWeekendsInDayView: !1,
      showTooltip: !0,
      translations: void 0,
      ...t
    }),
    [t]
  ), d = pe(null), [u, h] = ie((R = d.current) == null ? void 0 : R.clientWidth), f = Ee(() => _(n), [n]), [x, C] = ie(c.defaultTheme ?? "light"), P = () => {
    C(x === "light" ? "dark" : "light");
  }, M = x === "light" ? us : hs, I = c.theme ? c.theme[M.mode] : {}, Y = {
    ...M,
    colors: {
      ...M.colors,
      ...I
    }
  };
  return se(() => {
    const $ = () => {
      d.current && h(d.current.clientWidth);
    };
    return $(), window.addEventListener("resize", $), () => window.removeEventListener("resize", $);
  }, []), d.current, /* @__PURE__ */ X(dn, { children: [
    /* @__PURE__ */ k(ds, {}),
    /* @__PURE__ */ k(ss, { theme: Y, children: /* @__PURE__ */ k(Yi, { lang: c.lang, translations: c.translations, children: /* @__PURE__ */ k(
      Ks,
      {
        data: e,
        isLoading: !!a,
        config: c,
        onRangeChange: r,
        defaultStartDate: f,
        onFilterData: s,
        onClearFilterData: i,
        children: /* @__PURE__ */ k(
          pa,
          {
            $showScroll: !!e.length,
            id: We,
            ref: d,
            children: /* @__PURE__ */ k(ma, { children: /* @__PURE__ */ k(
              ji,
              {
                data: e,
                onTileClick: o,
                topBarWidth: u ?? 0,
                onItemClick: l,
                toggleTheme: P
              }
            ) })
          }
        )
      }
    ) }) })
  ] });
}, ya = E.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ $intent: e, theme: t }) => e === "next" ? `1px solid ${t.colors.border}` : "none"};
`, va = E.button`
  margin-top: 0px;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid ${({ theme: e }) => e.colors.accent};
  border-radius: 4px;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.accent};
  line-height: 150%;
  letter-spacing: 1px;
  cursor: pointer;
  opacity: ${({ $isVisible: e }) => e ? "1" : "0"};
  pointer-events: ${({ $isVisible: e }) => e ? "auto" : "none"};
  &:hover {
    transition: 0.5s ease;
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, ga = E.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, wa = E.p`
  ${Qe}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`, sr = ({
  $intent: e,
  onClick: t,
  icon: n,
  $isVisible: r,
  pageNum: o,
  pagesAmount: s
}) => {
  const { loadNext: i, loadPrevious: l } = nt(), a = e === "next" ? `${i} ${o + 2}/${s}` : `${l} ${o}/${s}`;
  return /* @__PURE__ */ k(ya, { $intent: e, children: /* @__PURE__ */ X(va, { onClick: t, $isVisible: r, children: [
    n && /* @__PURE__ */ k(ga, { children: n }),
    /* @__PURE__ */ k(wa, { children: a })
  ] }) });
}, xa = E.div`
  min-width: ${ve + "px"};
  max-width: ${ve + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, ba = E.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: 124px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${ve}px;
  background-color: ${({ theme: e }) => e.colors.background};
  z-index: 3;
`, ka = E.input`
  height: 100%;
  width: calc(100% - 44px);
  background-color: transparent;
  color: ${({ theme: e }) => e.colors.textPrimary};
  padding: 7px 0 7px 12px;
  border: 0;
  outline: none;
  &::placeholder {
    color: ${({ theme: e }) => e.colors.placeholder};
  }
`, $a = E.div`
  margin-left: 10px;
  height: 36px;
  width: calc(100% - 20px); //20px = 10px margin each side
  background-color: ${({ theme: e }) => e.colors.primary};
  border: 1px solid
    ${({ theme: e, $isFocused: t }) => t ? e.colors.accent : e.colors.border};
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
`, Ca = E.div`
  display: flex;
  align-items: ${({ rows: e }) => e > 1 ? "start" : "center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${he}px;
  height: calc(${he}px * ${({ rows: e }) => e});
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
  transition: 0.5s ease;
  cursor: ${({ $clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, Ma = E.div`
  display: flex;
  align-items: center;
`, Sa = E.div`
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`, _a = E.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, Da = E.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, ir = E.p`
  margin: 0;
  padding: 0;
  font-size: ${({ $isMain: e }) => e ? 0.75 + "rem" : 0.625 + "rem"};
  letter-spacing: ${({ $isMain: e }) => e ? "1px" : 0.5 + "px"};
  line-height: ${({ $isMain: e }) => e ? 1.125 + "rem" : 0.75 + "rem"};
  color: ${({ $isMain: e, theme: t }) => e ? t.colors.textPrimary : t.colors.placeholder};
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 144px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
`, Ea = ({ id: e, item: t, rows: n, onItemClick: r }) => /* @__PURE__ */ k(
  Ca,
  {
    title: t.title + " | " + t.subtitle,
    $clickable: typeof r == "function" ? "true" : "false",
    rows: n,
    onClick: () => r == null ? void 0 : r({ id: e, label: t }),
    children: /* @__PURE__ */ X(Ma, { children: [
      /* @__PURE__ */ k(Sa, { children: t.icon ? /* @__PURE__ */ k(_a, { src: t.icon, alt: "Icon" }) : /* @__PURE__ */ k(me, { iconName: "defaultAvatar" }) }),
      /* @__PURE__ */ X(Da, { children: [
        /* @__PURE__ */ k(ir, { $isMain: !0, children: t.title }),
        /* @__PURE__ */ k(ir, { children: t.subtitle })
      ] })
    ] })
  }
), Oa = ({
  data: e,
  rows: t,
  onLoadNext: n,
  onLoadPrevious: r,
  pageNum: o,
  pagesAmount: s,
  searchInputValue: i,
  onSearchInputChange: l,
  onItemClick: a
}) => {
  const [c, d] = ie(!1), { search: u } = nt(), h = () => d((f) => !f);
  return /* @__PURE__ */ X(xa, { children: [
    /* @__PURE__ */ X(ba, { children: [
      /* @__PURE__ */ X($a, { $isFocused: c, children: [
        /* @__PURE__ */ k(
          ka,
          {
            placeholder: u,
            value: i,
            onChange: l,
            onFocus: h,
            onBlur: h
          }
        ),
        /* @__PURE__ */ k(me, { iconName: "search" })
      ] }),
      /* @__PURE__ */ k(
        sr,
        {
          $intent: "previous",
          $isVisible: o !== 0,
          onClick: r,
          icon: /* @__PURE__ */ k(me, { iconName: "arrowUp", width: "16", height: "16" }),
          pageNum: o,
          pagesAmount: s
        }
      )
    ] }),
    e.map((f, x) => /* @__PURE__ */ k(
      Ea,
      {
        id: f.id,
        item: f.label,
        rows: t[x],
        onItemClick: a
      },
      f.id
    )),
    /* @__PURE__ */ k(
      sr,
      {
        $intent: "next",
        $isVisible: o !== s - 1,
        onClick: n,
        icon: /* @__PURE__ */ k(me, { iconName: "arrowDown", width: "16", height: "16" }),
        pageNum: o,
        pagesAmount: s
      }
    )
  ] });
}, Ta = E.div`
  width: 388px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ $position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ $position: e }) => e === "right" ? 0 : "auto"};
  background-color: ${({ theme: e }) => e.colors.secondary};
  opacity: 0.7;
  overflow: hidden;
  z-index: 1;
`, Pa = ls`
from{
    left: -100%;
}
to{
    left: 100%;
}`, La = E.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Pa} 1s infinite;
`, ar = ({ isLoading: e, $position: t }) => e ? /* @__PURE__ */ k(Ta, { $position: t, children: /* @__PURE__ */ k(La, {}) }) : null, Se = (e, t) => {
  const {
    ctx: n,
    x: r,
    y: o,
    width: s,
    height: i,
    textYPos: l,
    label: a,
    font: c,
    isBottomRow: d,
    fillStyle: u,
    topText: h,
    bottomText: f,
    labelBetweenCells: x
  } = e;
  if (n.beginPath(), n.strokeStyle = t.colors.border, n.setLineDash([]), a && c && l) {
    n.fillStyle = t.colors.gridBackground, n.fillRect(r, o, s, i), x ? (n.moveTo(r, o), n.lineTo(r + s, o), n.stroke(), n.moveTo(r, o + i), n.lineTo(r + s, o + i), n.stroke(), n.moveTo(r + s / 2, o + i), n.lineTo(r + s / 2, o + i - 5), n.stroke()) : n.strokeRect(r + 0.5, o + 0.5, s, i), n.font = c;
    const C = r + s / 2 - n.measureText(a).width / 2;
    n.textBaseline = "middle", n.fillStyle = t.colors.placeholder, n.fillText(a, C, l);
  }
  if (d && u && h && f) {
    n.fillStyle = u, n.fillRect(r, o, s, i), n.strokeRect(r + 0.5, o + 0.5, s, i), n.font = h.font;
    const C = r + s / 2 - n.measureText(h.label).width / 2;
    n.fillStyle = h.color, n.fillText(h.label, C, h.y), n.font = f.font;
    const P = r + s / 2 - n.measureText(f.label).width / 2;
    n.fillStyle = f.color, n.fillText(f.label, P, f.y);
  }
}, Jr = (e, t) => {
  const { isCurrent: n, isBusinessDay: r, $variant: o } = e;
  return o === "yearView" ? n ? t.colors.tertiary : t.colors.gridBackground : n || !r ? t.colors.secondary : t.colors.primary;
}, ln = (e, t) => {
  const { isCurrent: n, isBusinessDay: r, $variant: o } = e;
  return n ? o === "bottomRow" ? t.colors.placeholder : t.colors.accent : r ? o === "bottomRow" ? t.colors.placeholder : t.colors.textPrimary : t.colors.placeholder;
}, Ia = (e, t, n, r) => {
  const o = Je - Re / ps, s = Je - Re / ms, i = Me + et;
  let l = 0;
  for (let a = 0; a < t; a++) {
    const c = Br(
      _(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(a, "days")
    );
    Se(
      {
        ctx: e,
        x: l,
        y: i,
        width: de,
        height: Re,
        isBottomRow: !0,
        fillStyle: Jr(
          {
            isCurrent: c.isCurrentDay,
            isBusinessDay: c.isBusinessDay
          },
          r
        ),
        topText: {
          y: o,
          label: c.dayName.toUpperCase(),
          font: we.bottomRow.name,
          color: ln(
            { isCurrent: c.isCurrentDay, isBusinessDay: c.isBusinessDay },
            r
          )
        },
        bottomText: {
          y: s,
          label: `${c.dayOfMonth}`,
          font: we.bottomRow.number,
          color: ln(
            {
              isCurrent: c.isCurrentDay,
              isBusinessDay: c.isBusinessDay,
              $variant: "bottomRow"
            },
            r
          )
        }
      },
      r
    ), l += de;
  }
}, Ya = (e, t, n, r) => {
  let o = -(n.dayOfMonth - 1) * Ce;
  const s = Me;
  let l = n.month;
  for (let a = 0; a < t; a++) {
    l >= cn && (l = 0);
    const c = Zr(n, a) * Ce;
    Se(
      {
        ctx: e,
        x: o,
        y: s,
        width: c,
        height: et,
        textYPos: Ar,
        label: _().month(l).format("MMMM").toUpperCase(),
        font: we.bottomRow.number
      },
      r
    ), o += c, l++;
  }
}, Ra = (e, t, n) => {
  let o = 0, s = 0, i = 0, l = _(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}`
  ).month();
  o = -t.dayOfMonth * de + de;
  for (let a = 0; a < cn; a++)
    l > cn - 1 && (l = 0, i++), s = _(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "months").daysInMonth() * de, Se(
      {
        ctx: e,
        x: o,
        y: 0,
        width: s,
        height: Me,
        textYPos: gn,
        label: _(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).month(l).format("MMMM").toUpperCase() + ` ${_(`${t.year + i}-${t.month + 1}-${t.dayOfMonth}`).month(l).format("YYYY")}`,
        font: we.topRow
      },
      n
    ), o += s, l++;
}, Na = (e, t, n, r) => {
  const o = 7 * de, s = Me, i = e.canvas.width / o + o, l = t.weekOfYear;
  let a = 0;
  for (let c = 0; c < i; c++) {
    const d = _(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).day();
    let u = (l + c) % Zn;
    u <= 0 && (u += Zn), d !== 1 && c === 0 && (a = -d * de + de), Se(
      {
        ctx: e,
        x: a,
        y: s,
        width: o,
        height: et,
        textYPos: Ar,
        label: `${n.toUpperCase()} ${u}`,
        font: we.middleRow
      },
      r
    ), a += o;
  }
}, Ha = (e, t, n, r, o) => {
  const s = Je - Re / 1.6, i = Je - Re / 4.5, l = Me + et;
  let a = 0;
  for (let c = 0; c < t; c++) {
    const d = _(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
      c,
      "weeks"
    ), u = d.isSame(_(), "week");
    Se(
      {
        ctx: e,
        x: a,
        y: l,
        width: Pe,
        height: Re,
        isBottomRow: !0,
        fillStyle: Jr({ isCurrent: u, $variant: "yearView" }, o),
        topText: {
          y: s,
          label: d.isoWeek().toString(),
          font: we.bottomRow.name,
          color: ln({ isCurrent: u }, o)
        },
        bottomText: {
          y: i,
          label: r.toUpperCase(),
          font: we.middleRow,
          color: o.colors.placeholder
        }
      },
      o
    ), a += Pe;
  }
}, Wa = (e, t, n, r) => {
  const s = t.year, i = e.canvas.width * 2;
  let l = 0, a = 0, c = (zn(s) - n + 1) * Ce, d = 0;
  for (; l + d <= i; )
    a > 0 && (c = zn(s + a) * Ce), d + c > i && a > 0 && (c = Math.ceil((i - d) / Ce) * Ce), Se(
      {
        ctx: e,
        x: l,
        y: 0,
        width: c,
        height: Me,
        textYPos: gn,
        label: (s + a).toString(),
        font: we.topRow
      },
      r
    ), l += c, d += c, a++;
}, Aa = (e, t, n, r) => {
  const o = Math.floor(t / It) + 2, s = It * ce;
  let a = -_(
    `${n.year}-${n.month + 1}-${n.dayOfMonth}T${n.hour}:00:00`
  ).hour() * ce + 0.5 * ce;
  for (let c = 0; c < o; c++) {
    const d = _(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(c, "day").format("dddd DD.MM.YYYY").toUpperCase();
    Se(
      {
        ctx: e,
        x: a,
        y: Xe,
        width: s,
        height: it,
        textYPos: Xe + it / 2 + 2,
        label: d,
        font: we.bottomRow.number
      },
      r
    ), a += s;
  }
}, Za = (e, t, n, r) => {
  const o = Math.ceil(t / It), s = _(`${n.year}-${n.month + 1}-${n.dayOfMonth}`), i = s.add(o - 1, "days"), l = s.month(), a = i.add(1, "day").month(), c = l === a ? 1 : 2;
  let d = 0.5 * ce;
  for (let u = 0; u < c; u++) {
    const h = _(
      `${n.year}-${n.month + 1}-${n.dayOfMonth}T${n.hour}:00:00`
    ), x = _(`${n.year}-${n.month + u + 1}-01T:23:59:59`).endOf("month"), C = x.format("MMMM").toUpperCase(), P = x.diff(h, "hour") + 1, M = u === 0 ? P * ce : t * ce;
    Se(
      {
        ctx: e,
        x: d,
        y: 0,
        width: M,
        height: Xe,
        textYPos: gn,
        label: C,
        font: we.topRow
      },
      r
    ), d += M;
  }
}, Ba = (e, t, n, r) => {
  let o = 0;
  const s = Xe + it, i = _(
    `${n.year}-${n.month + 1}-${n.dayOfMonth}T${n.hour}:00:00`
  ), l = ce;
  for (let a = 0; a < t; a++) {
    const c = i.add(a, "hours").format("HH:00").toUpperCase();
    Se(
      {
        ctx: e,
        x: o,
        y: s,
        width: l,
        height: an,
        label: c,
        font: we.bottomRow.number,
        textYPos: Xe + it + an / 2 + 2,
        labelBetweenCells: !0
      },
      r
    ), o += ce;
  }
}, ja = (e, t, n, r, o, s, i) => {
  switch (t) {
    case 0:
      Wa(e, r, s, i), Ya(e, n, r, i), Ha(e, n, r, o, i);
      break;
    case 1:
      Ra(e, r, i), Na(e, r, o, i), Ia(e, n, r, i);
      break;
    case 2:
      Za(e, n, r, i), Aa(e, n, r, i), Ba(e, n, r, i);
      break;
  }
}, Fa = E.div`
  position: sticky;
  top: 0;
  z-index: 1;
`, za = E.div`
  height: ${Je}px;
  display: block;
`, Va = E.canvas``, Ga = ({ zoom: e, topBarWidth: t, showThemeToggle: n, toggleTheme: r }) => {
  const { week: o } = nt(), { date: s, cols: i, dayOfYear: l, startDate: a } = tt(), c = pe(null), d = Ae(), u = ue(
    (h) => {
      const f = kn(), C = (e === 2 ? fs : Je) + 1;
      Fr(h, f, C), ja(h, e, i, a, o, l, d);
    },
    [i, l, a, o, e, d]
  );
  return se(() => {
    if (!c.current) return;
    const h = c.current.getContext("2d");
    if (!h) return;
    const f = () => u(h);
    return window.addEventListener("resize", f), () => window.removeEventListener("resize", f);
  }, [u]), se(() => {
    const h = c.current;
    if (!h) return;
    h.style.letterSpacing = "1px";
    const f = h.getContext("2d");
    f && u(f);
  }, [s, e, u]), /* @__PURE__ */ X(Fa, { children: [
    /* @__PURE__ */ k(Ji, { width: t, showThemeToggle: n, toggleTheme: r }),
    /* @__PURE__ */ k(za, { id: ys, children: /* @__PURE__ */ k(Va, { ref: c }) })
  ] });
}, qa = (e, t, n) => {
  let r;
  switch (n) {
    case 0:
      r = Ce;
      break;
    case 2:
      r = ce;
      break;
    default:
      r = de;
  }
  const o = () => {
    let s;
    switch (n) {
      case 2:
        s = (e.startDate.diff(t.startDate, "minute") / re + 1) * r - r / 2;
        break;
      default:
        s = (e.startDate.diff(t.startDate, "day") + 1) * r;
    }
    return Math.max(0, s);
  };
  if (e.startDate.isAfter(t.startDate) && e.endDate.isBefore(t.endDate)) {
    let s;
    switch (n) {
      case 2:
        s = e.endDate.diff(e.startDate, "minute") / re * r;
        break;
      default:
        s = e.endDate.diff(e.startDate, "day") * r + r;
    }
    return { x: o(), width: s };
  }
  if (e.startDate.isBefore(t.startDate) && e.endDate.isBefore(t.endDate)) {
    let s;
    switch (n) {
      case 2:
        s = e.endDate.diff(t.startDate, "minute") / re * r + 0.5 * r;
        break;
      default:
        s = e.endDate.diff(t.startDate, "day") * r + r;
    }
    return { x: o(), width: s };
  }
  if (e.startDate.isAfter(t.startDate) && e.endDate.isAfter(t.endDate)) {
    let s;
    switch (n) {
      case 2:
        s = t.endDate.diff(e.startDate, "minute") / re * r;
        break;
      default:
        s = t.endDate.diff(e.startDate, "day") * r + r;
    }
    return { x: o(), width: s };
  }
  if (e.startDate.isBefore(t.startDate) && e.endDate.isAfter(t.endDate)) {
    let s;
    switch (n) {
      case 2:
        s = t.endDate.diff(t.startDate, "minute") / re * r;
        break;
      default:
        s = t.endDate.diff(t.startDate, "day") * r + r;
    }
    return { x: o(), width: s };
  }
  return { x: o(), width: 0 };
}, Ua = (e, t, n, r, o, s) => {
  const i = e * he + vs, l = t.hour(), a = n.hour();
  let c, d, u, h;
  switch (s) {
    case 2: {
      c = _(r), d = _(o), u = _(t).hour(l).minute(0), h = _(n).hour(a).minute(0);
      break;
    }
    default: {
      c = _(r).hour(0).minute(0), d = _(o).hour(23).minute(59), u = t, h = n;
      break;
    }
  }
  return {
    ...qa(
      { startDate: c, endDate: d },
      { startDate: u, endDate: h },
      s
    ),
    y: i
  };
}, Ja = (e) => {
  if (!e) return "white";
  const t = [];
  for (let o = 1; o < 6; o += 2)
    t.push(parseInt(e.slice(o, o + 2), 16) / 255);
  const n = t.map(
    (o) => o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2] > 0.5 ? "black" : "white";
}, Xa = E.button`
  ${Qe}
  height: ${gs}px;
  position: absolute;
  outline: none;
  border: none;
  border-radius: 4px;
  text-align: left;
  color: ${({ theme: e }) => e.colors.textPrimary};
  width: 100%;
  cursor: pointer;
`, Ka = E.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, cr = E.p`
  ${Qe}
  ${Hr}
  display: inline;
  font-weight: ${({ $bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, Qa = E.p`
  ${Qe}
  ${Hr}
`, e1 = E.div`
  position: sticky;
  left: ${ve + 16}px;
  overflow: hidden;
`, t1 = ({ row: e, data: t, zoom: n, onTileClick: r }) => {
  const { date: o } = tt(), s = bn(o, n), { y: i, x: l, width: a } = Ua(
    e,
    s.startDate,
    s.endDate,
    t.startDate,
    t.endDate,
    n
  ), { colors: c } = Ae();
  return /* @__PURE__ */ k(
    Xa,
    {
      style: {
        left: `${l}px`,
        top: `${i}px`,
        backgroundColor: `${t.bgColor ?? c.defaultTile}`,
        width: `${a}px`,
        color: Ja(t.bgColor ?? "")
      },
      onClick: () => r == null ? void 0 : r(t),
      children: /* @__PURE__ */ k(Ka, { children: /* @__PURE__ */ X(e1, { children: [
        /* @__PURE__ */ k(cr, { $bold: "600", children: t.title }),
        /* @__PURE__ */ k(cr, { children: t.subtitle }),
        /* @__PURE__ */ k(Qa, { children: t.description })
      ] }) })
    }
  );
}, n1 = ({ data: e, zoom: t, onTileClick: n }) => {
  const r = ue(() => {
    let o = 0;
    return e.map((s, i) => (i > 0 && (o += Math.max(e[i - 1].data.length, 1)), s.data.map(
      (l, a) => l.map((c) => /* @__PURE__ */ k(
        t1,
        {
          row: a + o,
          data: c,
          zoom: t,
          onTileClick: n
        },
        c.id
      ))
    ))).flat(2);
  }, [e, n, t]);
  return /* @__PURE__ */ k(dn, { children: r() });
};
E.div`
  box-sizing: border-box;
  font-family: Inter;
  padding: 0 0.5rem;
  height: 125px;
  position: fixed;
  top: ${({ $isExpanded: e }) => e ? 0 : "-129px"};
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 999;
`;
E.div`
  width: 100%;
  margin-top: 2px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.5px;
  background-color: white;
`;
E.label`
  font-size: 14px;
`;
E.input`
  width: 45px;
  height: 18px;
  font-size: 14px;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  background-color: white;
  outline: none;
`;
E.input`
  height: 18px;
  width: 18px;
`;
E.button`
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
E.form`
  background-color: rgba(255, 255, 255, 0.75);
`;
const r1 = E.div`
  padding: 8px 16px;
  position: absolute;
  background-color: ${({ theme: e }) => e.colors.tooltip};
  border-radius: 8px;
  z-index: 3;
  transition: all 0.25s;
  transition-timing-function: ease-out;
  pointer-events: none;
`, o1 = E.div`
  width: 100%;
`, s1 = E.div`
  position: absolute;
  width: 0;
  height: 0;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-top: 14px solid ${({ theme: e }) => e.colors.tooltip};
`, i1 = E.div``, lr = E.div`
  display: flex;
  align-items: center;
  &:first-child {
    margin-bottom: 8px;
  }
`, dr = E.div`
  ${Qe}
  display: flex;
  align-items: center;
  font-size: 10px;
  color: ${({ theme: e }) => e.colors.textSecondary};
  line-height: 12px;
  letter-spacing: 0.5px;
`, ur = E.p`
  ${Qe}
  margin-left: 4px;
  color: ${({ theme: e }) => e.colors.textSecondary};
`, a1 = E.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.warning};
`, c1 = ({ tooltipData: e, zoom: t }) => {
  const { taken: n, free: r, over: o } = nt(), { coords: s, disposition: i } = e, l = pe(null);
  let a = Pe;
  switch (t) {
    case 0:
      a = Pe;
      break;
    case 1:
      a = de;
      break;
    case 2:
      a = ce;
      break;
  }
  return to(() => {
    if (!l.current) return;
    const { width: c } = l.current.getBoundingClientRect();
    let d;
    switch (t) {
      case 2:
        d = c / 2 + a;
        break;
      default:
        d = c / 2 + a / 2;
        break;
    }
    l.current.style.left = `${s.x - d}px`, l.current.style.top = `${s.y + 8}px`;
  }, [s.x, a, i.overtime, s.y, t]), /* @__PURE__ */ X(r1, { ref: l, children: [
    /* @__PURE__ */ k(o1, { children: /* @__PURE__ */ X(i1, { children: [
      /* @__PURE__ */ X(lr, { children: [
        /* @__PURE__ */ k(me, { iconName: "calendarWarning", height: "14" }),
        /* @__PURE__ */ X(dr, { children: [
          /* @__PURE__ */ k(ur, { children: `${n}: ${i.taken.hours}h ${i.taken.minutes}m` }),
          (i.overtime.hours > 0 || i.overtime.minutes > 0) && /* @__PURE__ */ X(dn, { children: [
            " ",
            "-",
            " ",
            /* @__PURE__ */ k(a1, { children: `${i.overtime.hours}h ${i.overtime.minutes}m ${o}` })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ X(lr, { children: [
        /* @__PURE__ */ k(me, { iconName: "calendarFree", height: "14" }),
        /* @__PURE__ */ k(dr, { children: /* @__PURE__ */ k(ur, { children: `${r}: ${i.free.hours}h ${i.free.minutes}m` }) })
      ] })
    ] }) }),
    /* @__PURE__ */ k(s1, {})
  ] });
}, l1 = E.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 26px;
  background-color: ${({ theme: e }) => e.colors.secondary};
  border-radius: 30px;
  position: relative;
  transition: background-color 0.3s ease;
`, d1 = E.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme: e }) => e.colors.button};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({ theme: e }) => e.mode === "light" ? "4px" : "34px"};
  transition: left 0.3s ease;
`, u1 = E.div`
  position: absolute;
  top: 5px;
  left: ${({ theme: e }) => e.mode === "light" ? "38px" : "4px"};
  transition: left 0.3s ease;
`, h1 = ({ toggleTheme: e }) => {
  const t = Ae();
  return /* @__PURE__ */ X(l1, { onClick: e, children: [
    /* @__PURE__ */ k(d1, {}),
    /* @__PURE__ */ k(u1, { children: t.mode === "light" ? /* @__PURE__ */ k(me, { iconName: "sun", height: "16", width: "16" }) : /* @__PURE__ */ k(me, { iconName: "moon", height: "16", width: "16" }) })
  ] });
};
export {
  y1 as Scheduler
};

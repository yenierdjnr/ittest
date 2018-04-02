//  HYPE.documents["ITP_Content_1"]
(function() {
  (function l() {
    function h(a, b, d) { var c = !1;
      null == window[a] && (null == window[b] ? (window[b] = [], window[b].push(l), a = document.getElementsByTagName("head")[0], b = document.createElement("script"), c = k, false == !0 && (c = ""), b.type = "text/javascript", b.src = c + "/" + d, a.appendChild(b)) : window[b].push(l), c = !0); return c }
    var k = "ITP_Content_1.hyperesources",
      c = "ITP_Content_1",
      e = "itpcontent1_hype_container";
    if (false == !1) try {
      for (var f = document.getElementsByTagName("script"),
          a = 0; a < f.length; a++) { var b = f[a].src,
          d = null != b ? b.indexOf("/itpcontent1_hype_generated_script.js") : -1; if (-1 != d) { k = b.substr(0, d); break } }
    } catch (n) {}
    if (false == !1 && (a = navigator.userAgent.match(/MSIE (\d+\.\d+)/), a = parseFloat(a && a[1]) || null, a = h("HYPE_606", "HYPE_dtl_606", !0 == (null != a && 10 > a || false == !0) ? "HYPE-606.full.min.js" : "HYPE-606.thin.min.js"), true == !0 && (a = a || h("HYPE_w_606", "HYPE_wdtl_606", "HYPE-606.waypoints.min.js")), false ==
        !0 && (a = a || h("Matter", "HYPE_pdtl_606", "HYPE-606.physics.min.js")), a)) return;
    f = window.HYPE.documents;
    if (null != f[c]) { b = 1;
      a = c;
      do c = "" + a + "-" + b++; while (null != f[c]);
      d = document.getElementsByTagName("div");
      b = !1; for (a = 0; a < d.length; a++)
        if (d[a].id == e && null == d[a].getAttribute("HYP_dn")) { var b = 1,
            g = e;
          do e = "" + g + "-" + b++; while (null != document.getElementById(e));
          d[a].id = e;
          b = !0; break }
      if (!1 == b) return } b = [];
    b = [];
    d = {};
    g = {};
    for (a = 0; a < b.length; a++) try {
      g[b[a].identifier] = b[a].name, d[b[a].name] = eval("(function(){return " +
        b[a].source + "})();")
    } catch (m) { window.console && window.console.log(m), d[b[a].name] = function() {} } a = new HYPE_606(c, e, { "3": { p: 1, n: "Pasted.png", g: "101", t: "@1x" }, "1": { p: 1, n: "illustration%20copy%403x.svg", g: "19", t: "image/svg+xml" }, "-2": { n: "blank.gif" }, "-1": { n: "PIE.htc" }, "2": { p: 1, n: "Play.svg", g: "21", t: "image/svg+xml" }, "0": { p: 1, n: "fill.svg", g: "38", t: "image/svg+xml" } }, k, [], d, [{ n: "Untitled Scene", o: "1", X: [0] }], [{ o: "3", p: "600px", cA: false, Y: 296, Z: 326, L: [], c: "#FFFFFF", bY: 1, d: 296, U: {}, T: { kTimelineDefaultIdentifier: { i: "kTimelineDefaultIdentifier", n: "Main Timeline", z: 3, b: [], a: [{ f: "c", y: 0, z: 0.15, i: "cQ", e: 1, s: 0, o: "156" }, { f: "c", y: 0, z: 0.15, i: "cR", e: 1, s: 0, o: "156" }, { f: "c", y: 0.15, z: 2.15, i: "Skew", e: 0, s: 0, o: "157" }, { f: "c", y: 0.15, z: 2.15, i: "b", e: 161, s: 202, o: "157" }, { f: "c", y: 0.15, z: 2.15, i: "c", e: 142.33799999999999, s: 0, o: "157" }, { y: 0.15, i: "cR", s: 1, z: 0, o: "156", f: "c" }, { y: 0.15, i: "cQ", s: 1, z: 0, o: "156", f: "c" }, { y: 3, i: "Skew", s: 0, z: 0, o: "157", f: "c" }, { y: 3, i: "b", s: 161, z: 0, o: "157", f: "c" }, { y: 3, i: "c", s: 142.33799999999999, z: 0, o: "157", f: "c" }], f: 30 } }, bZ: 180, O: ["159", "155", "156", "158", "157", "154", "153"], n: "Untitled Layout", "_": 0, v: { "154": { uB: -30, dF: "round", x: "visible", a: 23, b: 161, j: "absolute", r: "inline", z: 9, dC: { path: [
                [4.5, 5.7711864406779654, 4.5, 5.7711864406779654, 137.83838687573439, 4.5, 137.83838687573439, 4.5]
              ], closed: false }, k: "div", d: 10.2712, c: 142.33799999999999, dD: 4.5, e: 1, bM: "0", dE: "#CAF0FF" }, "157": { cW: { a: [{ b: "kTimelineDefaultIdentifier", p: 3, z: false, symbolOid: "2" }] }, uB: -30, tY: 0.5, a: 23, x: "hidden", b: 202, j: "absolute", gW: 0, z: 10, aX: 0, d: 10.2712, Skew: 0, k: "div", e: 1, aG: "Laptop animation with play button and video scrubber", c: 0, bM: "0", tX: 0.5 }, "153": { h: "38", p: "no-repeat", x: "visible", a: 177, q: "100% 100%", b: 214, j: "absolute", dB: "img", z: 6, k: "div", c: 42, d: 27, r: "none" }, "156": { h: "21", p: "no-repeat", x: "visible", a: 81, q: "100% 100%", b: 106, j: "absolute", dB: "img", z: 3, k: "div", c: 27, d: 34, r: "inline", cQ: 0, cR: 0, bM: "0" }, "159": { uB: 0, h: "19", p: "no-repeat", x: "visible", a: 0, q: "100% 100%", b: 0, j: "absolute", dB: "img", z: 2, k: "div", c: 302, d: 326, r: "inline", bM: "0" }, "155": { h: "101", p: "no-repeat", x: "visible", a: -41, q: "100% 100%", b: 19, j: "absolute", dB: "img", z: 1, k: "div", c: 315, d: 315, r: "inline", cQ: 0, cR: 0, bM: "0" }, "158": { uB: 0, dF: "round", x: "visible", a: 0, b: 0, j: "absolute", bF: "157", z: 1, k: "div", dC: { path: [
                [4.5, 5.7711864406779654, 4.5, 5.7711864406779654, 137.83838687573439, 4.5, 137.83838687573439, 4.5]
              ], closed: false }, d: 10.2712, c: 142.33799999999999, r: "inline", dD: 4.5, dE: "#00A3E0" } } }], {}, g, {}, null, false, false, -1, true, true, false,
      true);
    f[c] = a.API;
    document.getElementById(e).setAttribute("HYP_dn", c);
    a.z_o(this.body)
  })();
})();

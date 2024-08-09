jQuery(window).on("elementor/frontend/init", function() {
    elementorFrontend.hooks.addAction("frontend/element_ready/global", function(i) {
        i.on("click.onWrapperLink", function() {
            var e = i.data("premium-element-link");
            if (e) {
                var n, t, o, r = i.data("id"),
                    l = document.createElement("a");
                if (l.id = "premium-wrapper-link-" + r, o = e.href, /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(o)) l.href = e.href, l.target = "url" === e.type ? e.link.is_external ? "_blank" : "_self" : "", l.rel = "url" === e.type && e.link.nofollow ? "nofollow noreferer" : "", l.style.display = "none", document.body.appendChild(l), (n = document.getElementById(l.id)).click(), t = setTimeout(function() {
                    n.remove(), clearTimeout(t)
                })
            }
        })
    })
});
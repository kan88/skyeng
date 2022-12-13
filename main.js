(() => {
    "use strict";
    const e = [{
        id: 1,
        images: ["./images/products/tatran-s.jpg", "./images/products/tatran-m.jpg"],
        title: "Кровать TATRAN",
        info: "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.",
        price: 12e4,
        min: 1,
        max: 5
    }, {
        id: 2,
        images: ["./images/products/vilora-s.jpg", "./images/products/vilora-m.jpg"],
        title: "Кресло VILORA",
        info: "Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань. ",
        price: 21e3,
        min: 2,
        max: 8
    }, {
        id: 3,
        images: ["./images/products/menu-s.jpg", "./images/products/menu-m.jpg"],
        title: "Стол MENU",
        info: "Европейский дуб - отличается особой прочностью и стабильностью.",
        price: 34e3,
        min: 1,
        max: 2
    }, {
        id: 4,
        images: ["./images/products/askesta-s.jpg", "./images/products/askesta-m.jpg"],
        title: "Диван ASKESTA",
        info: "Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать",
        price: 68e3,
        min: 1,
        max: 9
    }, {
        id: 5,
        images: ["./images/products/lunar-s.jpg", "./images/products/lunar-m.jpg"],
        title: "Кресло LUNAR",
        info: "Прекрасно переносит солнечные лучи, перепады влажности и любые осадки",
        price: 4e4,
        min: 2,
        max: 6
    }, {
        id: 6,
        images: ["./images/products/nastan-s.jpg", "./images/products/nastan-m.jpg"],
        title: "Шкаф Nastan",
        info: "Мебель может быть оснащена разнообразными системами подсветки.",
        price: 8e4,
        min: 1,
        max: 2
    }];

    function t(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r];
        return o
    }
    var r = document.querySelector(".header__list"),
        o = document.querySelector(".catalog"),
        n = document.querySelector(".cart"),
        a = function (e) {
            if (! function (e) {
                    var r, o = document.querySelectorAll(".product__item");
                    if (o.length > 0) return (r = o, function (e) {
                        if (Array.isArray(e)) return t(e)
                    }(r) || function (e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(r) || function (e, r) {
                        if (e) {
                            if ("string" == typeof e) return t(e, r);
                            var o = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? t(e, r) : void 0
                        }
                    }(r) || function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()).some((function (t) {
                        return t.dataset.id == e
                    }))
                }(e.id)) {
                var r = document.querySelector(".product__list"),
                    o = document.querySelector(".cart-template").content.querySelector(".product__item").cloneNode(!0);
                o.querySelector(".product__image").src = e.images[0], o.querySelector(".product__title").textContent = e.title, o.querySelector(".product__description").textContent = e.info, o.querySelector(".product__price").textContent = e.price, o.querySelector(".product__quality").textContent = e.min, o.dataset.min = e.min, o.dataset.max = e.max, o.dataset.id = e.id, o.querySelector(".product__button--add").addEventListener("click", (function () {
                    Number(o.querySelector(".product__quality").textContent) < e.max && (document.querySelector(".order__value").textContent = e.price * e.min + Number(document.querySelector(".order__value").textContent), o.querySelector(".product__quality").textContent = Number(o.querySelector(".product__quality").textContent) + e.min)
                })), o.querySelector(".product__button--remove").addEventListener("click", (function () {
                    o.querySelector(".product__quality").textContent = Number(o.querySelector(".product__quality").textContent) - e.min, document.querySelector(".order__value").textContent = Number(document.querySelector(".order__value").textContent) - e.price * e.min, "0" == o.querySelector(".product__quality").textContent && o.remove()
                })), o.querySelector(".product__link--del").addEventListener("click", (function () {
                    document.querySelector(".order__value").textContent = Number(document.querySelector(".order__value").textContent) - e.price * Number(o.querySelector(".product__quality").textContent), o.remove()
                })), r.appendChild(o), document.querySelector(".order__value").textContent = e.price * e.min + Number(document.querySelector(".order__value").textContent)
            }
        },
        c = function (e, t) {
            var r = t.target.closest("li").dataset.id;
            e.forEach((function (e) {
                e.id == r && a(e)
            }))
        },
        i = function (e, t) {
            var r = document.querySelector(".catalog__list");
            if (t) {
                var o = function (e) {
                    return e.sort((function (e, t) {
                        return e.price - t.price
                    }))
                }(e);
                o.forEach((function (t) {
                    var o = document.querySelector(".catalog-template").content.querySelector(".catalog__item").cloneNode(!0);
                    o.querySelector(".catalog__image").src = t.images[1], o.querySelector(".catalog__title").textContent = t.title, o.querySelector(".catalog__description").textContent = t.info, o.querySelector(".catalog__price").textContent = t.price, o.dataset.min = t.min, o.dataset.max = t.max, o.dataset.id = t.id, o.addEventListener("click", (function (t) {
                        c(e, t)
                    })), r.appendChild(o)
                }))
            } else {
                var n = function (e) {
                    return e.sort((function (e, t) {
                        return t.price - e.price
                    }))
                }(e);
                n.forEach((function (t) {
                    var o = document.querySelector(".catalog-template").content.querySelector(".catalog__item").cloneNode(!0);
                    o.querySelector(".catalog__image").src = t.images[1], o.querySelector(".catalog__title").textContent = t.title, o.querySelector(".catalog__description").textContent = t.info, o.querySelector(".catalog__price").textContent = t.price, o.dataset.min = t.min, o.dataset.max = t.max, o.dataset.id = t.id, o.addEventListener("click", (function (t) {
                        c(e, t)
                    })), r.appendChild(o)
                }))
            }
        };
    document.addEventListener("DOMContentLoaded", (function () {
        var t;
        t = e, r.addEventListener("click", (function (e) {
                if ("UL" !== e.target.tagName) {
                    var t = e.target.closest("li");
                    "catalog" === t.dataset.nav && o.classList.contains("js-nodisplay") && (o.classList.remove("js-nodisplay"), o.classList.add("js-display"), n.classList.add("js-nodisplay"), n.classList.remove("js-display")), "cart" === t.dataset.nav && n.classList.contains("js-nodisplay") && (o.classList.add("js-nodisplay"), o.classList.remove("js-display"), n.classList.remove("js-nodisplay"), n.classList.add("js-display"))
                }
            })), i(t, !0), document.querySelector(".command__button--clear").addEventListener("click", (function () {
                for (var e = document.querySelectorAll(".product__item"), t = 0; t < e.length; t++) e[t].remove();
                document.querySelector(".order__value").textContent = "0"
            })), document.querySelector(".command__button--moveon").addEventListener("click", (function () {
                o.classList.remove("js-nodisplay"), o.classList.add("js-display"), n.classList.add("js-nodisplay"), n.classList.remove("js-display")
            })),
            function (e) {
                document.querySelector(".catalog__sort").addEventListener("change", (function (t) {
                    document.querySelectorAll(".catalog__item").forEach((function (e) {
                        return e.remove()
                    })), "cheap" == t.target.value ? i(e, !0) : i(e, !1)
                }))
            }(t)
    }))
})();
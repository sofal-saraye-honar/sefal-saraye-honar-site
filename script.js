
/* ==========================================
   سفال‌سرای هنر
   script.js
========================================== */

// پیام خوش‌آمدگویی
window.addEventListener("load", function () {

    console.log("به سفال‌سرای هنر خوش آمدید 🌸");

});

// ==============================
// سبد خرید
// ==============================

let cartCount = 0;

const cartButton = document.querySelector(".cart-btn");
const cartCounter = document.querySelector(".cart-count");

if (cartButton && cartCounter) {

    cartButton.addEventListener("click", function () {

        cartCount++;

        cartCounter.textContent = cartCount;

        alert("یک محصول به سبد خرید اضافه شد 🛒");

    });

}

// ==============================
// جستجو
// ==============================

const searchButton = document.querySelector(".search-btn");

if (searchButton) {

    searchButton.addEventListener("click", function () {

        const text = prompt("نام محصول را وارد کنید:");

        if (text) {

            alert("جستجو برای: " + text);

        }

    });

}
/* ==============================
   اسکرول نرم لینک‌های منو
============================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ==============================
   پیام نقشین
============================== */

setTimeout(function () {

    alert("🌸 سلام، من نقشین هستم. اگر برای انتخاب هدیه نیاز به کمک دارید، خوشحال می‌شوم راهنمایی‌تان کنم.");

}, 3000);


/* ==============================
   پیام جغد راهنما
============================== */

setTimeout(function () {

    console.log("🦉 جغد راهنما: هر محصول یک داستان دارد...");

}, 5000);


/* ==============================
   نمایش سال جاری
============================== */

const year = new Date().getFullYear();

console.log("سال جاری:", year);
/* ==============================
   نمایش بخش‌ها هنگام اسکرول
============================== */

const sections = document.querySelectorAll("section");

function showSections() {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

}

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all .8s ease";

});

window.addEventListener("scroll", showSections);

showSections();


/* ==============================
   دکمه بازگشت به بالا
============================== */

const backButton = document.createElement("button");

backButton.innerHTML = "⬆";

backButton.style.position = "fixed";
backButton.style.bottom = "20px";
backButton.style.left = "20px";
backButton.style.width = "50px";
backButton.style.height = "50px";
backButton.style.border = "none";
backButton.style.borderRadius = "50%";
backButton.style.background = "#0b7b79";
backButton.style.color = "#fff";
backButton.style.fontSize = "22px";
backButton.style.cursor = "pointer";
backButton.style.display = "none";
backButton.style.zIndex = "9999";

document.body.appendChild(backButton);

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        backButton.style.display = "block";

    } else {

        backButton.style.display = "none";

    }

});

backButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});
/* ==========================================
   سفال‌سرای هنر
   بخش پایانی Script
========================================== */

// پیام پایان بارگذاری سایت
window.addEventListener("load", function () {

    console.log("✅ سایت سفال‌سرای هنر با موفقیت بارگذاری شد.");

});

// شمارش بازدید (فقط روی همین مرورگر)
let visit = localStorage.getItem("visitCount");

if (visit === null) {

    visit = 1;

} else {

    visit = Number(visit) + 1;

}

localStorage.setItem("visitCount", visit);

console.log("تعداد بازدید شما از سایت:", visit);

// آماده برای امکانات آینده
const siteInfo = {

    name: "سفال‌سرای هنر",

    slogan: "هدیه‌ای ماندگار از هنر دست ایرانی",

    version: "1.0.0"

};

console.log(siteInfo);

// پیام جغد راهنما
console.log("🦉 جغد: ممنون که از سفال‌سرای هنر بازدید کردی.");

// پیام نقشین
console.log("🌸 نقشین: امیدوارم هدیه دلخواهت را پیدا کرده باشی.");

// پایان فایل
console.log("🎉 Script آماده است.");

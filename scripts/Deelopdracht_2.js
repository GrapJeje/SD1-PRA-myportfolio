// JavaScript voor Flashing Heart
setInterval(FlashingHeart, 500);

function FlashingHeart() {
    var img = document.getElementById("flashing_heart");
    if (img.src.match("img/flashingheart_1.png")) {
        img.src = "img/flashingheart_2.png";
    } else {
        img.src = "img/flashingheart_1.png";
    }
}
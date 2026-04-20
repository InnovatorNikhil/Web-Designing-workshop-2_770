const btn = document.getElementById("btn");
const img = document.getElementById("myImage");

const img1 = "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSnmNA-WhWmOman68AFQs4F4JODvLbAREyIfv6PROiYichdsAYp8BK7YXtv97nLydZ0emiemkbP22nwHlc2-VIqQreYJVFqncs1Jt_-U0kgZyAyawVrRTv-Bg";

const img2 = "https://vsprod.vijaysales.com/media/catalog/product/i/p/iphone_17_pro_cosmic_orange_pdp_image_position_1__en-in_1.jpg?optimize=medium&fit=bounds&height=500&width=500";

btn.addEventListener("click", function () {
    if (img.src === img1) {
        img.src = img2;
    } else {
        img.src = img1;
    }
});
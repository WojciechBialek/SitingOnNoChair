console.log("awdaw");
var li_dropdown = document.querySelectorAll(".li_dropdown");

li_dropdown.forEach(function (el) {
   el.addEventListener("mouseover", function (e) {
       this.lastElementChild.style.display = "block";
   });
});

li_dropdown.forEach(function (el) {
    el.addEventListener("mouseout", function (e) {
        this.lastElementChild.style.display = "none";
    });
});

var product = document.querySelectorAll(".product");
var blocksImage=document.querySelectorAll(".product h2");

product.forEach(function (el) {
    el.addEventListener("mouseover", function (e) {
        this.firstElementChild.style.display = "none";
    });
});
product.forEach(function (el) {
    el.addEventListener("mouseout", function (e) {
        this.firstElementChild.style.display = "block";
    });
});

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

var changePicturenext = document.querySelector(".changePicturenext");
var changePictureprev = document.querySelector(".changePicturepref");
var li = document.querySelectorAll(".firstSection__li");

var num =0;
console.log(li[num]);
li[num].classList.add("visible");


changePictureprev.addEventListener('click', function(el) {
    console.log("ASdsad");
    if(num===0){
        li[num].classList.remove("visible");
        num=li.length-1;
        li[num].classList.add("visible");
    }else{
        console.log("Asdasdsadasdas");
        li[num].classList.remove("visible");
        num--;
        li[num].classList.add("visible");
    }

});
changePicturenext.addEventListener('click', function(el) {
    console.log("ASdsad");
    if(num=== li.length-1){
        li[num].classList.remove("visible");
        num=0;
        li[num].classList.add("visible");
    }else{
        console.log("Asdasdsadasdas");
        li[num].classList.remove("visible");
        num++;
        li[num].classList.add("visible");
    }

});


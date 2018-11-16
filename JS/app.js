/**
 * Takie coś mozna zrealizować przez :hover w CSS
 * a jak coś da sie zrobic w CSS to trzeba to zrobić w CSS ;) 
 * 
 * Mówię i o dropdown i o "Remove text in pictures on mouseover"
 */

//Dropdown
var liDropdown = document.querySelectorAll(".li_dropdown");

liDropdown.forEach(function (el) {
   el.addEventListener("mouseover", function (e) {
       this.lastElementChild.style.display = "block";
   });
});

liDropdown.forEach(function (el) {
    el.addEventListener("mouseout", function (e) {
        this.lastElementChild.style.display = "none";
    });
});

// Remove text in pictures on mouseover
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

//Change li from first section

var changePicturenext = document.querySelector(".changePicturenext");
var changePictureprev = document.querySelector(".changePicturepref");
var li = document.querySelectorAll(".firstSection__li");

var num =0;
li[num].classList.add("visible");


changePictureprev.addEventListener('click', function(el) {
    if(num===0){
        li[num].classList.remove("visible");
        num=li.length-1;
        li[num].classList.add("visible");
    }else{
        li[num].classList.remove("visible");
        num--;
        li[num].classList.add("visible");
    }

});
changePicturenext.addEventListener('click', function(el) {
    // console.logi z wersji produkcyjnej muszą wylecieć
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

// Kalkulator

var arrow = document.querySelectorAll(".list_arrow");
var listpanel = document.querySelector(".list_panel");

arrow.forEach(function (el) {
    el.addEventListener("click", function (e) {
        var showUl = this.nextElementSibling.style.display;
        if(showUl !== "block"){
            this.nextElementSibling.style.display="block";
        }else{
            this.nextElementSibling.style.display="none";
        }

    });
});

var listPanelLi = document.querySelectorAll(".list_panel li");
var title =  document.querySelector(".title");
var color =  document.querySelector(".color");
var pattern =  document.querySelector(".pattern");
var transport =  document.querySelector(".transport");
var checkbox =  document.querySelector("#transport");
var value = document.querySelectorAll(".value");
var sum = document.querySelector(".sum");


listPanelLi.forEach(function (el) {
    el.addEventListener("click", function () {
        var parentText = this.parentElement.parentElement.children[0].innerText;
        switch (parentText) {
            case "Wybierz rodzaj":
                title.innerText=this.innerText;
                value[0].innerText=200;
                sumProduct();
                break;
            case "Wybierz kolor":
                color.innerText=this.innerText;
                value[1].innerText=50;
                sumProduct();
                break;
            case "Wybierz materiał":
                pattern.innerText=this.innerText;
                value[2].innerText=30;
                sumProduct();
                break;
        }

    });
});

function sumProduct() {
    var a=parseInt(value[0].innerHTML);
    var b=parseInt(value[1].innerHTML);
    var c=parseInt(value[2].innerHTML);
    sum.innerHTML=a+b+c;
    if(sum.innerHTML==="NaN"){
        sum.innerHTML="";
    }
}
checkbox.addEventListener("click",function (el) {
    if(sum.innerText === ""){
        return
    }
    console.log(sum.innerText);
    if (checkbox.checked === true){
        sum.innerHTML=parseInt(sum.innerHTML)+ parseInt(checkbox.dataset.transportPrice);
        transport.innerHTML="transport";
        value[3].innerText=checkbox.dataset.transportPrice;
    }else{
        sum.innerHTML=parseInt(sum.innerHTML)- parseInt(checkbox.dataset.transportPrice);
    }
});


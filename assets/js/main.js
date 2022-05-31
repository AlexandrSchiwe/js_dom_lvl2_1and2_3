// JS DOM LVL 2.1

// let home = document.getElementById('navHome');

// function changeMe() {
//     home.style.backgroundColor = "pink";
//     home.style.color = "black";
//     home.style.webkitTransform = "rotate(-180deg)";
//     home.style.height = "25px";
//     home.style.margin = "5px 0px";
// }

// JS DOM LVL 2.3

let navChange = document.getElementById('navChange');
// let listElement = document.getElementByTagName('li');
const list = document.getElementsByClassName("nav");
// const allItems = document.getElementsByTagName('ul');

function changeMe() {
    // console.log("Function works");
    // console.log(list);
    // console.log(navChange);

    navChange.style.backgroundColor = "#396362"
    navChange.style.color = "#333"
    list[0].style.backgroundColor = "#f6c89f";
    list[1].style.backgroundColor = "#ffe7d1";
    list[2].style.backgroundColor = "#4b8e8d";
    for (let i = 0; i < list.length; i++) {
        list[i].style.color = "#666";
    }
    // console.log(list);
}
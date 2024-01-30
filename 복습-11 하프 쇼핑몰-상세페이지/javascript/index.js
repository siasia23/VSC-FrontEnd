let i;
const menuA=[
    "BEST ITEM",
    "NEW ARRIVAL",
    "OUTER",
    "TOP",
    "DRESS",
    "BOTTOM",
    "SET",
    "ACC",
    "SALE"
]

window.onload=function() {
    let menu=document.querySelector("#menu").getElementsByTagName("div");
    for(i=0; i<menuA.length; i++)
        menu[i].innerHTML=menuA[i]; 
}
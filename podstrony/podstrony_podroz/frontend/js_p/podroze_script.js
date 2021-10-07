//Dropdown menu
//open
function openNav() {
    document.getElementById("myNav").style.display = "block";
}

//close
function closeNav() {
    document.getElementById("myNav").style.display = "none";
}
//hover backlight
//ON
function liOn(li){
    li.style.content = "";
    li.style.height =  "3px";
    li.style.backgroundColor = "#fff";

}
//OFF
function liOut(li){
    li.style.content = null;
    li.style.height =null;
    li.style.backgroundColor = null;
}

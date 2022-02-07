var count = 0;
var btnsubtrair = document.getElementById("btnsubtrair");
var disp = document.getElementById("display");
var btnadciona = document.getElementById("btnadciona");
var disp = document.getElementById("display");
btnsubtrair.onclick = function () {
    count--;
    disp.innerHTML = count;
}

btnadciona.onclick = function () {
    count++;
    disp.innerHTML = count;
}
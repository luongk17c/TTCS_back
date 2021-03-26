var login = document.getElementById("login");
var reg = document.getElementById("reg");
var Indicator = document.getElementById("Indicator");

function register(){
    reg.style.transform = "translateX(0px";
    login.style.transform = "translateX(0px";
    Indicator.style.transform = "translateX(100px";
}
function login1(){
    reg.style.transform = "translateX(300px";
    login.style.transform = "translateX(300px";
    Indicator.style.transform = "translateX(0px";
}
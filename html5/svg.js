window.addEventListener("deviceorientation", on_device_orientation);
document.getElementById("id_bussiness_version").innerHTML = "Bussiness version: 2018.12.3.1";
// window.addEventListener("devicemotion", on_device_motion);
var R = 10;
function on_device_orientation(e){
    var svg = document.getElementById("id_svg")
    var circle = document.getElementById("id_circle");
    var R = 20;

    circle.setAttribute("cx", svg.width/2 + e.gamma / 90 * (svg.width/2 - R), svg.height/2 + e.beta/90 * (svg.height /2 -R) + "px");
    circle.setAttribute("cy", svg.width/2 + e.gamma / 90 * (svg.width/2 - R), svg.height/2 + e.beta/90 * (svg.height /2 -R)+ "px");
}
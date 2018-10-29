document.getElementById("id_bussiness_version").innerHTML = "Bussiness version: 2018.10.29.0";
document.getElementById("id_start_button").addEventListener("click",start);
document.getElementById("id_stop_button").addEventListener("click", stop);
document.getElementById("id_stop_button").disabled = true;
var angle_obj = { angle:0}; // in grade




function draw_circle(angle_obj, ctx, w, h){
    ctx.clearRect(0,0,w,h);
    ctx.beginPath();
    ctx.arc(w / 2 + Math.cos(angle_obj.angle * Math.PI / 180)*100, h / 2 + Math.sin(angle_obj.angle * Math.PI / 180) *100,50,0,2*Math.PI);
    ctx.stroke();
    angle_obj.angle++;
}


function start(){
    var c = document.getElementById("id_canvas");
    var ctx = c.getContext("2d");
    document.getElementById("id_start_button").disabled = true;
    document.getElementById("id_stop_button").disabled = false;
    id_timer = setInterval(draw_circle, 16,angle_obj ,ctx, c.width, c.height);
    var my_worker = new Worker("calcul_prime.js");
    my_worker.onmessage = function(e){
        document.getElementById("id_prime") = e.data;
    }
}

function stop(){    
    clearInterval(id_timer);
    document.getElementById("id_start_button").disabled = false;
}
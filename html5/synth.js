document.getElementById("id_bussiness_version").innerHTML = "Bussiness version: 2018.12.10.0";

document.getElementById("id_get_voices").addEventListener("click", on_get_voices);
var synth = window.speechSynthesis;

function on_get_voices(){
    var voices = synth.getVoices()
    document.getElementById("id_voices_list").innerHTML = "";
    for(var i = 0; i < voices; i++){
        document.getElementById("id_voices_list").innerHTML += voices[i].lang + " " + voices[i].name + "<br></br>";
    }
}
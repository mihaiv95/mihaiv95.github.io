document.getElementById("id_bussiness_version").innerHTML = "Bussiness version: 2018.12.10.1";

document.getElementById("id_get_voices").addEventListener("click", on_get_voices);
document.getElementById("id_speak").addEventListener("click", on_speak);
var synth = window.speechSynthesis;

function on_get_voices(){
    var voices = synth.getVoices()
    document.getElementById("id_voices_list").innerHTML = "";
    for(var i = 0; i < voices.length; i++){
        document.getElementById("id_voices_list").innerHTML += voices[i].lang + " " + voices[i].name + "<br></br>";
    }
}

function on_speak(){
    var enunt = new SpeechSynthesisUtterance();
    enunt.lang = "en-US";
    enunt.text = document.getElementById("id_text").value;
    enunt.onend = on_end_speech;

    document.getElementById("id_speak").disabled = true;

    synth.speak(enunt);
}

function on_end_speech(){
    document.getElementById("id_speak").disabled = false;
}
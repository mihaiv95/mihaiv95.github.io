document.getElementById("id_bussiness_version").innerHTML = "Bussiness version: 2018.12.10.0";

document.getElementById("id_speak").addEventListener("click", on_speak);

var speak = new webkitSpeechRecognition();
speak.onresult = on_result;
speak.onspeechend = on_speech_end;
speak.lang = "en-US";

function on_speak(){

}

function on_speech_end(){

}

function on_result(e){
    document.getElementById("id_text").innerHTML = e.results[0][0].transcript + "(" + e.results[0][0].confidence + ")";
}
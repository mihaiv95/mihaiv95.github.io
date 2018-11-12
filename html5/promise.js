document.getElementById("id_bussiness_version").innerHTML = "Bussiness version: 2018.11.12.0";


function f(resolve, reject){
    //...
    resolve(":)");

    //reject(":(");
}

function on_success(e){
    console.log("Success: " + e);

}

function on_failure(e){
    console.log("Failed: " + e);
}

function start(){
    var promise = new Promise(f);

    promise.then(on_success).catch(on_failure)
}
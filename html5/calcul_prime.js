var stopped = false;
function is_prime(n){
    for (var i = 2 ; i * i <= n; i++){
        if( n % i == 0)
            return false;
    }
    return true;
}

self.onmessage() = function(e){
    if (e.data == "stop"){
        stopped = true;
    }
}

function calculeaza_prime(start_value_value){
    if (stopped){

    }  
    else{
        for (var i = start_value; i < start_value + 1000; i++){
            if (is_prime(i))
                postMessage(i);
            
        }
        start_value += 1000;
    }
        if (start_value < 1e10)
            setTimeout(calculeaza_prime, 1, start_value);
        else
            postMessage("gata");
}


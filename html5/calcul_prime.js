for (var i=1e9; i < 1e10; i++){
    if (is_prime()){
        postMessage(i);
    }
}

function is_prime(n){
    for (var i = 2 ; i * i<= n; i++){
        if( n % i == 0)
        return false;
    return true;
    }
}

postMessage("gata");
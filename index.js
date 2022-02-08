function receivesAFunction (cb) {
    console.log(cb());
}


function returnsANamedFunction() {
    return function func() {
        console.log("boo")
    };
}

function returnsAnAnonymousFunction() {
    return function () {
        1+1;
    }
}
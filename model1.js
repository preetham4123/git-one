var a = b(); // global scope
var c = d(); //  global scope       
a;
c;

function b() {       // global scope
    return c;
}

var d = function () {   //declared variable name d
    return b();
}


var foo = 'bar';
function bar() {
    var foo = "baz";

    function baz(foo) {
        foo = "bam";
        baz = "yay";  //global scope
    }
    baz();
}

bar();
console.log(foo);
console.log(bam);
baz();


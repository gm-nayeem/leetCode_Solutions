var reverse = function(x) {
    function reverse_a_number(x)
    {
        x = Math.abs(x);
        x = x + "";
        return x.split("").reverse().join("");
    }
    var y = Number(reverse_a_number(x));
    var p = Math.pow(2, 31);
    if(y >= p ) return 0;
    else{
        if(x < 0){
        return "-"+y;
        }else{
            return y;
        }
    }
    
};
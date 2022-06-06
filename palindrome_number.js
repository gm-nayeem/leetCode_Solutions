var isPalindrome = function(x) {
    function reverse_a_number(x)
    {
        x = x + "";
        return x.split("").reverse().join("");
    }
    var y = Number(reverse_a_number(x));
    if(x==y) return true;
    else return false;
};
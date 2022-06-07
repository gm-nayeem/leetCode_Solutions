var lengthOfLastWord = function(s) {
    var str = s.split(" ");
    for(var i = 0; i < str.length; i++){
        if(str[i] == ''){
            str.splice(i, 1);
            i--;
        }
    }
    
    return str[str.length - 1].length;
};
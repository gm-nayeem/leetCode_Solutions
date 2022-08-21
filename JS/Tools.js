/*
find length of 'a' how many times appear in string:
len = str.replace(/[^a]/g, "").length 
len = str.replace(/a/g, "").length
len = originalLength - str.replaceAll('a', "").length // best for dynamic uses
len = str.split('a').length - 1;
*/

/*
binary to decimal convert: 
parseInt((bstr + '').replace(/[^01]/gi, ''), 2);
parseInt(binaryString, 2); // easy to understand

decimal to binary convert: 
decimal.toString(2);
*/

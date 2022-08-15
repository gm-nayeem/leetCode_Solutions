// find length of 'a' how many times appear in string
len = str.replace(/[^a]/g, "").length 
len = str.replace(/a/g, "").length
len = originalLength - str.replaceAll('a', "").length // best for dynamic uses
len = str.split('a').length - 1;



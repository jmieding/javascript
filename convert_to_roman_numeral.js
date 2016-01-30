//Convert an integer to a roman numeral
function convert(num) {
 if (typeof num !== "number" || num !== num) {
   return NaN;
 }
   
 var output = '';
 var integers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
 var numerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
 var newNum = num.toString();

 for (var i=0; i < newNum.length; i++) {
   var digit = newNum[i];
   var zeroes = newNum.slice(i).length;
   for (var j=zeroes - 1; j > 0; j--) {
     digit += "0";
   }

   digit = parseInt(digit, 10);
   for (var k=0; k<integers.length; k++) {
     if (digit/integers[k] >= 1) {
       var quotient = Math.floor(digit/integers[k]);
       for (var l=0; l<quotient; l++) {
         output += numerals[k];
         digit -= integers[k];
       }
     }
   }
 }
 return output;
}

convert(36);
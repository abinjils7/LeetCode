/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {


    if(x<0) return false;


   let s = x.toString()

   let rev=s.split('').reverse().join('')

   return s===rev;

  
    
};
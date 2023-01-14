/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  let str = x.toString().split("");
  let left = 0;
  let right = str.length-1;

  debugger;

  while((left < right)){
    console.log("left" + left, "right", right);
      debugger;
      if(str[left] !== str[right]){
        debugger;
          return false;
      }
      debugger;
      left++;
      right--;
  }

  return true;
};

isPalindrome(-121)
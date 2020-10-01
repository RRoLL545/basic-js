const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr_) {
  let arr = arr_;
  if (Object.prototype.toString.call(arr) !== "[object Array]") {
  	const x = Error('Argument is not Array');
  	throw x;
  }
  
  let answer =[];
  let j = 0;
  
  for ( let i = 0; i < arr.length; i++) {
  	if ( typeof arr[i] !== undefined && arr[i] !== '--discard-next' && arr[i] !== '--discard-prev' && arr[i] !== '--double-next' && arr[i] !== '--double-prev') {
    	answer[j] = arr[i];
      j++;
    } else if (arr[i] === '--discard-next') {
      //arr.splice(i,2);
      if (arr[i+2] === '--double-prev') {
        i += 2;
      } else {
        i++;}
    } else if (arr[i] === '--discard-prev') {
    	if ( i > 0 ) {
      	j--;
      }
      if ( i === arr.length - 1) {
      	answer.pop();
      }
    } else if (arr[i] === '--double-next') {
    	if ( i < arr.length - 1 ) {
      	answer[j] = arr[i+1];
      	j++;
      }
    } else if (arr[i] === '--double-prev') {
    	if ( i > 0 ) {
      	answer[j] = arr[i-1];
        j++;
      }
    }
  }
  
  return answer;
};

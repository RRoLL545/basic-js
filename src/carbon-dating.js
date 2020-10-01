const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity === undefined) {
    return false;
  }
  if (typeof sampleActivity !== 'string') {
    return false;
  }
  let x = parseInt(sampleActivity, 10);
  
	if ( x > 0 && x < 15 ) {
  	return Math.ceil(Math.log(MODERN_ACTIVITY/x)/(0.693/HALF_LIFE_PERIOD));
  } else {
    return false;
  }
};

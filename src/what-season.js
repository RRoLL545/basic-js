const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(theDate) {
  if (theDate === undefined) {
  	return 'Unable to determine the time of year!';
  }
  
	if (Object.prototype.toString.call(theDate) !== '[object Date]') {
  	const x = Error('Wrong argument');
  	throw x;
  }
  
	let day = theDate.getDate();
  let month = theDate.getMonth();
  
  let currentDate = day + month*100;
  
  if ( (currentDate >= 1 && currentDate <= 129) || (currentDate >= 1101 && currentDate <= 1131) ) {
  	return 'winter';
  } else if ( currentDate >= 201 && currentDate <= 431 ) {
  	return 'spring';
  } else if ( currentDate >= 501 && currentDate <= 731 ) {
  	return 'summer';
  } else if ( currentDate >= 801 && currentDate <= 1030 ) {
  	return 'autumn';
  }
};

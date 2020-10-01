const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if (Array.isArray(members) !== true ) {
    return false
  }
  let teamName = '';
	for ( let i = 0; i < members.length; i++) {
  	if (typeof members[i] === 'string') {
      let trimmed = members[i].trim();
    	teamName = teamName + trimmed[0];
    }
  }

  if (teamName === '') {
    return false;
}

  teamName=teamName.toUpperCase();
  teamName=teamName.split('').sort().join('');

  
  
  return teamName;
};

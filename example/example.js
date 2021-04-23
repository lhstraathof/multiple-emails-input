'use strict';

function makeEmail() {
  var strValues = 'abcdefg12345';
  var strEmail = '';
  var strTmp;

  for (var i = 0; i < 10; i++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail = strEmail + strTmp;
  }

  strTmp = '';
  strEmail = strEmail + '@';

  for (var j = 0; j < 8; j++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail = strEmail + strTmp;
  }

  strEmail = strEmail + '.com';
  return strEmail;
}

function addRandomEmail(target) {
  if (target && target.add) {
    var randomEmail = makeEmail();
    target.add(randomEmail);
  }
}

function countEmails(target, valid) {
  var emailList = 0;

  if (target && target.entryList && target.entryList.length) {
    if (valid) {
      emailList = target.entryList.filter(function (entry) {
        return entry.isValidEmail === true;
      }).length;
    } else {
      emailList = target.entryList.length;
    }
  }

  return emailList;
}

const calType = {
  Google: "google",
  Apple: "apple",
  Office365: "office365",
  Outlook: "outlook",
  Yahoo: "yahoo",
  Invalid: "invalid"
}


/* Unit tests should be written for addToCalendar, verifyCalType, addToGoogleCalendar, addToAppleCalendar, addToOffice365Calendar, addToOutlookCalendar, addToYahooCalendar

Other thoughts: perhaps create a Calendar superclass with a method "addToCalendar" and subclasses for each calendar type. Maybe be overkill for this functionality though.

Error from slides seemed Critical, as basic functionality did not work. This could have been prevented by breaking up the code into different pieces, as shown here, and running unit tests on each different piece. Finally, functional testing on different devices and in different environments could have caught the error.
*/
$scope.addToCalendar = function (CalendarType) {

  myCalType = verifyCalType(CalendarType);
  switch (myCalType) {
    case calType.Google:
      // function addToGoogleCalendar().
      break;
    case calType.Apple:
      // function addToAppleCalendar().
      break;
    case calType.Office365:
      // function addToOffice365Calendar().
      break;
    case calType.Outlook:
      // function addToOutlookCalendar().
      break;
    case calType.Yahoo:
      // function addToYahooCalendar().
      break;
    case calType.Invalid:
      return new Error("Invalid calendar type");
    default:
      return new Error("Internal server error")
  }
}


function verifyCalType(myCalType) {
  if (myCalType === "Google" || myCalType === "google" || myCalType === "goog") {
    return calType.Google;
  } else if (myCalType === "Apple" || myCalType === "apple" || myCalType === "appl") {
    return calType.Apple;
  } else if (myCalType === "Office365" || myCalType === "office365" || myCalType === "365") {
    return calType.Office365;
  } else if (myCalType === "Outlook" || myCalType === "OutlookOnline" || myCalType === "outlook") {
    return calType.Outlook;
  } else if (myCalType === "Yahoo" || myCalType === "yahoo" || myCalType === "yahoo!" || myCalType === "YAHOO!") {
    return calType.Yahoo;
  } else {
    return calType.Invalid;
  }
}

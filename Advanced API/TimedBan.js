  //////////////////////////////////////////////////////
 //!!THE UNBAN API FUNCTION IS BROKEN AT THE MOMENT!!//
//////////////////////////////////////////////////////

//Create the function which will ban the user and set the timer to unban them
function moderateTimedBan(who, time, reason) {
	//Ban the user
	API.moderateBanUser(who, reason);
	//Define unban function to use in the timeout
	function unban() { API.moderateUnbanUser(who) };
	//Set the timeout long with a timeout ID so it can be cleared if needed
	banTimer = setTimeout(unban, time * 60000) //We are using minutes for the time, so we multiply the time argument because timeout takes milliseconds
}

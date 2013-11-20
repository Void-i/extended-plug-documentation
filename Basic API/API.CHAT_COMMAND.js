API.on(API.CHAT_COMMAND, onChatCommand);
//This enables the event listener for the user running the script, any commands starting with forward slash '/'.
//The entire chat string is passed, including the forward slash.

function onChatCommand (message)
//This is where you define what you would like to happen when the command is run.
{
 
  if (message == '/lock') API.moderateLockBooth(true); 
  //This passes the data from the chat command into and if statement, locking the booth if the message is '/lock'.
  
}

var dt;
function DisplayTime(){
	dt = new Date();
	postMessage(dt);
	setTimeout("DisplayTime()",1000);
}
DisplayTime();
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();

function refreshTime() {
	// body...
	dt = new Date();
	document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();
}

setInterval(refreshTime, 1000);
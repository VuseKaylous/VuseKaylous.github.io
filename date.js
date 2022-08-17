var dt = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();
document.getElementById("daytime").innerHTML = dt.toLocaleDateString(undefined, options);

function refreshTime() {
	// body...
	dt = new Date();
	document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();
	document.getElementById("daytime").innerHTML = dt.toLocaleDateString(undefined, options);
}

setInterval(refreshTime, 1000);
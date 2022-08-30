

var input = document.getElementById("input");
var content = document.getElementById("oldCommands");

function createEntry() {
	var root = "root@terminal:$ ~ "
	var repeat = document.createElement("div");
	var inputValue = input.value;
	repeat.innerHTML = "<span  class='spandefault'>root@terminal:$ ~</span> " + inputValue;
	document.getElementById("oldCommands").prepend(repeat);
	input.value = "";
}

function addLine(args) {
	var line = document.createElement("div");
	line.innerHTML = args;
	document.getElementById("oldCommands").prepend(line);
}

g = google
function google(args) {
	var line = document.createElement("div");
	line.innerHTML = "redirecting to https://google.com";
	document.getElementById("oldCommands").prepend(line);

	if (!args) {
		window.open("https://google.com").focus();
	} else {
		var search = args.replace(" ", "+");
		window.open("https://google.com/search?q=" + search, '_blank').focus();
	}
}

y = youtube
function youtube(args) {
	var line = document.createElement("div");
	line.innerHTML = "redirecting to https://youtube.com";
	document.getElementById("oldCommands").prepend(line);

	if (!args) {
		window.open("https://youtube.com").focus();
	} else {
		var search = args.replace(" ", "+");
		window.open("https://youtube.com/results?search_query=" + search, '_blank').focus();
	}
}

function twitch() {
	var line = document.createElement("div");
	line.innerHTML = "redirecting to https://twitch.tv";
	document.getElementById("oldCommands").prepend(line);

	window.open("https://twitch.tv").focus();
}

function clear() {
	content.innerHTML = "";
	input.value = "";
}

input.onkeyup = function(e){
    if(e.keyCode == 13){
    	var input = document.getElementById("input");
    	var inputValue = input.value;
    	var command = inputValue.split(" ")[0];
    	var args = inputValue.replace(command, "");
    	createEntry();
    	// window[command](args);
    	command = command.toLowerCase();
    	args = args.trim();
    	if (command == "g" || command == "google") {
    		// console.log(command);
    		// console.log(":" + args + ":");
    		google(args);
    	}
    	else if (command == "y" || command == "youtube") {
    		// console.log(command);
    		// console.log(":" + args + ":");
    		youtube(args);
    	}
    	else if (command == "twitch") {
    		// console.log(command);
    		// console.log(":" + args + ":");
    		twitch();
    	}
    	else if (command == "clear") {
    		clear();
    	}
		else if (command == "uet") {
    		uet(args);
    	}
    	else {
    		addLine("sorry, I'm not designed for that");
    	}
    }
}
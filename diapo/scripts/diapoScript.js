var i = 1;
var img = document.getElementById("diapo");
var previousButton = document.getElementById("previousButton");
var nextButton = document.getElementById("nextButton");
var startButton = document.getElementById("startButton")
var diapoStep = document.getElementById("diapoStep");
var dispDiap = document.getElementById("idxImage");
nextButton.addEventListener("click", displayNext)
previousButton.addEventListener("click", displayPrev)
startButton.addEventListener("click", start)
diapoStep.onchange = changeTimer
dispDiap.onchange = display


function displayNext() {
	i = (i + 1) % tabImages.length;
	img.src = tabImages[i];
}
function displayPrev() {
	i = (i - 1) % tabImages.length;
	img.src = tabImages[i];
}

function display() {
	img.src = tabImages[dispDiap.value]
}

var interval;


function start() {
	if (!interval) {
		interval = setInterval("displayNext()", document.getElementById("diapoStep").value * 1000)
		startButton.innerHTML = "Stop"
	} else {
		clearInterval(interval)
		interval = false;
		startButton.innerHTML = "Start"
	}
}

function changeTimer() {
	if (interval) {
		interval = setInterval("displayNext()", document.getElementById("diapoStep").value * 1000)
	}
}
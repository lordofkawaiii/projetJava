var meh;

function fill(text) {
	if (text.length <= 4) {
		text = text + "x".repeat(4 - text.length)
	}
	if (text[3] != 'x') {
		k = 0
		while (k < 10) {
			document.getElementById(k).disabled = true
			k = k + 1
		}
	}
	return text
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function clicked() {
	document.getElementById("code").innerHTML = fill(document.getElementById("code").innerHTML.replace(/x/g, '') + this.id)
}

function createButton() {
	k = 0
	var arr = Array.from(Array(10).keys())
	while (k < 10) {
		var btn = document.createElement("BUTTON");   // Create a <button> element
		rand = getRandomInt(arr.length)
		arrRand = arr[rand].toString()
		btn.innerHTML = arrRand;
		btn.id = arrRand;
		arr.splice(rand, 1)
		v = document.getElementById("line1")
		v.appendChild(btn);
		document.getElementById(arrRand).onclick = clicked
		k = k + 1
	}
	document.getElementById("code").innerHTML = fill("")
}

createButton();
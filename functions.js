function delall() {
	document.querySelector('html').innerHTML = "";
}

function lagout() {
	while (true) {}
}

function spin(speed, twodir) {
	if(twodir) {
		document.querySelector('body').innerHTML += '<style>body{animation: spin speed infinite;}@keyframes spin {0% {transform: rotate(0deg);}50% {transform: rotate(360deg);}100% {transform: rotate(0deg);}}</style>';
	} else {
		document.querySelector('body').innerHTML += '<style>body{animation: spin speed infinite;}@keyframes spin {from {transform: rotate(0deg);}to {transform: rotate(360deg);}}</style>';
	}
}

function upsidedown() {
	document.querySelector('body').innerHTML += '<style>body{transform: rotate(180deg);}</style>';
}

function shake() {
	document.querySelector('body').innerHTML += '<style>body{animation: spin 281ms infinite;}@keyframes spin {0% {transform: rotate(-0.1deg);}50% {transform: rotate(1deg);}100% {transform: rotate(-0.1deg);}}</style>';
}

// I would like to say that none of this is permanant, and will go back to normal on reload.

// Delete Everything:
document.querySelector('html').innerHTML = "";

// Lag Code:
while (true) {} // DO NOT RUN THIS IN YOUR WEB SERVER OR ELSE IT WILL PROBABLY CRASH AND BECOME AS SLOW AS 10 DDOS

// Spin (One Direction):
document.querySelector('body').innerHTML += '<style>body{animation: spin 5s infinite;}@keyframes spin {from {transform: rotate(0deg);}to {transform: rotate(360deg);}}</style>';

// Spin (One Direction but epilepsy):
document.querySelector('body').innerHTML += '<style>body{animation: spin 1ms infinite;}@keyframes spin {from {transform: rotate(0deg);}to {transform: rotate(360deg);}}</style>';

// Spin (Two directions):
document.querySelector('body').innerHTML += '<style>body{animation: spin 5s infinite;}@keyframes spin {0% {transform: rotate(0deg);}50% {transform: rotate(360deg);}100% {transform: rotate(0deg);}}</style>';

// Spin (Two directions but epilepsy):
document.querySelector('body').innerHTML += '<style>body{animation: spin 1ms infinite;}@keyframes spin {0% {transform: rotate(0deg);}50% {transform: rotate(360deg);}100% {transform: rotate(0deg);}}</style>' ;

// Flip Upside-Down:
document.querySelector('body').innerHTML += '<style>body{transform: rotate(180deg);}</style>';

// Shake:
document.querySelector('body').innerHTML += '<style>body{animation: spin 281ms infinite;}@keyframes spin {0% {transform: rotate(-0.1deg);}50% {transform: rotate(1deg);}100% {transform: rotate(-0.1deg);}}</style>';

// Trip Mode:
document.querySelector('body').innerHTML += '<style>body{animation: trip 5s infinite;}@keyframes trip {0% {filter: hue-rotate(0deg);}100% {filter: hue-rotate(360deg);}}</style>';

window.onload = addUser()
function addUser() {
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(255,255,255)";
ctx.fillRect(0, 0, 750, 1340);

ctx.fillStyle = "rgb(247,73,2)";
ctx.fillRect(0, 1000, 750, 140);

var lname = document.getElementById('lastname').value;
var widthcheck = (Math.round((ctx.measureText(lname).width)/2.74));
ctx.fillStyle = "rgb(0, 0, 0)";
if (widthcheck >= 750) {
	widthcheck = 700;
}
	else if (widthcheck <= 450) {
		widthcheck = 450;
	}
ctx.fillRect(((750-widthcheck)/2), 100, widthcheck, 180);	

ctx.fillStyle = '#FFFFFF';
var	fontsize = 216;
var fontface = 'College Semi condensed';
    do {
        fontsize--;
        ctx.font = fontsize + "px" + " " + fontface;
    } while (ctx.measureText(lname).width > widthcheck)
ctx.lineWidth = 14;
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText(lname, 375, 195);

var number = document.getElementById('number').value;
ctx.fillStyle = '#F74902';
ctx.strokeStyle = 'black';

ctx.font = '535px College Bold';
ctx.lineWidth = 14;
ctx.textAlign = "center";
ctx.fillText(number, 375, 690);
ctx.strokeText(number, 375, 690);
var saveButton = document.getElementById('save');
save.onclick = function(e) {
   var dataUrl = canvas.toDataURL('image/png');
   save.href = dataUrl;
};	
	
}
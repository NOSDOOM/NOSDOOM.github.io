window.onload = addUser()
function addUser() {
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(51, 63, 72)";
ctx.fillRect(0, 0, 750, 1340);

ctx.fillStyle = "rgb(137, 115, 76)";
ctx.fillRect(0, 1090, 750, 50);	
	
ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillRect(0, 1140, 750, 200);
	
var lname = document.getElementById('lastname').value;
var widthcheck = (Math.round((ctx.measureText(lname).width)/2.74));

ctx.fillStyle = '#FFFFFF';

if (widthcheck >= 750) {
	widthcheck = 700;
}
	else if (widthcheck <= 450) {
		widthcheck = 450;
	}
var	fontsize = 235;
var fontface = 'College Semi condensed';
    do {
        fontsize--;
        ctx.font = fontsize + "px" + " " + fontface;
    } while (ctx.measureText(lname).width > widthcheck)

ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText(lname, 375, 310);

ctx.fill();
	
var number = document.getElementById('number').value;
ctx.fillStyle = '#FFFFFF';
ctx.strokeStyle = '#89734C';
	
ctx.font = '535px College Bold';
ctx.lineWidth = 7;
ctx.textAlign = "center";
ctx.fillText(number, 375, 700);
ctx.strokeText(number, 375, 700)

ctx.stroke()

var saveButton = document.getElementById('save');
save.onclick = function(e) {
   var dataUrl = canvas.toDataURL('image/png');
   save.href = dataUrl;
};	
	
}
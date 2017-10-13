window.onload = addUser()
function addUser() {
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(255, 255, 255)";
ctx.fillRect(0, 0, 750, 1340);

ctx.fillStyle = "rgb(0, 79, 48)";
ctx.fillRect(0, 0, 750, 175);

ctx.fillStyle = "rgb(0, 79, 48)";
ctx.fillRect(0, 1000, 750, 50);	
	
ctx.fillStyle = "rgb(0, 79, 48)";
ctx.fillRect(0, 1100, 750, 105);
	
var lname = document.getElementById('lastname').value;
var widthcheck = (Math.round((ctx.measureText(lname).width)/2.74));

ctx.fillStyle = '#004F30';

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
ctx.fillStyle = '#C51230';

ctx.font = '535px College Bold';
ctx.lineWidth = 7;
ctx.textAlign = "center";
ctx.fillText(number, 375, 700);
ctx.strokeText(number, 375, 700)

ctx.stroke()
	
ctx.strokeStyle = '#004F30';

var saveButton = document.getElementById('save');
save.onclick = function(e) {
   var dataUrl = canvas.toDataURL('image/png');
   save.href = dataUrl;
};	
	
}
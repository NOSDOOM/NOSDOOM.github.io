window.onload = addUser()
function addUser() {
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(0, 0, 750, 1340);

ctx.fillStyle = "rgb(253, 185, 48)";
ctx.fillRect(0, 0, 750, 175);

ctx.fillStyle = "rgb(255,255,255)";
ctx.fillRect(0, 175, 750, 45);

ctx.fillStyle = "rgb(253, 185, 48)";
ctx.fillRect(0, 1220, 750, 45);	
	
ctx.fillStyle = "rgb(255, 255, 255)";
ctx.fillRect(0, 1150, 750, 45);
	
ctx.fillStyle = "rgb(253, 185, 48)";
ctx.fillRect(0, 1080, 750, 45);
	
var lname = document.getElementById('lastname').value;
var widthcheck = (Math.round((ctx.measureText(lname).width)/2.74));
ctx.fillStyle = '#FDB930';
ctx.strokeStyle = '#FFFFFF';
if (widthcheck >= 750) {
	widthcheck = 700;
}
	else if (widthcheck <= 450) {
		widthcheck = 450;
	}
var	fontsize = 235;
var fontface = 'Bruins';
    do {
        fontsize--;
        ctx.font = fontsize + "px" + " " + fontface;
    } while (ctx.measureText(lname).width > widthcheck)
ctx.lineWidth = fontsize/33;
ctx.textAlign = "center";
ctx.textBaseline = "middle";

ctx.fillText(lname, 375, 380);
ctx.strokeText(lname, 375, 380);
	
var number = document.getElementById('number').value;
ctx.fillStyle = '#FDB930';
ctx.strokeStyle = '#FFFFFF';

ctx.font = '535px College Bold';
ctx.lineWidth = 12;
ctx.textAlign = "center";
ctx.fillText(number, 375, 715);
ctx.strokeText(number, 375, 715);

var saveButton = document.getElementById('save');
save.onclick = function(e) {
   var dataUrl = canvas.toDataURL('image/png');
   save.href = dataUrl;
};	
	
}
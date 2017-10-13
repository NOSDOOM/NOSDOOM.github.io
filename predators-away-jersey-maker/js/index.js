window.onload = addUser()
function addUser() {
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(255,255,255)";
ctx.fillRect(0, 0, 750, 1340);

ctx.fillStyle = "rgb(253,187,48)";
ctx.fillRect(0, 0, 750, 175);		
	
ctx.fillStyle = "rgb(253,187,48)";
ctx.fillRect(0, 1065, 750, 35);		
	
ctx.lineWidth=14;
ctx.strokeStyle = "rgb(0,45,98)";
ctx.strokeRect(0,0,750,1340);

ctx.fillStyle = "rgb(255,255,255)";
ctx.fillRect(7, 1140, 736, 75);
ctx.fillStyle = "rgb(0,45,98)";
ctx.fillRect(0, 1140, 750, 65);	
var lname = document.getElementById('lastname').value;
var widthcheck = (Math.round((ctx.measureText(lname).width)/2.74));

ctx.fillStyle = '#002D62';
ctx.strokeStyle = '#FDBB30';
	
if (widthcheck >= 750) {
	widthcheck = 700;
}
	else if (widthcheck <= 450) {
		widthcheck = 450;
	}
var	fontsize = 235;
var fontface = 'Nashville';
    do {
        fontsize--;
        ctx.font = fontsize + "px" + " " + fontface;
    } while (ctx.measureText(lname).width > widthcheck)
ctx.lineWidth = fontsize/58;
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText(lname, 375, 310);
ctx.strokeText(lname, 375, 310);
ctx.fill();
	
var number = document.getElementById('number').value;
ctx.fillStyle = '#002D62';
ctx.strokeStyle = '#FDBB30';
	
ctx.font = '535px Nashville';
ctx.lineWidth = 14;
ctx.textAlign = "center";
ctx.fillText(number, 375, 700);
ctx.strokeText(number, 375, 700)

ctx.stroke()
	
ctx.fillStyle = '#002D62';
ctx.strokeStyle = '#FFFFFF';
	
ctx.font = '535px Nashville';
ctx.lineWidth = 4;
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
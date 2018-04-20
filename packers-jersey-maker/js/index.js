window.onload = addUser()
function addUser() {
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(39,59,51)";
ctx.fillRect(0, 0, 750, 1340);

ctx.fillStyle = "rgb(255, 184, 28)";
ctx.fillRect(0, 0, 750, 20);
	
ctx.fillStyle = "rgb(255, 255, 255)";
ctx.fillRect(0, 27, 750, 20);
	
ctx.fillStyle = "rgb(255, 184, 28)";
ctx.fillRect(0, 54, 750, 20);

ctx.strokeStyle="#20312a";
ctx.lineWidth = 4;
ctx.strokeRect(50, 195, 650, 195);

var name = document.getElementById('firstname').value.toUpperCase();
ctx.fillStyle = '#FFFFFF';

ctx.font = '267.5px Packers';
ctx.textAlign = "center";
ctx.fillText(name, 375, 382, 600);
	
var name = document.getElementById('number').value;
ctx.fillStyle = '#FFFFFF';

ctx.font = '535px College Semi condensed';
ctx.lineWidth = 14;
ctx.textAlign = "center";
ctx.fillText(name, 375, 890);
}

var saveButton = document.getElementById('save');
save.onclick = function(e) {
   var dataUrl = canvas.toDataURL('image/png');
   save.href = dataUrl;
};

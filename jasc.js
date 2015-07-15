function changeimage() {
	var image=document.getElementById('myimage');
	
	if (image.src.match("bulb_on.png")) {
		image.src="bulb_off.png";
	}
	else {
		image.src="bulb_on.png";
	}
}

function plusone() {
	var number=document.getElementById('num');
	
	number=number+1;
}

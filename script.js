// submit-box

function subscribeAlert(){
	document.getElementById("subscribealert").style.display = 'block';
}

function closeBar(){
	document.getElementById('subscribealert').style.display = 'none';
}	

// appartment picture with grid line

function slide1(){
	document.getElementById('slide-1').style.display = 'block';
	document.getElementById('slide-2').style.display = 'none';
	document.getElementById('slide-3').style.display = 'none';
	document.getElementById('slide-4').style.display = 'none';
}

function slide2(){
	document.getElementById('slide-1').style.display = 'none';
	document.getElementById('slide-2').style.display = 'block';
	document.getElementById('slide-3').style.display = 'none';
	document.getElementById('slide-4').style.display = 'none';
}

function slide3(){
	document.getElementById('slide-1').style.display = 'none';
	document.getElementById('slide-2').style.display = 'none';
	document.getElementById('slide-3').style.display = 'block';
	document.getElementById('slide-4').style.display = 'none';
}

function slide4(){
	document.getElementById('slide-1').style.display = 'none';
	document.getElementById('slide-2').style.display = 'none';
	document.getElementById('slide-3').style.display = 'none';
	document.getElementById('slide-4').style.display = 'block';
}

// small screen
function bars(){
	document.getElementById('sidePart').style.display= "block";
}

function closeMenu(){
	document.getElementById('sidePart').style.display ="none";
}
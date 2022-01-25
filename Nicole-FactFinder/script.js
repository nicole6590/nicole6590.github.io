document.querySelector('#menu').a.addEventListener("click", displayFact);

function displayFact() {
	var fact = "Snails can sleep for as long as three years if the weather conditions aren't ideal for them. <br><br> <img id='snail' src='images/snail.jpg' alt='snail'>";
	document.getElementById('factdisplay').innerHTML = fact;
}

document.querySelector('#menu').b.addEventListener("click", displayFact2);

function displayFact2() {
	var fact = "The average cloud can weigh more than a million pounds. This weight comes from the water particles in a cloud. <br><br> <img id='clouds' src='images/clouds.jpg' alt='clouds'>";
	document.getElementById('factdisplay').innerHTML = fact;
}

document.querySelector('#menu').c.addEventListener("click", displayFact3);

function displayFact3() {
	var fact = "Tomatoes are technically fruits but are legally vegetables. In 1893, the United States Supreme court ruled that a tomato must be legally labeled a vegetable. <br><br> <img id='tomatoes' src='images/tomatoes.jpg' alt='tomatoes'>";
	document.getElementById('factdisplay').innerHTML = fact;
}

document.querySelector('#menu').d.addEventListener("click", displayFact4);

function displayFact4() {
	var fact = "In 1947, fruit flies were the first organisms sent into space because their genome is 60% similar to humans. <br><br> <img id='fly' src='images/fly.jpg' alt='fruit fly'>";
	document.getElementById('factdisplay').innerHTML = fact;
}

document.querySelector('#menu').e.addEventListener("click", displayFact5);

function displayFact5() {
	var fact = "Rubies, sapphires and emeralds are all rarer than diamonds in nature. Diamonds are believed to be the rarest due to excellent advertising. <br><br> <img id='gems' src='images/gems.jpg' alt='rubies, sapphires, emeralds and diamonds'>";
	document.getElementById('factdisplay').innerHTML = fact;
}

document.querySelector('#themes').a.addEventListener("click", defaultTheme);

function defaultTheme(){
	var menuButtons = document.querySelector('#menu').getElementsByTagName('input');
	var themeButtons = document.querySelector('#themes').getElementsByTagName('input');
	
	document.querySelector('body').style.backgroundColor = "#A1B5D8";
	document.getElementById('factdisplay').style.backgroundColor = "#FFFCF7";
	document.getElementById('factdisplay').style.color = "#4F517D";
	document.getElementById('factdisplay').style.borderColor = "#4F517D";
	
	for(var i = 0; i < menuButtons.length; i++){
		menuButtons[i].style.backgroundColor = "#9984D4";
		menuButtons[i].style.color = "#F3F9D2";
		menuButtons[i].style.borderColor = "#CAA8F5";
	}
	
	for(var i = 0; i < themeButtons.length; i++){
		themeButtons[i].style.backgroundColor = "#9984D4";
		themeButtons[i].style.color = "#F3F9D2";
		themeButtons[i].style.borderColor = "#CAA8F5";
	}
}

document.querySelector('#themes').b.addEventListener("click", changeTheme);

function changeTheme(){
	var menuButtons = document.querySelector('#menu').getElementsByTagName('input');
	var themeButtons = document.querySelector('#themes').getElementsByTagName('input');
	
	document.querySelector('body').style.backgroundColor = "#381353";
	document.getElementById('factdisplay').style.backgroundColor = "#9139D0";
	document.getElementById('factdisplay').style.color = "#F3F9D2";
	document.getElementById('factdisplay').style.borderColor = "#592E83";
	
	for(var i = 0; i < menuButtons.length; i++){
		menuButtons[i].style.backgroundColor = "#9984D4";
		menuButtons[i].style.color = "#F3F9D2";
		menuButtons[i].style.borderColor = "#CAA8F5";
	}
	
	for(var i = 0; i < themeButtons.length; i++){
		themeButtons[i].style.backgroundColor = "#9984D4";
		themeButtons[i].style.color = "#F3F9D2";
		themeButtons[i].style.borderColor = "#CAA8F5";
	}
}

document.querySelector('#themes').c.addEventListener("click", changeTheme2);

function changeTheme2(){
	var menuButtons = document.querySelector('#menu').getElementsByTagName('input');
	var themeButtons = document.querySelector('#themes').getElementsByTagName('input');
	
	document.querySelector('body').style.backgroundColor = "#381353";
	document.getElementById('factdisplay').style.backgroundColor = "#9139D0";
	document.getElementById('factdisplay').style.color = "#F3F9D2";
	document.getElementById('factdisplay').style.borderColor = "#592E83";
	
	for(var i = 0; i < menuButtons.length; i++){
		menuButtons[i].style.backgroundColor = "#9984D4";
		menuButtons[i].style.color = "#F3F9D2";
		menuButtons[i].style.borderColor = "#CAA8F5";
	}
	
	for(var i = 0; i < themeButtons.length; i++){
		themeButtons[i].style.backgroundColor = "#9984D4";
		themeButtons[i].style.color = "#F3F9D2";
		themeButtons[i].style.borderColor = "#CAA8F5";
	}
}
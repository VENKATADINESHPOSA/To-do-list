var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");
var del1 = document.getElementById("one");



function inputlength() {
	return input.value.length;
}


function createElement() {
		var li = document.createElement("li");
		var div = document.createElement("div");
		var delbutton = document.createElement("button");
		div.classList.add("wrapper");
		delbutton.classList.add("delclass")
		li.classList.add("taskclass")
		ul.appendChild(div);
		div.append(li, delbutton);
		li.appendChild(document.createTextNode(input.value));
		delbutton.innerHTML = "DEL"
		input.value = "";
}

function reactAfterClick() {
	if (inputlength() > 0) {
		createElement();	
	}
}

function reactAfterKeyPress(value) {
	if (inputlength() > 0 && value.which === 13) {
		createElement();
	}
}

function donetask(event) {
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("done");
	}
}

function deleteelement(event) {
	if (event.target.tagName === "BUTTON") {
		event.target.parentElement.remove();
	}
}

function reactAfterUlclick(element) {
	donetask(element);
	deleteelement(element);
}



// ---------------------------------------------------------------------------------------------------
ul.addEventListener("click", reactAfterUlclick);
button.addEventListener("click", reactAfterClick);
input.addEventListener("keypress", reactAfterKeyPress);

















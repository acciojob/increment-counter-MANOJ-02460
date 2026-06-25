//your JS code here. If required.
let count = 0;

let counterElement = document.getElementById("counter");
let incrementElement = document.getElementById("incrementBtn");


function updateDOM() {
	
	counterElement.textContent = count;
	
}

incrementElement.addEventListener("click",()=>{
	alert(count)
	count++;
	updateDOM()
})









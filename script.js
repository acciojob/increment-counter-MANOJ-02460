//your JS code here. If required.
let count = 0;

let counterElement = document.getElementById("counter");
let incrementElement = document.getElementById("incrementBtn");


function updateDOM() {
	counterElement.textContent = count;
	alert(count)
}

incrementElement.addEventListener("click",()=>{
	count++;
	updateDOM()
})









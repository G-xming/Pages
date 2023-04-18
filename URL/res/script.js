function one() {
	// alert(document.location.hash); // Logs: '#Examples'
	const OriginalOne = document.location.hash
	const EditedOne = OriginalOne.slice(1)
	// document.getElementById('x').innerHTML = document.location.hash
	document.getElementById('x').innerHTML = EditedOne
}

function two() {
	const OriginalTwo = document.location.search
	const EditedTwo = OriginalTwo.slice(1)
	document.getElementById('y').innerHTML = EditedTwo
}
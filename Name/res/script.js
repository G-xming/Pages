function one() {
	const Original = document.location.search
	const Edited = Original.slice(1)
	const FName = Edited.split('FName=')[1];
	const FName2 = FName.split('&')[0];
	document.getElementById('x').innerHTML = "First Name: " + FName2
	const LName = Edited.split('LName=')[1];
	document.getElementById('y').innerHTML = "Last Name: " + LName
}

/* 	const Var = "Hello-World"
	const VarEdited = Var.split('-')[1]; */
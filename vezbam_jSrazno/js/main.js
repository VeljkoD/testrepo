var visina = prompt('Koliko zelite da bude visok vas kvadrat ?');
var sirina = prompt('Koliko zelite da bude sirok vas kvadrat ?');
var boja = prompt('kojom osnovnom css bojom zelite da vas kvadrat bude obojen ?');

document.getElementById('kvadrat').style.height = visina + 'px';
document.getElementById('kvadrat').style.width = sirina + 'px';
document.getElementById('kvadrat').style.background = boja;


var uvecajVisinu = prompt('Koliko puta zeite da uvecam visinu ?');
var uvecavanje = document.getElementById('kvadrat').style.height;

document.getElementById('kvadrat').style.height = parseInt(uvecavanje) * uvecajVisinu + 'px';



var bojaPrvog = prompt('Unesite crvenu, zutu ili zelenu boju za gornje svetlo.');

if(bojaPrvog == 'crvenu') {
	document.getElementById('semaforPrvi').style.background = 'red';
} else if(bojaPrvog == 'zelenu') {
	document.getElementById('semaforPrvi').style.background = 'green';
} else if(bojaPrvog == 'zutu') {
	document.getElementById('semaforPrvi').style.background = 'yellow';
} else {
	alert('Ta boja nije podrzana');
}

var bojaDrugog = prompt('Unesite crvenu, zutu ili zelenu boju za srednje svetlo.');

if (bojaDrugog == 'crvenu') {
	document.getElementById('semaforDrugi').style.background = 'red';
}	else if (bojaDrugog == 'zelenu') {
	document.getElementById('semaforDrugi').style.background = 'green';
} 	else if (bojaDrugog == 'zutu') {
	document.getElementById('semaforDrugi').style.background = 'yellow';
}	else {
	alert('Ta boja nije podrzana');
}

var bojaTreceg = prompt('Unesite crvenu, zutu ili zelenu boju za donje svetlo.');

if (bojaTreceg == 'crvenu') {
	document.getElementById('semaforTreci').style.background = 'red';
}	else if (bojaTreceg == 'zelenu') {
	document.getElementById('semaforTreci').style.background = 'green';
}	else if (bojaTreceg == 'zutu') {
	document.getElementById('semaforTreci').style.background = 'yellow';
}	else {
	alert('Ta boja nije podrzana');c
}

var dan = prompt('Unesite ime dana velikim pocetnim slovom.');

	switch (dan) {
		case 'Ponedeljak':
		document.getElementById('dater').innerHTML = dan + ' je 1. dan u nedelji.';
		break;

		case 'Utorak':
		document.getElementById('dater').innerHTML = dan + ' je 2. dan u nedelji.';
		break;

		case 'Sreda':
		document.getElementById('dater').innerHTML = dan + ' je 3. dan u nedelji.';
		break;

		case 'Cetvrtak':
		document.getElementById('dater').innerHTML = dan + ' je 4. dan u nedelji.';
		break;

		case 'Petak':
		document.getElementById('dater').innerHTML = dan + ' je 5. dan u nedelji.';
		break;

		case 'Subota':
		document.getElementById('dater').innerHTML = dan + ' je 6. dan u nedelji.';
		break;

		case 'Nedelja':
		document.getElementById('dater').innerHTML = dan + ' je 7. dan u nedelji.';
		break;
}





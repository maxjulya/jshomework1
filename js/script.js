

function pow(x, n) {
	var result = 1;
	for (var i = 0; i < n; i++) {
		result *= x;
	}

	return result;
}

var x = prompt('Укажите число');
var n = prompt('Укажите стерень');

if (n < 0) {
	alert('Стерень ' + n + ' не поддерживается, введите целую стерень, большую 0');
}
	else {
	alert( pow(x, n) );
	}



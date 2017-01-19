/* ---//ПЕРЕМЕННЫЕ  //ТИПЫ ---

//Number
var myNumber = 5;

// alert(myVariable);
// alert(myVariable);
// alert(myVariable);

//string
var str = 'some text';
alert(str);

// Boolean
var flag = true;
var flag2 = false;

alert(flag);

// nule
var nullVar = null;

//undefined
var notDefinedVar = undefined;

var someVariable;
alert(someVariable);

var type;

type = typeof nullVar ;

alert(type);

//КОНСТАНТА ЕЕ ИЗМЕНЯТЬ НЕЛЬЗЯ!!!

var MY_CONST = 100;  */



// //---ОСНОВНЫЕ ОПЕРАТОРЫ---


// /*  + - / *   дикримент (спереди)  инкримент   > < булинг    */

// result = 3;

// alert(result++);

// /*это ооже что и:
//     alert(result++);
//     result = result + 1;   */

// result += 5;

// /*это ооже что и:
//  alert(result++);
//  result = result + 1;   */

// alert(result);


// var a = 7;
// var a = 8;

// alert( a == b );  //сравнение  
// alert( a != b );  //не равно
// alert( a === b ); //строгое сравнение  


// var user;
// //условный:


// user = prompt('ВВЕДИТЕ СВОЕ ИМЯ');

// if (user == 'Юля') {
// 	alert('Привет Юлечька!');
// } else {
// 	alert('Я тебя не знаю');
// }


// //тернарный:

// (user == 'Юля') ? alert('Привет Юлечька!') : alert('Я тебя не знаю');;


 //  //---МАССИВЫ---

  // var arr = [1, true, '3 text',4];

  // console.log('arr', arr);
  //  console.log('arr', arr[arr.length] = 5);


 //  // --свойтва массивов--

 //  // -lenght

 //  console.log('arr.length', arr.length);  

 //  // -push -добавить элемент в конец

 //  arr.push('5')
	// console.log('arr', arr);
	// console.log('arr.length', arr.length);

	// // -pop -удалить последний элемент

	// arr.pop();
	// console.log("arr.pop();");
	// console.log('arr', arr);

	// var removedItem = arr.pop();

	// 	console.log('removedItem', removedItem);
	// 		console.log('arr', arr);

	// // -unshift -добавляет элемент в начало массива
	// // -shift -удаляет элемент с начала массива

	// arr.unshift('5');
	// console.log("arr.unshift('5');");
	// console.log('arr', arr);

	// arr.shift();
	// console.log("arr.shift();");
	// console.log('arr', arr); 

	// arr[0] = '10 element'   //-переопределили первый элемент
	// console.log('arr', arr); 


//  //---ЦИКЛЫ---


// var i = 0;

// while (i < 4){
// 	alert('test');
// 	console.log('i =', i);
// 	i++;
// }                     //-сначало проверк потом действие

// do {
// 	console.log('i =', i);
// 	alert('hello' +i);
// 	i++;
// } while (i < 4);
// console.log('end of cicle');  //-сначало выполняется действие а потом проверка


// for (var i = 0; i < 4; i++) {
// 	console.log('i =', i);
// }
// console.log('end of cicle');  // -самый распостроненный цикл

// var arr = ['text', 1, 4, 'qvit'];
// console.log('arr', arr); 
 
//  for (var i = 0; i < arr.length ; i++) {
// 	console.log('arr[i] =', arr[i]);
//  }   

  																	// - пробежка цикла по масиву
// var arr = [1, true, '3 text',4];

// for (var i = 0; i < arr.length ; i++) {
// 	debugger;
// 	console.log('arr[i] =', arr[i]);
//  }      															// - debugger



//   //----ОБЬЕКТЫ---


//   var arr = ['1', true,'false'];	//это масив

//   var obj = {
//   	0: '1',
//   	1: true,
//   	2: 'false'
//   }										//это обьект тоже самое


// var student = {
// 	age: 20 ,
// 	name: 'Vasya',
// 	'my second name': 'Pupkin'
// }
// console.log(student.age);

// console.log(student['my second name']);  //-вывод нестандартного ключа

// var key = 'my second name';  // записываем в переменную

// console.log(student[key]);

// if (key in student) {
// 	console.log(student[key]);
// }
//  else {
// 	console.log('no key');
// }															// проверка наличия ключа 'my second name' в обьекте


// var student = {
// 	age: 20 ,
// 	name: 'Vasya',
// 	'my second name': 'Pupkin'
// }

// for (var key in student) {
// 	console.log('key', key);
// 	console.log('student[key]', student[key]);
// 	console.log('___________');
// }																		//  пробежка по всем полям обьекта (получаем ключи и их значение)


// ---- СТАНДАРТНЫЕ МЕТОДЫ МАССИВОВ, СТРОК, ЧИСЕЛ----


// var str = 'test';

// console.log(str.indexOf('st'));  //дает номер с которого начинается s

// str = str.replace('e','A');
// console.log(str);							//замено подстроки

// var str = 'TEST';

// str = str.toLowerCase();
// console.log(str);									//перевод в нижний регистр

// str = str.toUpperCase();
// console.log(str);									//перевод в верхний регистр

// console.log(str.substring(1, 3));	   //выбор с 1 по 2 3й не включает

// var str = '12';
// var num = +str;						 					//+str перевод строки в число

// console.log(typeof str);					//проверки типа
// console.log(typeof num); 			

// console.log(num);   				//проверки на число


// var str = '12px';
// var num = +str;

// var flag = isNaN(num);

// if (flag) {
// 	console.log('not a number');
// }	else {
// 	console.log('is a number');
// }																// проверка нот е намбер NaN

// var str = '12';
// var num = parseInt(str);    // parseInt(); выделяет в строке число до первой буквы
// console.log('num', num);


// var str = '12px';
// var num = parseInt(str);    
// console.log('num=', num);

// var newStr = num.toString();		// toString() переводит число в строку 

// console.log('newStr=', newStr);
// console.log(typeof newStr);

// способ попороще var newStr = num + ''; 
																																

// var newNumber = 12.6;

// var roundResult = Math.floor(newNumber);   // Math.floor() округление к меньшему
// console.log(roundResult);	


// var newNumber = 12.6;

// var roundResult = Math.ceil(newNumber);   // Math.floor() округление к большему
// console.log(roundResult);	


// var newNumber = 12.3;
// var roundResult = Math.round(newNumber);   // Math.floor() округление класически
// console.log(roundResult);			


// var str = '1,2,test,4';

// var arr = str.split(',');  // перевод строки в масив
// console.log(arr);
// console.log(typeof arr);


// var arr = [1, 2, 3, 4, 'test'];

// var str = arr.join();			// перевод масива в строку
// console.log(str);

//  var str = arr.join('=');			// добавление символов между элементами
// console.log(str);

// var newArr = str.split('=');  //убираем разделители и переводим в масив
// console.log(newArr);

// var newArr = str.split('');  //разбивает каждый символ в масив
// console.log(newArr);


// var arr = [1, 6, 3, 7, 'test'];

// var newArr = arr.sort();  			//сортировка
// console.log(newArr);

// arr.push('test string');				//добавление в конец
// arr.pup();											//удаление последнего элемента
// console.log(arr);



//  ----ФУНКЦИИ----

// function sayHi() {
// 	alert('hello');
// } 

// sayHi();    					// вызов функции

// console.log(sayHi);   //вывод в консоле

// function calculate(a,b) {    // добавляем аргументы
// 	console.log(a + b);
// } 
// calculate(2,6);


// function calculate(a,b) { 			
//   var test = 'test';							//добавляем переменную
// 	console.log(a + b + test);
// } 
// calculate(2,6);

// var abc = 'global abc';

// function calculate(a,b) { 
// 	var abc = 'local abc';	
//   var test = 'test';							// js ищет с начала локальную переменную и выводит ее -local abc- 
// 	console.log(a + b + abc);
// } 
// calculate(2,6);


// var abc = 'global abc';

// function calculate(a,b,c) { 
// 	var abc = 'local abc';	
// 	console.log('arguments.length =', arguments.length);		// количество переданых параметров  
//   var test = 'test';							
// 	console.log(a + b + abc);
// } 
// calculate(2,6, 'third parametr');


// function calculate(a,b,c) { 
// 	var result;
// 	result = a + b + c;
// 	return result;     									//останавливает функцию  и выдает ее результат
// } 

// var calculationResult = calculate(2,6,5);
// console.log('calculationResult = ', calculationResult);


// var a = Math.pow(2,3);
// var b = Math.pow(2,0);
// var c = Math.pow(0,3);
// var d = Math.pow(0,0);



// function baseToDegree(base, degree) {
// 	if ((base === 0) && (degree !==0)) {
// 		return 0;
// 	}
// 	var tmp =1;
// 	for (var i = 0; i < degree; i++) {
// 		tmp *= base; // tmp = tmp * base;
// 	}
// 	return tmp;
// } 

// console.log(a === baseToDegree(2,3));
// console.log(b === baseToDegree(2,0));
// console.log(c === baseToDegree(0,3));
// console.log(d === baseToDegree(0,0));

   
// HOMEWORK 1,2----------------певое задание------------------

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



// ----------------второе задание------------------

// var arr=["Юра","Саша","Маша","Даша","Степаша" ];
 
// var Word=prompt("Введите имя"); 
 
// for (var i=0; i < arr.length; ++i) 
// 	if (arr[i]==Word) 
// 	{ alert( Word + ", вы успешно вошли"); break; } 
// 	if (i==arr.length) alert("Имя не найдено");



//--------------//This ----------------


// var dog = {
// 	name: 'Jack',
// 	age: 3,
// 	bones: 50,
// 	woof: function () {
// 		alert('woof!');
// 	},
// 	eat: function () {
// 		dog.bones--;
// 	}
// }

// dog.woof();
// dog.eat();
// dog.eat();  //два раза поели

// console.log(dog);  // проверяем костей будет 47

// //для этих методов woof и eat контекст ссполнения - dog, его можно поменять на this:

// var dog = {
// 	name: 'Jack',
// 	age: 3,
// 	bones: 50,
// 	woof: function () {
// 		console.log('this ->', this);
// 	},
// 	eat: function () {
// 		this.bones--;
// 	}
// }

// dog.eat();
// dog.eat();
// dog.woof();

// var obj = {a: 1};       

// var increment = function(obj ) { obj.a++ }        

// increment(obj);        

// console.log(obj.a);



//---------DOM поиск элементов----------------


//console.log(document);
// console.log(document.documentElement);
// console.log(document.body);

//console.log(document.childNodes);

//console.log(document.body.firstChild);

//console.log(document.body.lastChild);

// var element = document.getElementById('box');
// console.log(element);

// var element = document.getElementsByTagName('li');
// console.log(element);

// var element = document.getElementsByClassName('menu-item');
// console.log(element);

// var element = document.querySelector('.menu-item');  //ищится 1-й элемент и возвращается
// console.log(element);

// var element = document.querySelectorAll('.menu-item'); 
// console.log(element);  																		// ищет все элементы


//---------Редактирование элементов----------------


// var element = document.querySelectorAll('.menu-item a'); 
// console.log('element[2].innerHTML', element[2].innerHTML);  

// var link = element[2];

// link.innerHTML = '<strong>this</strong>  is text';

// console.log(link.getAttribute('href') );      // получить значение атрибута href

// link.setAttribute('href', 'http://yandex.com');  // меняем значение элмента href

// link.setAttribute('href', '');  // убрать атрибут
// link.removeAttribute('href');  // убрать атрибут

// console.log(link.className);  

// link.className = link.className + ' js-class'  //добавляем класс

// console.log(link.classList);									//более продвинутый способ

// link.classList.add('js-second-class');   //добавляем методои add
// console.log(link.classList);

// link.classList.remove('js-second-class');   //удаляем методои remove
// console.log(link.classList);

// link.style.backgroundColor = 'green';   //меняем стиль
// console.log(link.classList);



//---------DOM. Создание элементов, вставка в документ---------------


// var element = document.createElement('div');  //создаем элемент
// element.classList.add('box');									//добавляем класс
// element.innerHTML = 'dynamically created element';  //задаем ему текст
//
// var wrapper = document.querySelector('.wrapper');		//ищем родителя div
// wrapper.appendChild(element);  											//вставляем туда element (div) в конец
//
//
// wrapper.insertBefore(element, wrapper.children[0]);   //вставляем перед первым потомком[0] wrapper
//
//
// var list = wrapper.querySelector('ul'); //удаляем li для этого ищем его родителя ul
// wrapper.removeChild(list);    					//удаляем
//
// wrapper.replaceChild(element, box);


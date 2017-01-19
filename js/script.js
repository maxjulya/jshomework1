

var arr=["Юра","Саша","Маша","Даша","Степаша" ];
 
var Word=prompt("Введите имя"); 
 
for (var i=0; i < arr.length; ++i) 
	if (arr[i]==Word) 
	{ alert( Word + ", вы успешно вошли"); break; } 
	if (i==arr.length) alert("Имя не найдено");



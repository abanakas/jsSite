var today = new Date();
var d = today.getDate();
var m = today.getMonth() + 1; //January is 0
var yyyy = today.getFullYear();

var today = d + '/' + m + '/' + yyyy;

document.write(today);


var pass = 60;
var score = 88;

var passed = score >= pass;

var el = document.getElementById('result');
el.textContent = 'Result:' + passed;
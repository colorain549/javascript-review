var num = 9.876;
var str = 'hi'
document.write('<code>isNaN(num)</code>(数字) : ' + isNaN(num) + '<br />')
document.write('<code>isNaN(str)</code>(非数字) : ' + isNaN(str) + '<br />')
document.write('<code>num.toFixed(2)</code> : ' + num.toFixed(2) + '<br />')
document.write('<code>num.toPrecision()</code>(返回str) : ' + num.toPrecision() + '<br />')
document.write('<code>num.toExponential()</code> : ' + num.toExponential() + '<br />')
var  revString, stringMinusOne, lastLetter, ourString = prompt('Напишите пару слов', "");
var lastElement = function (ourString) {
    lastLetter = ourString[ourString.length-1];
    alert(lastLetter);
}
lastElement(ourString);

var minusLastElement = function (ourString) {
    stringMinusOne = ourString.slice(0, ourString.length-1) ;
    alert(stringMinusOne);
}
minusLastElement(ourString);

var reversString = function(ourString)
{
   var arr=ourString.split('');
    for (var i=ourString.length; i<1; i=i-1)
    {arr[i] = ourString[i]}
    arr=arr.reverse('');
    revString=arr.join('')
    alert(revString)
}
reversString(ourString);


var spaceDelete = function(ourString)
{
    
var spaceLess = ourString.replace(/(^\s+|\s+$| {2,})/g,' ');
    
    alert(spaceLess)
}
spaceDelete(ourString);
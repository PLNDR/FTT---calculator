function countTo(n)
{
    for (var i = 0; i < n; i+=5)
    {
        console.info(i);
    }
}

countTo(5);

function addNumbers(a, b) {
    console.info('first number: ' + a);
    console.info('second number: ' + b);

    for (; b>0;b--) {
        a++;
        console.info(a + ' a ' + (b) + ' b ');
    }
}

var count = addNumbers(5, 3);
console.log(count);
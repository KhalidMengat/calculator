const calc = [{
    nb: 'ce',
},
{
    nb: 'c',
},
{
    nb: 'sin',
},
{
    nb: 'cos',
},
{
    nb: '(',
},
{
    nb: ')',
},
{
    nb: 'x²',
},
{
    nb: '%',
},
{
    nb: '7',
},
{
    nb: '8',
},
{
    nb: '9',
},
{
    nb: '/',
},
{
    nb: '4',
},
{
    nb: '5',
},
{
    nb: '6',
},
{
    nb: '*',
},
{
    nb: '1',
},
{
    nb: '2',
},
{
    nb: '3',
},
{
    nb: '-',
},
{
    nb: '.',
},
{
    nb: '0',
},
{
    nb: '=',
},
{
    nb: '+',
},
]

document.querySelector('.container').innerHTML = '';
const mainContainer = document.querySelector('.container');

const result = document.createElement('div');
result.className = 'header';
mainContainer.appendChild(result);

function sin() {

return Math.sin(result.textContent);

}

function cos() {

return Math.cos(result.textContent);

}


function safeEval(str) {

return Function('return ' + str)()

}

for (let element of calc) {

const bouton = document.createElement('button');

bouton.className = ('buttons');
bouton.textContent = element.nb;
mainContainer.appendChild(bouton);

bouton.addEventListener(

    'click',
    function () {

        if (element.nb == 'c') {

            result.textContent = '';

        } else if (element.nb == 'ce') {

            result.textContent = '';

        } else if (element.nb == '=') {

            let rep = safeEval(result.textContent);

            result.textContent = rep;

        } else {

            result.textContent = result.textContent + element.nb;

        }

    }

)

}
const calculatrices = [{
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

const resultat = document.createElement('div');
resultat.className = 'aff';
mainContainer.appendChild(resultat);


const historique = document.createElement('div');
historique.className = 'history';
resultat.appendChild(historique);

let history

function creation() 
{
    const p = document.createElement('p')
    p.textContent = history
    historique.appendChild(p)
}



const result = document.createElement('div');
result.className = 'actual-result';
resultat.appendChild(result);

function safeEval(str) 
{
    return Function('return ' + str)()
}

function exposant() 
{
    return Math.pow(result.textContent, 2)
}

function pourcentage() 
{
    return (result.textContent/100)
}

function sinus() 
{
    return Math.sin(result.textContent)
}

function cosinus() 
{
    return Math.cos(result.textContent)
}

for (let element of calculatrices) {

    const buttons = document.createElement('button');


    if (element.affichage) {
        buttons.textContent = element.affichage;
    } else {
        buttons.textContent = element.nb;
    }
        buttons.className = element.class;
        mainContainer.appendChild(buttons);
        buttons.addEventListener("click", function () {


        if (element.nb == 'c') 
        {
            result.textContent = ' ';
            historique.textContent = ' ';

        } else if (element.nb == 'ce') 
        {
            result.textContent = ' ';
        }

        else if (element.nb == '=') 
        {
            history = result.textContent;
            let calcul = safeEval(result.textContent);
            result.textContent = calcul;
            history = history + '=' + calcul;
            creation(history);
            result.textContent = ' ';
        } 
        else if (element.nb == 'x²') 
        {
            history =result.textContent +'²' ;
            let exposant = exposant();
            result.textContent = exposant;
            history = history + '=' + exposant;
            creation(history);
            result.textContent = ' ';
        } 
        else if (element.nb == '%') 
        {
            history =result.textContent +'%' ;
            let pourcent = pourcentage();
            result.textContent = pourcent;
            history = history + '=' + pourcent;
            creation(history);
            result.textContent = ' ';
        }
        else if (element.nb == 'sin') 
        {
            history = 'sin('+ result.textContent ;
            let sin = sinus(result.textContent);
            result.textContent = sin;
            history = history + '=' + sin;
            creation(history);
            result.textContent = ' ';
        } 
        else if (element.nb == 'cos') 
        {
            history = 'cos('+ result.textContent ;
            let cos = cosinus(result.textContent);
            result.textContent = cos;
            history = history + '=' + cos;
            creation(history);
            result.textContent = ' ';
        } 
        else {
            result.textContent = result.textContent + element.nb;
        }
    })

}
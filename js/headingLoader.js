function errorCatch(test, errorMessage) {
    try {
        test();
    } catch (e) {
        return console.error(e + '\n' + errorMessage);
    }
}

var heading = document.getElementsByTagName('header');
let title = document.createElement('h1');
title.textContent = 'Chickennuggetprime'; // Alias: PrimeNuggets, Xavier McIntosh
let tStyle = title.style;
tStyle.position = 'sticky';
tStyle.alignContent = 'center';
tStyle.textAlign = 'center';
tStyle.fontSize = '3em';
errorCatch(() => heading[0].appendChild(title), "Failed to append title to heading element\n" + JSON.stringify(heading) + '\n' + JSON.stringify(title));
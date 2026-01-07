function errorCatch(test, errorMessage) {
    try {
        test();
    } catch (e) {
        return console.error(e + '\n' + errorMessage);
    }
}

var heading = document.getElementsByTagName('header');
let title = document.createElement('h1');
title.textContent = 'Xavier McIntosh'; // Alias: PrimeNuggets, Chickennuggetprime
let subtitle = document.createElement('h2');
subtitle.textContent = 'Game Developer, Programmer, Systems Designer';
errorCatch(() => heading[0].appendChild(title), "Failed to append title to heading element\n" + JSON.stringify(heading) + '\n' + JSON.stringify(title));
errorCatch(() => heading[0].appendChild(subtitle), "Failed to append subtitle to heading element\n" + JSON.stringify(heading) + '\n' + JSON.stringify(subtitle));
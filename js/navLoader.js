function safeAppend(target, child, errorMessage) {
    try {
        target.appendChild(child);
    } catch (e) {
        console.error(e + '\n' + errorMessage);
    }
}

function normalizePath(path) {
    return path.replace(/\\/g, '/').replace(/\/+$/, '/').toLowerCase();
}

function isHomeMatch(currentPath, targetPath) {
    if (!targetPath.endsWith('/index.html')) return false;
    var targetDir = normalizePath(targetPath.replace(/index\.html$/, ''));
    return currentPath === targetDir;
}

function loadNavigation() {
    var nav = document.getElementById('main-nav');
    if (!nav) return;

    var inPagesDir = window.location.pathname.toLowerCase().indexOf('/pages/') !== -1;
    var basePath = inPagesDir ? '..' : '.';

    var links = [
        { label: 'Home', href: basePath + '/index.html' },
        { label: 'Digital Works', href: basePath + '/pages/digital.html' },
        { label: 'Analog Works', href: basePath + '/pages/analog.html' }
    ];

    var currentPath = normalizePath(window.location.pathname || '/');
    var navContainer = document.createElement('div');
    navContainer.className = 'nav-links';

    links.forEach(function (link) {
        var anchor = document.createElement('a');
        anchor.href = link.href;
        anchor.textContent = link.label;
        anchor.className = 'nav-link';

        var targetPath = normalizePath(new URL(link.href, window.location.href).pathname);
        var isCurrent = currentPath === targetPath || isHomeMatch(currentPath, targetPath);
        if (isCurrent) anchor.classList.add('current-page');

        safeAppend(navContainer, anchor, 'Failed to append navigation link: ' + link.label);
    });

    nav.textContent = '';
    safeAppend(nav, navContainer, 'Failed to append navigation container');
}

document.addEventListener('DOMContentLoaded', loadNavigation);

(function () {
    const bar = document.createElement('div');
    bar.id = 'asbplayer-floating-bar';
    bar.style.position = 'fixed';
    bar.style.bottom = '20px';
    bar.style.right = '20px';
    bar.style.zIndex = '999999';
    bar.style.padding = '10px 15px';
    bar.style.backgroundColor = 'rgba(0,0,0,0.7)';
    bar.style.color = 'white';
    bar.style.fontSize = '14px';
    bar.style.borderRadius = '6px';
    bar.style.cursor = 'pointer';
    bar.innerText = 'Mine subtitle';

    bar.addEventListener('click', () => {
        chrome.runtime.sendMessage({ command: 'mine-current-subtitle' });
    });

    document.body.appendChild(bar);
})();

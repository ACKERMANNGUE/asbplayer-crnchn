(function () {
    console.log("🧱 Floating bar script chargé");

    const existing = document.getElementById('asbplayer-floating-bar');
    if (existing) {
        console.warn("⚠️ Barre flottante déjà injectée");
        return;
    }

    const bar = document.createElement('div');
    bar.id = 'asbplayer-floating-bar';
    bar.style.position = 'fixed';
    bar.style.bottom = '20px';
    bar.style.right = '20px';
    bar.style.zIndex = '999999';
    bar.style.padding = '10px 15px';
    bar.style.backgroundColor = 'rgba(0,0,0,0.8)';
    bar.style.color = 'white';
    bar.style.fontSize = '14px';
    bar.style.borderRadius = '6px';
    bar.style.cursor = 'pointer';
    bar.style.userSelect = 'none';
    bar.innerText = '📌 Mine subtitle';

    bar.addEventListener('click', () => {
        console.log('🖱️ Click détecté sur la barre flottante');

        chrome.runtime.sendMessage({ command: 'mine-current-subtitle' }, (response) => {
            if (chrome.runtime.lastError) {
                console.error('❌ Erreur à l’envoi de la commande :', chrome.runtime.lastError.message);
            } else {
                console.log('✅ Commande envoyée avec succès', response);
            }
        });
    });

    document.body.appendChild(bar);
    console.log("✅ Barre flottante injectée !");
})();

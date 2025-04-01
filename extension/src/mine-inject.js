// mine-inject.js
if (typeof window.mineSubtitleNow === 'function') {
    window.mineSubtitleNow();
} else {
    console.error('❌ window.mineSubtitleNow is not defined');
}

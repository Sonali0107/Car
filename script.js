// var audio = document.createElement('audio');
// audio.setAttribute('src','sound.mp3');
// audio.loop = true;
// audio.play().catch(error => {
//     console.error('Audio play failed:', error);
// })

window.addEventListener('DOMContentLoaded', (event) => {
    const audio = document.getElementById('audio');
    const prompt = document.getElementById('prompt');

    document.getElementById('startButton').addEventListener('click', () => {
        audio.play().then(() => {
            console.log('Audio is playing.');
            prompt.style.display = 'none'; // Hide the prompt after interaction.
        }).catch(error => {
            console.error('Audio play failed:', error);
        });
    });
});
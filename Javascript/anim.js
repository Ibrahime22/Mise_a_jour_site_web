document.getElementById('animated-image').addEventListener('click', function() {
    this.style.animationPlayState = this.style.animationPlayState === 'paused' ? 'running' : 'paused';
});

window.addEventListener('scroll', () => {
    const velocity = 0.2;
    const position = window.pageYOffset;
    const element = document.getElementById('parallax-container');
    
    element.style.backgroundPosition = `0 ${-Math.round(position * velocity)}px`;
});

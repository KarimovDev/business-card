window.addEventListener('scroll', () => {
    const velocity = 0.2;
    const position = window.pageYOffset;
    const element = document.getElementsByTagName('html')[0];
    
    element.style.backgroundPosition = `0 ${-Math.round(position * velocity)}px`;
});

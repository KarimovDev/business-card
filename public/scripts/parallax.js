const calculateBackgroundPosition = () => {
  const velocity = 0.3;
  const position = window.scrollY;
  const element = document.getElementsByTagName("html")[0];

  element.style.backgroundPosition = `0 ${-Math.round(position * velocity)}px`;
};

window.addEventListener("scroll", () => calculateBackgroundPosition());

calculateBackgroundPosition();

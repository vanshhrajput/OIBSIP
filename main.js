var typed = new Typed('.typer', {
    strings: ['Web Developer.','Designer.','Programmer.'],
    typeSpeed: 100,
    backspeed:100,
    loop:true
  });
  let valueNumbers = document.querySelectorAll(".exp-number");
  let interval = 6000;
  valueNumbers.forEach((valueNumber) => {
    let startValue = 0;
    let endValue = parseInt(valueNumber.getAttribute("data-val"));
    let duration = Math.floor(interval / (endValue - startValue));
    let counter = setInterval(() => {
      startValue += 1;
      valueNumber.textContent = startValue;
      if (startValue == endValue) {
        clearInterval(counter);
      }
    }, duration);
  });
  
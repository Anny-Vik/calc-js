let a = ''; //first number
let b = ''; //second number
let sign = ''; //operation mark
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '*', '/', '%'];

//output
const output = document.querySelector('.calc-screen p');

function clearAll () {
  a = ''; //first number and result
  b = ''; //second number
  sign = ''; //mark
  finish = false;
  output.textContent = 0;
};

document.querySelector('.ac').onclick = clearAll;
document.querySelector('.buttons').onclick = (Event) => {
  //no button pressed
  if(!Event.target.classList.contains('button')) return;
  //button ClearAll pressed
  if(Event.target.classList.contains('ac')) return;
  output.textContent = '';

  //pressed buttons
  const key = Event.target.textContent;

  // if pressed number button 0-9 or dot
  if(digit.includes(key)) {
    if(b === '' && sign === '') {
    a += key;

    output.textContent = a;
    }
    else if (a!== '' && b!== '' && finish) {
      b = key;
      finish = false;
      output.textContent = b;
    }
    else {
      b += key;
      output.textContent = b;
    }
    console.table(a, b, sign);
    return;
  };

//if pressed mark +/-
if(action.includes(key)) {
  sign = key;
  output.textContent = sign;
  console.log(a, b, sign);
}
// pressed =
if (key === '=') {
  if (b === '') b = a;
  switch (sign) {
    case "+":
    a = (+a) + (+b)
      break;
      case "-":
    a = a - b;
      break;
      case "*":
    a = a * b;
      break;
      case "/":
        if (b === '0') {
          output.textContent = 'NaN';
          a = '';
          b = '';
          sign = '';
        }
        a = a / b;
      break;
      case "%":
        a = a * b / 100;
        break;
}
finish = true;
output.textContent = a;
console.table(a, b, sign);
}
};

// factorial
function factorial (a) {
  var x = 1;
  for( let i = 1; i <= a; i = i + 1) {
    x *= i;
  }
  return x;
};

//maximum numbers lenght
const observer = new MutationObserver(function(mutations) {
  if (a.toString().length > 10) {
    output.style.fontSize = 400 / a.toString().length + 'px';
    if (b.toString().length > 12) {
      output.style.fontSize = 400 / b.toString().length + 'px';
    }
  } else if (b.toString().length > 10) {
    output.style.fontSize = 400 / b.toString().length + 'px';
  } else {
    output.style.fontSize = '44px';
}
});
observer.observe(output, {childList: true});

if (key === '.' && a.includes('.')) {

  a += '';

  console.log(a, b, sign);

  out.textContent = a;

} else {

  a += key;

  console.log(a, b, sign);

  out.textContent = a;

}

let button = document.querySelectorAll('.bt');
let inp = document.querySelector('input');
for (let b of button) {
  b.addEventListener('click', () => {
    let num = b.textContent;
    let pre = inp.value.charAt(inp.value.length - 1);
    if (num == 00 || num == 0 || num >= 1 || num <= 9 || num == '.' || num == "+" || num == '-' || num == '*' || num == '/') {
      inp.value += num;
      let c = countChar(inp.value, '.');
      if (c >= 2) {
        inp.value = inp.value.slice(0, -1)
      } else {
        if (inp.value.length >= 16) {
          inp.value = inp.value.slice(0, -1)
          if (num == "+" || num == '-' || num == '*' || num == '/') {
            inp.value = inp.value.slice(0, -1)
          }
        } else {
          if (num == "+" || num == '-' || num == '*' || num == '/') {
            if (pre == "+" || pre == '-' || pre == '*' || pre == '/') {
              console.log(pre, num);
              inp.value = inp.value.slice(0, -1)
            }
          }
        }
      }
    } else if (num == 'AC') {
      inp.value = ""
    } else if (num == '↲') {
      inp.value = inp.value.slice(0, -1)
    } else if (num == '=') {
      inp.value = eval(inp.value)
    }
    else if(num=='%')
    {
      inp.value = eval(inp.value)/100
    }
  })
}

function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

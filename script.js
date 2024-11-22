let flag = false;
let nav = document.querySelector('.van')
let line = document.querySelectorAll('.line')
function switch1() {
  if (flag == false) {
    nav.classList.add('show');
    line[0].classList.add('alter-1');
    line[1].classList.add('alter-2');
    line[2].classList.add('alter-3');
    flag = true;
  }
  else if (flag == true) {
    nav.classList.remove('show');
    line[0].classList.remove('alter-1');
    line[1].classList.remove('alter-2');
    line[2].classList.remove('alter-3');
    flag = false;
  }
}
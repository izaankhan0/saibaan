let flag = false;
let nav = document.querySelector('.van')
let line = document.querySelectorAll('.line')
let sections = document.querySelectorAll('.section')
function switch1() {
  if (flag == false) {
    nav.classList.add('show');
    line[0].classList.add('alter-1');
    line[1].classList.add('alter-2');
    line[2].classList.add('alter-3');
    sections[0].classList.add('blur');
    sections[1].classList.add('blur');
    sections[2].classList.add('blur');
    sections[3].classList.add('blur');
    sections[4].classList.add('blur');
    flag = true;
  }
  else if (flag == true) {
    nav.classList.remove('show');
    line[0].classList.remove('alter-1');
    line[1].classList.remove('alter-2');
    line[2].classList.remove('alter-3');
    sections[0].classList.remove('blur');
    sections[1].classList.remove('blur');
    sections[2].classList.remove('blur');
    sections[3].classList.remove('blur');
    sections[4].classList.remove('blur');
    flag = false;
  }
}


let flip = 0;
function drop() {
  if(flip === 0){
    document.querySelector('.dropdown-content').classList.add('content-show');
    flip = 1;
  }else{
    document.querySelector('.dropdown-content').classList.remove('content-show');
    flip = 0;
  }


}
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

let navBtn = document.querySelectorAll('.dropdown-content');
let flip = 0;
function drop() {
  if(flip === 0){
    navBtn[0].classList.add('content-show');
    navBtn[1].classList.add('content-show');
    setTimeout(() => {
      navBtn[0].classList.add('nav-anim');
    }, 1);
    setTimeout(() => {
      navBtn[1].classList.add('nav-anim');
    }, 1);
    flip = 1;
  }else{
    navBtn[0].classList.remove('nav-anim');
    navBtn[1].classList.remove('nav-anim');

    setTimeout(() => {
      navBtn[0].classList.remove('content-show');
      navBtn[1].classList.remove('content-show');
    }, 100);
    flip = 0;
  }


}

const location = { lat: -34.397, lng: 150.644 };
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 8,
          center: location,
          mapId: "e1378813f9e5db65", // Optional: Custom Map ID
        });
        new google.maps.Marker({
          position: location,
          map: map,
        });
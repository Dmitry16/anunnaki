
// let rightPosition = img_arr[i].getBoundingClientRect().right;
// let imgWidth = img_arr[i].getBoundingClientRect().width;
//
// img_arr[i].style.right = (rightPosition - imgWidth*2) + 'px';

// let hero = document.querySelector('.hero');
// let btn = document.createElement('button');
// hero.appendChild(btn);
//
// btn.addEventListener('click',function() {
//   sl();
// });

function al() {

}

function sl() {
  timer = window.setTimeout(al, 5000);
}

let img_arr = document.getElementsByClassName('slider-img');

//if (img_arr[i].className === 'slider-img out') {
let i=0,
    visible= false;

let timer = window.setInterval(function() {

    if (i < img_arr.length && visible === false) {
      img_arr[i].style.opacity = 1;
      i++;

    } else if (i === img_arr.length && visible === false) {
      visible = true;
      i = 0;

    } else if (i < img_arr.length && visible === true) {
      for(let j=0; j < img_arr.length; j++) {
        img_arr[i].style.opacity = 0;
        i++;
      }
    } else if (i === img_arr.length && visible === true) {
      visible = false;
      i = 0;
    }

  }, 2000);


//}


// var j = -250;
// while (j<0) {
//   window.setTimeout(function() {
//     img_arr[i].style.right = j + 'px';
//   }, 1);
//   j+=0.1;
// }

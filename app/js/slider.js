!function() {

  let img_arr = document.getElementsByClassName('slider-img');

  //if (img_arr[i].className === 'slider-img out') {
  let i=1,
      visible= false;

  let timer = window.setInterval(function() {

      if (i < img_arr.length && visible === false) {
        img_arr[i].style.opacity = 1;
        i++;

      } else if (i === img_arr.length && visible === false) {
        visible = true;
        i = 1;

      } else if (i < img_arr.length && visible === true) {
        for(let j=1; j < img_arr.length; j++) {
          img_arr[i].style.opacity = 0;
          i++;
        }
      } else if (i === img_arr.length && visible === true) {
        visible = false;
        i = 1;
      }

    }, 2000);

}();

!function () {

const modal = document.getElementById('modal');
const modalImg = document.createElement("img");
let prevImg,
    nextImg,
    img;
let show = true;

function showPrevImg() {
  modal.removeChild(modalImg);
  modalImg.setAttribute("src", prevImg.getAttribute("src"));
  modalImg.setAttribute("class", "front-pics active");
  modal.appendChild(modalImg);
  getPrevImg(prevImg);
  getNextImg(prevImg);
  console.log(prevImg);
}

function showNextImg() {
  modal.removeChild(modalImg);
  modalImg.setAttribute("src", nextImg.getAttribute("src"));
  modalImg.setAttribute("class", "front-pics active");
  modal.appendChild(modalImg);
  getPrevImg(nextImg);
  getNextImg(nextImg);
  console.log(nextImg);
}

function getPrevImg(img) {
  if(img.parentNode.previousElementSibling !== null) {
    return prevImg = img.parentNode.previousElementSibling.firstElementChild;
  } else {
    hideModal();
  }
}
function getNextImg(img) {
  if(img.parentNode.nextElementSibling !== null) {
    return nextImg = img.parentNode.nextElementSibling.firstElementChild;
  } else if (img.parentNode.nextElementSibling === null && show === true) {
    show = false;
    return nextImg = img;
  } else {

    hideModal();
  }
}

function showModal() {
  show = true;
  modalImg.setAttribute("src", img.getAttribute("src"));
  modalImg.setAttribute("class", "front-pics active");
  modal.appendChild(modalImg);
  modal.style.opacity = 1;
  modal.style.zIndex = 9;
  prevImg = getPrevImg(img);
  nextImg = getNextImg(img);
  console.log(img);
}

function hideModal() {
  modal.style.opacity = 0;
  modal.style.zIndex = -1;
  modal.removeChild(modalImg);
}

document.addEventListener('click', function(e) {
    if(e.target.tagName === 'IMG' && e.target.className==="front-pics" ) {
      img = e.target;
      showModal();
    }
    if(e.target.className === "close") {
      hideModal();
    }
  if(e.target.className === "direct left" || e.target.className === "direct right") {

    if(e.target.id === "left") {
      showPrevImg();
    } else if(e.target.id === "right") {
      showNextImg();
    }
  }
});

}();

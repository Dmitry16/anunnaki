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

// !function () {
//
//   function sliderNav(id, direction, state) {
//     if(state === "on") {
//       const nav = document.createElement('a');
//       nav.className = "direct on";
//       nav.id = id;
//       nav.textContent = direction;
//       return nav;
//     } else {
//       let nav = document.getElementById(id);
//       nav.parentNode.removeChild(nav);
//     }
//   }
//
const modal = document.getElementById('modal');
function showModal() {
    modal.style.opacity = 1;
    modal.style.zIndex = 9;
}
function hideModal() {
    modal.style.opacity = 0;
    modal.style.zIndex = -1;
}
document.addEventListener('click', function(e) {
    let img = e.target;
    if(img.tagName === 'IMG' && img.className==="front-pics" ) {
      showModal();
    }
    if(e.target.className === "close") {
      hideModal();
    }
  if(e.target.className === "direct on") {

    if(e.target.id === "left") {
      changePic(img, "left");
    } else {
      changePic(img, "right");
    }
  }
});
// function changePic(img, direction) {
//   img.className = "front-pics";
//   if(direction === "left") {
//     moveImg(img, "left");
//   }
//   if(direction === "right") {
//     moveImg(img, "right");
//   }
// }
// function moveImg(img, direction) {
//
//   if(direction === "left") {
//
//   }
//   if(direction === "right") {
//
//   }
// }
//   }); //end event listener
//
// }();

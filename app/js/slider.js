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

  // sliderNav[0].style.visibility = "visible";
  // sliderNav[0].style.zIndex = 1;
  // sliderNav[1].style.visibility = "visible";
  // sliderNav[1].style.zIndex = 1;
  function sliderNav(id, direction, state) {
    if(state === "on") {
      const nav = document.createElement('a');
      nav.className = "direct on";
      nav.id = id;
      nav.textContent = direction;
      return nav;
    } else {
      let nav = document.getElementById(id);
      nav.parentNode.removeChild(nav);
    }
  }

  document.addEventListener('click', function(e) {
    let img = e.target;
    if(img.tagName === 'IMG' && img.className==="front-pics" ) {
      let div = img.parentNode;
      console.log(div);
      let a = document.createElement('a');
      a.className = "close";
      a.textContent = "x";
      a.setAttribute("href", "#wrapper-fotos");
      console.log(a);
      div.appendChild(a);
      div.appendChild(sliderNav("left", "<", "on"));
      div.appendChild(sliderNav("right", ">", "on"));
      img.className = "front-pics active";
    }
    if(e.target.className === "close") {
      let img = e.target.previousElementSibling;
      img.className = "front-pics";
      let div = e.target.parentNode;
      div.removeChild(e.target);
      sliderNav("left", "<", "off");
      sliderNav("right", ">", "off");
    }
  if(e.target.className === "direct on") {
    let div =  e.target.parentNode;
    let img = div.firstElementChild;
    if(e.target.id === "left") {
      changePic(img, "left");
    } else {
      changePic(img, "right");
    }
  }
function changePic(img, direction) {
  img.className = "front-pics";
  console.log(img);
  if(direction === "left") {
    // console.log('kuku');
    let div = img.parentNode;
    let prevDiv = img.parentNode.parentNode.previousElementSibling
    .firstElementChild;
    let prevImg = img.parentNode.parentNode.previousElementSibling
    .firstElementChild.firstElementChild;
    prevImg.className = "front-pics active";

    div.removeChild(img);
    prevDiv.appendChild(img);
    div.appendChild(prevImg);
    console.log(prevImg);
  }
}
  }); //end event listener

}();

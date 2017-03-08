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
        for(let j=0; j < img_arr.length; j++) {
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

  const arr_img = document.querySelector(".icon.img.sm");

  document.addEventListener('click', function(e) {
    if(e.target.tagName === 'IMG' ) {
      let img = e.target;
      let div = img.parentNode;
      console.log(div);
      let a = document.createElement('a');
      a.className = "close";
      a.textContent = "x";
      a.setAttribute("href", "#wrapper-fotos");
      console.log(a);
      div.appendChild(a);
    }
  }); //end event listener

}();

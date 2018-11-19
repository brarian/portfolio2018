function classToggle() {
 console.log("toggle clicked");
 const navs = document.querySelectorAll('.nav_right')
 navs.forEach(nav => nav.classList.toggle('.nav_right'));
}


document.querySelector('.toggle')
  .addEventListener('click', classToggle);
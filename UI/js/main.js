const header = document.getElementById("header");
const sticky = header.offsetTop;

const myFunction= ()=> {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

window.onscroll = () => myFunction();
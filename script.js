let bar = document.querySelector("#bar");
let navbar = document.querySelector("#navbar");
let close = document.querySelector("#close");

bar.onclick = () => {
  bar.classList.toggle("close");
  navbar.classList.toggle("active");
};

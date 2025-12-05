function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ 
    behavior: "smooth"
  });
}

document.getElementById("menu-item").onclick = function () {
  document.getElementById("nav-menu").classList.toggle("active");
};
var links = document.querySelectorAll(".nav-link");

/* close menu after link is clicked */
for (var i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    document.getElementById("nav-menu").classList.remove("active");
  };
}

document.getElementById("contactForm").onsubmit = function (e) {
  e.preventDefault();
  alert("Message Sent Successfully!");
  this.reset();
};

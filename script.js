const banner = document.querySelector(".banner");
const logo = document.querySelector("#header");
const about = document.querySelector("#about");
const overlay = document.querySelector(".banner-overlay");
const overlay2 = document.querySelector(".banner-overlay2");
const buttonSubmit = document.querySelector("#submit[value]");
const productBtn = document.querySelector("#scrollProducts");
const aboutBtn = document.querySelector("#scrollAbout")
const videoBtn = document.querySelector("#scrollVideo")

//subscribe button styles
buttonSubmit.style.fontFamily = "Dancing Script";
buttonSubmit.style.fontSize = "0.9rem";
buttonSubmit.style.backgroundColor = "#E7590D";
buttonSubmit.style.color = "white";

//nav button scrolling adjust
productBtn.addEventListener("click", function(e){
  if(window.innerWidth >= 999){
    window.scrollTo({
      left:0,
      top:1052,
      behavior:'smooth'});

  }else {
    window.scrollTo({
      left:0,
      top:1021,
      behavior:'smooth'});
  }
}, false);

aboutBtn.addEventListener("click", function(e){
  if(window.innerWidth >= 999){
    window.scrollTo({
      left:0,
      top:260,
      behavior:'smooth'});

  }else {
    window.scrollTo({
      left:0,
      top:260,
      behavior:'smooth'});
  }
}, false);

videoBtn.addEventListener("click", function(e){
  window.scrollTo({
    left:0,
    top:540,
    behavior:'smooth'});
}, false);

//disapear banner when logo is clicked

(logo.addEventListener("click", function(e){

  if(e.target.tagName === "IMG" && banner.style.height === "250px") {
    banner.style.height = "0px";
    banner.style.transition = "all 1s"
    about.style.marginTop = "0px";
    overlay.style.display = "none";
    overlay2.style.display = "none";

  } else {
    banner.style.height = "250px";
    overlay.style.display = "block";
    overlay2.style.display = "block";
    //about.style.marginTop = "20px";
    about.removeAttribute("style");

  }

}, false));

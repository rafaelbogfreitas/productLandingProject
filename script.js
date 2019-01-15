const banner = document.querySelector(".banner");
const logo = document.querySelector("#header");
const about = document.querySelector("#about");
const overlay = document.querySelector(".banner-overlay");
const overlay2 = document.querySelector(".banner-overlay2");
const buttonSubmit = document.querySelector("#submit[value]");

//subscribe button styles
buttonSubmit.style.fontFamily = "Dancing Script";
buttonSubmit.style.fontSize = "0.9rem";
buttonSubmit.style.backgroundColor = "#E7590D";
buttonSubmit.style.color = "white";

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

}));

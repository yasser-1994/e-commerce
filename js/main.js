// accordion *************************
function accordion() {
    let x = document.getElementById("click");
    let y = document.getElementById("sec");
    x.addEventListener("click", () => {
      y.classList.toggle("active");
      x.classList.toggle("change-color");
    });
  }
  accordion();
  
  function accordion1() {
    let x = document.getElementById("click2");
    let y = document.getElementById("sec2");
    x.addEventListener("click", () => {
      y.classList.toggle("active");
      x.classList.toggle("change-color");
    });
  }
  accordion1();
  
  function accordion2() {
    let x = document.getElementById("click3");
    let y = document.getElementById("sec3");
    x.addEventListener("click", () => {
      y.classList.toggle("active");
      x.classList.toggle("change-color");
    });
  }
  accordion2();

  function accordion3() {
    let x = document.getElementById("click4");
    let y = document.getElementById("sec4");
    x.addEventListener("click", () => {
      y.classList.toggle("active");
      x.classList.toggle("change-color");
    });
  }
  accordion3();
// btn menue *****************************
  let click = document.getElementById('click-menu').onclick = function (){
     let mydiv = document.getElementById('bar');
     mydiv.classList.toggle('tarnslate');
  } 
  let close = document.getElementById('close').onclick = function (){
    let mydiv = document.getElementById('bar');
    mydiv.classList.toggle('tarnslate'); 
  } 
// scroll to top *****************************
const mybt = document.getElementById("scroll");
window.addEventListener("scroll", () => {
  mybt.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
});
/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/
const setdys = () => {
  var d = document.querySelector("body")
  if (d.classList.contains("dyslexia-mode")){
    d.removeAttribute("class")
  }
  else{
    d.setAttribute("class", "dyslexia-mode")
  }
  
}
document.getElementById("dyslexia-toggle").addEventListener('click', setdys)
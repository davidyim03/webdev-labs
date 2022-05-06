/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/
const settheme = (theme) =>{
   var d = document.querySelector("body")
   if (theme == "desert"){
      d.setAttribute("class", "desert")
   }
   else if (theme == "ocean"){
      d.setAttribute("class", "ocean")
   }
   else if (theme == "hc"){
      d.setAttribute("class", "high-contrast")
   }
   else if (theme == "def"){
      d.setAttribute("class", "container")
   }
}
const setdesert = () => {
   settheme("desert")
}
const setocean = () =>{
   settheme("ocean")
}
const sethc = () =>{
   settheme("hc")
}
const setdef = () =>{
   settheme("def")
}

document.getElementById("ocean").addEventListener('click', setocean)
document.getElementById("desert").addEventListener('click', setdesert)
document.getElementById("high-contrast").addEventListener('click', sethc)
document.getElementById("default").addEventListener('click', setdef)


const changefs = (bs) => {
   var head = document.getElementById("head");
   style = window.getComputedStyle(head, null).getPropertyValue('font-size');
   currentSize = parseFloat(style);

   var text = document.getElementById("text");
   txtstyle = window.getComputedStyle(text, null).getPropertyValue('font-size');
   currenttxtSize = parseFloat(txtstyle);

   if (bs == "inc"){
      head.style.fontSize = (currentSize + 10) + 'px';
      text.style.fontSize = (currenttxtSize + 5) + 'px';
   }
   if (bs == "dec"){
      head.style.fontSize = (currentSize - 10) + 'px';
      text.style.fontSize = (currenttxtSize - 5) + 'px';
   }
}

const makeBigger = () => {
   changefs("inc")
};

const makeSmaller = () => {
   changefs("dec")
};

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);


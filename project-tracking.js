// select

const show=document.getElementById("right");
const nav=document.querySelector('nav');
const close=document.getElementById("close")

nav.style.display="none";
close.style.display="none"

show.addEventListener("click",()=>{
    if( nav.style.display=="none"){
         nav.style.display="block";
         show.style.display="none"
         close.style.display="block"
    }
    else{
         nav.style.display="none";
 }
})
close.addEventListener("click",()=>{
  if(close.style.display=="block"){
        nav.style.display="none";
         show.style.display="block"
         close.style.display="none"
  }
})
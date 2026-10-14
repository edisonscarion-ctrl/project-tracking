// select

const show=document.getElementById("show");
const nav=document.querySelector('nav');

nav.style.display="none";

show.addEventListener("click",()=>{
    if( nav.style.display=="none"){
         nav.style.display="block";
          show.textContent= "hide";
    }
    else{
         nav.style.display="none";
          show.textContent= "show";
    }
   
   
     
})
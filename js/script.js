//Gallery Part 
const filterButton=document.querySelector("#filter-button").children;
const items=document.querySelector(".portfolio-gly").children;



for(let i=0; i<filterButton.length; i++){
  filterButton[i].addEventListener("click",function(){
      for(let j=0; j<filterButton.length; j++){
          filterButton[j].classList.remove("active")
      }
      this.classList.add("active");
      console.log(this.getAttribute("data-target"))
      const target=this.getAttribute("data-target")
      
      for(let k=0; k<items.length; k++){
          items[k].style.display="none";
          if(target==items[k].getAttribute("data-id"))
              {
                  items[k].style.display="block";
              }
      }
      if(target=="all"){
          items[k].style.display="block";
      }
    
  })
}






//Gallery Part 

window.onscroll=function(){
   const docScrollTop=document.documentElement.scrollTop;
    
    if(window.innerWidth>991){
        if (docScrollTop>100){
            document.querySelector("header").classList.add("fixed")
        }
        else{
            document.querySelector("header").classList.remove("fixed")
        }
    }
}
//navbar link

const navbar = document.querySelector(".navbar");
a=navbar.querySelectorAll("a");
  
    a.forEach(function(element){
    element.addEventListener("click",function(){
        for(let i=0; i<a.length; i++){
            a[i].classList.remove("active");
        }
        this.classList.add(".active")
    })
})


//Hum-burger

const hamBurger=document.querySelector(".ham-burger");
hamBurger.addEventListener("click",function(){
    document.querySelector(".navbar").classList.toggle("show")
    
})



let links = document.querySelectorAll(".Links")


// WILL CHANGE COLOR IF LINKED IS PRESSED



  for (let i= 0; i<links.length;i++){
   
links[i].addEventListener("click", function(event){
  links[i].style.color = "purple"
  })
// mouseover event
    links[i].addEventListener("mouseover", function(event){
    links[i].style.color = "purple"
    })
  }
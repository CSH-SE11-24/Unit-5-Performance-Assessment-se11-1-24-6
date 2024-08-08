let achievment = document.querySelector("#achievements")

achievment.addEventListener("mouseover", function(event){
  achievment.style.textDecoration = "underline overline lightblue"
})



// SELECTING CARD TITLE
let ctitle = document.querySelectorAll(".card-title")


//for loop for event
for(let i =0; i<ctitle.length;i++){
  ctitle[i].addEventListener("mouseover",function(event){
    ctitle[i].style.color = "blue"
    ctitle[i].style.textDecoration = "underline overline darkblue"
  } )
}


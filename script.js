console.log("script running")

let whytag = document.querySelector("#why")

console.log(whytag)

let stressed = document.querySelector("#whyimg")

whytag.addEventListener("click", function(event){

  // changing text content
  whytag.textContent = "The problem begins with a medical field that has long been dominated by white men. Black Americans make up about 13% of the US population but comprise only 5·4% of the physician workforce, and of these only 2.8% are Black women! There are even fewer Black women in academic leadership roles: only 0.8% of full professors at US medical schools in 2020 were Black women."

  // changing image photo
whyimg.src = "stressed.jpg"
  
})

let video = document.querySelector("#Video")
let videospace = document.querySelector("#videospace")

// VIDEO POPUP
video.addEventListener("click", function (event){
videospace.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/VJlxErkWtQo?si=zRrmVJKG1vJ35kcA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
})
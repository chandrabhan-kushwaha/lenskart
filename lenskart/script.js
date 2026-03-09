const glasses = document.getElementById("glasses")

const frames = [
"assets/glasses/g1.png",
"assets/glasses/g2.png",
"assets/glasses/g3.png",
//"assets/glasses/g4.png"
]

let index = 0

setInterval(()=>{

index++

if(index >= frames.length){
index = 0
}
glasses.style.opacity = 0
setTimeout(()=>{
glasses.src = frames[index]
glasses.style.opacity = 1
},200)
},2000)

//glasses tilt
const hero = document.querySelector(".hero")

hero.addEventListener("mousemove",(e)=>{

const x = (window.innerWidth / 2 - e.clientX) / 30
const y = (window.innerHeight / 2 - e.clientY) / 30

glasses.style.transform =`perspective(600px) rotateY(${x}deg) rotateX(${y}deg)`

})

hero.addEventListener("mouseleave",function(){

glasses.style.transform = "perspective(500px) rotateY(0deg) rotateX(0deg)"

})

function scrollToCollection(){
    document.querySelector(".collection")
    .scrollIntoView({behavior : "smooth"})
}

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

let top = card.getBoundingClientRect().top;

if(top < window.innerHeight-100){
card.classList.add("show");
}

});

});
const lenis = new Lenis();
lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

let tl=gsap.timeline({scrollTrigger:{
    trigger:"#page-1",
    pin:true,
    start:"50% 50%",
    end:"200% 50%",
    scrub:true,
    // markers:true
}},'a')
tl.to(".rotate-div",{
    rotate:-15,
    scale:0.8
},'a')
tl.to(".one",{
    marginLeft:"6%",
    marginTop:"-30%"

},'a')

tl.to(".two",{
    marginTop:"-50%",

},'a')
tl.to(".three",{
    marginTop:"-38%",

},'a')
tl.to(".four",{
    marginTop:"-30%",

},'a')
tl.to(".five",{
    marginTop:"-30%",
},'a')
tl.to(".layout-div h1",{
    opacity:1,
},'a')
tl.to(".layout-div",{
    backgroundColor:"#000000b4"
},'a')
tl.to(".scrolling1",{
    width:"100%"
},'a')
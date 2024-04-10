gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();





function themeChange(){
  var flag=0;  
var color=document.querySelector(".page1navright #btn");
  color.addEventListener("click",function(){
    if(flag==0){
      document.documentElement.style.setProperty("--secondary","#fff");
      document.documentElement.style.setProperty("--tricolor","rgb(3, 70, 109)");
      color.innerHTML="Dark";
      color.style.color="rgb(3,70,109)"
  
       flag=1;

    }
   
    else{
      document.documentElement.style.setProperty("--secondary","rgb(21,21,21)");
      document.documentElement.style.setProperty("--tricolor","#fff");
  color.innerHTML="Light";
  color.style.color="white"

       flag=0;

    }
    
  })
}

themeChange();



function page1Animation(){
  
var tl=gsap.timeline();

tl.from(".video-container",{
  scale:0,
  duration:1,

},"srishti")
.from(".elem h1",{
  y:100,
  duration:1,
  stagger:.3,
  opacity:0,
  ease:"expo.Inout"
},"srishti")


var theme=document.querySelector(".page1navright .btn");
theme.addEventListener("click",function(){
  // document.documentElement.style.setProperty("--primary","white")
  document.documentElement.style.setProperty("--tricolor","rgb(3, 70, 109)")
  document.documentElement.style.setProperty("--secondary","#000")


})
}

page1Animation();


function page3Animation(){

gsap.to(".page3imgleft",{
  x:-200,
  duration:.5,
  rotate:"-5deg",
  scrollTrigger:{
    trigger:".page3overlay",
    scroller:".main",
    // markers:true,
    scrub:true,
  }
})
gsap.to(".page3imgright",{
  x:200,
  duration:.5,
  rotate:"5deg",
  scrollTrigger:{
    trigger:".page3overlay",
    scroller:".main",
    scrub:true,
    // markers:true,
  }
})
}

page3Animation();





function page4Animation(){
  
  // gsap.to(".page4",{
  //   scrollTrigger:{
  //     trigger:".page4",
  //     scroller:".main",
  //     pin:true,
  //   }
  // })
  
  gsap.to(".page4imgleft",{
    x:-200,
    duration:.5,
    rotate:"-5deg",
    scrollTrigger:{
      trigger:".page4overlay",
      scroller:".main",
      // markers:true,
      scrub:true,
    }
  })
  gsap.to(".page4imgright",{
    x:200,
    duration:.5,
    rotate:"5deg",
    scrollTrigger:{
      trigger:".page4overlay",
      scroller:".main",
      scrub:true,
      // markers:true,
    }
  })
  }
  
  page4Animation();



  function page6Animation(){
     
  var page6textdiv=document.querySelector(".page6textdiv");
  var h1text=document.querySelector(".h1text h1");
  page6textdiv.addEventListener("mouseenter",function(){
    gsap.to(".h1text h1",{
      y:-30,
      duration:.5,
  
    })

  })


  page6textdiv.addEventListener("mouseleave",function(){
    gsap.to(".h1text h1",{
      y:0,
      duration:.5,
  
    })

  })
  
  }
  page6Animation();

  


  
  
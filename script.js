gsap.registerPlugin(ScrollTrigger);

gsap.to("#right-text",{
  y:150,
  duration:5,
  scrollTrigger: {
  trigger:"#right-text",
  start:"top 50%",
  end:"top 30%",
  scrub:4,
  },
})
gsap.to("#left-text",{
  y:-350,
  duration:8,
  scrollTrigger: {
  trigger:"#right-text",
  start:"top 85%",
  end:"top 35%",
  scrub:5,
  },
})

gsap.to("#text2", {
  scale: 1.5, // Zoom the text to 2 times its original size
  duration: 3,
  scrollTrigger: {
    trigger: "#text2",
    start: "top 80%", // Adjust this value as needed
    end: "top 40%", // Adjust this value as needed
    scrub: 5,
    onEnter: () => {
      document.querySelector("#text1").style.display="none";
    },
    onLeave: () => {
      document.querySelector("#text1").style.display="block";
      gsap.to("#text2", {
        scale: 1, // Set the scale back to 1, the original size
        duration: 7, // You can adjust the duration as needed
      });
    },
  },
})





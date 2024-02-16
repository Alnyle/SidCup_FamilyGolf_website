let cursorElement = document.querySelector("#cursor");
let blurCursorElement = document.querySelector("#cursor-blur");
// event list when mouse move
document.addEventListener("mousemove", (event) => {
  cursorElement.style.left = event.x + "px";
  cursorElement.style.top = event.y + "px";
  blurCursorElement.style.left = event.x - 200 + "px"; // to make cursor at the center or circle or blur he subtract 150 half blur height
  blurCursorElement.style.top = event.y - 200 + "px";
});

let nav = document.querySelectorAll("#nav h4");
nav.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursorElement.style.scale = 3;
    cursorElement.style.border = "1px solid #fff";
    cursorElement.style.backgroundColor = "transparent";
  });

  element.addEventListener("mouseleave", () => {
    cursorElement.style.scale = 1;
    cursorElement.style.border = "0px solid #95C11E";
    cursorElement.style.backgroundColor = "#95C11E";
  });
});

document.addEventListener("mousemove", (event) => {});

// animate navbar
gsap.to("#nav", {
  backgroundColor: "#000",
  height: "110px",
  duration: 0.5,
  // scrollerTrigger: define what you user scroll
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    markers: true, // corrected spelling
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

/*

The provided code uses the GreenSock Animation Platform (GSAP) to animate the properties of the HTML element with the ID "nav" based on the scroll position. Let's break down the key parts of the code:

1. `gsap.to("#nav", { ... })`: This initiates a GSAP animation targeting the HTML element with the ID "nav."

2. `backgroundColor: "#000"`: Sets the background color of the element to black (#000).

3. `height: "110px"`: Sets the height of the element to 110 pixels.

4. `duration: 0.5`: Specifies the duration of the animation in seconds (0.5 seconds in this case).

5. `scrollTrigger`: Defines a scroll-triggered animation.

   - `trigger: "#nav"`: Specifies the trigger element, in this case, the element with the ID "nav."
   
   - `scroller: "body"`: Sets the scroller to the body, meaning the animation is triggered based on the scroll position of the body.

   - `markers: true`: Displays markers on the scrollbar to indicate where the animation is triggered. (Note: this assumes you have the GSAP ScrollTrigger plugin loaded, as the `markers` option is specific to that plugin.)

   - `start: "top -10%"`: Sets the start position of the trigger when the top of the trigger element is 10% above the top of the viewport.

   - `end: "top -11%"`: Sets the end position of the trigger when the top of the trigger element is 11% above the top of the viewport.

   - `scrub: 3`: Scrubs the animation by a factor of 3, which means it will progress three times faster than the scroll. This is used for creating smoother animations.

In summary, this code creates a GSAP animation that changes the background color and height of the element with the ID "nav" based on the user's scroll position. The animation starts when the top of the "nav" element is 10% above the top of the viewport and ends when it is 11% above. The animation duration is 0.5 seconds, and the scrub parameter helps achieve a smoother effect.

*/

// animate hero section
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main", // the effected element
    scroller: "body", //
    markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us img, #about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 55%",
    scrub: 3,
  },
});

// cards animation
gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  stagger: 0.1, // card will show one by one
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});

gsap.from("#colon1", {
  x: -70,
  y: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "top 45%",
    scrub: 1,
  },
});

gsap.from("#colon2", {
  x: 70,
  y: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "top 45%",
    scrub: 4,
  },
});

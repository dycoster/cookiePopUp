const tl= gsap.timeline({defaults: {duration: 0.75}})

tl.fromTo('.cookie-container', {scale: 0}, {scale: 1})
tl.fromTo('.cookie', {opacity: 0, x:-50, rotation: '-45deg'}, {opacity: 1, x: 0, rotation: 0})
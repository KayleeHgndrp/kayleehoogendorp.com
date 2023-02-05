/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import gsap from "gsap";

// SLIDES FROM RIGHT TO LEFT
export const SlideIn = (node, nodeDelay) => {
    gsap.fromTo(node, 
      //from
      {
          xPercent:110
      },  
      //to
      {
           duration: 1,
           xPercent:0,
           ease: "power3.inOut",
           delay: nodeDelay
      });
  };

  // SLIDES FROM LEFT TO RIGHT
  export const SlideOut = (node, nodeDelay)  => {
    gsap.fromTo(node, 
      //from
      {
          xPercent:0
      },  
      //to
      {
           duration: 1,
           xPercent:110,
           ease: "power3.inOut",
           delay: nodeDelay
      });
  };
  

// SCALES UP
export const RevealContainer = (node, nodeDelay)  => {
  gsap.fromTo(node, 
    //from
    {
        opacity: 0, 
        scaleY:0,
    },  
    //to
    {
         duration: 1,
         opacity: 1,
         scaleY:1,
         ease: "power3.inOut",
         delay: nodeDelay,
    });
};

// SCALES DOWN
export const CloseContainer = (node, nodeDelay) => {
    gsap.fromTo(node, 
        //from
        {
            opacity: 1, 
            scaleY:1,
        },  
        //to
        {
             duration: 0.3,
             opacity: 0,
             scaleY:0,
             ease: "power3.inOut",
             delay: nodeDelay,
        });
};

 // REVEAL LINE
export const staggerRevealLine = (node, nodeDelay) => {
    gsap.fromTo(node, 
        //from
        {
            opacity: 0, 
            xPercent:-110
        },  
        //to
        {
            opacity: 1, 
            xPercent:0, 
            duration: 1,
            ease: "power3.inOut", 
            delay: nodeDelay,
            stagger: {
                amount: 0.3
              }
        });
  };

  // CLOSE LINE
export const RemoveLine = (node, nodeDelay)  => {
    gsap.fromTo(node, 
        //from
        {
            opacity: 1, 
            xPercent:0
        },  
        //to
        {
            opacity: 0, 
            xPercent:-110,
            duration: 0,
            delay: nodeDelay

        });
  };

// STAGGER THE NODES TO APPEAR
export const staggerText = (node, nodeDelay)  => {
 
  gsap.fromTo(node, 
    //from
    {
        opacity: 0, 
        y: 110,
    },  
    //to
    {
        duration: 0.8,
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: nodeDelay,
        ease: "power3.inOut",
        stagger: {
           amount: 0.3
         }
    });
};

// STAGGER THE NODES TO DISAPPEAR
export const staggerRemoveText = (node, nodeDelay)  => {
    gsap.fromTo(node, 
        //from
        {
            opacity: 1, 
            y: 0,
        },  
        //to
        {
            opacity: 0, 
            y: 110,
            duration: 0.5,
            delay: nodeDelay,
            ease: "power3.inOut", 
        });
  };

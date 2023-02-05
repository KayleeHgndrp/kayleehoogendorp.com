import { useEffect } from "react";
import gsap from "gsap";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

// HOVER ON LINK
export const handleHover = e => {
  gsap.to(e.target, {
    duration: 0.3,
    y: 3,
    skewX: 4,
    ease: "power1.inOut"
  });
};

// HOVER OFF LINK
export const handleHoverExit = e => {
  gsap.to(e.target, {
    duration: 0.3,
    y: -3,
    skewX: 0,
    ease: "power1.inOut"
  });
};

/*----- ANIMATIONS MOTION--------*/

export const AnimatedText = (props) => {  
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  
  
  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);
  
  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 2,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };
  
  return (
    <span aria-label={props.text} role="heading">
        <motion.span
          ref={ref}
          aria-hidden="true"
          initial="hidden"
          animate={ctrls}
          variants={characterAnimation}
        >
          {props.text}
        </motion.span>

    </span>
  );
}

// animation for titles
export const AnimatedTitle = (props) => {
  
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: false,
  });
  
  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);
  
  const wordAnimation = {
    hidden: {},
    visible: {},
  };
  
  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.55em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };
  
  return (
    <div aria-label={props.text} role="heading">
      {props.text.split(" ").map((word, index) => {
        return (
          <motion.div
            ref={ref}
            style={{display: "inline-block", whiteSpace: "nowrap", marginRight: "0.25rem"}}
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={ctrls}
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
            
          >
            {word.split("").map((character, index) => {
              return (
                <motion.div
                  style={{display: "inline-block"}}
                  aria-hidden="true"
                  key={index}
                  variants={characterAnimation}
                >
                  {character}
                </motion.div>
              );
            })}
          </motion.div>
        );
      })}
    </div>
)
}
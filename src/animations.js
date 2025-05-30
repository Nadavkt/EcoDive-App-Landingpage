import { useScroll } from "framer-motion";

export const fadeIn = (direction) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const slideIn = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.75,
    },
  },
};

export const scaleIn = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
};

export const useScrollAnimation = () => {
  const { scrollYProgress } = useScroll();
  return scrollYProgress;
};

export const mobileMenuVariants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.3
    }
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3
    }
  }
};

export const buttonHoverVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
    transition: {
      duration: 0.2
    }
  },
  tap: {
    scale: 0.95
  }
};

export const pageTransition = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.6,
      ease: "easeIn"
    }
  }
}; 
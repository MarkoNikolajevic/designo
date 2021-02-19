// navbar animations
export const navVariants = {
  open: {
    opacity: 1,
    height: '14.6875rem',
    transition: {
      duration: 0.3,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: 'afterChildren',
    },
  },
}

export const navItemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      stiffness: 1000,
      velocity: -100,
    },
  },
  closed: {
    opacity: 0,
    y: 50,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

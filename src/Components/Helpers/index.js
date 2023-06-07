export const scrollToSection = (elementRef) =>
{console.log({elementRef})
   window.scrollTo({
     top: elementRef.current.offsetTop,
     behavior: 'smooth'
   })
   
 }

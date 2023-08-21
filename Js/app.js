
const sections = document.querySelectorAll('section');
const navList = document.getElementById('navbar__list');

sections.forEach(section => {
  const navItem = document.createElement('li');
  const navLink = document.createElement('a');

  navLink.textContent = section.getAttribute('data-nav');
  navLink.setAttribute('href', `#${section.id}`);
  navLink.classList.add('menu__link');

  navItem.appendChild(navLink);
  navList.appendChild(navItem);
});


window.addEventListener('scroll', function() {
    

    const scrollPosition = window.scrollY;
  
   
    sections.forEach(section => {
  
  //getBoundingClientRect()

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + scrollPosition;
      const sectionHeight = rect.height;
  
    
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
  
        section.classList.add('your-active-class');
        


        const navLink = document.querySelector(`a[href="#${section.id}"]`);
        navLink.classList.add('active');
        
      } else {
       
        section.classList.remove('your-active-class');
        
        const navLink = document.querySelector(`a[href="#${section.id}"]`);
        navLink.classList.remove('active');
      }
    });
  });

  const navLinks = document.querySelectorAll('.menu__link');
  navLinks.forEach(navLink => {
    navLink.addEventListener('click', function(event) {
      event.preventDefault();
      const targetSection = document.querySelector(this.getAttribute('href'));
      const targetRect = targetSection.getBoundingClientRect();
      const targetOffsetTop = targetRect.top + window.scrollY;
      window.scrollTo({
        top: targetOffsetTop,
        behavior: 'smooth'
      });
    });
  });
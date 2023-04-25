window.addEventListener('scroll', function() {
    var header = document.querySelector('.site-header');
    var scrollPosition = window.scrollY;
    
    if (scrollPosition > 20) {
      header.classList.add('small');
    } else {
      header.classList.remove('small');
    }
  });

  function checkScroll() {
    const sloganSection = document.querySelector('.slogan-section');
    const sloganSectionPosition = sloganSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
  
    if (sloganSectionPosition < screenPosition) {
      sloganSection.classList.add('active');
    }
  }
  
  window.addEventListener('scroll', checkScroll);
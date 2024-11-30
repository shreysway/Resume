// JavaScript to hide preloader and show content after 3 seconds
window.addEventListener('load', function() {
    setTimeout(function() {
      // Hide the preloader
      document.getElementById('preloader').style.display = 'none';
      // Show the main content
      document.getElementById('container--main').style.display = 'block';
      
      // Optionally, add a fade-in effect for sections
      const sections = document.querySelectorAll('.section--page');
      sections.forEach(section => {
        section.classList.add('visible');
      });
    }, 1100); // 3 seconds
  });
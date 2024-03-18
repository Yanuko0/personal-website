window.addEventListener('scroll', function() {
    var scrollPos = window.scrollY;
    var windowHeight = window.innerHeight;
    var heroVideo = document.getElementById('home');
  
    if (scrollPos > windowHeight*0.9) {
      heroVideo.style.opacity = '0';
    } else {
      heroVideo.style.opacity = '1';
    }
  });
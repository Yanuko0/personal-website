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


//滑鼠滾動一整個頁面  //解決google chrome瀏覽器不能的問題+空白鍵

const navLinks = document.querySelectorAll('[data-nav-link]');
let currentSectionIndex = 0;

function findCurrentSectionIndex() {
  let index = 0;
  for (let i = 0; i < navLinks.length; i++) {
    const id = navLinks[i].getAttribute('href').slice(1);
    const section = document.getElementById(id);
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= window.innerHeight) {
      index = i;
    }
  }
  return index;
}

window.addEventListener('wheel', (e) => {
  e.preventDefault();
  
  const direction = e.deltaY > 0 ? 'down' : 'up';

  if (direction === 'down') {
    currentSectionIndex = Math.min(currentSectionIndex + 1, navLinks.length - 1);
  } else {
    currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
  }

  const id = navLinks[currentSectionIndex].getAttribute('href').slice(1);
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    if (currentSectionIndex === navLinks.length - 1) {
      currentSectionIndex = 0;
    } else {
      currentSectionIndex = Math.min(currentSectionIndex + 1, navLinks.length - 1);
    }
    const id = navLinks[currentSectionIndex].getAttribute('href').slice(1);
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  }
});



// const navLinks = document.querySelectorAll('[data-nav-link]');
// let currentSectionIndex = 0;

// // 找到目前所在的section
// function findCurrentSectionIndex() {
//   let index = 0;
//   for (let i = 0; i < navLinks.length+1; i++) {
//     const id = navLinks[i].getAttribute('href').slice(1);
//     const section = document.getElementById(id);
//     const rect = section.getBoundingClientRect();
//     if (rect.top >= 0 && rect.top <= window.innerHeight) {
//       index = i;
//     }
//   }
//   return index;
// }

// window.addEventListener('wheel', (e) => {
//   e.preventDefault();
  
//   const direction = e.deltaY > 0 ? 'down' : 'up';

//   if (direction === 'down') {
//     currentSectionIndex = Math.min(currentSectionIndex + 1, navLinks.length - 1);
//   } else {
//     currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
//   }

//   const id = navLinks[currentSectionIndex].getAttribute('href').slice(1);
//   const section = document.getElementById(id);
//   section.scrollIntoView({ behavior: 'smooth' });
// });

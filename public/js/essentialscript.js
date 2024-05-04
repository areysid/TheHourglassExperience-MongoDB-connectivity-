// productscript.js
document.addEventListener('DOMContentLoaded', function () {
    // Get all video elements
    const videos = document.querySelectorAll('.video-item');

    // Pause all videos initially
    videos.forEach(video => {
        video.pause();
    });

    // Add event listeners to play/pause videos on hover
    videos.forEach(video => {
        video.addEventListener('mouseenter', () => {
            video.play();
        });
        video.addEventListener('mouseleave', () => {
            video.pause();
        });
    });
});


// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle scroll event
  function handleScroll() {
    const watchFaceSection = document.getElementById('watch-face');
    if (isInViewport(watchFaceSection)) {
      watchFaceSection.classList.add('animate'); // Add animation class
      window.removeEventListener('scroll', handleScroll); // Remove scroll event listener after animation is applied
    }
  }
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
  
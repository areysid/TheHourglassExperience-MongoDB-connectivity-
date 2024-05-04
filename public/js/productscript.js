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

const videoContainer = document.querySelector ('.about__video');
const playButton = document.querySelector ('.about__video-button');

const playVideo = () => {
  playButton.addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
    iframe.setAttribute('width', '360');
    iframe.setAttribute('height', '230');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', '');
    videoContainer.innerHTML = '';
    videoContainer.appendChild(iframe);
    playButton.style.display = 'none';
  });
};

export { playVideo };

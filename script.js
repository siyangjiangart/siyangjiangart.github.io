document.addEventListener('DOMContentLoaded', function() {
    console.log('Checking gallery images');
    document.querySelectorAll('.gallery-image').forEach((img, index) => {
        console.log(`Image ${index + 1}:`, img.src);
        console.log(`Image ${index + 1} dimensions:`, img.naturalWidth, 'x', img.naturalHeight);
    });

    const portfolioVideo = document.getElementById('portfolioVideo');
    const videoTitle = document.getElementById('videoTitle');
    const videoDescription = document.getElementById('videoDescription');
    const prevButton = document.getElementById('prevVideo');
    const nextButton = document.getElementById('nextVideo');
    const videoSelector = document.getElementById('videoSelector');
    const videoCounter = document.getElementById('videoCounter');

    function createVideoSelector() {
        const videoSelector = document.getElementById('videoSelector');
        videoSelector.innerHTML = '';
        videoData.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('video-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                currentVideoIndex = index;
                updateVideo(currentVideoIndex);
            });
            videoSelector.appendChild(dot);
        });
    }

    createVideoSelector();
    updateVideo(0);

    console.log('Video section initialized with 7 videos');

    console.log('Initial setup complete');

    console.log('Enhanced script loaded');

    updateVideo(0);
});

const imageLightbox = document.getElementById('imageLightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeButton = imageLightbox.querySelector('.close');

function openImageLightbox(imgSrc) {
    lightboxImg.src = imgSrc;
    imageLightbox.style.display = 'flex';
}

function closeImageLightbox() {
    imageLightbox.style.display = 'none';
}

// Aggiungi event listener solo alle immagini della galleria
document.querySelectorAll('.gallery-image').forEach(img => {
    img.addEventListener('click', function() {
        openImageLightbox(this.src);
    });
});

// Chiudi il lightbox quando si clicca sul pulsante di chiusura
closeButton.addEventListener('click', closeImageLightbox);

// Chiudi il lightbox quando si clicca fuori dall'immagine
imageLightbox.addEventListener('click', function(event) {
    if (event.target === imageLightbox) {
        closeImageLightbox();
    }
});

// Chiudi il lightbox quando si preme il tasto ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && imageLightbox.style.display === 'flex') {
        closeImageLightbox();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    const images = document.querySelectorAll('.image-gallery img');
    console.log('Number of images found:', images.length);
    const fullscreenImage = document.getElementById('fullscreenImage');
    const fullscreenImg = document.getElementById('fullscreenImg');
    const closeFullscreen = document.querySelector('.close-fullscreen');

    images.forEach(img => {
        img.addEventListener('click', function() {
            console.log('Image clicked:', this.src);
            fullscreenImg.src = this.src;
            fullscreenImage.style.display = 'flex';
        });
    });

    closeFullscreen.addEventListener('click', function() {
        console.log('Close button clicked');
        fullscreenImage.style.display = 'none';
    });

    fullscreenImage.addEventListener('click', function(e) {
        if (e.target === fullscreenImage) {
            console.log('Fullscreen background clicked');
            fullscreenImage.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    updateVideo(0);
});

// Funzionalità lightbox per le immagini
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-image');
    const body = document.body;

    images.forEach(image => {
        image.addEventListener('click', function() {
            const lightbox = document.createElement('div');
            lightbox.id = 'lightbox';
            lightbox.style.display = 'flex';
            lightbox.style.alignItems = 'center';
            lightbox.style.justifyContent = 'center';
            lightbox.style.position = 'fixed';
            lightbox.style.top = '0';
            lightbox.style.left = '0';
            lightbox.style.width = '100%';
            lightbox.style.height = '100%';
            lightbox.style.backgroundColor = 'rgba(0,0,0,0.8)';
            lightbox.style.zIndex = '1000';

            const img = document.createElement('img');
            img.src = image.src;
            img.style.maxHeight = '90%';
            img.style.maxWidth = '90%';
            img.style.objectFit = 'contain';

            lightbox.appendChild(img);
            body.appendChild(lightbox);

            lightbox.addEventListener('click', e => {
                if (e.target !== e.currentTarget) return;
                body.removeChild(lightbox);
            });
        });
    });
});

const videoData = [
    { src: 'videos/video1.mp4', title: 'Video 1', description: 'Descrizione del Video 1' },
    { src: 'videos/video2.mp4', title: 'Video 2', description: 'Descrizione del Video 2' },
    { src: 'videos/video3.mp4', title: 'Video 3', description: 'Descrizione del Video 3' },
    { src: 'videos/video4.mp4', title: 'Video 4', description: 'Descrizione del Video 4' },
    { src: 'videos/video5.mp4', title: 'Video 5', description: 'Descrizione del Video 5' },
    { src: 'videos/video6.mp4', title: 'Video 6', description: 'Descrizione del Video 6' },
    { src: 'videos/video7.mp4', title: 'Video 7', description: 'Descrizione del Video 7' }
];

let currentVideoIndex = 0;

function updateVideo(index) {
    const video = videoData[index];
    const videoElement = document.getElementById('videoPlayer');
    videoElement.src = video.src;
    videoElement.load(); // Importante per caricare il nuovo video
    document.getElementById('videoTitle').textContent = video.title;
    document.getElementById('videoDescription').textContent = video.description;
    document.getElementById('videoCounter').textContent = `${index + 1} / ${videoData.length}`;
    updateDots(index);
}

function updateDots(activeIndex) {
    const dotsContainer = document.querySelector('.video-dots');
    dotsContainer.innerHTML = '';
    videoData.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('video-dot');
        if (index === activeIndex) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            currentVideoIndex = index;
            updateVideo(index);
        });
        dotsContainer.appendChild(dot);
    });
}

function nextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videoData.length;
    updateVideo(currentVideoIndex);
}

function prevVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videoData.length) % videoData.length;
    updateVideo(currentVideoIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    updateVideo(0);
    document.getElementById('nextVideo').addEventListener('click', nextVideo);
    document.getElementById('prevVideo').addEventListener('click', prevVideo);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextVideo();
        if (e.key === 'ArrowLeft') prevVideo();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('#videoWorks video');
    
    // Funzione per riprodurre tutti i video
    function playAllVideos() {
        videos.forEach(video => {
            video.play().catch(e => {
                console.log("Autoplay prevented for a video:", e);
            });
        });
    }

    // Aggiungi un pulsante per avviare tutti i video
    const playAllButton = document.createElement('button');
    playAllButton.textContent = 'Riproduci tutti i video';
    playAllButton.classList.add('play-all-button');
    playAllButton.addEventListener('click', playAllVideos);
    
    const videoWorksSection = document.getElementById('videoWorks');
    videoWorksSection.insertBefore(playAllButton, videoWorksSection.firstChild);
});

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-gallery img');
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const close = document.getElementsByClassName('close')[0];

    images.forEach(img => {
        img.addEventListener('click', function() {
            lightbox.style.display = 'flex';
            lightboxImg.src = this.src;
        });
    });

    close.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-gallery img');
    const fullscreenImage = document.getElementById('fullscreenImage');
    const fullscreenImg = document.getElementById('fullscreenImg');
    const closeFullscreen = document.querySelector('.close-fullscreen');

    images.forEach(img => {
        img.addEventListener('click', function() {
            fullscreenImg.src = this.src;
            fullscreenImage.style.display = 'flex';
        });
    });

    closeFullscreen.addEventListener('click', function() {
        fullscreenImage.style.display = 'none';
    });

    fullscreenImage.addEventListener('click', function(e) {
        if (e.target === fullscreenImage) {
            fullscreenImage.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-image');
    const fullscreenImage = document.querySelector('.fullscreen-image');
    const fullscreenImg = fullscreenImage.querySelector('img');
    const closeFullscreen = document.querySelector('.close-fullscreen');

    images.forEach(img => {
        img.addEventListener('click', function() {
            fullscreenImg.src = this.src;
            fullscreenImage.style.display = 'flex';
        });
    });

    closeFullscreen.addEventListener('click', function() {
        fullscreenImage.style.display = 'none';
    });

    fullscreenImage.addEventListener('click', function(e) {
        if (e.target === fullscreenImage) {
            fullscreenImage.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const imageGallery = document.querySelector('.image-gallery');
    const fullscreenContainer = document.querySelector('.fullscreen-image');
    const fullscreenImg = fullscreenContainer.querySelector('img');
    const closeBtn = document.querySelector('.close-fullscreen');

    imageGallery.addEventListener('click', function(e) {
        if (e.target.classList.contains('gallery-image')) {
            fullscreenImg.src = e.target.src;
            fullscreenContainer.style.display = 'flex';
        }
    });

    closeBtn.addEventListener('click', function() {
        fullscreenContainer.style.display = 'none';
    });

    fullscreenContainer.addEventListener('click', function(e) {
        if (e.target === fullscreenContainer) {
            fullscreenContainer.style.display = 'none';
        }
    });
});

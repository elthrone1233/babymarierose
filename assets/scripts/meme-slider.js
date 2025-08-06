(() => {
    const slides = [
        'assets/images/memeblock/1.png',
    'assets/images/memeblock/2.png',
    'assets/images/memeblock/3.png',
    'assets/images/memeblock/4.png',
    'assets/images/memeblock/5.png',
    'assets/images/memeblock/6.png',
    'assets/images/memeblock/7.png',
    'assets/images/memeblock/8.png',
    'assets/images/memeblock/9.png',
    'assets/images/memeblock/10.png',
    'assets/images/memeblock/11.png',
    'assets/images/memeblock/12.png',
    'assets/images/memeblock/13.png',
    'assets/images/memeblock/14.png',
    'assets/images/memeblock/15.png',
    'assets/images/memeblock/16.png',
    'assets/images/memeblock/17.png',
    'assets/images/memeblock/18.png',
    'assets/images/memeblock/19.png',
    'assets/images/memeblock/20.png',
    ];

    const slider = document.querySelector('#memeblock-slider');
    const prevButton = document.querySelector('#memeblock-slider-prev');
    const nextButton = document.querySelector('#memeblock-slider-next');

    let activeSlide = 0;

    const preloadImages = (images) => {
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    };

    const updateSlide = () => {
        slider.style.opacity = 0;

        setTimeout(() => {
            slider.src = slides[activeSlide];
            slider.style.opacity = 1;
        }, 400);
    };

    prevButton.addEventListener('click', () => {
        activeSlide = (activeSlide > 0) ? activeSlide - 1 : slides.length - 1;
        updateSlide();
    });

    nextButton.addEventListener('click', () => {
        activeSlide = (activeSlide < slides.length - 1) ? activeSlide + 1 : 0;
        updateSlide();
    });

    preloadImages(slides);
    updateSlide();
})();


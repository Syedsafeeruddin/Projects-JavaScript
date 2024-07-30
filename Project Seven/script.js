const slides = document.querySelectorAll('.slides');
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const imgSlider = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

const goBack = () => {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1; // Loop to the last slide
    }
    imgSlider();
};

const goFor = () => {
    counter++;
    if (counter >= slides.length) {
        counter = 0; // Loop back to the first slide
    }
    imgSlider();
};

const autoSlider = setInterval(() => {
    goFor()
}, 5000);
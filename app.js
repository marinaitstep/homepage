

function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide')

    slides[activeSlide].classList.add('active')

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses()

            slide.classList.add('active')
        })
    }

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

slidesPlugin(0)

function but(){
    let dots = document.querySelector('.but');
    dots.addEventListener('click', () => {
        dots.innerHTML=", but below junior level &#128561; My favorite stack is <a href='https://pensive-davinci-c419fe.netlify.app/' target='_blank'>MERN</a> and I love to mock your <a href='assets/hw.jpg'>photos</a> &#128521;";
    })
}
but();
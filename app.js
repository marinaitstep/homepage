

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
    let dots = document.getElementById('but');
    dots.addEventListener('click', () => {
        dots.innerHTML=", but below junior level &#128561; My favorite stack is <a href='https://pensive-davinci-c419fe.netlify.app/' target='_blank'>MERN</a> and I love to mock your <span id='hw_click'>photos</span> &#128521;";
    
        let hw_click = document.getElementById('hw_click');
        let hw_photo = document.getElementById('hw_photo');
         
        hw_click.addEventListener('click', ()=>{
            hw_photo.innerHTML='<img src="assets/hw.jpg"/>';
        })
    })
}
but();


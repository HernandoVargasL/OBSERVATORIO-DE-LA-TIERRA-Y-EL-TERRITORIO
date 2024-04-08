document.addEventListener("DOMContentLoaded", function() {
    new BeerSlider(document.querySelector(".beer-slider"))
    var swiper1 = new Swiper('.swiper-herobanner', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.swiper-pagination1',
            clickable: true,
        },
        loop: true, // Enable loop mode
        autoplay: {
        delay: 7000, // Delay between transitions (in ms)
        disableOnInteraction: false, // Stop autoplay on user interaction
        },
        on: {
        init: function() {
            var firstSlide = this.slides[0];
            firstSlide.classList.add('zoomed');
        },
        slideChangeTransitionStart: function() {
            var currentSlide = this.slides[this.activeIndex];
            var zoomedSlide = this.slides[this.previousIndex];
            
            if (zoomedSlide) {
            zoomedSlide.classList.remove('zoomed');
            }
            
            currentSlide.classList.add('zoomed');
        }
        }
    });  

    const swiper2 = new Swiper('#swiper2', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 3,
        grid: {
          rows: 2,
        },
        spaceBetween: 30,
        loop: false,
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
    
    const swiper3 = new Swiper('#swiper3', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false,
    

    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper2-next',
            prevEl: '.swiper2-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    const buttons = document.querySelectorAll(".wizard-buttons button");
    const steps = document.querySelectorAll(".step");

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            // Remove 'active' class from all buttons
            buttons.forEach(btn => {
                btn.classList.remove("active");
            });

            // Add 'active' class to the clicked button
            button.classList.add("active");

            // Hide all steps
            steps.forEach(step => {
                step.classList.remove("active");
            });

            // Show the corresponding step
            steps[index].classList.add("active");
        });
    });
});




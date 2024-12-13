"""

// Sticky Navigation

window.addEventListener('scroll', () => {

    const header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 50);

});



// Scroll Animations

const sections = document.querySelectorAll('section');

const options = {

    threshold: 0.1

};

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('show');

        } else {

            entry.target.classList.remove('show');

        }

    });

}, options);



sections.forEach(section => {

    observer.observe(section);

});



// Responsive Menu Toggle

const toggleButton = document.querySelector('.menu-toggle');

const navLinks = document.querySelector('header nav');



toggleButton.addEventListener('click', () => {

    navLinks.classList.toggle('active');

});

"""

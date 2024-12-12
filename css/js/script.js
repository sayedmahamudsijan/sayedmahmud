// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({

            behavior: 'smooth'

        });

    });

});



// Light/Dark Mode Toggle

const toggleButton = document.createElement('button');

toggleButton.textContent = 'Toggle Light/Dark Mode';

toggleButton.style.position = 'fixed';

toggleButton.style.bottom = '10px';

toggleButton.style.right = '10px';

toggleButton.style.padding = '10px';

toggleButton.style.background = '#1abc9c';

toggleButton.style.color = '#fff';

toggleButton.style.border = 'none';

toggleButton.style.borderRadius = '5px';

toggleButton.style.cursor = 'pointer';

document.body.appendChild(toggleButton);



toggleButton.addEventListener('click', () => {

    document.body.classList.toggle('dark-mode');

});

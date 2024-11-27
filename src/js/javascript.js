document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("main-header");
    const banner = document.getElementById("home");

    const bannerHeight = banner.offsetHeight;

    window.addEventListener("scroll", () => {
        if (window.scrollY > bannerHeight) {
            header.classList.remove("fixed");
            header.classList.add("relative-header");
        } else {
            header.classList.remove("relative-header");
            header.classList.add("fixed");
        }
    });
});

// About page javascript

document.querySelectorAll('.text-gray-400').forEach(paragraph => {
    paragraph.addEventListener('mouseover', () => {
        paragraph.classList.add('text-white');
    });
    paragraph.addEventListener('mouseout', () => {
        paragraph.classList.remove('text-white');
    });
});


// contact page 

$(document).ready(function () {
    $('#contactForm').submit(function (event) {
        event.preventDefault();
        const name = $('#name').val();
        const email = $('#email').val();
        const number = $('#number').val();
        const address = $('#address').val();
        const message = $('#message').val();

        if (name === "" || email === "" || number === "" || address === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }
        alert("Form submitted successfully!");

        $('#contactForm')[0].reset();

        $('#submitBtn').text('Submitted').prop('disabled', true);
    });
})

// Blog page 

function toggleParagraph(event) {
    event.preventDefault();
    const parentDiv = event.target.closest('.bg-gray-800');

    const shortParagraph = parentDiv.querySelector('.short-paragraph');
    const fullParagraph = parentDiv.querySelector('.full-paragraph');
    const toggleButton = parentDiv.querySelector('.toggle-button');


    if (fullParagraph.classList.contains('hidden')) {
        shortParagraph.classList.add('hidden');
        fullParagraph.classList.remove('hidden');
        toggleButton.textContent = 'See less';
    } else {
        fullParagraph.classList.add('hidden');
        shortParagraph.classList.remove('hidden');
        toggleButton.textContent = 'See more';
    }
}

// blog page 2 

const newPosts = [
    {
        date: 'July 10, 2021',
        image: 'images/search-5.png',
        description: 'New dynamically added post example 1.',
    },
    {
        date: 'August 14, 2021',
        image: 'images/search-6.png',
        description: 'New dynamically added post example 2.',
    },
];

// gallery

document.getElementById("viewMore").addEventListener("click", () => {
    const newImages = `
      <div class=" container mx-auto overflow-hidden rounded-lg h-[300px] flex gap-4">
        <img class="w-full h-full object-cover hover:scale-105 transition-transform" src="images/g-1.png" alt="Dish 7">
        <img class="w-full h-full object-cover hover:scale-105 transition-transform" src="images/g-2.png" alt="Dish 7">
        <img class="w-full h-full object-cover hover:scale-105 transition-transform" src="images/g-3.png" alt="Dish 7">

      </div>`;
    document.getElementById("gallery").innerHTML += newImages;
});



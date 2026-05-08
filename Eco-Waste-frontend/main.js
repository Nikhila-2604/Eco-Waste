document.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // Collection Form Logic
    // ==============================
    const collectionForm = document.getElementById('collection-form');
    if (collectionForm) {
        collectionForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const items = document.getElementById('items').value;

            console.log('Collection Request:', { name, email, items });

            alert('Thank you for your request 🎉! We will get in touch with you shortly 🌍.');
            collectionForm.reset();
        });
    }

    // ==============================
    // Contact Form Logic (Connected to Backend)
    // ==============================
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const data = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                lookingFor: document.getElementById('looking-for').value,
                message: document.getElementById('message').value,
                location: document.getElementById('location').value,
                pickupDate: document.getElementById('pickup-date').value
            };

            fetch("http://localhost:8080/api/contact/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(result => {
                    alert("Contact submitted successfully!");
                    contactForm.reset();
                })
                .catch(error => {
                    console.error("Error:", error);
                    alert("Submission failed.");
                });
        });
    }

    // ==============================
    // Blog Page Logic (Dynamic Loading)
    // ==============================
    const blogContainer = document.getElementById("blog-container");

    if (blogContainer) {
        fetch("http://localhost:8080/api/blogs")
            .then(response => response.json())
            .then(blogs => {

                blogContainer.innerHTML = "";

                blogs.forEach(blog => {

                    const blogCard = `
                        <div class="blog-card">
                            <div class="blog-card-image">
                                <img src="${blog.imageUrl}" alt="Blog Image">
                            </div>
                            <div class="blog-card-content">
                                <h2>${blog.title}</h2>
                                <p><strong>By ${blog.author}</strong> | ${blog.createdDate}</p>
                                <p>${blog.content}</p>
                            </div>
                        </div>
                    `;

                    blogContainer.innerHTML += blogCard;
                });

            })
            .catch(error => {
                console.error("Error loading blogs:", error);
            });
    }

    // ==============================
    // Slideshow Logic
    // ==============================
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-nav .dot');

    if (slides.length > 0 && dots.length > 0) {
        let currentSlide = 0;

        function showSlide(index) {
            const bgImage = slides[index].getAttribute('data-background');

            if (bgImage && !slides[index].style.backgroundImage) {
                slides[index].style.backgroundImage = `url('${bgImage}')`;
            }

            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });

            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });

            currentSlide = index;
        }

        function nextSlide() {
            const nextIndex = (currentSlide + 1) % slides.length;
            showSlide(nextIndex);
        }

        showSlide(0);
        setInterval(nextSlide, 7000);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });
    }

});
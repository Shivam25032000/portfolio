$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- contact form submission handler -->
    $("#contact-form").submit(function (event) {
        event.preventDefault();

        var name = document.querySelector('input[name="name"]').value;
        var email = document.querySelector('input[name="email"]').value.trim().toLowerCase();
        var phone = document.querySelector('input[name="phone"]').value;
        var message = document.querySelector('textarea[name="message"]').value;

        // Phone Validation: Exactly 10 digits
        if (!/^\d{10}$/.test(phone)) {
            showModal("Validation Error", "Please enter a valid 10-digit phone number.", false);
            return;
        }

        // Email Validation: Strict pattern
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            showModal("Validation Error", "Please enter a valid email address.", false);
            return;
        }

        // FormSubmit.co AJAX Request
        fetch("https://formsubmit.co/ajax/shivamkumarsingh25032000@gmail.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                message: message,
                _subject: "New Contact Form Submission",
                _template: "table"
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success === "true" || data.success === true) {
                    document.getElementById("contact-form").reset();
                    showModal("Success!", "I will get back to you soon.", true);
                } else {
                    showModal("Form Submitted", "Please check your email inbox to ACTIVATE this form for the first time.", true);
                    document.getElementById("contact-form").reset();
                }
            })
            .catch(error => {
                console.error("Submission Error:", error);
                // Check if error is related to file protocol usage
                showModal("Submission Failed", "FormSubmit AJAX does not work on local HTML files (file://). Please deploy your site or use a local server.", false);
            });
    });
    // <!-- contact form submission handler -->

});

// Custom Modal Logic
function showModal(title, message, isSuccess) {
    const modal = document.getElementById("custom-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalMessage = document.getElementById("modal-message");
    const modalIcon = document.querySelector(".modal-icon i");
    const closeBtn = document.getElementById("close-modal-btn");

    modalTitle.textContent = title;
    modalMessage.textContent = message;

    if (isSuccess) {
        modalIcon.className = "fas fa-check-circle";
        modalIcon.style.color = "#2bd47d"; // Success Green
    } else {
        modalIcon.className = "fas fa-exclamation-circle";
        modalIcon.style.color = "#da0416"; // Error Red
    }

    modal.classList.add("active");

    closeBtn.onclick = function () {
        modal.classList.remove("active");
    };

    // Close on outside click
    modal.onclick = function (e) {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    };
}

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | CodeWithShivam";
            $("#favicon").attr("href", "assets/images/favicon.jpg");
        }
        else {
            document.title = "Portfolio | Shivam Kumar Singh";
            $("#favicon").attr("href", "assets/images/favicon.jpg");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Backend Development", "Software Development", "Competitive Programming", "Problem Solving"],
    loop: true,
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 500,
});
// <!-- typed js effect ends -->

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });

function copyToClipboard(id) {
    const text = document.getElementById(id).textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert(`${id.charAt(0).toUpperCase() + id.slice(1)} copied to clipboard!`);
    });
}
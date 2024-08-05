document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container");
    const topbar = document.querySelector(".topbar");
    const navbar = document.querySelector(".navbar");
    const space = document.querySelector(".space");

    window.addEventListener("scroll", function() {
        if (window.innerWidth >= 768) {
            if (window.scrollY > 600) {
                container.classList.add("mx-0");
                topbar.classList.add("w-100", "vw-100");
                navbar.classList.add("w-100", "vw-100");
                space.classList.add("pe-4");
                topbar.classList.remove("ms-md-2", "me-md-3", "ps-md-1", "mx-lg-2", "px-lg-1", "ms-xl-1", "me-xl-2", "px-xl-2", "mx-xxl-0", "px-xxl-0");
                navbar.classList.remove("ms-md-0", "me-md-1", "mx-lg-0", "px-lg-0", "ms-xl-0", "me-xl-1", "mx-xxl-0", "px-xxl-0");
            } else {
                container.classList.remove("mx-0");
                topbar.classList.remove("w-100", "vw-100");
                navbar.classList.remove("w-100", "vw-100");
                space.classList.remove("pe-4");
                topbar.classList.add("ms-md-2", "me-md-3", "ps-md-1", "mx-lg-2", "px-lg-1", "ms-xl-1", "me-xl-2", "px-xl-2", "mx-xxl-0", "px-xxl-0");
                navbar.classList.add("ms-md-0", "me-md-1", "mx-lg-0", "px-lg-0", "ms-xl-0", "me-xl-1", "mx-xxl-0", "px-xxl-0");
            }
        } else if (window.innerWidth < 767) {
            if (window.scrollY > 600) {
                container.classList.remove("px-4");
                container.classList.add("px-0", "mx-sm-0", "px-sm-0");
                navbar.classList.add("w-100", "vw-100");           
            } else {
                container.classList.remove("px-0","mx-sm-0", "px-sm-0");
                navbar.classList.remove("w-100", "vw-100");  
                container.classList.add("px-4");
            }
        } else {
            container.classList.remove("mx-0", "px-0","mx-sm-0", "px-sm-0");
            topbar.classList.remove("w-100", "vw-100");
            navbar.classList.remove("w-100", "vw-100");
            space.classList.remove("pe-4");
            topbar.classList.add("ms-md-2", "me-md-3", "ps-md-1", "mx-lg-2", "px-lg-1", "ms-xl-1", "me-xl-2", "px-xl-2", "mx-xxl-0", "px-xxl-0");
            navbar.classList.add("ms-md-0", "me-md-1", "mx-lg-0", "px-lg-0", "ms-xl-0", "me-xl-1", "mx-xxl-0", "px-xxl-0");
        }
    });
});

function toggleTopbar() {
    var topbar = document.getElementById('topbar');
    if (window.innerWidth >= 769) {
        topbar.style.display = 'block';
    } else {
        topbar.style.display = 'none';
    }
}

toggleTopbar();

window.addEventListener('resize', function() {
    toggleTopbar();
});

const backToTop = document.querySelector(".back-to-top");

window.onscroll = function() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        backToTop.classList.add("d-block");
        backToTop.classList.remove("d-none");
    } else {
        backToTop.classList.remove("d-block");
        backToTop.classList.add("d-none");
    }
};

$('[data-toggle="counter-up"]').counterUp({
    delay: 5,
    time: 2000
});

$(document).ready(function() {
    function animateProgressBar(progressBarId, targetWidth) {
        $(progressBarId).animate({ width: targetWidth }, 1500); // Adjust animation speed as needed
    }

    $('#progress-bar-1').waypoint(function() {
        animateProgressBar('#progress-bar-1', '57%');
    }, { offset: '75%' });

    $('#progress-bar-2').waypoint(function() {
        animateProgressBar('#progress-bar-2', '67%');
    }, { offset: '75%' });

    $('#progress-bar-3').waypoint(function() {
        animateProgressBar('#progress-bar-3', '77%');
    }, { offset: '75%' });

    $('#progress-bar-4').waypoint(function() {
        animateProgressBar('#progress-bar-4', '87%');
    }, { offset: '75%' });
});


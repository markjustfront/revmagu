async function loadComponents() {

    const navbar = await fetch('components/navbar.html');
    const footer = await fetch('components/footer.html');

    document.getElementById('navbar').innerHTML =
        await navbar.text();

    document.getElementById('footer').innerHTML =
        await footer.text();

    setActiveLink();

    setupMobileMenu();
}

function setupMobileMenu() {

    const toggle = document.getElementById("menuToggle");
    const menu = document.getElementById("navMenu");

    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {

        menu.classList.toggle("active");

        const icon = toggle.querySelector("i");

        if (menu.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}

function setActiveLink() {

    const currentPage =
        window.location.pathname.split('/').pop();

    document
        .querySelectorAll('.navbar a')
        .forEach(link => {

            if (link.getAttribute('href') === currentPage) {

                link.classList.add('active');

            }

        });
}

document.querySelectorAll('#navMenu a').forEach(link => {

    link.addEventListener('click', () => {

        menu.classList.remove('active');

        const icon = toggle.querySelector('i');

        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');

    });

});

loadComponents();
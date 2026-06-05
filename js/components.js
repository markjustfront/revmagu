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

    const toggle =
        document.getElementById("menuToggle");

    const menu =
        document.getElementById("navMenu");

    if (toggle && menu) {

        toggle.addEventListener("click", () => {

            menu.classList.toggle("active");

        });

    }
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

loadComponents();
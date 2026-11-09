document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link, #mobile-menu .bg-leaf');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    const applyBtn = document.getElementById('apply-btn');
    if (applyBtn) {
        applyBtn.addEventListener('click', () => {
            applyBtn.innerText = "Application Submitted!";
            applyBtn.classList.remove('bg-white', 'text-dark', 'hover:bg-gray-200');
            applyBtn.classList.add('bg-leaf', 'text-white', 'cursor-default');
            applyBtn.disabled = true;
        });
    }
});
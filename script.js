document.addEventListener('DOMContentLoaded', () => {
    
    AOS.init({
        duration: 1000,
        once: true,
        offset: 80
    });

    const searchBtn = document.getElementById('searchBtn');
    const searchOverlay = document.getElementById('searchOverlay');
    const closeSearch = document.getElementById('closeSearch');
    const searchInput = document.getElementById('searchInput');

    searchBtn.addEventListener('click', () => {
        searchOverlay.style.display = 'flex';
        setTimeout(() => searchInput.focus(), 100);
    });

    closeSearch.addEventListener('click', () => {
        searchOverlay.style.display = 'none';
    });

    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeLogin = document.getElementById('closeLogin');
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const userBadge = document.getElementById('userBadge');

    const savedUser = localStorage.getItem('lioviaUser');
    if (savedUser) {
        userBadge.textContent = savedUser.charAt(0); 
        userBadge.style.display = 'flex';
    }

    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'flex';
    });

    closeLogin.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = usernameInput.value;
        localStorage.setItem('lioviaUser', name);
        
        userBadge.textContent = name.charAt(0);
        userBadge.style.display = 'flex';
        loginModal.style.display = 'none';
        
        alert(`Welcome back, ${name}!`);
    });

    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', () => {
        if(navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = '#fff';
            navLinks.style.padding = '20px';
            navLinks.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
        }
    });

    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape') {
            searchOverlay.style.display = 'none';
            loginModal.style.display = 'none';
        }
    });
});

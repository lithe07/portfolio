function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    const btn = document.getElementById("menuButton");
  
    menu.classList.toggle("hidden");
  
    const isOpen = !menu.classList.contains("hidden");
    btn.setAttribute("aria-expanded", String(isOpen));
  }
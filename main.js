document.addEventListener('DOMContentLoaded', () => {
  // ─── 1. LOADER (Animasi Loading Awal) ───
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => loader.classList.add('hidden'), 600);
  }

  // ─── 2. NAV SCROLL (Bikin Navbar Ada Background Pas Di-scroll) ───
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // ─── 3. HAMBURGER MENU (Menu Untuk Tampilan HP) ───
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
    // Tutup menu kalau salah satu link diklik
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  // ─── 4. SCROLL REVEAL (Animasi Muncul Dari Bawah) ───
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => observer.observe(el));

  // ─── 5. MODAL / POPUP PRODUK LOGIC ───
  const modal = document.getElementById('product-modal');
  const closeModal = document.querySelector('.close-modal');
  const productCards = document.querySelectorAll('.product-card');

  const modalTitle = document.querySelector('.modal-title');
  const modalPrice = document.querySelector('.modal-price');
  const modalCategory = document.querySelector('.modal-category');

  // Cek apakah HTML Modal benar-benar ada di index.html
  if (modal && closeModal) {
    productCards.forEach(card => {
      card.addEventListener('click', () => {
        // Ambil data dari kartu HTML
        const titleEl = card.querySelector('h3');
        const priceEl = card.querySelector('.price');
        const categoryEl = card.querySelector('.category');

        // Ganti teks di dalam Modal dengan data dari kartu yang diklik
        if (titleEl) modalTitle.innerText = titleEl.innerText;
        if (priceEl) modalPrice.innerText = priceEl.innerText;
        if (categoryEl) modalCategory.innerText = categoryEl.innerText;

        // Tampilkan Popup!
        modal.classList.add('active');
      });
    });

    // Fitur tutup Popup (Klik tombol X)
    closeModal.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    // Fitur tutup Popup (Klik area luar kotak)
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  } else {
    console.warn("HTML Modal belum dimasukkan ke index.html, popup tidak akan bekerja.");
  }
});

// ─── LOADER ───
    window.addEventListener('load', () => {
      setTimeout(() => document.getElementById('loader').classList.add('hidden'), 600);
    });

    // ─── NAV SCROLL ───
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    });

    // ─── HAMBURGER ───
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });

    // ─── SCROLL REVEAL ───
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach(el => observer.observe(el));

    // ─── MODAL / POPUP LOGIC ───
    const modal = document.getElementById('product-modal');
    const closeModal = document.querySelector('.close-modal');
    const productCards = document.querySelectorAll('.product-card');

    // Tempat teks di dalam modal yang mau kita ubah dinamis
    const modalTitle = document.querySelector('.modal-title');
    const modalPrice = document.querySelector('.modal-price');
    const modalCategory = document.querySelector('.modal-category');

    // Bikin setiap kartu produk bisa diklik
    productCards.forEach(card => {
      card.addEventListener('click', () => {
        // 1. Ambil data nama, harga, dan kategori dari kartu yang diklik
        const title = card.querySelector('h3').innerText;
        const price = card.querySelector('.price').innerText;
        const category = card.querySelector('.category').innerText;

        // 2. Suntikkan data tersebut ke dalam tulisan di Modal
        modalTitle.innerText = title;
        modalPrice.innerText = price;
        modalCategory.innerText = category;

        // 3. Tampilkan popup-nya
        modal.classList.add('active');
      });
    });

    // Tutup popup kalau klik tombol 'X'
    closeModal.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    // Tutup popup kalau user nge-klik di luar area kotak (background gelap)
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
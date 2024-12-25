// navbar
window.onscroll = function () {
  const header = document.querySelector('header')
  const fixedNav = header.offsetTop
  const toTop = document.querySelector('#toTop')

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed')
    toTop.classList.add('flex')
    toTop.classList.remove('hidden')
  } else {
    header.classList.remove('navbar-fixed')
    toTop.classList.add('hidden')
    toTop.classList.remove('flex')
  }
}

// hamburger
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active')
  navMenu.classList.toggle('hidden')
})

window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active')
    navMenu.classList.add('hidden')
  }
})

// darkmode
const darkToggle = document.querySelector('#dark-toggle')
const html = document.querySelector('html')

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark')
    localStorage.theme = 'dark'
  } else {
    html.classList.remove('dark')
    localStorage.theme = 'light'
  }
})

if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  darkToggle.checked = true
  html.classList.add('dark')
} else {
  darkToggle.checked = false
  html.classList.remove('dark')
}

//Ternary Operator ⬇

/*
darkToggle.addEventListener('click', function() {
  darkToggle.checked 
    ? (html.classList.add('dark'), localStorage.setItem('theme', 'dark'))
    : (html.classList.remove('dark'), localStorage.setItem('theme', 'light'));
});

// Apply the saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  savedTheme === 'dark' 
    ? (darkToggle.checked = true, html.classList.add('dark'))
    : (darkToggle.checked = false, html.classList.remove('dark'));
});*/

// dropdown bahasa
const languageBtn = document.getElementById('language-btn')
const languageDropdown = document.getElementById('language-dropdown')

// Menampilkan dropdown ketika tombol bahasa diklik
languageBtn.addEventListener('click', function (e) {
  e.stopPropagation()
  languageDropdown.classList.toggle('hidden')
})

// Menutup dropdown jika klik di luar dropdown
window.addEventListener('click', function (e) {
  if (e.target !== languageBtn && !languageDropdown.contains(e.target)) {
    languageDropdown.classList.add('hidden')
  }
})

// Data terjemahan untuk bahasa Inggris dan Indonesia
const translations = {
  en: {
    home: 'Home',
    about: 'About Me',
    portfolio: 'Portfolio',
    courses: 'Courses',
    certificates: 'Certificates',
    contact: 'Contact',
    light: 'Light',
    dark: 'Dark',
    language: 'Lang',
    heroGreeting: 'Hello Everyone👋😄, I am',
    heroDescription: 'Fresh Graduate | Web Developer | Tech Enthusiast',
    heroQuote: 'Your future starts with yourself. If you want to succeed, just',
    quote: 'learn!',
    contactBtnText: 'Contact Me',
    aboutContent: 'Fresh Graduate with a Spirit of Innovation',
    aboutDescription:
      'I am a graduate of Informatics Engineering with a GPA of 3.49, with experience in various academic projects. I am committed to continuously improving my skills in the field of technology development, particularly web development and software solutions, to create a meaningful impact in the digital world.',
    expertiseTitle: 'Expertise',
    expertiseDescription:
      'My expertise includes web development (HTML, CSS, JavaScript, PHP). I can also work well both independently and in teams to deliver optimal results.',
    portfolioSubtitle: 'Latest Projects',
    portfolioDescription:
      'This portfolio showcases some of the recent projects I have worked on, reflecting my dedication to developing modern technology, creative, and design skills.',
    coursesSubtitle: 'Learning Platforms',
    coursesDescription:
      'Collaboration with these institutions reflects my commitment to continuous learning, improving skills, and contributing the best in the technology field.',
    certificatesSubtitle: 'Skill Certifications',
    certificatesDescription:
      'Each certificate I obtain reflects my journey of learning and striving to improve in the professional world.',
    contactSubtitle: 'Get in Touch',
    contactDescription:
      'Whatever your needs may be, whether questions, suggestions, or collaboration, reach out to us, and we will respond promptly.',
    contactName: 'Name',
    contactMessage: 'Message',
    contactSend: 'Send',
    link: 'Link',
  },
  id: {
    home: 'Beranda',
    about: 'Tentang Saya',
    portfolio: 'Portofolio',
    courses: 'Kursus',
    certificates: 'Sertifikat',
    contact: 'Kontak',
    light: 'Terang',
    dark: 'Gelap',
    language: 'Bahasa',
    heroGreeting: 'Halo Semua👋😄, Saya',
    heroDescription: 'Fresh Graduate | Web Developer | Tech Enthusiast',
    heroQuote: 'Masa depanmu dimulai dari dirimu sendiri. Kalo mau sukses ya',
    quote: 'belajar!',
    contactBtnText: 'Hubungi Saya',
    aboutContent: 'Fresh Graduate dengan Semangat Inovasi',
    aboutDescription:
      'Saya adalah lulusan Teknik Informatika dengan IPK 3.49, memiliki pengalaman dalam berbagai proyek akademik. Saya berkomitmen untuk terus meningkatkan keahlian di bidang pengembangan teknologi, khususnya pengembangan web dan solusi perangkat lunak, untuk menciptakan dampak yang bermanfaat di dunia digital.',
    expertiseTitle: 'Keahlian',
    expertiseDescription:
      'Keahlian saya mencakup pengembangan web (HTML, CSS, JavaScript, PHP). Saya juga dapat bekerja secara tim maupun mandiri untuk menyelesaikan proyek dengan hasil yang optimal.',
    portfolioSubtitle: 'Project Terbaru',
    portfolioDescription:
      'Portofolio ini menampilkan beberapa proyek terbaru yang telah saya kerjakan, mencerminkan dedikasi saya dalam mengembangkan keterampilan teknologi modern, kreatif dan desain.',
    coursesSubtitle: 'Platform Belajar',
    coursesDescription:
      'Kolaborasi dengan lembaga ini mencerminkan komitmen saya untuk terus belajar, meningkatkan keterampilan, dan memberikan kontribusi terbaik di bidang teknologi.',
    certificatesSubtitle: 'Sertifikasi Keahlian',
    certificatesDescription:
      'Setiap sertifikat yang diperoleh mencerminkan perjalanan saya dalam belajar dan terus berupaya untuk meningkatkan diri di dunia profesional.',
    contactSubtitle: 'Hubungi Kami',
    contactDescription:
      'Apapun kebutuhan Anda, baik itu pertanyaan, saran, atau kolaborasi, hubungi kami dan kami akan segera merespons.',
    contactName: 'Nama',
    contactMessage: 'Pesan',
    contactSend: 'Kirim',
    link: 'Tautan',
  },
}

// Fungsi untuk mengganti bahasa halaman
function setLanguage(lang) {
  // Menyimpan bahasa ke localStorage
  localStorage.setItem('lang', lang)

  // Memperbarui teks halaman dengan bahasa yang dipilih dengan transisi
  const elements = document.querySelectorAll('[data-translate]')
  elements.forEach((element) => {
    // Menyembunyikan elemen dengan transisi
    element.classList.add('opacity-0')

    // Menunggu transisi selesai sebelum mengganti teks
    setTimeout(() => {
      const key = element.getAttribute('data-translate')
      if (translations[lang] && translations[lang][key]) {
        element.innerText = translations[lang][key]
      }

      // Menampilkan elemen kembali dengan transisi
      element.classList.remove('opacity-0')
    }, 500) // Durasi sesuai dengan `duration-500`
  })

  // Mengubah teks yang tampil di tombol bahasa
  document.getElementById('selected-lang').innerText =
    lang === 'en' ? 'Lang' : 'Bahasa'
}

// Event listener untuk item bahasa dalam dropdown
const languageItems = languageDropdown.querySelectorAll('li')
languageItems.forEach((item) => {
  item.addEventListener('click', function () {
    const lang = this.getAttribute('data-lang')
    setLanguage(lang)
    languageDropdown.classList.add('hidden') // Menyembunyikan dropdown setelah memilih bahasa
  })
})

// Set bahasa awal saat halaman dimuat
const storedLang = localStorage.getItem('lang') || 'en'
document.body.setAttribute('data-lang', storedLang)
setLanguage(storedLang)

// Animasi Typing text
// Array teks yang akan ditampilkan
const texts = ['Fresh Graduate', 'Web Developer', 'Tech Enthusiast']
const typingText = document.getElementById('typing-text')
let index = 0 // Index teks saat ini
let charIndex = 0 // Index karakter saat ini
let isDeleting = false // Status penghapusan teks

// Kecepatan animasi
const typingSpeed = 100 // Kecepatan mengetik (ms)
const deletingSpeed = 50 // Kecepatan menghapus (ms)
const delayBetweenTexts = 1000 // Waktu jeda antara teks (ms)

function typeEffect() {
  const currentText = texts[index]
  if (isDeleting) {
    // Kurangi karakter
    charIndex--
    typingText.textContent = currentText.substring(0, charIndex)
  } else {
    // Tambahkan karakter
    charIndex++
    typingText.textContent = currentText.substring(0, charIndex)
  }

  // Tentukan langkah berikutnya
  if (!isDeleting && charIndex === currentText.length) {
    // Teks selesai, tunggu sebelum menghapus
    isDeleting = true
    setTimeout(typeEffect, delayBetweenTexts)
  } else if (isDeleting && charIndex === 0) {
    // Penghapusan selesai, ganti ke teks berikutnya
    isDeleting = false
    index = (index + 1) % texts.length // Berpindah ke teks berikutnya
    setTimeout(typeEffect, typingSpeed)
  } else {
    // Lanjut mengetik atau menghapus
    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed)
  }
}

// Mulai animasi
typeEffect()

// animasi cursor
const cursorShadow = document.getElementById('cursor-shadow')

document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e
  cursorShadow.style.transform = `translate(${clientX}px, ${clientY}px)`
})

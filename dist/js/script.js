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

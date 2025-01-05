const menuToggle = document.getElementById('menuToggle')
const navMenu = document.getElementById('navMenu')

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open')
})

document.addEventListener('click', e => {
  if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
    navMenu.classList.remove('open')
  }
})

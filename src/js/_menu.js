const navToggle = () => {
  const btn = document.querySelector('.header__menu-button');
  const menu = document.querySelector('nav.header__menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      let state = btn.getAttribute('aria-expanded');
      let newState = !(state === 'true');
      btn.setAttribute('aria-expanded', newState);
      document.body.classList.toggle('show-overlay')
    })
  }
}

module.exports = {navToggle}
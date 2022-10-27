const navToggle = () => {
  console.log('menu init');
  const btn = document.querySelector('.header__menu-button');
  const menu = document.querySelector('nav.header__menu');
  console.log(btn); 
  if (btn && menu) {
    btn.addEventListener('click', () => {
      let state = btn.getAttribute('aria-expanded');
      let newState = (state === 'true') ? 'false' : 'true';
      btn.setAttribute('aria-expanded', newState);
      menu.classList.toggle('header__menu--hidden');
      document.body.classList.toggle('show-overlay')
    })
  }
}

module.exports = {navToggle}
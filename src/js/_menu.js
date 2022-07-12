const navToggle = () => {
  console.log('menu init');
  const btn = document.querySelector('.header__menu-button');
  console.log(btn); 
  if (btn) {
    btn.addEventListener('click', () => {
      let state = btn.getAttribute('aria-expanded');
      let newState = (state === 'true') ? 'false' : 'true';
      btn.setAttribute('aria-expanded', newState);
    })
  }
}

module.exports = {navToggle}
const navToggle = () => {
  const btn = document.querySelector('.header__menu-button');
  if (btn) {
    btn.addEventListener('click', () => {
      let state = btn.getAttribute('aria-expanded');
      console.log(btn);
      let newState = (state === 'true') ? 'false' : 'true';
      btn.setAttribute('aria-expanded', newState);
    })
  }
}

module.exports = {
  navToggle
}
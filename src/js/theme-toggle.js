/**
 * Theme Toggle — 3-state radio fieldset: auto / light / dark
 *
 * "auto" removes data-theme → CSS `color-scheme: light dark` follows OS.
 * "light" / "dark" sets data-theme → CSS `color-scheme: light` or `dark`.
 *
 * Minimal JS: reads stored preference, checks the matching radio,
 * and listens for native `change` events. All color logic is in CSS
 * via light-dark().
 */

const STORAGE_KEY = 'theme';

function applyTheme(theme) {
  if (theme === 'auto') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }
}

function getStoredTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY) || 'auto';
  } catch {
    return 'auto';
  }
}

function storeTheme(theme) {
  try {
    if (theme === 'auto') {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, theme);
    }
  } catch {
    // localStorage unavailable — degrade silently
  }
}

// ── Apply stored theme immediately (before DOMContentLoaded) ──
applyTheme(getStoredTheme());

// ── Bind radio inputs once DOM is ready ──
document.addEventListener('DOMContentLoaded', () => {
  const stored = getStoredTheme();

  // Check the stored radio across ALL theme-toggle fieldsets on the page
  document.querySelectorAll(`input[name="theme"][value="${stored}"]`)
    .forEach((radio) => { radio.checked = true; });

  // Listen for changes on any theme radio
  document.addEventListener('change', (e) => {
    if (e.target.name === 'theme') {
      const theme = e.target.value;
      applyTheme(theme);
      storeTheme(theme);

      // Sync other fieldsets on the page (sidebar + topbar)
      document.querySelectorAll(`input[name="theme"][value="${theme}"]`)
        .forEach((radio) => { radio.checked = true; });
    }
  });
});

(() => {
  const contact = document.querySelector('[data-contact]');
  const copyButton = contact?.querySelector('[data-copy-email]');
  const status = contact?.querySelector('[data-copy-status]');
  const address = contact?.querySelector('[data-email-address]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  let copyVersion = 0;
  document.querySelectorAll('[data-open-contact]').forEach(link => {
    link.addEventListener('click', event => {
      if (!contact) return;
      event.preventDefault();
      if (mobileMenu) mobileMenu.open = false;
      contact.open = true;
      contact.scrollIntoView({ behavior: 'instant', block: 'end' });
      history.replaceState(history.state, '', '#contact');
      contact.querySelector('summary').focus({ preventScroll: true });
    });
  });
  const openFromHash = () => { if (location.hash === '#contact' && contact) contact.open = true; };
  openFromHash();
  window.addEventListener('hashchange', openFromHash);
  copyButton?.addEventListener('click', async () => {
    const version = ++copyVersion;
    copyButton.disabled = true;
    copyButton.textContent = copyButton.dataset.copyLabel;
    copyButton.classList.remove('is-copied');
    status.textContent = '';
    try {
      await navigator.clipboard.writeText(address.textContent.trim());
      if (version !== copyVersion || !contact.open) return;
      copyButton.textContent = copyButton.dataset.copiedLabel;
      copyButton.classList.add('is-copied');
      status.textContent = copyButton.dataset.success;
    } catch (error) {
      if (version !== copyVersion || !contact.open) return;
      address.focus({ preventScroll: true });
      const range = document.createRange(); range.selectNodeContents(address);
      const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range);
      status.textContent = copyButton.dataset.failure;
    } finally { if (version === copyVersion) copyButton.disabled = false; }
  });
  contact?.addEventListener('toggle', () => {
    if (!contact.open) { copyVersion++; copyButton.disabled = false; copyButton.textContent = copyButton.dataset.copyLabel; copyButton.classList.remove('is-copied'); status.textContent = ''; }
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    for (const panel of [contact, mobileMenu]) {
      if (panel?.open) { panel.open = false; panel.querySelector('summary').focus({ preventScroll: true }); break; }
    }
  });
})();

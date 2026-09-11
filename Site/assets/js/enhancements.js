(() => {
  'use strict';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const nav = document.getElementById('navUl');
  const menu = document.getElementById('hbg');
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav?.classList.contains('open')) {
      nav.classList.remove('open'); menu?.setAttribute('aria-expanded', 'false'); menu?.focus();
    }
  });

  document.querySelectorAll('.faq-q').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.faq-q').forEach(other => {
        const open = other.closest('.faq-item')?.classList.contains('open') ?? false;
        other.setAttribute('aria-expanded', String(open));
        const answer = document.getElementById(other.getAttribute('aria-controls'));
        if (answer) answer.hidden = !open;
      });
    });
  });
  document.querySelectorAll('.pf-btn').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('.pf-btn').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
  }));

  const modal = document.getElementById('pfModal');
  const modalBox = document.getElementById('pfModalBox');
  let opener = null;
  if (modal && modalBox) {
    modalBox.setAttribute('aria-modal', 'true');
    modalBox.setAttribute('aria-labelledby', 'pmTitle');
    document.querySelectorAll('.pf-card[data-id]').forEach(card => card.addEventListener('click', () => { opener = card; }));
    const syncModal = () => {
      const open = modal.classList.contains('open');
      modal.hidden = !open;
      modal.inert = !open;
      if (open) requestAnimationFrame(() => document.getElementById('pfModalClose')?.focus());
      else opener?.focus();
    };
    new MutationObserver(syncModal).observe(modal, { attributes:true, attributeFilter:['class'] });
    modal.addEventListener('keydown', event => {
      if (event.key !== 'Tab') return;
      const focusable = [...modal.querySelectorAll('button:not([disabled]),a[href],iframe,[tabindex]:not([tabindex="-1"])')].filter(el => !el.hidden);
      if (!focusable.length) return;
      const first = focusable[0], last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    });
  }

  const tabs = document.getElementById('srvTabs');
  tabs?.addEventListener('keydown', event => {
    if (!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
    const items = [...tabs.querySelectorAll('[role="tab"]')];
    const current = items.indexOf(document.activeElement);
    if (current < 0) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : (current + (event.key === 'ArrowRight' ? 1 : -1) + items.length) % items.length;
    items[next].focus(); items[next].click();
  });
  const updateTabs = () => document.querySelectorAll('.srv-tab').forEach((tab, i) => {
    tab.id = 'srv-tab-' + i; tab.setAttribute('aria-controls', 'srvPanel');
    tab.tabIndex = tab.getAttribute('aria-selected') === 'true' ? 0 : -1;
  });
  new MutationObserver(updateTabs).observe(tabs, { childList:true });
  updateTabs();

  if (reduced.matches) document.querySelectorAll('[data-count]').forEach(el => { el.textContent = el.dataset.count; });
})();

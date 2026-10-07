async function copyBibTeX() {
  const text = document.getElementById('bibtex-code').textContent;
  const label = document.querySelector('.copy-text');
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    const field = document.createElement('textarea');
    field.value = text;
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.appendChild(field);
    field.select();
    const copied = document.execCommand('copy');
    field.remove();
    if (!copied) { label.textContent = 'Select to copy'; return; }
  }
  label.textContent = 'Copied!';
  setTimeout(() => { label.textContent = 'Copy'; }, 2000);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
  const scrollButton = document.querySelector('.scroll-to-top');
  const updateScrollButton = () => scrollButton.classList.toggle('visible', window.scrollY > 300);
  window.addEventListener('scroll', updateScrollButton, { passive: true });
  updateScrollButton();

  const tabs = Array.from(document.querySelectorAll('.intro-tabs [role="tab"]'));
  const video = document.getElementById('cadam-video');
  let selectedView = 'overview';

  function selectView(view, playVideo = false) {
    if (!tabs.some(tab => tab.dataset.view === view)) return;
    selectedView = view;
    tabs.forEach(tab => {
      const selected = tab.dataset.view === view;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      document.getElementById(tab.getAttribute('aria-controls')).hidden = !selected;
    });
    video.pause();
    if (view === 'video' && playVideo) {
      video.currentTime = 0;
      video.play().then(() => {
        // A quick switch can happen while the video is still loading.
        if (selectedView !== 'video' || document.hidden) video.pause();
      }).catch(() => {
        // Native controls remain available if the browser blocks playback.
      });
    }
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectView(tab.dataset.view, true));
    tab.addEventListener('keydown', event => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      let next = index;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault();
      // Manual activation: Enter or Space activates the focused tab.
      tabs[next].focus();
    });
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) video.pause();
  });

  // Preserve the original five-second automatic results carousel.
  if (typeof bulmaCarousel !== 'undefined') {
    bulmaCarousel.attach('#results-carousel', {
      slidesToScroll: 1,
      slidesToShow: 1,
      loop: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000
    });
  }
});

/**
 * 🏛️ KARAN SINGH VERMA — PORTFOLIO RUNTIME ENGINE
 * Live Telemetry, Dynamic Clock, Filtering & Micro-Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initClock();
  initProjectFilters();
  initTerminalTabs();
  initClipboardHooks();
  initMobileNav();
});

/* 1. Dynamic IST Clock */
function initClock() {
  const clockEl = document.getElementById('live-clock');
  if (!clockEl) return;

  function update() {
    const now = new Date();
    // Format in IST (UTC+5:30)
    const options = {
      timeZone: 'Asia/Kolkata',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    const timeString = new Intl.DateTimeFormat('en-GB', options).format(now);
    clockEl.textContent = `${timeString} IST`;
  }

  update();
  setInterval(update, 1000);
}

/* 2. Project Category Filtering */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filter === 'all' || categories.split(' ').includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* 3. Terminal Tab Switcher */
function initTerminalTabs() {
  const tabBtns = document.querySelectorAll('.terminal-tab-btn');
  const tabContents = {
    'philosophy': document.getElementById('term-content-philosophy'),
    'mesh': document.getElementById('term-content-mesh')
  };

  if (!tabBtns.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.getAttribute('data-tab');
      Object.keys(tabContents).forEach(key => {
        if (tabContents[key]) {
          tabContents[key].style.display = (key === target) ? 'block' : 'none';
        }
      });
    });
  });
}

/* 4. One-Click Copy to Clipboard & Toast */
function initClipboardHooks() {
  const copyBtns = document.querySelectorAll('[data-copy]');
  const toast = document.getElementById('toast-notice');
  const toastText = document.getElementById('toast-text');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied "${textToCopy}" to clipboard.`);
      }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(`Copied "${textToCopy}" to clipboard.`);
      });
    });
  });

  function showToast(msg) {
    if (!toast) return;
    if (toastText) toastText.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
}

/* 5. Mobile Navigation Toggle */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
    toggleBtn.textContent = navLinks.classList.contains('mobile-open') ? '✕' : '☰';
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('mobile-open');
      toggleBtn.textContent = '☰';
    });
  });
}

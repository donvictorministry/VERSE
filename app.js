/* ===== DV STATE ===== */
var dvState = {
  currentSituation: null,
  currentTranslation: 'KJV',
  currentVerseIndex: 0,
  currentVerse: null,
  darkMode: false,
  theme: 'blue',
  favorites: [],
  deferredInstall: null
};

/* ===== MODAL CONTENT ===== */
var dvModalContent = {

  about_us: {
    title: "About Us",
    html: "<p><strong>Verse For My Situation</strong> is a ministry-grade Scripture tool built by DV Biblefirm Christian Tech Ministry.</p><p>Our mission is reaching six million souls across six continents through digital ministry technology. This application is one instrument in that mission — providing immediate, offline-accessible Scripture for every human situation.</p><p>Every verse is carefully selected from trusted Bible translations to speak directly into real-life circumstances faced by believers around the world.</p>"
  },

  about_dev: {
    title: "About Developer",
    html: "<p><strong>Rev. Dr. Chris Johnson, PhD</strong> is an ordained minister, theologian, and technology innovator. He is the founder of:</p><ul style='padding-left:18px;color:var(--dv-text-sub);line-height:2;'><li>Biblefirm Christian Tech Ministry</li><li>CEMLCA (Centre for Ministry and Leadership Christian Academy)</li><li>Chris Ministries Online Community</li></ul><p>Rev. Dr. Johnson builds all applications personally on Android — believing that the most effective ministry tools are built by those who understand the ministry firsthand.</p><p>His work bridges theology and technology, making God's Word accessible to every generation.</p>"
  },

  copyright: {
    title: "Proprietary Software Copyright Notice",
    html: "<div class='dv-copy-box'><strong>PROPRIETARY SOFTWARE COPYRIGHT NOTICE</strong><br><br>Copyright &copy; " + new Date().getFullYear() + " Rev. Dr. Chris Johnson, PhD. All Rights Reserved.<br><br>This software, including all associated source code, design elements, application logic, and content, is the exclusive proprietary property of Rev. Dr. Chris Johnson, PhD and DV Biblefirm.<br><br>No part of this software may be reproduced, distributed, reverse-engineered, decompiled, disassembled, modified, or transmitted in any form or by any means without the prior written permission of Rev. Dr. Chris Johnson, PhD.<br><br>Unauthorized use, copying, or distribution of this software, in whole or in part, may result in severe civil and criminal penalties and will be prosecuted to the maximum extent permitted by law.</div><p>All Bible verse content is used for non-commercial ministry purposes. All translation rights remain with their respective copyright holders.</p>"
  },

  community: {
    title: "About Our Online Community",
    html: "<p><strong>Chris Ministries Online Community</strong> is a vibrant WhatsApp-based fellowship connecting believers across six continents.</p><p>Our community is a space for:</p><ul style='padding-left:18px;color:var(--dv-text-sub);line-height:2;'><li>Daily Scripture meditation and devotion</li><li>Prayer requests and intercession</li><li>Ministry training and leadership development</li><li>Evangelism and soul-winning outreach</li></ul><p>Join thousands of believers already growing in faith together.</p><a href='https://chat.whatsapp.com/placeholder' style='display:inline-block;margin-top:12px;padding:12px 20px;background:var(--dv-primary);color:#fff;border-radius:10px;text-decoration:none;font-weight:700;'>Join WhatsApp Community</a>"
  },

  support: {
    title: "Support Us",
    html: "<p>Verse For My Situation is provided completely free as part of our ministry commitment to make God's Word accessible to everyone, everywhere, at no cost.</p><p>Your support helps us:</p><ul style='padding-left:18px;color:var(--dv-text-sub);line-height:2;'><li>Maintain and improve this application</li><li>Add more verses, situations, and translations</li><li>Build more ministry-grade tools</li><li>Reach six million souls across six continents</li></ul><p>If this app has been a blessing to you, please consider sharing it with others — that is the greatest support you can give.</p>"
  },

  terms: {
    title: "Terms of Use",
    html: "<p>By using Verse For My Situation, you agree to the following terms:</p><h3>1. Ministry Use</h3><p>This application is provided for personal spiritual growth, ministry, and non-commercial use only.</p><h3>2. No Warranty</h3><p>This application is provided 'as is' without warranty of any kind. Rev. Dr. Chris Johnson, PhD and DV Biblefirm make no representations regarding accuracy or fitness for a particular purpose.</p><h3>3. Prohibited Use</h3><p>You may not redistribute, resell, or claim ownership of this application or any portion thereof.</p><h3>4. Data Privacy</h3><p>This application stores data locally on your device only. No personal data is transmitted to any server.</p>"
  },

  privacy: {
    title: "Privacy Policy",
    html: "<p>Your privacy is important to us. This Privacy Policy explains how Verse For My Situation handles your information.</p><h3>Data Collection</h3><p>We do not collect any personal data. All verse data, favorites, and preferences are stored locally on your device using IndexedDB and localStorage.</p><h3>No Analytics</h3><p>We do not use any analytics, tracking pixels, or telemetry of any kind.</p><h3>Offline First</h3><p>This application functions completely offline. No data leaves your device during normal use.</p><h3>Full Policy</h3><p><a href='https://biblefirm.example.com/privacy' style='color:var(--dv-primary);'>View full Privacy Policy at biblefirm.example.com/privacy</a></p>"
  },

  contact: {
    title: "Contact Us",
    html: "<p>Reach out to Rev. Dr. Chris Johnson, PhD and the DV Biblefirm team through any of the channels below.</p><p>We read every message and respond to every genuine inquiry in the name of Jesus.</p><div class='dv-contact-row'><button class='dv-contact-btn dv-email' onclick=\"window.location.href='mailto:info@biblefirm.example.com'\" aria-label='Email'><svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'/><polyline points='22,6 12,13 2,6'/></svg></button><button class='dv-contact-btn dv-phone' onclick=\"window.location.href='tel:+2347000000000'\" aria-label='Phone'><svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><path d='M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.13 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012.07 1h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z'/></svg></button><button class='dv-contact-btn dv-wa' onclick=\"window.open('https://wa.me/2347000000000','_blank')\" aria-label='WhatsApp'><svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor'><path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'/></svg></button><button class='dv-contact-btn dv-fb' onclick=\"window.open('https://facebook.com/biblefirm','_blank')\" aria-label='Facebook'><svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor'><path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'/></svg></button></div><p style='text-align:center;color:var(--dv-text-sub);font-size:0.9rem;'>Office Hours: Monday — Friday, 9:00 AM — 5:00 PM WAT</p>"
  },

  notification: {
    title: "Proprietary Software Notification",
    html: "<div class='dv-copy-box'><strong>IMPORTANT NOTICE</strong><br><br>This is a proprietary software product developed exclusively by Rev. Dr. Chris Johnson, PhD and DV Biblefirm.<br><br>You are authorized to use this application for personal and ministry purposes only. Any unauthorized reproduction, distribution, or modification of this application is strictly prohibited and constitutes a violation of intellectual property law.<br><br>DV Biblefirm actively monitors for unauthorized use and will take appropriate legal action where necessary.</div><p>Thank you for respecting the work that goes into building ministry-grade technology for God's Kingdom.</p>"
  }

};

/* ===== LEFT NAV ITEMS ===== */
var dvLeftNavItems = [
  { key:'about_us', label:'About Us', icon:'<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>' },
  { key:'about_dev', label:'About Developer', icon:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>' },
  { key:'copyright', label:'Proprietary Copyright Notice', icon:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>' },
  { key:'community', label:'Online Community (WhatsApp)', icon:'<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15"/>' },
  { key:'support', label:'Support Us', icon:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>' },
  { key:'terms', label:'Terms of Use', icon:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>' },
  { key:'privacy', label:'Privacy Policy', icon:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>' },
  { key:'contact', label:'Contact Us', icon:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>' },
  { key:'notification', label:'Software Notification', icon:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>' },
  { key:'close_left', label:'Exit Sidebar', icon:'<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>' }
];

/* ===== RIGHT NAV ITEMS ===== */
var dvRightNavItems = [
  { key:'todo', label:'To-Do List', icon:'<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>' },
  { key:'install', label:'Install App', icon:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>' },
  { key:'share_app', label:'Share App', icon:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>' },
  { key:'close_right', label:'Exit Sidebar', icon:'<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>' }
];

/* ===== 10 THEMES ===== */
var dvThemes = [
  { name:'blue',   hex:'#1877F2' },
  { name:'purple', hex:'#7C3AED' },
  { name:'green',  hex:'#16A34A' },
  { name:'red',    hex:'#DC2626' },
  { name:'orange', hex:'#EA580C' },
  { name:'teal',   hex:'#0D9488' },
  { name:'pink',   hex:'#DB2777' },
  { name:'indigo', hex:'#4F46E5' },
  { name:'amber',  hex:'#D97706' },
  { name:'slate',  hex:'#475569' }
];

/* ===== TOAST ===== */
var dvToastTimer = null;
function dvShowToast(msg) {
  var el = document.getElementById('dvToast');
  el.textContent = msg;
  el.classList.add('dv-toast-show');
  clearTimeout(dvToastTimer);
  dvToastTimer = setTimeout(function() {
    el.classList.remove('dv-toast-show');
  }, 2200);
}

/* ===== BUILD LEFT SIDEBAR ===== */
function dvBuildLeftNav() {
  var nav = document.getElementById('dvLeftNav');
  var html = '';
  for (var i = 0; i < dvLeftNavItems.length; i++) {
    var item = dvLeftNavItems[i];
    html += '<button class="dv-sidebar-item" data-dv-key="' + item.key + '">' +
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' + item.icon + '</svg>' +
      '<span class="dv-sidebar-item-label">' + item.label + '</span></button>';
  }
  nav.innerHTML = html;
  nav.querySelectorAll('.dv-sidebar-item').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var key = btn.getAttribute('data-dv-key');
      dvCloseAllSidebars();
      if (key === 'close_left') return;
      dvOpenModal(key);
    });
  });
}

/* ===== BUILD RIGHT SIDEBAR ===== */
function dvBuildRightNav() {
  // Color dots
  var colorRow = document.getElementById('dvColorRow');
  var colorHtml = '';
  for (var i = 0; i < dvThemes.length; i++) {
    var t = dvThemes[i];
    colorHtml += '<button class="dv-color-dot' + (dvState.theme === t.name ? ' dv-active-dot' : '') +
      '" style="background:' + t.hex + ';" data-dv-theme="' + t.name + '" aria-label="' + t.name + ' theme"></button>';
  }
  colorRow.innerHTML = colorHtml;
  colorRow.querySelectorAll('.dv-color-dot').forEach(function(dot) {
    dot.addEventListener('click', function() {
      dvSetTheme(dot.getAttribute('data-dv-theme'));
      dvCloseAllSidebars();
    });
  });

  // Dark toggle state
  var darkToggle = document.getElementById('dvDarkToggle');
  if (dvState.darkMode) darkToggle.classList.add('dv-on');
  else darkToggle.classList.remove('dv-on');

  // Right nav items
  var nav = document.getElementById('dvRightNav');
  var html = '';
  for (var j = 0; j < dvRightNavItems.length; j++) {
    var item = dvRightNavItems[j];
    html += '<button class="dv-right-item" data-dv-rkey="' + item.key + '">' +
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' + item.icon + '</svg>' +
      item.label + '</button>';
  }
  nav.innerHTML = html;
  nav.querySelectorAll('.dv-right-item').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var key = btn.getAttribute('data-dv-rkey');
      dvCloseAllSidebars();
      if (key === 'close_right') return;
      if (key === 'install') { dvHandleInstall(); return; }
      if (key === 'share_app') { dvShareApp(); return; }
      if (key === 'todo') { dvOpenModal('todo_modal'); return; }
    });
  });
}

/* ===== SIDEBAR CONTROLS ===== */
function dvOpenLeft() {
  document.getElementById('dvLeftSidebar').classList.add('dv-open');
  document.getElementById('dvOverlay').classList.add('dv-active');
}
function dvOpenRight() {
  document.getElementById('dvRightSidebar').classList.add('dv-open');
  document.getElementById('dvOverlay').classList.add('dv-active');
}
function dvCloseAllSidebars() {
  document.getElementById('dvLeftSidebar').classList.remove('dv-open');
  document.getElementById('dvRightSidebar').classList.remove('dv-open');
  document.getElementById('dvOverlay').classList.remove('dv-active');
}

document.getElementById('dvHamburgerBtn').addEventListener('click', dvOpenLeft);
document.getElementById('dvDotsBtn').addEventListener('click', dvOpenRight);
document.getElementById('dvOverlay').addEventListener('click', function() {
  dvCloseAllSidebars();
  dvCloseShareDropdown();
});

/* ===== MODAL ===== */
function dvOpenModal(key) {
  var modal = document.getElementById('dvInfoModal');
  var titleEl = document.getElementById('dvModalTitle');
  var bodyEl = document.getElementById('dvModalBody');
  if (key === 'todo_modal') {
    titleEl.textContent = 'To-Do List';
    bodyEl.innerHTML = dvBuildTodoHTML();
    dvBindTodoEvents();
  } else {
    var data = dvModalContent[key];
    if (!data) return;
    titleEl.textContent = data.title;
    bodyEl.innerHTML = data.html;
  }
  modal.classList.add('dv-active');
  try { window.location.hash = '#modal-' + key; } catch(e) {}
}
function dvCloseModal() {
  document.getElementById('dvInfoModal').classList.remove('dv-active');
  try { if (window.location.hash.indexOf('#modal-') === 0) history.replaceState(null, '', '#home'); } catch(e) {}
}

document.getElementById('dvCloseModal').addEventListener('click', dvCloseModal);

/* ===== THEME ===== */
function dvSetTheme(name) {
  dvState.theme = name;
  document.documentElement.setAttribute('data-dv-theme', name);
  localStorage.setItem('dv-theme', name);
  // Update color dot active states
  document.querySelectorAll('.dv-color-dot').forEach(function(d) {
    d.classList.toggle('dv-active-dot', d.getAttribute('data-dv-theme') === name);
  });
  var found = dvThemes.filter(function(t) { return t.name === name; });
  if (found.length) {
    document.getElementById('dvMetaTheme').setAttribute('content', found[0].hex);
  }
}

/* ===== DARK MODE ===== */
function dvSetDark(on) {
  dvState.darkMode = on;
  if (on) document.documentElement.setAttribute('data-dv-dark', '1');
  else document.documentElement.removeAttribute('data-dv-dark');
  localStorage.setItem('dv-dark', on ? '1' : '0');
  var toggle = document.getElementById('dvDarkToggle');
  toggle.classList.toggle('dv-on', on);
}

/* ===== BUILD SITUATIONS ===== */
function dvBuildSituations() {
  var el = document.getElementById('dvSituations');
  var html = '';
  for (var i = 0; i < dvSituations.length; i++) {
    html += '<button class="dv-sit-btn" data-dv-sit="' + dvSituations[i] + '">' + dvSituations[i] + '</button>';
  }
  el.innerHTML = html;
  el.querySelectorAll('.dv-sit-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      el.querySelectorAll('.dv-sit-btn').forEach(function(b) { b.classList.remove('dv-sit-active'); });
      btn.classList.add('dv-sit-active');
      dvState.currentSituation = btn.getAttribute('data-dv-sit');
      dvState.currentVerseIndex = 0;
      dvShowVerse();
    });
  });
}

/* ===== BUILD TRANSLATIONS ===== */
function dvBuildTranslations() {
  var el = document.getElementById('dvTransRow');
  var html = '';
  for (var i = 0; i < dvTranslations.length; i++) {
    var t = dvTranslations[i];
    html += '<button class="dv-trans-btn' + (dvState.currentTranslation === t ? ' dv-trans-active' : '') +
      '" data-dv-trans="' + t + '">' + dvTransLabels[t] + '</button>';
  }
  el.innerHTML = html;
  el.querySelectorAll('.dv-trans-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      el.querySelectorAll('.dv-trans-btn').forEach(function(b) { b.classList.remove('dv-trans-active'); });
      btn.classList.add('dv-trans-active');
      dvState.currentTranslation = btn.getAttribute('data-dv-trans');
      dvState.currentVerseIndex = 0;
      dvShowVerse();
    });
  });
}

/* ===== SHOW VERSE ===== */
function dvShowVerse() {
  if (!dvState.currentSituation) return;
  var pool = dvVerseDB[dvState.currentSituation] || [];
  // Filter by translation if available; else show any
  var filtered = pool.filter(function(v) { return v.translation === dvState.currentTranslation; });
  if (!filtered.length) filtered = pool; // fallback to all

  if (!filtered.length) {
    dvShowToast('No verses found for this selection.');
    return;
  }
  if (dvState.currentVerseIndex >= filtered.length) dvState.currentVerseIndex = 0;
  var verse = filtered[dvState.currentVerseIndex];
  dvState.currentVerse = verse;

  document.getElementById('dvEmptyState').classList.add('dv-hidden');
  var card = document.getElementById('dvVerseCard');
  card.classList.remove('dv-hidden');

  document.getElementById('dvVerseSitLabel').textContent = dvState.currentSituation.toUpperCase();
  document.getElementById('dvVerseText').textContent = '\u201C' + verse.text + '\u201D';
  document.getElementById('dvVerseRef').textContent = verse.ref;
  document.getElementById('dvVerseTrans').textContent = verse.translation;
  document.getElementById('dvVerseNote').textContent = verse.note;

  // Update fav icon
  dvUpdateFavIcon();
  // Close share dropdown
  dvCloseShareDropdown();
}

/* ===== NEXT VERSE ===== */
document.getElementById('dvNextBtn').addEventListener('click', function() {
  if (!dvState.currentSituation) return;
  var pool = dvVerseDB[dvState.currentSituation] || [];
  var filtered = pool.filter(function(v) { return v.translation === dvState.currentTranslation; });
  if (!filtered.length) filtered = pool;
  dvState.currentVerseIndex = (dvState.currentVerseIndex + 1) % filtered.length;
  dvShowVerse();
  dvShowToast('Next verse');
});

/* ===== FAVORITES ===== */
function dvLoadFavorites() {
  try { dvState.favorites = JSON.parse(localStorage.getItem('dv-favorites') || '[]'); } catch(e) { dvState.favorites = []; }
}
function dvSaveFavorites() {
  try { localStorage.setItem('dv-favorites', JSON.stringify(dvState.favorites)); } catch(e) {}
}
function dvIsVerseInFavorites(verse) {
  if (!verse) return false;
  return dvState.favorites.some(function(f) { return f.ref === verse.ref && f.text === verse.text; });
}
function dvUpdateFavIcon() {
  var icon = document.getElementById('dvFavIcon');
  if (dvIsVerseInFavorites(dvState.currentVerse)) {
    icon.setAttribute('fill', 'var(--dv-primary)');
    icon.setAttribute('stroke', 'var(--dv-primary)');
  } else {
    icon.setAttribute('fill', 'none');
    icon.setAttribute('stroke', 'currentColor');
  }
}

document.getElementById('dvFavBtn').addEventListener('click', function() {
  if (!dvState.currentVerse) return;
  if (dvIsVerseInFavorites(dvState.currentVerse)) {
    dvState.favorites = dvState.favorites.filter(function(f) {
      return !(f.ref === dvState.currentVerse.ref && f.text === dvState.currentVerse.text);
    });
    dvShowToast('Removed from saved');
  } else {
    dvState.favorites.push({
      text: dvState.currentVerse.text,
      ref: dvState.currentVerse.ref,
      translation: dvState.currentVerse.translation,
      note: dvState.currentVerse.note,
      situation: dvState.currentSituation
    });
    dvLogActivity('Saved Verse', dvState.currentVerse.ref + ' (' + dvState.currentVerse.translation + ')', dvState.currentVerse);
    dvShowToast('Verse saved');
  }
  dvSaveFavorites();
  dvUpdateFavIcon();
  if (document.getElementById('dvFavList')) dvRenderFavorites();
});

function dvRenderFavorites() {
  var list = document.getElementById('dvFavList');
  if (!dvState.favorites.length) {
    list.innerHTML = '<div class="dv-empty"><div class="dv-empty-icon"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div><div class="dv-empty-text">No saved verses yet. Tap Save on any verse.</div></div>';
    return;
  }
  var html = '';
  for (var i = 0; i < dvState.favorites.length; i++) {
    var f = dvState.favorites[i];
    html += '<div class="dv-fav-item">' +
      '<div class="dv-fav-text">\u201C' + f.text + '\u201D</div>' +
      '<div class="dv-fav-ref">' + f.ref + ' &middot; ' + f.translation + '</div>' +
      '</div>';
  }
  list.innerHTML = html;
}
/* ===== SHARE MODAL ===== */
function dvGetVerseShareText() {
  if (!dvState.currentVerse) return '';
  var baseText = '\u201C' + dvState.currentVerse.text + '\u201D - ' + dvState.currentVerse.ref + ' (' + dvState.currentVerse.translation + ')';
  var testimony = document.getElementById('dvShareTestimonyInput').value.trim();
  if (testimony) return testimony + '\n\n' + baseText;
  return baseText;
}
function dvOpenShareModal() {
  if (!dvState.currentVerse) { dvShowToast('Select a verse first'); return; }
  document.getElementById('dvShareTestimonyInput').value = ''; // Clears the box for a fresh entry
  document.getElementById('dvSharePreviewText').textContent = '\u201C' + dvState.currentVerse.text + '\u201D';
  document.getElementById('dvSharePreviewRef').textContent = dvState.currentVerse.ref + ' \u00B7 ' + dvState.currentVerse.translation;
  document.getElementById('dvShareModal').classList.add('dv-active');
  try { window.location.hash = '#share'; } catch(e) {}
}
function dvCloseShareModal() {
  document.getElementById('dvShareModal').classList.remove('dv-active');
  try { if (window.location.hash === '#share') history.replaceState(null, '', '#home'); } catch(e) {}
}
// Keep legacy stub so dvShowVerse() call doesn't break
function dvCloseShareDropdown() {}

document.getElementById('dvShareToggleBtn').addEventListener('click', dvOpenShareModal);
document.getElementById('dvCloseShareModal').addEventListener('click', dvCloseShareModal);
document.getElementById('dvShareExit').addEventListener('click', dvCloseShareModal);

document.getElementById('dvShareWa').addEventListener('click', function() {
  dvLogActivity('Shared Verse', 'Shared via WhatsApp', dvState.currentVerse);
  window.open('https://wa.me/?text=' + encodeURIComponent(dvGetVerseShareText()), '_blank');
  dvCloseShareModal();
});
document.getElementById('dvShareFb').addEventListener('click', function() {
  dvLogActivity('Shared Verse', 'Shared via Facebook', dvState.currentVerse);
  var text = dvGetVerseShareText();
  window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href) + '&quote=' + encodeURIComponent(text), '_blank');
  dvCloseShareModal();
});
document.getElementById('dvShareTw').addEventListener('click', function() {
  dvLogActivity('Shared Verse', 'Shared via Twitter / X', dvState.currentVerse);
  window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(dvGetVerseShareText()), '_blank');
  dvCloseShareModal();
});
document.getElementById('dvShareNat').addEventListener('click', function() {
dvLogActivity('Shared Verse', 'Shared via Device Menu', dvState.currentVerse);

var text = dvGetVerseShareText();
  if (navigator.share) {
    navigator.share({ title:'Verse For My Situation', text: text, url: window.location.href }).catch(function(){});
  } else {
    navigator.clipboard && navigator.clipboard.writeText(text).then(function() {
      dvShowToast('Verse copied to clipboard');
    });
  }
  dvCloseShareModal();
});

document.getElementById('dvCloseNoteModal').addEventListener('click', function() {
  document.getElementById('dvNoteModal').classList.remove('dv-active');
});

/* ===== INSTALL ===== */
function dvHandleInstall() {
  if (dvState.deferredInstall) {
    dvState.deferredInstall.prompt();
    dvState.deferredInstall.userChoice.then(function(r) {
      if (r.outcome === 'accepted') dvShowToast('App installed successfully!');
      dvState.deferredInstall = null;
    });
  } else {
    dvShowToast('Use browser menu to install this app');
  }
}
window.addEventListener('beforeinstallprompt', function(e) {
  e.preventDefault();
  dvState.deferredInstall = e;
});

/* ===== SHARE APP ===== */
function dvShareApp() {
  if (navigator.share) {
    navigator.share({ title:'Verse For My Situation', text:'Scripture for every situation — 100+ Bible verses, fully offline.', url: window.location.href }).catch(function(){});
  } else {
    navigator.clipboard && navigator.clipboard.writeText(window.location.href).then(function() {
      dvShowToast('App link copied');
    });
  }
}

/* ===== TODO MODAL ===== */
var dvTodos = [];
function dvLoadTodos() {
  try { dvTodos = JSON.parse(localStorage.getItem('dv-todos') || '[]'); } catch(e) { dvTodos = []; }
}
function dvSaveTodos() {
  try { localStorage.setItem('dv-todos', JSON.stringify(dvTodos)); } catch(e) {}
}
function dvBuildTodoHTML() {
  var html = '<div style="margin-bottom:14px;">' +
    '<div style="display:flex;gap:8px;width:100%;box-sizing:border-box;">' +
    '<input type="text" id="dvTodoInput" style="flex:1;min-width:0;padding:12px;border:2px solid var(--dv-border);border-radius:10px;background:var(--dv-bg);color:var(--dv-text);font-size:1rem;font-family:inherit;box-sizing:border-box;" placeholder="Add a task...">' +
    '<button id="dvTodoAdd" style="flex-shrink:0;padding:12px 18px;background:var(--dv-primary);color:#fff;border:none;border-radius:10px;font-size:1rem;font-family:inherit;cursor:pointer;font-weight:700;">Add</button>' +
    '</div></div>' +
    '<div id="dvTodoList"></div>';
  return html;
}
function dvRenderTodos() {
  var list = document.getElementById('dvTodoList');
  if (!list) return;
  if (!dvTodos.length) {
    list.innerHTML = '<div class="dv-empty"><div class="dv-empty-text">No tasks yet. Add one above.</div></div>';
    return;
  }
  var html = '';
  for (var i = 0; i < dvTodos.length; i++) {
    var t = dvTodos[i];
    html += '<div style="display:flex;align-items:center;gap:10px;padding:12px;background:var(--dv-surface);border-radius:10px;margin-bottom:8px;border:1px solid var(--dv-border);">' +
      '<input type="checkbox" ' + (t.done ? 'checked' : '') + ' data-dv-ti="' + i + '" style="width:22px;height:22px;accent-color:var(--dv-primary);cursor:pointer;">' +
      '<span style="flex:1;font-size:1rem;' + (t.done ? 'text-decoration:line-through;color:var(--dv-text-sub);' : '') + '">' + t.text + '</span>' +
      '<button data-dv-tdel="' + i + '" style="background:transparent;border:none;color:#DC2626;cursor:pointer;padding:4px;font-size:1.1rem;">X</button>' +
      '</div>';
  }
  list.innerHTML = html;
}
function dvBindTodoEvents() {
  dvLoadTodos();
  dvRenderTodos();
  var addBtn = document.getElementById('dvTodoAdd');
  var input = document.getElementById('dvTodoInput');
  if (addBtn) addBtn.addEventListener('click', function() {
    var val = input.value.trim();
    if (!val) return;
    dvTodos.push({ text: val, done: false });
    dvSaveTodos();
    input.value = '';
    dvRenderTodos();
    dvBindTodoCheckboxes();
  });
  if (input) input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') addBtn.click();
  });
  dvBindTodoCheckboxes();
}
function dvBindTodoCheckboxes() {
  var list = document.getElementById('dvTodoList');
  if (!list) return;
  list.querySelectorAll('input[data-dv-ti]').forEach(function(cb) {
    cb.addEventListener('change', function() {
      var idx = parseInt(cb.getAttribute('data-dv-ti'));
      dvTodos[idx].done = cb.checked;
      dvSaveTodos();
      dvRenderTodos();
      dvBindTodoCheckboxes();
    });
  });
  list.querySelectorAll('button[data-dv-tdel]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var idx = parseInt(btn.getAttribute('data-dv-tdel'));
      dvTodos.splice(idx, 1);
      dvSaveTodos();
      dvRenderTodos();
      dvBindTodoCheckboxes();
    });
  });
}

/* ===== PAGE ROUTING (Hash) ===== */
var dvPages = { home:'dvPageHome', user:'dvPageUser', search:'dvPageSearch' };
function dvNavigate(page) {
  Object.keys(dvPages).forEach(function(k) {
    document.getElementById(dvPages[k]).classList.toggle('dv-page-active', k === page);
  });
  document.querySelectorAll('.dv-nav-item').forEach(function(btn) {
    btn.classList.toggle('dv-nav-active', btn.getAttribute('data-dv-page') === page);
  });
  if (page === 'user') dvRenderActivity();
  try { window.location.hash = '#' + page; } catch(e) {}
}
document.querySelectorAll('.dv-nav-item').forEach(function(btn) {
  btn.addEventListener('click', function() {
    dvNavigate(btn.getAttribute('data-dv-page'));
  });
});
window.addEventListener('hashchange', function() {
  var hash = window.location.hash.replace('#', '');
  if (hash.indexOf('modal-') === 0) return;
  if (dvPages[hash] || hash === 'game') dvNavigate(hash);
  else if (!hash) dvNavigate('home');
});

/* ===== SERVICE WORKER ===== */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js', { scope:'./' }).catch(function() {});
  });
}

/* ===== SIDEBAR FRAGMENTS (left-sidebar.html / right-sidebar.html) ===== */
function dvLoadFragment(url, mountId) {
  return fetch(url).then(function(r) {
    if (!r.ok) throw new Error();
    return r.text();
  }).then(function(html) {
    document.getElementById(mountId).innerHTML = html;
  });
}

function dvBindSidebarControls() {
  document.getElementById('dvCloseLeft').addEventListener('click', dvCloseAllSidebars);
  document.getElementById('dvDarkToggle').addEventListener('click', function() {
    dvSetDark(!dvState.darkMode);
  });
}

/* ===== INIT ===== */
function dvInit() {
  var req = window.indexedDB.open('dvBibleDB', 1);
  req.onupgradeneeded = function(e) { 
    var db = e.target.result;
    db.createObjectStore('user'); 
    db.createObjectStore('activity', { autoIncrement: true }); 
  };
  req.onsuccess = function(e) { 
    dvDB = e.target.result; 
    dvProcessUser(); 
  };
  // Load persisted settings
  var savedTheme = localStorage.getItem('dv-theme') || 'blue';
  var savedDark = localStorage.getItem('dv-dark') === '1';
  dvSetTheme(savedTheme);
  dvSetDark(savedDark);
  dvLoadFavorites();
  dvLoadTodos();

  // Build UI
  dvBuildLeftNav();
  dvBuildRightNav();
  dvBuildSituations();
  dvBuildTranslations();

  // Hash routing init
  try {
    var hash = window.location.hash.replace('#', '');
    if (dvPages[hash] || hash === 'game') dvNavigate(hash);
    else dvNavigate('home');
  } catch(e) { dvNavigate('home'); }
  
  // Fire the update enforcer
  dvCheckForUpdates();
}

Promise.all([
  dvLoadFragment('left-sidebar.html', 'dvLeftSidebarMount'),
  dvLoadFragment('right-sidebar.html', 'dvRightSidebarMount')
]).then(function() {
  dvBindSidebarControls();
  dvInit();
}).catch(function() {});
